import { Download, FileText } from "lucide-react";
import GlassCard from "@/components/glass-card";
import type { DownloadItem } from "@/types/content";
export default function DownloadsList({ items }: { items: DownloadItem[] }) {
  return <div className="grid gap-4">{items.map((item)=><GlassCard key={item.title} className="rounded-3xl bg-gradient-to-br from-sky-300/10 to-white/[0.03]"><div className="flex flex-col gap-4 p-6 md:flex-row md:items-center md:justify-between"><div className="flex items-start gap-4"><div className="rounded-2xl border border-sky-100/10 bg-black/20 p-3 text-sky-100"><FileText className="h-5 w-5" /></div><div><h3 className="text-lg font-semibold text-slate-50">{item.title}</h3><p className="mt-1 text-slate-200/55">{item.format} • {item.size}</p></div></div><a href={item.href} className="inline-flex items-center rounded-2xl border border-sky-100/15 bg-white px-5 py-2 text-sm font-medium text-slate-950"><Download className="mr-2 h-4 w-4" />Download</a></div></GlassCard>)}</div>;
}
