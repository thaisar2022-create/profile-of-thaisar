import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Language } from '../types';
import { translations } from '../data/translations';
import { 
  Building, 
  Calendar, 
  MapPin, 
  Share2, 
  Eye, 
  Target, 
  Navigation, 
  ExternalLink,
  CheckCircle2,
  Phone,
  Sparkles
} from 'lucide-react';

interface OverviewTabProps {
  currentLang: Language;
}

export const OverviewTab: React.FC<OverviewTabProps> = ({ currentLang }) => {
  const [copiedAddress, setCopiedAddress] = useState(false);

  const handleCopyAddress = () => {
    const address = "အမှတ် (၅၃/3B)၊ အင်းစိန်လမ်းမကြီး၊ လှည်းတန်း၊ ကမာရွတ်မြို့နယ်၊ ရန်ကုန်မြို့။ (လှည်းတန်းမှတ်တိုင်၊ ကိန္ဒရီ Phone Accessories ဆိုင်နှစ်ခုကြား၊ ဒုတိယထပ်)";
    navigator.clipboard.writeText(address);
    setCopiedAddress(true);
    setTimeout(() => setCopiedAddress(false), 2500);
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ duration: 0.3 }}
      className="space-y-8"
    >
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* General Info Card */}
        <div className="bg-white rounded-3xl p-6 sm:p-7 shadow-sm border border-purple-100 flex flex-col justify-between">
          <div>
            <div className="flex items-center space-x-3 text-purple-900 mb-6 pb-4 border-b border-purple-100">
              <div className="p-3 bg-purple-100 text-purple-800 rounded-2xl">
                <Building className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-extrabold text-lg text-slate-900">
                  {currentLang === 'my' ? translations.overview.infoTitleMy : translations.overview.infoTitleEn}
                </h3>
                <span className="text-xs text-purple-600 font-semibold">Official Registration</span>
              </div>
            </div>

            <ul className="space-y-5 text-sm">
              <li className="flex items-start space-x-3.5">
                <div className="p-2 bg-purple-50 text-purple-700 rounded-xl mt-0.5 flex-shrink-0">
                  <Building className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-slate-500 text-xs block font-bold uppercase tracking-wider mb-0.5">
                    {currentLang === 'my' ? translations.overview.nameLabelMy : translations.overview.nameLabelEn}
                  </span>
                  <span className="font-extrabold text-slate-900">
                    {currentLang === 'my' ? translations.overview.nameValueMy : translations.overview.nameValueEn}
                  </span>
                </div>
              </li>

              <li className="flex items-start space-x-3.5">
                <div className="p-2 bg-purple-50 text-purple-700 rounded-xl mt-0.5 flex-shrink-0">
                  <Calendar className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-slate-500 text-xs block font-bold uppercase tracking-wider mb-0.5">
                    {currentLang === 'my' ? translations.overview.dateLabelMy : translations.overview.dateLabelEn}
                  </span>
                  <span className="font-bold text-slate-800">
                    {currentLang === 'my' ? translations.overview.dateValueMy : translations.overview.dateValueEn}
                  </span>
                </div>
              </li>

              <li className="flex items-start space-x-3.5">
                <div className="p-2 bg-amber-100 text-amber-800 rounded-xl mt-0.5 flex-shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-500 text-xs font-bold uppercase tracking-wider mb-0.5">
                      {currentLang === 'my' ? translations.overview.locLabelMy : translations.overview.locLabelEn}
                    </span>
                    <button
                      onClick={handleCopyAddress}
                      className="text-[11px] text-purple-700 hover:text-purple-900 font-bold underline cursor-pointer"
                    >
                      {copiedAddress ? (currentLang === 'my' ? 'ကူးယူပြီးပါပြီ ✓' : 'Copied ✓') : (currentLang === 'my' ? 'လိပ်စာကူးရန်' : 'Copy Address')}
                    </button>
                  </div>
                  <span className="font-medium text-slate-800 leading-relaxed block text-xs sm:text-sm">
                    {currentLang === 'my' ? translations.overview.locValueMy : translations.overview.locValueEn}
                  </span>
                  <span className="text-xs text-purple-950 bg-purple-100/90 px-3 py-2 rounded-xl mt-2 block font-medium border border-purple-200 leading-snug">
                    {currentLang === 'my' ? translations.overview.locNoteMy : translations.overview.locNoteEn}
                  </span>
                </div>
              </li>

              <li className="flex items-start space-x-3.5">
                <div className="p-2 bg-purple-50 text-purple-700 rounded-xl mt-0.5 flex-shrink-0">
                  <Share2 className="w-4 h-4" />
                </div>
                <div className="w-full">
                  <span className="text-slate-500 text-xs block font-bold uppercase tracking-wider mb-2">
                    Digital Channels
                  </span>
                  <div className="space-y-2 text-xs font-medium">
                    <a 
                      href="https://facebook.com" 
                      target="_blank" 
                      rel="noreferrer"
                      className="flex items-center justify-between p-2 rounded-xl bg-blue-50 hover:bg-blue-100 text-blue-700 transition-colors"
                    >
                      <span className="font-bold">Thaisar Facebook Channel</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                    <a 
                      href="https://tiktok.com" 
                      target="_blank" 
                      rel="noreferrer"
                      className="flex items-center justify-between p-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-900 transition-colors"
                    >
                      <span className="font-bold">@thaisar_tiktok</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                    <a 
                      href="https://youtube.com" 
                      target="_blank" 
                      rel="noreferrer"
                      className="flex items-center justify-between p-2 rounded-xl bg-red-50 hover:bg-red-100 text-red-700 transition-colors"
                    >
                      <span className="font-bold">@thaisar-547</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </li>
            </ul>
          </div>

          <div className="mt-6 pt-4 border-t border-purple-100 bg-purple-50/60 p-3.5 rounded-2xl flex items-center space-x-3">
            <Phone className="w-5 h-5 text-purple-700 flex-shrink-0" />
            <div className="text-xs">
              <span className="text-slate-500 block font-semibold">Direct Campus Hotline</span>
              <span className="font-black text-slate-900 text-sm">Hledan Campus, Yangon</span>
            </div>
          </div>
        </div>

        {/* Vision & Mission Cards (2 Columns) */}
        <div className="lg:col-span-2 space-y-6">
          {/* Vision Card */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-purple-100 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-purple-100 rounded-bl-full opacity-50 pointer-events-none" />
            <div className="flex items-center space-x-3 text-purple-900 mb-4 relative z-10">
              <div className="p-3 bg-purple-100 text-purple-800 rounded-2xl">
                <Eye className="w-6 h-6" />
              </div>
              <h3 className="font-extrabold text-xl text-slate-900">
                {currentLang === 'my' ? translations.overview.visionTitleMy : translations.overview.visionTitleEn}
              </h3>
            </div>
            <p className="text-slate-700 leading-relaxed text-sm sm:text-base font-normal relative z-10 bg-purple-50/40 p-5 rounded-2xl border border-purple-100">
              {currentLang === 'my' ? translations.overview.visionTextMy : translations.overview.visionTextEn}
            </p>
          </div>

          {/* Mission Pillars Card */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-purple-100">
            <div className="flex items-center space-x-3 text-purple-900 mb-6">
              <div className="p-3 bg-purple-100 text-purple-800 rounded-2xl">
                <Target className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-extrabold text-xl text-slate-900">
                  {currentLang === 'my' ? translations.overview.missionTitleMy : translations.overview.missionTitleEn}
                </h3>
                <span className="text-xs text-purple-600 font-semibold">3 Strategic Core Objectives</span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {/* Pillar 1 */}
              <div className="p-5 rounded-2xl bg-gradient-to-b from-amber-50/80 to-purple-50/40 border border-amber-200/80 space-y-3 hover:shadow-md transition-shadow">
                <div className="w-9 h-9 rounded-xl bg-amber-400 text-purple-950 flex items-center justify-center font-black text-sm shadow-sm">
                  1
                </div>
                <h4 className="font-extrabold text-slate-900 text-sm sm:text-base">
                  {currentLang === 'my' ? translations.overview.pillar1TitleMy : translations.overview.pillar1TitleEn}
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {currentLang === 'my' ? translations.overview.pillar1DescMy : translations.overview.pillar1DescEn}
                </p>
              </div>

              {/* Pillar 2 */}
              <div className="p-5 rounded-2xl bg-gradient-to-b from-purple-50 to-purple-100/50 border border-purple-200/80 space-y-3 hover:shadow-md transition-shadow">
                <div className="w-9 h-9 rounded-xl bg-purple-800 text-white flex items-center justify-center font-black text-sm shadow-sm">
                  2
                </div>
                <h4 className="font-extrabold text-slate-900 text-sm sm:text-base">
                  {currentLang === 'my' ? translations.overview.pillar2TitleMy : translations.overview.pillar2TitleEn}
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {currentLang === 'my' ? translations.overview.pillar2DescMy : translations.overview.pillar2DescEn}
                </p>
              </div>

              {/* Pillar 3 */}
              <div className="p-5 rounded-2xl bg-gradient-to-b from-emerald-50 to-purple-50/40 border border-emerald-200/80 space-y-3 hover:shadow-md transition-shadow">
                <div className="w-9 h-9 rounded-xl bg-emerald-600 text-white flex items-center justify-center font-black text-sm shadow-sm">
                  3
                </div>
                <h4 className="font-extrabold text-slate-900 text-sm sm:text-base">
                  {currentLang === 'my' ? translations.overview.pillar3TitleMy : translations.overview.pillar3TitleEn}
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {currentLang === 'my' ? translations.overview.pillar3DescMy : translations.overview.pillar3DescEn}
                </p>
              </div>
            </div>
          </div>


        </div>
      </div>
    </motion.div>
  );
};
