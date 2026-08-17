import Image from "next/image";
import type { GardenEntry as GardenEntryData } from "@/components/garden/gardenEntries";

export function GardenEntry({ entry }: { entry: GardenEntryData }) {
  if (entry.type === "fragment") {
    return (
      <article className="garden-entry garden-entry-fragment">
        <p className="garden-handwritten">{entry.handwrittenNote}</p>
        <EntryThreads tags={entry.tags} />
      </article>
    );
  }

  return (
    <article
      className={`garden-entry garden-entry-${entry.type} ${
        entry.featured ? "garden-entry-featured" : ""
      }`}
    >
      {entry.image ? (
        <figure className="garden-photo">
          <Image
            src={entry.image}
            alt={entry.imageAlt ?? ""}
            width={900}
            height={1100}
            sizes="(min-width: 1024px) 38vw, 100vw"
            className="h-full w-full object-cover"
          />
          {entry.handwrittenNote ? (
            <figcaption>{entry.handwrittenNote}</figcaption>
          ) : null}
        </figure>
      ) : null}
      <div className="garden-entry-copy">
        <p className="garden-entry-type">{entry.date ?? entry.type}</p>
        {entry.title ? (
          <h2 className="font-serif text-4xl leading-tight text-[var(--garden-ink)] sm:text-5xl">
            {entry.title}
          </h2>
        ) : null}
        {entry.excerpt ? (
          <p className="mt-5 text-base leading-8 text-[var(--garden-text)] sm:text-lg">
            {entry.excerpt}
          </p>
        ) : null}
        {entry.handwrittenNote && !entry.image ? (
          <p className="garden-tucked-note">{entry.handwrittenNote}</p>
        ) : null}
        <EntryThreads tags={entry.tags} />
      </div>
    </article>
  );
}

function EntryThreads({ tags }: { tags?: string[] }) {
  if (!tags?.length) {
    return null;
  }

  return (
    <ul className="garden-threads" aria-label="Entry threads">
      {tags.slice(0, 3).map((tag) => (
        <li key={tag}>{tag}</li>
      ))}
    </ul>
  );
}
