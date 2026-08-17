import Image from "next/image";

export function Invitation() {
  return (
    <section
      id="invitation"
      className="invitation-section section-band bg-[var(--color-bg-rose)]"
    >
      <Image
        src="/reflectionV4.png"
        alt=""
        fill
        sizes="100vw"
        className="invitation-image object-cover"
      />
      <div aria-hidden="true" className="invitation-overlay" />
      <div
        id="story"
        className="mx-auto flex max-w-7xl justify-end px-5 py-28 sm:px-8 lg:px-12 lg:py-44"
      >
        <div className="invitation-copy max-w-2xl">
          <p className="section-kicker">THE INVITATION</p>
          <h2 className="font-serif text-5xl leading-none text-[var(--color-ivory)] sm:text-7xl">
            You have found the threshold.
          </h2>
          <div className="mt-10 space-y-7 text-xl leading-9 text-[var(--color-muted)] sm:text-2xl sm:leading-10">
            <p>The Eternal Princess is a collection of worlds.</p>
            <p>
              Some are soft. Some are playful. Some are sensual. Some are
              thoughtful. Some are still waiting to be discovered.
            </p>
            <p>
              Together they tell the story of what happens when we stop asking
              permission to become ourselves.
            </p>
            <p className="font-serif text-3xl text-[var(--color-champagne)] sm:text-4xl">
              Welcome to the realm.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
