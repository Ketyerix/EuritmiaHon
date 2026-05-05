import React from 'react';
import { Mail, Phone } from 'lucide-react';

const POETS = [
  'Ady Endre',
  'Babits Mihály',
  'La Fontaine',
  'J. W. von Goethe',
  'Juhász Gyula',
  'C. F. Meyer',
  'P. B. Shelley',
  'Szabó T. Anna',
  'Weöres Sándor',
];

const COMPOSERS = [
  'J. S. Bach',
  'Bartók Béla',
  'J. Brahms',
  'C. Debussy',
  'P. Hindemith',
  'Kodály Zoltán',
  'O. Messiaen',
  'W. A. Mozart',
  'M. Ravel',
  'D. Sosztakovics',
];

const Programs: React.FC = () => {
  return (
    <section id="programok" className="min-h-screen pt-24 pb-20 px-4 md:px-12 bg-transparent relative z-10">
      <div className="max-w-7xl mx-auto">

        {/* Page Header */}
        <div className="text-center mb-14 animate-fade-in-up">
          <h2 className="font-serif text-3xl md:text-5xl text-charcoal mb-4 tracking-wide uppercase font-bold">
            Programok
          </h2>
          <div className="w-24 h-1 bg-earth mx-auto rounded-full" />
        </div>

        {/* ── TOP SECTION: Poster (left) + Info (right) ── */}
        <div className="max-w-4xl mx-auto mb-12 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">

            {/* LEFT: Poster */}
            <div className="flex justify-center lg:justify-end">
              <div className="rounded-2xl overflow-hidden max-w-sm w-full">
                <img
                  src="/programs/EURITMIA_VIZSGAELOADAS_2026_JAM.jpg"
                  alt="Euritmia Vizsgaelőadás 2026 plakát"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>

            {/* RIGHT: Event info */}
            <div className="flex flex-col gap-5">

              {/* Title block */}
              <div>
                <h3 className="font-serif text-4xl md:text-5xl font-bold text-charcoal leading-tight tracking-wide uppercase">
                  EURITMIA
                </h3>
                <h3 className="font-serif text-3xl md:text-4xl font-bold text-earth leading-tight tracking-wide uppercase mb-5">
                  VIZSGAELŐADÁS
                </h3>
              </div>

              {/* Ticket info — light card */}
              <div className="bg-white/60 backdrop-blur-sm border border-stone-200 rounded-2xl p-5">
                <p className="text-xs font-bold uppercase tracking-widest text-earth mb-3">Jegyek</p>
                <p className="text-sm text-charcoal/70 mb-4 leading-relaxed">
                  Jegyek igényelhetők a helyi Waldorf iskolában és az alábbi elérhetőségeken:
                </p>
                <div className="flex flex-col gap-3">
                  <a href="tel:+36706327494" className="flex items-center gap-2 text-charcoal font-bold hover:text-earth transition-colors text-sm">
                    <Phone className="w-4 h-4 text-earth flex-shrink-0" />
                    +36-70/632-7494
                  </a>
                  <a href="mailto:huneuritmia@gmail.com" className="flex items-center gap-2 text-charcoal font-bold hover:text-earth transition-colors text-sm">
                    <Mail className="w-4 h-4 text-earth flex-shrink-0" />
                    huneuritmia@gmail.com
                  </a>
                  <a href="tel:+3613122730" className="flex items-center gap-2 text-charcoal font-bold hover:text-earth transition-colors text-sm">
                    <Phone className="w-4 h-4 text-earth flex-shrink-0" />
                    +36-1/3122-730
                  </a>
                </div>
              </div>

              {/* Date */}
              <div className="inline-block bg-earth/10 border border-earth/30 rounded-xl px-5 py-3">
                <p className="font-serif text-2xl md:text-3xl font-bold text-charcoal">
                  2026. június 7. <span className="text-earth">18:00</span>
                </p>
              </div>

              {/* Location */}
              <div>
                <p className="font-serif text-lg font-semibold text-charcoal leading-snug">
                  Angyalföldi József Attila Művelődési Központ
                </p>
                <p className="font-sans text-charcoal/70 text-base">
                  1131 Budapest, József Attila tér 4.
                </p>
              </div>

            </div>

          </div>
        </div>

        {/* ── MIDDLE SECTION: Performers (full width, centered) ── */}
        <div className="mb-12 animate-fade-in-up" style={{ animationDelay: '0.25s' }}>
          <div className="bg-white/50 backdrop-blur-sm border border-stone-100 rounded-2xl p-6 md:p-10 shadow-soft max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">

              {/* Performers */}
              <div className="md:col-span-3">
                <p className="text-xs font-bold uppercase tracking-widest text-earth mb-3">Előadják</p>
                <p className="text-sm text-charcoal/70 font-medium mb-1">
                  a Magyar Euritmiaképzés végzős hallgatói:
                </p>
                <p className="font-serif italic text-charcoal/80 leading-relaxed text-base md:text-lg">
                  Beöthy Eszter, Gerliczki Anna, Gyuricza Áron, Kálmán Ágota, Kiss Boróka, Kolozsi-Koss Judit,
                  Lovászi Péter, Matuszka Lilla, Molnár Virág, Tóth Adrienn, Szabóné Velősy Virág Anna
                </p>
              </div>

              <div className="w-full md:col-span-3 h-px bg-charcoal/10" />

              {/* Teachers */}
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-earth mb-3">Felkészítő tanárok</p>
                <p className="font-serif italic text-charcoal/70 text-sm leading-relaxed">
                  Scheily Mária,<br />Szentmártony Yvonne,<br />Mihálcz Dóra
                </p>
              </div>

              {/* Musicians */}
              <div className="md:col-span-2">
                <p className="text-xs font-bold uppercase tracking-widest text-earth mb-3">Közreműködnek</p>
                <p className="font-serif text-charcoal/70 text-sm leading-relaxed">
                  Varga Máté zongorán, Sárréti Márton hegedűn,<br />
                  Csósza Anna Cecília brácsán és Tóth Barnabás csellón.<br />
                  A verseket <span className="font-semibold text-charcoal/80">Rácz Rita Cecília</span> mondja el.<br />
                  Világítás – <span className="font-semibold text-charcoal/80">Felkuti Károly</span>.
                </p>
              </div>

            </div>
          </div>
        </div>

        {/* ── BOTTOM SECTION: Program (poets + composers) ── */}
        <div className="animate-fade-in-up" style={{ animationDelay: '0.35s' }}>
          <div className="flex items-center justify-center gap-4 mb-10">
            <div className="h-[1px] bg-charcoal/10 flex-1 max-w-24" />
            <h3 className="text-center font-serif text-2xl text-charcoal uppercase tracking-widest font-bold whitespace-nowrap">
              Elhangzanak
            </h3>
            <div className="h-[1px] bg-charcoal/10 flex-1 max-w-24" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">

            {/* Poets column */}
            <div className="bg-white/50 backdrop-blur-sm border border-stone-100 rounded-2xl p-6 shadow-soft">
              <p className="text-xs font-bold uppercase tracking-widest text-earth mb-5 text-center">Versek</p>
              <ul className="space-y-2">
                {POETS.map((poet) => (
                  <li key={poet} className="font-serif text-charcoal/80 text-center text-base">
                    {poet}
                  </li>
                ))}
                <li className="font-serif text-charcoal/50 text-center text-sm italic mt-2">versei, valamint</li>
              </ul>
            </div>

            {/* Composers column */}
            <div className="bg-white/50 backdrop-blur-sm border border-stone-100 rounded-2xl p-6 shadow-soft">
              <p className="text-xs font-bold uppercase tracking-widest text-earth mb-5 text-center">Zene</p>
              <ul className="space-y-2">
                {COMPOSERS.map((composer) => (
                  <li key={composer} className="font-serif text-charcoal/80 text-center text-base">
                    {composer}
                  </li>
                ))}
                <li className="font-serif text-charcoal/50 text-center text-sm italic mt-2">zenei kompozíciói</li>
              </ul>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default Programs;
