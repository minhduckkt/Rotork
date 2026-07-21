import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { categories, products, stats } from "./data";
import { BlogCard } from "./components/BlogCard";
import { blogArticles } from "./blog-data";

export const metadata: Metadata = {
  title: "Sản phẩm Rotork chính hãng tại Việt Nam",
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <main id="main">
      <section className="home-hero">
        <div className="hero-lines" aria-hidden="true" />
        <div className="container home-hero-grid">
          <div className="hero-copy">
            <div className="eyebrow">FAST GROUP ENGINEERING · VIỆT NAM</div>
            <h1>Sản phẩm Rotork chính hãng cho hệ thống <em>flow control</em></h1>
            <p>Tra cứu model, thông số và tài liệu kỹ thuật. Chúng tôi hỗ trợ lựa chọn cấu hình, kiểm tra mã thay thế và báo giá cho nhà máy, dự án và khách hàng công nghiệp.</p>
            <form className="hero-search" action="/san-pham" method="get">
              <input name="q" aria-label="Tìm model Rotork" placeholder="Nhập model: IQT3 Pro, CVQ, GP/GH…" />
              <button type="submit">Tìm sản phẩm</button>
            </form>
            <div className="hero-actions">
              <Link className="button button-red" href="/san-pham">Xem danh mục <span>→</span></Link>
              <Link className="button button-outline-light" href="/lien-he">Gửi ảnh nameplate</Link>
            </div>
          </div>
          <div className="hero-product">
            <div className="hero-product-halo" />
            <Image src="/images/products/iqt3-pro.jpg" alt="Bộ truyền động Rotork IQT3 Pro" width={700} height={700} priority />
            <div className="hero-product-label"><span>Model nổi bật</span><strong>IQT3 Pro</strong><small>Intelligent part-turn actuator</small></div>
          </div>
        </div>
      </section>

      <section className="trust-strip">
        <div className="container trust-grid">
          <div><b>01</b><span><strong>Đúng model</strong>Đối chiếu mã và cấu hình</span></div>
          <div><b>02</b><span><strong>Tài liệu chính thức</strong>Brochure, manual, chứng nhận</span></div>
          <div><b>03</b><span><strong>Phản hồi rõ ràng</strong>Giá, nguồn hàng và lead time</span></div>
          <div><b>04</b><span><strong>Hỗ trợ kỹ thuật</strong>Từ RFQ đến giao hàng</span></div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head split-head">
            <div><span className="kicker">DANH MỤC SẢN PHẨM</span><h2>Tìm đúng giải pháp cho từng hệ thống van</h2></div>
            <p>Danh mục được tổ chức theo dòng sản phẩm, range và model để khách hàng kỹ thuật tra cứu nhanh hơn.</p>
          </div>
          <div className="category-grid">
            {categories.map((category) => (
              <Link className="category-card" href={category.accent === "IQ" ? "/san-pham/electric-intelligent-actuators/iq3-pro" : "/san-pham"} key={category.name}>
                <div className="category-top"><span>{category.accent}</span><b>{category.count} model</b></div>
                <h3>{category.name}</h3><small>{category.en}</small><p>{category.description}</p><strong>Khám phá dòng sản phẩm →</strong>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-gray" id="san-pham-noi-bat">
        <div className="container">
          <div className="section-head split-head"><div><span className="kicker">MODEL NỔI BẬT</span><h2>Những dòng Rotork được quan tâm</h2></div><Link className="text-link" href="/san-pham">Xem toàn bộ sản phẩm →</Link></div>
          <div className="featured-products">
            {products.slice(0, 3).map((product) => (
              <article className="featured-card" key={product.name}>
                <div className="featured-image"><Image src={product.image} alt={`${product.name} Rotork`} width={600} height={600} /></div>
                <div><span>{product.range}</span><h3>{product.name}</h3><p>{product.summary}</p><Link href={product.name === "IQT3 Pro" ? "/san-pham/electric-intelligent-actuators/iq3-pro/iqt3-pro" : `/lien-he?model=${encodeURIComponent(product.name)}`}>{product.name === "IQT3 Pro" ? "Xem thông tin chi tiết" : "Nhận tư vấn & báo giá"} →</Link></div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section dark-section">
        <div className="container">
          <div className="stats-intro"><span className="kicker light">NỀN TẢNG DỮ LIỆU</span><h2>Thông tin sản phẩm được tổ chức từ nguồn Rotork</h2><p>Mỗi hồ sơ đều được phân loại theo mức độ sẵn sàng. Thông số chưa đủ bằng chứng sẽ không được suy đoán hoặc dùng như mã đặt hàng.</p></div>
          <div className="stats-grid">{stats.map((stat) => <div key={stat.label}><strong>{stat.value}</strong><span>{stat.label}</span></div>)}</div>
        </div>
      </section>

      <section className="section home-knowledge-section">
        <div className="container">
          <div className="section-head split-head"><div><span className="kicker">KIẾN THỨC ROTORK</span><h2>Chọn đúng model từ dữ liệu có nguồn</h2></div><div><p>Từ cách đọc nameplate đến lựa chọn actuator, mỗi bài viết giúp đội ngũ kỹ thuật đi từ nhu cầu thực tế tới đúng trang sản phẩm.</p><Link className="text-link" href="/kien-thuc">Xem 30 bài hướng dẫn →</Link></div></div>
          <div className="blog-grid">{blogArticles.filter((article) => [1, 6, 16].includes(article.order)).map((article) => <BlogCard article={article} key={article.slug} />)}</div>
        </div>
      </section>

      <section className="section cta-section">
        <div className="container cta-card"><div><span className="kicker">CẦN KIỂM TRA MODEL?</span><h2>Gửi part number, BOM hoặc ảnh nameplate</h2><p>Fast Group Engineering sẽ kiểm tra cấu hình, tài liệu, khả năng cung ứng và thời gian giao hàng.</p></div><Link className="button button-white" href="/lien-he">Gửi yêu cầu ngay <span>→</span></Link></div>
      </section>
    </main>
  );
}
