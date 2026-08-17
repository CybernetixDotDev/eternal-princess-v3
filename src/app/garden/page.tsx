import type { Metadata } from "next";
import { GardenHero } from "@/components/garden/GardenHero";
import { GardenJournal } from "@/components/garden/GardenJournal";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "The Garden | The Eternal Princess",
  description:
    "Enter The Garden, the autobiographical heart of Eternal Princess: identity, becoming, reflection and the quieter magic of being seen.",
};

export default function GardenPage() {
  return (
    <>
      <main className="garden-page">
        <GardenHero />
        <GardenJournal />
      </main>
      <Footer />
    </>
  );
}
