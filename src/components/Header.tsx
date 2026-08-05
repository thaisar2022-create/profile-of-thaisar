import React from 'react';
import { motion } from 'motion/react';
import { Language, TabType } from '../types';
import { translations, getTranslation } from '../data/translations';
import { 
  Building2, 
  BookOpen, 
  Handshake, 
  TrendingUp, 
  Calculator, 
  Headphones, 
  Printer, 
  Globe 
} from 'lucide-react';

interface HeaderProps {
  currentLang: Language;
  onSetLanguage: (lang: Language) => void;
  activeTab: TabType;
  onSelectTab: (tab: TabType) => void;
  onOpenPrintModal: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentLang,
  onSetLanguage,
  activeTab,
  onSelectTab,
  onOpenPrintModal
}) => {
  const tabs = [
    {
      id: 'overview' as TabType,
      icon: Building2,
      labelMy: translations.tabs.overviewMy,
      labelEn: translations.tabs.overviewEn,
    },
    {
      id: 'curriculum' as TabType,
      icon: BookOpen,
      labelMy: translations.tabs.curriculumMy,
      labelEn: translations.tabs.curriculumEn,
    },
    {
      id: 'benefits' as TabType,
      icon: Handshake,
      labelMy: translations.tabs.benefitsMy,
      labelEn: translations.tabs.benefitsEn,
    },
    {
      id: 'milestones' as TabType,
      icon: TrendingUp,
      labelMy: translations.tabs.milestonesMy,
      labelEn: translations.tabs.milestonesEn,
    },
    {
      id: 'proposal' as TabType,
      icon: Calculator,
      labelMy: translations.tabs.proposalMy,
      labelEn: translations.tabs.proposalEn,
    },
    {
      id: 'practice' as TabType,
      icon: Headphones,
      labelMy: translations.tabs.practiceMy,
      labelEn: translations.tabs.practiceEn,
    },
  ];

  return (
    <header className="bg-[#2e0750] text-white sticky top-0 z-50 shadow-xl no-print border-b border-purple-900/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Brand Logo & Name */}
          <div 
            onClick={() => onSelectTab('overview')} 
            className="flex items-center space-x-3 cursor-pointer group"
          >
            <div className="relative w-11 h-11 sm:w-13 sm:h-13 rounded-full p-0.5 bg-gradient-to-tr from-amber-400 via-yellow-300 to-amber-500 shadow-md flex-shrink-0 transition-transform group-hover:scale-105 overflow-hidden">
              <img 
                src="https://lh3.googleusercontent.com/pw/AP1GczMwFLSw2jZ1uvbxB1NybvU19q_q4wQ_zIyacLAw5-JekiGYYaKWpJSF0IJG_uOrfRDBSg1XUVRmPf7rcM5v69f6HeH09rHtXRPCXAc4bLjP7phKNRU=w2400" 
                alt="Thaisar Logo" 
                className="w-full h-full rounded-full object-cover border border-amber-400/80"
                referrerPolicy="no-referrer"
              />
            </div>
            <div>
              <div className="font-black text-lg sm:text-2xl tracking-tight text-amber-400 flex items-center space-x-1">
                <span>THAISAR</span>
              </div>
              <div className="text-xs text-purple-200 font-medium hidden sm:block">
                {currentLang === 'my' ? translations.header.subtitleMy : translations.header.subtitleEn}
              </div>
            </div>
          </div>

          {/* Controls & Language Switcher */}
          <div className="flex items-center space-x-2 sm:space-x-4">
            {/* Language Toggle */}
            <div className="bg-[#1e0338] p-1 rounded-xl flex items-center border border-purple-800/80 text-xs font-semibold shadow-inner">
              <button
                onClick={() => onSetLanguage('my')}
                className={`px-3 py-1.5 rounded-lg transition-all duration-200 flex items-center space-x-1.5 ${
                  currentLang === 'my'
                    ? 'bg-amber-400 text-purple-950 font-bold shadow-md'
                    : 'text-purple-300 hover:text-white'
                }`}
              >
                <span>🇲🇲</span>
                <span>မြန်မာ</span>
              </button>
              <button
                onClick={() => onSetLanguage('en')}
                className={`px-3 py-1.5 rounded-lg transition-all duration-200 flex items-center space-x-1.5 ${
                  currentLang === 'en'
                    ? 'bg-amber-400 text-purple-950 font-bold shadow-md'
                    : 'text-purple-300 hover:text-white'
                }`}
              >
                <span>🇬🇧</span>
                <span>English</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Tabs Bar */}
      <div className="bg-[#1e0338]/90 backdrop-blur border-t border-purple-900/80 overflow-x-auto scrollbar-none">
        <div className="max-w-7xl mx-auto px-4 flex space-x-2 sm:space-x-6 text-xs sm:text-sm font-medium whitespace-nowrap py-1">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => onSelectTab(tab.id)}
                className={`relative py-3 px-3 sm:px-4 flex items-center space-x-2 transition-colors rounded-lg ${
                  isActive
                    ? 'text-amber-300 font-bold'
                    : 'text-purple-300 hover:text-amber-200 hover:bg-purple-900/30'
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-amber-400' : 'text-purple-400'}`} />
                <span>{currentLang === 'my' ? tab.labelMy : tab.labelEn}</span>
                {isActive && (
                  <motion.div
                    layoutId="activeTabUnderline"
                    className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-400 to-yellow-300 rounded-t-full"
                    transition={{ type: 'spring', stiffness: 500, damping: 35 }}
                  />
                )}
              </button>
            );
          })}
        </div>
      </div>
    </header>
  );
};
