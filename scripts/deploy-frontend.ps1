param(
    [string]$Bucket,
    [string]$DistributionId,
    [string]$WebsiteUrl,
    [string]$Profile,
    [string]$EnvDir = "infrastructure\\environments\\prod-866607866116",
    [string]$FrontendDir = "frontend",
    [switch]$SkipBuild,
    [switch]$NoProxy
)

$ErrorActionPreference = "Stop"

function Set-NoProxy {
    $env:HTTP_PROXY = ""
    $env:HTTPS_PROXY = ""
    $env:ALL_PROXY = ""
}

function Get-TerraformCmd {
    $localTf = Join-Path $PSScriptRoot "..\\.tools\\terraform\\terraform.exe"
    if (Test-Path $localTf) {
        return (Resolve-Path $localTf).Path
    }
    return "terraform"
}

function Get-TerraformOutput([string]$name) {
    $tf = Get-TerraformCmd
    Push-Location $EnvDir
    try {
        & $tf output -raw $name 2>$null
    } finally {
        Pop-Location
    }
}

if ($NoProxy) {
    Set-NoProxy
}

$awsArgs = @()
if ($Profile) {
    $awsArgs = @("--profile", $Profile)
    $env:AWS_PROFILE = $Profile
    $env:AWS_SDK_LOAD_CONFIG = "1"
}

if (-not $Bucket) {
    $Bucket = Get-TerraformOutput "s3_bucket_name"
}
if (-not $DistributionId) {
    $DistributionId = Get-TerraformOutput "cloudfront_distribution_id"
}
if (-not $WebsiteUrl) {
    $WebsiteUrl = Get-TerraformOutput "website_url"
}

if (-not $Bucket -or -not $DistributionId) {
    Write-Error "Missing required values. Provide -Bucket and -DistributionId, or ensure Terraform outputs are available in $EnvDir."
}

Write-Host "Deploying RescueNet360 marketing frontend" -ForegroundColor Cyan
Write-Host "Bucket: $Bucket"
Write-Host "Distribution: $DistributionId"

if (-not (Get-Command aws -ErrorAction SilentlyContinue)) {
    Write-Error "AWS CLI not found."
}
if (-not (Get-Command npm -ErrorAction SilentlyContinue)) {
    Write-Error "npm not found."
}

Push-Location $FrontendDir
try {
    if (-not $SkipBuild) {
        if (-not (Test-Path "node_modules")) {
            npm install
        }
        npm run build
    }

    if (-not (Test-Path "dist")) {
        Write-Error "Build output not found at dist/."
    }

    & aws @awsArgs s3 sync dist/ ("s3://{0}/" -f $Bucket) --delete `
        --cache-control "public,max-age=31536000,immutable" `
        --exclude "index.html"

    & aws @awsArgs s3 cp dist/index.html ("s3://{0}/index.html" -f $Bucket) `
        --cache-control "public,max-age=0,must-revalidate"
} finally {
    Pop-Location
}

& aws @awsArgs cloudfront create-invalidation `
    --distribution-id $DistributionId `
    --paths "/*" | Out-Null

Write-Host "Deployed. Site URL: $WebsiteUrl" -ForegroundColor Green
