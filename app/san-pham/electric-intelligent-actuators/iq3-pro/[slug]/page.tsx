import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getIQ3Model, iq3DynamicModels, iq3Models } from "../../../../iq3-models";

type PageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return iq3DynamicModels.map((model) => ({ slug: model.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const model = getIQ3Model(slug);
  if (!model) return {};
  return {
    title: `${model.name} Rotork | IQ3 Pro`,
    description: `${model.summary} Xem thông số, tính năng, tài liệu và yêu cầu báo giá ${model.name} tại Việt Nam.`,
    alternates: { canonical: `/san-pham/electric-intelligent-actuators/iq3-pro/${model.slug}` },
  };
}

export default async function IQ3ModelPage({ params }: PageProps) {
  const { slug } = await params;
  const model = getIQ3Model(slug);
  if (!model || slug === "iqt3-pro") notFound();
  const related = iq3Models.filter((item) => item.slug !== model.slug).slice(0, 3);
  const schema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: model.name,
    image: [`https://rotork.com.vn${model.image}`],
    description: model.summary,
    brand: { "@type": "Brand", name: "Rotork" },
    category: "Electric Intelligent Actuators",
    model: model.name,
    additionalProperty: model.specs.map(([name, value]) => ({ "@type": "PropertyValue", name, value })),
  };
  return (
    <main id="main">
      <section className="model-detail-hero">
        <div className="container">
          <nav className="deep-breadcrumb" aria-label="Breadcrumb"><Link href="/">Trang chủ</Link><span>›</span><Link href="/san-pham">Sản phẩm</Link><span>›</span><Link href="/san-pham/electric-intelligent-actuators/iq3-pro">IQ3 Pro</Link><span>›</span><strong>{model.name}</strong></nav>
          <div className="model-detail-grid">
            <div className="model-detail-copy"><span className="kicker light">ROTORK · IQ3 PRO RANGE</span><div className="model-detail-tags"><span>{model.type}</span><span>{model.duty}</span></div><h1>{model.name}</h1><p>{model.description}</p><div className="model-detail-actions"><Link className="button button-red" href={`/lien-he?model=${encodeURIComponent(model.name)}`}>Yêu cầu báo giá →</Link><a className="button button-outline-light" href={model.officialUrl} target="_blank" rel="noreferrer">Nguồn Rotork ↗</a></div></div>
            <div className="model-detail-image"><div className="model-image-halo"/><Image src={model.image} alt={`${model.name} Rotork`} width={720} height={720} priority /><span>Ảnh sản phẩm chính thức</span></div>
          </div>
        </div>
      </section>

      <section className="model-highlight-strip"><div className="container">{model.highlights.map((highlight, index) => <div key={highlight}><b>{String(index + 1).padStart(2, "0")}</b><span>{highlight}</span></div>)}</div></section>

      <section className="section"><div className="container product-two-col"><div><span className="kicker">TỔNG QUAN MODEL</span><h2>{model.type} cho {model.duty.toLowerCase()}</h2></div><div><p>{model.summary}</p><p>Model này thuộc nền tảng IQ3 Pro với định hướng điều khiển không xâm nhập, độ tin cậy trong môi trường công nghiệp và khả năng tích hợp hệ thống. Cấu hình cuối cùng phải được xác nhận theo dữ liệu van, nguồn điện, duty, enclosure, chứng nhận và giao thức.</p><div className="model-warning"><b>Lưu ý mã hàng</b><p>“{model.name}” là model designation, chưa phải part number đặt hàng hoàn chỉnh.</p></div></div></div></section>

      <section className="spec-section"><div className="container"><div className="section-head split-head"><div><span className="kicker">THÔNG SỐ ĐỊNH HƯỚNG</span><h2>Dữ liệu lựa chọn ban đầu</h2></div><p>Các giá trị dưới đây mô tả phạm vi model. Datasheet của cấu hình được chọn là căn cứ cuối cùng.</p></div><div className="spec-table">{model.specs.map(([label, value]) => <div key={label}><span>{label}</span><strong>{value}</strong></div>)}</div></div></section>

      <section className="section"><div className="container"><div className="section-head"><span className="kicker">NỀN TẢNG IQ3 PRO</span><h2>Các năng lực chung cần được xác nhận theo cấu hình</h2></div><div className="generic-feature-grid"><article><span>01</span><h3>Điều khiển không xâm nhập</h3><p>Thiết lập và vận hành tại chỗ mà không cần mở enclosure trong quy trình thông thường.</p></article><article><span>02</span><h3>Dữ liệu vận hành</h3><p>Data logger, event log và thông tin cấu hình hỗ trợ phân tích tình trạng tài sản.</p></article><article><span>03</span><h3>Kết nối hệ thống</h3><p>Các tùy chọn Ethernet, fieldbus, hardwired và analogue tùy model/cấu hình.</p></article><article><span>04</span><h3>Enclosure công nghiệp</h3><p>Double-sealed và các tùy chọn chứng nhận phải được lựa chọn theo môi trường lắp đặt.</p></article></div></div></section>

      <section className="model-doc-cta"><div className="container"><div><span>OFFICIAL ROTORK SOURCE</span><h2>Đối chiếu tài liệu và revision trước khi đặt hàng</h2><p>Trang nguồn chính thức chứa tài liệu, chứng nhận và wiring diagram liên quan đến model.</p></div><div><a className="button button-white" href={model.officialUrl} target="_blank" rel="noreferrer">Mở trang Rotork ↗</a><a className="model-text-link" href="https://media.rotork.com/api/public/content/pub002-197-00-0523-pdf-rtkimportassetd8ac5a.pdf" target="_blank" rel="noreferrer">IQ3 Pro Range Brochure ↗</a></div></div></section>

      <section className="section section-gray"><div className="container"><div className="section-head split-head"><div><span className="kicker">MODEL LIÊN QUAN</span><h2>Tiếp tục so sánh trong range</h2></div><Link className="text-link" href="/san-pham/electric-intelligent-actuators/iq3-pro">Xem toàn bộ IQ3 Pro →</Link></div><div className="related-model-grid">{related.map((item) => <Link href={`/san-pham/electric-intelligent-actuators/iq3-pro/${item.slug}`} key={item.slug}><div><Image src={item.image} alt={`${item.name} Rotork`} width={420} height={420}/></div><span>{item.type}</span><h3>{item.name}</h3><p>{item.summary}</p><strong>Xem model →</strong></Link>)}</div></div></section>

      <section className="product-final-cta"><div className="container"><div><span>{model.name.toUpperCase()} · REQUEST FOR QUOTATION</span><h2>Cần xác nhận cấu hình và khả năng cung ứng?</h2><p>Gửi nameplate, dữ liệu van và điều kiện vận hành cho Fast Group Engineering.</p></div><Link className="button button-white" href={`/lien-he?model=${encodeURIComponent(model.name)}`}>Gửi RFQ {model.name} →</Link></div></section>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    </main>
  );
}
