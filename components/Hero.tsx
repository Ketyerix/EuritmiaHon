import React, { useState, useEffect } from 'react';
import { Play } from 'lucide-react';

const CAROUSEL_ITEMS = [
  {
    type: 'video',
    src: 'https://img.youtube.com/vi/lnyp7EVfUGg/maxresdefault.jpg',
    link: 'https://www.youtube.com/watch?v=lnyp7EVfUGg'
  },
  { type: 'image', src: 'https://picsum.photos/800/500?random=101' },
  { type: 'image', src: 'https://picsum.photos/800/500?random=102' },
  { type: 'image', src: 'https://picsum.photos/800/500?random=103' },
  { type: 'image', src: 'https://picsum.photos/800/500?random=104' },
];

const Hero: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0); // Start with the video (index 0)
  const [isHovering, setIsHovering] = useState(false);

  // Touch state for swipe detection
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  // Helper functions for navigation
  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % CAROUSEL_ITEMS.length);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + CAROUSEL_ITEMS.length) % CAROUSEL_ITEMS.length);
  };

  // Auto rotate logic
  useEffect(() => {
    if (isHovering) return;
    const interval = setInterval(nextSlide, 4000);
    return () => clearInterval(interval);
  }, [isHovering]);

  // Touch handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
    setIsHovering(true); // Pause auto-rotation during touch interaction
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const minSwipeDistance = 50;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      // User requested: Left swipe behaves like clicking the left image (Previous Slide)
      prevSlide();
    } else if (isRightSwipe) {
      // User requested: Right swipe behaves like clicking the right image (Next Slide)
      nextSlide();
    }

    // Reset and resume auto-rotation
    setTouchEnd(null);
    setTouchStart(null);
    setIsHovering(false);
  };

  const getStyle = (index: number) => {
    const diff = (index - activeIndex + CAROUSEL_ITEMS.length) % CAROUSEL_ITEMS.length;

    // Center Item
    if (diff === 0) {
      return {
        transform: 'translateX(0) scale(1) rotate(0deg)',
        zIndex: 20,
        opacity: 1,
        filter: 'brightness(1)'
      };
    }
    // Immediate Left (Previous)
    if (diff === CAROUSEL_ITEMS.length - 1) {
      return {
        transform: 'translateX(-50%) scale(0.85) rotate(-6deg)',
        zIndex: 10,
        opacity: 0.9,
        filter: 'brightness(0.95)'
      };
    }
    // Immediate Right (Next)
    if (diff === 1) {
      return {
        transform: 'translateX(50%) scale(0.85) rotate(6deg)',
        zIndex: 10,
        opacity: 0.9,
        filter: 'brightness(0.95)'
      };
    }
    // Far Left/Right (Hidden but keeps flow)
    return {
      transform: 'scale(0.5) opacity(0)',
      zIndex: 0,
      opacity: 0,
    };
  };

  return (
    <section id="hero" className="relative pt-32 pb-16 overflow-hidden min-h-screen flex flex-col items-center justify-center">
      {/* Headings */}
      <div className="text-center mb-10 px-4 animate-fade-in-up z-10">
        <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl text-charcoal font-bold leading-tight tracking-tight mb-4">
          MAGYAR EURITMIA –
        </h1>
        <h2 className="font-serif text-3xl md:text-5xl lg:text-6xl text-charcoal/90 italic">
          MOZGÁSMŰVÉSZETI TÁRSASÁG
        </h2>
      </div>

      {/* Playful Carousel Container - Reduced Size */}
      <div
        className="relative w-full max-w-4xl h-[250px] md:h-[380px] flex items-center justify-center mb-8 touch-pan-y"
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {CAROUSEL_ITEMS.map((item, index) => {
          const isActive = index === activeIndex;
          return (
            <div
              key={index}
              className="absolute w-[240px] md:w-[480px] h-[170px] md:h-[320px] transition-all duration-700 ease-in-out shadow-2xl overflow-hidden cursor-pointer rounded-[1.5rem] group select-none"
              style={getStyle(index)}
              onClick={() => setActiveIndex(index)}
            >
              <img
                src={item.src}
                alt={`Slide ${index}`}
                className="w-full h-full object-cover pointer-events-none"
              />

              {/* Subtle Overlay */}
              <div className="absolute inset-0 bg-black/5 pointer-events-none" />

              {/* Video Play Button Overlay - Only visible when active */}
              {item.type === 'video' && (
                <div className={`absolute inset-0 flex items-center justify-center transition-opacity duration-500 ${isActive ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-16 h-16 bg-earth rounded-full flex items-center justify-center border border-white/20 hover:scale-110 hover:bg-earthDark transition-all duration-300 shadow-lg pointer-events-auto"
                    onClick={(e) => e.stopPropagation()} // Stop propagation so clicking button doesn't trigger slide click logic
                  >
                    <Play className="w-6 h-6 text-white fill-white ml-1" />
                  </a>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Pagination dots */}
      <div className="flex space-x-2 mb-12 z-10">
        {CAROUSEL_ITEMS.map((_, i) => (
          <button
            key={i}
            onClick={() => setActiveIndex(i)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${activeIndex === i ? 'bg-earth w-8' : 'bg-charcoal/20 hover:bg-charcoal/40'}`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>

      {/* Quote */}
      <blockquote className="max-w-xl mx-auto text-center px-6 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
        <p className="font-serif italic text-base md:text-lg text-charcoal/70 leading-relaxed">
          Az euritmia az egész test mozgásával, a tér és idő világában teszi láthatóvá a hangzó beszédet vagy a zenét. Ha az ember az egész testével beszél és énekel, a szó, a zene újra tetté, teremtő erővé válik.
        </p>
      </blockquote>
    </section>
  );
};

export default Hero;