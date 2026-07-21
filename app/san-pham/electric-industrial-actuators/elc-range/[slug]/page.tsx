import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { StandardModelPage } from "../../../../components/StandardModelPage";
import { elcModels, elcRangeConfig, getELCModel } from "../../../../elc-range-data";

type PageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return elcModels.map((model) => ({ slug: model.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const model = getELCModel(slug);
  if (!model) return {};
  return { title: `${model.name} Rotork | ELC Range`, description: `${model.summary} Xem thông số, tài liệu Rotork và yêu cầu báo giá tại Việt Nam.`, alternates: { canonical: `/san-pham/electric-industrial-actuators/elc-range/${model.slug}` } };
}

export default async function ELCModelPage({ params }: PageProps) {
  const { slug } = await params;
  const model = getELCModel(slug);
  if (!model) notFound();
  return <StandardModelPage config={elcRangeConfig} model={model} models={elcModels}/>;
}
