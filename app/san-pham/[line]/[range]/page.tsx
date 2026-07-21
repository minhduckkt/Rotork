import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LargeRangePage } from "../../../components/LargeRangePage";
import { StandardRangePage } from "../../../components/StandardRangePage";
import { genericRanges, getGenericRange } from "../../../generic-catalog-data";

type PageProps = { params: Promise<{ line: string; range: string }> };

export function generateStaticParams() {
  return genericRanges.map((entry) => ({ line: entry.lineSlug, range: entry.rangeSlug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { line, range } = await params;
  const entry = getGenericRange(line, range);
  if (!entry) return {};
  return {
    title: `${entry.rangeName} Rotork | ${entry.lineNameVi}`,
    description: `${entry.rangeName} gồm ${entry.models.length} model/cấu hình READY. Tra cứu thông số, tài liệu Rotork và yêu cầu báo giá tại Việt Nam.`,
    alternates: { canonical: `/san-pham/${line}/${range}` },
  };
}

export default async function GenericRangePage({ params }: PageProps) {
  const { line, range } = await params;
  const entry = getGenericRange(line, range);
  if (!entry) notFound();
  return entry.models.length > 18 ? <LargeRangePage config={entry.config} models={entry.models}/> : <StandardRangePage config={entry.config} models={entry.models}/>;
}
