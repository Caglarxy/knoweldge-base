[CmdletBinding()]
param(
    [ValidateSet("start", "restart", "stop", "status")]
    [string]$Action = "start"
)

Set-StrictMode -Version Latest
$ErrorActionPreference = "Stop"
. "$PSScriptRoot\service-common.ps1"

$backend = (Resolve-Path (Join-Path $PSScriptRoot "..\backend")).Path
$python = Join-Path $backend ".venv\Scripts\python.exe"
$runtime = Join-Path $backend "data\runtime"
$logs = Join-Path $backend "data\logs"
$isProduction = Test-KbProductionEnvironment -BackendPath $backend
$port = if ($isProduction) { 8030 } else { 9030 }
$pidFile = Join-Path $runtime "rest-api-$port.pid"
$name = "knowledge-base-rest-api-$port"
$pattern = [regex]::Escape($backend) + ".*app\.rest_api_server"
$environment = @{
    PYTHONPATH = $backend
    REST_API_HOST = "0.0.0.0"
    REST_API_PORT = "$port"
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
            -Arguments @("-m", "app.rest_api_server") `
            -WorkingDirectory $backend `
            -Environment $environment `
            -LogDirectory $logs `
            -PidFile $pidFile
    }
    default {
        Start-KbService `
            -Name $name `
            -Port $port `
            -ProcessPattern $pattern `
            -PythonPath $python `
            -Arguments @("-m", "app.rest_api_server") `
            -WorkingDirectory $backend `
            -Environment $environment `
            -LogDirectory $logs `
            -PidFile $pidFile
    }
}
