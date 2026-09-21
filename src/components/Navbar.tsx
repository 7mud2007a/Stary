import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Globe, Menu, X, Car as CarIcon, Shield, ChevronRight } from 'lucide-react';

interface NavbarProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection, onNavigate }) => {
  const { t, language, toggleLanguage, dir } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'hero', label: t.navHome },
    { id: 'new-cars', label: t.navNewCars },
    { id: 'car-rental', label: t.navRental },
    { id: 'about', label: t.navAbout },
    { id: 'contact', label: t.navContact },
  ];

  const handleNavClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-black/80 backdrop-blur-xl border-b border-zinc-800/80 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">

        {/* BRAND IDENTITY */}
        <button
          onClick={() => handleNavClick('hero')}
          className="flex items-center gap-3 group text-start focus:outline-none focus:ring-2 focus:ring-white/20 rounded-lg p-1"
        >
          <div className="w-10 h-10 bg-zinc-900 border border-zinc-700 group-hover:border-white rounded-lg flex items-center justify-center transition-colors">
            <CarIcon className="w-5 h-5 text-white" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xl font-bold tracking-tight text-white group-hover:text-zinc-200 transition-colors">
                AQWARA
              </span>
              <span className="text-xs px-2 py-0.5 rounded bg-zinc-800 border border-zinc-700 text-zinc-300 font-mono">
                {t.brandName}
              </span>
            </div>
            <p className="text-[10px] text-zinc-400 font-medium tracking-wider uppercase">
              {t.brandSubtitle}
            </p>
          </div>
        </button>

        {/* DESKTOP NAVIGATION */}
        <nav className="hidden md:flex items-center gap-1 bg-zinc-900/60 p-1.5 rounded-full border border-zinc-800">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`px-4 py-2 text-xs font-medium rounded-full transition-all duration-200 ${
                  isActive
                    ? 'bg-white text-black shadow-lg font-semibold'
                    : 'text-zinc-400 hover:text-white hover:bg-zinc-800/50'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* LANGUAGE SWITCHER & CTAS */}
        <div className="hidden md:flex items-center gap-4">
          <button
            onClick={toggleLanguage}
            className="flex items-center gap-2 px-3.5 py-2 rounded-lg border border-zinc-800 hover:border-zinc-600 bg-zinc-900/80 text-xs font-mono text-zinc-300 hover:text-white transition-all cursor-pointer min-h-[44px] min-w-[44px]"
            aria-label={`Switch to ${language === 'ar' ? 'English' : 'Arabic'}`}
          >
            <Globe className="w-4 h-4 text-zinc-400" />
            <span>{t.switchLanguage}</span>
          </button>

          <button
            onClick={() => handleNavClick('contact')}
            className="px-5 py-2.5 rounded-lg bg-zinc-100 hover:bg-white text-black font-semibold text-xs tracking-wide transition-all shadow-md active:scale-95 cursor-pointer min-h-[44px]"
          >
            {t.navContact}
          </button>
        </div>

        {/* MOBILE MENU TOGGLE */}
        <div className="flex items-center gap-2 md:hidden">
          <button
            onClick={toggleLanguage}
            className="flex items-center justify-center p-2 rounded-lg border border-zinc-800 bg-zinc-900 text-xs text-zinc-300 min-h-[44px] min-w-[44px]"
            aria-label="Switch Language"
          >
            <Globe className="w-4 h-4" />
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2.5 rounded-lg bg-zinc-900 border border-zinc-800 text-white hover:bg-zinc-800 transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center"
            aria-label="Toggle Mobile Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

      </div>

      {/* MOBILE OVERLAY MENU */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-zinc-950 border-b border-zinc-800 px-4 pt-4 pb-6 space-y-3 animate-in slide-in-from-top-4 duration-200">
          <div className="space-y-1">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`w-full flex items-center justify-between px-4 py-3 rounded-lg text-sm font-medium transition-all min-h-[44px] ${
                    isActive
                      ? 'bg-white text-black font-bold'
                      : 'text-zinc-300 hover:bg-zinc-900'
                  }`}
                >
                  <span>{item.label}</span>
                  <ChevronRight className={`w-4 h-4 ${dir === 'rtl' ? 'rotate-180' : ''}`} />
                </button>
              );
            })}
          </div>

          <div className="pt-4 border-t border-zinc-800/80 flex items-center justify-between">
            <div className="flex items-center gap-2 text-xs text-zinc-400">
              <Shield className="w-4 h-4 text-emerald-400" />
              <span>Aqwara Executive Sales</span>
            </div>
            <button
              onClick={toggleLanguage}
              className="px-4 py-2 rounded-lg bg-zinc-900 border border-zinc-700 text-xs text-white min-h-[44px]"
            >
              {t.switchLanguage}
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
