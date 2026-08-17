import { Hero } from "@/components/hero/Hero";
import { Footer } from "@/components/layout/Footer";
import { Navigation } from "@/components/navigation/Navigation";
import { Realms } from "@/components/realms/Realms";
import { Invitation } from "@/components/sections/Invitation";
import { Letters } from "@/components/sections/Letters";
import { SocialLinks } from "@/components/sections/SocialLinks";

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <Invitation />
        <Realms />
        <SocialLinks />
        <Letters />
      </main>
      <Footer />
    </>
  );
}
