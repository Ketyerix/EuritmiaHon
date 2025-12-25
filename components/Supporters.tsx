import React from 'react';
import { REPORT_YEARS } from '../constants';
import { FileDown, Heart, Info, CreditCard, Mail } from 'lucide-react';

const Supporters: React.FC = () => {
  return (
    <section id="supporters" className="min-h-screen pt-24 pb-16 px-4 md:px-12 bg-transparent relative z-10">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="font-serif text-3xl md:text-5xl text-charcoal mb-4 tracking-wide uppercase font-bold">
            Rendelkezés az 1%-ról
          </h2>
          <div className="w-24 h-1 bg-earth mx-auto rounded-full mb-6" />
          <p className="font-serif text-xl md:text-2xl text-charcoal/80 italic max-w-2xl mx-auto">
            "Köszönjük, ha adója 1%-val Társaságunkat támogatja!"
          </p>
        </div>

        {/* Top Section: Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 mb-20">

          {/* Main Card: Tax Number (Warm Copper) - UPDATED COLOR */}
          <div className="lg:col-span-3 bg-gradient-to-br from-earthDark to-earth text-white rounded-[2rem] p-8 md:p-12 shadow-2xl relative overflow-hidden group flex flex-col justify-center animate-fade-in-up">
            {/* Background Decoration */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-white/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />

            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <Heart className="text-sand w-6 h-6 fill-sand" />
                <span className="text-sand font-bold uppercase tracking-widest text-xs">Rendelkező Nyilatkozat</span>
              </div>

              <h3 className="font-serif text-2xl md:text-3xl font-bold mb-8 leading-snug drop-shadow-sm">
                A BEFIZETETT ADÓ EGY SZÁZALÉKÁRÓL
              </h3>

              <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 md:p-8 border border-white/20 mb-8">
                <p className="text-xs text-white/60 uppercase tracking-widest mb-2">A kedvezményezett adószáma</p>
                <p className="font-mono text-3xl md:text-5xl font-bold text-white tracking-wider">
                  18088548-1-42
                </p>
              </div>

              <div>
                <p className="text-xs text-white/60 uppercase tracking-widest mb-1">A kedvezményezett neve</p>
                <p className="font-serif text-xl text-white/90">
                  Magyar Euritmia – Mozgásművészeti Társaság
                </p>
              </div>
            </div>
          </div>

          {/* Secondary Card: Bank Info & Instructions (Light) */}
          <div className="lg:col-span-2 flex flex-col gap-6 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>

            {/* Bank Info */}
            <div className="bg-white/60 backdrop-blur-md rounded-[2rem] p-8 shadow-lg border border-white/50 flex-1">
              <div className="flex items-center gap-3 mb-4">
                <CreditCard className="text-charcoal/60 w-5 h-5" />
                <h4 className="font-serif text-xl font-bold text-charcoal">Bankszámlaszám</h4>
              </div>
              <div className="space-y-1">
                <p className="text-sm text-charcoal/60 uppercase font-bold">CIB Bank</p>
                <p className="font-mono text-lg md:text-xl text-charcoal font-medium break-all">
                  10700079-27451007-51100005
                </p>
              </div>
            </div>

            {/* Important Info - BRIGHT BOX (White with accent border) */}
            <div className="bg-white backdrop-blur-md rounded-[2rem] p-8 shadow-lg flex-1 relative overflow-hidden border-2 border-earth/20">
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-earth/10 rounded-full blur-[40px]" />
              <h4 className="font-serif text-xl font-bold text-earth mb-4 flex items-center gap-2">
                <Info className="w-5 h-5 text-earth" />
                Fontos Tudnivalók
              </h4>
              <ul className="space-y-3 text-sm text-charcoal/80 font-sans">
                <li>• Nyilatkozatot csak akkor töltsön ki, ha civil szervezet javára kíván rendelkezni.</li>
                <li>• A borítékon tüntesse fel: <span className="text-earthDark font-bold">NÉV, LAKCÍM, ADÓAZONOSÍTÓ JEL</span>.</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Reports Section */}
        <div className="mb-24 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          <div className="flex items-center justify-center gap-4 mb-10">
            <div className="h-[1px] bg-charcoal/10 w-12 md:w-24" />
            <h3 className="text-center font-serif text-2xl text-charcoal uppercase tracking-widest font-bold">
              Közhasznúsági Jelentések
            </h3>
            <div className="h-[1px] bg-charcoal/10 w-12 md:w-24" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {REPORT_YEARS.map((report, idx) => (
              <a
                key={idx}
                href={report.href}
                download
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between p-4 bg-white/40 backdrop-blur-sm border border-stone-200 rounded-xl hover:bg-white hover:shadow-md transition-all duration-300"
              >
                <span className="font-serif text-charcoal font-medium group-hover:text-earth transition-colors">
                  {report.label}
                </span>
                <div className="w-8 h-8 rounded-full bg-charcoal/5 flex items-center justify-center group-hover:bg-earth group-hover:text-white transition-all">
                  <FileDown className="w-4 h-4" />
                </div>
              </a>
            ))}
          </div>
          <p className="text-center text-xs text-charcoal/50 mt-6 italic">
            A jelentések PDF formátumban letölthetők. Ha valamelyik évhez nem talál linket, kérjük, lépjen kapcsolatba velünk!
          </p>
          <div className="text-center mt-4">
            <a
              href="https://drive.google.com/file/d/1fu0N6c4SsnXgNHwb4w3lyI0D-wBidJMu/view"
              target="_blank"
              rel="noopener noreferrer"
              className="text-earth hover:underline text-sm font-medium"
            >
              2021-es 1% felhasználási beszámoló megtekintése
            </a>
          </div>
        </div>

        {/* Narrative Section (Activity Report) */}
        <div className="bg-white/40 backdrop-blur-sm rounded-[2rem] p-8 md:p-16 shadow-soft border border-stone-100 mb-20 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
          <div className="text-center mb-12">
            <h3 className="font-serif text-2xl md:text-3xl font-bold text-charcoal mb-2">
              2018 Nonprofit Beszámoló
            </h3>
            <p className="text-earth font-bold uppercase tracking-widest text-xs">
              A közhasznú tevékenységeinkről
            </p>
            <p className="text-charcoal/60 text-sm mt-2">Képviselő: Mihálcz Dóra</p>
          </div>

          <div className="space-y-12 max-w-4xl mx-auto">

            {/* Section 1 */}
            <div>
              <h4 className="font-serif text-xl font-bold text-charcoal mb-4 pb-2 border-b border-charcoal/10 inline-block">
                Egészségmegőrzés, gyógyító, egészségügyi rehabilitáció tevékenység
              </h4>
              <p className="text-charcoal/80 leading-relaxed">
                A 2018-as évben is tovább folytatódtak a felnőtt euritmia csoportok rendszeres foglalkozásai. Mindhárom csoportunkban kimondottan a saját élményű átélés, egészségmegőrzés volt a cél. A végzett euritmisták számára terápiás euritmia-továbbképzéseket szerveztünk. Társaságunk tagjai különböző intézményekben rendszeres egészségmegőrző euritmia foglalkozásokat tartottak.
              </p>
            </div>

            {/* Section 2 */}
            <div>
              <h4 className="font-serif text-xl font-bold text-charcoal mb-4 pb-2 border-b border-charcoal/10 inline-block">
                Nevelés, oktatás, képességfejlesztés
              </h4>
              <p className="text-charcoal/80 leading-relaxed mb-4">
                Az Egyesületünk által működtetett képzés tagja a Nemzetközi Euritmia Szövetségnek, és jogosult a Szövetség euritmia-tanárképzési programja szerinti oktatást budapesti helyszínen megszervezni. 2018-ban egy ötödéves és két másodéves csoporttal dolgoztunk.
              </p>
              <p className="text-charcoal/80 leading-relaxed">
                A Társaságunk által megszervezett képzés lehetővé teszi, hogy a Waldorf iskolákban kötelezőlyen oktatott euritmiát megfelelő képesítéssel rendelkező tanárok oktathassák. A tanárok által az euritmia több száz gyermekhez eljut, segítve ezáltal az egészséges fejlődésüket.
              </p>
            </div>

            {/* Section 3 */}
            <div>
              <h4 className="font-serif text-xl font-bold text-charcoal mb-4 pb-2 border-b border-charcoal/10 inline-block">
                Kulturális tevékenységek
              </h4>
              <p className="text-charcoal/80 leading-relaxed">
                2018-ban Társaságunk újabb nyilvános, színházi előadásokat szervezett. Az Artemisz Euritmiaszínpad matinéelőadást tartott a Kispesti Waldorf Iskola diákjainak. A produkciót két grazi Waldorf iskola is vendégszereplésre hívta. Társaságunk turnét szervezett a Hannoveri Euritmaiskola végzős diákjainak és tanárainak. A székhelyünkön kisebb euritmia előadásokra és koncertekre került sor neves művészek közreműködésével.
              </p>
            </div>

          </div>
        </div>

        {/* Existing Footer Content for Sponsors (Re-integrated cleanly) */}
        <div className="text-center animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          <h4 className="font-serif text-lg font-bold text-charcoal mb-8 uppercase tracking-widest opacity-60">
            Támogatóink
          </h4>

          <div className="flex flex-col md:flex-row justify-center items-center gap-12 text-charcoal/70">
            <div className="max-w-xs">
              <p className="font-bold mb-2">Külföldi támogatóink:</p>
              <p className="italic text-sm">Freunde der Erziehungskunst, Hauserstiftung, Verein zur Förderung Anthroposophischer Art és Kunst</p>
            </div>
            <div className="h-px w-24 md:w-px md:h-16 bg-charcoal/20" />
            <div className="max-w-xs">
              <p className="font-bold mb-2">Belföldi támogatóink:</p>
              <p className="italic text-sm">Natura-Sophia, Veszprém-Balaton 2023</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Supporters;