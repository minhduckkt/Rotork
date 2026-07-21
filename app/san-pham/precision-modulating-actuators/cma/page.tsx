import type { Metadata } from "next";
import { StandardRangePage } from "../../../components/StandardRangePage";
import { cmaConfig, cmaModels } from "../../../advanced-actuator-data";
export const metadata: Metadata = { title: "CMA Rotork | CML, CMQ, CMR precision actuators", description: "Rotork CMA gồm actuator linear, part-turn và multi-turn với độ chính xác tới 0,1%. Xem model, thông số, tài liệu và yêu cầu báo giá.", alternates: { canonical: "/san-pham/precision-modulating-actuators/cma" } };
export default function CMAPage() { return <StandardRangePage config={cmaConfig} models={cmaModels}/>; }
