"use client";

import { FormEvent, useState } from "react";

export function Letters() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <section
      id="letters"
      className="section-band bg-[linear-gradient(180deg,var(--color-bg)_0%,#1b0715_100%)]"
    >
      <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
        <div className="letters-panel">
          <div>
            <p className="section-kicker">LETTERS FROM THE REALM</p>
            <h2 className="mt-4 font-serif text-5xl leading-none text-[var(--color-ivory)] sm:text-7xl">
              Occasional notes, discoveries and invitations from the Eternal
              Princess.
            </h2>
          </div>
          <form
            className="letters-form"
            aria-label="Join the mailing list"
            onSubmit={handleSubmit}
          >
            <label htmlFor="email" className="sr-only">
              Email address
            </label>
            <input
              id="email"
              type="email"
              name="email"
              placeholder="your@email.com"
              autoComplete="email"
              className="letters-input"
            />
            <button type="submit" className="button-primary">
              RECEIVE LETTERS
            </button>
            <p className="letters-note" aria-live="polite">
              {submitted ? "Your address is held at the threshold for now." : ""}
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
