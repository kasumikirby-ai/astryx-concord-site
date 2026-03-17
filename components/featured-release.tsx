import Link from "next/link";
import GlassCard from "@/components/glass-card";
import type { BookItem } from "@/types/content";
export default function FeaturedRelease({ book }: { book: BookItem | undefined }) {
  if (!book) return null;
  return (
    <section className="mx-auto max-w-7xl px-6 py-10 lg:px-8 lg:py-16">
      <GlassCard className="overflow-hidden rounded-[2rem] bg-gradient-to-br from-sky-300/10 to-white/[0.03]">
        <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr]"><div className="min-h-[320px] bg-[linear-gradient(135deg,rgba(56,189,248,0.18),rgba(255,255,255,0.05),transparent)]" /><div className="p-8 lg:p-10"><p className="text-sm uppercase tracking-[0.3em] text-slate-300/45">Featured Release</p><h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-50">{book.title}</h2><div className="mt-4 flex flex-wrap gap-2"><span className="rounded-full border border-sky-100/10 bg-black/20 px-3 py-1 text-xs text-slate-100/75">{book.category}</span><span className="rounded-full border border-sky-100/10 bg-black/20 px-3 py-1 text-xs text-slate-100/75">{book.status}</span><span className="rounded-full border border-sky-100/10 bg-black/20 px-3 py-1 text-xs text-slate-100/75">{book.arc}</span></div><p className="mt-6 max-w-2xl leading-8 text-slate-200/68">{book.summary}</p><div className="mt-8 flex flex-wrap gap-4"><Link href={`/books/${book.slug ?? book.id}`} className="inline-flex rounded-2xl border border-sky-300/20 bg-sky-300/12 px-6 py-3 text-sm font-medium text-white hover:bg-sky-300/20">View Featured Book</Link><Link href="/downloads" className="inline-flex rounded-2xl border border-slate-200/20 bg-transparent px-6 py-3 text-sm font-medium text-white hover:bg-white/10">View Downloads</Link></div></div></div>
      </GlassCard>
    </section>
  );
}
