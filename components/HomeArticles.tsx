import React, { useState, useRef } from 'react';
import { HOME_ARTICLES } from '../constants';
import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface HomeArticleData {
  title: string;
  content: string;
  isList: boolean;
}

// Standardized smooth transition for consistent feel - Slower and more relaxed
const TRANSITION = { duration: 0.8, ease: [0.4, 0, 0.2, 1] as [number, number, number, number] };

const HomeArticles: React.FC = () => {
  const [selectedArticle, setSelectedArticle] = useState<HomeArticleData | null>(null);
  const lastActiveIndex = useRef<number | null>(null);

  return (
    <section id="articles" className="py-24 px-4 md:px-12 bg-transparent relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-5xl text-charcoal mb-4 tracking-wide uppercase font-bold">
            Cikkek az Euritmiáról
          </h2>
          <div className="w-24 h-1 bg-earth mx-auto rounded-full mb-8" />
        </div>

        <AnimatePresence mode="wait">
          {!selectedArticle ? (
            <motion.div
              key="articles-grid"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, transition: { duration: 0.3 } }}
              transition={TRANSITION}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {HOME_ARTICLES.map((article, index) => {
                const isLinkCard = article.isList;
                // Create a text-only preview from HTML content
                const previewText = article.content.replace(/<[^>]+>/g, '').slice(0, 150) + '...';

                return (
                  <motion.div
                    layoutId={`article-${index}`}
                    key={index}
                    ref={(el) => {
                      // Scroll back to this element if it was the last active one
                      if (el && lastActiveIndex.current === index) {
                        el.scrollIntoView({ behavior: 'smooth', block: 'center' });
                        lastActiveIndex.current = null;
                      }
                    }}
                    onClick={() => {
                      if (!isLinkCard) {
                        lastActiveIndex.current = index;
                        setSelectedArticle(article);
                      }
                    }}
                    className={`bg-white/40 backdrop-blur-sm border border-stone-100 rounded-xl p-8 transition-shadow duration-300 hover:shadow-soft group flex flex-col items-start h-full cursor-pointer relative ${isLinkCard ? 'cursor-default' : ''}`}
                    whileHover={!isLinkCard ? { y: -4 } : {}}
                  >
                    <div className="mb-4 w-full">
                      <motion.h3
                        layoutId={`title-${index}`}
                        className="font-serif text-2xl font-bold text-charcoal mb-4 group-hover:text-earthDark transition-colors"
                      >
                        {article.title}
                      </motion.h3>

                      {isLinkCard ? (
                        <div
                          className="w-full"
                          dangerouslySetInnerHTML={{ __html: article.content }}
                        />
                      ) : (
                        <motion.p
                          layoutId={`excerpt-${index}`}
                          className="text-charcoal/70 font-sans leading-relaxed text-sm md:text-base line-clamp-4"
                        >
                          {previewText}
                        </motion.p>
                      )}
                    </div>

                    {!isLinkCard && (
                      <div className="mt-auto pt-4">
                        <motion.button
                          layoutId={`btn-${index}`}
                          className="px-6 py-2 rounded-full bg-earth text-charcoal font-semibold text-sm tracking-wide hover:bg-earthDark hover:text-white hover:shadow-lg transition-all duration-300 transform hover:scale-105 active:scale-95"
                        >
                          Több
                        </motion.button>
                      </div>
                    )}
                  </motion.div>
                );
              })}
            </motion.div>
          ) : (
            <motion.div
              key="article-detail"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, transition: { duration: 0.3 } }}
              transition={TRANSITION}
              className="relative"
              ref={(el) => {
                if (el) {
                  const y = el.getBoundingClientRect().top + window.scrollY - 100;
                  window.scrollTo({ top: y, behavior: 'smooth' });
                }
              }}
            >
              <motion.div
                layoutId={`article-${HOME_ARTICLES.findIndex(a => a.title === selectedArticle.title)}`}
                transition={TRANSITION}
                className="bg-white/40 backdrop-blur-sm border border-stone-100 shadow-2xl rounded-xl p-6 md:p-8 relative overflow-hidden"
              >
                <button
                  onClick={() => setSelectedArticle(null)}
                  className="absolute top-4 right-4 p-2 rounded-full hover:bg-stone-100 transition-colors z-10"
                  aria-label="Close article"
                >
                  <X className="w-5 h-5 text-charcoal/60" />
                </button>

                <motion.h2
                  layoutId={`title-${HOME_ARTICLES.findIndex(a => a.title === selectedArticle.title)}`}
                  className="font-serif text-2xl md:text-3xl lg:text-4xl text-charcoal mb-6 pt-2"
                >
                  {selectedArticle.title}
                </motion.h2>

                <div className="text-charcoal/80 font-sans leading-relaxed space-y-4 text-base md:text-lg">
                  <div dangerouslySetInnerHTML={{ __html: selectedArticle.content }} />
                </div>

                <div className="mt-8 pt-6 border-t border-stone-200 flex justify-center">
                  <motion.button
                    layoutId={`btn-${HOME_ARTICLES.findIndex(a => a.title === selectedArticle.title)}`}
                    onClick={() => setSelectedArticle(null)}
                    className="px-8 py-3 rounded-full bg-earth text-charcoal font-semibold tracking-wide hover:bg-earthDark hover:text-white hover:shadow-lg transition-all duration-300 shadow-sm"
                  >
                    Bezárás
                  </motion.button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default HomeArticles;