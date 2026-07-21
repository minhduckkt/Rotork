param(
  [Parameter(Mandatory = $true)][string]$LibraryRoot,
  [Parameter(Mandatory = $true)][string]$SiteRoot
)

$sourcePath = Join-Path $LibraryRoot 'website_ready\second_pass\products_rechecked.json'
$products = Get-Content -Raw -LiteralPath $sourcePath | ConvertFrom-Json
$output = @()

foreach ($rangeSlug in @('hanbay-m-range', 'hanbay-r-range')) {
  $rangeLetter = if ($rangeSlug -eq 'hanbay-m-range') { 'M' } else { 'R' }
  $imageDirectory = Join-Path $SiteRoot "public\images\products\$rangeSlug"
  New-Item -ItemType Directory -Force -Path $imageDirectory | Out-Null

  foreach ($product in @($products | Where-Object { $_.product_range_slug -eq $rangeSlug -and $_.website_status -eq 'READY' })) {
    $specMap = @{}
    $specs = @()
    foreach ($item in @($product.specification_items)) {
      $label = [string]$item.label
      $value = [string]$item.value
      if (-not [string]::IsNullOrWhiteSpace($label) -and -not [string]::IsNullOrWhiteSpace($value)) {
        if (-not $specMap.ContainsKey($label)) { $specMap[$label] = $value }
        $specs += [PSCustomObject]@{ label = $label; value = $value }
      }
    }

    $valve = if ($specMap['Valve']) { $specMap['Valve'] } else { 'Chưa xác định' }
    $manufacturer = if ($specMap['Valve manufacturer']) { $specMap['Valve manufacturer'] } else { 'Theo dự án' }
    $valveType = if ($specMap['Valve type']) { $specMap['Valve type'] } else { 'Valve package' }
    $lineSize = if ($specMap['Line size']) { $specMap['Line size'] } else { 'Theo cấu hình' }
    $pressure = if ($specMap['Pressure']) { $specMap['Pressure'] } else { 'Theo cấu hình' }
    $isActuatorOnly = $valveType -eq 'Actuator only'

    $summary = if ($isActuatorOnly) {
      "$($product.product_name) là cấu hình actuator Hanbay $rangeLetter kèm mounting kit, dành cho tích hợp với van được xác định theo dự án."
    } else {
      "$($product.product_name) là cấu hình Hanbay $rangeLetter cho $valveType $valve của $manufacturer, line size $lineSize và áp suất $pressure."
    }
    $description = if ($isActuatorOnly) {
      "Cấu hình cung cấp actuator và mounting kit. Van, cơ cấu ghép nối, enclosure, tín hiệu điều khiển, feedback, nguồn và chứng nhận phải được xác nhận trước khi đặt hàng."
    } else {
      "Cấu hình được Rotork công bố cho valve $valve của $manufacturer. Cần xác nhận lại valve revision, mounting, enclosure, control signal, feedback, voltage và chứng nhận hazardous area theo dự án."
    }

    $extension = [IO.Path]::GetExtension([string]$product.primary_image_local).ToLowerInvariant()
    if ([string]::IsNullOrWhiteSpace($extension)) { $extension = '.png' }
    $imageName = "$($product.page_slug)$extension"
    Copy-Item -LiteralPath (Join-Path $LibraryRoot $product.primary_image_local) -Destination (Join-Path $imageDirectory $imageName) -Force

    $highlights = @(
      $(if ($isActuatorOnly) { 'Actuator + mounting kit' } else { $manufacturer }),
      $valveType,
      "Pressure $pressure",
      "Line size $lineSize"
    )

    $output += [PSCustomObject]@{
      range = $rangeSlug
      slug = [string]$product.page_slug
      name = [string]$product.product_name
      type = "Hanbay $rangeLetter configuration"
      duty = $valveType
      image = "/images/products/$rangeSlug/$imageName"
      summary = $summary
      description = $description
      highlights = $highlights
      specs = $specs
      officialUrl = [string]$product.official_product_url
    }
  }
}

$jsonPath = Join-Path $SiteRoot 'app\hanbay-products.json'
$output | ConvertTo-Json -Depth 8 | Set-Content -LiteralPath $jsonPath -Encoding UTF8
Write-Output "Generated $($output.Count) Hanbay product records."
