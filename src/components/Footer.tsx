import { Link } from "react-router-dom";
import { affiliatedOffice, labels, navItems, org } from "../data/content";

export function Footer() {
  return (
    <footer className="border-t border-ink/8 bg-paper-2 dark:border-white/8 dark:bg-night-2">
      <div className="mx-auto grid max-w-[1400px] gap-10 px-4 py-14 md:grid-cols-12 md:px-6">
        <div className="md:col-span-5">
          <p className="font-latin text-[13px] font-semibold tracking-[0.14em] text-kumkum">{org.shortName}</p>
          <h2 className="mt-2 font-display text-2xl font-semibold leading-[1.25] text-ink dark:text-[#f3efe6]">
            {org.nameTe}
          </h2>
          <p className="mt-2 text-ink-soft dark:text-[#c9c2b4]">{org.placeTe}</p>
          <p className="mt-4 max-w-[42ch] text-[15px] leading-relaxed text-ink-soft dark:text-[#c9c2b4]">
            {org.tagline}
          </p>
        </div>

        <div className="md:col-span-3">
          <p className="text-[15px] font-semibold text-ink dark:text-[#f3efe6]">{labels.office}</p>
          <p className="mt-3 text-[15px] text-ink-soft dark:text-[#c9c2b4]">
            {labels.registration}: {org.registration}
          </p>
          <p className="mt-1 text-[15px] text-ink-soft dark:text-[#c9c2b4]">
            {labels.phone}:{" "}
            <a className="text-kumkum-deep underline-offset-2 hover:underline dark:text-[#f0c9a8]" href={`tel:${org.phone}`}>
              {org.phoneDisplay}
            </a>
          </p>
          <div className="mt-6 flex flex-wrap gap-x-4 gap-y-2 text-[15px]">
            {navItems.slice(1).map((item) => (
              <Link key={item.to} to={item.to} className="text-ink-soft hover:text-kumkum dark:text-[#c9c2b4]">
                {item.label}
              </Link>
            ))}
            <Link to="/announcements" className="text-ink-soft hover:text-kumkum dark:text-[#c9c2b4]">
              {labels.announcements}
            </Link>
            <Link to="/contact" className="text-ink-soft hover:text-kumkum dark:text-[#c9c2b4]">
              {labels.contact}
            </Link>
          </div>
        </div>

        <div className="md:col-span-4">
          <p className="text-[15px] font-semibold text-ink dark:text-[#f3efe6]">{labels.relatedOffice}</p>
          <p className="mt-3 text-[15px] leading-relaxed text-ink-soft dark:text-[#c9c2b4]">
            {affiliatedOffice.name}, {affiliatedOffice.place}
          </p>
          <p className="mt-1 text-[15px] text-ink-soft dark:text-[#c9c2b4]">{affiliatedOffice.address}</p>
          <p className="mt-3 text-[15px] text-ink-soft dark:text-[#c9c2b4]">
            {labels.president}: {affiliatedOffice.president}
          </p>
          <p className="mt-1 text-[15px] text-ink-soft dark:text-[#c9c2b4]">
            {teSecretaries}: {affiliatedOffice.secretaries}
          </p>
        </div>
      </div>
    </footer>
  );
}

const teSecretaries = "\u0c15\u0c3e\u0c30\u0c4d\u0c2f\u0c26\u0c30\u0c4d\u0c36\u0c3f";
