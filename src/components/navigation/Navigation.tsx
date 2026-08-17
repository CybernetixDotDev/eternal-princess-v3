"use client";

import { useEffect, useState } from "react";

const navItems = [
  { label: "Realms", href: "#realms" },
  { label: "Story", href: "#story" },
  { label: "Letters", href: "#letters" },
];

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const update = () => setIsScrolled(window.scrollY > 24);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  const closeMenu = () => setIsOpen(false);

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 transition duration-500 ${
        isScrolled || isOpen
          ? "bg-transparent"
          : "bg-transparent"
      }`}
    >
      <nav
        aria-label="Primary navigation"
        className={`mx-auto mt-3 flex h-16 max-w-7xl items-center justify-between rounded-full px-5 transition duration-500 sm:px-6 lg:px-7 ${
          isScrolled || isOpen
            ? "border border-white/12 bg-[rgba(33,12,38,0.34)] shadow-[0_18px_70px_rgba(6,1,10,0.18)] backdrop-blur-xl"
            : "border border-transparent bg-transparent"
        }`}
      >
        <a
          href="#threshold"
          onClick={closeMenu}
          className="text-sm font-semibold uppercase tracking-[0.28em] text-[var(--color-ivory)] focus-ring"
        >
          ETERNAL PRINCESS
        </a>
        <div className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="nav-link">
              {item.label}
            </a>
          ))}
          <a href="/garden" className="nav-enter">
            Enter
          </a>
        </div>
        <button
          type="button"
          className="menu-button md:hidden"
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
          aria-label={isOpen ? "Close navigation" : "Open navigation"}
          onClick={() => setIsOpen((current) => !current)}
        >
          <span />
          <span />
        </button>
      </nav>
      {isOpen ? (
        <div id="mobile-navigation" className="mobile-nav open md:hidden">
          <div className="mx-5 mb-5 rounded-[8px] border border-white/12 bg-[rgba(37,13,46,0.88)] p-6 shadow-[0_30px_90px_rgba(0,0,0,0.35)] backdrop-blur-2xl">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={closeMenu}
                className="mobile-nav-link"
              >
                {item.label}
              </a>
            ))}
            <a href="/garden" onClick={closeMenu} className="mobile-enter">
              Enter
            </a>
          </div>
        </div>
      ) : null}
    </header>
  );
}
