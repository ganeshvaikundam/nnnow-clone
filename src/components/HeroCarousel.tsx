import { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import type { HeroSlide } from '../types';

interface HeroCarouselProps { slides: HeroSlide[]; }

export default function HeroCarousel({ slides }: HeroCarouselProps) {
  const [idx, setIdx] = useState<number>(0);

  const prev = useCallback(() => setIdx((i) => (i - 1 + slides.length) % slides.length), [slides.length]);
  const next = useCallback(() => setIdx((i) => (i + 1) % slides.length), [slides.length]);

  useEffect(() => {
    const t = setInterval(next, 4800);
    return () => clearInterval(t);
  }, [next]);

  return (
    <div className="relative overflow-hidden select-none">
      {/* Track */}
      <div className="flex transition-transform duration-500 ease-in-out"
           style={{ transform: `translateX(-${idx * 100}%)` }}>
        {slides.map((s) => (
          <Link key={s.image} to={s.link} className="flex-shrink-0 w-full block">
            <img src={s.image} alt={s.alt} className="w-full block" />
          </Link>
        ))}
      </div>
      {/* Prev / Next */}
      <button onClick={prev} aria-label="Previous"
        className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/85 flex items-center justify-center shadow hover:bg-white transition z-10">
        <span className="nw-icon">&#xe902;</span>
      </button>
      <button onClick={next} aria-label="Next"
        className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/85 flex items-center justify-center shadow hover:bg-white transition z-10">
        <span className="nw-icon">&#xe903;</span>
      </button>
      {/* Dots */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, i) => (
          <button key={i} onClick={() => setIdx(i)} aria-label={`Slide ${i + 1}`}
            className={`h-2 rounded-full transition-all duration-300 ${i === idx ? 'w-5 bg-white' : 'w-2 bg-white/50'}`} />
        ))}
      </div>
    </div>
  );
}
