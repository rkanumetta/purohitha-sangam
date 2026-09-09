import { MediaFrame } from "../components/MediaFrame";
import { Reveal } from "../components/Reveal";
import { dharmika, labels, programs, temples, videos } from "../data/content";

export function Programs() {
  const featured = programs[0];
  const rest = programs.slice(1);

  return (
    <div>
      <section className="mx-auto max-w-[1400px] px-4 pb-10 pt-16 md:px-6">
        <h1 className="font-display text-4xl font-semibold text-ink md:text-5xl dark:text-[#f3efe6]">
          {labels.programs}
        </h1>
      </section>

      <section className="mx-auto max-w-[1400px] px-4 pb-16 md:px-6">
        <div className="overflow-hidden rounded-xl bg-night">
          <video
            className="aspect-video w-full bg-night object-contain"
            controls
            playsInline
            poster={featured.image}
            preload="metadata"
          >
            <source src={videos[0].src} type="video/mp4" />
          </video>
        </div>
        <h2 className="mt-6 font-display text-3xl text-ink dark:text-[#f3efe6]">{featured.title}</h2>
        <p className="mt-2 text-ink-soft dark:text-[#c9c2b4]">{featured.place}</p>
        <p className="mt-3 max-w-[65ch] text-[16px] leading-relaxed text-ink-soft dark:text-[#c9c2b4]">
          {featured.summary}
        </p>
      </section>

      <section className="bg-paper-2 dark:bg-night-2">
        <div className="mx-auto grid max-w-[1400px] gap-8 px-4 py-16 md:grid-cols-3 md:px-6">
          {rest.map((item, i) => (
            <Reveal key={item.id} delay={i * 0.05}>
              <MediaFrame
                src={item.image}
                alt={item.imageAlt}
                position={item.id === "sabha" ? "center" : "top"}
                className="aspect-[3/4] w-full"
              />
              <h3 className="mt-4 font-display text-2xl text-ink dark:text-[#f3efe6]">{item.title}</h3>
              <p className="mt-1 text-[15px] text-kumkum">{item.place}</p>
              <p className="mt-2 text-[15px] leading-relaxed text-ink-soft dark:text-[#c9c2b4]">{item.summary}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-[1400px] px-4 py-20 md:px-6">
        <h2 className="font-display text-3xl font-semibold text-ink dark:text-[#f3efe6]">{labels.temples}</h2>
        {temples.map((temple) => (
          <article key={temple.name} className="mt-8 grid items-center gap-8 md:grid-cols-2">
            <MediaFrame src={temple.image} alt={temple.name} className="aspect-[3/4] w-full max-h-[36rem]" />
            <div>
              <h3 className="font-display text-2xl text-ink dark:text-[#f3efe6]">{temple.name}</h3>
              <p className="mt-2 text-kumkum">{temple.place}</p>
              <p className="mt-3 max-w-[48ch] text-[16px] leading-relaxed text-ink-soft dark:text-[#c9c2b4]">
                {temple.note}
              </p>
            </div>
          </article>
        ))}
      </section>

      <section className="bg-night text-[#f3efe6]">
        <div className="mx-auto max-w-[1400px] px-4 py-20 md:px-6">
          <h2 className="font-display text-3xl font-semibold">{labels.dharmika}</h2>
          <div className="mt-10 grid gap-10 md:grid-cols-3">
            {dharmika.map((item) => (
              <article key={item.title}>
                <h3 className="font-display text-2xl">{item.title}</h3>
                <p className="mt-3 max-w-[40ch] text-[15px] leading-relaxed text-[#c9c2b4]">{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
