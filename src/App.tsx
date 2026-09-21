import React, { useState } from 'react';
import { LanguageProvider, useLanguage } from './context/LanguageContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { CarCard } from './components/CarCard';
import { VehicleDetailExperience } from './components/VehicleDetailExperience';
import { WhatsAppModal } from './components/WhatsAppModal';
import { AboutSection, ContactSection } from './components/AboutContact';
import { Footer } from './components/Footer';
import { carsData } from './data/carsData';
import type { Car } from './data/carsData';
import { Car as CarIcon, Key } from 'lucide-react';

const MainApp: React.FC = () => {
  const { t } = useLanguage();
  const [activeSection, setActiveSection] = useState('hero');
  const [selectedCar, setSelectedCar] = useState<Car | null>(null);
  const [inquireCar, setInquireCar] = useState<Car | null>(null);

  const newCars = carsData.filter((c) => c.category === 'new');
  const rentalCars = carsData.filter((c) => c.category === 'rental');

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col font-sans selection:bg-white selection:text-black">
      {/* Sticky Top Navbar */}
      <Navbar activeSection={activeSection} onNavigate={scrollToSection} />

      <main className="flex-1">
        {/* Hero Section */}
        <Hero
          onExploreNew={() => scrollToSection('new-cars')}
          onExploreRental={() => scrollToSection('car-rental')}
        />

        {/* 1. NEW CARS SECTION */}
        <section id="new-cars" className="py-24 bg-zinc-950 border-b border-zinc-800 text-start">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-zinc-800 pb-8">
              <div className="space-y-3">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-xs font-mono text-zinc-300">
                  <CarIcon className="w-3.5 h-3.5 text-zinc-300" />
                  <span>SALES DIVISION</span>
                </div>
                <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
                  {t.newCarsTitle}
                </h2>
                <p className="text-sm text-zinc-400 max-w-xl">
                  {t.newCarsSubtitle}
                </p>
              </div>

              <div className="text-xs font-mono text-zinc-500 bg-zinc-900/60 px-4 py-2 rounded-xl border border-zinc-800 self-start md:self-auto">
                {newCars.length} VEHICLES AVAILABLE
              </div>
            </div>

            {/* Vehicle Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {newCars.map((car) => (
                <CarCard key={car.id} car={car} onSelect={(c) => setSelectedCar(c)} />
              ))}
            </div>

          </div>
        </section>

        {/* 2. CAR RENTAL SECTION */}
        <section id="car-rental" className="py-24 bg-zinc-900/40 border-b border-zinc-800 text-start">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-zinc-800 pb-8">
              <div className="space-y-3">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-xs font-mono text-zinc-300">
                  <Key className="w-3.5 h-3.5 text-emerald-400" />
                  <span>EXECUTIVE FLEET</span>
                </div>
                <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
                  {t.rentalTitle}
                </h2>
                <p className="text-sm text-zinc-400 max-w-xl">
                  {t.rentalSubtitle}
                </p>
              </div>

              <div className="text-xs font-mono text-zinc-500 bg-zinc-900/60 px-4 py-2 rounded-xl border border-zinc-800 self-start md:self-auto">
                {rentalCars.length} EXECUTIVE MODELS
              </div>
            </div>

            {/* Rental Vehicle Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {rentalCars.map((car) => (
                <CarCard key={car.id} car={car} onSelect={(c) => setSelectedCar(c)} />
              ))}
            </div>

          </div>
        </section>

        {/* 3. ABOUT AQWARA */}
        <AboutSection />

        {/* 4. CONTACT SECTION */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer onNavigate={scrollToSection} />

      {/* Interactive 360 Vehicle Detail Transition Experience Modal */}
      {selectedCar && (
        <VehicleDetailExperience
          car={selectedCar}
          onClose={() => setSelectedCar(null)}
          onInquire={(car) => {
            setSelectedCar(null);
            setInquireCar(car);
          }}
        />
      )}

      {/* Direct WhatsApp Contact Modal */}
      <WhatsAppModal
        car={inquireCar}
        isOpen={!!inquireCar}
        onClose={() => setInquireCar(null)}
      />
    </div>
  );
};

export function App() {
  return (
    <LanguageProvider>
      <MainApp />
    </LanguageProvider>
  );
}

export default App;
