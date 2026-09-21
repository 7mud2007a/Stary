import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Car, MapPin, Phone, Mail, Clock, ShieldCheck, Globe } from 'lucide-react';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const { t, toggleLanguage, language } = useLanguage();

  return (
    <footer className="bg-zinc-950 border-t border-zinc-800/80 text-zinc-400 pt-16 pb-12 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Architectural 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-zinc-800">

          {/* Column 1: Brand Overview */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-zinc-900 border border-zinc-700 rounded-lg flex items-center justify-center text-white">
                <Car className="w-5 h-5" />
              </div>
              <span className="text-xl font-bold tracking-tight text-white">AQWARA</span>
            </div>
            <p className="text-xs text-zinc-400 leading-relaxed">
              {t.footerTagline}
            </p>
            <div className="pt-2">
              <button
                onClick={toggleLanguage}
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border border-zinc-800 hover:border-zinc-600 bg-zinc-900 text-xs text-zinc-300 transition-colors"
              >
                <Globe className="w-3.5 h-3.5" />
                <span>{language === 'ar' ? 'English Version' : 'النسخة العربية'}</span>
              </button>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-3">
            <h3 className="text-xs font-mono tracking-wider uppercase text-white font-semibold">
              {t.quickLinks}
            </h3>
            <ul className="space-y-2 text-xs">
              {[
                { id: 'hero', label: t.navHome },
                { id: 'new-cars', label: t.navNewCars },
                { id: 'car-rental', label: t.navRental },
                { id: 'about', label: t.navAbout },
                { id: 'contact', label: t.navContact },
              ].map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => onNavigate(link.id)}
                    className="hover:text-white transition-colors cursor-pointer text-start py-1"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Headquarters & Hours */}
          <div className="space-y-3">
            <h3 className="text-xs font-mono tracking-wider uppercase text-white font-semibold">
              {t.addressTitle}
            </h3>
            <ul className="space-y-2.5 text-xs text-zinc-400">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-zinc-500 shrink-0 mt-0.5" />
                <span>{t.addressValue}</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-zinc-500 shrink-0 mt-0.5" />
                <span>{t.workingHoursValue}</span>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact Info & Support */}
          <div className="space-y-3">
            <h3 className="text-xs font-mono tracking-wider uppercase text-white font-semibold">
              {t.contactInfo}
            </h3>
            <ul className="space-y-2.5 text-xs text-zinc-400">
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-zinc-500 shrink-0" />
                <a
                  href="https://wa.me/963930431817"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-emerald-400 transition-colors font-mono"
                >
                  +963 930 431 817
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-zinc-500 shrink-0" />
                <a href="mailto:info@aqwara-auto.com" className="hover:text-white transition-colors">
                  info@aqwara-auto.com
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] text-zinc-500 gap-4">
          <p>{t.rightsReserved}</p>
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 text-zinc-400">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
              <span>Aqwara Verified Luxury Dealer</span>
            </span>
            <span className="hover:text-zinc-300 transition-colors cursor-pointer">Privacy Policy</span>
            <span className="hover:text-zinc-300 transition-colors cursor-pointer">Terms of Service</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
