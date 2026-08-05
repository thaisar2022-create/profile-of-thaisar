import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Language } from '../types';
import { coursePrograms } from '../data/courses';
import { 
  BookOpen, 
  Clock, 
  CheckCircle2, 
  Volume2, 
  Video, 
  Building2, 
  PlayCircle, 
  Sparkles,
  ChevronRight
} from 'lucide-react';

interface CurriculumTabProps {
  currentLang: Language;
  onSelectTab: (tab: any) => void;
}

export const CurriculumTab: React.FC<CurriculumTabProps> = ({ currentLang, onSelectTab }) => {
  const [selectedCourseId, setSelectedCourseId] = useState<string>('tmm');
  const [speakingText, setSpeakingText] = useState<string | null>(null);

  const handleSpeak = (text: string) => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'th-TH';
      utterance.rate = 0.9;
      setSpeakingText(text);
      utterance.onend = () => setSpeakingText(null);
      utterance.onerror = () => setSpeakingText(null);
      window.speechSynthesis.speak(utterance);
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ duration: 0.3 }}
      className="space-y-8"
    >
      <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-purple-100">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 pb-4 border-b border-purple-100 gap-4">
          <div>
            <div className="flex items-center space-x-2 text-purple-900 mb-1">
              <BookOpen className="w-6 h-6 text-purple-700" />
              <h3 className="font-extrabold text-xl sm:text-2xl text-slate-900">
                {currentLang === 'my' ? 'ဖွင့်လှစ်လျက်ရှိသော သင်တန်းအမျိုးအစားများ' : 'Academic Programs & Curriculum'}
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-slate-500">
              {currentLang === 'my'
                ? 'ကုမ္ပဏီ/အေဂျင်စီများ၏ လိုအပ်ချက်အလိုက် ဝန်ထမ်းများနှင့် သင်တန်းသားများအတွက် အဆင်ပြေဆုံး ရွေးချယ်နိုင်သော သင်ရိုးများ'
                : 'Customized courses tailored for corporate, workforce, and university candidate requirements.'}
            </p>
          </div>
          <span className="bg-purple-100 text-purple-900 text-xs font-bold px-3.5 py-1.5 rounded-xl border border-purple-200 self-start sm:self-auto">
            Flexible Delivery Formats
          </span>
        </div>

        {/* Course Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {coursePrograms.map((course) => {
            const isSelected = selectedCourseId === course.id;
            return (
              <motion.div
                key={course.id}
                whileHover={{ y: -4 }}
                className={`border-2 rounded-3xl p-6 transition-all bg-gradient-to-b from-purple-50/40 via-white to-white flex flex-col justify-between shadow-sm relative overflow-hidden ${
                  isSelected ? 'border-amber-400 ring-2 ring-amber-400/20' : 'border-purple-100 hover:border-purple-300'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className={`px-3 py-1 rounded-xl text-xs font-black shadow-sm ${course.badgeColor}`}>
                      {course.code}
                    </span>
                    <span className="text-xs text-slate-500 font-bold flex items-center space-x-1">
                      <Clock className="w-3.5 h-3.5 text-purple-600" />
                      <span>{currentLang === 'my' ? course.durationMy : course.durationEn}</span>
                    </span>
                  </div>

                  <h4 className="font-black text-slate-900 text-base sm:text-lg mb-3 leading-snug">
                    {currentLang === 'my' ? course.titleMy : course.titleEn}
                  </h4>

                  <p className="text-xs text-slate-600 leading-relaxed mb-5 bg-purple-50/70 p-3.5 rounded-2xl border border-purple-100">
                    {currentLang === 'my' ? course.descMy : course.descEn}
                  </p>

                  {/* Syllabus Features */}
                  <div className="space-y-2 mb-6">
                    <span className="text-[11px] font-extrabold uppercase tracking-wider text-purple-900 block mb-2">
                      {currentLang === 'my' ? 'သင်ရိုးပါ အဓိက အချက်များ:' : 'Key Curriculum Modules:'}
                    </span>
                    {(currentLang === 'my' ? course.featuresMy : course.featuresEn).map((feat, idx) => (
                      <div key={idx} className="flex items-start space-x-2 text-xs text-slate-700">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Sample Vocab Preview */}
                <div className="pt-4 border-t border-purple-100 space-y-3">
                  <span className="text-[11px] font-bold text-amber-700 flex items-center space-x-1">
                    <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                    <span>{currentLang === 'my' ? 'သင်တန်းပါ နမူနာ စကားပြော ပြန်ကြားရန်:' : 'Sample Spoken Phrase:'}</span>
                  </span>

                  {course.sampleFlashcards.slice(0, 2).map((fc, idx) => (
                    <div key={idx} className="bg-purple-950 text-white p-3 rounded-2xl flex items-center justify-between text-xs border border-purple-900">
                      <div className="space-y-1">
                        <div className="font-bold text-amber-400 text-sm">{fc.thai}</div>
                        <div className="text-[11px] text-purple-200">
                          {fc.phonetic} {fc.myanmarPhonetic ? `(${fc.myanmarPhonetic})` : ''}
                        </div>
                        <div className="text-xs font-extrabold text-amber-300 flex items-center gap-1.5 pt-0.5">
                          <span className="text-[10px] bg-amber-400/20 px-1.5 py-0.5 rounded text-amber-300 border border-amber-400/30 font-bold">
                            {currentLang === 'my' ? 'မြန်မာအဓိပ္ပာယ်' : 'Myanmar'}
                          </span>
                          <span>{fc.myanmar}</span>
                        </div>
                      </div>
                      <button
                        onClick={() => handleSpeak(fc.audioText)}
                        title="Listen Thai Pronunciation"
                        className={`p-2 rounded-xl transition-all cursor-pointer ${
                          speakingText === fc.audioText ? 'bg-amber-400 text-purple-950 animate-bounce' : 'bg-purple-800 hover:bg-purple-700 text-amber-300'
                        }`}
                      >
                        <Volume2 className="w-4 h-4" />
                      </button>
                    </div>
                  ))}

                  <button
                    onClick={() => {
                      setSelectedCourseId(course.id);
                      onSelectTab('practice');
                    }}
                    className="w-full mt-2 bg-purple-100 hover:bg-purple-200 text-purple-950 font-bold py-2.5 rounded-xl text-xs flex items-center justify-center space-x-1.5 transition-colors cursor-pointer"
                  >
                    <span>{currentLang === 'my' ? 'လက်တွေ့ Flashcards & Quiz စမ်းရန်' : 'Try Flashcards & Practice'}</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Learning Methodology & Formats */}
        <div className="mt-10 bg-gradient-to-r from-[#2e0750] via-[#3b0764] to-[#581c87] text-white rounded-3xl p-6 sm:p-8 border border-purple-800 shadow-xl">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="space-y-2 max-w-2xl">
              <h4 className="font-extrabold text-amber-400 text-lg flex items-center space-x-2">
                <Video className="w-5 h-5 text-amber-400" />
                <span>{currentLang === 'my' ? 'သင်ကြားမှုပုံစံနှင့် လေ့ကျင့်ရေးစနစ်များ' : 'Flexible Learning Formats'}</span>
              </h4>
              <p className="text-xs sm:text-sm text-purple-200 leading-relaxed">
                {currentLang === 'my'
                  ? 'ရန်ကုန် လှည်းတန်း အပြင်တန်း၊ Zoom Live Face to Face သင်တန်းနှင့် Video Class များကို စိတ်ကြိုက်ရွေးချယ်နိုင်သည်။ စာသင်ချိန်အပြင် Flashcards, Quizzes များဖြင့် လက်တွေ့လေ့ကျင့်ပေးပါသည်။'
                  : 'Available via On-Campus classes at Hledan (Yangon), Live Interactive Zoom classes, and self-paced Video lessons. Enhanced with interactive Flashcard and Quiz practice tools.'}
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 text-xs font-semibold whitespace-nowrap">
              <span className="bg-[#1e0338] border border-purple-700/80 px-4 py-2.5 rounded-2xl text-purple-200 flex items-center space-x-2">
                <Building2 className="w-4 h-4 text-amber-400" />
                <span>Hledan Campus</span>
              </span>
              <span className="bg-[#1e0338] border border-purple-700/80 px-4 py-2.5 rounded-2xl text-purple-200 flex items-center space-x-2">
                <Video className="w-4 h-4 text-sky-400" />
                <span>Zoom Live</span>
              </span>
              <span className="bg-[#1e0338] border border-purple-700/80 px-4 py-2.5 rounded-2xl text-purple-200 flex items-center space-x-2">
                <PlayCircle className="w-4 h-4 text-emerald-400" />
                <span>Video Lessons</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
