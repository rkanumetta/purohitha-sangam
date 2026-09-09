import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

type Photo = {
  src: string;
  alt: string;
  caption: string;
};

export function PhotoCarousel({ photos }: { photos: Photo[] }) {
  if (!photos.length) return null;

  return (
    <Swiper
      className="gallery-swiper"
      modules={[Navigation, Pagination]}
      navigation
      pagination={{ clickable: true }}
      spaceBetween={16}
      slidesPerView={1.15}
      breakpoints={{
        640: { slidesPerView: 1.6, spaceBetween: 16 },
        768: { slidesPerView: 2.2, spaceBetween: 18 },
        1024: { slidesPerView: 3, spaceBetween: 20 },
      }}
    >
      {photos.map((photo) => (
        <SwiperSlide key={photo.src} className="h-auto">
          <figure>
            <div className="aspect-[3/4] overflow-hidden rounded-xl bg-night-3">
              <img
                src={photo.src}
                alt={photo.alt}
                className="h-full w-full object-cover object-[center_18%]"
              />
            </div>
            <figcaption className="mt-3 font-display text-[16px] text-[#f3efe6]">{photo.caption}</figcaption>
          </figure>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
