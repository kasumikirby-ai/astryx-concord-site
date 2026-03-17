import { siteConfig } from "@/data/site-config";
export default function SiteFooter() {
  return (
    <footer className="border-t border-sky-100/10 bg-black/25 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-8 text-sm text-slate-200/55 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <p>{siteConfig.copyright}</p>
        <p>Unauthorized reproduction, distribution, reposting, or resale is prohibited.</p>
      </div>
    </footer>
  );
}
