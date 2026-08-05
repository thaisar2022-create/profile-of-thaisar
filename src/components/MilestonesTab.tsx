import React from 'react';
import { motion } from 'motion/react';
import { Language } from '../types';
import { milestoneItems } from '../data/courses';
import { 
  Trophy, 
  Bookmark, 
  MessageSquare, 
  Users, 
  Award, 
  Calendar,
  CheckCircle2,
  Building2,
  Sparkles
} from 'lucide-react';

interface MilestonesTabProps {
  currentLang: Language;
}

export const MilestonesTab: React.FC<MilestonesTabProps> = ({ currentLang }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ duration: 0.3 }}
      className="space-y-8"
    >
      <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-purple-100">
        <div className="flex items-center space-x-3 text-purple-900 mb-6 pb-4 border-b border-purple-100">
          <div className="p-3 bg-purple-100 text-purple-800 rounded-2xl">
            <Trophy className="w-6 h-6" />
          </div>
          <div>
            <h3 className="font-extrabold text-xl sm:text-2xl text-slate-900">
              {currentLang === 'my' ? 'ကျောင်းအောင်မြင်မှုနှင့် အတွေ့အကြုံများ' : 'Track Record & Key Milestones'}
            </h3>
            <p className="text-xs sm:text-sm text-slate-500">
              {currentLang === 'my'
                ? '၂၀၂၂ ခုနှစ်မှစ၍ နည်းစနစ်မှန်မှန်ဖြင့် အချိန်တိုအတွင်း အောင်မြင်စွာ သင်ကြားပေးခဲ့သည့် မှတ်တမ်းများ'
                : 'Proven track record of high-impact language education since February 2022.'}
            </p>
          </div>
        </div>

        {/* Highlight Stat Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="p-6 rounded-3xl bg-gradient-to-br from-purple-900 to-[#2e0750] text-white shadow-lg border border-purple-800 space-y-2 relative overflow-hidden"
          >
            <div className="absolute right-3 bottom-3 opacity-10 font-black text-8xl pointer-events-none">
              170+
            </div>
            <div className="flex items-center space-x-2 text-amber-400 font-extrabold text-xs">
              <Bookmark className="w-4 h-4" />
              <span>4 Skills Standard Batches</span>
            </div>
            <div className="text-3xl sm:text-4xl font-black text-amber-400">
              {currentLang === 'my' ? '၃,၀၀၀ ကျော်' : '3,000+ Alumni'}
            </div>
            <p className="text-xs text-purple-200 leading-relaxed pt-2 border-t border-purple-800">
              {currentLang === 'my'
                ? '၂၀၂၂ ခုနှစ်မှစ၍ သင်တန်းပေါင်း Batch-170 ကျော် အောင်မြင်စွာ သင်ကြားပြီးမြောက်ခဲ့ခြင်း။'
                : 'Over 170+ batches successfully graduated since 2022.'}
            </p>
          </motion.div>

          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="p-6 rounded-3xl bg-gradient-to-br from-[#3b0764] to-[#581c87] text-white shadow-lg border border-purple-800 space-y-2 relative overflow-hidden"
          >
            <div className="absolute right-3 bottom-3 opacity-10 font-black text-8xl pointer-events-none">
              TMM
            </div>
            <div className="flex items-center space-x-2 text-amber-400 font-extrabold text-xs">
              <MessageSquare className="w-4 h-4" />
              <span>Speaking Specialists</span>
            </div>
            <div className="text-3xl sm:text-4xl font-black text-amber-300">
              {currentLang === 'my' ? '၂,၀၀၀ ကျော်' : '2,000+ Alumni'}
            </div>
            <p className="text-xs text-purple-200 leading-relaxed pt-2 border-t border-purple-800">
              {currentLang === 'my'
                ? '၂၀၂၃ ခုနှစ်မှစ၍ စကားပြောသီးသန့် သင်တန်းသား ၂,၀၀၀ ကျော်အား လေ့ကျင့်ပေးခဲ့ခြင်း။'
                : 'Trained 2,000+ speaking specialists since 2023 (Ongoing TMM program).'}
            </p>
          </motion.div>

          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="p-6 rounded-3xl bg-gradient-to-br from-amber-400 via-yellow-400 to-amber-500 text-purple-950 shadow-xl border border-amber-300 space-y-2 relative overflow-hidden"
          >
            <div className="absolute right-3 bottom-3 opacity-20 font-black text-8xl pointer-events-none">
              5K+
            </div>
            <div className="flex items-center space-x-2 text-purple-950 font-black text-xs uppercase tracking-wider">
              <Award className="w-4 h-4" />
              <span>Total Grand Alumni</span>
            </div>
            <div className="text-3xl sm:text-4xl font-black text-purple-950">
              {currentLang === 'my' ? '၅,၀၀၀ ကျော်' : '5,000+ Total'}
            </div>
            <p className="text-xs text-purple-950/90 font-medium leading-relaxed pt-2 border-t border-purple-950/20">
              {currentLang === 'my'
                ? 'ထိုင်းနိုင်ငံအပါအဝင် လုပ်ငန်းခွင်အသီးသီးတွင် အမှန်တကယ် လက်တွေ့အသုံးချနေသူများ။'
                : '5,000+ graduates actively working in Thailand and international workplaces.'}
            </p>
          </motion.div>
        </div>

        {/* Milestone Table */}
        <div className="overflow-x-auto rounded-2xl border border-purple-100 shadow-sm">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-[#2e0750] text-white text-xs uppercase tracking-wider">
                <th className="p-4 rounded-tl-2xl font-bold">
                  {currentLang === 'my' ? 'သင်တန်းအမျိုးအစား' : 'Program Type'}
                </th>
                <th className="p-4 font-bold text-center">
                  {currentLang === 'my' ? 'သင်တန်းသား ဦးရေ' : 'Student Count'}
                </th>
                <th className="p-4 rounded-tr-2xl font-bold">
                  {currentLang === 'my' ? 'အသေးစိတ် Milestone' : 'Detailed Milestone'}
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-purple-100 text-xs sm:text-sm font-medium">
              <tr className="hover:bg-purple-50/50 transition-colors">
                <td className="p-4 font-extrabold text-slate-800">
                  <div className="flex items-center space-x-2">
                    <Bookmark className="w-4 h-4 text-purple-700" />
                    <span>4 Skills + Grammar Courses</span>
                  </div>
                </td>
                <td className="p-4 text-center font-black text-purple-900 text-base">
                  {currentLang === 'my' ? '၃,၀၀၀ ကျော်' : '3,000+'}
                </td>
                <td className="p-4 text-slate-600">
                  {currentLang === 'my'
                    ? '၂၀၂၂ ခုနှစ်မှစ၍ သင်တန်းပေါင်း Batch-170 ကျော် အောင်မြင်စွာ သင်ကြားပြီးမြောက်ခဲ့ခြင်း။'
                    : 'Over 170+ batches successfully graduated since 2022.'}
                </td>
              </tr>

              <tr className="hover:bg-purple-50/50 transition-colors">
                <td className="p-4 font-extrabold text-slate-800">
                  <div className="flex items-center space-x-2">
                    <MessageSquare className="w-4 h-4 text-amber-600" />
                    <span>Speaking Specialist Courses</span>
                  </div>
                </td>
                <td className="p-4 text-center font-black text-amber-700 text-base">
                  {currentLang === 'my' ? '၂,၀၀၀ ကျော်' : '2,000+'}
                </td>
                <td className="p-4 text-slate-600">
                  {currentLang === 'my'
                    ? '၂၀၂၃ ခုနှစ်မှစ၍ စကားပြောသီးသန့် သင်တန်းသား ၂,၀၀၀ ကျော်အား လေ့ကျင့်ပေးခဲ့ခြင်း။ (TMM အတန်း ဆက်လက်သင်ကြားလျက်ရှိ)'
                    : 'Trained 2,000+ speaking specialists since 2023 (Ongoing TMM program).'}
                </td>
              </tr>

              <tr className="bg-purple-100/80 font-bold border-t-2 border-purple-800 text-purple-950">
                <td className="p-4">
                  <div className="flex items-center space-x-2">
                    <Users className="w-4 h-4 text-purple-950" />
                    <span>{currentLang === 'my' ? 'Total Alumni (စုစုပေါင်း)' : 'Total Alumni'}</span>
                  </div>
                </td>
                <td className="p-4 text-center font-black text-purple-950 text-lg">
                  {currentLang === 'my' ? '၅,၀၀၀ ကျော်' : '5,000+'}
                </td>
                <td className="p-4 text-purple-950">
                  {currentLang === 'my'
                    ? 'ထိုင်းနိုင်ငံအပါအဝင် လုပ်ငန်းခွင်အသီးသီးတွင် အမှန်တကယ် လက်တွေ့အသုံးချနေသူများ။'
                    : '5,000+ graduates actively working in Thailand and international workplaces.'}
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Visual Timeline */}
        <div className="mt-10 pt-8 border-t border-purple-100">
          <h4 className="font-extrabold text-lg text-slate-900 mb-6 flex items-center space-x-2">
            <Calendar className="w-5 h-5 text-purple-700" />
            <span>{currentLang === 'my' ? 'ကျောင်း၏ တိုးတက်မှု ခရီးစဉ် (Growth Timeline)' : 'Growth Timeline'}</span>
          </h4>

          <div className="relative border-l-2 border-purple-200 ml-4 space-y-6">
            <div className="relative pl-6">
              <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-amber-400 border-2 border-purple-950 shadow-sm" />
              <span className="text-xs font-black text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full border border-amber-200">
                22 Feb 2022
              </span>
              <h5 className="font-extrabold text-sm text-slate-900 mt-1">Founding of Thaisar Academy</h5>
              <p className="text-xs text-slate-600">
                Launched full-scale Thai language education in Hledan, Yangon with standardized 4 Skills & Grammar curriculum.
              </p>
            </div>

            <div className="relative pl-6">
              <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-purple-700 border-2 border-purple-950 shadow-sm" />
              <span className="text-xs font-black text-purple-800 bg-purple-100 px-2.5 py-0.5 rounded-full border border-purple-200">
                2023
              </span>
              <h5 className="font-extrabold text-sm text-slate-900 mt-1">Expansion to Speaking Specialist (TMM) & Zoom Live</h5>
              <p className="text-xs text-slate-600">
                Introduced fast-track 2-month TMM speaking courses and interactive Zoom online classrooms for nationwide access.
              </p>
            </div>

            <div className="relative pl-6">
              <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-emerald-600 border-2 border-purple-950 shadow-sm" />
              <span className="text-xs font-black text-emerald-800 bg-emerald-100 px-2.5 py-0.5 rounded-full border border-emerald-200">
                2024 - 2026
              </span>
              <h5 className="font-extrabold text-sm text-slate-900 mt-1">B2B Manpower Agency Partnerships & 5,000+ Alumni Milestone</h5>
              <p className="text-xs text-slate-600">
                Crossed 170+ batches, establishing structured B2B agency training packages and job-ready workforce guarantees.
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
