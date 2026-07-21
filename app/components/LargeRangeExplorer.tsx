"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import type { CatalogModel } from "../catalog-types";

const PAGE_SIZE = 24;

export function LargeRangeExplorer({ models, basePath }: { models: CatalogModel[]; basePath: string }) {
  const [query, setQuery] = useState("");
  const [limit, setLimit] = useState(PAGE_SIZE);
  const matches = useMemo(() => {
    const keyword = query.toLocaleLowerCase("vi").trim();
    if (!keyword) return models;
    return models.filter((model) => [model.name, model.type, model.duty, model.summary, ...model.specs.flat()].join(" ").toLocaleLowerCase("vi").includes(keyword));
  }, [models, query]);
  const visible = matches.slice(0, limit);

  return <>
    <div className="explorer-panel large-range-search"><label className="product-search"><span className="sr-only">Tìm cấu hình trong range</span><input value={query} onChange={(event) => { setQuery(event.target.value); setLimit(PAGE_SIZE); }} placeholder="Tìm model, hãng van, loại van, pressure, line size…"/><b>⌕</b></label></div>
    <div className="results-line"><strong>{matches.length}</strong> cấu hình phù hợp</div>
    <div className="range-product-grid">{visible.map((model) => <article className="range-product-card" key={model.slug}><div className="range-product-image"><Image src={model.image} alt={`${model.name} Rotork`} width={600} height={600}/></div><div><span>{model.duty}</span><h3>{model.name}</h3><p>{model.summary}</p><Link href={`${basePath}/${model.slug}`}>Xem chi tiết cấu hình →</Link></div></article>)}</div>
    {visible.length < matches.length && <div className="load-more-row"><button className="button button-dark" onClick={() => setLimit((current) => current + PAGE_SIZE)}>Xem thêm {Math.min(PAGE_SIZE, matches.length - visible.length)} cấu hình</button><span>Đang hiển thị {visible.length}/{matches.length}</span></div>}
    {!matches.length && <div className="empty-state"><h2>Chưa tìm thấy cấu hình phù hợp</h2><p>Hãy gửi model valve hoặc điều kiện quá trình để Fast Group Engineering kiểm tra.</p><Link className="button button-red" href="/lien-he">Gửi yêu cầu tra cứu</Link></div>}
  </>;
}
