Set-StrictMode -Version Latest

function Test-KbProductionEnvironment {
    param(
        [string]$BackendPath
    )

    $environmentFile = Join-Path $BackendPath ".env"
    if (-not (Test-Path -LiteralPath $environmentFile)) {
        return $false
    }

    $environmentLine = Get-Content -LiteralPath $environmentFile -ErrorAction SilentlyContinue |
        Where-Object { $_ -match "^\s*APP_ENV\s*=" } |
        Select-Object -First 1
    return $null -ne $environmentLine -and $environmentLine -match "^\s*APP_ENV\s*=\s*production\s*$"
}

function Get-KbProcessSnapshot {
    return @(Get-CimInstance Win32_Process -ErrorAction SilentlyContinue)
}

function Get-KbDescendantProcessIds {
    param(
        [int[]]$RootIds,
        [object[]]$Processes
    )

    $known = [System.Collections.Generic.HashSet[int]]::new()
    foreach ($rootId in $RootIds) {
        [void]$known.Add($rootId)
    }

    $changed = $true
    while ($changed) {
        $changed = $false
        foreach ($process in $Processes) {
            if ($known.Contains([int]$process.ParentProcessId) -and $known.Add([int]$process.ProcessId)) {
                $changed = $true
            }
        }
    }

    return @($known)
}

function Get-KbServiceProcessIds {
    param(
        [int]$Port,
        [string]$ProcessPattern
    )

    $processes = @(Get-KbProcessSnapshot)
    $ids = @()
    $connections = Get-NetTCPConnection -State Listen -LocalPort $Port -ErrorAction SilentlyContinue
    $portIds = @($connections | Select-Object -ExpandProperty OwningProcess)
    $ids += $portIds
    $ids += @(Get-KbDescendantProcessIds -RootIds $portIds -Processes $processes)

    $ids += @(
        $processes |
            Where-Object {
                $_.Name -in @("python.exe", "pythonw.exe") -and
                $_.CommandLine -match $ProcessPattern
            } |
            Select-Object -ExpandProperty ProcessId
    )

    return @($ids | Where-Object { $_ -and $_ -gt 0 } | Sort-Object -Unique)
}

function Stop-KbService {
    param(
        [string]$Name,
        [int]$Port,
        [string]$ProcessPattern,
        [string]$PidFile
    )

    $processes = @(Get-KbProcessSnapshot)
    $connections = Get-NetTCPConnection -State Listen -LocalPort $Port -ErrorAction SilentlyContinue
    $portIds = @($connections | Select-Object -ExpandProperty OwningProcess)
    $trustedIds = @(Get-KbDescendantProcessIds -RootIds $portIds -Processes $processes)
    $ids = @(Get-KbServiceProcessIds -Port $Port -ProcessPattern $ProcessPattern)
    if (Test-Path -LiteralPath $PidFile) {
        $savedId = [int](Get-Content -LiteralPath $PidFile -Raw).Trim()
        if ($savedId -gt 0) {
            $ids += $savedId
        }
    }
    $ids = @($ids | Sort-Object -Unique)

    if ($ids.Count -eq 0) {
        Remove-Item -LiteralPath $PidFile -Force -ErrorAction SilentlyContinue
        Write-Host "$Name is not running."
        return
    }

    foreach ($id in $ids) {
        $process = $processes | Where-Object { $_.ProcessId -eq $id } | Select-Object -First 1
        if ($null -eq $process) {
            continue
        }
        $commandLine = $process.CommandLine
        if ($process.Name -notin @("python.exe", "pythonw.exe")) {
            Write-Warning "Skipping non-Python process PID=$id"
            continue
        }
        if ($trustedIds -notcontains $id -and $commandLine -notmatch $ProcessPattern) {
            Write-Warning "Skipping unexpected process PID=$id"
            continue
        }
        Stop-Process -Id $id -Force -ErrorAction SilentlyContinue
    }

    for ($i = 0; $i -lt 30; $i++) {
        Start-Sleep -Milliseconds 200
        if (@(Get-KbServiceProcessIds -Port $Port -ProcessPattern $ProcessPattern).Count -eq 0) {
            break
        }
    }

    Remove-Item -LiteralPath $PidFile -Force -ErrorAction SilentlyContinue
    if (@(Get-KbServiceProcessIds -Port $Port -ProcessPattern $ProcessPattern).Count -gt 0) {
        throw "$Name did not stop cleanly."
    }
    Write-Host "$Name stopped."
}

function Start-KbService {
    param(
        [string]$Name,
        [int]$Port,
        [string]$ProcessPattern,
        [string]$PythonPath,
        [string[]]$Arguments,
        [string]$WorkingDirectory,
        [hashtable]$Environment,
        [string]$LogDirectory,
        [string]$PidFile
    )

    if (@(Get-KbServiceProcessIds -Port $Port -ProcessPattern $ProcessPattern).Count -gt 0) {
        Write-Host "$Name is already running."
        return
    }

    New-Item -ItemType Directory -Path $LogDirectory -Force | Out-Null
    foreach ($item in $Environment.GetEnumerator()) {
        Set-Item -Path "Env:$($item.Key)" -Value ([string]$item.Value)
    }

    $stdout = Join-Path $LogDirectory "$Name.stdout.log"
    $stderr = Join-Path $LogDirectory "$Name.stderr.log"
    $process = Start-Process `
        -FilePath $PythonPath `
        -ArgumentList $Arguments `
        -WorkingDirectory $WorkingDirectory `
        -WindowStyle Hidden `
        -RedirectStandardOutput $stdout `
        -RedirectStandardError $stderr `
        -PassThru

    Set-Content -LiteralPath $PidFile -Value $process.Id -Encoding ASCII
    for ($i = 0; $i -lt 40; $i++) {
        Start-Sleep -Milliseconds 250
        if (@(Get-KbServiceProcessIds -Port $Port -ProcessPattern $ProcessPattern).Count -gt 0) {
            Write-Host "$Name started. PID=$($process.Id), port=$Port"
            return
        }
        if ($process.HasExited) {
            $errorText = Get-Content -LiteralPath $stderr -Raw -ErrorAction SilentlyContinue
            throw "$Name failed to start. $errorText"
        }
    }

    throw "$Name did not start within the expected time. See $stderr"
}

function Show-KbServiceStatus {
    param(
        [string]$Name,
        [int]$Port,
        [string]$ProcessPattern,
        [string]$PidFile
    )

    $ids = @(Get-KbServiceProcessIds -Port $Port -ProcessPattern $ProcessPattern)
    if ($ids.Count -eq 0) {
        Write-Host "$Name is stopped. port=$Port"
        return
    }

    Write-Host "$Name is running. port=$Port PID=$($ids -join ',')"
}
