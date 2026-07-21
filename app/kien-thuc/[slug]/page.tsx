import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BlogCard } from "../../components/BlogCard";
import { blogArticles, getBlogArticle, getRelatedArticles } from "../../blog-data";

type PageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return blogArticles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getBlogArticle(slug);
  if (!article) return {};
  return {
    title: article.title,
    description: article.description,
    alternates: { canonical: `/kien-thuc/${article.slug}` },
    openGraph: {
      type: "article",
      title: article.title,
      description: article.description,
      url: `/kien-thuc/${article.slug}`,
      publishedTime: article.updatedAt,
      modifiedTime: article.updatedAt,
      images: [{ url: article.image, alt: article.imageAlt }],
    },
    twitter: { card: "summary_large_image", title: article.title, description: article.description, images: [article.image] },
  };
}

export default async function BlogArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const article = getBlogArticle(slug);
  if (!article) notFound();
  const related = getRelatedArticles(article);
  const articleSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline: article.title,
        description: article.description,
        image: [`https://rotork.com.vn${article.image}`],
        datePublished: article.updatedAt,
        dateModified: article.updatedAt,
        inLanguage: "vi-VN",
        mainEntityOfPage: `https://rotork.com.vn/kien-thuc/${article.slug}`,
        author: { "@type": "Organization", name: "Fast Group Engineering", url: "https://rotork.com.vn/ve-chung-toi" },
        publisher: { "@type": "Organization", name: "Fast Group Engineering", url: "https://rotork.com.vn" },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Trang chủ", item: "https://rotork.com.vn" },
          { "@type": "ListItem", position: 2, name: "Kiến thức", item: "https://rotork.com.vn/kien-thuc" },
          { "@type": "ListItem", position: 3, name: article.title, item: `https://rotork.com.vn/kien-thuc/${article.slug}` },
        ],
      },
      ...(article.faq.length ? [{
        "@type": "FAQPage",
        mainEntity: article.faq.map((item) => ({ "@type": "Question", name: item.question, acceptedAnswer: { "@type": "Answer", text: item.answer } })),
      }] : []),
    ],
  };

  return (
    <main id="main">
      <section className="article-hero">
        <div className="article-hero-grid-lines" aria-hidden="true" />
        <div className="container">
          <nav className="deep-breadcrumb" aria-label="Breadcrumb"><Link href="/">Trang chủ</Link><span>›</span><Link href="/kien-thuc">Kiến thức</Link><span>›</span><strong>{article.category}</strong></nav>
          <div className="article-hero-grid">
            <div className="article-hero-copy">
              <span className="kicker light">{article.category.toUpperCase()}</span>
              <h1>{article.title}</h1>
              <p>{article.description}</p>
              <div className="article-meta"><span>Cập nhật 19/07/2026</span><span>{article.readTime} phút đọc</span><span>Bài số {String(article.order).padStart(2, "0")}/30</span></div>
            </div>
            <div className="article-hero-visual"><div className="article-image-halo"/><Image src={article.image} alt={article.imageAlt} fill priority sizes="(max-width: 980px) 100vw, 44vw"/><span>Hình ảnh sản phẩm Rotork</span></div>
          </div>
        </div>
      </section>

      <div className="article-trust-strip"><div className="container"><span><b>01</b>Nguồn Rotork được chỉ rõ</span><span><b>02</b>Không suy đoán part number</span><span><b>03</b>Cấu hình được xác nhận trước báo giá</span></div></div>

      <section className="article-shell">
        <div className="container article-layout">
          <aside className="article-sidebar">
            <div className="article-toc"><span>MỤC LỤC</span><nav>{article.headings.slice(0, 10).map((heading, index) => <a href={`#${heading.id}`} key={`${heading.id}-${index}`}><b>{String(index + 1).padStart(2, "0")}</b>{heading.label}</a>)}</nav></div>
            <div className="article-support-card"><span>HỖ TRỢ KỸ THUẬT</span><h2>Cần kiểm tra model?</h2><p>Gửi nameplate, BOM hoặc part number để Fast Group Engineering đối chiếu.</p><Link href={`/lien-he?model=${encodeURIComponent(article.title)}`}>Gửi yêu cầu →</Link></div>
          </aside>
          <article className="article-content" dangerouslySetInnerHTML={{ __html: article.body }} />
        </div>
      </section>

      <section className="article-related section section-gray"><div className="container"><div className="section-head split-head"><div><span className="kicker">ĐỌC TIẾP</span><h2>Bài viết cùng chủ đề</h2></div><Link className="text-link" href="/kien-thuc">Xem toàn bộ thư viện →</Link></div><div className="blog-grid">{related.map((item) => <BlogCard article={item} key={item.slug} />)}</div></div></section>

      <section className="product-final-cta"><div className="container"><div><span>FAST GROUP ENGINEERING · ROTORK VIỆT NAM</span><h2>Cần báo giá đúng model và cấu hình?</h2><p>Gửi ảnh nameplate, part number, BOM và điều kiện vận hành để được hỗ trợ đối chiếu.</p></div><Link className="button button-white" href="/lien-he">Gửi yêu cầu báo giá →</Link></div></section>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
    </main>
  );
}

