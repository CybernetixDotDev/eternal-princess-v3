import { gardenEntries } from "@/components/garden/gardenEntries";
import { GardenEntry } from "@/components/garden/GardenEntry";

export function GardenJournal() {
  return (
    <section className="garden-journal" aria-labelledby="garden-journal-title">
      <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
        <div className="garden-journal-intro">
          <p className="section-kicker">SCRAPBOOK JOURNAL</p>
          <h2
            id="garden-journal-title"
            className="mt-4 max-w-3xl font-serif text-5xl leading-none text-[var(--garden-ink)] sm:text-7xl"
          >
            Things kept because they mattered.
          </h2>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-[var(--garden-text)]">
            The first pages are only a beginning: photographs, fragments,
            little recollections and folded thoughts waiting for the garden to
            grow around them.
          </p>
        </div>
        <div className="garden-scrapbook">
          {gardenEntries.map((entry) => (
            <GardenEntry key={entry.id} entry={entry} />
          ))}
        </div>
      </div>
    </section>
  );
}
