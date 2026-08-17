import { realms } from "@/components/data/realms";
import { RealmCard } from "@/components/realms/RealmCard";

const realmSlotClass = {
  garden: "realm-slot-garden",
  atelier: "realm-slot-atelier",
  afterDark: "realm-slot-after-dark",
  observatory: "realm-slot-observatory",
};

export function Realms() {
  return (
    <section
      id="realms"
      className="section-band bg-[linear-gradient(180deg,var(--color-bg-rose)_0%,var(--color-midnight)_55%,var(--color-bg)_100%)]"
    >
      <div className="mx-auto max-w-7xl px-5 py-28 sm:px-8 lg:px-12 lg:py-36">
        <div className="max-w-3xl">
          <p className="section-kicker">THE REALMS</p>
          <h2 className="font-serif text-5xl leading-none text-[var(--color-ivory)] sm:text-7xl">
            Different rooms. Different expressions. One unfolding story.
          </h2>
        </div>
        <div className="realm-grid mt-16">
          {realms.map((realm) => (
            <div
              key={realm.label}
              className={`realm-slot ${realmSlotClass[realm.tone]}`}
            >
              <RealmCard realm={realm} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
