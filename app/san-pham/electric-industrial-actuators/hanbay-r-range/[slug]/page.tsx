import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { StandardModelPage } from "../../../../components/StandardModelPage";
import { getHanbayModel, hanbayRConfig, hanbayRModels } from "../../../../hanbay-data";
type PageProps = { params: Promise<{ slug: string }> };
export function generateStaticParams() { return hanbayRModels.map((model) => ({ slug: model.slug })); }
export async function generateMetadata({ params }: PageProps): Promise<Metadata> { const { slug } = await params; const model = getHanbayModel("hanbay-r-range", slug); if (!model) return {}; return { title: `${model.name} Rotork | Hanbay R`, description: model.summary, alternates: { canonical: `/san-pham/electric-industrial-actuators/hanbay-r-range/${model.slug}` } }; }
export default async function HanbayRModelPage({ params }: PageProps) { const { slug } = await params; const model = getHanbayModel("hanbay-r-range", slug); if (!model) notFound(); return <StandardModelPage config={hanbayRConfig} model={model} models={hanbayRModels}/>; }
