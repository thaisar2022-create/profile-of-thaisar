import React from 'react';
import { Language, TabType } from '../types';
import { translations } from '../data/translations';
import { Building2, MapPin, Phone, Share2, Facebook, Video, Youtube } from 'lucide-react';

interface FooterProps {
  currentLang: Language;
  onSelectTab: (tab: TabType) => void;
}

export const Footer: React.FC<FooterProps> = ({ currentLang, onSelectTab }) => {
  return (
    <footer className="bg-[#1e0338] text-purple-200 border-t border-purple-900/80 mt-16 no-print">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8 pb-8 border-b border-purple-900/80 text-xs sm:text-sm">
          {/* Col 1: Brand */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center space-x-3">
              <img 
                src="https://lh3.googleusercontent.com/pw/AP1GczMwFLSw2jZ1uvbxB1NybvU19q_q4wQ_zIyacLAw5-JekiGYYaKWpJSF0IJG_uOrfRDBSg1XUVRmPf7rcM5v69f6HeH09rHtXRPCXAc4bLjP7phKNRU=w2400" 
                alt="Thaisar Logo" 
                className="w-10 h-10 rounded-full object-cover border border-amber-400 flex-shrink-0"
                referrerPolicy="no-referrer"
              />
              <div>
                <span className="font-extrabold text-amber-400 text-lg block">
                  {currentLang === 'my' ? '"ထိုင်းစာ" ထိုင်းဘာသာစကားသင်တန်းကျောင်း' : 'Thaisar Thai Language School'}
                </span>
                <span className="text-purple-300 text-xs">Official B2B Manpower & Agency Collaboration Profile</span>
              </div>
            </div>

            <p className="text-purple-300 leading-relaxed max-w-lg">
              {currentLang === 'my' ? translations.hero.sloganMy : translations.hero.sloganEn}
            </p>

            <div className="flex items-center space-x-3 pt-2">
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noreferrer"
                className="p-2.5 bg-purple-900/80 hover:bg-purple-800 text-blue-400 rounded-xl transition-colors"
                title="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a 
                href="https://tiktok.com" 
                target="_blank" 
                rel="noreferrer"
                className="p-2.5 bg-purple-900/80 hover:bg-purple-800 text-white rounded-xl transition-colors"
                title="TikTok"
              >
                <Video className="w-4 h-4" />
              </a>
              <a 
                href="https://youtube.com" 
                target="_blank" 
                rel="noreferrer"
                className="p-2.5 bg-purple-900/80 hover:bg-purple-800 text-red-400 rounded-xl transition-colors"
                title="YouTube"
              >
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="space-y-3">
            <span className="text-xs font-black text-amber-400 uppercase tracking-wider block">
              Quick Navigation
            </span>
            <ul className="space-y-2 text-xs">
              <li>
                <button onClick={() => onSelectTab('overview')} className="hover:text-amber-300 transition-colors cursor-pointer">
                  Overview & Vision
                </button>
              </li>
              <li>
                <button onClick={() => onSelectTab('curriculum')} className="hover:text-amber-300 transition-colors cursor-pointer">
                  Training Programs
                </button>
              </li>
              <li>
                <button onClick={() => onSelectTab('benefits')} className="hover:text-amber-300 transition-colors cursor-pointer">
                  Agency/B2B Perks
                </button>
              </li>
              <li>
                <button onClick={() => onSelectTab('milestones')} className="hover:text-amber-300 transition-colors cursor-pointer">
                  Track Record & Milestones
                </button>
              </li>
              <li>
                <button onClick={() => onSelectTab('proposal')} className="hover:text-amber-300 transition-colors cursor-pointer">
                  Fee Proposal Calculator
                </button>
              </li>
              <li>
                <button onClick={() => onSelectTab('practice')} className="hover:text-amber-300 transition-colors cursor-pointer">
                  Interactive Practice
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Campus Contact */}
          <div className="space-y-3">
            <span className="text-xs font-black text-amber-400 uppercase tracking-wider block">
              Hledan Campus
            </span>
            <div className="space-y-2 text-xs text-purple-200 leading-relaxed">
              <div className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                <span>
                  {currentLang === 'my'
                    ? 'အမှတ် (၅၃/3B)၊ အင်းစိန်လမ်းမကြီး၊ လှည်းတန်း၊ ကမာရွတ်မြို့နယ်၊ ရန်ကုန်မြို့။ (ကိန္ဒရီ ဖုန်းဆိုင်နှစ်ခုကြား ဒုတိယထပ်)'
                    : 'No. (53/3B), Insein Road, Hledan, Kamayut Township, Yangon.'}
                </span>
              </div>
              <div className="flex items-center space-x-2 pt-1 text-amber-300 font-bold">
                <Building2 className="w-4 h-4 text-amber-400" />
                <span>Hledan Bus Stop, Yangon</span>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center text-xs text-purple-400 space-y-1">
          <p>© 2022-2026 Thaisar Thai Language School. All Rights Reserved.</p>
          <p className="text-purple-500 font-medium">Empowering Workforce Language Skills across Myanmar & Thailand</p>
        </div>
      </div>
    </footer>
  );
};
