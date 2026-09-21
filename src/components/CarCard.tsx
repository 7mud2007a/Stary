import React from 'react';
import type { Car } from '../data/carsData';
import { ThreeCarViewer } from './ThreeCarViewer';
import { useLanguage } from '../context/LanguageContext';
import { ArrowUpRight } from 'lucide-react';

interface CarCardProps {
  car: Car;
  onSelect: (car: Car) => void;
}

export const CarCard: React.FC<CarCardProps> = ({ car, onSelect }) => {
  const { t, language } = useLanguage();
  const carName = car.name[language];

  return (
    <div
      onClick={() => onSelect(car)}
      className="group relative bg-zinc-900/60 hover:bg-zinc-900 rounded-2xl border border-zinc-800 hover:border-zinc-600 transition-all duration-300 overflow-hidden cursor-pointer flex flex-col justify-between p-6 shadow-xl"
    >
      {/* Background Subtle Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-zinc-900/40 to-black/80 opacity-60 group-hover:opacity-100 transition-opacity" />

      {/* Top Section: Category Tag */}
      <div className="relative z-10 flex items-center justify-between">
        <span className="text-[11px] font-mono tracking-wider uppercase px-3 py-1 rounded-full bg-zinc-800/80 border border-zinc-700/60 text-zinc-300">
          {car.category === 'new' ? 'FOR SALE' : 'RENTAL FLEET'}
        </span>
        <span className="text-xs font-mono font-bold text-white">
          {car.category === 'rental' && car.rentalDailyPrice ? `${car.rentalDailyPrice[language]}${t.perDay}` : car.price[language]}
        </span>
      </div>

      {/* Center Section: 3D Turntable & Realistic Car Viewer */}
      <div className="relative z-10 my-2 transform group-hover:-translate-y-1 transition-transform duration-300">
        <ThreeCarViewer car={car} />
      </div>

      {/* Bottom Section: Vehicle Name & Minimal View Details CTA */}
      <div className="relative z-10 pt-4 border-t border-zinc-800/80 flex items-center justify-between gap-2">
        <div>
          <h3 className="text-base font-bold text-white group-hover:text-zinc-100 transition-colors">
            {carName}
          </h3>
          <p className="text-xs text-zinc-400 font-medium">
            {car.type[language]}
          </p>
        </div>

        <button
          onClick={(e) => {
            e.stopPropagation();
            onSelect(car);
          }}
          className="shrink-0 flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-zinc-800 group-hover:bg-white group-hover:text-black text-xs font-semibold text-white transition-all cursor-pointer min-h-[44px]"
        >
          <span>{t.viewDetails}</span>
          <ArrowUpRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
};
