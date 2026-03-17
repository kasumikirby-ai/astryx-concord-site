import ArtGallery from "@/components/art-gallery";
import { finalizedArt } from "@/data/finalized-art";
export const metadata = { title: "Finalized Art | The Astryx Concord Saga", description: "Completed artwork, official designs, covers, and approved illustrations." };
export default function FinalizedArtPage(){ return <ArtGallery title="Finalized Art" text="Completed artwork, official designs, covers, approved illustrations, and premium visual materials can live here." items={finalizedArt} />; }
