import { genericRanges } from "./generic-catalog-data";
import { iq3Models } from "./iq3-models";
import { iq3PerformModels } from "./iq3-perform-models";
import { ckModels, ckRangeConfig } from "./ck-range-data";
import { iqProConfig, iqProModels } from "./iq-pro-data";
import { elcModels, elcRangeConfig } from "./elc-range-data";
import { hanbayMConfig, hanbayMModels, hanbayRConfig, hanbayRModels } from "./hanbay-data";
import { cmaConfig, cmaModels, cvaConfig, cvaModels, laConfig, laModels, modularEHConfig, modularEHModel, skilmaticConfig, skilmaticModels, smConfig, smModels } from "./advanced-actuator-data";

export type ProductLineRange = { slug: string; name: string; description: string; image: string; modelCount: number };
export type ProductLineEntry = { slug: string; name: string; nameVi: string; description: string; ranges: ProductLineRange[] };
const range = (slug: string, name: string, description: string, image: string, modelCount: number): ProductLineRange => ({ slug, name, description, image, modelCount });

const fixedLines: ProductLineEntry[] = [
  { slug: "electric-intelligent-actuators", name: "Electric Intelligent Actuators", nameVi: "Bộ truyền động điện thông minh", description: "Các nền tảng actuator điện thông minh Rotork cho isolation, regulating, modulating, asset diagnostics và tích hợp hệ thống điều khiển.", ranges: [range("iq3-pro", "IQ3 Pro", "Nền tảng actuator thông minh kết nối cho nhiều nhiệm vụ van.", iq3Models[0].image, iq3Models.length), range("iq3-perform", "IQ3 Perform", "Actuator multi-turn và part-turn cho isolation và modulating duty.", iq3PerformModels[0].image, iq3PerformModels.length), range("ck-range", ckRangeConfig.name, ckRangeConfig.description, ckModels[0].image, ckModels.length), range("iq-pro", iqProConfig.name, iqProConfig.description, iqProModels[0].image, iqProModels.length)] },
  { slug: "electric-industrial-actuators", name: "Electric Industrial Actuators", nameVi: "Bộ truyền động điện công nghiệp", description: "Actuator điện tuyến tính và các cấu hình Hanbay compact cho valve automation, process control và ứng dụng công nghiệp chuyên dụng.", ranges: [range("elc-range", elcRangeConfig.name, elcRangeConfig.description, elcModels[0].image, elcModels.length), range("hanbay-m-range", hanbayMConfig.name, hanbayMConfig.description, hanbayMModels[0].image, hanbayMModels.length), range("hanbay-r-range", hanbayRConfig.name, hanbayRConfig.description, hanbayRModels[0].image, hanbayRModels.length)] },
  { slug: "precision-modulating-actuators", name: "Precision Modulating Actuators", nameVi: "Bộ truyền động điều khiển chính xác", description: "Actuator all-electric cho continuous modulation, process positioning và control valve applications cần độ chính xác cao.", ranges: [range("cma", cmaConfig.name, cmaConfig.description, cmaModels[0].image, cmaModels.length), range("cva", cvaConfig.name, cvaConfig.description, cvaModels[0].image, cvaModels.length), range("la-2000", laConfig.name, laConfig.description, laModels[0].image, laModels.length), range("sm", smConfig.name, smConfig.description, smModels[0].image, smModels.length)] },
  { slug: "electro-hydraulic-actuators", name: "Electro-Hydraulic Actuators", nameVi: "Bộ truyền động điện-thủy lực", description: "Giải pháp electro-hydraulic self-contained và modular cho fail-safe, ESD, safety applications và on/off valve automation.", ranges: [range("skilmatic-si", skilmaticConfig.name, skilmaticConfig.description, skilmaticModels[0].image, skilmaticModels.length), range("modular-electro-hydraulic", modularEHConfig.name, modularEHConfig.description, modularEHModel.image, 1)] },
];

const genericLines: ProductLineEntry[] = Array.from(new Set(genericRanges.map((item) => item.lineSlug))).map((lineSlug) => {
  const ranges = genericRanges.filter((item) => item.lineSlug === lineSlug);
  const first = ranges[0];
  return { slug: lineSlug, name: first.lineName, nameVi: first.lineNameVi, description: `${first.lineNameVi} Rotork được tổ chức thành ${ranges.length} range với dữ liệu model READY, tài liệu nguồn và đường dẫn SEO riêng.`, ranges: ranges.map((item) => range(item.rangeSlug, item.rangeName, item.config.description, item.models[0].image, item.models.length)) };
});

export const productLines = [
  ...fixedLines.map((line) => {
    const generated = genericLines.find((item) => item.slug === line.slug);
    return generated ? { ...line, ranges: [...line.ranges, ...generated.ranges] } : line;
  }),
  ...genericLines.filter((line) => !fixedLines.some((fixed) => fixed.slug === line.slug)),
];
export const productLineRoutes = productLines.map((line) => `/san-pham/${line.slug}`);
export function getProductLine(slug: string) { return productLines.find((line) => line.slug === slug); }
