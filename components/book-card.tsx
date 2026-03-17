import Link from "next/link";
import { Download, ArrowRight } from "lucide-react";
import GlassCard from "@/components/glass-card";
import type { BookItem } from "@/types/content";
export default function BookCard({ id, slug, title, arc, category, status, year, chapters, summary, downloadsEnabled = true }: BookItem) {
  return (
    <GlassCard className="h-full overflow-hidden rounded-3xl transition duration-300 hover:-translate-y-1 hover:bg-white/[0.06]">
      <div className="flex h-44 items-end justify-between bg-[linear-gradient(135deg,rgba(56,189,248,0.18),rgba(255,255,255,0.05),transparent)] p-5">
        <span className="rounded-full border border-sky-100/10 bg-black/30 px-3 py-1 text-sm text-slate-100">{arc}</span>
        <span className="rounded-full border border-sky-100/10 bg-black/20 px-3 py-1 text-xs uppercase tracking-[0.25em] text-slate-200/60">{year}</span>
      </div>
      <div className="p-6">
        <div className="mb-3 flex items-center justify-between gap-3"><h3 className="text-xl font-semibold leading-tight text-slate-50">{title}</h3><span className="rounded-full border border-sky-100/15 px-3 py-1 text-xs text-slate-200/70">{status}</span></div>
        <div className="mb-4 flex flex-wrap gap-2"><span className="rounded-full border border-sky-100/10 bg-black/20 px-3 py-1 text-xs text-slate-100/75">{category}</span><span className="rounded-full border border-sky-100/10 bg-black/20 px-3 py-1 text-xs text-slate-100/75">{chapters} Chapters</span></div>
        <p className="leading-7 text-slate-200/62">{summary}</p>
        <div className="mt-6 flex flex-wrap gap-3"><Link href={`/books/${slug ?? id}`} className="inline-flex items-center gap-2 text-sm text-slate-100/85">View project details <ArrowRight className="h-4 w-4" /></Link>{downloadsEnabled && <Link href="/downloads" className="inline-flex items-center gap-2 rounded-full border border-sky-100/10 bg-white/[0.05] px-4 py-2 text-sm text-slate-100/85 hover:bg-white/10"><Download className="h-4 w-4" />Download Chapters</Link>}</div>
      </div>
    </GlassCard>
  );
}
