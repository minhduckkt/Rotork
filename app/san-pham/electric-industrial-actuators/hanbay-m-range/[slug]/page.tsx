import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { StandardModelPage } from "../../../../components/StandardModelPage";
import { getHanbayModel, hanbayMConfig, hanbayMModels } from "../../../../hanbay-data";
type PageProps = { params: Promise<{ slug: string }> };
export function generateStaticParams() { return hanbayMModels.map((model) => ({ slug: model.slug })); }
export async function generateMetadata({ params }: PageProps): Promise<Metadata> { const { slug } = await params; const model = getHanbayModel("hanbay-m-range", slug); if (!model) return {}; return { title: `${model.name} Rotork | Hanbay M`, description: model.summary, alternates: { canonical: `/san-pham/electric-industrial-actuators/hanbay-m-range/${model.slug}` } }; }
export default async function HanbayMModelPage({ params }: PageProps) { const { slug } = await params; const model = getHanbayModel("hanbay-m-range", slug); if (!model) notFound(); return <StandardModelPage config={hanbayMConfig} model={model} models={hanbayMModels}/>; }
