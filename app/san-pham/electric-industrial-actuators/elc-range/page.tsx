import type { Metadata } from "next";
import { StandardRangePage } from "../../../components/StandardRangePage";
import { elcModels, elcRangeConfig } from "../../../elc-range-data";

export const metadata: Metadata = {
  title: "ELC Range Rotork | Actuator điện tuyến tính 0,6–25 kN",
  description: "Rotork ELC Range gồm 11 actuator điện tuyến tính, lực đẩy 0,6–25 kN, hành trình tới 100 mm và tùy chọn spring-return. Xem thông số và báo giá.",
  alternates: { canonical: "/san-pham/electric-industrial-actuators/elc-range" },
};

export default function ELCRangePage() {
  return <StandardRangePage config={elcRangeConfig} models={elcModels}/>;
}
