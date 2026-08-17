import { socialLinks } from "@/components/data/socialLinks";

export function SocialLinks() {
  return (
    <section className="section-band bg-[var(--color-bg)]">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-24 sm:px-8 lg:grid-cols-[1fr_0.8fr] lg:px-12">
        <div>
          <p className="section-kicker">THE STORY CONTINUES BEYOND THESE WALLS</p>
          <p className="mt-7 max-w-2xl font-serif text-4xl leading-tight text-[var(--color-ivory)] sm:text-5xl">
            Follow the creation of the Eternal Princess as each realm begins to
            open.
          </p>
        </div>
        <div className="flex flex-wrap items-end gap-x-7 gap-y-4 lg:justify-end">
          {socialLinks.map((link) =>
            link.href ? (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
              >
                {link.label}
              </a>
            ) : (
              <span key={link.label} className="social-link social-link-muted">
                {link.label}
              </span>
            ),
          )}
        </div>
      </div>
    </section>
  );
}
