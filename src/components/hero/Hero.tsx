import Image from "next/image";
import { SparkleField } from "@/components/effects/SparkleField";

export function Hero() {
  return (
    <section
      id="threshold"
      className="relative isolate flex min-h-[100svh] overflow-hidden bg-[var(--color-bg)]"
    >
      <Image
        src="/images/HeroPrincess.png"
        alt="The Eternal Princess standing in a twilight realm."
        fill
        priority
        sizes="100vw"
        className="hero-image object-cover"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[linear-gradient(90deg,rgba(13,5,18,0.88)_0%,rgba(35,12,42,0.52)_31%,rgba(27,8,32,0.16)_50%,rgba(27,8,32,0)_68%)]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(circle_at_18%_62%,rgba(214,143,178,0.16),transparent_28%),linear-gradient(0deg,rgba(13,5,18,0.36)_0%,rgba(13,5,18,0)_24%)]"
      />
      <SparkleField />
      <div className="relative z-10 mx-auto flex min-h-[100svh] w-full max-w-7xl items-end px-5 pb-20 pt-36 sm:px-8 lg:items-center lg:px-12 lg:pb-16 lg:pt-44">
        <div className="hero-copy max-w-[580px] text-balance">
          <p className="mb-7 text-xs font-semibold uppercase tracking-[0.38em] text-[var(--color-champagne)]">
            WELCOME TO THE REALM
          </p>
          <h1 className="font-serif text-[clamp(3.5rem,7.2vw,6.875rem)] leading-[0.94] text-[var(--color-ivory)]">
            The Eternal Princess
          </h1>
          <div className="mt-10 space-y-3 font-serif text-[clamp(1.7rem,3.2vw,3rem)] leading-[1.08] text-[var(--color-rose-light)]">
            <p>Some kingdoms are remembered.</p>
            <p className="italic">Others are becoming.</p>
          </div>
          <div className="mt-12 flex flex-col items-start gap-5 sm:flex-row sm:items-center">
            <a className="button-primary" href="#realms">
              ENTER THE REALM
            </a>
            <a className="hero-story-link" href="#story">
              Discover the story <span aria-hidden="true">↓</span>
            </a>
          </div>
        </div>
      </div>
      <div
        aria-hidden="true"
        className="absolute bottom-0 left-0 right-0 h-36 bg-gradient-to-t from-[var(--color-bg)] to-transparent"
      />
    </section>
  );
}
