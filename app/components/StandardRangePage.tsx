import Image from "next/image";
import Link from "next/link";
import type { CatalogModel, RangeConfig } from "../catalog-types";

export function StandardRangePage({ config, models }: { config: RangeConfig; models: CatalogModel[] }) {
  const basePath = `/san-pham/${config.categorySlug}/${config.slug}`;
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: `Dòng bộ truyền động Rotork ${config.name}`,
    url: `https://rotork.com.vn${basePath}`,
    mainEntity: { "@type": "ItemList", itemListElement: models.map((model, index) => ({ "@type": "ListItem", position: index + 1, name: model.name, url: `https://rotork.com.vn${basePath}/${model.slug}` })) },
  };

  return (
    <main id="main">
      <section className="range-hero"><div className="container">
        <nav className="deep-breadcrumb" aria-label="Breadcrumb"><Link href="/">Trang chủ</Link><span>›</span><Link href="/san-pham">Sản phẩm</Link><span>›</span><Link href="/san-pham">{config.categoryName}</Link><span>›</span><strong>{config.name}</strong></nav>
        <div className="range-hero-grid"><div><span className="kicker light">{config.categoryName.toUpperCase()}</span><h1>{config.name}</h1><p>{config.description}</p><div className="range-actions"><Link className="button button-red" href="#model-trong-range">Chọn model <span>↓</span></Link><Link className="button button-outline-light" href={`/lien-he?model=${encodeURIComponent(config.name)}`}>Yêu cầu tư vấn</Link></div></div><div className="range-hero-visual"><div className="range-image-circle"/><Image src={models[0].image} alt={`Dòng sản phẩm Rotork ${config.name}`} width={700} height={700} priority/><span>{config.heroBadge}</span></div></div>
      </div></section>

      <section className="range-facts"><div className="container">{config.facts.map(([value, label]) => <div key={value}><strong>{value}</strong><span>{label}</span></div>)}</div></section>

      <section className="section"><div className="container range-intro"><div><span className="kicker">TỔNG QUAN RANGE</span><h2>{config.overviewTitle}</h2></div><div>{config.overview.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div></div></section>

      <section className="section section-gray" id="model-trong-range"><div className="container"><div className="section-head split-head"><div><span className="kicker">{models.length} MODEL TRONG RANGE</span><h2>Chọn theo điều khiển và nhiệm vụ</h2></div><p>Mỗi model có trang riêng với mô tả tiếng Việt, thông số định hướng, nguồn Rotork và biểu mẫu yêu cầu báo giá.</p></div><div className="range-product-grid">{models.map((model) => <article className="range-product-card" key={model.slug}><div className="range-product-image"><Image src={model.image} alt={`${model.name} Rotork`} width={600} height={600}/></div><div><span>{model.type}</span><h3>{model.name}</h3><p>{model.summary}</p><Link href={`${basePath}/${model.slug}`}>Xem chi tiết model →</Link></div></article>)}</div></div></section>

      <section className="section"><div className="container selection-layout"><div className="selection-copy"><span className="kicker">HƯỚNG DẪN LỰA CHỌN</span><h2>{config.selectionTitle}</h2><p>{config.selectionIntro}</p><Link className="button button-dark" href={`/lien-he?model=${encodeURIComponent(config.name)}`}>Gửi thông tin lựa chọn →</Link></div><div className="selection-steps">{config.selectionSteps.map(([title, copy], index) => <article key={title}><b>{String(index + 1).padStart(2, "0")}</b><div><h3>{title}</h3><p>{copy}</p></div></article>)}</div></div></section>

      <section className="range-doc-band"><div className="container"><div><span className="kicker light">TÀI LIỆU RANGE</span><h2>{config.brochureTitle}</h2><p>Tài liệu chính thức do Rotork phát hành. Cần kiểm tra revision và cấu hình trước khi sử dụng cho dự án.</p></div><div className="range-doc-list"><a href={config.brochureUrl} target="_blank" rel="noreferrer"><span>{config.brochureCode}</span><strong>{config.brochureTitle}</strong><b>↗</b></a><a href={config.officialRangeUrl} target="_blank" rel="noreferrer"><span>ROTORK.COM</span><strong>Official {config.name} Range</strong><b>↗</b></a><Link href="/san-pham"><span>DANH MỤC</span><strong>Xem tất cả sản phẩm</strong><b>→</b></Link></div></div></section>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}/>
    </main>
  );
}
