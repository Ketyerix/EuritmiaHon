import React, { useState, useEffect } from 'react';
import { Play, ArrowRight } from 'lucide-react';
import { GALLERY_YEARS } from '../constants';

const Hero: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);

  const CAROUSEL_ITEMS = [
    {
      type: 'video',
      src: 'https://img.youtube.com/vi/lnyp7EVfUGg/maxresdefault.jpg',
      link: 'https://www.youtube.com/watch?v=lnyp7EVfUGg',
      alt: 'Euritmia videó'
    },
    {
      type: 'image',
      src: GALLERY_YEARS[0].coverImages[0],
      target: '#gallery',
      alt: 'Galéria'
    },
    {
      type: 'text',
      title: 'AZ EURITMIA\nÜNNEPE',
      subtitle: 'művészeti találkozó október 5.-én',
      target: '#programok',
      bgClass: 'bg-gradient-to-br from-earthDark to-earth text-white',
      alt: 'Programok'
    },
    {
      type: 'text',
      subtitle: 'A MAGYAR EURITMIA TÁRSASÁG',
      title: 'ÚJ MŰVÉSZTANÁRI\nKÉPZÉST INDÍT!',
      target: '#kepzesek',
      bgClass: 'bg-gradient-to-br from-charcoal to-stone-700 text-white',
      alt: 'Képzések'
    },
    {
      type: 'text',
      title: 'Támogassa társaságunkat\nadója 1%-val',
      target: '#supporters',
      bgClass: 'bg-[#F9F5F1] text-charcoal border-4 border-earth/20',
      alt: '1% Támogatás'
    },
  ];

  // Auto rotate logic
  useEffect(() => {
    if (isHovering) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % CAROUSEL_ITEMS.length);
    }, 5000); // Increased duration slightly for reading text
    return () => clearInterval(interval);
  }, [isHovering]);

  const handleSlideClick = (index: number, target?: string) => {
    if (index !== activeIndex) {
      setActiveIndex(index);
    } else if (target) {
      // If active and has target, navigate
      window.location.hash = target;
    }
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

      {/* Carousel Container */}
      <div
        className="relative w-full max-w-4xl h-[280px] md:h-[400px] flex items-center justify-center mb-12 px-4"
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        {CAROUSEL_ITEMS.map((item, index) => {
          const isActive = index === activeIndex;

          return (
            <div
              key={index}
              className={`absolute w-[260px] md:w-[520px] h-[180px] md:h-[340px] transition-all duration-700 ease-in-out shadow-2xl overflow-hidden rounded-[1.5rem] group flex flex-col items-center justify-center ${isActive ? 'cursor-pointer' : 'cursor-pointer'}`}
              style={getStyle(index)}
              onClick={() => handleSlideClick(index, item.target)}
            >
              {/* Content Render Logic */}
              {item.type === 'video' || item.type === 'image' ? (
                <>
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="w-full h-full object-cover"
                  />
                  {/* Subtle Overlay */}
                  <div className="absolute inset-0 bg-black/10 pointer-events-none" />
                </>
              ) : (
                <div className={`w-full h-full p-6 md:p-10 flex flex-col items-center justify-center text-center ${item.bgClass}`}>
                  {item.subtitle && (
                    <p className="font-sans text-xs md:text-sm tracking-widest uppercase mb-2 md:mb-4 opacity-90">
                      {item.subtitle}
                    </p>
                  )}
                  <h3 className="font-serif text-xl md:text-3xl font-bold leading-snug whitespace-pre-line">
                    {item.title}
                  </h3>

                  {/* Action Hint when active */}
                  {isActive && (
                    <div className="mt-4 md:mt-6 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full flex items-center gap-2 text-xs md:text-sm font-bold uppercase tracking-wide opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      Megnézem <ArrowRight className="w-3 h-3 md:w-4 md:h-4" />
                    </div>
                  )}
                </div>
              )}

              {/* Video Play Button Overlay */}
              {item.type === 'video' && (
                <div className={`absolute inset-0 flex items-center justify-center transition-opacity duration-500 ${isActive ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-16 h-16 bg-earth rounded-full flex items-center justify-center border border-white/20 hover:scale-110 hover:bg-earthDark transition-all duration-300 shadow-lg z-30"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <Play className="w-6 h-6 text-white fill-white ml-1" />
                  </a>
                </div>
              )}

              {/* Click Hint for Image type */}
              {item.type === 'image' && isActive && (
                <div className="absolute bottom-6 bg-black/40 backdrop-blur-md text-white px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                  Galéria megtekintése
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Pagination dots */}
      <div className="flex space-x-3 mb-12 z-10">
        {CAROUSEL_ITEMS.map((_, i) => (
          <button
            key={i}
            onClick={() => setActiveIndex(i)}
            className={`transition-all duration-300 rounded-full ${activeIndex === i ? 'bg-earth w-8 h-2' : 'bg-charcoal/20 w-2 h-2 hover:bg-charcoal/40'}`}
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