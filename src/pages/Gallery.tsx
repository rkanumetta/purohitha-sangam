import { useState } from "react";
import { X } from "@phosphor-icons/react";
import { labels, photos, videos } from "../data/content";

export function Gallery() {
  const [active, setActive] = useState<string | null>(null);
  const current = photos.find((p) => p.src === active);

  return (
    <div className="mx-auto max-w-[1400px] px-4 py-16 md:px-6">
      <h1 className="font-display text-4xl font-semibold text-ink md:text-5xl dark:text-[#f3efe6]">
        {labels.gallery}
      </h1>

      <h2 className="mt-10 font-display text-2xl text-ink dark:text-[#f3efe6]">{labels.photos}</h2>
      {photos.length === 0 ? (
        <p className="mt-4 text-ink-soft">{labels.emptyGallery}</p>
      ) : (
        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {photos.map((photo) => {
            const landscape = photo.src.includes("committee-group");
            return (
              <button
                key={photo.src}
                type="button"
                onClick={() => setActive(photo.src)}
                className={`block overflow-hidden rounded-xl bg-night-3 ${
                  landscape ? "sm:col-span-2 lg:col-span-3" : ""
                }`}
              >
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className={
                    landscape
                      ? "aspect-[16/9] w-full object-cover object-center md:aspect-[20/9]"
                      : "aspect-[3/4] w-full object-cover object-[center_18%]"
                  }
                />
                <span className="sr-only">{photo.caption}</span>
              </button>
            );
          })}
        </div>
      )}

      <h2 className="mt-16 font-display text-2xl text-ink dark:text-[#f3efe6]">{labels.videos}</h2>
      <div className="mt-6 grid gap-6 md:grid-cols-2">
        {videos.map((video) => (
          <figure key={video.src}>
            <video
              className="aspect-video w-full rounded-xl bg-night object-contain"
              controls
              playsInline
              preload="metadata"
              poster={video.poster}
            >
              <source src={video.src} type="video/mp4" />
            </video>
            <figcaption className="mt-2 text-[15px] text-ink-soft dark:text-[#c9c2b4]">{video.title}</figcaption>
          </figure>
        ))}
      </div>

      {current ? (
        <div
          className="fixed inset-0 z-50 grid place-items-center bg-night/88 p-4"
          onClick={() => setActive(null)}
          role="dialog"
          aria-modal="true"
        >
          <button
            type="button"
            className="absolute right-4 top-4 grid h-10 w-10 place-items-center rounded-xl bg-white text-ink"
            onClick={() => setActive(null)}
            aria-label="Close"
          >
            <X size={20} weight="bold" />
          </button>
          <img
            src={current.src}
            alt={current.alt}
            className="max-h-[86dvh] max-w-full rounded-xl object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      ) : null}
    </div>
  );
}
