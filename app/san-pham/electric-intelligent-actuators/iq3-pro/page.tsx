import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { iq3Models } from "../../../iq3-models";

export const metadata: Metadata = {
  title: "IQ3 Pro Rotork | Dòng bộ truyền động điện thông minh",
  description: "Tổng quan dòng Rotork IQ3 Pro: bộ truyền động multi-turn, part-turn và modulating thông minh. Xem model, tính năng, tài liệu và yêu cầu báo giá tại Việt Nam.",
  alternates: { canonical: "/san-pham/electric-intelligent-actuators/iq3-pro" },
};

export default function IQ3ProRangePage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Dòng bộ truyền động Rotork IQ3 Pro",
    url: "https://rotork.com.vn/san-pham/electric-intelligent-actuators/iq3-pro",
    mainEntity: { "@type": "ItemList", itemListElement: iq3Models.map((product, index) => ({ "@type": "ListItem", position: index + 1, name: product.name, url: `https://rotork.com.vn/san-pham/electric-intelligent-actuators/iq3-pro/${product.slug}` })) },
  };
  return (
    <main id="main">
      <section className="range-hero">
        <div className="container">
          <nav className="deep-breadcrumb" aria-label="Breadcrumb"><Link href="/">Trang chủ</Link><span>›</span><Link href="/san-pham">Sản phẩm</Link><span>›</span><Link href="/san-pham">Electric Intelligent Actuators</Link><span>›</span><strong>IQ3 Pro</strong></nav>
          <div className="range-hero-grid">
            <div><span className="kicker light">ELECTRIC INTELLIGENT ACTUATORS</span><h1>IQ3 Pro</h1><p>Dòng bộ truyền động điện thông minh được phát triển cho độ tin cậy cao, vận hành không xâm nhập và khả năng chẩn đoán tài sản trong môi trường công nghiệp khắc nghiệt.</p><div className="range-actions"><Link className="button button-red" href="#model-trong-range">Chọn model <span>↓</span></Link><Link className="button button-outline-light" href="/lien-he?model=IQ3%20Pro">Yêu cầu tư vấn</Link></div></div>
            <div className="range-hero-visual"><div className="range-image-circle" /><Image src="/images/products/iq3-pro-range/iq3-pro.jpg" alt="Bộ truyền động điện thông minh Rotork IQ3 Pro" width={700} height={700} priority /><span>Connected<br/>actuation platform</span></div>
          </div>
        </div>
      </section>

      <section className="range-facts"><div className="container"><div><strong>IP66/68</strong><span>Double-sealed enclosure<br/>7 m trong 72 giờ</span></div><div><strong>SIL2/3</strong><span>Phù hợp ứng dụng an toàn<br/>tùy cấu hình/chứng nhận</span></div><div><strong>Rotork App</strong><span>Cấu hình và trích xuất<br/>dữ liệu vận hành</span></div><div><strong>Connected</strong><span>Hỗ trợ nhiều giao thức<br/>và hệ thống điều khiển</span></div></div></section>

      <section className="section"><div className="container range-intro"><div><span className="kicker">TỔNG QUAN RANGE</span><h2>Một nền tảng, nhiều nhiệm vụ điều khiển van</h2></div><div><p>IQ3 Pro kết hợp hệ thống điều khiển tại chỗ không xâm nhập, màn hình đa ngôn ngữ, data logger và khả năng kết nối để hỗ trợ vận hành và bảo trì dự đoán.</p><p>Range bao gồm các phiên bản multi-turn, part-turn, modulating, single-phase, DC và những cấu hình chuyên dụng. Model cụ thể phải được lựa chọn theo loại van, torque/thrust, duty, nguồn điện và chứng nhận yêu cầu.</p></div></div></section>

      <section className="section section-gray" id="model-trong-range"><div className="container"><div className="section-head split-head"><div><span className="kicker">13 MODEL TRONG RANGE</span><h2>Chọn theo chuyển động và nhiệm vụ</h2></div><p>Danh mục đã bao gồm đầy đủ các model IQ3 Pro hiện có trong bộ dữ liệu chính thức, mỗi model có trang chi tiết và URL SEO riêng.</p></div><div className="range-product-grid">
        {iq3Models.map((product) => <article className="range-product-card" key={product.name}><div className="range-product-image"><Image src={product.image} alt={`${product.name} Rotork`} width={600} height={600} /></div><div><span>{product.type}</span><h3>{product.name}</h3><p>{product.summary}</p><Link href={`/san-pham/electric-intelligent-actuators/iq3-pro/${product.slug}`}>Xem chi tiết model →</Link></div></article>)}
      </div></div></section>

      <section className="section"><div className="container selection-layout"><div className="selection-copy"><span className="kicker">HƯỚNG DẪN LỰA CHỌN</span><h2>Ba câu hỏi trước khi chọn actuator</h2><p>Không nên lựa chọn chỉ dựa trên tên range. Cấu hình cần được đối chiếu với dữ liệu van và điều kiện vận hành thực tế.</p><Link className="button button-dark" href="/lien-he?model=IQ3%20Pro">Gửi thông tin lựa chọn →</Link></div><div className="selection-steps"><article><b>01</b><div><h3>Van cần chuyển động gì?</h3><p>Multi-turn, part-turn hay linear; góc quay và hành trình yêu cầu.</p></div></article><article><b>02</b><div><h3>Nhiệm vụ vận hành nào?</h3><p>Isolation, regulating hoặc modulating; tần suất đóng mở và tốc độ.</p></div></article><article><b>03</b><div><h3>Điều kiện môi trường?</h3><p>Nguồn điện, IP, nhiệt độ, hazardous area, SIL và giao thức kết nối.</p></div></article></div></div></section>

      <section className="range-doc-band"><div className="container"><div><span className="kicker light">TÀI LIỆU RANGE</span><h2>Tài liệu kỹ thuật IQ3 Pro</h2><p>Liên kết tới tài liệu do Rotork phát hành. Cần kiểm tra revision phù hợp trước khi sử dụng cho dự án.</p></div><div className="range-doc-list"><a href="https://media.rotork.com/api/public/content/pub002-197-00-0523-pdf-rtkimportassetd8ac5a.pdf" target="_blank" rel="noreferrer"><span>PUB002-197</span><strong>IQ3 Pro Range Brochure</strong><b>↗</b></a><a href="https://media.rotork.com/api/public/content/pub002-200-00-0823-pdf-rtkimportassetd914a6.pdf" target="_blank" rel="noreferrer"><span>PUB002-200</span><strong>Control & Monitoring</strong><b>↗</b></a><a href="https://media.rotork.com/api/public/content/pub002-040-000413-pdf-rtkimportasset5267c3.pdf" target="_blank" rel="noreferrer"><span>PUB002-040</span><strong>Full Configuration Manual</strong><b>↗</b></a></div></div></section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
    </main>
  );
}
