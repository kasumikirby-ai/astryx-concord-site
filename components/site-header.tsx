"use client";
import Link from "next/link";

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-30 border-b border-sky-100/10 bg-[#050816]/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        
        <div>
          <p className="text-xs uppercase tracking-[0.35em] text-sky-100/45">
            Official Saga Hub
          </p>
          <h1 className="text-lg font-semibold tracking-[0.08em] text-slate-50">
            The Astryx Concord Saga
          </h1>
        </div>

        <nav className="flex gap-8 text-sm text-slate-200/70">
          <Link href="/">Home</Link>
          <Link href="/collections">Collections</Link>
          <Link href="/downloads">Downloads</Link>
          <Link href="/concept-art">Concept Art</Link>
          <Link href="/character-concept">Character Concept</Link>
          <Link href="/finalized-art">Finalized Art</Link>
          <Link href="/legal">Legal</Link>
        </nav>

      </div>
    </header>
  );
}