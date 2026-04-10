"use client";
import { useMemo, useState } from "react";
import { Search, Library, CalendarDays, Crown, Shield, Rocket, Database, BookOpen, Image as ImageIcon, CheckCircle2 } from "lucide-react";
import SectionHeader from "@/components/section-header";
import GlassCard from "@/components/glass-card";
import HeroSection from "@/components/hero-section";
import StatsPanel from "@/components/stats-panel";
import CtaSection from "@/components/cta-section";
import BookCard from "@/components/book-card";
import DownloadsList from "@/components/downloads-list";
import FeaturedRelease from "@/components/featured-release";
import { books } from "@/data/books";
import { downloads } from "@/data/downloads";
import { timeline } from "@/data/timeline";
import { lore } from "@/data/lore";
import { categories } from "@/data/categories";
import { updates } from "@/data/updates";
import { automation } from "@/data/automation";
import { sagaStats } from "@/data/site-config";
import { useRouter } from "next/navigation";
const iconMap = { "Saga Novels": BookOpen, "Art Books": Library, "Concept Art": ImageIcon, "Finalized Art": CheckCircle2, "Tech Books": Database, "Lore Companions": Crown, "Other Planned Projects": ImageIcon, "Royal Bloodlines": Crown, "Military Command": Shield, "Worlds and Species": Rocket } as const;
export default function HomePage() {
  const [query, setQuery] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("All");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const statuses = ["All", "Completed", "In Progress", "Planned"];
  const filterCategories = ["All", "Saga Novel", "Art Book", "Tech Book", "Side Novel", "Future Saga"];
  const filteredBooks = useMemo(() => books.filter((book) => {
    const matchesStatus = selectedStatus === "All" || book.status === selectedStatus;
    const matchesCategory = selectedCategory === "All" || book.category === selectedCategory;
    const haystack = `${book.title} ${book.arc} ${book.category} ${book.summary}`.toLowerCase();
    const router = useRouter();
    return matchesStatus && matchesCategory && haystack.includes(query.toLowerCase());
  }), [query, selectedStatus, selectedCategory]);
  const featuredBook = books.find((book) => book.featured);
  return <main className="relative z-10">
    <section id="home" className="mx-auto grid max-w-7xl items-center gap-10 px-6 py-20 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:py-28"><HeroSection /><StatsPanel title="Saga Command Panel" subtitle="Universe Status" items={sagaStats} /></section>
    <FeaturedRelease book={featuredBook} />
    <section id="books" className="mx-auto max-w-7xl px-6 py-12 lg:px-8 lg:py-16"><SectionHeader eyebrow="Saga Library" title="Books, art books, tech books, and future entries" text="A real catalog structure with filtering, search, statuses, and room for individual project pages and download actions." /><div className="mb-6 grid gap-4 lg:grid-cols-[1fr_auto] lg:items-center"><div className="relative"><Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-300/40" /><input value={query} onChange={(e)=>setQuery(e.target.value)} placeholder="Search books, arcs, categories, or summaries" className="h-12 w-full rounded-2xl border border-sky-100/10 bg-white/[0.04] pl-11 pr-4 text-white placeholder:text-slate-300/35" /></div><div className="flex flex-col gap-3 lg:items-end"><div className="flex flex-wrap gap-2">{statuses.map((status)=><button key={status} onClick={()=>setSelectedStatus(status)} className={`rounded-full border px-4 py-2 text-sm transition ${selectedStatus===status?"border-sky-100/20 bg-white text-slate-950":"border-sky-100/10 bg-white/[0.04] text-slate-200/75 hover:bg-white/10"}`}>{status}</button>)}</div><div className="flex flex-wrap gap-2">{filterCategories.map((category)=><button key={category} onClick={()=>setSelectedCategory(category)} className={`rounded-full border px-4 py-2 text-sm transition ${selectedCategory===category?"border-sky-100/20 bg-white text-slate-950":"border-sky-100/10 bg-white/[0.04] text-slate-200/75 hover:bg-white/10"}`}>{category}</button>)}</div></div></div><div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">{filteredBooks.map((book)=><BookCard key={book.id} {...book} />)}</div></section>
    <section id="downloads" className="mx-auto max-w-7xl px-6 py-10 lg:px-8 lg:py-16"><SectionHeader eyebrow="Download Library" title="Readers can download chapters individually" text="Once files are uploaded, this section can automatically show chapter-by-chapter downloads, full book downloads, and companion files." /><div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]"><GlassCard className="rounded-[2rem]"><div className="p-8 lg:p-10"><div className="mb-6 flex items-center gap-3"><div className="rounded-2xl border border-sky-100/10 bg-black/20 p-3 text-sky-100"><Library className="h-5 w-5" /></div><div><p className="text-sm text-slate-300/50">How it works</p><h2 className="text-2xl font-semibold">Automatic chapter delivery</h2></div></div><div className="space-y-4 text-slate-200/68 leading-8"><p>Each uploaded chapter can be linked to its matching book entry.</p><p>This can work for PDF chapters, EPUB files, full-book bundles, art book sections, tech manuals, and bonus downloads.</p></div></div></GlassCard><DownloadsList items={downloads} /></div></section>
    <section id="collections" className="mx-auto max-w-7xl px-6 py-10 lg:px-8 lg:py-16"><SectionHeader eyebrow="Universe Collections" title="Every type of project has its own place" text="All work is organized clearly instead of being mixed together in one generic library." /><div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4 2xl:grid-cols-7">{categories.map((item)=>{ const Icon = iconMap[item.title as keyof typeof iconMap] ?? ImageIcon; return <GlassCard
  key={item.title}
  className="h-full rounded-3xl transition cursor-pointer"
  onClick={() => router.push(`/${item.title.toLowerCase().replace(/ /g, "-")}`)}
> transition duration-300 hover:-translate-y-1 hover:bg-white/[0.06]"><div className="p-6"><div className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl border border-sky-100/10 bg-sky-300/10 text-sky-100"><Icon className="h-5 w-5" /></div><h3 className="text-xl font-semibold text-slate-50">{item.title}</h3><p className="mt-4 leading-7 text-slate-200/62">{item.description}</p></div></GlassCard>})}</div></section>
    <section id="timeline" className="mx-auto max-w-7xl px-6 py-10 lg:px-8 lg:py-16"><SectionHeader eyebrow="Universe Timeline" title="A clear path through the grand saga" text="A guided way into the series, with room for future peace arcs, legacy arcs, side stories, and companion releases." /><div className="grid gap-6 lg:grid-cols-3">{timeline.map((item)=><GlassCard key={item.title} className="h-full rounded-3xl"><div className="p-6"><div className="mb-4 inline-flex items-center gap-2 rounded-full border border-sky-100/10 bg-black/20 px-3 py-1 text-xs uppercase tracking-[0.25em] text-slate-200/55"><CalendarDays className="h-3.5 w-3.5" />{item.year}</div><h3 className="text-xl font-semibold text-slate-50">{item.title}</h3><p className="mt-4 leading-7 text-slate-200/62">{item.text}</p></div></GlassCard>)}</div></section>
    <section id="lore" className="mx-auto max-w-7xl px-6 py-10 lg:px-8 lg:py-16"><SectionHeader eyebrow="Lore Archive" title="Characters, dynasties, command structures, and worlds" text="Room for the deep lore that makes your universe feel large and worth exploring over time." /><div className="grid gap-6 md:grid-cols-3">{lore.map((section)=>{ const Icon = iconMap[section.title as keyof typeof iconMap] ?? Rocket; return <GlassCard key={section.title} className="h-full rounded-3xl transition duration-300 hover:-translate-y-1 hover:bg-white/[0.06]"><div className="p-6"><div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl border border-sky-100/10 bg-sky-300/10 text-sky-100"><Icon className="h-5 w-5" /></div><h3 className="text-xl font-semibold text-slate-50">{section.title}</h3><p className="mt-4 leading-7 text-slate-200/62">{section.text}</p></div></GlassCard>})}</div></section>
    <section id="projects" className="mx-auto max-w-7xl px-6 py-10 lg:px-8 lg:py-16"><SectionHeader eyebrow="Current Work" title="A real place for updates and ongoing projects" text="Useful even between releases, giving you somewhere to post writing progress, roadmap items, and universe updates." /><div className="grid gap-6 md:grid-cols-2 xl:grid-cols-5">{updates.map((item)=><GlassCard key={item.title} className="h-full rounded-3xl"><div className="p-6"><span className="rounded-full border border-sky-100/10 bg-black/20 px-3 py-1 text-xs text-slate-100/75">{item.tag}</span><h3 className="mt-4 text-xl font-semibold text-slate-50">{item.title}</h3><p className="mt-4 leading-7 text-slate-200/62">{item.text}</p></div></GlassCard>)}</div></section>
    <section id="automation" className="mx-auto max-w-7xl px-6 py-10 lg:px-8 lg:py-16"><SectionHeader eyebrow="Automation Engine" title="Advanced features that can make the site feel alive" text="A living website that reflects your entire creative program automatically once connected to one master content source." /><div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">{automation.map((feature)=><GlassCard key={feature.title} className="h-full rounded-3xl transition duration-300 hover:-translate-y-1 hover:bg-white/[0.06]"><div className="p-6"><h3 className="text-xl font-semibold text-slate-50">{feature.title}</h3><p className="mt-4 leading-7 text-slate-200/62">{feature.text}</p></div></GlassCard>)}</div></section>
    <CtaSection />
  </main>;
}
