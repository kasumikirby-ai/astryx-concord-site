import { notFound } from "next/navigation";
import GlassCard from "@/components/glass-card";
import { books } from "@/data/books";

export default function BookDetailPage({ params }: any) {
  const book = books.find(
    (item) => String(item.id) === params.slug || item.slug === params.slug
  );

  if (!book) return notFound();
  
  return <main className="page-wrap"><div className="mb-10"><p className="text-sm uppercase tracking-[0.32em] text-slate-300/45">Book Detail</p><h1 className="mt-3 text-4xl font-semibold tracking-tight text-slate-50">{book.title}</h1></div><div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]"><GlassCard className="rounded-[2rem] overflow-hidden"><div className="aspect-[4/5] w-full bg-[linear-gradient(135deg,rgba(56,189,248,0.18),rgba(255,255,255,0.05),transparent)]" /></GlassCard><GlassCard className="rounded-[2rem] p-8"><div className="flex flex-wrap gap-3"><span className="rounded-full border border-sky-100/10 bg-black/20 px-3 py-1 text-sm text-slate-100/75">{book.category}</span><span className="rounded-full border border-sky-100/10 bg-black/20 px-3 py-1 text-sm text-slate-100/75">{book.arc}</span><span className="rounded-full border border-sky-100/10 bg-black/20 px-3 py-1 text-sm text-slate-100/75">{book.status}</span></div><p className="mt-6 leading-8 text-slate-200/68">{book.summary}</p><div className="mt-8 grid gap-4 sm:grid-cols-3"><div className="rounded-2xl border border-sky-100/10 bg-black/20 px-4 py-4"><p className="text-sm text-slate-200/50">Year</p><p className="mt-2 text-lg font-semibold text-slate-50">{book.year}</p></div><div className="rounded-2xl border border-sky-100/10 bg-black/20 px-4 py-4"><p className="text-sm text-slate-200/50">Chapters</p><p className="mt-2 text-lg font-semibold text-slate-50">{book.chapters}</p></div><div className="rounded-2xl border border-sky-100/10 bg-black/20 px-4 py-4"><p className="text-sm text-slate-200/50">Downloads</p><p className="mt-2 text-lg font-semibold text-slate-50">{book.downloadsEnabled ? "Enabled" : "Coming Later"}</p></div></div></GlassCard></div></main>;
}
