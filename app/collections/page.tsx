import Link from "next/link";
import GlassCard from "@/components/glass-card";
import SectionHeader from "@/components/section-header";
import { categories } from "@/data/categories";
export const metadata = { title: "Collections | The Astryx Concord Saga", description: "Explore saga novels, art books, concept art, finalized art, tech books, lore companions, and more." };
export default function CollectionsPage(){ return <main className="page-wrap"><SectionHeader eyebrow="Collections" title="Explore the universe by category" text="This page groups the different types of work across the Astryx Concord platform." /><div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">{categories.map((item)=><GlassCard key={item.title} className="rounded-3xl p-6 transition duration-300 hover:-translate-y-1 hover:bg-white/[0.06]"><h2 className="text-xl font-semibold text-slate-50">{item.title}</h2><p className="mt-4 leading-7 text-slate-200/62">{item.description}</p><Link href="/" className="mt-6 inline-flex text-sm text-slate-100/85">View related items</Link></GlassCard>)}</div></main>; }
