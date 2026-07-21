"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { iq3Models } from "../iq3-models";
import { iq3PerformModels } from "../iq3-perform-models";
import { ckModels } from "../ck-range-data";
import { iqProModels } from "../iq-pro-data";
import { elcModels } from "../elc-range-data";
import { hanbayMModels, hanbayRModels } from "../hanbay-data";
import { cmaModels, cvaModels, laModels, modularEHModel, skilmaticModels, smModels } from "../advanced-actuator-data";
import { genericCatalogProducts } from "../generic-catalog-data";

const catalogProducts = [
  ...iq3Models.map((model) => ({
    name: model.name,
    range: "IQ3 Pro",
    category: "Bộ truyền động điện thông minh",
    image: model.image,
    summary: model.summary,
    tags: [model.type, model.duty],
    href: `/san-pham/electric-intelligent-actuators/iq3-pro/${model.slug}`,
  })),
  ...iq3PerformModels.map((model) => ({
    name: model.name,
    range: "IQ3 Perform",
    category: "Bộ truyền động điện thông minh",
    image: model.image,
    summary: model.summary,
    tags: [model.type, model.duty],
    href: `/san-pham/electric-intelligent-actuators/iq3-perform/${model.slug}`,
  })),
  ...ckModels.map((model) => ({
    name: model.name,
    range: "CK Range",
    category: "Bộ truyền động điện thông minh",
    image: model.image,
    summary: model.summary,
    tags: [model.type, model.duty],
    href: `/san-pham/electric-intelligent-actuators/ck-range/${model.slug}`,
  })),
  ...iqProModels.map((model) => ({
    name: model.name,
    range: "IQ Pro",
    category: "Bộ truyền động điện thông minh",
    image: model.image,
    summary: model.summary,
    tags: [model.type, model.duty],
    href: `/san-pham/electric-intelligent-actuators/iq-pro/${model.slug}`,
  })),
  ...elcModels.map((model) => ({
    name: model.name,
    range: "ELC Range",
    category: "Bộ truyền động điện công nghiệp",
    image: model.image,
    summary: model.summary,
    tags: [model.type, model.duty],
    href: `/san-pham/electric-industrial-actuators/elc-range/${model.slug}`,
  })),
  ...hanbayMModels.map((model) => ({
    name: model.name,
    range: "Hanbay M Range",
    category: "Bộ truyền động điện công nghiệp",
    image: model.image,
    summary: model.summary,
    tags: [model.type, model.duty],
    href: `/san-pham/electric-industrial-actuators/hanbay-m-range/${model.slug}`,
  })),
  ...hanbayRModels.map((model) => ({
    name: model.name,
    range: "Hanbay R Range",
    category: "Bộ truyền động điện công nghiệp",
    image: model.image,
    summary: model.summary,
    tags: [model.type, model.duty],
    href: `/san-pham/electric-industrial-actuators/hanbay-r-range/${model.slug}`,
  })),
  ...cmaModels.map((model) => ({ name: model.name, range: "CMA", category: "Bộ truyền động điều khiển chính xác", image: model.image, summary: model.summary, tags: [model.type, model.duty], href: `/san-pham/precision-modulating-actuators/cma/${model.slug}` })),
  ...cvaModels.map((model) => ({ name: model.name, range: "CVA", category: "Bộ truyền động điều khiển chính xác", image: model.image, summary: model.summary, tags: [model.type, model.duty], href: `/san-pham/precision-modulating-actuators/cva/${model.slug}` })),
  ...laModels.map((model) => ({ name: model.name, range: "LA-2000", category: "Bộ truyền động điều khiển chính xác", image: model.image, summary: model.summary, tags: [model.type, model.duty], href: `/san-pham/precision-modulating-actuators/la-2000/${model.slug}` })),
  ...smModels.map((model) => ({ name: model.name, range: "SM", category: "Bộ truyền động điều khiển chính xác", image: model.image, summary: model.summary, tags: [model.type, model.duty], href: `/san-pham/precision-modulating-actuators/sm/${model.slug}` })),
  ...skilmaticModels.map((model) => ({ name: model.name, range: "Skilmatic SI", category: "Bộ truyền động điện-thủy lực", image: model.image, summary: model.summary, tags: [model.type, model.duty], href: `/san-pham/electro-hydraulic-actuators/skilmatic-si/${model.slug}` })),
  { name: modularEHModel.name, range: "Modular Electro-Hydraulic", category: "Bộ truyền động điện-thủy lực", image: modularEHModel.image, summary: modularEHModel.summary, tags: [modularEHModel.type, modularEHModel.duty], href: "/san-pham/electro-hydraulic-actuators/modular-electro-hydraulic" },
  ...genericCatalogProducts.map((entry) => ({
    name: entry.model.name,
    range: entry.rangeName,
    category: entry.lineNameVi,
    image: entry.model.image,
    summary: entry.model.summary,
    tags: [entry.model.type, entry.model.duty],
    href: `/san-pham/${entry.lineSlug}/${entry.rangeSlug}/${entry.model.slug}`,
  })),
];

const filters = ["Tất cả", ...Array.from(new Set(catalogProducts.map((product) => product.category)))];

export function ProductExplorer() {
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState("Tất cả");
  const [limit, setLimit] = useState(24);
  const visible = useMemo(() => {
    const keyword = query.toLocaleLowerCase("vi").trim();
    return catalogProducts.filter((product) => {
      const matchesFilter = filter === "Tất cả" || product.category === filter;
      const haystack = [product.name, product.range, product.category, product.summary, ...product.tags].join(" ").toLocaleLowerCase("vi");
      return matchesFilter && (!keyword || haystack.includes(keyword));
    });
  }, [filter, query]);
  const displayed = visible.slice(0, limit);

  return (
    <>
      <div className="explorer-panel">
        <label className="product-search">
          <span className="sr-only">Tìm sản phẩm</span>
          <input value={query} onChange={(event) => { setQuery(event.target.value); setLimit(24); }} placeholder="Tìm theo model, range hoặc ứng dụng…" />
          <b>⌕</b>
        </label>
        <div className="filter-row" aria-label="Lọc sản phẩm">
          {filters.map((item) => (
            <button className={filter === item ? "active" : ""} key={item} onClick={() => { setFilter(item); setLimit(24); }}>{item}</button>
          ))}
        </div>
      </div>
      <div className="results-line"><strong>{visible.length}</strong> sản phẩm đang hiển thị</div>
      <div className="product-grid">
        {displayed.map((product) => (
          <article className="product-card" key={"href" in product ? product.href : product.name}>
            <div className="product-image-wrap"><Image src={product.image} alt={`${product.name} Rotork`} width={600} height={600} /></div>
            <div className="product-card-body">
              <span className="product-range">{product.range}</span>
              <h2>{"href" in product ? <Link href={product.href}>{product.name}</Link> : product.name}</h2>
              <p>{product.summary}</p>
              <div className="tag-row">{product.tags.map((tag, index) => <span key={`${tag}-${index}`}>{tag}</span>)}</div>
              <div className="card-actions">
                <Link href={"href" in product ? product.href : `/lien-he?model=${encodeURIComponent(product.name)}`}>{"href" in product ? "Xem chi tiết" : "Yêu cầu báo giá"} <span>→</span></Link>
                <span className="quote-only">Liên hệ giá</span>
              </div>
            </div>
          </article>
        ))}
      </div>
      {displayed.length < visible.length && <div className="load-more-row"><button className="button button-dark" onClick={() => setLimit((current) => current + 24)}>Xem thêm sản phẩm</button><span>Đang hiển thị {displayed.length}/{visible.length}</span></div>}
      {!visible.length && <div className="empty-state"><h2>Chưa tìm thấy model phù hợp</h2><p>Hãy gửi part number, BOM hoặc ảnh nameplate để Fast Group Engineering kiểm tra.</p><Link className="button button-red" href="/lien-he">Gửi yêu cầu tra cứu</Link></div>}
    </>
  );
}
