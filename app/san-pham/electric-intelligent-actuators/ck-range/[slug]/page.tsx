import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { StandardModelPage } from "../../../../components/StandardModelPage";
import { ckModels, ckRangeConfig, getCKModel } from "../../../../ck-range-data";

type PageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return ckModels.map((model) => ({ slug: model.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const model = getCKModel(slug);
  if (!model) return {};
  return { title: `${model.name} Rotork | CK Range`, description: `${model.summary} Xem thông số, nguồn Rotork và yêu cầu báo giá tại Việt Nam.`, alternates: { canonical: `/san-pham/electric-intelligent-actuators/ck-range/${model.slug}` } };
}

export default async function CKModelPage({ params }: PageProps) {
  const { slug } = await params;
  const model = getCKModel(slug);
  if (!model) notFound();
  return <StandardModelPage config={ckRangeConfig} model={model} models={ckModels}/>;
}
