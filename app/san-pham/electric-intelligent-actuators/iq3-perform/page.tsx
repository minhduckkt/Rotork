import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { iq3PerformModels } from "../../../iq3-perform-models";

export const metadata: Metadata = {
  title: "IQ3 Perform Rotork | Bộ truyền động điện thông minh",
  description: "Dòng Rotork IQ3 Perform gồm actuator multi-turn, part-turn, single-phase, DC và modulating. Xem 7 model, thông số và yêu cầu báo giá tại Việt Nam.",
  alternates: { canonical: "/san-pham/electric-intelligent-actuators/iq3-perform" },
};

export default function IQ3PerformRangePage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Dòng bộ truyền động Rotork IQ3 Perform",
    url: "https://rotork.com.vn/san-pham/electric-intelligent-actuators/iq3-perform",
    mainEntity: { "@type": "ItemList", itemListElement: iq3PerformModels.map((product, index) => ({ "@type": "ListItem", position: index + 1, name: product.name, url: `https://rotork.com.vn/san-pham/electric-intelligent-actuators/iq3-perform/${product.slug}` })) },
  };
  return (
    <main id="main">
      <section className="range-hero">
        <div className="container">
          <nav className="deep-breadcrumb" aria-label="Breadcrumb"><Link href="/">Trang chủ</Link><span>›</span><Link href="/san-pham">Sản phẩm</Link><span>›</span><Link href="/san-pham">Electric Intelligent Actuators</Link><span>›</span><strong>IQ3 Perform</strong></nav>
          <div className="range-hero-grid">
            <div><span className="kicker light">ELECTRIC INTELLIGENT ACTUATORS</span><h1>IQ3 Perform</h1><p>Dòng bộ truyền động điện thông minh cho isolation, regulating và modulating duty, kết hợp position tracking liên tục, cấu hình không xâm nhập và dữ liệu chẩn đoán phục vụ quản lý tài sản.</p><div className="range-actions"><Link className="button button-red" href="#model-trong-range">Chọn model <span>↓</span></Link><Link className="button button-outline-light" href="/lien-he?model=IQ3%20Perform">Yêu cầu tư vấn</Link></div></div>
            <div className="range-hero-visual"><div className="range-image-circle" /><Image src="/images/products/iq3-perform/iq3-perform-standard-multi-turn.jpg" alt="Bộ truyền động điện thông minh Rotork IQ3 Perform" width={700} height={700} priority /><span>Performance<br/>actuation platform</span></div>
          </div>
        </div>
      </section>

      <section className="range-facts"><div className="container"><div><strong>IP66/68</strong><span>Double-sealed enclosure<br/>7 m trong 72 giờ</span></div><div><strong>7 models</strong><span>Multi-turn, part-turn,<br/>DC và modulating</span></div><div><strong>BTST</strong><span>Cấu hình qua Bluetooth®<br/>Setting Tool Pro</span></div><div><strong>Data logger</strong><span>Trend và diagnostic data<br/>cho asset management</span></div></div></section>

      <section className="section"><div className="container range-intro"><div><span className="kicker">TỔNG QUAN RANGE</span><h2>Từ isolation đến modulating duty</h2></div><div><p>IQ3 Perform duy trì position tracking ngay cả khi mất nguồn; giao diện đồ họa, remote indication và data logger vẫn có thể truy cập theo mô tả của nhà sản xuất.</p><p>Dòng sản phẩm gồm nguồn 1 pha, 3 pha và DC, direct torque từ 10 Nm đến 3.000 Nm tùy model. Việc lựa chọn cuối cùng cần dựa trên loại van, torque, duty, tốc độ, nguồn điện và điều kiện môi trường.</p></div></div></section>

      <section className="section section-gray" id="model-trong-range"><div className="container"><div className="section-head split-head"><div><span className="kicker">7 MODEL TRONG RANGE</span><h2>Chọn theo chuyển động, nguồn điện và duty</h2></div><p>Mỗi model có trang riêng với mô tả tiếng Việt, thông số định hướng, nguồn Rotork và biểu mẫu yêu cầu báo giá.</p></div><div className="range-product-grid">
        {iq3PerformModels.map((product) => <article className="range-product-card" key={product.name}><div className="range-product-image"><Image src={product.image} alt={`${product.name} Rotork`} width={600} height={600} /></div><div><span>{product.type}</span><h3>{product.name}</h3><p>{product.summary}</p><Link href={`/san-pham/electric-intelligent-actuators/iq3-perform/${product.slug}`}>Xem chi tiết model →</Link></div></article>)}
      </div></div></section>

      <section className="section"><div className="container selection-layout"><div className="selection-copy"><span className="kicker">HƯỚNG DẪN LỰA CHỌN</span><h2>Bắt đầu từ dữ liệu van và duty</h2><p>Tên model chỉ xác định nền tảng. Torque/thrust, tốc độ, nguồn điện, enclosure, điều khiển và chứng nhận phải được xác nhận trước khi đặt hàng.</p><Link className="button button-dark" href="/lien-he?model=IQ3%20Perform">Gửi thông tin lựa chọn →</Link></div><div className="selection-steps"><article><b>01</b><div><h3>Multi-turn hay part-turn?</h3><p>Xác định loại chuyển động, góc quay, hành trình và cơ cấu ghép nối với van.</p></div></article><article><b>02</b><div><h3>Class A/B hay Class C?</h3><p>Isolation, regulating hoặc modulating; số starts mỗi giờ và tốc độ yêu cầu.</p></div></article><article><b>03</b><div><h3>Nguồn và môi trường?</h3><p>1 pha, 3 pha hoặc DC; nhiệt độ, IP, hazardous area và giao thức điều khiển.</p></div></article></div></div></section>

      <section className="range-doc-band"><div className="container"><div><span className="kicker light">TÀI LIỆU RANGE</span><h2>IQ3 Perform Brochure</h2><p>Tài liệu chính thức do Rotork phát hành. Cần kiểm tra revision và phạm vi model phù hợp với dự án.</p></div><div className="range-doc-list"><a href="https://media.rotork.com/api/public/content/pub002-400-000325rotorkiq3performbrochure-pdf-slpjhemhta6sp28nnyq6.pdf" target="_blank" rel="noreferrer"><span>PUB002-400</span><strong>IQ3 Perform Brochure</strong><b>↗</b></a><a href="https://www.rotork.com/en/products/electric-intelligent-actuators/iq3-perform" target="_blank" rel="noreferrer"><span>ROTORK.COM</span><strong>Official IQ3 Perform Range</strong><b>↗</b></a><Link href="/san-pham/electric-intelligent-actuators/iq3-pro"><span>SO SÁNH RANGE</span><strong>Xem dòng IQ3 Pro</strong><b>→</b></Link></div></div></section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
    </main>
  );
}
