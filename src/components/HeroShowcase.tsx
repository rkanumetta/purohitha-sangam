import { useEffect, useState } from "react";
import { Autoplay, EffectCards, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/pagination";

type Photo = {
  src: string;
  alt: string;
  caption: string;
};

export function HeroShowcase({ photos }: { photos: Photo[] }) {
  const [reduce, setReduce] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduce(mq.matches);
    const onChange = () => setReduce(mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  return (
    <div className="hero-swiper-wrap mx-auto aspect-[3/4] w-full max-w-[26rem] pb-10">
      <Swiper
        className="hero-swiper h-full w-full"
        modules={reduce ? [Pagination] : [EffectCards, Autoplay, Pagination]}
        effect={reduce ? undefined : "cards"}
        grabCursor
        pagination={{ clickable: true }}
        autoplay={reduce ? false : { delay: 3200, disableOnInteraction: false }}
        loop={photos.length > 2}
      >
        {photos.map((photo) => (
          <SwiperSlide key={photo.src} className="overflow-hidden rounded-xl bg-night-2">
            <img src={photo.src} alt={photo.alt} className="h-full w-full object-cover object-top" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
