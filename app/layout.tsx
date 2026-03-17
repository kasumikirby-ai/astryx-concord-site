import "./globals.css";
import type { Metadata } from "next";
import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";
export const metadata: Metadata = {
  title: "The Astryx Concord Saga",
  description: "Official saga hub for books, art books, concept art, finalized art, lore, downloads, and future projects.",
  authors: [{ name: "Rogue Gaming Network" }],
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body><div className="site-shell"><SiteHeader />{children}<SiteFooter /></div></body></html>;
}
