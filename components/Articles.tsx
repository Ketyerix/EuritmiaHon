import React, { useState, useRef } from 'react';
import { ARTICLES, SCHEDULE_ITEMS } from '../constants';
import { Article } from '../types';
import { X, Clock } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// Standardized smooth transition - Slower and more relaxed
const TRANSITION = { duration: 0.8, ease: [0.4, 0, 0.2, 1] as [number, number, number, number] };

const Articles: React.FC = () => {
  const [selectedArticleId, setSelectedArticleId] = useState<string | null>(null);
  const lastActiveIndex = useRef<number | null>(null);

  const selectedArticle = ARTICLES.find(a => a.id === selectedArticleId);

  return (
    <section id="programok" className="min-h-screen pt-24 pb-16 px-4 md:px-12 bg-transparent relative z-10">
      <div className="max-w-7xl mx-auto">
        
        {/* Page Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="font-serif text-3xl md:text-5xl text-charcoal mb-4 tracking-wide uppercase font-bold">
            Az Euritmia Ünnepe
          </h2>
          <div className="w-24 h-1 bg-earth mx-auto rounded-full mb-8" />
           <div className="max-w-3xl mx-auto">
             <p className="font-serif italic text-lg md:text-xl text-charcoal/80 leading-relaxed">
               "Az euritmia az egész test mozgásával, a tér és idő világában teszi láthatóvá a hangzó beszédet vagy a zenét. Ha az ember az egész testével beszél és énekel, a szó, a zene újra tetté, teremtő erővé válik."
             </p>
          </div>
        </div>

        {/* --- Main Event Section --- */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 mb-24 items-start">
          
          {/* Main Event Poster (Left / Top) - Dominant - UPDATED COLOR */}
          <div className="lg:col-span-3 bg-gradient-to-br from-earthDark to-earth text-white rounded-[2rem] p-8 md:p-12 shadow-2xl relative overflow-hidden group flex flex-col justify-between min-h-[500px] animate-fade-in-up">
             {/* Decorative Background Elements */}
             <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />
             <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/10 rounded-full blur-[60px] translate-y-1/3 -translate-x-1/3 pointer-events-none" />

             <div className="relative z-10">
               <div className="inline-block px-4 py-1 rounded-full border border-white/30 text-xs font-sans tracking-widest uppercase mb-6 text-sand bg-black/10">
                 Kiemelt Esemény
               </div>
               
               {/* Smaller Title as requested */}
               <h2 className="font-serif text-3xl md:text-5xl mb-2 tracking-wide font-bold leading-none drop-shadow-sm opacity-90">
                 AZ EURITMIA
               </h2>
               <h2 className="font-serif text-3xl md:text-5xl tracking-wide font-bold text-sand mb-8 drop-shadow-sm">
                 ÜNNEPE
               </h2>
               
               <div className="flex flex-col md:flex-row gap-8 text-white/90 font-sans text-sm tracking-wide mb-8 border-l-2 border-sand/50 pl-6">
                 <div>
                    <span className="block text-sand font-bold uppercase text-xs mb-1">Dátum</span>
                    Október 5.
                 </div>
                 <div>
                    <span className="block text-sand font-bold uppercase text-xs mb-1">Helyszín</span>
                    Göllner Mária Regionális<br/>Waldorf Gimnázium
                 </div>
               </div>

               <div className="space-y-4 text-white/90 font-serif leading-relaxed text-lg max-w-xl mb-8">
                 <p>
                   Egész napos művészeti találkozó, ahol a műhelymunkák során saját élményt szerezhetsz, este pedig az <span className="text-sand font-bold">Artemisz Euritmia Színpad</span> előadását tekintheted meg.
                 </p>
               </div>
             </div>

             {/* Pricing Grid */}
             <div className="relative z-10 pt-6 border-t border-white/20 grid grid-cols-2 gap-4 mb-8">
                <div>
                    <p className="text-xs text-white/60 uppercase tracking-widest mb-1">Egész napos jegy</p>
                    <p className="text-xl md:text-2xl font-serif text-white">12.000 Ft</p>
                    <p className="text-xs text-white/60">(Diák: 6.000 Ft)</p>
                </div>
                <div className="text-right">
                    <p className="text-xs text-white/60 uppercase tracking-widest mb-1">Esti előadás</p>
                    <p className="text-xl md:text-2xl font-serif text-white">5.000 Ft</p>
                    <p className="text-xs text-white/60">(Diák: 3.000 Ft)</p>
                </div>
             </div>

             {/* Buttons INSIDE the box */}
             <div className="relative z-10 flex flex-col sm:flex-row gap-4">
                 <button className="flex-1 py-4 rounded-xl bg-white text-earthDark font-bold shadow-lg hover:bg-sand transition-colors text-sm uppercase tracking-wide">
                   Jelentkezés
                 </button>
                 <button className="flex-1 py-4 rounded-xl bg-transparent border border-white/40 text-white font-bold hover:bg-white/10 transition-colors text-sm uppercase tracking-wide">
                   Csak esti előadás
                 </button>
             </div>
          </div>

          {/* Schedule List (Right / Bottom) */}
          <div className="lg:col-span-2 bg-white/60 backdrop-blur-md rounded-[2rem] p-6 md:p-8 shadow-lg border border-white/50 flex flex-col h-full animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            <h3 className="font-serif text-2xl text-charcoal font-bold mb-6 flex items-center gap-2">
                <Clock className="w-5 h-5 text-earth" />
                Részletes Program
            </h3>
            
            <div className="flex-1 space-y-0 font-sans text-charcoal/90">
              {SCHEDULE_ITEMS.map((item, index) => (
                <div key={index} className="group flex gap-4 py-3 border-b border-charcoal/5 last:border-0 hover:bg-white/50 transition-colors rounded-lg px-2">
                  <span className="font-bold text-earth text-xs md:text-sm whitespace-nowrap pt-1 w-20">{item.time}</span>
                  <span className="text-xs md:text-sm text-charcoal/80 leading-snug group-hover:text-charcoal transition-colors">{item.description}</span>
                </div>
              ))}
            </div>
            
             <div className="mt-8 pt-6 border-t border-charcoal/10 text-center">
                <p className="text-xs text-charcoal/50 italic">A programváltoztatás jogát fenntartjuk.</p>
             </div>
          </div>

        </div>

        {/* --- Workshops Grid (Smooth Expandable) --- */}
        <div className="animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <div className="flex items-center justify-center gap-4 mb-12">
                <div className="h-[1px] bg-charcoal/10 w-12 md:w-24" />
                <h3 className="text-center font-serif text-2xl text-charcoal uppercase tracking-widest font-bold">
                    Workshopok Témái
                </h3>
                <div className="h-[1px] bg-charcoal/10 w-12 md:w-24" />
            </div>
            
            <AnimatePresence mode="wait">
              {!selectedArticleId ? (
                <motion.div
                  key="workshops-grid"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, transition: { duration: 0.3 } }}
                  transition={TRANSITION}
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                  {ARTICLES.map((article, index) => (
                    <CardComponent 
                      key={article.id} 
                      article={article} 
                      onClick={() => {
                        lastActiveIndex.current = index;
                        setSelectedArticleId(article.id);
                      }} 
                      ref={(el) => { 
                        if (el && lastActiveIndex.current === index) {
                          el.scrollIntoView({ behavior: 'smooth', block: 'center' });
                          lastActiveIndex.current = null;
                        }
                      }}
                    />
                  ))}
                </motion.div>
              ) : (
                selectedArticle && (
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
                      layoutId={`article-card-${selectedArticleId}`}
                      transition={TRANSITION}
                      className="bg-white/40 backdrop-blur-sm border border-stone-100 shadow-2xl rounded-xl p-6 md:p-8 relative overflow-hidden"
                    >
                      <button 
                        onClick={() => setSelectedArticleId(null)}
                        className="absolute top-4 right-4 p-2 rounded-full hover:bg-stone-100 transition-colors z-10"
                        aria-label="Close article"
                      >
                        <X className="w-5 h-5 text-charcoal/60" />
                      </button>

                      <div className="mb-4">
                        <motion.h2 
                          layoutId={`article-title-${selectedArticleId}`}
                          className="font-serif text-2xl md:text-3xl lg:text-4xl text-charcoal mb-2 pt-2"
                        >
                          {selectedArticle.title}
                        </motion.h2>
                        {selectedArticle.subtitle && (
                          <motion.p 
                            layoutId={`article-subtitle-${selectedArticleId}`}
                            className="font-serif italic text-lg text-charcoal/70 mb-6"
                          >
                            {selectedArticle.subtitle}
                          </motion.p>
                        )}
                      </div>

                      <div className="text-charcoal/80 font-sans leading-relaxed space-y-4 text-base md:text-lg">
                        <p className="font-medium text-lg text-charcoal/90">
                          {selectedArticle.excerpt}
                        </p>
                        <p>{selectedArticle.content}</p>
                      </div>
                      
                      <div className="mt-8 pt-6 border-t border-stone-200 flex justify-center">
                        <button
                          onClick={() => setSelectedArticleId(null)}
                          className="px-8 py-3 rounded-full bg-earth text-charcoal font-semibold tracking-wide hover:bg-earthDark hover:text-white hover:shadow-lg transition-all duration-300 shadow-sm"
                        >
                          Bezárás
                        </button>
                      </div>
                    </motion.div>
                  </motion.div>
                )
              )}
            </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

// Helper component for Motion Card - converted to forwardRef
const CardComponent = React.forwardRef<HTMLDivElement, { article: Article; onClick: () => void }>((
  { article, onClick }, ref
) => {
  return (
    <motion.div 
      layoutId={`article-card-${article.id}`}
      transition={TRANSITION}
      onClick={onClick}
      ref={ref}
      className="bg-white/40 backdrop-blur-sm border border-stone-100 rounded-xl p-8 transition-shadow duration-300 hover:shadow-soft group flex flex-col items-start h-full cursor-pointer relative"
      whileHover={{ y: -4 }}
    >
      <div className="mb-4 w-full">
        <motion.h3 
          layoutId={`article-title-${article.id}`}
          className="font-serif text-xl md:text-2xl font-bold text-charcoal mb-2 group-hover:text-earthDark transition-colors"
        >
          {article.title}
        </motion.h3>
        {article.subtitle && (
          <motion.p 
            layoutId={`article-subtitle-${article.id}`}
            className="font-serif italic text-sm text-charcoal/60 mb-4"
          >
            {article.subtitle}
          </motion.p>
        )}
        
        <motion.p 
          layoutId={`article-content-${article.id}`}
          className="text-charcoal/70 font-sans leading-relaxed text-sm md:text-base line-clamp-4"
        >
          {article.excerpt}
        </motion.p>
      </div>

      <div className="mt-auto pt-4">
        <span className="px-6 py-2 rounded-full bg-earth text-charcoal font-semibold text-sm tracking-wide hover:bg-earthDark hover:text-white hover:shadow-lg transition-all duration-300 inline-block">
          Több
        </span>
      </div>
    </motion.div>
  );
});

CardComponent.displayName = 'CardComponent';

export default Articles;