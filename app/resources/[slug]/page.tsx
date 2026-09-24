import Link from "next/link";
import { notFound } from "next/navigation";
import { SiteFooter } from "../../components/SiteFooter";
import { SiteHeader } from "../../components/SiteHeader";
import { resources } from "../../data/resources";

export function generateStaticParams() { return resources.map((resource) => ({ slug: resource.slug })); }

export default async function ResourcePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const resource = resources.find((item) => item.slug === slug);
  if (!resource) notFound();
  return <><SiteHeader /><main className="mx-auto max-w-3xl px-5 py-12 sm:py-20"><Link href="/#resources" className="text-sm font-medium text-stone-600 hover:text-stone-950">← Back to resources</Link><div className={`mt-8 flex h-48 items-center justify-center rounded-lg text-lg font-semibold ${resource.color}`} aria-hidden="true">{resource.type}</div><p className="mt-8 text-sm font-semibold uppercase tracking-wider text-stone-500">{resource.type} · {resource.length}</p><h1 className="mt-3 text-4xl font-semibold tracking-tight text-stone-900">{resource.title}</h1><p className="mt-5 text-xl leading-8 text-stone-600">{resource.description}</p><div className="mt-8 border-t border-stone-200 pt-8"><h2 className="text-xl font-semibold text-stone-900">About this resource</h2><p className="mt-3 leading-7 text-stone-600">{resource.details}</p><dl className="mt-8 grid gap-5 sm:grid-cols-2"><div><dt className="text-sm font-medium text-stone-500">Best for</dt><dd className="mt-1 text-stone-900">{resource.audience}</dd></div><div><dt className="text-sm font-medium text-stone-500">Format</dt><dd className="mt-1 text-stone-900">{resource.length}</dd></div></dl><a href="#demo-resource-note" className="mt-8 inline-flex rounded-md bg-stone-800 px-4 py-2.5 text-sm font-medium text-white hover:bg-stone-700">Demo resource link</a><p id="demo-resource-note" className="mt-2 text-xs text-stone-500">Demo placeholder — no download is available in this workshop site.</p></div></main><SiteFooter /></>;
}
