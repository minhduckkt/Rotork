import type { Metadata } from "next";
import { LargeRangePage } from "../../../components/LargeRangePage";
import { hanbayMConfig, hanbayMModels } from "../../../hanbay-data";

export const metadata: Metadata = { title: "Hanbay M Range Rotork | 247 cấu hình actuator", description: "Tra cứu 247 cấu hình Rotork Hanbay M READY theo valve, manufacturer, pressure và line size. Xem thông số, tài liệu và yêu cầu báo giá tại Việt Nam.", alternates: { canonical: "/san-pham/electric-industrial-actuators/hanbay-m-range" } };
export default function HanbayMRangePage() { return <LargeRangePage config={hanbayMConfig} models={hanbayMModels}/>; }
