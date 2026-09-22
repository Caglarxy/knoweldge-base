[CmdletBinding()]
param(
    [ValidateSet("start", "restart", "stop", "status")]
    [string]$Action = "start",
    [string]$PublicUrl = "",
    [string]$CertificateFile = "",
    [string]$PrivateKeyFile = ""
)

Set-StrictMode -Version Latest
$ErrorActionPreference = "Stop"
. "$PSScriptRoot\service-common.ps1"

$backend = (Resolve-Path (Join-Path $PSScriptRoot "..\backend")).Path
$python = Join-Path $backend ".mcp-venv\Scripts\python.exe"
$runtime = Join-Path $backend "data\runtime"
$logs = Join-Path $backend "data\logs"
$isProduction = Test-KbProductionEnvironment -BackendPath $backend
$port = if ($isProduction) { 8024 } else { 9024 }
$certificateName = if ($isProduction) { "mcp-8024" } else { "mcp-9024" }
$certificateDirectory = Join-Path $backend "data\certs\$certificateName"
$certificatePath = Join-Path $certificateDirectory "$certificateName-cert.pem"
$privateKeyPath = Join-Path $certificateDirectory "$certificateName-key.pem"
$pidFile = Join-Path $runtime "mcp-$port.pid"
$name = "knowledge-base-mcp-$port"
$pattern = [regex]::Escape($backend) + ".*app\.mcp_dialogue_server"
$configuredPublicUrl = $PublicUrl
if (-not $configuredPublicUrl) {
    $publicUrlVariable = if ($isProduction) { "MCP_8024_PUBLIC_URL" } else { "MCP_9024_PUBLIC_URL" }
    $configuredPublicUrl = [Environment]::GetEnvironmentVariable($publicUrlVariable)
}
$publicUrlWasProvided = [bool]$configuredPublicUrl
$configuredCertificateFile = $CertificateFile
if (-not $configuredCertificateFile) {
    $configuredCertificateFile = $env:MCP_SSL_CERTFILE
}
$configuredPrivateKeyFile = $PrivateKeyFile
if (-not $configuredPrivateKeyFile) {
    $configuredPrivateKeyFile = $env:MCP_SSL_KEYFILE
}
$lanIp = @(
    Get-NetIPAddress -AddressFamily IPv4 -ErrorAction SilentlyContinue |
        Where-Object {
            $_.IPAddress -notmatch "^(127\.|169\.254\.)" -and
            $_.AddressState -eq "Preferred"
        } |
        Select-Object -ExpandProperty IPAddress
) | Select-Object -First 1
if (-not $lanIp) {
    $lanIp = "127.0.0.1"
}

if (-not $configuredPublicUrl) {
    $configuredPublicUrl = "https://${lanIp}:$port"
}
$publicUri = [Uri]$configuredPublicUrl
if ($publicUri.Scheme -ne "https") {
    throw "8024 MCP_PUBLIC_URL must use HTTPS: $configuredPublicUrl"
}

$hasCustomCertificate = [bool]$configuredCertificateFile -or [bool]$configuredPrivateKeyFile
if ($hasCustomCertificate -and (-not $configuredCertificateFile -or -not $configuredPrivateKeyFile)) {
    throw "CertificateFile and PrivateKeyFile must be configured together"
}
if ($publicUrlWasProvided -and -not $hasCustomCertificate) {
    throw "A custom PublicUrl requires CertificateFile and PrivateKeyFile"
}
if ($hasCustomCertificate) {
    if (-not (Test-Path -LiteralPath $configuredCertificateFile) -or
        -not (Test-Path -LiteralPath $configuredPrivateKeyFile)) {
        throw "Configured MCP 8024 certificate files were not found."
    }
    $certificatePath = (Resolve-Path -LiteralPath $configuredCertificateFile).Path
    $privateKeyPath = (Resolve-Path -LiteralPath $configuredPrivateKeyFile).Path
} elseif (-not (Test-Path -LiteralPath $certificatePath) -or -not (Test-Path -LiteralPath $privateKeyPath)) {
    & (Join-Path $PSScriptRoot "create-mcp-8024-cert.ps1") -IpAddress $lanIp -CertificateName $certificateName
}

$environment = @{
    PYTHONPATH = $backend
    MCP_TRANSPORT = "streamable-http"
    MCP_HOST = "0.0.0.0"
    MCP_PORT = "$port"
    MCP_PATH = "/mcp-dialogue"
    MCP_STATELESS_HTTP = "false"
    MCP_OAUTH_ISSUER_URL = $configuredPublicUrl.TrimEnd("/")
    MCP_PUBLIC_URL = $configuredPublicUrl.TrimEnd("/")
    MCP_SSL_CERTFILE = $certificatePath
    MCP_SSL_KEYFILE = $privateKeyPath
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
            -Arguments @("-m", "app.mcp_dialogue_server") `
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
            -Arguments @("-m", "app.mcp_dialogue_server") `
            -WorkingDirectory $backend `
            -Environment $environment `
            -LogDirectory $logs `
            -PidFile $pidFile
    }
}
