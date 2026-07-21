import type { CatalogModel, RangeConfig } from "./catalog-types";

export const iqProConfig: RangeConfig = {
  slug: "iq-pro",
  name: "IQ Pro",
  categoryName: "Electric Intelligent Actuators",
  categorySlug: "electric-intelligent-actuators",
  description: "Dòng actuator điện thông minh multi-turn và part-turn cho các ứng dụng cần điều khiển linh hoạt, hiển thị rõ ràng và truy cập dữ liệu chẩn đoán theo thời gian thực.",
  heroBadge: "Proven\nintelligent actuation",
  facts: [["IP66/68", "Double-sealed · 7 m / 72 giờ"], ["SIL2", "Theo chứng nhận và cấu hình"], ["4 models", "Multi-turn và part-turn"], ["Data logger", "Trang bị tiêu chuẩn"]],
  overviewTitle: "Điều khiển thông minh cho isolation và modulating duty",
  overview: ["IQ Pro kết hợp local controls không xâm nhập, màn hình đa ngôn ngữ, data logger và khả năng phân tích actuator qua Insight PC software.", "Range gồm IQ Pro và IQT Pro cho isolation/regulating duty, cùng IQM Pro và IQTM Pro cho modulating duty tới 1.200 starts mỗi giờ."],
  selectionTitle: "Chọn chuyển động và tần suất vận hành",
  selectionIntro: "Bốn model được phân tách theo multi-turn hoặc part-turn, sau đó theo isolation/regulating hoặc modulating duty.",
  selectionSteps: [["Multi-turn hay part-turn?", "Xác định chuyển động của van, số vòng quay và kiểu ghép nối đầu ra."], ["Standard hay modulating?", "Đối chiếu tần suất vận hành, tốc độ đáp ứng và yêu cầu positioning."], ["Môi trường và điều khiển?", "Xác nhận nguồn, IP, explosionproof, SIL, tín hiệu và giao thức mạng."]],
  commonFeatures: [["Non-intrusive controls", "Thiết lập và vận hành tại chỗ bằng controls và handheld setting tool."], ["Data logger", "Dữ liệu vận hành hỗ trợ phân tích actuator và kế hoạch bảo trì."], ["Multilingual display", "Hiển thị trạng thái và thiết lập bằng giao diện văn bản rõ ràng."], ["Industrial enclosure", "Tùy chọn watertight hoặc explosionproof theo specification."]],
  brochureCode: "PUB002-214",
  brochureTitle: "IQ Pro Range Brochure",
  brochureUrl: "https://media.rotork.com/api/public/content/pub002-214-00-0624-pdf-rtkimportassetvpelgm.pdf",
  officialRangeUrl: "https://www.rotork.com/en/products/electric-intelligent-actuators/iq-pro",
};

export const iqProModels: CatalogModel[] = [
  {
    slug: "iq-pro", name: "IQ Pro", type: "Multi-turn", duty: "Isolation / Regulating", image: "/images/products/iq-pro/iq-pro.jpg",
    summary: "Actuator multi-turn 3 pha cho isolation hoặc regulating duty, direct torque từ 34 đến 3.000 Nm.",
    description: "IQ Pro cung cấp local controls không xâm nhập, data logger và khả năng chẩn đoán cho các ứng dụng multi-turn tới 60 starts mỗi giờ.",
    highlights: ["Direct torque 34–3.000 Nm", "Tối đa 60 starts/giờ", "IP66/68 · 7 m / 72 giờ", "SIL2 theo cấu hình"],
    specs: [["Chuyển động", "Multi-turn"], ["Nguồn điện", "3 pha"], ["Direct torque", "34–3.000 Nm"], ["Nhiệm vụ", "Isolation / Regulating"], ["Tần suất", "Tối đa 60 starts/giờ"], ["Enclosure", "IP66/68 · 7 m / 72 giờ"]],
    officialUrl: "https://www.rotork.com/en/products/electric-intelligent-actuators/iq-pro/iq-pro",
  },
  {
    slug: "iqm-pro-modulating", name: "IQM Pro - Modulating", type: "Multi-turn modulating", duty: "Modulating", image: "/images/products/iq-pro/iqm-pro-modulating.jpg",
    summary: "Phiên bản multi-turn modulating với solid-state reversing starter, electronic motor brake và mạch điều khiển đáp ứng nhanh.",
    description: "IQM Pro được tối ưu cho positional control và modulating duty tới 1.200 starts mỗi giờ, kế thừa nền tảng điều khiển và chẩn đoán của IQ Pro.",
    highlights: ["Tối đa 1.200 starts/giờ", "Solid-state starter", "Electronic motor brake", "Fast-response control"],
    specs: [["Chuyển động", "Multi-turn"], ["Nhiệm vụ", "Modulating"], ["Tần suất", "Tối đa 1.200 starts/giờ"], ["Motor switching", "Solid-state"], ["Motor brake", "Electronic"], ["Điều khiển", "Fast-response remote circuits"]],
    officialUrl: "https://www.rotork.com/en/products/electric-intelligent-actuators/iq-pro/iqm-pro-modulating",
  },
  {
    slug: "iqt-pro", name: "IQT Pro", type: "Part-turn", duty: "Isolation / Regulating", image: "/images/products/iq-pro/iqt-pro.jpg",
    summary: "Actuator part-turn direct drive 3 pha, torque từ 50 đến 2.000 Nm cho isolation hoặc regulating duty.",
    description: "IQT Pro là phiên bản part-turn của IQ Pro, hỗ trợ tới 60 starts mỗi giờ, data logger tiêu chuẩn và local controls không xâm nhập.",
    highlights: ["Torque 50–2.000 Nm", "Direct-drive part-turn", "Tối đa 60 starts/giờ", "SIL2 theo cấu hình"],
    specs: [["Chuyển động", "Part-turn · Direct drive"], ["Nguồn điện", "3 pha"], ["Torque output", "50–2.000 Nm"], ["Nhiệm vụ", "Isolation / Regulating"], ["Tần suất", "Tối đa 60 starts/giờ"], ["Enclosure", "IP66/68 · 7 m / 72 giờ"]],
    officialUrl: "https://www.rotork.com/en/products/electric-intelligent-actuators/iq-pro/iqt-pro",
  },
  {
    slug: "iqtm-pro-modulating", name: "IQTM Pro - Modulating", type: "Part-turn modulating", duty: "Modulating", image: "/images/products/iq-pro/iqtm-pro-modulating.jpg",
    summary: "Phiên bản part-turn modulating với solid-state motor switching và đáp ứng nhanh tới 1.200 starts mỗi giờ.",
    description: "IQTM Pro phù hợp các tín hiệu điều khiển modulating cần phản hồi nhanh, sử dụng solid-state switching trên nền tảng IQT Pro.",
    highlights: ["Tối đa 1.200 starts/giờ", "Solid-state switching", "Fast-response circuits", "Part-turn modulating"],
    specs: [["Chuyển động", "Part-turn"], ["Nhiệm vụ", "Modulating"], ["Tần suất", "Tối đa 1.200 starts/giờ"], ["Motor switching", "Solid-state"], ["Điều khiển", "Fast-response remote circuits"], ["Nền tảng", "IQT Pro"]],
    officialUrl: "https://www.rotork.com/en/products/electric-intelligent-actuators/iq-pro/iqtm-pro-modulating",
  },
];

export function getIQProModel(slug: string) {
  return iqProModels.find((model) => model.slug === slug);
}
