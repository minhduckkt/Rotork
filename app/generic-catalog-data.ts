import rawCatalog from "./generic-catalog.json";
import type { CatalogModel, RangeConfig } from "./catalog-types";

type RawProduct = Omit<CatalogModel, "specs"> & {
  lineSlug: string;
  lineName: string;
  lineNameVi: string;
  rangeSlug: string;
  rangeName: string;
  specs: { label: string; value: string }[];
  documentUrl: string;
  documentTitle: string;
};

type RawRange = {
  lineSlug: string;
  lineName: string;
  lineNameVi: string;
  rangeSlug: string;
  rangeName: string;
  modelCount: number;
  description: string;
  officialDescription: string;
  heroBadge: string;
  brochureCode: string;
  brochureTitle: string;
  brochureUrl: string;
  officialRangeUrl: string;
};

const raw = rawCatalog as { ranges: RawRange[]; products: RawProduct[] };

function toModel(product: RawProduct): CatalogModel {
  return { ...product, specs: product.specs.map((item) => [item.label, item.value]) };
}

function toConfig(range: RawRange): RangeConfig {
  return {
    slug: range.rangeSlug,
    name: range.rangeName,
    categoryName: range.lineNameVi,
    categorySlug: range.lineSlug,
    description: range.description,
    heroBadge: range.heroBadge,
    facts: [[String(range.modelCount), "Model/cấu hình READY"], ["Official", "Dữ liệu từ nguồn Rotork"], ["SEO pages", "URL riêng cho từng model"], ["Quote only", "Cần xác nhận trước báo giá"]],
    overviewTitle: `${range.rangeName} trong hệ sinh thái Rotork`,
    overview: [range.description, "Thông tin được chuẩn hóa từ nguồn sản phẩm chính thức. Các giá trị trên website phục vụ tra cứu và lựa chọn ban đầu; datasheet cùng revision của cấu hình được chọn là căn cứ cuối cùng."],
    selectionTitle: "Tra cứu model và xác nhận cấu hình dự án",
    selectionIntro: "Không nên lựa chọn chỉ dựa trên tên range. Cần đối chiếu model, thông số, connection, vật liệu, môi trường và chứng nhận.",
    selectionSteps: [["Tìm đúng model", "Tra cứu theo model code, range hoặc thông số được công bố."], ["Đối chiếu kỹ thuật", "Kiểm tra kích thước, công suất, vật liệu, connection và điều kiện vận hành."], ["Xác nhận tài liệu", "Đối chiếu datasheet, drawing, certificate và revision trước khi đặt hàng."]],
    commonFeatures: [["Official product data", "Nội dung được xây dựng từ record và trang sản phẩm chính thức của Rotork."], ["Model-level SEO", "Mỗi model có URL, metadata và structured data riêng."], ["Technical lookup", "Thông số chính được tổ chức thành bảng để tra cứu nhanh."], ["Configuration review", "Fast Group Engineering hỗ trợ kiểm tra model, tài liệu và báo giá."]],
    brochureCode: range.brochureCode,
    brochureTitle: range.brochureTitle,
    brochureUrl: range.brochureUrl,
    officialRangeUrl: range.officialRangeUrl,
  };
}

export type GenericRangeEntry = {
  lineSlug: string;
  lineName: string;
  lineNameVi: string;
  rangeSlug: string;
  rangeName: string;
  config: RangeConfig;
  models: CatalogModel[];
};

const allModels = raw.products.map(toModel);

export const genericRanges: GenericRangeEntry[] = raw.ranges.map((range) => ({
  lineSlug: range.lineSlug,
  lineName: range.lineName,
  lineNameVi: range.lineNameVi,
  rangeSlug: range.rangeSlug,
  rangeName: range.rangeName,
  config: toConfig(range),
  models: allModels.filter((_, index) => raw.products[index].lineSlug === range.lineSlug && raw.products[index].rangeSlug === range.rangeSlug),
}));

export const genericCatalogProducts = raw.products.map((product, index) => ({
  model: allModels[index],
  lineSlug: product.lineSlug,
  lineNameVi: product.lineNameVi,
  rangeSlug: product.rangeSlug,
  rangeName: product.rangeName,
}));

export const genericCatalogRoutes = [
  ...genericRanges.map((range) => `/san-pham/${range.lineSlug}/${range.rangeSlug}`),
  ...genericCatalogProducts.map((product) => `/san-pham/${product.lineSlug}/${product.rangeSlug}/${product.model.slug}`),
];

export function getGenericRange(lineSlug: string, rangeSlug: string) {
  return genericRanges.find((range) => range.lineSlug === lineSlug && range.rangeSlug === rangeSlug);
}

export function getGenericModel(lineSlug: string, rangeSlug: string, slug: string) {
  const range = getGenericRange(lineSlug, rangeSlug);
  const model = range?.models.find((item) => item.slug === slug);
  return range && model ? { range, model } : undefined;
}
