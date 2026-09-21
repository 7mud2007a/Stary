import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Building2, Award, Users2, ShieldCheck, MapPin, Phone, Mail, Clock, Send } from 'lucide-react';

export const AboutSection: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-24 bg-zinc-950 border-b border-zinc-800 text-start">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">

        {/* Section Header */}
        <div className="space-y-4 max-w-3xl">
          <span className="text-xs font-mono tracking-widest text-zinc-400 uppercase">
            ARCHITECTURAL AUTOMOTIVE HERITAGE
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            {t.aboutTitle}
          </h2>
          <p className="text-base text-zinc-400 leading-relaxed">
            {t.aboutSubtitle}
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          <div className="lg:col-span-7 space-y-6 text-zinc-300 leading-relaxed text-sm sm:text-base">
            <p className="bg-zinc-900/80 p-6 rounded-2xl border border-zinc-800/80 shadow-xl">
              {t.aboutP1}
            </p>
            <p className="bg-zinc-900/80 p-6 rounded-2xl border border-zinc-800/80 shadow-xl">
              {t.aboutP2}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
              <div className="p-4 rounded-xl bg-zinc-900 border border-zinc-800 text-center space-y-1">
                <p className="text-2xl font-bold font-mono text-white">12+</p>
                <p className="text-xs text-zinc-400">{t.statExperience}</p>
              </div>
              <div className="p-4 rounded-xl bg-zinc-900 border border-zinc-800 text-center space-y-1">
                <p className="text-2xl font-bold font-mono text-white">150+</p>
                <p className="text-xs text-zinc-400">{t.statVehicles}</p>
              </div>
              <div className="p-4 rounded-xl bg-zinc-900 border border-zinc-800 text-center space-y-1">
                <p className="text-2xl font-bold font-mono text-white">1000+</p>
                <p className="text-xs text-zinc-400">{t.statClients}</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 bg-gradient-to-b from-zinc-900 to-zinc-950 p-8 rounded-3xl border border-zinc-800 space-y-6 shadow-2xl">
            <div className="flex items-center gap-3 border-b border-zinc-800 pb-4">
              <Building2 className="w-6 h-6 text-emerald-400" />
              <h3 className="text-lg font-bold text-white">Aqwara Excellence Pillars</h3>
            </div>

            <ul className="space-y-4 text-xs sm:text-sm text-zinc-300">
              <li className="flex items-start gap-3">
                <Award className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <span>Unrivaled selection of luxury and high-performance brand new vehicles.</span>
              </li>
              <li className="flex items-start gap-3">
                <Users2 className="w-5 h-5 text-sky-400 shrink-0 mt-0.5" />
                <span>Dedicated executive rental support tailored for diplomatic and VIP visits.</span>
              </li>
              <li className="flex items-start gap-3">
                <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <span>Rigorous architectural quality inspection for every vehicle platform.</span>
              </li>
            </ul>
          </div>

        </div>

      </div>
    </section>
  );
};

export const ContactSection: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="contact" className="py-24 bg-black text-start">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">

        {/* Section Header */}
        <div className="space-y-4 max-w-3xl">
          <span className="text-xs font-mono tracking-widest text-zinc-400 uppercase">
            DIRECT ADVISORY & RESERVATIONS
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            {t.contactTitle}
          </h2>
          <p className="text-base text-zinc-400 leading-relaxed">
            {t.contactSubtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

          {/* Contact Details & Map */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 rounded-2xl bg-zinc-900 border border-zinc-800 space-y-6">

              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-zinc-800 text-zinc-300">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-mono uppercase text-zinc-400">{t.addressTitle}</h4>
                  <p className="text-sm font-semibold text-white mt-1">{t.addressValue}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-zinc-800 text-zinc-300">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-mono uppercase text-zinc-400">{t.phoneTitle}</h4>
                  <a href="https://wa.me/963930431817" target="_blank" rel="noopener noreferrer" className="text-sm font-bold text-emerald-400 mt-1 block">
                    +963 930 431 817
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-zinc-800 text-zinc-300">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-mono uppercase text-zinc-400">{t.emailTitle}</h4>
                  <p className="text-sm font-semibold text-white mt-1">info@aqwara-auto.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-zinc-800 text-zinc-300">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-mono uppercase text-zinc-400">{t.workingHoursTitle}</h4>
                  <p className="text-sm font-semibold text-white mt-1">{t.workingHoursValue}</p>
                </div>
              </div>

            </div>

            {/* Interactive Location Placeholder Graphic */}
            <div className="p-6 rounded-2xl bg-zinc-900/60 border border-zinc-800 text-center space-y-3">
              <div className="w-full h-32 rounded-xl bg-zinc-950 border border-zinc-800 flex flex-col items-center justify-center text-zinc-500 gap-2">
                <MapPin className="w-8 h-8 text-emerald-500 animate-bounce" />
                <span className="text-xs font-mono">Damascus Headquarters Map Location</span>
              </div>
            </div>
          </div>

          {/* Direct Message Form */}
          <div className="lg:col-span-7 bg-zinc-900 p-8 rounded-3xl border border-zinc-800 shadow-2xl space-y-6">
            <h3 className="text-lg font-bold text-white border-b border-zinc-800 pb-4">
              Send Direct Message
            </h3>

            <form onSubmit={(e) => { e.preventDefault(); alert('Message sent to Aqwara team!'); }} className="space-y-4 text-xs">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-zinc-300 font-medium mb-1.5">{t.yourName}</label>
                  <input
                    type="text"
                    required
                    placeholder="Your Name"
                    className="w-full px-4 py-3 rounded-xl bg-zinc-950 border border-zinc-800 text-white placeholder-zinc-600 focus:outline-none focus:border-zinc-500"
                  />
                </div>
                <div>
                  <label className="block text-zinc-300 font-medium mb-1.5">{t.yourPhone}</label>
                  <input
                    type="tel"
                    required
                    placeholder="+963..."
                    className="w-full px-4 py-3 rounded-xl bg-zinc-950 border border-zinc-800 text-white placeholder-zinc-600 focus:outline-none focus:border-zinc-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-zinc-300 font-medium mb-1.5">{t.additionalMessage}</label>
                <textarea
                  rows={4}
                  required
                  placeholder="Inquiry message..."
                  className="w-full px-4 py-3 rounded-xl bg-zinc-950 border border-zinc-800 text-white placeholder-zinc-600 focus:outline-none focus:border-zinc-500 resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-white hover:bg-zinc-200 text-black font-bold text-xs tracking-wide transition-all cursor-pointer min-h-[48px]"
              >
                <Send className="w-4 h-4" />
                <span>{t.sendMessage}</span>
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};
