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

        {/* Section 1: Teacher Training — two-column layout (poster left, info right) */}
        <div className="mb-16 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>

          {/* Badge */}
          <div className="flex justify-center mb-8">
            <div className="inline-block px-4 py-1 rounded-full border border-earth/40 text-xs font-sans tracking-widest uppercase text-earth bg-earth/5">
              Induló Képzés
            </div>
          </div>

          <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">

            {/* LEFT: Poster */}
            <div className="flex justify-center lg:justify-end">
              <div className="rounded-2xl overflow-hidden max-w-sm w-full shadow-xl">
                <img
                  src="/programs/1000006386.jpg"
                  alt="Euritmia Művésztanári Képzés 2026 plakát"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>

            {/* RIGHT: Info */}
            <div className="flex flex-col gap-5">

              {/* Title */}
              <div>
                <h3 className="font-serif text-3xl md:text-4xl font-bold text-charcoal leading-tight tracking-wide uppercase">
                  EURITMIA
                </h3>
                <h3 className="font-serif text-2xl md:text-3xl font-bold text-earth leading-tight tracking-wide uppercase mb-2">
                  MŰVÉSZTANÁRI KÉPZÉS
                </h3>
                <p className="font-sans text-charcoal/60 text-sm uppercase tracking-widest">
                  A Magyar Euritmia-Mozgásművészeti Társaság
                </p>
              </div>

              {/* Start date */}
              <div className="inline-block bg-earth/10 border border-earth/30 rounded-xl px-5 py-3">
                <p className="text-xs font-bold uppercase tracking-widest text-earth mb-1">Kezdés</p>
                <p className="font-serif text-2xl font-bold text-charcoal">2026. <span className="text-earth">ősz</span></p>
              </div>

              {/* Admission info */}
              <div className="bg-white/60 backdrop-blur-sm border border-stone-200 rounded-2xl p-5">
                <p className="text-xs font-bold uppercase tracking-widest text-earth mb-3">Felvételi</p>
                <p className="text-sm text-charcoal/70 leading-relaxed">
                  A felvételi beszélgetésre és gyakorlati napra előre egyeztetett időpontban kerül majd sor.
                </p>
              </div>

            </div>
          </div>

          {/* Signup block — full width, centered below the two columns */}
          <div className="max-w-4xl mx-auto mt-8">
            <div className="bg-white/60 backdrop-blur-sm border border-stone-200 rounded-2xl p-6 text-center">
              <p className="text-xs font-bold uppercase tracking-widest text-earth mb-3">Jelentkezés</p>
              <p className="text-sm text-charcoal/70 mb-3 leading-relaxed">
                fényképes önéletrajzzal és motivációs levéllel
              </p>
              <a href="mailto:huneuritmia@gmail.com" className="font-bold text-earth text-xl hover:text-earthDark transition-colors block mb-3">
                huneuritmia@gmail.com
              </a>
              <p className="italic text-charcoal/50 text-sm">Minden érdeklődő jelentkezését várjuk!</p>
            </div>
          </div>

        </div>

        {/* Section 2: Teachers (Grid) */}
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