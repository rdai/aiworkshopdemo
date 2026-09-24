"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { resources, resourceTypes, type ResourceType } from "../data/resources";

export function ResourceLibrary() {
  const [selectedType, setSelectedType] = useState<ResourceType | "All">("All");
  const [search, setSearch] = useState("");
  const matchingResources = useMemo(() => {
    const term = search.trim().toLowerCase();
    return resources.filter((resource) => {
      const typeMatch = selectedType === "All" || resource.type === selectedType;
      const searchMatch = !term || `${resource.title} ${resource.description} ${resource.type}`.toLowerCase().includes(term);
      return typeMatch && searchMatch;
    });
  }, [search, selectedType]);

  return <section id="resources" className="mx-auto max-w-6xl px-5 py-14 sm:py-20">
    <div className="max-w-2xl"><p className="text-sm font-semibold uppercase tracking-wider text-stone-500">Browse resources</p><h2 className="mt-2 text-3xl font-semibold tracking-tight text-stone-900">Tools for community work</h2><p className="mt-3 text-stone-600">Explore free sample resources. Select any card for details.</p></div>
    <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
      <label className="block sm:w-80"><span className="sr-only">Search resources</span><input type="search" value={search} onChange={(event) => setSearch(event.target.value)} placeholder="Search resources" className="w-full rounded-md border border-stone-300 bg-white px-3 py-2 text-sm outline-none placeholder:text-stone-400 focus:border-stone-600" /></label>
      <div className="flex flex-wrap gap-2" aria-label="Filter resource type">{(["All", ...resourceTypes] as const).map((type) => <button key={type} onClick={() => setSelectedType(type)} className={`rounded-full px-3 py-1.5 text-sm ${selectedType === type ? "bg-stone-800 text-white" : "bg-stone-200 text-stone-700 hover:bg-stone-300"}`}>{type}</button>)}</div>
    </div>
    <p className="mt-5 text-sm text-stone-500">{matchingResources.length} resource{matchingResources.length === 1 ? "" : "s"} found</p>
    <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{matchingResources.map((resource) => <Link key={resource.slug} href={`/resources/${resource.slug}`} className="group flex min-h-80 flex-col rounded-lg border border-stone-200 bg-white p-4 shadow-sm transition hover:border-stone-400 hover:shadow"><div className={`flex h-28 items-center justify-center rounded-md text-sm font-semibold ${resource.color}`} aria-hidden="true">{resource.type}</div><div className="mt-5 flex flex-1 flex-col"><p className="text-xs font-medium uppercase tracking-wide text-stone-500">{resource.type} · {resource.length}</p><h3 className="mt-2 text-lg font-semibold text-stone-900 group-hover:underline">{resource.title}</h3><p className="mt-2 text-sm leading-6 text-stone-600">{resource.description}</p><span className="mt-5 inline-flex w-fit rounded-md bg-stone-800 px-3 py-2 text-sm font-medium text-white group-hover:bg-stone-700">View resource <span className="ml-1" aria-hidden="true">→</span></span></div></Link>)}</div>
    {matchingResources.length === 0 && <p className="mt-8 rounded-md border border-dashed border-stone-300 p-6 text-stone-600">No resources match this search. Try another word or type.</p>}
  </section>;
}
