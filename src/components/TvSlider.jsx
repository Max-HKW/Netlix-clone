/**
 * Node modules
 */
import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, A11y } from 'swiper/modules';

/**
 * Components
 */
import ItemCard from './ItemCard';

/**
 * Icons
 */
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function TvSlider({ title, series }) {
  const [prevEl, setPrevEl] = useState(null);
  const [nextEl, setNextEl] = useState(null);

  if (!series || series.length === 0) return null;

  return (
    <section className="px-6 mt-12">
      {/* Header */}
      <header className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-semibold">{title}</h2>
      </header>

      <div className="relative">
        {/* Prev button */}
        <button
          ref={setPrevEl}
          className="cursor-pointer absolute left-2 top-1/2 -translate-y-1/2 z-20 p-2 bg-black/50 rounded-full hover:bg-black/70 transition"
          aria-label="Previous Slide"
        >
          <ChevronLeft className="w-8 h-8 text-accent" />
        </button>

        {/* Next button */}
        <button
          ref={setNextEl}
          className="cursor-pointer absolute right-2 top-1/2 -translate-y-1/2 z-20 p-2 bg-black/50 rounded-full hover:bg-black/70 transition"
          aria-label="Next Slide"
        >
          <ChevronRight className="w-8 h-8 text-accent" />
        </button>

        {prevEl && nextEl && (
          <Swiper
            modules={[Navigation, A11y]}
            spaceBetween={16}
            slidesPerView={6}
            navigation={{ prevEl, nextEl }}
            loop={true}
            breakpoints={{
              320: { slidesPerView: 1 },
              640: { slidesPerView: 3 },
              1024: { slidesPerView: 5 },
              1440: { slidesPerView: 6 },
            }}
            className="group"
          >
            {series.map((tv) => (
              <SwiperSlide key={tv.id} className="relative group">
                <ItemCard item={tv} type="serie" />
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </div>
    </section>
  );
}
