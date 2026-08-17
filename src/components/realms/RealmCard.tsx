import Image from "next/image";
import Link from "next/link";
import type { Realm } from "@/components/data/realms";

export function RealmCard({ realm }: { realm: Realm }) {
  const content = (
    <article
      className={`realm-card realm-${realm.tone} ${
        !realm.href && !realm.externalHref ? "realm-card-unlinked" : ""
      }`}
    >
      <Image
        src={realm.imageSrc}
        alt=""
        fill
        sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
        className="realm-image object-cover"
      />
      <div aria-hidden="true" className="realm-card-glow" />
      <div className="realm-card-content">
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.34em] text-[var(--color-champagne)]">
          {realm.status}
        </p>
        <h3 className="realm-title font-serif text-4xl text-[var(--color-ivory)] sm:text-5xl">
          {realm.label}
        </h3>
        <p className="mt-5 max-w-md text-base leading-7 text-[var(--color-muted)]">
          {realm.description}
        </p>
        {realm.isMature ? <span className="realm-mature">18+</span> : null}
        <span className="realm-arrow" aria-hidden="true">
          {realm.actionLabel}
        </span>
      </div>
    </article>
  );

  if (realm.href) {
    return (
      <Link
        href={realm.href}
        className="realm-link"
        aria-label={`Enter ${realm.label.replace("THE ", "The ")}`}
      >
        {content}
      </Link>
    );
  }

  if (realm.externalHref) {
    return (
      <a
        href={realm.externalHref}
        target="_blank"
        rel="noopener noreferrer"
        className="realm-link"
        aria-label={`Enter ${realm.label.replace("THE ", "The ")} on ${
          realm.destinationLabel
        } (opens in a new tab)`}
      >
        {content}
      </a>
    );
  }

  return content;
}
