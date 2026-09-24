import Link from "next/link";

export function BrandMark() {
  return <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#e5f36b] text-sm font-black text-[#173d37] shadow-sm" aria-hidden="true">OM</span>;
}

export function SiteHeader() {
  return <header className="border-b border-[#dce5d7] bg-[#fbf9f3]/95 backdrop-blur"><div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3.5"><Link href="/" className="flex items-center gap-2.5 text-base font-bold tracking-tight text-[#173d37]"><BrandMark /><span>Open Media Collective</span></Link><nav aria-label="Main navigation" className="flex items-center gap-4 text-sm font-medium text-[#52706a] sm:gap-6"><Link href="/#resources" className="hover:text-[#173d37]">Browse</Link><Link href="/#about" className="hover:text-[#173d37]">Our story</Link><a href="/#resources" className="hidden rounded-full bg-[#173d37] px-4 py-2 text-white transition hover:bg-[#28584e] sm:inline-flex">Find a resource</a></nav></div></header>;
}
