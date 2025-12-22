import React from 'react';

const TEACHERS = [
  { name: 'Scheily Mária', degree: 'végzett: Bécs, Dornach' },
  { name: 'Szentmártony Yvonne', degree: 'végzett: Dornach' },
  { name: 'Mihálcz Dóra', degree: 'végzett: Budapest' },
  { name: 'Cserháti Katalin', degree: 'végzett: Budapest' },
  { name: 'Balogh Orsolya', degree: 'végzett: Budapest' },
  { name: 'Vidákovich Emese', degree: 'végzett: Budapest' },
];

const Education: React.FC = () => {
  return (
    <section id="kepzesek" className="min-h-screen pt-24 pb-16 px-4 md:px-12 bg-transparent relative z-10">
      <div className="max-w-7xl mx-auto">
        
        {/* Page Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="font-serif text-3xl md:text-5xl text-charcoal mb-4 tracking-wide uppercase font-bold">
            Képzések és Csoportok
          </h2>
          <div className="w-24 h-1 bg-earth mx-auto rounded-full" />
        </div>

        {/* Section 1: Teacher Training (Warm Copper Theme) */}
        <div className="mb-16 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
          <div className="bg-gradient-to-br from-earthDark to-earth rounded-[2rem] p-8 md:p-12 shadow-2xl relative overflow-hidden text-white">
             {/* Decorative Background Elements */}
             <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />
             <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/10 rounded-full blur-[60px] translate-y-1/3 -translate-x-1/3 pointer-events-none" />
            
            <div className="relative z-10 flex flex-col items-center text-center max-w-4xl mx-auto">
              <div className="inline-block px-4 py-1 rounded-full border border-white/30 text-xs font-sans tracking-widest uppercase mb-6 text-sand bg-black/10">
                 Induló Képzés
               </div>

              <h3 className="font-serif text-2xl md:text-4xl lg:text-5xl font-bold leading-tight mb-8 drop-shadow-sm">
                A MAGYAR EURITMIA TÁRSASÁG <br/>
                <span className="text-sand">
                  ÚJ MŰVÉSZTANÁRI KÉPZÉST
                </span> INDÍT!
              </h3>
              
              <div className="flex flex-col md:flex-row gap-6 md:gap-12 text-lg text-white/90 mb-10 items-center justify-center">
                <div className="flex flex-col items-center">
                   <span className="text-sand text-sm font-bold uppercase tracking-wider mb-1">Kezdés</span>
                   <span className="font-serif text-2xl">2024. ősz</span>
                </div>
                <div className="hidden md:block w-px h-12 bg-white/20"></div>
                <div className="flex flex-col items-center">
                   <span className="text-sand text-sm font-bold uppercase tracking-wider mb-1">Időpontok</span>
                   <span className="font-serif text-2xl">Vasárnapi napokon</span>
                </div>
              </div>

              <p className="italic text-white/80 mb-8 text-lg">Minden érdeklődő jelentkezését szeretettel várjuk!</p>

              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 w-full max-w-lg hover:bg-white/20 transition-colors">
                <p className="mb-2 text-xs text-white/60 uppercase tracking-widest">Jelentkezés</p>
                <p className="text-sm md:text-base text-white/90 mb-2">fényképes önéletrajzzal és motivációs levéllel</p>
                <a href="mailto:huneuritmia@gmail.com" className="text-sand font-bold text-xl md:text-2xl hover:text-white transition-colors">
                  huneuritmia@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Section 2: Youth Group / Silmarillion (Bright & Compact Layout) */}
        <div className="mb-24 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          <div className="bg-white/80 backdrop-blur-md border border-stone-200 rounded-[2rem] p-6 md:p-8 shadow-xl relative overflow-hidden">
            
            {/* Top Content: Title & Desc */}
            <div className="mb-8">
                <div className="flex flex-col md:flex-row justify-between items-start gap-4">
                    <div>
                        <p className="font-serif text-base text-earth mb-1 italic">J.R.R. Tolkien</p>
                        <h3 className="font-serif text-3xl md:text-4xl font-bold text-charcoal uppercase tracking-wide leading-none">Szilmarilok</h3>
                        <p className="text-charcoal/40 text-xs mt-1 uppercase tracking-widest">(részletek)</p>
                    </div>
                     <div className="hidden md:flex items-center gap-2 bg-earth/10 px-3 py-1 rounded-full self-start">
                       <span className="text-earth font-bold text-xs uppercase">Korhatár: 14+</span>
                    </div>
                </div>

                <div className="mt-6 space-y-3 font-sans text-charcoal/80 leading-relaxed text-sm md:text-base max-w-4xl">
                    <p className="text-lg text-charcoal font-medium">
                        Novemberben megalakult ifjúsági euritmia csoportunk, melynek célja egy előadás létrehozása.
                    </p>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2 list-disc list-outside pl-5 marker:text-earth text-sm">
                        <li>Várjuk a zene iránt elkötelezett diákok jelentkezését (hangszeresek, zeneszerzők).</li>
                        <li>Szívesen fogadnánk színészet iránt érdeklődő diákokat is.</li>
                        <li>Keresünk kreatív jelmeztervezőket és kivitelezőket.</li>
                        <li>Természetesen továbbra is várjuk az euritmiázni vágyókat!</li>
                    </ul>
                </div>
            </div>

            {/* Bottom Section: Dates & Contact side-by-side on MD+ */}
            <div className="pt-6 border-t border-charcoal/10 flex flex-col md:flex-row gap-6 md:gap-8 items-start">
                
                {/* Left: Próba Dates */}
                <div className="flex-1 w-full">
                     <div className="flex items-center gap-2 mb-3 md:hidden">
                        <div className="bg-earth text-white px-2 py-0.5 rounded text-[10px] font-bold uppercase">Korhatár</div>
                        <span className="text-charcoal font-bold text-sm">14 éves kortól</span>
                     </div>
                     <p className="text-[10px] text-charcoal/50 uppercase tracking-widest mb-2 font-bold">Próba időpontok (Sashalmi Waldorf)</p>
                     <div className="font-mono text-xs text-charcoal/90 bg-white/60 border border-stone-100 p-3 rounded-lg leading-loose break-words shadow-sm">
                        Feb.24.,25. • Már.23.,24. • Ápr.27.,28. • Máj.25.,26. <span className="text-charcoal/30 mx-1">|</span>
                        Jún.15.,16. • Júl.27.,28. • Aug.24.,25.
                     </div>
                </div>

                {/* Right: Contact & QR - Compact Horizontal Layout */}
                <div className="w-full md:w-auto md:max-w-md flex flex-row items-center gap-4 bg-white/60 p-4 rounded-xl border border-stone-100 shadow-sm">
                     
                     {/* Text */}
                     <div className="flex-1 min-w-0">
                         <p className="text-[10px] text-charcoal/50 uppercase tracking-widest mb-1 font-bold">Jelentkezés / Információ</p>
                         <a href="mailto:vidakovichemese@gmail.com" className="block font-bold text-charcoal text-sm hover:text-earth transition-colors truncate mb-1">
                            vidakovichemese@gmail.com
                         </a>
                         <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                            <p className="text-earth font-mono text-sm font-bold">06 30 969 5673</p>
                            <span className="text-[10px] text-charcoal/30 uppercase tracking-widest hidden sm:block">Szkenneld be →</span>
                         </div>
                     </div>

                     {/* QR Code - Smaller, fixed size */}
                     <div className="w-16 h-16 bg-white rounded-lg shadow-inner border border-stone-200 flex-shrink-0 flex items-center justify-center relative overflow-hidden group hover:scale-105 transition-transform">
                        <div className="absolute inset-0 grid grid-cols-5 grid-rows-5 gap-0.5 p-1 opacity-80">
                             {[...Array(25)].map((_,i) => (
                                 <div key={i} className={`bg-charcoal ${Math.random() > 0.4 ? 'opacity-90' : 'opacity-20'}`}></div>
                             ))}
                        </div>
                        <div className="absolute inset-0 flex items-center justify-center">
                             <div className="bg-white p-0.5 rounded-sm shadow-sm">
                                 <div className="w-2 h-2 bg-earth rounded-sm"></div>
                             </div>
                        </div>
                     </div>
                </div>
            </div>
          </div>
        </div>

        {/* Section 3: Teachers (Grid) */}
        <div className="animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
          <div className="flex items-center justify-center gap-4 mb-12">
                <div className="h-[1px] bg-charcoal/10 w-12 md:w-24" />
                <h3 className="text-center font-serif text-2xl text-charcoal uppercase tracking-widest font-bold">
                    Tanáraink
                </h3>
                <div className="h-[1px] bg-charcoal/10 w-12 md:w-24" />
            </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {TEACHERS.map((teacher, idx) => (
              <div 
                key={idx}
                className="bg-white/40 backdrop-blur-sm border border-stone-100 rounded-xl p-6 text-center transition-all duration-300 hover:shadow-soft hover:-translate-y-1 group"
              >
                <div className="w-16 h-16 bg-earth/10 rounded-full mx-auto mb-4 flex items-center justify-center text-earth group-hover:bg-earth group-hover:text-white transition-colors duration-300">
                  <span className="font-serif text-2xl font-bold">{teacher.name.charAt(0)}</span>
                </div>
                <h4 className="font-serif text-lg font-bold text-charcoal mb-1 group-hover:text-earthDark transition-colors">
                  {teacher.name}
                </h4>
                <p className="font-sans text-charcoal/60 text-xs uppercase tracking-wide">
                  {teacher.degree}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Education;