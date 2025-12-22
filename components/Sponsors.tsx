import React from 'react';
import { Leaf } from 'lucide-react';

const Sponsors: React.FC = () => {
  return (
    <section className="py-24 px-4 md:px-8 relative z-10">
      <div className="max-w-6xl mx-auto text-center">
        
        {/* Intro Text */}
        <p className="text-charcoal/80 mb-12 text-lg md:text-xl font-medium">
            Köszönjük a minket támogató szervezetek adományait!
        </p>

        {/* Foreign Sponsors */}
        <div className="mb-12">
            <h3 className="font-serif text-2xl md:text-3xl font-bold text-charcoal mb-4">
                Külföldi támogatóink:
            </h3>
            <p className="text-charcoal/70 text-base md:text-lg max-w-4xl mx-auto leading-relaxed">
                Freunde der Erziehungskunst, Hauserstiftung, Verein zur Förderung Anthroposophischer Art és Kunst
            </p>
        </div>

        {/* Domestic Sponsors */}
        <div className="mb-16">
            <h3 className="font-serif text-2xl md:text-3xl font-bold text-charcoal mb-4">
                Köszönjük a belföldi szervezetek támogatását is:
            </h3>
            <p className="text-charcoal/70 text-base md:text-lg max-w-4xl mx-auto">
                Natura-Sophia, Veszprém-Balaton 2023
            </p>
        </div>

        {/* Sponsor Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-center items-stretch max-w-5xl mx-auto">
            
            {/* Card 1: Natura Sophia */}
            <div className="bg-charcoal/5 rounded-[2.5rem] p-10 flex flex-col items-center justify-center min-h-[260px] transition-all duration-300 hover:-translate-y-2 hover:shadow-soft group">
                <div className="w-20 h-20 bg-[#2E8B57] rounded-full flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform duration-300">
                    <Leaf className="text-white w-10 h-10 fill-current" />
                </div>
                <div className="text-center">
                    <h4 className="font-serif text-xl font-bold text-charcoal uppercase tracking-widest leading-tight">
                        NATURA
                    </h4>
                    <h4 className="font-serif text-xl font-bold text-charcoal uppercase tracking-widest leading-tight">
                        SOPHIA
                    </h4>
                </div>
            </div>

            {/* Card 2: Freunde der Erziehungskunst */}
            <div className="bg-charcoal/5 rounded-[2.5rem] p-10 flex flex-col items-center justify-center min-h-[260px] transition-all duration-300 hover:-translate-y-2 hover:shadow-soft">
                <p className="text-xs text-charcoal/50 mb-3 font-sans lowercase">supported by</p>
                <h4 className="font-sans text-lg font-medium text-charcoal text-center leading-snug mb-2">
                    Freunde der<br/>Erziehungskunst
                </h4>
                 <p className="text-earth text-sm font-serif italic mb-2">Rudolf Steiners</p>
                 <p className="text-charcoal/50 text-sm text-center font-sans leading-tight">
                    Friends of<br/>Waldorf Education
                 </p>
            </div>

             {/* Card 3: Veszprem-Balaton */}
             <div className="bg-charcoal/5 rounded-[2.5rem] p-10 flex flex-col items-center justify-center min-h-[260px] transition-all duration-300 hover:-translate-y-2 hover:shadow-soft">
                {/* Gradient Logo Placeholder */}
                <div className="w-24 h-14 bg-gradient-to-r from-[#FF9A9E] to-[#FECFEF] bg-[length:200%_200%] bg-gradient-to-br from-pink-400 via-orange-300 to-yellow-300 rounded-lg mb-6 shadow-sm" />
                
                <p className="text-charcoal/80 font-bold text-sm mb-1 text-center">Veszprém-Balaton 2023</p>
                <p className="text-charcoal/60 text-xs text-center uppercase tracking-wide">Európa Kulturális Fővárosa</p>
            </div>

        </div>
      </div>
    </section>
  );
};

export default Sponsors;