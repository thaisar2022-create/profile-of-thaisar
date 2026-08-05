import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Language } from '../types';
import { allFlashcards, sampleQuizQuestions } from '../data/courses';
import { 
  Headphones, 
  Volume2, 
  RotateCw, 
  CheckCircle2, 
  XCircle, 
  Sparkles, 
  Trophy,
  HelpCircle,
  ArrowRight,
  Filter
} from 'lucide-react';

interface InteractivePracticeTabProps {
  currentLang: Language;
}

export const InteractivePracticeTab: React.FC<InteractivePracticeTabProps> = ({ currentLang }) => {
  // Flashcard state
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [flippedCards, setFlippedCards] = useState<Record<string, boolean>>({});
  const [speakingText, setSpeakingText] = useState<string | null>(null);

  // Quiz state
  const [currentQuizIdx, setCurrentQuizIdx] = useState<number>(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState<boolean>(false);
  const [score, setScore] = useState<number>(0);
  const [quizCompleted, setQuizCompleted] = useState<boolean>(false);

  const filteredCards = activeCategory === 'all'
    ? allFlashcards
    : allFlashcards.filter((card) => card.category === activeCategory);

  const toggleFlip = (id: string) => {
    setFlippedCards((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const speakText = (text: string, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'th-TH';
      utterance.rate = 0.85;
      setSpeakingText(text);
      utterance.onend = () => setSpeakingText(null);
      utterance.onerror = () => setSpeakingText(null);
      window.speechSynthesis.speak(utterance);
    }
  };

  const handleSelectOption = (idx: number) => {
    if (isAnswered) return;
    setSelectedOption(idx);
    setIsAnswered(true);
    if (sampleQuizQuestions[currentQuizIdx].options[idx].isCorrect) {
      setScore((prev) => prev + 1);
    }
  };

  const handleNextQuestion = () => {
    if (currentQuizIdx < sampleQuizQuestions.length - 1) {
      setCurrentQuizIdx((prev) => prev + 1);
      setSelectedOption(null);
      setIsAnswered(false);
    } else {
      setQuizCompleted(true);
    }
  };

  const handleRestartQuiz = () => {
    setCurrentQuizIdx(0);
    setSelectedOption(null);
    setIsAnswered(false);
    setScore(0);
    setQuizCompleted(false);
  };

  const currentQ = sampleQuizQuestions[currentQuizIdx];

  return (
    <motion.div 
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ duration: 0.3 }}
      className="space-y-8"
    >
      {/* 1. Flashcards Studio */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-purple-100">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-4 border-b border-purple-100">
          <div>
            <div className="flex items-center space-x-2 text-purple-900 mb-1">
              <Headphones className="w-6 h-6 text-purple-700" />
              <h3 className="font-extrabold text-xl sm:text-2xl text-slate-900">
                {currentLang === 'my' ? 'ထိုင်းစကားပြော Flashcards & အသံထွက် လေ့ကျင့်ခန်း' : 'Interactive Thai Audio Flashcard Studio'}
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-slate-500">
              {currentLang === 'my'
                ? 'လုပ်ငန်းခွင်သုံး အဓိက ထိုင်းစကားစုများကို အသံထွက်နှင့်တကွ လက်တွေ့ နားထောင်လေ့ကျင့်ပါ'
                : 'Master essential Thai workplace phrases with audio pronunciation & instant translation.'}
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex items-center space-x-1.5 overflow-x-auto pb-1">
            {[
              { id: 'all', labelMy: 'အားလုံး', labelEn: 'All' },
              { id: 'alphabet', labelMy: 'ဗျည်း (Consonants)', labelEn: 'Consonants' },
              { id: 'vowels', labelMy: 'သရ (Vowels)', labelEn: 'Vowels' },
              { id: 'words', labelMy: 'စကားလုံးများ (Words)', labelEn: 'Words' },
              { id: 'greeting', labelMy: 'နှုတ်ဆက်စကား', labelEn: 'Greetings' },
              { id: 'workplace', labelMy: 'လုပ်ငန်းခွင်', labelEn: 'Workplace' },
              { id: 'safety', labelMy: 'လုံခြုံရေး', labelEn: 'Safety' },
              { id: 'numbers', labelMy: 'ကိန်းဂဏန်း', labelEn: 'Numbers' },
            ].map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all whitespace-nowrap cursor-pointer ${
                  activeCategory === cat.id
                    ? 'bg-purple-900 text-amber-400 shadow-md'
                    : 'bg-purple-50 text-purple-900 hover:bg-purple-100'
                }`}
              >
                {currentLang === 'my' ? cat.labelMy : cat.labelEn}
              </button>
            ))}
          </div>
        </div>

        {/* Flashcards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredCards.map((card) => {
            const isFlipped = flippedCards[card.id];
            return (
              <div
                key={card.id}
                onClick={() => toggleFlip(card.id)}
                className="h-64 cursor-pointer perspective"
              >
                <motion.div
                  animate={{ rotateY: isFlipped ? 180 : 0 }}
                  transition={{ duration: 0.5, ease: 'easeInOut' }}
                  className="w-full h-full relative preserve-3d"
                >
                  {/* Front Side */}
                  <div className="absolute inset-0 w-full h-full rounded-3xl bg-gradient-to-br from-[#2e0750] via-[#3b0764] to-[#581c87] text-white p-5 flex flex-col justify-between border border-purple-800 shadow-lg backface-hidden">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-black uppercase tracking-wider text-amber-300 bg-amber-400/20 px-2.5 py-0.5 rounded-full border border-amber-400/30">
                        {card.category}
                      </span>
                      <button
                        onClick={(e) => speakText(card.thai, e)}
                        className={`p-2 rounded-xl transition-all cursor-pointer ${
                          speakingText === card.thai ? 'bg-amber-400 text-purple-950 animate-bounce' : 'bg-purple-800 hover:bg-purple-700 text-amber-300'
                        }`}
                        title="Listen Audio"
                      >
                        <Volume2 className="w-4 h-4" />
                      </button>
                    </div>

                    <div className="text-center my-auto space-y-2">
                      <div className="text-3xl font-black text-amber-400 tracking-tight">
                        {card.thai}
                      </div>
                      <div className="text-sm text-purple-200 font-medium">
                        {card.phonetic}
                      </div>
                      {card.myanmarPhonetic && (
                        <div className="text-xs text-amber-300 font-bold bg-amber-400/10 inline-block px-3 py-1 rounded-full border border-amber-400/20">
                          {card.myanmarPhonetic}
                        </div>
                      )}
                    </div>

                    <div className="flex items-center justify-between text-[11px] text-purple-300 border-t border-purple-800/80 pt-2">
                      <span>{currentLang === 'my' ? 'အဓိပ္ပာယ် နှင့် အသေးစိတ် ကြည့်ရန် နှိပ်ပါ' : 'Click to flip for meaning & breakdown'}</span>
                      <RotateCw className="w-3.5 h-3.5 text-amber-400" />
                    </div>
                  </div>

                  {/* Back Side */}
                  <div className="absolute inset-0 w-full h-full rounded-3xl bg-amber-400 text-purple-950 p-5 flex flex-col justify-between border-2 border-amber-500 shadow-xl backface-hidden rotate-y-180">
                    <div className="flex justify-between items-center text-xs font-black uppercase tracking-wider">
                      <span>Meaning & Breakdown</span>
                      <span className="bg-purple-950 text-amber-400 px-2 py-0.5 rounded-full text-[10px]">
                        {currentLang === 'my' ? 'မြန်မာ' : 'Myanmar'}
                      </span>
                    </div>

                    <div className="my-auto space-y-2">
                      <div className="text-center">
                        <div className="text-xl font-black text-purple-950">
                          {card.myanmar}
                        </div>
                        <div className="text-xs font-bold text-purple-900/80">
                          {card.english}
                        </div>
                      </div>

                      {/* Word Breakdown List in Myanmar */}
                      {card.wordBreakdown && card.wordBreakdown.length > 0 && (
                        <div className="bg-purple-950/10 rounded-xl p-2.5 space-y-1 text-left text-[11px] border border-purple-900/10 max-h-24 overflow-y-auto">
                          <div className="text-[10px] font-extrabold uppercase text-purple-950/70 mb-1">
                            {currentLang === 'my' ? 'တစ်လုံးချင်း အဓိပ္ပာယ်' : 'Word Breakdown:'}
                          </div>
                          {card.wordBreakdown.map((wb, idx) => (
                            <div key={idx} className="flex justify-between items-center text-purple-950 font-bold border-b border-purple-900/10 pb-0.5 last:border-0">
                              <span><span className="font-extrabold text-purple-900">{wb.thai}</span> ({wb.phonetic}):</span>
                              <span className="text-purple-950">{wb.myanmar}</span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>

                    <div className="flex items-center justify-between text-[11px] font-bold text-purple-900 border-t border-purple-900/20 pt-2">
                      <span>{currentLang === 'my' ? 'ထိုင်းစာ ပြန်ကြည့်ရန် နှိပ်ပါ' : 'Click to view Thai'}</span>
                      <RotateCw className="w-3.5 h-3.5" />
                    </div>
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>

      {/* 2. Interactive Workplace Quiz Game */}
      <div className="bg-gradient-to-br from-[#1e0338] via-[#2e0750] to-[#3b0764] text-white p-6 sm:p-8 rounded-3xl border border-purple-800 shadow-2xl">
        <div className="flex items-center justify-between pb-4 border-b border-purple-800 mb-6">
          <div className="flex items-center space-x-2">
            <Trophy className="w-6 h-6 text-amber-400" />
            <h3 className="font-extrabold text-xl text-white">
              {currentLang === 'my' ? 'ထိုင်းစာ သင်ကြားရေး Quick Assessment Quiz' : 'Interactive Workplace Thai Quiz'}
            </h3>
          </div>
          <span className="text-xs font-bold text-amber-400 bg-amber-400/20 px-3 py-1 rounded-full border border-amber-400/30">
            {quizCompleted ? 'Finished' : `Question ${currentQuizIdx + 1}/${sampleQuizQuestions.length}`}
          </span>
        </div>

        {!quizCompleted ? (
          <div className="space-y-6">
            <div className="bg-purple-950/80 p-5 rounded-2xl border border-purple-800 flex items-center justify-between">
              <div>
                <h4 className="text-base sm:text-lg font-extrabold text-white mb-1">
                  {currentLang === 'my' ? currentQ.questionMy : currentQ.questionEn}
                </h4>
                <span className="text-xs text-purple-300">Choose the correct Thai phrase response below:</span>
              </div>
              <button
                onClick={() => speakText(currentQ.thaiAudioText)}
                className="p-3 bg-amber-400 text-purple-950 font-bold rounded-xl flex items-center space-x-1.5 hover:bg-amber-300 transition-colors cursor-pointer flex-shrink-0"
                title="Hear Correct Pronunciation"
              >
                <Volume2 className="w-4 h-4" />
                <span className="text-xs hidden sm:inline">Audio</span>
              </button>
            </div>

            {/* Options Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {currentQ.options.map((opt, idx) => {
                let btnStyle = 'bg-purple-900/60 border-purple-800 text-purple-100 hover:border-amber-400';
                if (isAnswered) {
                  if (opt.isCorrect) {
                    btnStyle = 'bg-emerald-600 border-emerald-400 text-white font-bold';
                  } else if (selectedOption === idx) {
                    btnStyle = 'bg-rose-600 border-rose-400 text-white font-bold';
                  } else {
                    btnStyle = 'bg-purple-950/40 border-purple-900 text-purple-400 opacity-50';
                  }
                }

                return (
                  <button
                    key={idx}
                    onClick={() => handleSelectOption(idx)}
                    disabled={isAnswered}
                    className={`p-4 rounded-2xl border-2 transition-all text-left text-xs sm:text-sm cursor-pointer flex items-center justify-between ${btnStyle}`}
                  >
                    <span>{currentLang === 'my' ? opt.textMy : opt.textEn}</span>
                    {isAnswered && opt.isCorrect && <CheckCircle2 className="w-5 h-5 text-white flex-shrink-0 ml-2" />}
                    {isAnswered && selectedOption === idx && !opt.isCorrect && <XCircle className="w-5 h-5 text-white flex-shrink-0 ml-2" />}
                  </button>
                );
              })}
            </div>

            {/* Explanation Note */}
            <AnimatePresence>
              {isAnswered && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-purple-950 p-4 rounded-2xl border border-purple-800 text-xs text-purple-200 space-y-3"
                >
                  <p className="font-semibold text-amber-300">
                    💡 {currentLang === 'my' ? currentQ.explanationMy : currentQ.explanationEn}
                  </p>
                  <div className="flex justify-end">
                    <button
                      onClick={handleNextQuestion}
                      className="bg-amber-400 hover:bg-amber-300 text-purple-950 font-extrabold px-5 py-2.5 rounded-xl text-xs flex items-center space-x-1.5 transition-all cursor-pointer"
                    >
                      <span>{currentLang === 'my' ? 'နောက်တစ်ခွန်း သွားရန်' : 'Next Question'}</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ) : (
          <div className="text-center py-8 space-y-4">
            <div className="w-20 h-20 bg-amber-400 rounded-full flex items-center justify-center mx-auto text-purple-950 text-3xl font-black shadow-2xl animate-bounce">
              <Trophy className="w-10 h-10" />
            </div>
            <h4 className="text-2xl font-black text-white">
              {currentLang === 'my' ? 'Quiz ပြီးမြောက်သွားပါပြီ။' : 'Quiz Assessment Complete!'}
            </h4>
            <p className="text-sm text-purple-200">
              Your Score: <span className="font-black text-amber-400 text-xl">{score} / {sampleQuizQuestions.length}</span>
            </p>
            <button
              onClick={handleRestartQuiz}
              className="bg-amber-400 hover:bg-amber-300 text-purple-950 font-extrabold px-6 py-3 rounded-xl text-xs sm:text-sm transition-all cursor-pointer"
            >
              {currentLang === 'my' ? 'ထပ်မံ စမ်းသပ်ဖြေဆိုရန်' : 'Retake Assessment'}
            </button>
          </div>
        )}
      </div>
    </motion.div>
  );
};
