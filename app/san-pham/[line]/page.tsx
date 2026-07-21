import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProductLinePage } from "../../components/ProductLinePage";
import { getProductLine, productLines } from "../../catalog-lines";

type PageProps = { params: Promise<{ line: string }> };
export function generateStaticParams() { return productLines.map((line) => ({ line: line.slug })); }
export async function generateMetadata({ params }: PageProps): Promise<Metadata> { const { line } = await params; const entry = getProductLine(line); if (!entry) return {}; const count = entry.ranges.reduce((sum, item) => sum + item.modelCount, 0); return { title: `${entry.nameVi} Rotork | ${entry.ranges.length} range`, description: `Tra cứu ${entry.ranges.length} range và ${count} model/cấu hình ${entry.nameVi} Rotork. Xem thông số, tài liệu và yêu cầu báo giá tại Việt Nam.`, alternates: { canonical: `/san-pham/${line}` } }; }
export default async function Page({ params }: PageProps) { const { line } = await params; const entry = getProductLine(line); if (!entry) notFound(); return <ProductLinePage line={entry}/>; }
