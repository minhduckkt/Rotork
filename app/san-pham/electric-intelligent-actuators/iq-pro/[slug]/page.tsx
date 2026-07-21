import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { StandardModelPage } from "../../../../components/StandardModelPage";
import { getIQProModel, iqProConfig, iqProModels } from "../../../../iq-pro-data";

type PageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return iqProModels.map((model) => ({ slug: model.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const model = getIQProModel(slug);
  if (!model) return {};
  return { title: `${model.name} Rotork | IQ Pro`, description: `${model.summary} Xem thông số, tài liệu Rotork và yêu cầu báo giá tại Việt Nam.`, alternates: { canonical: `/san-pham/electric-intelligent-actuators/iq-pro/${model.slug}` } };
}

export default async function IQProModelPage({ params }: PageProps) {
  const { slug } = await params;
  const model = getIQProModel(slug);
  if (!model) notFound();
  return <StandardModelPage config={iqProConfig} model={model} models={iqProModels}/>;
}
