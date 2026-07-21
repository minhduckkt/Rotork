import type { Metadata } from "next";
import { StandardRangePage } from "../../../components/StandardRangePage";
import { ckModels, ckRangeConfig } from "../../../ck-range-data";

export const metadata: Metadata = {
  title: "CK Range Rotork | CK, CKA, CKC, CKR, CKRA, CKRC",
  description: "Dòng actuator Rotork CK Range gồm 6 model isolation và modulating với external controls, Atronik hoặc Centronik. Xem thông số và yêu cầu báo giá.",
  alternates: { canonical: "/san-pham/electric-intelligent-actuators/ck-range" },
};

export default function CKRangePage() {
  return <StandardRangePage config={ckRangeConfig} models={ckModels}/>;
}
