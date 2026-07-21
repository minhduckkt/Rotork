import type { Metadata } from "next";
import { LargeRangePage } from "../../../components/LargeRangePage";
import { hanbayRConfig, hanbayRModels } from "../../../hanbay-data";

export const metadata: Metadata = { title: "Hanbay R Range Rotork | 92 cấu hình explosionproof", description: "Tra cứu 92 cấu hình Rotork Hanbay R READY cho hazardous environment theo valve, manufacturer, pressure và line size. Xem thông số và báo giá.", alternates: { canonical: "/san-pham/electric-industrial-actuators/hanbay-r-range" } };
export default function HanbayRRangePage() { return <LargeRangePage config={hanbayRConfig} models={hanbayRModels}/>; }
