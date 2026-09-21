import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { ArrowLeft, ArrowRight, ShieldCheck, Sparkles, Compass } from 'lucide-react';
import { ThreeCarViewer } from './ThreeCarViewer';
import { carsData } from '../data/carsData';

interface HeroProps {
  onExploreNew: () => void;
  onExploreRental: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreNew, onExploreRental }) => {
  const { t, dir } = useLanguage();
  const ArrowIcon = dir === 'rtl' ? ArrowLeft : ArrowRight;

  // Showcase vehicle for Hero 3D turntable platform
  const heroCar = carsData[0];

  return (
    <section id="hero" className="relative bg-zinc-950 overflow-hidden pt-12 pb-24 md:pt-20 md:pb-32 border-b border-zinc-800">

      {/* ARCHITECTURAL BACKGROUND LINES & GEOMETRIC ACCENTS */}
      <div className="absolute inset-0 architectural-grid opacity-20 pointer-events-none" />

      {/* Diagonal Architectural Line */}
      <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-white/10 via-white/5 to-transparent pointer-events-none hidden lg:block" />
      <div className="absolute top-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

          {/* TEXT & CTAS (COL 7) */}
          <div className="lg:col-span-7 space-y-8 text-start">

            {/* Top Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-900 border border-zinc-700 text-xs text-zinc-300 font-mono">
              <Sparkles className="w-3.5 h-3.5 text-zinc-300" />
              <span>{t.heroBadge}</span>
            </div>

            {/* Display Heading */}
            <div className="space-y-4">
              <span className="text-xs font-mono tracking-widest text-zinc-400 uppercase block">
                {t.heroTagline}
              </span>
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
                {t.heroTitle}
              </h1>
            </div>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-zinc-400 max-w-2xl leading-relaxed">
              {t.heroSubtitle}
            </p>

            {/* Dual CTAs (New Cars & Rental) */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
              <button
                onClick={onExploreNew}
                className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-white text-black font-bold text-sm tracking-wide hover:bg-zinc-200 transition-all shadow-xl hover:shadow-2xl active:scale-98 cursor-pointer min-h-[48px]"
              >
                <span>{t.exploreNewCars}</span>
                <ArrowIcon className="w-4 h-4" />
              </button>

              <button
                onClick={onExploreRental}
                className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-white font-semibold text-sm border border-zinc-700 hover:border-zinc-500 transition-all cursor-pointer min-h-[48px]"
              >
                <span>{t.exploreRentalCars}</span>
                <Compass className="w-4 h-4 text-zinc-400" />
              </button>
            </div>

            {/* Key Trust Signals */}
            <div className="pt-8 grid grid-cols-2 sm:grid-cols-3 gap-6 border-t border-zinc-900 text-xs">
              <div className="flex items-center gap-2 text-zinc-300">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>100% Certified Luxury</span>
              </div>
              <div className="flex items-center gap-2 text-zinc-300">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Executive Rental Fleet</span>
              </div>
              <div className="flex items-center gap-2 text-zinc-300">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>24/7 VIP Assistance</span>
              </div>
            </div>

          </div>

          {/* HERO VISUAL PRESENTATION (COL 5) */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            {/* Architectural Frame Box */}
            <div className="w-full relative bg-gradient-to-b from-zinc-900/90 to-zinc-950 p-6 rounded-2xl border border-zinc-800 shadow-2xl">
              <div className="absolute top-3 right-4 text-[10px] font-mono text-zinc-500 tracking-wider uppercase">
                3D SHOWROOM PLATFORM
              </div>

              <ThreeCarViewer car={heroCar} className="py-2" />

              <div className="pt-4 border-t border-zinc-800/80 flex items-center justify-between">
                <div>
                  <h3 className="text-sm font-bold text-white">{heroCar.name[t === undefined ? 'en' : 'ar']}</h3>
                  <p className="text-xs text-zinc-400">{heroCar.type[t === undefined ? 'en' : 'ar']}</p>
                </div>
                <button
                  onClick={onExploreNew}
                  className="px-3.5 py-1.5 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-xs font-semibold text-white transition-colors"
                >
                  {t.viewDetails}
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
