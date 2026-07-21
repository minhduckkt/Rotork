import type { Metadata } from "next";
import { StandardRangePage } from "../../../components/StandardRangePage";
import { iqProConfig, iqProModels } from "../../../iq-pro-data";

export const metadata: Metadata = {
  title: "IQ Pro Rotork | IQ, IQM, IQT và IQTM Pro",
  description: "Dòng Rotork IQ Pro gồm 4 model multi-turn, part-turn và modulating. Xem torque, duty, tính năng, tài liệu và yêu cầu báo giá tại Việt Nam.",
  alternates: { canonical: "/san-pham/electric-intelligent-actuators/iq-pro" },
};

export default function IQProRangePage() {
  return <StandardRangePage config={iqProConfig} models={iqProModels}/>;
}
