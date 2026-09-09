import { Phone } from "@phosphor-icons/react";
import { MediaFrame } from "../components/MediaFrame";
import { Reveal } from "../components/Reveal";
import { committee, labels, org } from "../data/content";

export function Committee() {
  const [lead, ...rest] = committee;
  const officers = rest.filter((m) => m.rank === "office");
  const members = rest.filter((m) => m.rank === "member");

  return (
    <div>
      <section className="mx-auto max-w-[1400px] px-4 pb-10 pt-16 md:px-6">
        <h1 className="font-display text-4xl font-semibold text-ink md:text-5xl dark:text-[#f3efe6]">
          {"\u0c15\u0c3e\u0c30\u0c4d\u0c2f\u0c35\u0c30\u0c4d\u0c17\u0c02"}
        </h1>
        <p className="mt-4 max-w-[52ch] text-lg text-ink-soft dark:text-[#c9c2b4]">
          {org.nameTe}, {org.placeTe}
        </p>
      </section>

      <section className="mx-auto grid max-w-[1400px] items-stretch gap-6 px-4 pb-16 md:grid-cols-12 md:px-6">
        <div className="md:col-span-7">
          <MediaFrame
            src="/media/committee-group.jpg"
            alt={lead.name}
            position="center"
            className="aspect-[16/9] w-full md:aspect-[20/9]"
          />
        </div>
        <div className="flex flex-col justify-center rounded-xl bg-night px-7 py-10 text-[#f3efe6] md:col-span-5">
          <p className="text-[15px] text-[#f0c9a8]">{lead.role}</p>
          <h2 className="mt-2 font-display text-3xl leading-[1.25]">{lead.name}</h2>
          <a href={`tel:${org.phone}`} className="mt-6 inline-flex items-center gap-2 text-[16px] text-[#f0c9a8]">
            <Phone size={18} weight="fill" />
            {org.phoneDisplay}
          </a>
        </div>
      </section>

      <section className="bg-paper-2 dark:bg-night-2">
        <div className="mx-auto max-w-[1400px] px-4 py-16 md:px-6">
          <div className="grid gap-4 md:grid-cols-2">
            {officers.map((person, i) => (
              <Reveal key={person.name} delay={i * 0.03}>
                <div className="flex items-baseline justify-between gap-4 border-b border-ink/10 py-4 dark:border-white/10">
                  <p className="font-display text-xl text-ink dark:text-[#f3efe6]">{person.name}</p>
                  <p className="shrink-0 text-[15px] text-ink-soft dark:text-[#c9c2b4]">{person.role}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1400px] px-4 py-16 md:px-6">
        <h2 className="font-display text-3xl font-semibold text-ink dark:text-[#f3efe6]">{labels.more}</h2>
        <div className="mt-8 grid gap-x-10 gap-y-5 sm:grid-cols-2 lg:grid-cols-3">
          {members.map((person) => (
            <div key={person.name}>
              <p className="font-display text-lg text-ink dark:text-[#f3efe6]">{person.name}</p>
              <p className="text-[14px] text-ink-soft dark:text-[#c9c2b4]">{person.role}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
