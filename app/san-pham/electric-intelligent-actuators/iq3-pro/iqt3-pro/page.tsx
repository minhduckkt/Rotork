import type { Metadata } from "next";
import Link from "next/link";
import { ProductGallery } from "../../../../components/ProductGallery";

export const metadata: Metadata = {
  title: "IQT3 Pro Rotork | Bộ truyền động điện part-turn",
  description: "Thông tin Rotork IQT3 Pro: bộ truyền động part-turn thông minh, IP66/68, SIL2/3, tính năng, tài liệu và yêu cầu báo giá tại Việt Nam.",
  alternates: { canonical: "/san-pham/electric-intelligent-actuators/iq3-pro/iqt3-pro" },
};

const specs = [
  ["Loại chuyển động", "Part-turn"], ["Nguồn điện", "1 pha · 3 pha · DC"], ["Nhiệm vụ", "Isolation / Regulating"], ["Tần suất", "Tối đa 1.200 starts/giờ"],
  ["Cấp bảo vệ", "IP66/68 · 7 m / 72 giờ"], ["An toàn chức năng", "SIL2/3"], ["Cấu hình", "Rotork App / Setting Tool"], ["Kết nối", "Fieldbus · Ethernet · Hardwired"],
];

const featureGroups = [
  { index: "01", title: "Độ tin cậy trong môi trường khắc nghiệt", items: ["Double-sealed enclosure không phụ thuộc terminal cover hoặc cable gland sealing", "Oil bath lubrication giúp kéo dài tuổi thọ và hỗ trợ nhiều hướng lắp đặt", "Theo dõi vị trí liên tục, kể cả khi mất nguồn"] },
  { index: "02", title: "Điều khiển và cấu hình thông minh", items: ["Điều khiển tại chỗ không xâm nhập", "Cấu hình bằng Rotork Bluetooth Setting Tool Pro", "Màn hình đa ngôn ngữ hiển thị trạng thái và thông tin vận hành"] },
  { index: "03", title: "Dữ liệu phục vụ bảo trì", items: ["Data logger lưu torque, starts profile, event log và cấu hình", "Trích xuất dữ liệu qua Rotork App", "Phân tích bằng Insight 2 hoặc nền tảng iAM theo hệ thống được triển khai"] },
];

const documents = [
  { code: "PUB002-209", type: "Product flyer", title: "IQT3 Pro Range Part-turn Flyer", url: "https://media.rotork.com/api/public/content/pub002-209-00-0823-pdf-rtkimportassete26fb2.pdf" },
  { code: "PUB002-197", type: "Product brochure", title: "IQ3 Pro Range Brochure", url: "https://media.rotork.com/api/public/content/pub002-197-00-0523-pdf-rtkimportassetd8ac5a.pdf" },
  { code: "PUB002-212", type: "Technical information", title: "IQT3 Pro Electrical Motor Data", url: "https://media.rotork.com/api/public/content/pub002-212-00-1023-pdf-rtkimportasset685e62.pdf" },
  { code: "PUB002-040", type: "Manual", title: "IQ3/IQT3 Pro Full Configuration Manual", url: "https://media.rotork.com/api/public/content/pub002-040-000413-pdf-rtkimportasset5267c3.pdf" },
  { code: "PUB002-065", type: "Manual", title: "IQT3 Pro Safe Use & Installation Manual", url: "https://media.rotork.com/api/public/content/pub002-065-000515-pdf-rtkimportasset363674.pdf" },
];

export default function IQT3ProPage() {
  const productSchema = { "@context": "https://schema.org", "@type": "Product", name: "IQT3 Pro", image: ["https://rotork.com.vn/images/products/iqt3-pro.jpg"], description: "Bộ truyền động điện part-turn thông minh Rotork IQT3 Pro cho isolation và regulating duties.", brand: { "@type": "Brand", name: "Rotork" }, category: "Electric Intelligent Actuators", model: "IQT3 Pro", additionalProperty: specs.map(([name, value]) => ({ "@type": "PropertyValue", name, value })) };
  const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: [
    { "@type": "Question", name: "IQT3 Pro là model hay part number hoàn chỉnh?", acceptedAnswer: { "@type": "Answer", text: "IQT3 Pro là tên model/range designation. Mã đặt hàng hoàn chỉnh cần được xác nhận theo cấu hình kỹ thuật cụ thể." } },
    { "@type": "Question", name: "IQT3 Pro có giá niêm yết không?", acceptedAnswer: { "@type": "Answer", text: "Không có giá hiện hành được xác minh để niêm yết. Giá được báo theo cấu hình, số lượng và điều kiện giao hàng." } },
    { "@type": "Question", name: "IQT3 Pro hỗ trợ những nguồn điện nào?", acceptedAnswer: { "@type": "Answer", text: "Dòng IQT3 Pro có các phiên bản 1 pha, 3 pha và DC; cần xác nhận phiên bản theo ứng dụng." } },
  ] };
  return (
    <main id="main">
      <section className="product-detail-head"><div className="container"><nav className="deep-breadcrumb dark" aria-label="Breadcrumb"><Link href="/">Trang chủ</Link><span>›</span><Link href="/san-pham">Sản phẩm</Link><span>›</span><Link href="/san-pham/electric-intelligent-actuators/iq3-pro">IQ3 Pro</Link><span>›</span><strong>IQT3 Pro</strong></nav></div></section>
      <section className="product-buy-section"><div className="container product-buy-grid"><ProductGallery /><div className="product-summary"><span className="product-brand-label">ROTORK · IQ3 PRO RANGE</span><div className="product-status-row"><span>Model hiện hành</span><span>Official-source data</span></div><h1>IQT3 Pro</h1><h2>Bộ truyền động điện part-turn thông minh</h2><p>IQT3 Pro được thiết kế cho isolation hoặc regulating duties, kết hợp độ tin cậy trong môi trường khắc nghiệt với khả năng cấu hình, chẩn đoán và kết nối hệ thống hiện đại.</p><div className="summary-highlights"><div><span>Cấp bảo vệ</span><strong>IP66/68</strong></div><div><span>An toàn</span><strong>SIL2/3</strong></div><div><span>Điều khiển</span><strong>Part-turn</strong></div></div><div className="model-warning"><b>Lưu ý mã hàng</b><p>“IQT3 Pro” là model, chưa phải part number đặt hàng hoàn chỉnh. Cấu hình cần được xác nhận trước khi báo giá.</p></div><div className="product-price"><span>Giá sản phẩm</span><strong>Liên hệ báo giá</strong><small>Theo cấu hình, số lượng và lead time</small></div><div className="product-buttons"><Link className="button button-red" href="/lien-he?model=IQT3%20Pro">Yêu cầu báo giá →</Link><a className="button button-outline-dark" href="tel:+84938888958">Gọi tư vấn</a></div><div className="product-support-line"><span>✓ Kiểm tra cấu hình</span><span>✓ Tài liệu kỹ thuật</span><span>✓ Hỗ trợ CO/CQ</span></div></div></div></section>

      <nav className="product-anchor-nav" aria-label="Nội dung sản phẩm"><div className="container"><a href="#tong-quan">Tổng quan</a><a href="#thong-so">Thông số</a><a href="#tinh-nang">Tính năng</a><a href="#tai-lieu">Tài liệu</a><a href="#faq">FAQ</a></div></nav>

      <section className="section product-overview" id="tong-quan"><div className="container product-two-col"><div><span className="kicker">TỔNG QUAN SẢN PHẨM</span><h2>Điều khiển part-turn có kết nối cho hệ thống công nghiệp</h2></div><div><p>IQT3 Pro là bộ truyền động điện part-turn trong nền tảng IQ3 Pro. Sản phẩm có các phiên bản 1 pha, 3 pha và DC, phục vụ nhiệm vụ isolation hoặc regulating với tần suất lên đến 1.200 starts mỗi giờ theo điều kiện được nêu bởi nhà sản xuất.</p><p>Thiết kế double-sealed, điều khiển không xâm nhập, data logger và khả năng làm việc với nhiều hệ thống mạng giúp model phù hợp cho những vị trí yêu cầu độ tin cậy và khả năng giám sát cao.</p><div className="source-note"><b>Phạm vi thông tin</b><span>Nội dung trang được biên tập từ trang và tài liệu Rotork. Thông số cuối cùng phụ thuộc cấu hình được chọn.</span></div></div></div></section>

      <section className="spec-section" id="thong-so"><div className="container"><div className="section-head split-head"><div><span className="kicker">THÔNG SỐ CHÍNH</span><h2>Dữ liệu phục vụ lựa chọn ban đầu</h2></div><p>Bảng này không thay thế datasheet hoặc xác nhận kỹ thuật cho một part number hoàn chỉnh.</p></div><div className="spec-table">{specs.map(([label, value]) => <div key={label}><span>{label}</span><strong>{value}</strong></div>)}</div><div className="network-callout"><div><span>NETWORK COMPATIBILITY</span><strong>EtherNet/IP · Modbus TCP · PROFINET</strong></div><p>Các tùy chọn fieldbus, hardwired và analogue khác cần được xác nhận theo cấu hình.</p></div></div></section>

      <section className="section" id="tinh-nang"><div className="container"><div className="section-head"><span className="kicker">TÍNH NĂNG NỔI BẬT</span><h2>Thiết kế hướng tới độ tin cậy và khả năng bảo trì</h2></div><div className="feature-group-grid">{featureGroups.map(group => <article key={group.index}><span>{group.index}</span><h3>{group.title}</h3><ul>{group.items.map(item => <li key={item}>{item}</li>)}</ul></article>)}</div></div></section>

      <section className="application-band"><div className="container"><div><span className="kicker light">BỐI CẢNH ỨNG DỤNG</span><h2>Phù hợp khi hệ thống cần</h2></div><div className="application-grid"><article><b>Isolation & regulating</b><p>Điều khiển van part-turn bằng nguồn 1 pha, 3 pha hoặc DC.</p></article><article><b>Hazardous environment</b><p>Yêu cầu thiết kế watertight, explosionproof và chứng nhận phù hợp.</p></article><article><b>Asset diagnostics</b><p>Theo dõi torque, starts, event log và dữ liệu vận hành.</p></article><article><b>Plant connectivity</b><p>Tích hợp mạng công nghiệp và hệ thống điều khiển từ xa.</p></article></div></div></section>

      <section className="section documents-section" id="tai-lieu"><div className="container"><div className="section-head split-head"><div><span className="kicker">TÀI LIỆU KỸ THUẬT</span><h2>Tài liệu chính thức liên quan</h2></div><p>Trang Rotork hiện liên kết 27 tài liệu cho model/range này. Dưới đây là năm tài liệu quan trọng phục vụ bước lựa chọn ban đầu.</p></div><div className="document-table"><div className="document-head"><span>Mã tài liệu</span><span>Loại</span><span>Tên tài liệu</span><span></span></div>{documents.map(doc => <a href={doc.url} target="_blank" rel="noreferrer" key={doc.code}><span>{doc.code}</span><span>{doc.type}</span><strong>{doc.title}</strong><b>PDF ↗</b></a>)}</div><p className="document-revision-note">Hãy kiểm tra revision và ngôn ngữ của tài liệu trước khi dùng cho hồ sơ dự án hoặc phê duyệt kỹ thuật.</p></div></section>

      <section className="section section-gray" id="faq"><div className="container faq-layout"><div><span className="kicker">CÂU HỎI THƯỜNG GẶP</span><h2>Thông tin cần biết trước khi gửi RFQ</h2><p>Nếu bạn đã có ảnh nameplate hoặc datasheet của van, hãy gửi kèm để rút ngắn thời gian kiểm tra.</p></div><div className="faq-list"><details open><summary>IQT3 Pro là model hay part number hoàn chỉnh?</summary><p>IQT3 Pro là tên model/range designation. Part number đặt hàng cần thể hiện đầy đủ các tùy chọn về nguồn điện, output, controls, enclosure, chứng nhận và phụ kiện.</p></details><details><summary>IQT3 Pro có giá niêm yết không?</summary><p>Chưa có giá hiện hành chính thức được xác minh để niêm yết. Fast Group Engineering báo giá theo cấu hình, số lượng, nguồn hàng và điều kiện giao.</p></details><details><summary>Cần cung cấp gì để chọn đúng cấu hình?</summary><p>Thông tin van, torque yêu cầu, nguồn điện, duty, thời gian đóng mở, môi trường, IP/chứng nhận, tín hiệu điều khiển và số lượng.</p></details><details><summary>Có thể thay thế một actuator Rotork cũ bằng IQT3 Pro không?</summary><p>Cần đối chiếu model cũ, mechanical interface, output, controls và site wiring. Không nên xác nhận thay thế chỉ dựa trên tên range.</p></details></div></div></section>

      <section className="product-final-cta"><div className="container"><div><span>IQT3 PRO · REQUEST FOR QUOTATION</span><h2>Để chúng tôi kiểm tra đúng cấu hình cho bạn</h2><p>Gửi model, ảnh nameplate, thông số van và yêu cầu vận hành.</p></div><Link className="button button-white" href="/lien-he?model=IQT3%20Pro">Gửi RFQ IQT3 Pro →</Link></div></section>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
    </main>
  );
}
