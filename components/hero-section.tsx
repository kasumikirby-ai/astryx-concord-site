import { Sparkles } from "lucide-react";
import { siteConfig } from "@/data/site-config";
export default function HeroSection() {
  return (
    <div>
      <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-sky-200/15 bg-sky-300/10 px-4 py-2 text-sm text-sky-100/85">
        <Sparkles className="h-4 w-4" />
        Refined sci-fi author platform with elegant cinematic presentation
      </div>
      <h1 className="max-w-4xl text-4xl font-semibold leading-tight tracking-tight text-slate-50 sm:text-5xl lg:text-6xl">
        A premium universe site built around your saga, books, art, lore, and chapter downloads.
      </h1>
      <p className="mt-6 max-w-2xl text-base leading-8 text-slate-200/68 sm:text-lg">{siteConfig.description}</p>
      <div className="mt-8 flex flex-wrap gap-4">
        <a href="#books" className="inline-flex rounded-2xl border border-sky-300/20 bg-sky-300/12 px-6 py-3 text-sm font-medium text-white hover:bg-sky-300/20">{siteConfig.ctaPrimary}</a>
        <a href="/downloads" className="inline-flex rounded-2xl border border-slate-200/20 bg-transparent px-6 py-3 text-sm font-medium text-white hover:bg-white/10">{siteConfig.ctaSecondary}</a>
      </div>
    </div>
  );
}
