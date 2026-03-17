import ArtGallery from "@/components/art-gallery";

const characterConcept = [
  {
    id: 1,
    title: "Character Concept 1",
    image: "/images/concept/concept1.png",
    type: "Character",
    caption: "Character concept art",
  },
];

export default function Page() {
  return (
    <ArtGallery
      title="Character Concept"
      text="Character designs and concept art"
      items={characterConcept}
    />
  );
}