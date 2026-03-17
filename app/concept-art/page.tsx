import ArtGallery from "@/components/art-gallery";
import { conceptArt } from "@/data/concept-art";
export const metadata = { title: "Concept Art | The Astryx Concord Saga", description: "Early designs, visual experiments, character concepts, and unfinished artwork." };
export default function ConceptArtPage(){ return <ArtGallery title="Concept Art" text="Early designs, visual experiments, character concepts, ship studies, and unfinished artwork can live here and be expanded later." items={conceptArt} />; }
