export type IQ3PerformModel = {
  slug: string;
  name: string;
  type: string;
  duty: string;
  image: string;
  summary: string;
  description: string;
  highlights: string[];
  specs: [string, string][];
  officialUrl: string;
};

export const iq3PerformModels: IQ3PerformModel[] = [
  {
    slug: "iq3-perform-standard-multi-turn",
    name: "IQ3 Perform - Standard Multi-turn",
    type: "Multi-turn",
    duty: "Isolation / Regulating",
    image: "/images/products/iq3-perform/iq3-perform-standard-multi-turn.jpg",
    summary: "Bộ truyền động điện multi-turn 3 pha cho nhiệm vụ isolation hoặc regulating, với direct torque từ 14 đến 3.000 Nm.",
    description: "IQ3 Perform Standard Multi-turn được thiết kế cho Class A và B, tối đa 60 starts mỗi giờ. Khi kết hợp gearbox cấp hai, range có thể phục vụ các yêu cầu torque đầu ra lớn hơn.",
    highlights: ["Direct torque 14–3.000 Nm", "Tối đa 60 starts/giờ", "Nguồn 3 pha", "Class A & B"],
    specs: [["Chuyển động", "Multi-turn"], ["Nguồn điện", "3 pha"], ["Direct torque", "14–3.000 Nm"], ["Nhiệm vụ", "Isolation / Regulating"], ["Duty class", "Class A & B"], ["Tần suất", "Tối đa 60 starts/giờ"]],
    officialUrl: "https://www.rotork.com/en/products/electric-intelligent-actuators/iq3-perform/iq3-perform-standard-multi-turn",
  },
  {
    slug: "iq3d-perform-direct-current-dc",
    name: "IQ3D Perform - Direct Current (DC)",
    type: "Multi-turn DC",
    duty: "Isolation / Regulating",
    image: "/images/products/iq3-perform/iq3d-perform-direct-current-dc.jpg",
    summary: "Phiên bản IQ3 Perform sử dụng nguồn một chiều 24 VDC hoặc 110 VDC, direct torque từ 11 đến 305 Nm.",
    description: "IQ3D Perform dành cho hệ thống yêu cầu nguồn DC và nhiệm vụ isolation hoặc regulating Class A và B, với khả năng vận hành tối đa 60 starts mỗi giờ.",
    highlights: ["24 VDC hoặc 110 VDC", "Direct torque 11–305 Nm", "Tối đa 60 starts/giờ", "Class A & B"],
    specs: [["Chuyển động", "Multi-turn"], ["Nguồn điện", "24 VDC · 110 VDC"], ["Direct torque", "11–305 Nm"], ["Nhiệm vụ", "Isolation / Regulating"], ["Duty class", "Class A & B"], ["Tần suất", "Tối đa 60 starts/giờ"]],
    officialUrl: "https://www.rotork.com/en/products/electric-intelligent-actuators/iq3-perform/iq3d-perform-direct-current-dc",
  },
  {
    slug: "iq3m-perform-modulating",
    name: "IQ3M Perform - Modulating",
    type: "Multi-turn modulating",
    duty: "Modulating",
    image: "/images/products/iq3-perform/iq3m-perform-modulating.jpg",
    summary: "Bộ truyền động multi-turn modulating Class C, dùng solid-state reversing starter và direct torque từ 11 đến 544 Nm.",
    description: "IQ3M Perform có mạch remote control đáp ứng nhanh cùng electronic motor brake, phù hợp nhiệm vụ modulating tới 1.200 starts mỗi giờ.",
    highlights: ["Tối đa 1.200 starts/giờ", "Direct torque 11–544 Nm", "Solid-state starter", "Class C"],
    specs: [["Chuyển động", "Multi-turn"], ["Nhiệm vụ", "Modulating"], ["Direct torque", "11–544 Nm"], ["Duty class", "Class C"], ["Tần suất", "Tối đa 1.200 starts/giờ"], ["Motor control", "Solid-state reversing starter"]],
    officialUrl: "https://www.rotork.com/en/products/electric-intelligent-actuators/iq3-perform/iq3m-perform-modulating",
  },
  {
    slug: "iq3s-perform-single-phase",
    name: "IQ3S Perform - Single-Phase",
    type: "Single-phase multi-turn",
    duty: "Isolation / Regulating",
    image: "/images/products/iq3-perform/iq3s-perform-single-phase.jpg",
    summary: "Phiên bản multi-turn một pha cho Class A và B, direct torque từ 10 đến 450 Nm và tối đa 60 starts mỗi giờ.",
    description: "IQ3S Perform đưa các khả năng của nền tảng IQ3 Perform vào những vị trí chỉ có nguồn một pha, phục vụ isolation hoặc regulating duty.",
    highlights: ["Nguồn một pha", "Direct torque 10–450 Nm", "Tối đa 60 starts/giờ", "Class A & B"],
    specs: [["Chuyển động", "Multi-turn"], ["Nguồn điện", "1 pha"], ["Direct torque", "10–450 Nm"], ["Nhiệm vụ", "Isolation / Regulating"], ["Duty class", "Class A & B"], ["Tần suất", "Tối đa 60 starts/giờ"]],
    officialUrl: "https://www.rotork.com/en/products/electric-intelligent-actuators/iq3-perform/iq3s-perform-single-phase",
  },
  {
    slug: "iqt3-perform-standard-part-turn",
    name: "IQT3 Perform - Standard Part-turn",
    type: "Part-turn",
    duty: "Isolation / Regulating",
    image: "/images/products/iq3-perform/iqt3-perform-standard-part-turn.jpg",
    summary: "Bộ truyền động part-turn dùng nguồn 3 pha, 1 pha hoặc DC, direct torque từ 50 đến 3.000 Nm.",
    description: "IQT3 Perform Standard Part-turn được thiết kế cho nhiệm vụ isolation hoặc regulating Class A và B, tối đa 60 starts mỗi giờ.",
    highlights: ["Direct torque 50–3.000 Nm", "1 pha · 3 pha · DC", "Tối đa 60 starts/giờ", "Class A & B"],
    specs: [["Chuyển động", "Part-turn"], ["Nguồn điện", "1 pha · 3 pha · DC"], ["Direct torque", "50–3.000 Nm"], ["Nhiệm vụ", "Isolation / Regulating"], ["Duty class", "Class A & B"], ["Tần suất", "Tối đa 60 starts/giờ"]],
    officialUrl: "https://www.rotork.com/en/products/electric-intelligent-actuators/iq3-perform/iqt3-perform-standard-part-turn",
  },
  {
    slug: "iqt3f-perform-full-turn",
    name: "IQT3F Perform - Full-turn",
    type: "Full-turn",
    duty: "Slow / High-torque",
    image: "/images/products/iq3-perform/iqt3f-perform-full-turn.jpg",
    summary: "Phiên bản full-turn cho ứng dụng tốc độ chậm, torque cao, có biến thể tối ưu cho rising stem và non-rising stem.",
    description: "IQT3F Perform sử dụng full worm wheel để tạo đầu ra multi-turn. Biến thể coupling A có direct torque 20–250 Nm; coupling B có direct torque 20–3.000 Nm.",
    highlights: ["Tối đa 1.800 starts/giờ", "Coupling A hoặc B", "Direct torque tới 3.000 Nm", "Class C"],
    specs: [["Chuyển động", "Full-turn / Multi-turn output"], ["Ứng dụng", "Slow · High-torque"], ["Coupling A", "20–250 Nm · Rising stem"], ["Coupling B", "20–3.000 Nm · Non-rising stem"], ["Duty class", "Class C"], ["Tần suất", "Tối đa 1.800 starts/giờ"]],
    officialUrl: "https://www.rotork.com/en/products/electric-intelligent-actuators/iq3-perform/iqt3f-perform-full-turn",
  },
  {
    slug: "iqt3m-perform-modulating",
    name: "IQT3M Perform - Modulating",
    type: "Part-turn modulating",
    duty: "Modulating",
    image: "/images/products/iq3-perform/iqt3m-perform-modulating.jpg",
    summary: "Bộ truyền động part-turn modulating Class C, direct torque từ 50 đến 3.000 Nm và tối đa 1.800 starts mỗi giờ.",
    description: "IQT3M Perform sử dụng solid-state reversing starter và mạch remote control đáp ứng nhanh cho các nhiệm vụ điều khiển modulating.",
    highlights: ["Tối đa 1.800 starts/giờ", "Direct torque 50–3.000 Nm", "Solid-state starter", "Class C"],
    specs: [["Chuyển động", "Part-turn"], ["Nhiệm vụ", "Modulating"], ["Direct torque", "50–3.000 Nm"], ["Duty class", "Class C"], ["Tần suất", "Tối đa 1.800 starts/giờ"], ["Motor control", "Solid-state reversing starter"]],
    officialUrl: "https://www.rotork.com/en/products/electric-intelligent-actuators/iq3-perform/iqt3m-perform-modulating",
  },
];

export function getIQ3PerformModel(slug: string) {
  return iq3PerformModels.find((model) => model.slug === slug);
}
