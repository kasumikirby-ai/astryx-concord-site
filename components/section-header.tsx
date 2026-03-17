export default function SectionHeader({ eyebrow, title, text }: { eyebrow: string; title: string; text: string }) {
  return (
    <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
      <div>
        <p className="text-sm uppercase tracking-[0.32em] text-slate-300/45">{eyebrow}</p>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">{title}</h2>
      </div>
      <p className="max-w-2xl text-slate-200/60">{text}</p>
    </div>
  );
}
