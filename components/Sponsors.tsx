import React from 'react';
import NaturaSophia from '../Logos/natura-sophia.jpg';
import Freunde from '../Logos/Freunde.jpg';
import Veszprem from '../Logos/veszprem-balaton-2023.jpg';

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
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-center items-center max-w-5xl mx-auto">

                    {/* Card 1: Natura Sophia */}
                    <div className="bg-charcoal/5 rounded-[2.5rem] p-8 flex items-center justify-center min-h-[160px] transition-all duration-300 hover:-translate-y-2 hover:shadow-soft group overflow-hidden">
                        <img src={NaturaSophia} alt="Natura Sophia" className="max-w-full max-h-[160px] object-contain mix-blend-multiply" />
                    </div>

                    {/* Card 2: Freunde der Erziehungskunst */}
                    <div className="bg-charcoal/5 rounded-[2.5rem] p-8 flex items-center justify-center min-h-[180px] transition-all duration-300 hover:-translate-y-2 hover:shadow-soft overflow-hidden">
                        <img src={Freunde} alt="Freunde der Erziehungskunst" className="max-w-full max-h-[180px] object-contain mix-blend-multiply" />
                    </div>

                    {/* Card 3: Veszprem-Balaton */}
                    <div className="bg-charcoal/5 rounded-[2.5rem] p-8 flex items-center justify-center min-h-[160px] transition-all duration-300 hover:-translate-y-2 hover:shadow-soft overflow-hidden">
                        <img src={Veszprem} alt="Veszprém-Balaton 2023" className="max-w-full max-h-[160px] object-contain mix-blend-multiply" />
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Sponsors;