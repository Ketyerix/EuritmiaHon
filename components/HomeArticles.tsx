import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { HOME_ARTICLES, EXTERNAL_LINKS } from '../constants';
import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface HomeArticleData {
  title: string;
  content: string;
  isList: boolean;
}

// Standardized smooth transition for consistent feel - Slower and more relaxed
const TRANSITION = { duration: 0.5, ease: [0.4, 0, 0.2, 1] as [number, number, number, number] };

const HomeArticles: React.FC = () => {
  const [selectedArticle, setSelectedArticle] = useState<HomeArticleData | null>(null);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (selectedArticle) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedArticle]);

  return (
    <section id="articles" className="py-24 px-4 md:px-12 bg-transparent relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-5xl text-charcoal mb-4 tracking-wide uppercase font-bold">
            Cikkek az Euritmiáról
          </h2>
          <div className="w-24 h-1 bg-earth mx-auto rounded-full mb-8" />
        </div>

        {/* Grid - Always Visible */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {HOME_ARTICLES.map((article, index) => {
            const isLinkCard = article.isList;
            // Create a text-only preview from HTML content
            const previewText = article.content.replace(/<[^>]+>/g, '').slice(0, 150) + '...';

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                onClick={() => {
                  if (!isLinkCard) {
                    setSelectedArticle(article);
                  }
                }}
                className={`bg-white/40 backdrop-blur-sm border border-stone-100 rounded-xl p-8 transition-shadow duration-300 hover:shadow-soft group flex flex-col items-start h-full cursor-pointer relative ${isLinkCard ? 'cursor-default' : ''}`}
                whileHover={!isLinkCard ? { y: -4 } : {}}
              >
                <div className="mb-4 w-full">
                  <h3 className="font-serif text-2xl font-bold text-charcoal mb-4 group-hover:text-earthDark transition-colors">
                    {article.title}
                  </h3>

                  {isLinkCard ? (
                    <div
                      className="w-full"
                      dangerouslySetInnerHTML={{ __html: article.content }}
                    />
                  ) : (
                    <p className="text-charcoal/70 font-sans leading-relaxed text-sm md:text-base line-clamp-4">
                      {previewText}
                    </p>
                  )}
                </div>

                {!isLinkCard && (
                  <div className="mt-auto pt-4">
                    <button className="px-6 py-2 rounded-full bg-earth text-charcoal font-semibold text-sm tracking-wide hover:bg-earthDark hover:text-white hover:shadow-lg transition-all duration-300 transform group-hover:scale-105 active:scale-95">
                      Több
                    </button>
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Links Section */}
        <div className="mt-16 max-w-4xl mx-auto">
          <div className="bg-white/40 backdrop-blur-sm border border-stone-100 rounded-xl p-8 md:p-12 shadow-soft">
            <h3 className="font-serif text-2xl font-bold text-charcoal mb-8 text-center uppercase tracking-widest">
              Kapcsolódó Linkek
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
              {EXTERNAL_LINKS.map((link, idx) => (
                <a
                  key={idx}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-start gap-3 transition-colors hover:bg-white/40 p-2 rounded-lg -mx-2"
                >
                  <span className="text-earth mt-1">↗</span>
                  <span className="font-serif text-lg text-charcoal/80 group-hover:text-earth transition-colors border-b border-transparent group-hover:border-earth/30">
                    {link.title}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Full Screen Modal Portal */}
        {createPortal(
          <AnimatePresence>
            {selectedArticle && (
              <div className="fixed inset-0 z-[48] flex items-center justify-center p-4 pt-24 md:p-8 md:pt-28">
                {/* Backdrop */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onClick={() => setSelectedArticle(null)}
                  className="absolute inset-0 bg-stone-900/40 backdrop-blur-sm"
                />

                {/* Modal Card */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.95, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95, y: 20 }}
                  transition={TRANSITION}
                  className="w-full max-w-4xl max-h-full bg-white/90 backdrop-blur-xl border border-stone-200 shadow-2xl rounded-2xl overflow-hidden flex flex-col relative z-10"
                >
                  {/* Close Button */}
                  <button
                    onClick={() => setSelectedArticle(null)}
                    className="absolute top-4 right-4 p-2 rounded-full hover:bg-black/5 transition-colors z-20"
                    aria-label="Close article"
                  >
                    <X className="w-6 h-6 text-charcoal/60" />
                  </button>

                  {/* Scrollable Content */}
                  <div className="overflow-y-auto p-6 md:p-12 custom-scrollbar">
                    <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-charcoal mb-8 pr-10">
                      {selectedArticle.title}
                    </h2>

                    <div className="text-charcoal/80 font-sans leading-relaxed space-y-4 text-base md:text-lg">
                      <div dangerouslySetInnerHTML={{ __html: selectedArticle.content }} />
                    </div>

                    <div className="mt-10 pt-8 border-t border-charcoal/10 flex justify-center">
                      <button
                        onClick={() => setSelectedArticle(null)}
                        className="px-10 py-3 rounded-full bg-earth text-charcoal font-semibold tracking-wide hover:bg-earthDark hover:text-white hover:shadow-lg transition-all duration-300 shadow-sm"
                      >
                        Bezárás
                      </button>
                    </div>
                  </div>
                </motion.div>
              </div>
            )}
          </AnimatePresence>,
          document.body
        )}
      </div>
    </section>
  );
};

export default HomeArticles;