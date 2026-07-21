import type { Metadata } from "next";
import { Breadcrumb } from "../components/Breadcrumb";
import { ProductExplorer } from "../components/ProductExplorer";
import { products } from "../data";

export const metadata: Metadata = {
  title: "Danh mục sản phẩm Rotork",
  description: "Tra cứu các dòng bộ truyền động, hộp số, valve positioner và thiết bị điều khiển Rotork. Liên hệ Fast Group Engineering để chọn cấu hình và báo giá.",
  alternates: { canonical: "/san-pham" },
};

export default function ProductsPage() {
  const itemList = { "@context": "https://schema.org", "@type": "ItemList", itemListElement: products.map((product, index) => ({ "@type": "ListItem", position: index + 1, name: `${product.name} Rotork`, url: `https://rotork.com.vn/lien-he?model=${encodeURIComponent(product.name)}` })) };
  return (
    <main id="main">
      <section className="page-hero compact">
        <div className="container"><Breadcrumb current="Sản phẩm" /><span className="kicker light">PRODUCT CATALOG</span><h1>Danh mục sản phẩm Rotork</h1><p>Tìm theo model, range hoặc nhóm ứng dụng. Giá bán được xác nhận theo đúng cấu hình và số lượng thực tế.</p></div>
      </section>
      <section className="section products-section"><div className="container"><ProductExplorer /></div></section>
      <section className="support-band"><div className="container"><div><h2>Không tìm thấy model bạn cần?</h2><p>Thư viện hiện có 775 hồ sơ sản phẩm và range. Hãy gửi mã hoặc ảnh nameplate để chúng tôi tra cứu sâu hơn.</p></div><a className="button button-red" href="/lien-he">Yêu cầu tra cứu →</a></div></section>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemList) }} />
    </main>
  );
}
