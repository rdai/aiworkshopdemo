import { BrandMark } from "./SiteHeader";

export function SiteFooter() {
  return <footer className="bg-[#173d37] text-[#e7f0e8]"><div className="mx-auto grid max-w-6xl gap-8 px-5 py-11 sm:grid-cols-[1.4fr_1fr]"><div><div className="flex items-center gap-3 font-bold"><BrandMark /> Open Media Collective</div><p className="mt-4 max-w-md text-sm leading-6 text-[#b9cbc2]">Free, practical media resources for people sharing faith and serving their communities.</p></div><div className="sm:text-right"><p className="text-sm font-bold">Made for the work that matters.</p><p className="mt-3 text-xs text-[#b9cbc2]">Demo site for workshop use. Resources shown are fictional samples.</p></div></div></footer>;
}
