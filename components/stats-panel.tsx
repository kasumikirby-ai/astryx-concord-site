import { Orbit } from "lucide-react";
import GlassCard from "@/components/glass-card";
export type StatItem = { label: string; value: string };
export default function StatsPanel({ title, subtitle, items }: { title: string; subtitle: string; items: StatItem[] }) {
  return (
    <GlassCard className="rounded-3xl"><div className="p-6"><div className="mb-6 flex items-center justify-between"><div><p className="text-sm text-slate-300/50">{subtitle}</p><h2 className="text-2xl font-semibold">{title}</h2></div><div className="rounded-2xl border border-sky-100/10 bg-sky-300/10 p-3 text-sky-100"><Orbit className="h-5 w-5" /></div></div><div className="grid gap-4 sm:grid-cols-2">{items.map((stat)=><div key={stat.label} className="rounded-2xl border border-sky-100/10 bg-black/20 px-4 py-4"><p className="text-sm text-slate-200/50">{stat.label}</p><p className="mt-2 text-lg font-semibold text-slate-50">{stat.value}</p></div>)}</div></div></GlassCard>
  );
}
