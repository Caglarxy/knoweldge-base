[CmdletBinding()]
param(
    [string[]]$IpAddress,
    [string]$CertificateName = "mcp-8024"
)

Set-StrictMode -Version Latest
$ErrorActionPreference = "Stop"

$projectRoot = (Resolve-Path (Join-Path $PSScriptRoot "..")).Path
$backend = Join-Path $projectRoot "backend"
$certificateDirectory = Join-Path $backend "data\certs\$CertificateName"
$certificatePath = Join-Path $certificateDirectory "$CertificateName-cert.pem"
$privateKeyPath = Join-Path $certificateDirectory "$CertificateName-key.pem"

if (-not $IpAddress -or $IpAddress.Count -eq 0) {
    $IpAddress = @(
        Get-NetIPAddress -AddressFamily IPv4 -ErrorAction SilentlyContinue |
            Where-Object {
                $_.IPAddress -notmatch "^(127\.|169\.254\.)" -and
                $_.AddressState -eq "Preferred"
            } |
            Select-Object -ExpandProperty IPAddress
    )
}

$IpAddress = @(
    $IpAddress |
        Where-Object { $_ -match "^\d{1,3}(\.\d{1,3}){3}$" } |
        Sort-Object -Unique
)
if ($IpAddress.Count -eq 0) {
    throw "No usable LAN IPv4 address was found. Pass -IpAddress explicitly."
}

New-Item -ItemType Directory -Path $certificateDirectory -Force | Out-Null

$rsa = [System.Security.Cryptography.RSA]::Create(2048)
try {
    $request = [System.Security.Cryptography.X509Certificates.CertificateRequest]::new(
        "CN=$($IpAddress[0])",
        $rsa,
        [System.Security.Cryptography.HashAlgorithmName]::SHA256,
        [System.Security.Cryptography.RSASignaturePadding]::Pkcs1
    )

    $sanBuilder = [System.Security.Cryptography.X509Certificates.SubjectAlternativeNameBuilder]::new()
    $sanBuilder.AddDnsName("localhost")
    $sanBuilder.AddIpAddress([System.Net.IPAddress]::Parse("127.0.0.1"))
    foreach ($address in $IpAddress) {
        $sanBuilder.AddIpAddress([System.Net.IPAddress]::Parse($address))
    }
    $request.CertificateExtensions.Add($sanBuilder.Build())
    $request.CertificateExtensions.Add(
        [System.Security.Cryptography.X509Certificates.X509BasicConstraintsExtension]::new(
            $false,
            $false,
            0,
            $false
        )
    )
    $request.CertificateExtensions.Add(
        [System.Security.Cryptography.X509Certificates.X509KeyUsageExtension]::new(
            [System.Security.Cryptography.X509Certificates.X509KeyUsageFlags]::DigitalSignature -bor
                [System.Security.Cryptography.X509Certificates.X509KeyUsageFlags]::KeyEncipherment,
            $false
        )
    )
    $oids = [System.Security.Cryptography.OidCollection]::new()
    [void]$oids.Add([System.Security.Cryptography.Oid]::new("1.3.6.1.5.5.7.3.1"))
    $request.CertificateExtensions.Add(
        [System.Security.Cryptography.X509Certificates.X509EnhancedKeyUsageExtension]::new($oids, $false)
    )

    $certificate = $request.CreateSelfSigned(
        [DateTimeOffset]::Now.AddMinutes(-5),
        [DateTimeOffset]::Now.AddYears(2)
    )
    try {
        [System.IO.File]::WriteAllText($certificatePath, $certificate.ExportCertificatePem())
        [System.IO.File]::WriteAllText($privateKeyPath, $rsa.ExportPkcs8PrivateKeyPem())
    } finally {
        $certificate.Dispose()
    }
} finally {
    $rsa.Dispose()
}

Write-Host "Created self-signed MCP certificate:"
Write-Host "  Certificate: $certificatePath"
Write-Host "  Private key: $privateKeyPath"
Write-Host "  SAN IPs:     $($IpAddress -join ', ')"
