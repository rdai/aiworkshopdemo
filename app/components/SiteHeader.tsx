import Link from "next/link";

export function SiteHeader() {
  return <header className="border-b border-stone-200 bg-stone-50"><div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4"><Link href="/" className="text-base font-semibold tracking-tight text-stone-900">Open Media Collective</Link><nav aria-label="Main navigation" className="flex gap-5 text-sm text-stone-600"><Link href="/#resources" className="hover:text-stone-950">Resources</Link><Link href="/#about" className="hover:text-stone-950">About</Link></nav></div></header>;
}
