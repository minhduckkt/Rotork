import rawProducts from "./hanbay-products.json";
import type { CatalogModel, RangeConfig } from "./catalog-types";

type RawHanbayProduct = Omit<CatalogModel, "specs"> & {
  range: "hanbay-m-range" | "hanbay-r-range";
  specs: { label: string; value: string }[];
};

const products = rawProducts as RawHanbayProduct[];

function toCatalogModel(product: RawHanbayProduct): CatalogModel {
  return { ...product, specs: product.specs.map((item) => [item.label, item.value]) };
}

export const hanbayMModels = products.filter((item) => item.range === "hanbay-m-range").map(toCatalogModel);
export const hanbayRModels = products.filter((item) => item.range === "hanbay-r-range").map(toCatalogModel);

const brochureUrl = "https://media.rotork.com/api/public/content/pub193-027-000925rotorkm-rrangebrochure-pdf-ckhrmcglqxievvgeu6ru.pdf";

export const hanbayMConfig: RangeConfig = {
  slug: "hanbay-m-range", name: "Hanbay M Range", categoryName: "Electric Industrial Actuators", categorySlug: "electric-industrial-actuators",
  description: "Dòng actuator điện compact có cấu hình part-turn và multi-turn, phục vụ open/close và precision modulating control cho nhiều loại van công nghiệp.",
  heroBadge: "Compact precision\nflow control",
  facts: [["247 configs", "Cấu hình READY đã xác minh"], ["Part / Multi-turn", "Open-close và modulating"], ["4–20 mA", "Analogue control/feedback"], ["Modbus RS485", "Tùy chọn điều khiển mạng"]],
  overviewTitle: "Actuator compact kết hợp sẵn với nhiều valve package",
  overview: ["Hanbay M part-turn hỗ trợ vận hành nhanh cho ball, diverter, multi-port, shut-off, internal và butterfly valve.", "Các cấu hình multi-turn phục vụ precision modulating control cho needle, metering, globe và control valve, cũng như pressure regulator. Danh mục bên dưới chỉ xuất bản các record đạt trạng thái READY."],
  selectionTitle: "Tra cứu theo valve và điều kiện quá trình", selectionIntro: "Mã cấu hình gắn với valve, manufacturer, connection, line size, CV và pressure cụ thể. Không dùng tên model thay cho part number đặt hàng hoàn chỉnh.",
  selectionSteps: [["Đã có valve model?", "Tìm trực tiếp theo mã valve hoặc manufacturer trong danh mục."], ["Điều kiện quá trình?", "Đối chiếu valve type, material, connection, line size, CV và pressure."], ["Tùy chọn actuator?", "Xác nhận enclosure, 4–20 mA, Modbus, feedback, nguồn, battery backup và phụ kiện."]],
  commonFeatures: [["Flexible enclosures", "Aluminum, stainless steel và các cấu hình hazardous-area theo specification."], ["Multiple control modes", "Analogue 4–20 mA hoặc 1–5 V, Modbus RS485 và TTL input."], ["Feedback options", "Không feedback hoặc 4–20 mA feedback theo cấu hình."], ["Installation options", "Manual override, isolated input, battery backup và prewired M12 tùy model."]],
  brochureCode: "PUB193-027", brochureTitle: "Hanbay M & R Range Brochure", brochureUrl, officialRangeUrl: "https://www.rotork.com/en/products/electric-industrial-actuators/hanbay-m-range",
};

export const hanbayRConfig: RangeConfig = {
  ...hanbayMConfig,
  slug: "hanbay-r-range", name: "Hanbay R Range",
  description: "Dòng actuator điện compact explosionproof cho part-turn và multi-turn, thiết kế để điều khiển dòng chính xác trong môi trường hazardous.",
  heroBadge: "Explosionproof\nflow control",
  facts: [["92 configs", "Cấu hình READY đã xác minh"], ["Hazardous duty", "Compact explosionproof range"], ["Part / Multi-turn", "Open-close và modulating"], ["Modbus / Analogue", "Nhiều phương thức điều khiển"]],
  overviewTitle: "Precision flow control trong môi trường hazardous",
  overview: ["Hanbay R part-turn hỗ trợ vận hành nhanh cho ball, multi-port và shut-off valve.", "Các cấu hình multi-turn cung cấp modulating control cho needle, metering, high-pressure và plug valve. Danh mục chỉ đưa lên website các record đạt trạng thái READY."],
  officialRangeUrl: "https://www.rotork.com/en/products/electric-industrial-actuators/hanbay-r-range",
};

export function getHanbayModel(range: "hanbay-m-range" | "hanbay-r-range", slug: string) {
  const list = range === "hanbay-m-range" ? hanbayMModels : hanbayRModels;
  return list.find((model) => model.slug === slug);
}
