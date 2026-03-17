import GlassCard from "@/components/glass-card";
import type { GalleryItem } from "@/types/content";

export default function ArtGallery({
  title,
  text,
  items,
}: {
  title: string;
  text: string;
  items: GalleryItem[];
}) {
  return (
    <section className="page-wrap">
      <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.32em] text-slate-300/45">
            Gallery
          </p>
          <h1 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
            {title}
          </h1>
        </div>
        <p className="max-w-2xl text-slate-200/60">{text}</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {items.map((item) => (
          <GlassCard key={item.id} className="overflow-hidden rounded-3xl">
            <img
              src={item.image}
              alt={item.title}
              className="aspect-[4/3] w-full object-cover"
            />
            <div className="p-6">
              <div className="mb-3 flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-50">
                  {item.title}
                </h3>
                <span className="rounded-full border border-sky-100/10 bg-black/20 px-3 py-1 text-xs text-slate-100/75">
                  {item.type}
                </span>
              </div>
              <p className="leading-7 text-slate-200/62">{item.caption}</p>
            </div>
          </GlassCard>
        ))}
      </div>
    </section>
  );
}
