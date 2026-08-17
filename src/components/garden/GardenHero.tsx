import Image from "next/image";
import Link from "next/link";
import { SparkleField } from "@/components/effects/SparkleField";

export function GardenHero() {
  return (
    <section className="garden-hero">
      <Image
        src="/gardenTile.png"
        alt=""
        fill
        priority
        sizes="100vw"
        className="garden-hero-image object-cover"
      />
      <div aria-hidden="true" className="garden-hero-overlay" />
      <SparkleField className="opacity-70" />
      <div className="garden-hero-inner">
        <Link href="/" className="garden-return">
          ← Return to the Realm
        </Link>
        <div className="garden-hero-paper">
          <p className="section-kicker">THE GARDEN</p>
          <h1 className="mt-5 font-serif text-[clamp(4rem,9vw,8rem)] leading-[0.88] text-[var(--garden-ink)]">
            The Garden
          </h1>
          <p className="mt-7 font-serif text-4xl italic leading-tight text-[var(--garden-rose)] sm:text-5xl">
            My story.
          </p>
          <p className="mt-5 max-w-2xl text-xl leading-9 text-[var(--garden-text)] sm:text-2xl">
            Identity, becoming, reflection, and the quieter magic of being
            seen.
          </p>
          <div className="mt-9 max-w-2xl space-y-4 text-base leading-8 text-[var(--garden-text)] sm:text-lg">
            <p>
              A collection of moments, memories, photographs, thoughts and
              fragments from a life still becoming.
            </p>
            <p>
              Nothing here is a guide for who anyone else should be. These are
              simply the things that mattered enough for me to keep.
            </p>
          </div>
          <p className="garden-margin-note" aria-hidden="true">
            pressed between then and becoming
          </p>
        </div>
      </div>
    </section>
  );
}
