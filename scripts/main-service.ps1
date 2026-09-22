[CmdletBinding()]
param(
    [ValidateSet("start", "restart", "stop", "status")]
    [string]$Action = "start",
    [switch]$Reload
)

Set-StrictMode -Version Latest
$ErrorActionPreference = "Stop"
. "$PSScriptRoot\service-common.ps1"

$backend = (Resolve-Path (Join-Path $PSScriptRoot "..\backend")).Path
$python = Join-Path $backend ".venv\Scripts\python.exe"
$runtime = Join-Path $backend "data\runtime"
$logs = Join-Path $backend "data\logs"
$isProduction = Test-KbProductionEnvironment -BackendPath $backend
$port = if ($isProduction) { 8017 } else { 9017 }
$pidFile = Join-Path $runtime "main-service-$port.pid"
$name = "knowledge-base-main-$port"
$pattern = "uvicorn app\.main:app.*--port\s+$port"
$uvicornArguments = @("-m", "uvicorn", "app.main:app", "--host", "0.0.0.0", "--port", "$port")
if ($Reload) {
    $uvicornArguments += "--reload"
}

if (-not (Test-Path -LiteralPath $python)) {
    throw "Backend Python environment not found: $python"
}
New-Item -ItemType Directory -Path $runtime -Force | Out-Null

switch ($Action) {
    "stop" {
        Stop-KbService -Name $name -Port $port -ProcessPattern $pattern -PidFile $pidFile
    }
    "status" {
        Show-KbServiceStatus -Name $name -Port $port -ProcessPattern $pattern -PidFile $pidFile
    }
    "restart" {
        Stop-KbService -Name $name -Port $port -ProcessPattern $pattern -PidFile $pidFile
        Start-KbService `
            -Name $name `
            -Port $port `
            -ProcessPattern $pattern `
            -PythonPath $python `
            -Arguments $uvicornArguments `
            -WorkingDirectory $backend `
            -Environment @{ PYTHONPATH = "." } `
            -LogDirectory $logs `
            -PidFile $pidFile
    }
    default {
        Start-KbService `
            -Name $name `
            -Port $port `
            -ProcessPattern $pattern `
            -PythonPath $python `
            -Arguments $uvicornArguments `
            -WorkingDirectory $backend `
            -Environment @{ PYTHONPATH = "." } `
            -LogDirectory $logs `
            -PidFile $pidFile
    }
}
