import Image from "next/image";
import Link from "next/link";
import type { BlogArticle } from "../blog-data";

export function BlogCard({ article, compact = false }: { article: BlogArticle; compact?: boolean }) {
  return (
    <article className={`blog-card${compact ? " blog-card-compact" : ""}`}>
      <Link className="blog-card-image" href={`/kien-thuc/${article.slug}`} aria-label={article.title}>
        <Image src={article.image} alt={article.imageAlt} fill sizes={compact ? "(max-width: 980px) 100vw, 33vw" : "(max-width: 980px) 100vw, 40vw"} />
        <span>{String(article.order).padStart(2, "0")}</span>
      </Link>
      <div className="blog-card-body">
        <div className="blog-card-meta"><span>{article.category}</span><small>{article.readTime} phút đọc</small></div>
        <h2><Link href={`/kien-thuc/${article.slug}`}>{article.title}</Link></h2>
        {!compact && <p>{article.excerpt}</p>}
        <Link className="blog-card-link" href={`/kien-thuc/${article.slug}`}>Đọc bài viết <span>→</span></Link>
      </div>
    </article>
  );
}

