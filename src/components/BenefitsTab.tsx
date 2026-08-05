import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Language } from '../types';
import { translations } from '../data/translations';
import { 
  Handshake, 
  UserCheck, 
  Layers, 
  BarChart3, 
  Package, 
  FileCheck2, 
  Sparkles,
  CheckCircle2,
  Award,
  Calendar,
  Clock
} from 'lucide-react';

interface BenefitsTabProps {
  currentLang: Language;
}

export const BenefitsTab: React.FC<BenefitsTabProps> = ({ currentLang }) => {
  const [candidateName, setCandidateName] = useState('Aung Kyaw Kyaw');
  const [candidateBatch, setCandidateBatch] = useState('Batch 168 (TMM Specialist)');
  const [attendance, setAttendance] = useState(100);
  const [testScore, setTestScore] = useState(94);

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
            <Handshake className="w-6 h-6" />
          </div>
          <div>
            <h3 className="font-extrabold text-xl sm:text-2xl text-slate-900">
              {currentLang === 'my' ? translations.benefits.benefitsMy : translations.benefits.benefitsEn}
            </h3>
            <p className="text-xs sm:text-sm text-slate-500">
              {currentLang === 'my'
                ? 'အလုပ်သမားစေလွှတ်ရေး အေဂျင်စီများ၊ Overseas Employment Agencies၊ စက်ရုံ/ကုမ္ပဏီများအတွက် အထူးဒီဇိုင်းထုတ်ထားသော ဝန်ဆောင်မှုများ'
                : 'Customized solutions engineered for manpower exporters, employment agencies, and enterprise employers.'}
            </p>
          </div>
        </div>

        {/* 4 Benefits Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          {/* Perk 1 */}
          <motion.div 
            whileHover={{ y: -3 }}
            className="p-6 rounded-3xl bg-purple-50/60 border border-purple-200/80 flex items-start space-x-4 shadow-sm"
          >
            <div className="w-12 h-12 rounded-2xl bg-amber-400 text-purple-950 flex items-center justify-center font-bold text-xl flex-shrink-0 shadow-md">
              <UserCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-extrabold text-slate-900 text-base sm:text-lg mb-1.5">
                {currentLang === 'my' ? 'Job-Ready Candidates မွေးထုတ်ပေးခြင်း' : 'Job-Ready Candidates Guarantee'}
              </h4>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                {currentLang === 'my'
                  ? 'ဘာသာစကား အခက်အခဲကြောင့် စက်ရုံ/လုပ်ငန်းခွင်တွင် အမှားအယွင်းမရှိစေဘဲ အမိန့်နှင့် ညွှန်ကြားချက်များကို ချက်ချင်းနားလည်နိုင်သော ဝန်ထမ်းများ ဖြစ်လာခြင်း။'
                  : 'Eliminates workplace miscommunication in factories or offices. Candidates immediately understand instructions, safety protocols, and manager directives.'}
              </p>
            </div>
          </motion.div>

          {/* Perk 2 */}
          <motion.div 
            whileHover={{ y: -3 }}
            className="p-6 rounded-3xl bg-purple-50/60 border border-purple-200/80 flex items-start space-x-4 shadow-sm"
          >
            <div className="w-12 h-12 rounded-2xl bg-purple-800 text-white flex items-center justify-center font-bold text-xl flex-shrink-0 shadow-md">
              <Layers className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-extrabold text-slate-900 text-base sm:text-lg mb-1.5">
                {currentLang === 'my' ? 'Customized Corporate Batches' : 'Customized Industry Vocabulary'}
              </h4>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                {currentLang === 'my'
                  ? 'စက်ရုံသုံး၊ ဝန်ဆောင်မှုသုံး သို့မဟုတ် ရုံးသုံး သီးသန့် Vocabulary စကားလုံးများကို သီးသန့် Group/Batch အလိုက် သင်ကြားပေးနိုင်ခြင်း။'
                  : 'Tailored vocabulary modules customized specifically for your client industry (manufacturing, hospitality, agriculture, construction, or corporate administrative).'}
              </p>
            </div>
          </motion.div>

          {/* Perk 3 */}
          <motion.div 
            whileHover={{ y: -3 }}
            className="p-6 rounded-3xl bg-emerald-50/60 border border-emerald-200/80 flex items-start space-x-4 shadow-sm"
          >
            <div className="w-12 h-12 rounded-2xl bg-emerald-600 text-white flex items-center justify-center font-bold text-xl flex-shrink-0 shadow-md">
              <BarChart3 className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-extrabold text-slate-900 text-base sm:text-lg mb-1.5">
                {currentLang === 'my' ? 'Systematic Progress Reports' : 'Systematic HR Progress Reports'}
              </h4>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                {currentLang === 'my'
                  ? 'သင်တန်းသားများ၏ တက်ရောက်မှုစာရင်းနှင့် စာမေးပွဲ ရလဒ်များကို အေဂျင်စီ/ကုမ္ပဏီ HR သို့ စနစ်တကျ အစီရင်ခံစာ ပေးပို့ပေးခြင်း။'
                  : 'Full transparency: Attendance records, monthly test scores, and performance evaluation metrics delivered systematically to Agency HR.'}
              </p>
            </div>
          </motion.div>

          {/* Perk 4 */}
          <motion.div 
            whileHover={{ y: -3 }}
            className="p-6 rounded-3xl bg-sky-50/60 border border-sky-200/80 flex items-start space-x-4 shadow-sm"
          >
            <div className="w-12 h-12 rounded-2xl bg-sky-600 text-white flex items-center justify-center font-bold text-xl flex-shrink-0 shadow-md">
              <Package className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-extrabold text-slate-900 text-base sm:text-lg mb-1.5">
                {currentLang === 'my' ? 'အပိုဆောင်း Digital Learning Package' : 'Free Digital Flashcard Tools'}
              </h4>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                {currentLang === 'my'
                  ? 'စာသင်ချိန်အပြင် လေ့ကျင့်ရန် Flashcard များ၊ Quiz များကို ထပ်ဆောင်း လက်ဆောင်အနေဖြင့် ပြင်ဆင်ပေးခြင်း။'
                  : 'Includes complimentary digital flashcard decks, mobile quizzes, and review audio files for self-paced reinforcement.'}
              </p>
            </div>
          </motion.div>
        </div>

        {/* Interactive HR Progress Report Generator Sample */}
        <div className="bg-gradient-to-br from-[#1e0338] via-[#2e0750] to-[#3b0764] text-white p-6 sm:p-8 rounded-3xl border border-purple-800 shadow-2xl">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 pb-4 border-b border-purple-800">
            <div>
              <div className="flex items-center space-x-2 text-amber-400 font-bold text-xs uppercase tracking-widest mb-1">
                <Sparkles className="w-4 h-4" />
                <span>Interactive HR Report Preview</span>
              </div>
              <h4 className="text-lg sm:text-xl font-extrabold text-white">
                {currentLang === 'my' ? 'အေဂျင်စီ HR သို့ ပေးပို့မည့် သင်တန်းသား အမှတ်စာရင်း နမူနာ' : 'Sample HR Candidate Evaluation Report'}
              </h4>
            </div>
            <span className="bg-amber-400/20 text-amber-300 border border-amber-400/30 text-xs font-bold px-3 py-1 rounded-full self-start md:self-auto">
              Automated HR Sync
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Controls */}
            <div className="lg:col-span-5 bg-purple-950/80 p-5 rounded-2xl border border-purple-800/80 space-y-4">
              <span className="text-xs font-extrabold uppercase text-amber-400 block tracking-wider">
                {currentLang === 'my' ? 'နမူနာ သင်တန်းသား အချက်အလက် ပြောင်းရန်:' : 'Customize Sample Record:'}
              </span>

              <div>
                <label className="text-xs font-medium text-purple-200 block mb-1">Candidate Name:</label>
                <input
                  type="text"
                  value={candidateName}
                  onChange={(e) => setCandidateName(e.target.value)}
                  className="w-full bg-[#2e0750] border border-purple-700 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-amber-400"
                />
              </div>

              <div>
                <label className="text-xs font-medium text-purple-200 block mb-1">Batch Name:</label>
                <input
                  type="text"
                  value={candidateBatch}
                  onChange={(e) => setCandidateBatch(e.target.value)}
                  className="w-full bg-[#2e0750] border border-purple-700 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-amber-400"
                />
              </div>

              <div>
                <div className="flex justify-between text-xs font-medium text-purple-200 mb-1">
                  <span>Class Attendance:</span>
                  <span className="text-amber-400 font-bold">{attendance}%</span>
                </div>
                <input
                  type="range"
                  min="60"
                  max="100"
                  value={attendance}
                  onChange={(e) => setAttendance(Number(e.target.value))}
                  className="w-full accent-amber-400"
                />
              </div>

              <div>
                <div className="flex justify-between text-xs font-medium text-purple-200 mb-1">
                  <span>Thai Oral & Tone Score:</span>
                  <span className="text-amber-400 font-bold">{testScore}/100</span>
                </div>
                <input
                  type="range"
                  min="50"
                  max="100"
                  value={testScore}
                  onChange={(e) => setTestScore(Number(e.target.value))}
                  className="w-full accent-amber-400"
                />
              </div>
            </div>

            {/* Generated Report View */}
            <div className="lg:col-span-7 bg-white text-slate-900 p-6 rounded-2xl shadow-xl flex flex-col justify-between space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-purple-100">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-full bg-purple-900 text-amber-400 flex items-center justify-center font-black text-lg">
                    ထ
                  </div>
                  <div>
                    <h5 className="font-extrabold text-sm text-purple-950">THAISAR ACADEMY</h5>
                    <span className="text-[10px] text-slate-500 font-semibold block">Official Candidate Assessment</span>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200 flex items-center space-x-1">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Job Ready</span>
                  </span>
                </div>
              </div>

              <div className="space-y-3 text-xs">
                <div className="grid grid-cols-2 gap-2 bg-purple-50/60 p-3 rounded-xl border border-purple-100">
                  <div>
                    <span className="text-slate-500 block text-[10px] font-bold uppercase">Candidate Name:</span>
                    <span className="font-extrabold text-slate-900">{candidateName}</span>
                  </div>
                  <div>
                    <span className="text-slate-500 block text-[10px] font-bold uppercase">Assigned Batch:</span>
                    <span className="font-bold text-purple-900">{candidateBatch}</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="p-3 bg-amber-50 rounded-xl border border-amber-200">
                    <span className="text-slate-600 text-[10px] block font-bold">Class Attendance Rate</span>
                    <span className="text-lg font-black text-amber-800">{attendance}%</span>
                    <span className="text-[10px] text-amber-700 block font-medium">100% Rule Compliant</span>
                  </div>
                  <div className="p-3 bg-purple-50 rounded-xl border border-purple-200">
                    <span className="text-slate-600 text-[10px] block font-bold">Thai Speaking Score</span>
                    <span className="text-lg font-black text-purple-900">{testScore}/100</span>
                    <span className="text-[10px] text-purple-700 block font-medium">Workplace Proficient</span>
                  </div>
                </div>

                <div className="p-3 bg-slate-50 rounded-xl text-[11px] text-slate-600 italic border border-slate-200 leading-relaxed">
                  "Candidate demonstrates strong listening comprehension for factory directives, safety warnings, and daily workplace interactions. Recommended for deployment."
                </div>
              </div>

              <div className="pt-2 border-t border-purple-100 flex items-center justify-between text-[10px] text-slate-500">
                <span>Certified by Thaisar Academic Board</span>
                <span className="font-mono">ID: THAISAR-HR-8829</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
