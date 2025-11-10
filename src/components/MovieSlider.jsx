/**
 * Node modules
 */
import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, A11y } from 'swiper/modules';

/**
 * Components
 */
import MovieCard from './MovieCard';

/**
 * Icons
 */ 
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

export default function MovieSlider({ title, movies }) {
  const [prevEl, setPrevEl] = useState(null);
  const [nextEl, setNextEl] = useState(null);

  if (!movies || movies.length === 0) return null;

  return (
    <section className="px-6 mt-12 first-of-type:mt-[65vh] ">
      <header className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-semibold">{title}</h2>
      </header>
      <div className="relative">
        <button
          ref={setPrevEl}
          className="absolute left-2 top-1/2 -translate-y-1/2 z-20 p-2 bg-black/50 rounded-full hover:bg-black/70 transition"
          aria-label="Previous Slide"
        >
          <ChevronLeft className="w-8 h-8 text-accent" />
        </button>
        <button
          ref={setNextEl}
          className="absolute right-2 top-1/2 -translate-y-1/2 z-20 p-2 bg-black/50 rounded-full hover:bg-black/70 transition"
          aria-label="Next Slide"
        >
          <ChevronRight className="w-8 h-8 text-accent" />
        </button>
        {prevEl && nextEl && (
          <Swiper
            style={{}}
            modules={[Navigation, A11y]}
            spaceBetween={16}
            slidesPerView={6}
            navigation={{ prevEl, nextEl }}
            breakpoints={{
              320: { slidesPerView: 2 },
              640: { slidesPerView: 3 },
              1024: { slidesPerView: 5 },
              1440: { slidesPerView: 6 },
            }}
            className="group"
          >
            {movies.map((movie) => (
              <SwiperSlide key={movie.id}>
                <MovieCard movie={movie} />
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </div>
    </section>

  
  );
}
