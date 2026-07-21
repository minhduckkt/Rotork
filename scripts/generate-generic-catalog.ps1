param(
  [Parameter(Mandatory = $true)][string]$LibraryRoot,
  [Parameter(Mandatory = $true)][string]$SiteRoot
)

$handledRanges = @(
  'electric-intelligent-actuators/iq3-pro',
  'electric-intelligent-actuators/iq3-perform',
  'electric-intelligent-actuators/ck-range',
  'electric-intelligent-actuators/iq-pro',
  'electric-industrial-actuators/elc-range',
  'electric-industrial-actuators/hanbay-m-range',
  'electric-industrial-actuators/hanbay-r-range',
  'precision-modulating-actuators/cma',
  'precision-modulating-actuators/cva',
  'precision-modulating-actuators/la-2000',
  'precision-modulating-actuators/sm',
  'electro-hydraulic-actuators/skilmatic-si',
  'electro-hydraulic-actuators/modular-electro-hydraulic'
)

$lineNamesVi = @{
  'valve-positioners-and-controllers' = 'Bộ định vị và bộ điều khiển van'
  'flow-pressure-control-filtration' = 'Điều khiển lưu lượng, áp suất và lọc'
  'instrumentation-valves' = 'Van thiết bị đo'
  'part-turn-gearboxes' = 'Hộp số part-turn'
  'electrical-instrumentation' = 'Thiết bị đo điện'
  'limit-switches-position-transmitters' = 'Công tắc hành trình và bộ truyền vị trí'
  'hvac-sensor-accessories' = 'Phụ kiện cảm biến HVAC'
  'hvac-actuators' = 'Bộ truyền động HVAC'
  'gearbox-accessories' = 'Phụ kiện hộp số'
  'light-duty-fluid-actuators' = 'Bộ truyền động fluid power light-duty'
  'hvac-sensors' = 'Cảm biến HVAC'
  'heavy-duty-fluid-actuators' = 'Bộ truyền động fluid power heavy-duty'
  'hvac-actuator-accessories' = 'Hệ thống và phụ kiện điều khiển HVAC'
  'multi-turn-gearboxes' = 'Hộp số multi-turn'
  'master-station-networks-protocols' = 'Master station, mạng và giao thức'
  'manifold-solutions' = 'Giải pháp manifold'
  'pumps-intensifiers' = 'Bơm và bộ tăng áp'
}

function Shorten([string]$value, [int]$length = 80) {
  if ([string]::IsNullOrWhiteSpace($value)) { return '' }
  $clean = ($value -replace '\s+', ' ').Trim()
  if ($clean.Length -le $length) { return $clean }
  return $clean.Substring(0, $length - 1).TrimEnd() + '…'
}

$products = Get-Content -Raw -LiteralPath (Join-Path $LibraryRoot 'website_ready\second_pass\products_rechecked.json') | ConvertFrom-Json
$families = Get-Content -Raw -LiteralPath (Join-Path $LibraryRoot 'data\normalized\product_families.json') | ConvertFrom-Json
$ready = @($products | Where-Object { $_.website_status -eq 'READY' -and "$($_.product_line_slug)/$($_.product_range_slug)" -notin $handledRanges })
$rawProducts = @()

foreach ($product in $ready) {
  $specs = @()
  $seen = @{}
  foreach ($item in @($product.specification_items)) {
    $label = Shorten ([string]$item.label) 70
    $value = Shorten ([string]$item.value) 180
    if ($label -and $value -and -not $seen.ContainsKey($label)) {
      $seen[$label] = $true
      $specs += [PSCustomObject]@{ label = $label; value = $value }
    }
  }

  if ($specs.Count -eq 0 -and $product.features_source_en) {
    foreach ($line in @(([string]$product.features_source_en) -split "`r?`n")) {
      $clean = ($line.Trim() -replace '^[•\-–]\s*', '')
      if ($clean -match '^([^:]{2,70}):\s*(.+)$') {
        $label = Shorten $matches[1] 70
        $value = Shorten $matches[2] 180
        if ($label -and $value -and -not $seen.ContainsKey($label)) {
          $seen[$label] = $true
          $specs += [PSCustomObject]@{ label = $label; value = $value }
        }
      }
      if ($specs.Count -ge 8) { break }
    }
  }

  if ($specs.Count -eq 0) {
    $specs = @(
      [PSCustomObject]@{ label = 'Model'; value = [string]$product.product_name },
      [PSCustomObject]@{ label = 'Range'; value = [string]$product.product_range },
      [PSCustomObject]@{ label = 'Nhóm sản phẩm'; value = [string]$product.product_line },
      [PSCustomObject]@{ label = 'Nguồn dữ liệu'; value = 'Rotork official product page' },
      [PSCustomObject]@{ label = 'Giá'; value = 'Liên hệ báo giá' }
    )
  }

  $specPreview = @($specs | Select-Object -First 2 | ForEach-Object { "$($_.label) $($_.value)" }) -join '; '
  $summary = "$($product.product_name) thuộc $($product.product_range) của Rotork. Thông tin chính: $specPreview."
  $description = "Trang sản phẩm tổng hợp dữ liệu kỹ thuật chính thức cho $($product.product_name), thuộc nhóm $($product.product_line). Cần xác nhận model, điều kiện vận hành, vật liệu, connection, chứng nhận và revision tài liệu trước khi đặt hàng."

  $highlights = @($specs | Select-Object -First 4 | ForEach-Object { Shorten ([string]$_.value) 55 })
  foreach ($fallback in @([string]$product.product_range, 'Nguồn Rotork', 'Liên hệ báo giá', 'Cần xác nhận cấu hình')) {
    if ($highlights.Count -ge 4) { break }
    if ($fallback -and $fallback -notin $highlights) { $highlights += $fallback }
  }

  $extension = [IO.Path]::GetExtension([string]$product.primary_image_local).ToLowerInvariant()
  if (-not $extension) { $extension = '.jpg' }
  $imageDirectory = Join-Path $SiteRoot "public\images\products\catalog\$($product.product_line_slug)\$($product.product_range_slug)"
  New-Item -ItemType Directory -Force -Path $imageDirectory | Out-Null
  $imageName = "$($product.page_slug)$extension"
  Copy-Item -LiteralPath (Join-Path $LibraryRoot $product.primary_image_local) -Destination (Join-Path $imageDirectory $imageName) -Force

  $rawProducts += [PSCustomObject]@{
    lineSlug = [string]$product.product_line_slug
    lineName = [string]$product.product_line
    lineNameVi = if ($lineNamesVi.ContainsKey([string]$product.product_line_slug)) { $lineNamesVi[[string]$product.product_line_slug] } else { [string]$product.product_line }
    rangeSlug = [string]$product.product_range_slug
    rangeName = [string]$product.product_range
    slug = [string]$product.page_slug
    name = [string]$product.product_name
    type = [string]$product.product_range
    duty = [string]$product.product_line
    image = "/images/products/catalog/$($product.product_line_slug)/$($product.product_range_slug)/$imageName"
    summary = $summary
    description = $description
    highlights = $highlights
    specs = $specs
    officialUrl = [string]$product.official_product_url
    documentUrl = [string]$product.primary_document_url
    documentTitle = [string]$product.primary_document_title
  }
}

$rawRanges = @()
foreach ($group in @($rawProducts | Group-Object lineSlug, rangeSlug)) {
  $models = @($group.Group)
  $first = $models[0]
  $family = $families | Where-Object { $_.product_line_slug -eq $first.lineSlug -and $_.product_range_slug -eq $first.rangeSlug } | Select-Object -First 1
  $officialRangeUrl = if ($family -and $family.official_url) { [string]$family.official_url } else { "https://www.rotork.com/en/products/$($first.lineSlug)/$($first.rangeSlug)" }
  $documentProduct = $models | Where-Object { $_.documentUrl } | Select-Object -First 1
  $brochureUrl = if ($documentProduct) { [string]$documentProduct.documentUrl } else { $officialRangeUrl }
  $brochureTitle = if ($documentProduct -and $documentProduct.documentTitle) { Shorten ([string]$documentProduct.documentTitle) 100 } else { "Official $($first.rangeName) Source" }
  $brochureCode = if ($brochureTitle -match '^(PUB[0-9-]+)') { $matches[1] } else { 'ROTORK' }
  $officialDescription = if ($family -and $family.short_description) { Shorten ([string]$family.short_description) 240 } else { '' }

  $rawRanges += [PSCustomObject]@{
    lineSlug = $first.lineSlug
    lineName = $first.lineName
    lineNameVi = $first.lineNameVi
    rangeSlug = $first.rangeSlug
    rangeName = $first.rangeName
    modelCount = $models.Count
    description = "$($first.rangeName) thuộc nhóm $($first.lineNameVi) của Rotork. Danh mục gồm $($models.Count) model hoặc cấu hình đã đạt trạng thái READY để tra cứu."
    officialDescription = $officialDescription
    heroBadge = "Official Rotork`nproduct range"
    brochureCode = $brochureCode
    brochureTitle = $brochureTitle
    brochureUrl = $brochureUrl
    officialRangeUrl = $officialRangeUrl
  }
}

[PSCustomObject]@{ ranges = $rawRanges; products = $rawProducts } | ConvertTo-Json -Depth 10 | Set-Content -LiteralPath (Join-Path $SiteRoot 'app\generic-catalog.json') -Encoding UTF8
Write-Output "Generated $($rawProducts.Count) products across $($rawRanges.Count) ranges and $(($rawProducts.lineSlug | Sort-Object -Unique).Count) product lines."
