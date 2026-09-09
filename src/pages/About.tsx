import { MediaFrame } from "../components/MediaFrame";
import { Reveal } from "../components/Reveal";
import { aboutIntro, labels, objectives, org } from "../data/content";

export function About() {
  return (
    <div>
      <section className="mx-auto max-w-[1400px] px-4 pb-12 pt-16 md:px-6">
        <h1 className="font-display text-4xl font-semibold leading-[1.2] text-ink md:text-5xl dark:text-[#f3efe6]">
          {labels.about}
        </h1>
        <p className="mt-6 max-w-[65ch] text-lg leading-relaxed text-ink-soft dark:text-[#c9c2b4]">{aboutIntro}</p>
      </section>

      <section className="mx-auto grid max-w-[1400px] gap-6 px-4 pb-20 md:grid-cols-12 md:px-6">
        <div className="md:col-span-7">
          <MediaFrame
            src="/media/committee-group.jpg"
            alt={labels.about}
            position="center"
            className="aspect-[16/9] w-full md:aspect-[20/9]"
          />
        </div>
        <div className="flex flex-col justify-end rounded-xl bg-night px-6 py-8 text-[#f3efe6] md:col-span-5">
          <p className="font-latin text-[13px] text-[#c9c2b4]">{org.shortName}</p>
          <p className="mt-2 font-display text-2xl leading-[1.3]">{org.nameTe}</p>
          <p className="mt-4 text-[15px] text-[#c9c2b4]">
            {labels.registration}: {org.registration}
          </p>
          <p className="mt-1 text-[15px] text-[#c9c2b4]">{org.placeTe}</p>
        </div>
      </section>

      <section className="bg-paper-2 dark:bg-night-2">
        <div className="mx-auto max-w-[1400px] px-4 py-20 md:px-6">
          <Reveal>
            <h2 className="font-display text-3xl font-semibold text-ink md:text-4xl dark:text-[#f3efe6]">
              {labels.objectives}
            </h2>
          </Reveal>
          <ol className="mt-10 grid gap-8 md:grid-cols-2">
            {objectives.map((item, i) => (
              <Reveal key={item.title} delay={i * 0.04}>
                <article>
                  <p className="font-latin text-[13px] text-kumkum">{String(i + 1).padStart(2, "0")}</p>
                  <h3 className="mt-2 font-display text-2xl text-ink dark:text-[#f3efe6]">{item.title}</h3>
                  <p className="mt-3 max-w-[52ch] text-[16px] leading-relaxed text-ink-soft dark:text-[#c9c2b4]">
                    {item.body}
                  </p>
                </article>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>
    </div>
  );
}
