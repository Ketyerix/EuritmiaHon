import React, { useState, useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { GALLERY_YEARS } from '../constants';
import { ArrowLeft, ChevronLeft, ChevronRight, X } from 'lucide-react';

// Standardized smooth transition - Slower and more relaxed
const TRANSITION = { duration: 0.8, ease: [0.4, 0, 0.2, 1] as [number, number, number, number] };

const Gallery: React.FC = () => {
  const [activeId, setActiveId] = useState<string | null>(null);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const lastActiveId = useRef<string | null>(null);

  const handleYearClick = (id: string) => {
    lastActiveId.current = id;
    setActiveId(id);
  };

  const handleClose = () => {
    setActiveId(null);
  };

  const activeData = GALLERY_YEARS.find(d => d.id === activeId);

  // Lightbox Logic
  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    document.body.style.overflow = 'hidden'; // Prevent scrolling
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
    document.body.style.overflow = 'unset'; // Restore scrolling
  };

  const nextImage = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (activeData && lightboxIndex !== null) {
      setLightboxIndex((prev) => (prev! + 1) % activeData.fullGallery.length);
    }
  };

  const prevImage = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (activeData && lightboxIndex !== null) {
      setLightboxIndex((prev) => (prev! - 1 + activeData.fullGallery.length) % activeData.fullGallery.length);
    }
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') nextImage();
      if (e.key === 'ArrowLeft') prevImage();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex, activeData]);

  return (
    <>
      <section 
          id="gallery" 
          className="py-24 px-4 md:px-12 bg-transparent relative z-10"
      >
        <div className="max-w-7xl mx-auto">
          {!activeId && (
            <div className="text-center mb-16">
              <h2 className="font-serif text-3xl md:text-5xl text-charcoal mb-4 tracking-wide uppercase font-bold">
                Galéria
              </h2>
              <div className="w-24 h-1 bg-earth mx-auto rounded-full mb-8" />
            </div>
          )}

          <AnimatePresence mode="wait">
            {!activeId ? (
              <motion.div
                key="list"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, transition: { duration: 0.3 } }}
                transition={TRANSITION}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              >
                {GALLERY_YEARS.map((item) => (
                  <motion.div
                    layoutId={`card-${item.id}`}
                    transition={TRANSITION}
                    key={item.id}
                    id={`gallery-card-${item.id}`}
                    ref={(el) => {
                      if (el && lastActiveId.current === item.id) {
                        // Scroll into view when the element remounts after closing
                        el.scrollIntoView({ behavior: 'smooth', block: 'center' });
                        lastActiveId.current = null; // Reset
                      }
                    }}
                    onClick={() => handleYearClick(item.id)}
                    className="relative rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group cursor-pointer aspect-[4/3]"
                  >
                    <img
                        src={item.coverImages[0]}
                        alt={item.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />
                    
                    {/* Text placed inside the image */}
                    <h3 className="absolute bottom-6 left-0 right-0 px-4 font-serif text-2xl font-bold text-white text-center drop-shadow-md">
                      {item.title}
                    </h3>
                  </motion.div>
                ))}
              </motion.div>
            ) : (
              <motion.div
                key="grid"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, transition: { duration: 0.3 } }}
                transition={TRANSITION}
                className="relative"
                ref={(el) => {
                  // Scroll to top of the detailed view when it mounts
                  if (el) {
                      const y = el.getBoundingClientRect().top + window.scrollY - 100;
                      window.scrollTo({ top: y, behavior: 'smooth' });
                  }
                }}
              >
                <div className="flex justify-between items-center mb-8 relative">
                  <button
                      onClick={handleClose}
                      className="flex items-center gap-2 text-charcoal hover:text-earth transition-colors group px-4 py-2 rounded-full bg-white/40 hover:bg-white/80 backdrop-blur-sm shadow-sm"
                  >
                      <ArrowLeft className="w-5 h-5" />
                      <span className="font-serif text-lg font-medium">Vissza a galériához</span>
                  </button>
                </div>
                
                <div className="text-center mb-8">
                  <h3 className="font-serif text-3xl text-charcoal mb-2 font-bold">{activeData?.title}</h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {activeData?.fullGallery.map((img, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.05, duration: 0.5, ease: 'easeOut' }}
                      className="aspect-[4/3] rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all bg-stone-100 cursor-zoom-in"
                      onClick={() => openLightbox(index)}
                    >
                      <img
                        src={img}
                        alt={`${activeData?.title} ${index + 1}`}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                    </motion.div>
                  ))}
                </div>
                
                <div className="mt-12 flex justify-center">
                  <button
                      onClick={handleClose}
                      className="px-8 py-3 rounded-full bg-earth text-charcoal font-semibold tracking-wide hover:bg-earthDark hover:text-white hover:shadow-lg transition-all duration-300 shadow-sm"
                  >
                      Bezárás
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* Lightbox Overlay - Rendered via Portal to break out of any transform contexts */}
      {createPortal(
        <AnimatePresence>
          {lightboxIndex !== null && activeData && (
            <motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[9999] bg-black/95 backdrop-blur-md flex items-center justify-center p-4"
              onClick={closeLightbox}
            >
              {/* Close Button */}
              <button 
                className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors p-2 z-[10000]" 
                onClick={closeLightbox}
              >
                <X size={36} />
              </button>

              {/* Left Arrow */}
              <button 
                className="absolute left-4 md:left-8 text-white/50 hover:text-white transition-colors p-4 z-[10000]"
                onClick={prevImage}
              >
                <ChevronLeft size={48} />
              </button>

              {/* Main Image */}
              <motion.img
                key={lightboxIndex}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
                src={activeData.fullGallery[lightboxIndex]}
                alt={`Gallery image ${lightboxIndex + 1}`}
                className="max-h-[85vh] max-w-[90vw] object-contain rounded shadow-2xl relative z-[9999]"
                onClick={(e) => e.stopPropagation()}
              />

              {/* Right Arrow */}
              <button 
                className="absolute right-4 md:right-8 text-white/50 hover:text-white transition-colors p-4 z-[10000]"
                onClick={nextImage}
              >
                <ChevronRight size={48} />
              </button>
              
              {/* Image Counter */}
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/50 font-sans text-sm tracking-widest z-[10000]">
                {lightboxIndex + 1} / {activeData.fullGallery.length}
              </div>
            </motion.div>
          )}
        </AnimatePresence>,
        document.body
      )}
    </>
  );
};

export default Gallery;