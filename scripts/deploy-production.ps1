[CmdletBinding()]
param(
    [string]$TargetRoot = "D:\knoweldge-base",
    [string]$PythonExe = "",
    [switch]$SkipInstall
)

Set-StrictMode -Version Latest
$ErrorActionPreference = "Stop"

$sourceRoot = (Resolve-Path (Join-Path $PSScriptRoot "..")).Path
$targetFullPath = [System.IO.Path]::GetFullPath($TargetRoot)
$sourceFullPath = [System.IO.Path]::GetFullPath($sourceRoot)

if ($targetFullPath.TrimEnd("\") -ieq $sourceFullPath.TrimEnd("\")) {
    throw "TargetRoot must be different from the source project directory."
}

New-Item -ItemType Directory -Path $targetFullPath -Force | Out-Null

function Remove-LegacyDeploymentDirectory {
    param(
        [string]$Path
    )

    if (-not (Test-Path -LiteralPath $Path)) {
        return
    }
    $resolvedPath = (Resolve-Path -LiteralPath $Path).Path
    $targetPrefix = $targetFullPath.TrimEnd("\") + "\"
    if (-not $resolvedPath.StartsWith($targetPrefix, [System.StringComparison]::OrdinalIgnoreCase)) {
        throw "Refusing to remove a path outside TargetRoot: $resolvedPath"
    }
    Remove-Item -LiteralPath $resolvedPath -Recurse -Force
}

# Remove only duplicate directories left by the first version of this
# deployment script. Never touch production data, configuration or storage.
Remove-LegacyDeploymentDirectory (Join-Path $targetFullPath "backend\app\app")
Remove-LegacyDeploymentDirectory (Join-Path $targetFullPath "scripts\scripts")

function Copy-Directory {
    param(
        [string]$Source,
        [string]$Target
    )

    if (Test-Path -LiteralPath $Source) {
        New-Item -ItemType Directory -Path $Target -Force | Out-Null
        Get-ChildItem -LiteralPath $Source -Force |
            Copy-Item -Destination $Target -Recurse -Force
    }
}

function Copy-FileIfExists {
    param(
        [string]$Source,
        [string]$Target
    )

    if (Test-Path -LiteralPath $Source) {
        New-Item -ItemType Directory -Path (Split-Path -Parent $Target) -Force | Out-Null
        Copy-Item -LiteralPath $Source -Destination $Target -Force
    }
}

# Copy only runtime files. Development data, virtual environments and preview
# test dependencies stay out of the production directory.
Copy-Directory (Join-Path $sourceRoot "backend\app") (Join-Path $targetFullPath "backend\app")
Copy-FileIfExists (Join-Path $sourceRoot "backend\requirements.txt") (Join-Path $targetFullPath "backend\requirements.txt")
Copy-FileIfExists (Join-Path $sourceRoot "backend\requirements-mcp.txt") (Join-Path $targetFullPath "backend\requirements-mcp.txt")
Copy-Directory (Join-Path $sourceRoot "frontend\vendor") (Join-Path $targetFullPath "frontend\vendor")

$frontendTarget = Join-Path $targetFullPath "frontend"
New-Item -ItemType Directory -Path $frontendTarget -Force | Out-Null
Get-ChildItem -LiteralPath (Join-Path $sourceRoot "frontend") -File |
    Where-Object { $_.Extension -in @(".html", ".js", ".css") } |
    Copy-Item -Destination $frontendTarget -Force

Copy-Directory (Join-Path $sourceRoot "scripts") (Join-Path $targetFullPath "scripts")
Copy-Directory (Join-Path $sourceRoot "skills") (Join-Path $targetFullPath "skills")
Get-ChildItem -LiteralPath $sourceRoot -File -Filter "*.md" |
    Copy-Item -Destination $targetFullPath -Force
Copy-FileIfExists (Join-Path $sourceRoot ".env.example") (Join-Path $targetFullPath ".env.example")

$backendTarget = Join-Path $targetFullPath "backend"
$dataTarget = Join-Path $backendTarget "data"
foreach ($directory in @("logs", "runtime", "storage", "certs")) {
    New-Item -ItemType Directory -Path (Join-Path $dataTarget $directory) -Force | Out-Null
}

$envPath = Join-Path $backendTarget ".env"
if (-not (Test-Path -LiteralPath $envPath)) {
    $secretBytes = New-Object byte[] 32
    [System.Security.Cryptography.RandomNumberGenerator]::Fill($secretBytes)
    $jwtSecret = [Convert]::ToHexString($secretBytes).ToLowerInvariant()
    @"
APP_NAME=knowledge-base
APP_ENV=production
APP_HOST=0.0.0.0
APP_PORT=8017
LOG_LEVEL=INFO

DATABASE_URL=sqlite:///./data/knowledge_base.db
STORAGE_BACKEND=local
LOCAL_STORAGE_PATH=./data/storage
MAX_UPLOAD_SIZE_BYTES=104857600
MAX_FOLDER_DEPTH=10
RECYCLE_BIN_RETENTION_DAYS=90

JWT_SECRET_KEY=$jwtSecret
JWT_ACCESS_TOKEN_EXPIRE_MINUTES=120
ADMIN_USERNAMES=admin,任宝石

MCP_TRANSPORT=stdio
MCP_HOST=127.0.0.1
MCP_PORT=8020
MCP_PATH=/mcp
MCP_STATELESS_HTTP=true
KB_MCP_TOKEN=
MCP_MAX_CONTENT_CHARS=30000
"@ | Set-Content -LiteralPath $envPath -Encoding UTF8
    Write-Host "Created production configuration: $envPath"
} else {
    Write-Host "Kept existing production configuration: $envPath"
}

if (-not $SkipInstall) {
    if (-not $PythonExe) {
        $pythonCommand = Get-Command python -ErrorAction Stop
        $PythonExe = $pythonCommand.Source
    }

    $backendVenv = Join-Path $backendTarget ".venv"
    $mcpVenv = Join-Path $backendTarget ".mcp-venv"
    if (-not (Test-Path -LiteralPath (Join-Path $backendVenv "Scripts\python.exe"))) {
        & $PythonExe -m venv $backendVenv
    }
    if (-not (Test-Path -LiteralPath (Join-Path $mcpVenv "Scripts\python.exe"))) {
        & $PythonExe -m venv $mcpVenv
    }

    & (Join-Path $backendVenv "Scripts\python.exe") -m pip install --disable-pip-version-check -r (Join-Path $backendTarget "requirements.txt")
    & (Join-Path $mcpVenv "Scripts\python.exe") -m pip install --disable-pip-version-check -r (Join-Path $backendTarget "requirements-mcp.txt")
}

$initPython = Join-Path $backendTarget ".venv\Scripts\python.exe"
if (Test-Path -LiteralPath $initPython) {
    Push-Location $backendTarget
    try {
        $env:PYTHONPATH = "."
        & $initPython -m app.db.init_db
    } finally {
        Pop-Location
    }
} else {
    Write-Warning "Python environment was not installed. Run this script again without -SkipInstall."
}

Write-Host ""
Write-Host "Production deployment prepared at: $targetFullPath"
Write-Host "Main service: $targetFullPath\scripts\main-service.ps1"
Write-Host "MCP 8020:     $targetFullPath\scripts\mcp-8020-service.ps1"
Write-Host "MCP 8024:     $targetFullPath\scripts\mcp-8024-service.ps1"
Write-Host "Configuration: $envPath"
