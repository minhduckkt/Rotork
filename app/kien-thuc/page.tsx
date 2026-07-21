import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { BlogCard } from "../components/BlogCard";
import { blogArticles, blogCategories } from "../blog-data";

export const metadata: Metadata = {
  title: "Kiến thức Rotork: lựa chọn model, part number và ứng dụng",
  description: "30 bài hướng dẫn tra cứu part number, lựa chọn actuator, gearbox, Bifold, YTC, Fairchild và yêu cầu báo giá Rotork tại Việt Nam.",
  alternates: { canonical: "/kien-thuc" },
  openGraph: {
    title: "Thư viện kiến thức Rotork Việt Nam",
    description: "Hướng dẫn kỹ thuật và mua hàng Rotork dành cho nhà máy, dự án và đội ngũ bảo trì.",
    url: "/kien-thuc",
  },
};

export default function KnowledgePage() {
  const featured = blogArticles.filter((article) => article.featured);
  const lead = featured.find((article) => article.order === 6) ?? featured[0];
  const supporting = featured.filter((article) => article.slug !== lead.slug).slice(0, 3);

  return (
    <main id="main">
      <section className="knowledge-hero">
        <div className="knowledge-grid-lines" aria-hidden="true" />
        <div className="container knowledge-hero-grid">
          <div>
            <nav className="deep-breadcrumb" aria-label="Breadcrumb"><Link href="/">Trang chủ</Link><span>›</span><strong>Kiến thức</strong></nav>
            <span className="kicker light">THƯ VIỆN KỸ THUẬT · FAST GROUP ENGINEERING</span>
            <h1>Hiểu đúng sản phẩm.<br/><em>Chọn đúng cấu hình.</em></h1>
            <p>Hướng dẫn tra cứu model, part number, lựa chọn actuator và chuẩn bị hồ sơ báo giá Rotork cho nhà máy, dự án và đội ngũ bảo trì tại Việt Nam.</p>
            <div className="knowledge-hero-actions"><a className="button button-red" href="#tat-ca-bai-viet">Khám phá 30 bài viết →</a><Link className="button button-outline-light" href="/lien-he">Gửi câu hỏi kỹ thuật</Link></div>
          </div>
          <div className="knowledge-hero-metrics">
            <div><strong>30</strong><span>Bài hướng dẫn chuyên sâu</span></div>
            <div><strong>06</strong><span>Cụm chủ đề kỹ thuật</span></div>
            <div><strong>701</strong><span>Model/cấu hình trên website</span></div>
          </div>
        </div>
      </section>

      <section className="section knowledge-featured">
        <div className="container">
          <div className="section-head split-head"><div><span className="kicker">NÊN ĐỌC TRƯỚC</span><h2>Nền tảng để tra cứu và lựa chọn Rotork</h2></div><p>Bắt đầu từ cách nhận diện model, sau đó đi sâu vào từng nhóm actuator, gearbox và thiết bị instrumentation.</p></div>
          <div className="knowledge-lead-grid">
            <article className="knowledge-lead-card">
              <Link className="knowledge-lead-image" href={`/kien-thuc/${lead.slug}`}><Image src={lead.image} alt={lead.imageAlt} fill priority sizes="(max-width: 980px) 100vw, 58vw" /></Link>
              <div><span>{lead.category}</span><small>{lead.readTime} phút đọc</small><h2><Link href={`/kien-thuc/${lead.slug}`}>{lead.title}</Link></h2><p>{lead.excerpt}</p><Link className="button button-red" href={`/kien-thuc/${lead.slug}`}>Đọc hướng dẫn IQ3 Pro →</Link></div>
            </article>
            <div className="knowledge-supporting-list">{supporting.map((article) => <BlogCard article={article} compact key={article.slug} />)}</div>
          </div>
        </div>
      </section>

      <section className="knowledge-categories">
        <div className="container">
          <span className="kicker light">ĐỌC THEO CHỦ ĐỀ</span>
          <div className="knowledge-category-grid">{blogCategories.map((category, index) => {
            const count = blogArticles.filter((article) => article.category === category).length;
            return <a href={`#cum-${index + 1}`} key={category}><b>{String(index + 1).padStart(2, "0")}</b><span><strong>{category}</strong><small>{count} bài viết</small></span><i>→</i></a>;
          })}</div>
        </div>
      </section>

      <section className="section" id="tat-ca-bai-viet">
        <div className="container">
          <div className="section-head split-head"><div><span className="kicker">TOÀN BỘ THƯ VIỆN</span><h2>30 bài viết kỹ thuật và thương mại</h2></div><p>Mỗi bài liên kết trực tiếp tới các range và model liên quan, giúp tiếp tục tra cứu mà không mất ngữ cảnh.</p></div>
          {blogCategories.map((category, index) => (
            <section className="knowledge-cluster" id={`cum-${index + 1}`} key={category}>
              <div className="knowledge-cluster-head"><span>0{index + 1}</span><div><h2>{category}</h2><p>{blogArticles.filter((article) => article.category === category).length} hướng dẫn trong cụm</p></div></div>
              <div className="blog-grid">{blogArticles.filter((article) => article.category === category).map((article) => <BlogCard article={article} key={article.slug} />)}</div>
            </section>
          ))}
        </div>
      </section>

      <section className="knowledge-editorial-note"><div className="container"><div><span>NGUYÊN TẮC BIÊN TẬP</span><h2>Dữ liệu kỹ thuật phải có nguồn và đúng phạm vi model</h2></div><p>Nội dung dùng để định hướng lựa chọn. Part number, thông số, chứng nhận, xuất xứ và khả năng cung ứng cuối cùng cần được xác nhận theo đúng cấu hình và lô hàng.</p><Link href="/lien-he">Yêu cầu đối chiếu cấu hình →</Link></div></section>
    </main>
  );
}

