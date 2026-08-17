export function Footer() {
  return (
    <footer className="bg-[#1b0715] px-5 pb-10 pt-6 text-[var(--color-muted)] sm:px-8 lg:px-12">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 border-t border-white/10 pt-10 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[var(--color-ivory)]">
            THE ETERNAL PRINCESS
          </p>
          <p className="mt-3">A universe by Cally Mehl.</p>
          <p className="mt-2">&copy; 2026 Eternal Princess</p>
        </div>
        <p className="max-w-xl font-serif text-2xl leading-snug text-[var(--color-rose-light)]">
          Somewhere between who we were and who we are becoming, another world
          begins.
        </p>
      </div>
    </footer>
  );
}
