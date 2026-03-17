import DownloadsList from "@/components/downloads-list";
import GlassCard from "@/components/glass-card";
import SectionHeader from "@/components/section-header";
import { downloads } from "@/data/downloads";
export const metadata = { title: "Downloads | The Astryx Concord Saga", description: "Download chapters, books, and companion files from the Astryx Concord archive." };
export default function DownloadsPage() {
  return <main className="page-wrap"><SectionHeader eyebrow="Download Library" title="Books and chapters" text="Download individual chapters, full books, and companion files once they are uploaded." /><div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]"><GlassCard className="rounded-[2rem] p-8 lg:p-10"><h2 className="text-2xl font-semibold">Automatic chapter delivery</h2><p className="mt-4 leading-8 text-slate-200/68">Uploaded chapter files can later be linked automatically to the correct book, art collection, or technical archive.</p></GlassCard><DownloadsList items={downloads} /></div></main>;
}
