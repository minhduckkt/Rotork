import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { StandardModelPage } from "../../../../components/StandardModelPage";
import { genericCatalogProducts, getGenericModel } from "../../../../generic-catalog-data";

type PageProps = { params: Promise<{ line: string; range: string; slug: string }> };

export function generateStaticParams() {
  return genericCatalogProducts.map((entry) => ({ line: entry.lineSlug, range: entry.rangeSlug, slug: entry.model.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { line, range, slug } = await params;
  const result = getGenericModel(line, range, slug);
  if (!result) return {};
  return {
    title: `${result.model.name} Rotork | ${result.range.rangeName}`,
    description: result.model.summary,
    alternates: { canonical: `/san-pham/${line}/${range}/${slug}` },
  };
}

export default async function GenericModelPage({ params }: PageProps) {
  const { line, range, slug } = await params;
  const result = getGenericModel(line, range, slug);
  if (!result) notFound();
  return <StandardModelPage config={result.range.config} model={result.model} models={result.range.models}/>;
}
