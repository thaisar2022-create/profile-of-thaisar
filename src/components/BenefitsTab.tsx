import React from 'react';
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
  Award,
  Calendar,
  Clock
} from 'lucide-react';

interface BenefitsTabProps {
  currentLang: Language;
}

export const BenefitsTab: React.FC<BenefitsTabProps> = ({ currentLang }) => {
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
      </div>
    </motion.div>
  );
};
