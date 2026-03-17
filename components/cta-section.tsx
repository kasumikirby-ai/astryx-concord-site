import { BookOpen } from "lucide-react";
import GlassCard from "@/components/glass-card";
export default function CtaSection() {
  return (
    <section className="mx-auto max-w-7xl px-6 pb-20 pt-8 lg:px-8 lg:pb-28">
      <GlassCard className="rounded-[2rem] bg-gradient-to-br from-sky-300/10 to-white/[0.03]">
        <div className="flex flex-col gap-6 p-8 lg:flex-row lg:items-center lg:justify-between lg:p-10">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-slate-300/45">Ready for deployment</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-50">This is now the deployable homepage foundation</h2>
            <p className="mt-4 max-w-2xl leading-7 text-slate-200/68">The site now has the structure needed for a real hosted version, including library filtering, chapter downloads, project collections, automation planning, and visible copyright language.</p>
          </div>
          <a href="/collections" className="inline-flex items-center rounded-2xl border border-sky-300/20 bg-sky-300/12 px-6 py-3 text-sm font-medium text-white hover:bg-sky-300/20"><BookOpen className="mr-2 h-4 w-4" />Explore Collections</a>
        </div>
      </GlassCard>
    </section>
  );
}
