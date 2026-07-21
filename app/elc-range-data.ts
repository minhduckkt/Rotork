import type { CatalogModel, RangeConfig } from "./catalog-types";

export const elcRangeConfig: RangeConfig = {
  slug: "elc-range",
  name: "ELC Range",
  categoryName: "Electric Industrial Actuators",
  categorySlug: "electric-industrial-actuators",
  description: "Dòng actuator điện tuyến tính nhỏ gọn cho điều khiển van trong HVAC, district heating, process automation và các hệ thống công nghiệp cần lực đẩy chính xác.",
  heroBadge: "Compact linear\nactuation range",
  facts: [["0,6–25 kN", "Phạm vi lực đẩy"], ["Tới 100 mm", "Hành trình theo model"], ["11 models", "Standard và spring-return"], ["IP54 / IP65", "Theo model và tùy chọn"]],
  overviewTitle: "Actuator tuyến tính từ compact đến heavy-duty",
  overview: ["ELC Range bao phủ từ model 0,6 kN nhỏ gọn đến actuator 25 kN cho hệ thống công nghiệp quy mô lớn, với hành trình tới 100 mm.", "Các model SR tích hợp spring-return cho fail-safe positioning. Tốc độ, lực đẩy, hành trình, điện áp và protection class phải được xác nhận theo ứng dụng."],
  selectionTitle: "Chọn theo lực đẩy, hành trình và fail-safe",
  selectionIntro: "ELC được lựa chọn chủ yếu theo thrust, stroke, tốc độ, nguồn điện và yêu cầu đưa van về vị trí an toàn khi mất nguồn.",
  selectionSteps: [["Cần lực đẩy bao nhiêu?", "Đối chiếu lực vận hành và lực seating của van với margin phù hợp."], ["Hành trình và tốc độ?", "Xác định stroke thực tế, thời gian đóng mở và yêu cầu positioning."], ["Có cần spring-return?", "Chọn model SR nếu ứng dụng yêu cầu fail-safe response khi mất nguồn."]],
  commonFeatures: [["Linear output", "Đầu ra tuyến tính trực tiếp cho valve và control element phù hợp."], ["Compact installation", "Thiết kế tối ưu cho không gian lắp đặt hạn chế theo từng model."], ["Selectable performance", "Lực đẩy, hành trình và tốc độ được phân cấp theo dải sản phẩm."], ["Spring-return options", "ELC 100SR và ELC 250SR hỗ trợ fail-safe positioning cơ khí."]],
  brochureCode: "PUB192-001",
  brochureTitle: "Rotork ELC Range Brochure",
  brochureUrl: "https://media.rotork.com/api/public/content/pub192-001-000725rotorkelcrangebrochure-pdf-vtbie6yjqhy8kbmgrpji.pdf",
  officialRangeUrl: "https://www.rotork.com/en/products/electric-industrial-actuators/elc-range",
};

type ELCInput = {
  slug: string; name: string; thrust: string; stroke: string; speed: string; weight: string; protection: string;
  note: string; failSafe?: string;
};

function makeELC(input: ELCInput): CatalogModel {
  const spring = Boolean(input.failSafe);
  return {
    slug: input.slug,
    name: input.name,
    type: spring ? "Linear spring-return" : "Electric linear",
    duty: spring ? "Fail-safe positioning" : "Linear positioning",
    image: `/images/products/elc-range/${input.slug}.jpg`,
    summary: `${input.name} là actuator điện tuyến tính với lực đẩy ${input.thrust}, hành trình ${input.stroke} và tốc độ ${input.speed}.`,
    description: `${input.note} Model cần được lựa chọn theo lực van, hành trình thực tế, tốc độ, nguồn điện và điều kiện môi trường.`,
    highlights: [`Thrust ${input.thrust}`, `Stroke ${input.stroke}`, spring ? `Fail-safe ${input.failSafe}` : `Speed ${input.speed}`, input.protection],
    specs: [["Chuyển động", "Linear"], ["Lực đẩy", input.thrust], ["Hành trình", input.stroke], ["Tốc độ", input.speed], [spring ? "Fail-safe time" : "Khối lượng", spring ? input.failSafe! : input.weight], ["Protection class", input.protection]],
    officialUrl: `https://www.rotork.com/en/products/electric-industrial-actuators/elc-range/${input.slug}`,
  };
}

export const elcModels: CatalogModel[] = [
  makeELC({ slug: "elc-55-elc-55y", name: "ELC 55 / ELC 55Y", thrust: "0,6 kN", stroke: "Tới 20 mm", speed: "9 hoặc 5 s/mm", weight: "1,5 kg", protection: "IP54 auto · IP30 manual", note: "Model entry-level cho ứng dụng nhỏ gọn và light-duty valve operation." }),
  makeELC({ slug: "elc-100", name: "ELC 100", thrust: "1,0 kN", stroke: "Tới 20 mm", speed: "12 · 9 · 4 · 1,9 s/mm", weight: "2,5 kg", protection: "IP54 · tùy chọn IP65", note: "Giải pháp compact cân bằng giữa hiệu suất và tính linh hoạt." }),
  makeELC({ slug: "elc-100sr", name: "ELC 100SR", thrust: "1,0 kN", stroke: "Tới 20 mm", speed: "6 hoặc 4 s/mm", weight: "5 kg", protection: "IP54", failSafe: "Khoảng 0,1 s/mm", note: "Tích hợp spring-return cho hệ thống cần fail-safe positioning nhanh." }),
  makeELC({ slug: "elc-160", name: "ELC 160", thrust: "1,6 kN", stroke: "Tới 30 mm", speed: "6 hoặc 4 s/mm", weight: "3,2 kg", protection: "IP54 · tùy chọn IP65", note: "Model mid-range cho nhiều ứng dụng công nghiệp cần độ chính xác và lực đẩy ổn định." }),
  makeELC({ slug: "elc-220", name: "ELC 220", thrust: "2,2 kN", stroke: "Tới 30 mm", speed: "3 s/mm", weight: "3,2 kg", protection: "IP54 · tùy chọn IP65", note: "Tăng lực đẩy trong footprint nhỏ gọn cho điều khiển van công nghiệp và process." }),
  makeELC({ slug: "elc-250sr", name: "ELC 250SR", thrust: "2,5 kN", stroke: "Tới 40 mm", speed: "5 hoặc 3,5 s/mm", weight: "13 kg", protection: "IP54", failSafe: "Khoảng 0,1 s/mm", note: "Spring-return actuator cho hệ thống district heating và ứng dụng nhạy cảm về nhiệt độ hoặc an toàn." }),
  makeELC({ slug: "elc-400", name: "ELC 400", thrust: "4,0 kN", stroke: "Tới 60 mm", speed: "0,6 hoặc 0,4 s/mm", weight: "9,5 kg", protection: "IP54 · tùy chọn IP65", note: "Model tốc độ cao cho ứng dụng yêu cầu phản hồi nhanh, lực đẩy và độ tin cậy." }),
  makeELC({ slug: "elc-500", name: "ELC 500", thrust: "5,0 kN", stroke: "Tới 60 mm", speed: "5 hoặc 3,5 s/mm", weight: "8,6 kg (230 VAC) · 7,4 kg (24 V)", protection: "IP54 · tùy chọn IP65", note: "Actuator kết hợp lực đẩy và tốc độ cho môi trường công nghiệp có nhu cầu vận hành cao." }),
  makeELC({ slug: "elc-1000", name: "ELC 1000", thrust: "10,0 kN", stroke: "Tới 80 mm", speed: "1 s/mm", weight: "11,5 kg", protection: "IP54 · tùy chọn IP65", note: "Model high-force cho process automation và ứng dụng công nghiệp heavy-duty." }),
  makeELC({ slug: "elc-1500", name: "ELC 1500", thrust: "15,0 kN", stroke: "Tới 80 mm", speed: "2 s/mm", weight: "11,5 kg", protection: "IP54 · tùy chọn IP65", note: "Cung cấp lực đẩy lớn với các chức năng điều khiển và an toàn cho ứng dụng công nghiệp khắt khe." }),
  makeELC({ slug: "elc-2500", name: "ELC 2500", thrust: "25,0 kN", stroke: "Tới 100 mm", speed: "0,5 s/mm", weight: "24 kg", protection: "IP65 tiêu chuẩn", note: "Model mạnh nhất trong ELC Range cho hệ thống quy mô lớn cần lực tối đa và độ bền cao." }),
];

export function getELCModel(slug: string) {
  return elcModels.find((model) => model.slug === slug);
}
