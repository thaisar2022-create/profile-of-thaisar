import React from 'react';
import { motion } from 'motion/react';
import { Language, TabType } from '../types';
import { translations } from '../data/translations';
import { ShieldCheck, ArrowRight, Sparkles } from 'lucide-react';

interface HeroBannerProps {
  currentLang: Language;
  onSelectTab: (tab: TabType) => void;
}

export const HeroBanner: React.FC<HeroBannerProps> = ({ currentLang, onSelectTab }) => {
  return (
    <div className="relative bg-gradient-to-r from-[#2e0750] via-[#3b0764] to-[#581c87] text-white rounded-3xl p-6 sm:p-10 mb-8 shadow-2xl border border-purple-700/50 overflow-hidden">
      {/* Background Watermark & Glow */}
      <div className="absolute -right-12 -bottom-12 opacity-15 pointer-events-none select-none">
        <div className="w-80 h-80 rounded-full bg-amber-400 blur-3xl opacity-30 animate-pulse" />
      </div>
      <div className="absolute right-10 bottom-0 opacity-10 pointer-events-none hidden lg:block select-none">
        <span className="text-[200px] font-black text-amber-300">ထ</span>
      </div>

      <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-8">
        <div className="max-w-3xl">
          {/* Badge */}
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center space-x-2 bg-amber-400/15 text-amber-300 border border-amber-400/30 px-3.5 py-1.5 rounded-full text-xs font-semibold mb-4 backdrop-blur-sm"
          >
            <ShieldCheck className="w-4 h-4 text-amber-400" />
            <span>
              {currentLang === 'my' ? translations.hero.badgeMy : translations.hero.badgeEn}
            </span>
          </motion.div>

          <h1 className="text-2xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight mb-2">
            {currentLang === 'my' ? '"ထိုင်းစာ" ထိုင်းဘာသာစကားသင်တန်းကျောင်း' : 'Thaisar Thai Language Academy'}
          </h1>
          <h2 className="text-lg sm:text-2xl font-bold text-amber-400 mb-5 flex items-center space-x-2">
            <span>Thaisar Thai Language Academy</span>
            <Sparkles className="w-5 h-5 text-amber-300 animate-spin-slow" />
          </h2>

          {/* Slogan Quote */}
          <motion.div 
            initial={{ opacity: 0, x: -15 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="text-purple-100 text-sm sm:text-base italic bg-[#1e0338]/80 p-4 sm:p-5 rounded-2xl border-l-4 border-amber-400 leading-relaxed shadow-inner backdrop-blur"
          >
            {currentLang === 'my' ? translations.hero.sloganMy : translations.hero.sloganEn}
          </motion.div>

          {/* CTA Buttons */}
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <button
              onClick={() => onSelectTab('proposal')}
              className="bg-amber-400 hover:bg-amber-300 text-purple-950 font-extrabold px-5 py-3 rounded-xl text-xs sm:text-sm flex items-center space-x-2 shadow-lg hover:shadow-amber-400/20 transition-all active:scale-95 cursor-pointer"
            >
              <span>{currentLang === 'my' ? 'အဆိုပြုလွှာ & သင်တန်းကြေး တွက်ရန်' : 'Calculate Agency Fee Quote'}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => onSelectTab('practice')}
              className="bg-purple-900/80 hover:bg-purple-800 text-amber-300 font-bold px-4 py-3 rounded-xl text-xs sm:text-sm border border-purple-700/80 flex items-center space-x-2 transition-all cursor-pointer"
            >
              <span>{currentLang === 'my' ? 'ထိုင်းစကားပြော လက်တွေ့ Demo စမ်းရန်' : 'Try Interactive Thai Lesson'}</span>
            </button>
          </div>
        </div>

        {/* Hero Display Logo Seal */}
        <motion.div 
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="hidden lg:flex flex-col items-center justify-center p-6 bg-[#1e0338]/80 rounded-3xl border border-purple-700/80 shadow-2xl backdrop-blur"
        >
          <div className="w-36 h-36 rounded-full bg-gradient-to-tr from-amber-400 via-yellow-300 to-amber-500 p-1 shadow-2xl animate-float">
            <div className="w-full h-full rounded-full bg-[#2e0750] flex flex-col items-center justify-center text-amber-400 border-2 border-amber-400">
              <span className="text-5xl font-black">ထ</span>
              <span className="text-[10px] font-bold tracking-widest text-purple-200 mt-1 uppercase">THAISAR</span>
            </div>
          </div>
          <span className="mt-3 text-xs font-extrabold text-amber-300 uppercase tracking-widest bg-amber-400/20 px-3 py-1 rounded-full border border-amber-400/30">
            Official Academy Seal
          </span>
        </motion.div>
      </div>
    </div>
  );
};
