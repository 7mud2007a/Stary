import React from 'react';
import type { Car } from '../data/carsData';
import { CarViewer } from './CarViewer';
import { useLanguage } from '../context/LanguageContext';
import { X, ArrowRight, ArrowLeft, MessageSquare, Shield, CheckCircle2, Zap, Fuel, Users, Calendar, Gauge } from 'lucide-react';

interface VehicleDetailExperienceProps {
  car: Car;
  onClose: () => void;
  onInquire: (car: Car) => void;
}

export const VehicleDetailExperience: React.FC<VehicleDetailExperienceProps> = ({
  car,
  onClose,
  onInquire,
}) => {
  const { t, language, dir } = useLanguage();
  const BackIcon = dir === 'rtl' ? ArrowRight : ArrowLeft;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/95 backdrop-blur-2xl flex flex-col animate-in fade-in zoom-in-95 duration-300">

      {/* Top Header Controls */}
      <div className="sticky top-0 z-30 bg-black/80 backdrop-blur-md border-b border-zinc-800 px-4 sm:px-8 py-4 flex items-center justify-between">
        <button
          onClick={onClose}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 text-xs font-semibold text-white transition-all cursor-pointer min-h-[44px]"
        >
          <BackIcon className="w-4 h-4" />
          <span>{t.backToListing}</span>
        </button>

        <div className="flex items-center gap-3">
          <span className="text-xs font-mono text-zinc-400 hidden sm:inline">
            AQWARA AUTOMOTIVE PLATFORM
          </span>
          <button
            onClick={onClose}
            className="p-2.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-zinc-400 hover:text-white border border-zinc-800 transition-colors cursor-pointer min-h-[44px] min-w-[44px] flex items-center justify-center"
            aria-label="Close vehicle view"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Main Body Grid: Large Interactive Presentation Platform (Top/Left) + Specifications (Right/Bottom) */}
      <div className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-8 grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">

        {/* LEFT / TOP: Interactive 360 Platform Presentation Area */}
        <div className="lg:col-span-7 bg-zinc-900/60 border border-zinc-800/80 rounded-3xl p-6 lg:p-8 flex flex-col items-center justify-center relative shadow-2xl">
          <div className="w-full">
            <CarViewer car={car} className="w-full" />
          </div>

          <div className="w-full mt-6 pt-6 border-t border-zinc-800/80 flex flex-wrap items-center justify-between text-xs text-zinc-400 gap-4">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>Full Inspection & Warranty Verified</span>
            </div>
            <div className="flex items-center gap-2 font-mono text-zinc-300">
              <Shield className="w-4 h-4 text-zinc-400" />
              <span>Model Year {car.specs.year}</span>
            </div>
          </div>
        </div>

        {/* RIGHT / BOTTOM: Information & Technical Specifications */}
        <div className="lg:col-span-5 space-y-8 text-start">

          {/* Header Title & Price */}
          <div className="space-y-3 border-b border-zinc-800 pb-6">
            <span className="text-xs font-mono tracking-widest text-zinc-400 uppercase">
              {car.category === 'new' ? 'NEW CAR FOR SALE' : 'EXECUTIVE CAR RENTAL'}
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              {car.name[language]}
            </h1>
            <p className="text-sm text-zinc-400 leading-relaxed">
              {car.description[language]}
            </p>

            <div className="pt-4 flex items-baseline gap-3">
              <span className="text-3xl font-bold font-mono text-white">
                {car.category === 'rental' && car.rentalDailyPrice ? car.rentalDailyPrice[language] : car.price[language]}
              </span>
              {car.category === 'rental' && (
                <span className="text-xs text-zinc-400">{t.perDay}</span>
              )}
            </div>
          </div>

          {/* Primary Action Button */}
          <div>
            <button
              onClick={() => onInquire(car)}
              className="w-full flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-black font-bold text-sm tracking-wide transition-all shadow-xl hover:shadow-2xl cursor-pointer min-h-[48px]"
            >
              <MessageSquare className="w-5 h-5 fill-current" />
              <span>{t.contactNow}</span>
            </button>
          </div>

          {/* Specification Grid */}
          <div className="space-y-4">
            <h3 className="text-xs font-mono tracking-wider text-zinc-400 uppercase font-semibold">
              {t.specifications}
            </h3>

            <div className="grid grid-cols-2 gap-3 text-xs">

              <div className="p-3.5 rounded-xl bg-zinc-900 border border-zinc-800 space-y-1">
                <div className="flex items-center gap-1.5 text-zinc-400">
                  <Zap className="w-3.5 h-3.5 text-amber-400" />
                  <span>{t.engine}</span>
                </div>
                <p className="font-semibold text-white truncate">{car.specs.engine}</p>
              </div>

              <div className="p-3.5 rounded-xl bg-zinc-900 border border-zinc-800 space-y-1">
                <div className="flex items-center gap-1.5 text-zinc-400">
                  <Gauge className="w-3.5 h-3.5 text-blue-400" />
                  <span>{t.power}</span>
                </div>
                <p className="font-semibold text-white truncate">{car.specs.power}</p>
              </div>

              <div className="p-3.5 rounded-xl bg-zinc-900 border border-zinc-800 space-y-1">
                <div className="flex items-center gap-1.5 text-zinc-400">
                  <Fuel className="w-3.5 h-3.5 text-emerald-400" />
                  <span>{t.fuelType}</span>
                </div>
                <p className="font-semibold text-white truncate">{car.specs.fuelType[language]}</p>
              </div>

              <div className="p-3.5 rounded-xl bg-zinc-900 border border-zinc-800 space-y-1">
                <div className="flex items-center gap-1.5 text-zinc-400">
                  <Users className="w-3.5 h-3.5 text-purple-400" />
                  <span>{t.seats}</span>
                </div>
                <p className="font-semibold text-white">{car.specs.seats} Seats</p>
              </div>

              <div className="p-3.5 rounded-xl bg-zinc-900 border border-zinc-800 space-y-1">
                <div className="flex items-center gap-1.5 text-zinc-400">
                  <Calendar className="w-3.5 h-3.5 text-zinc-400" />
                  <span>{t.modelYear}</span>
                </div>
                <p className="font-semibold text-white">{car.specs.year}</p>
              </div>

              <div className="p-3.5 rounded-xl bg-zinc-900 border border-zinc-800 space-y-1">
                <div className="flex items-center gap-1.5 text-zinc-400">
                  <Shield className="w-3.5 h-3.5 text-sky-400" />
                  <span>{t.transmission}</span>
                </div>
                <p className="font-semibold text-white truncate">{car.specs.transmission[language]}</p>
              </div>

            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
