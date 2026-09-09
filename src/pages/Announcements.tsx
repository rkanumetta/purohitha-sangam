import { announcements, labels } from "../data/content";

export function Announcements() {
  return (
    <div className="mx-auto max-w-[1400px] px-4 py-16 md:px-6">
      <h1 className="font-display text-4xl font-semibold text-ink md:text-5xl dark:text-[#f3efe6]">
        {labels.announcements}
      </h1>
      <div className="mt-10 grid gap-8">
        {announcements.map((item) => (
          <article key={item.title} className="border-t border-ink/12 pt-6 dark:border-white/12">
            <p className="text-[13px] text-kumkum">{item.date}</p>
            <h2 className="mt-2 font-display text-2xl text-ink dark:text-[#f3efe6]">{item.title}</h2>
            <p className="mt-3 max-w-[65ch] text-[16px] leading-relaxed text-ink-soft dark:text-[#c9c2b4]">
              {item.body}
            </p>
          </article>
        ))}
      </div>
    </div>
  );
}
