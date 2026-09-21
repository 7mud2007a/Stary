import React, { useState } from 'react';
import type { Car } from '../data/carsData';
import { useLanguage } from '../context/LanguageContext';
import { X, Send, MessageSquare, Car as CarIcon } from 'lucide-react';

interface WhatsAppModalProps {
  car: Car | null;
  isOpen: boolean;
  onClose: () => void;
}

export const WhatsAppModal: React.FC<WhatsAppModalProps> = ({
  car,
  isOpen,
  onClose,
}) => {
  const { t, language } = useLanguage();
  const [userName, setUserName] = useState('');
  const [userPhone, setUserPhone] = useState('');
  const [userNotes, setUserNotes] = useState('');

  if (!isOpen || !car) return null;

  const carName = car.name[language];

  const handleSendWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();

    const phoneNumber = '963930431817'; // Aqwara Official WhatsApp
    const defaultTemplate = t.whatsappDefaultMsg.replace('[CAR_NAME]', carName);

    let messageText = `${defaultTemplate}\n\n`;
    if (userName) messageText += `• ${t.yourName}: ${userName}\n`;
    if (userPhone) messageText += `• ${t.yourPhone}: ${userPhone}\n`;
    if (userNotes) messageText += `• ${t.additionalMessage}: ${userNotes}\n`;

    const encodedMessage = encodeURIComponent(messageText);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    window.open(whatsappUrl, '_blank');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="bg-zinc-900 border border-zinc-800 rounded-2xl max-w-md w-full p-6 space-y-6 shadow-2xl relative text-start">

        {/* Header */}
        <div className="flex items-center justify-between border-b border-zinc-800 pb-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
              <MessageSquare className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-bold text-white">{t.inquireHeader}</h3>
              <p className="text-xs text-zinc-400">{t.inquireSubtitle}</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-lg bg-zinc-800 text-zinc-400 hover:text-white transition-colors cursor-pointer min-h-[44px] min-w-[44px] flex items-center justify-center"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Selected Car Highlight */}
        <div className="p-3.5 rounded-xl bg-zinc-950 border border-zinc-800 flex items-center gap-3">
          <CarIcon className="w-5 h-5 text-zinc-400 shrink-0" />
          <div>
            <p className="text-xs text-zinc-400">{t.specifications}</p>
            <p className="text-sm font-bold text-white">{carName}</p>
          </div>
        </div>

        {/* Form Fields */}
        <form onSubmit={handleSendWhatsApp} className="space-y-4 text-xs">
          <div>
            <label className="block text-zinc-300 font-medium mb-1.5">{t.yourName}</label>
            <input
              type="text"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              placeholder="e.g. Ahmad Al-Mansoor"
              className="w-full px-4 py-3 rounded-xl bg-zinc-950 border border-zinc-800 text-white placeholder-zinc-600 focus:outline-none focus:border-emerald-500 transition-colors"
            />
          </div>

          <div>
            <label className="block text-zinc-300 font-medium mb-1.5">{t.yourPhone}</label>
            <input
              type="tel"
              value={userPhone}
              onChange={(e) => setUserPhone(e.target.value)}
              placeholder="+963..."
              className="w-full px-4 py-3 rounded-xl bg-zinc-950 border border-zinc-800 text-white placeholder-zinc-600 focus:outline-none focus:border-emerald-500 transition-colors"
            />
          </div>

          <div>
            <label className="block text-zinc-300 font-medium mb-1.5">{t.additionalMessage}</label>
            <textarea
              rows={3}
              value={userNotes}
              onChange={(e) => setUserNotes(e.target.value)}
              placeholder="Any preferred dates or questions..."
              className="w-full px-4 py-3 rounded-xl bg-zinc-950 border border-zinc-800 text-white placeholder-zinc-600 focus:outline-none focus:border-emerald-500 transition-colors resize-none"
            />
          </div>

          <button
            type="submit"
            className="w-full flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-black font-bold text-xs tracking-wide transition-all shadow-lg cursor-pointer min-h-[48px]"
          >
            <Send className="w-4 h-4" />
            <span>{t.sendWhatsApp}</span>
          </button>
        </form>

      </div>
    </div>
  );
};
