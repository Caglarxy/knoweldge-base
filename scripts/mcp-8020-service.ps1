[CmdletBinding()]
param(
    [ValidateSet("start", "restart", "stop", "status")]
    [string]$Action = "start"
)

Set-StrictMode -Version Latest
$ErrorActionPreference = "Stop"
. "$PSScriptRoot\service-common.ps1"

$backend = (Resolve-Path (Join-Path $PSScriptRoot "..\backend")).Path
$python = Join-Path $backend ".mcp-venv\Scripts\python.exe"
$runtime = Join-Path $backend "data\runtime"
$logs = Join-Path $backend "data\logs"
$isProduction = Test-KbProductionEnvironment -BackendPath $backend
$port = if ($isProduction) { 8020 } else { 9020 }
$pidFile = Join-Path $runtime "mcp-$port.pid"
$name = "knowledge-base-mcp-$port"
$pattern = [regex]::Escape($backend) + ".*app\.mcp_server"
$environment = @{
    PYTHONPATH = $backend
    MCP_TRANSPORT = "streamable-http"
    MCP_HOST = "0.0.0.0"
    MCP_PORT = "$port"
    MCP_PATH = "/mcp"
    MCP_STATELESS_HTTP = "true"
}

if (-not (Test-Path -LiteralPath $python)) {
    throw "MCP Python environment not found: $python"
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
            -Arguments @("-m", "app.mcp_server") `
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
            -Arguments @("-m", "app.mcp_server") `
            -WorkingDirectory $backend `
            -Environment $environment `
            -LogDirectory $logs `
            -PidFile $pidFile
    }
}
