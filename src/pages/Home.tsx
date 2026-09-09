import { Link } from "react-router-dom";
import { ArrowRight } from "@phosphor-icons/react";
import { HeroShowcase } from "../components/HeroShowcase";
import { MediaFrame } from "../components/MediaFrame";
import { PhotoCarousel } from "../components/PhotoCarousel";
import { Reveal } from "../components/Reveal";
import {
  announcements,
  committee,
  featuredPhotos,
  labels,
  org,
  programs,
} from "../data/content";

export function Home() {
  const lead = committee[0];

  return (
    <div>
      <section className="mx-auto grid max-w-[1400px] items-center gap-10 overflow-x-clip px-4 py-8 md:min-h-[calc(100dvh-4rem)] md:grid-cols-[minmax(0,1.1fr)_minmax(16rem,26rem)] md:px-6 md:py-10">
        <div className="hero-copy">
          <p className="font-latin text-[13px] font-semibold tracking-[0.16em] text-kumkum">
            {org.shortName}
          </p>
          <h1 className="mt-3 font-display text-3xl font-semibold leading-[1.35] text-ink md:text-4xl lg:text-5xl dark:text-[#f3efe6]">
            {org.nameTe}
          </h1>
          <p className="mt-4 max-w-[36ch] text-lg leading-relaxed text-ink-soft dark:text-[#c9c2b4]">
            {org.tagline}
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              to="/membership"
              className="inline-flex items-center rounded-xl bg-kumkum px-5 py-3 text-[16px] font-medium text-white hover:bg-kumkum-deep active:scale-[0.98]"
            >
              {labels.join}
            </Link>
            <Link
              to="/programs"
              className="inline-flex items-center rounded-xl border border-ink/15 px-5 py-3 text-[16px] font-medium text-ink hover:border-kumkum/40 dark:border-white/15 dark:text-[#f3efe6]"
            >
              {labels.programs}
            </Link>
          </div>
        </div>
        <HeroShowcase photos={featuredPhotos} />
      </section>

      <section className="bg-night text-[#f3efe6]">
        <div className="mx-auto grid max-w-[1400px] gap-8 px-4 py-10 md:grid-cols-3 md:px-6">
          <div>
            <p className="font-latin text-[13px] text-[#c9c2b4]">{labels.registration}</p>
            <p className="mt-1 font-display text-2xl">{org.registration}</p>
          </div>
          <div>
            <p className="font-latin text-[13px] text-[#c9c2b4]">{org.placeTe}</p>
            <p className="mt-1 font-display text-2xl">{lead.name}</p>
            <p className="text-[15px] text-[#c9c2b4]">{lead.role}</p>
          </div>
          <div>
            <p className="font-latin text-[13px] text-[#c9c2b4]">{labels.phone}</p>
            <a href={`tel:${org.phone}`} className="mt-1 block font-display text-2xl text-[#f0c9a8]">
              {org.phoneDisplay}
            </a>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1400px] px-4 py-20 md:px-6">
        <Reveal>
          <h2 className="max-w-[18ch] font-display text-3xl font-semibold leading-[1.2] text-ink md:text-4xl dark:text-[#f3efe6]">
            {labels.about}
          </h2>
          <p className="mt-5 max-w-[65ch] text-lg leading-relaxed text-ink-soft dark:text-[#c9c2b4]">
            {org.tagline} {labels.registration} {org.registration}.
          </p>
          <Link
            to="/about"
            className="mt-6 inline-flex items-center gap-2 text-[16px] font-medium text-kumkum-deep dark:text-[#f0c9a8]"
          >
            {labels.more} <ArrowRight size={16} weight="bold" />
          </Link>
        </Reveal>
      </section>

      <section className="bg-paper-2 dark:bg-night-2">
        <div className="mx-auto max-w-[1400px] px-4 py-20 md:px-6">
          <Reveal>
            <h2 className="font-display text-3xl font-semibold text-ink md:text-4xl dark:text-[#f3efe6]">
              {labels.programs}
            </h2>
          </Reveal>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
            {programs.map((item, i) => (
              <Reveal key={item.id} delay={i * 0.05}>
                <Link to="/programs" className="block">
                  <MediaFrame
                    src={item.image}
                    alt={item.imageAlt}
                    position={item.id === "sabha" ? "center" : "top"}
                    className={item.id === "sabha" ? "aspect-[4/3]" : "aspect-[3/4]"}
                  />
                  <p className="mt-3 font-display text-xl text-ink dark:text-[#f3efe6]">{item.title}</p>
                  <p className="text-[15px] text-ink-soft dark:text-[#c9c2b4]">{item.place}</p>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1400px] px-4 py-20 md:px-6">
        <Reveal>
          <h2 className="font-display text-3xl font-semibold text-ink md:text-4xl dark:text-[#f3efe6]">
            {labels.announcements}
          </h2>
        </Reveal>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {announcements.map((item) => (
            <article key={item.title} className="border-t border-ink/12 pt-5 dark:border-white/12">
              <p className="text-[13px] text-kumkum">{item.date}</p>
              <h3 className="mt-2 font-display text-xl text-ink dark:text-[#f3efe6]">{item.title}</h3>
              <p className="mt-2 max-w-[42ch] text-[15px] leading-relaxed text-ink-soft dark:text-[#c9c2b4]">
                {item.body}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-night">
        <div className="mx-auto max-w-[1400px] px-4 py-14 md:px-6 md:py-16">
          <div className="mb-6 flex items-end justify-between gap-4">
            <h2 className="font-display text-3xl font-semibold text-[#f3efe6] md:text-4xl">
              {labels.gallery}
            </h2>
            <Link to="/gallery" className="inline-flex items-center gap-2 text-[#f0c9a8]">
              {labels.more} <ArrowRight size={16} weight="bold" />
            </Link>
          </div>
          <PhotoCarousel photos={featuredPhotos} />
        </div>
      </section>

      <section className="bg-leaf">
        <div className="mx-auto max-w-[1400px] px-4 py-16 md:px-6">
          <h2 className="font-display text-3xl font-semibold text-[#f3efe6] md:text-4xl">{labels.donate}</h2>
          <p className="mt-3 max-w-[40ch] text-[16px] leading-relaxed text-[#f3efe6]/90">{labels.donateHelp}</p>
          <Link
            to="/donations"
            className="mt-6 inline-flex rounded-xl bg-[#f3efe6] px-5 py-3 font-medium text-leaf active:scale-[0.98]"
          >
            {labels.donate}
          </Link>
        </div>
      </section>
    </div>
  );
}
