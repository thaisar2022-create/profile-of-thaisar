import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Language, ProposalCalculation } from '../types';
import { translations } from '../data/translations';
import { 
  Calculator, 
  ShieldCheck, 
  Gift, 
  Printer, 
  CheckCircle2, 
  Table, 
  Sparkles, 
  AlertCircle,
  HelpCircle,
  Check
} from 'lucide-react';

interface ProposalTabProps {
  currentLang: Language;
  onOpenPrintModalWithData: (data: ProposalCalculation) => void;
}

export const ProposalTab: React.FC<ProposalTabProps> = ({ 
  currentLang, 
  onOpenPrintModalWithData 
}) => {
  const [qty, setQty] = useState<number>(10);
  const [courseId, setCourseId] = useState<'tmm' | 'tls' | 'one_on_one' | 'agency_collab'>('tmm');
  const [mode, setMode] = useState<'zoom' | 'campus'>('zoom');

  // Rules compliance checklist state
  const [rule1Checked, setRule1Checked] = useState(true);
  const [rule2Checked, setRule2Checked] = useState(true);
  const [rule3Checked, setRule3Checked] = useState(true);

  // Price Calculation Logic based on official Thaisar rate sheet
  let standardFee = 0;
  let specialFee = 0;

  if (courseId === 'tmm') {
    if (qty <= 10) {
      standardFee = 3000000;
      specialFee = 2000000;
    } else if (qty <= 20) {
      standardFee = 5000000;
      specialFee = 3000000;
    } else {
      standardFee = 12500000;
      specialFee = 8000000;
    }
  } else if (courseId === 'tls') {
    if (qty <= 10) {
      standardFee = 6000000;
      specialFee = 4000000;
    } else if (qty <= 20) {
      standardFee = 11000000;
      specialFee = 7000000;
    } else {
      standardFee = 25000000;
      specialFee = 15000000;
    }
  } else if (courseId === 'one_on_one') {
    // 3. One on One Special Class
    if (qty <= 10) {
      standardFee = 8000000;
      specialFee = 5000000;
    } else if (qty <= 20) {
      standardFee = 15000000;
      specialFee = 9500000;
    } else {
      standardFee = 32000000;
      specialFee = 20000000;
    }
  } else if (courseId === 'agency_collab') {
    // 4. Special Collaboration Class with Agency
    if (qty <= 10) {
      standardFee = 7500000;
      specialFee = 5000000;
    } else if (qty <= 20) {
      standardFee = 13500000;
      specialFee = 8500000;
    } else {
      standardFee = 30000000;
      specialFee = 18000000;
    }
  }

  const savings = standardFee - specialFee;

  const formatMMK = (num: number) => {
    return num.toLocaleString('en-US') + '/- ကျပ်';
  };

  const handleExport = () => {
    onOpenPrintModalWithData({
      qty,
      courseId,
      mode,
      standardFee,
      specialFee,
      savings
    });
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ duration: 0.3 }}
      className="space-y-8"
    >
      {/* Fee Calculator Block */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-purple-100">
        <div className="flex items-center space-x-3 text-purple-900 mb-6 pb-4 border-b border-purple-100">
          <div className="p-3 bg-purple-100 text-purple-800 rounded-2xl">
            <Calculator className="w-6 h-6" />
          </div>
          <div>
            <h3 className="font-extrabold text-xl sm:text-2xl text-slate-900">
              {currentLang === 'my' ? translations.proposal.calcTitleMy : translations.proposal.calcTitleEn}
            </h3>
            <p className="text-xs sm:text-sm text-slate-500">
              {currentLang === 'my' ? translations.proposal.calcSubMy : translations.proposal.calcSubEn}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Controls Column */}
          <div className="lg:col-span-5 space-y-6 bg-purple-50/60 p-6 rounded-3xl border border-purple-100">
            {/* 1. Quantity Slider */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-xs font-black text-slate-800 uppercase tracking-wider">
                  {currentLang === 'my' ? translations.proposal.qtyLabelMy : translations.proposal.qtyLabelEn}
                </label>
                <span className="text-xs font-black text-purple-950 bg-amber-400 px-3 py-1 rounded-full shadow-sm border border-amber-500">
                  {qty} Candidates
                </span>
              </div>
              <input
                type="range"
                min="5"
                max="50"
                step="5"
                value={qty}
                onChange={(e) => setQty(Number(e.target.value))}
                className="w-full h-2.5 bg-purple-200 rounded-lg appearance-none cursor-pointer accent-purple-800"
              />
              <div className="flex justify-between text-[11px] font-bold text-slate-500 mt-1.5">
                <span>5 Workers</span>
                <span>20 Workers</span>
                <span>50 Workers</span>
              </div>
            </div>

            {/* 2. Course Program Select */}
            <div>
              <label className="block text-xs font-black text-slate-800 uppercase tracking-wider mb-2">
                {currentLang === 'my' ? translations.proposal.courseLabelMy : translations.proposal.courseLabelEn}
              </label>
              <select
                value={courseId}
                onChange={(e) => setCourseId(e.target.value as 'tmm' | 'tls' | 'one_on_one' | 'agency_collab')}
                className="w-full bg-white border-2 border-purple-200 rounded-2xl p-3 text-xs sm:text-sm font-extrabold text-slate-900 focus:outline-none focus:border-purple-700 shadow-sm"
              >
                <option value="tmm">{currentLang === 'my' ? translations.proposal.courseTMMMy : translations.proposal.courseTMMEn}</option>
                <option value="tls">{currentLang === 'my' ? translations.proposal.courseTLSMy : translations.proposal.courseTLSEn}</option>
                <option value="one_on_one">{currentLang === 'my' ? translations.proposal.courseOneOnOneMy : translations.proposal.courseOneOnOneEn}</option>
                <option value="agency_collab">{currentLang === 'my' ? translations.proposal.courseAgencyCollabMy : translations.proposal.courseAgencyCollabEn}</option>
              </select>
            </div>

            {/* 3. Delivery Format */}
            <div>
              <label className="block text-xs font-black text-slate-800 uppercase tracking-wider mb-2">
                {currentLang === 'my' ? translations.proposal.modeLabelMy : translations.proposal.modeLabelEn}
              </label>
              <select
                value={mode}
                onChange={(e) => setMode(e.target.value as 'zoom' | 'campus')}
                className="w-full bg-white border-2 border-purple-200 rounded-2xl p-3 text-xs sm:text-sm font-extrabold text-slate-900 focus:outline-none focus:border-purple-700 shadow-sm"
              >
                <option value="zoom">Zoom Live Face to Face</option>
                <option value="campus">On-Campus / အပြင်တန်း အုပ်စုဖွဲ့</option>
              </select>
              
              <div className={`mt-2 p-3 rounded-2xl text-xs transition-colors ${
                mode === 'campus' ? 'bg-amber-100 text-amber-900 border border-amber-300 font-medium' : 'text-slate-500 italic'
              }`}>
                {currentLang === 'my' ? translations.proposal.travelNoteMy : translations.proposal.travelNoteEn}
              </div>
            </div>

            {/* Print Export Button */}
            <button
              onClick={handleExport}
              className="w-full bg-[#2e0750] hover:bg-[#3b0764] text-amber-400 font-extrabold py-3.5 rounded-2xl text-xs sm:text-sm shadow-xl flex items-center justify-center space-x-2 transition-all cursor-pointer active:scale-95"
            >
              <Printer className="w-4 h-4" />
              <span>{currentLang === 'my' ? translations.proposal.exportBtnMy : translations.proposal.exportBtnEn}</span>
            </button>
          </div>

          {/* Live Quote Summary Card */}
          <div className="lg:col-span-7 bg-gradient-to-br from-[#1e0338] via-[#2e0750] to-[#3b0764] text-white p-6 sm:p-8 rounded-3xl border border-purple-800 shadow-2xl flex flex-col justify-between space-y-6">
            <div>
              <div className="flex justify-between items-start mb-6 pb-4 border-b border-purple-800">
                <div>
                  <span className="text-[10px] sm:text-xs text-amber-400 font-black uppercase tracking-widest flex items-center space-x-1">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>{currentLang === 'my' ? translations.proposal.summaryTitleMy : translations.proposal.summaryTitleEn}</span>
                  </span>
                  <h4 className="text-lg sm:text-xl font-extrabold text-white mt-1">
                    {courseId === 'tmm' && 'TMM Speaking Specialist Package'}
                    {courseId === 'tls' && 'TLS 4-Skills Standard Package'}
                    {courseId === 'one_on_one' && (currentLang === 'my' ? '1-on-1 VIP Coaching Special Package' : '1-on-1 VIP Coaching Special Package')}
                    {courseId === 'agency_collab' && (currentLang === 'my' ? 'Special Agency Collaboration Exclusive Batch' : 'Special Agency Collaboration Exclusive Batch')}
                  </h4>
                </div>
                <span className="bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-xs font-bold px-3 py-1 rounded-full whitespace-nowrap">
                  Special Agency Offer
                </span>
              </div>

              <ul className="space-y-3.5 text-xs sm:text-sm text-purple-100">
                <li className="flex justify-between py-1.5 border-b border-purple-800/80">
                  <span className="text-purple-300">{currentLang === 'my' ? translations.proposal.targetQtyMy : translations.proposal.targetQtyEn}</span>
                  <span className="font-extrabold text-white">{qty} Candidates</span>
                </li>

                <li className="flex justify-between py-1.5 border-b border-purple-800/80">
                  <span className="text-purple-300">{currentLang === 'my' ? translations.proposal.selectedCourseMy : translations.proposal.selectedCourseEn}</span>
                  <span className="font-extrabold text-amber-300">
                    {courseId === 'tmm' && 'TMM Class (Zoom - ၃၀ နာရီ)'}
                    {courseId === 'tls' && 'TLS Class (Zoom - ၅၀ နာရီ)'}
                    {courseId === 'one_on_one' && (currentLang === 'my' ? 'One on One Special Class (၁ ချင်းစီ သီးသန့်)' : 'One on One Special Class (Private)')}
                    {courseId === 'agency_collab' && (currentLang === 'my' ? 'Special Collaboration Class with Agency (အေဂျင်စီ သီးသန့်)' : 'Special Collaboration Class with Agency')}
                  </span>
                </li>

                <li className="flex justify-between py-1.5 border-b border-purple-800/80">
                  <span className="text-purple-300">{currentLang === 'my' ? translations.proposal.deliveryFormatMy : translations.proposal.deliveryFormatEn}</span>
                  <span className="font-bold text-sky-300">
                    {mode === 'zoom' ? 'Zoom Live Face to Face' : 'On-Campus Group'}
                  </span>
                </li>

                <li className="flex justify-between py-1.5 border-b border-purple-800/80">
                  <span className="text-purple-300">{currentLang === 'my' ? translations.proposal.stdFeeMy : translations.proposal.stdFeeEn}</span>
                  <span className="font-semibold text-slate-400 line-through">{formatMMK(standardFee)}</span>
                </li>

                <motion.li 
                  key={specialFee}
                  initial={{ scale: 0.97 }}
                  animate={{ scale: 1 }}
                  className="flex justify-between py-3 border-b border-purple-800 items-center bg-purple-950/80 px-4 rounded-2xl border-2 border-amber-400/40"
                >
                  <span className="text-amber-300 font-black text-sm sm:text-base">
                    {currentLang === 'my' ? translations.proposal.specialFeeMy : translations.proposal.specialFeeEn}
                  </span>
                  <span className="font-black text-amber-400 text-xl sm:text-2xl tracking-tight">
                    {formatMMK(specialFee)}
                  </span>
                </motion.li>

                <li className="flex justify-between py-1 text-xs">
                  <span className="text-emerald-400 font-bold flex items-center space-x-1">
                    <Gift className="w-4 h-4 text-emerald-400" />
                    <span>{currentLang === 'my' ? translations.proposal.savingsMy : translations.proposal.savingsEn}</span>
                  </span>
                  <span className="font-extrabold text-emerald-400">
                    {formatMMK(savings)} {currentLang === 'my' ? 'သက်သာမည်' : 'Savings'}
                  </span>
                </li>
              </ul>
            </div>

            {/* Included Guarantee Note */}
            <div className="bg-[#1e0338]/90 p-4 rounded-2xl border border-purple-800 space-y-1">
              <div className="text-xs text-amber-300 font-bold flex items-center space-x-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Included Agency Benefits</span>
              </div>
              <p className="text-xs text-purple-200 leading-relaxed">
                HR တက်ရောက်မှု အစီရင်ခံစာ + စာမေးပွဲ ရလဒ်များ စနစ်တကျ အစီရင်ခံခြင်း နှင့် Digital Flashcards/Quizzes များ ပါဝင်ပါသည်။
              </p>
            </div>
          </div>
        </div>
      </div>



      {/* 100% Money-Back Guarantee & 3 Rules Policy Box */}
      <div className="bg-gradient-to-r from-[#2e0750] via-[#3b0764] to-[#2e0750] text-white rounded-3xl p-6 sm:p-8 shadow-xl border-2 border-amber-400">
        <div className="flex items-center space-x-3 text-amber-400 mb-6 pb-4 border-b border-purple-800">
          <div className="p-3 bg-amber-400/20 text-amber-400 rounded-2xl border border-amber-400/30">
            <ShieldCheck className="w-7 h-7" />
          </div>
          <div>
            <h3 className="font-black text-xl sm:text-2xl text-amber-400">
              {currentLang === 'my' ? translations.proposal.guaranteeTitleMy : translations.proposal.guaranteeTitleEn}
            </h3>
            <p className="text-xs text-purple-200">
              {currentLang === 'my' ? translations.proposal.guaranteeSubtitleMy : translations.proposal.guaranteeSubtitleEn}
            </p>
          </div>
        </div>

        <div className="bg-[#1e0338]/90 p-5 rounded-2xl border border-amber-400/40 mb-6 shadow-inner">
          <p className="text-sm sm:text-base font-bold text-amber-200 leading-relaxed">
            “{currentLang === 'my' ? translations.proposal.guaranteeTextMy : translations.proposal.guaranteeTextEn}”
          </p>
        </div>

        <div>
          <h4 className="font-extrabold text-xs sm:text-sm text-amber-300 uppercase tracking-wider mb-4 flex items-center space-x-2">
            <CheckCircle2 className="w-4 h-4 text-amber-400" />
            <span>အာမခံချက်အတွက် လိုက်နာရမည့် စည်းကမ်း (၃) ချက် (Click to Verify Compliance)</span>
          </h4>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Rule 1 */}
            <div 
              onClick={() => setRule1Checked(!rule1Checked)}
              className={`p-4 rounded-2xl border transition-all cursor-pointer flex items-start space-x-3 ${
                rule1Checked ? 'bg-[#1e0338] border-amber-400 ring-1 ring-amber-400/30' : 'bg-purple-950/40 border-purple-800 opacity-60'
              }`}
            >
              <div className={`w-7 h-7 rounded-full flex items-center justify-center font-extrabold text-xs flex-shrink-0 ${
                rule1Checked ? 'bg-amber-400 text-purple-950' : 'bg-purple-800 text-purple-300'
              }`}>
                {rule1Checked ? <Check className="w-4 h-4" /> : '၁'}
              </div>
              <div>
                <h5 className="font-bold text-xs sm:text-sm text-white mb-1">
                  {currentLang === 'my' ? translations.proposal.rule1TitleMy : translations.proposal.rule1TitleEn}
                </h5>
                <p className="text-[11px] text-purple-200 leading-normal">
                  {currentLang === 'my' ? translations.proposal.rule1DescMy : translations.proposal.rule1DescEn}
                </p>
              </div>
            </div>

            {/* Rule 2 */}
            <div 
              onClick={() => setRule2Checked(!rule2Checked)}
              className={`p-4 rounded-2xl border transition-all cursor-pointer flex items-start space-x-3 ${
                rule2Checked ? 'bg-[#1e0338] border-amber-400 ring-1 ring-amber-400/30' : 'bg-purple-950/40 border-purple-800 opacity-60'
              }`}
            >
              <div className={`w-7 h-7 rounded-full flex items-center justify-center font-extrabold text-xs flex-shrink-0 ${
                rule2Checked ? 'bg-amber-400 text-purple-950' : 'bg-purple-800 text-purple-300'
              }`}>
                {rule2Checked ? <Check className="w-4 h-4" /> : '၂'}
              </div>
              <div>
                <h5 className="font-bold text-xs sm:text-sm text-white mb-1">
                  {currentLang === 'my' ? translations.proposal.rule2TitleMy : translations.proposal.rule2TitleEn}
                </h5>
                <p className="text-[11px] text-purple-200 leading-normal">
                  {currentLang === 'my' ? translations.proposal.rule2DescMy : translations.proposal.rule2DescEn}
                </p>
              </div>
            </div>

            {/* Rule 3 */}
            <div 
              onClick={() => setRule3Checked(!rule3Checked)}
              className={`p-4 rounded-2xl border transition-all cursor-pointer flex items-start space-x-3 ${
                rule3Checked ? 'bg-[#1e0338] border-amber-400 ring-1 ring-amber-400/30' : 'bg-purple-950/40 border-purple-800 opacity-60'
              }`}
            >
              <div className={`w-7 h-7 rounded-full flex items-center justify-center font-extrabold text-xs flex-shrink-0 ${
                rule3Checked ? 'bg-amber-400 text-purple-950' : 'bg-purple-800 text-purple-300'
              }`}>
                {rule3Checked ? <Check className="w-4 h-4" /> : '၃'}
              </div>
              <div>
                <h5 className="font-bold text-xs sm:text-sm text-white mb-1">
                  {currentLang === 'my' ? translations.proposal.rule3TitleMy : translations.proposal.rule3TitleEn}
                </h5>
                <p className="text-[11px] text-purple-200 leading-normal">
                  {currentLang === 'my' ? translations.proposal.rule3DescMy : translations.proposal.rule3DescEn}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Official Class Fee Structure Table */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-purple-100">
        <h4 className="font-extrabold text-lg sm:text-xl text-slate-900 mb-4 flex items-center space-x-2">
          <Table className="w-5 h-5 text-purple-700" />
          <span>{currentLang === 'my' ? 'သင်တန်းကြေး နှုန်းထားများ ဇယားချုပ် (Official Class Fee Structure)' : 'Official Class Fee Rate Sheet'}</span>
        </h4>

        <div className="overflow-x-auto rounded-2xl border border-purple-100 shadow-sm">
          <table className="w-full text-left border-collapse text-xs sm:text-sm">
            <thead>
              <tr className="bg-[#2e0750] text-white uppercase text-[11px] tracking-wider">
                <th className="p-4 rounded-tl-2xl font-extrabold">သင်တန်းအမည်</th>
                <th className="p-4 font-extrabold">ကျောင်းသား ဦးရေ</th>
                <th className="p-4 font-extrabold">ပုံမှန်သင်တန်းကြေး</th>
                <th className="p-4 font-extrabold text-amber-300">အေဂျင်စီ အထူးကြေး</th>
                <th className="p-4 rounded-tr-2xl font-extrabold text-emerald-400">သက်သာခွင့်</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-purple-100 font-medium text-slate-700">
              {/* TMM Rows */}
              <tr className={`hover:bg-purple-50 transition-colors ${courseId === 'tmm' && qty <= 10 ? 'bg-amber-100/60 font-bold' : ''}`}>
                <td className="p-4 font-black text-purple-950" rowSpan={3}>
                  1. TMM Class<br />
                  <span className="text-xs text-slate-500 font-normal">(Zoom Face to Face - ၃၀ နာရီ)</span>
                </td>
                <td className="p-4">ကျောင်းသား ၁၀ ယောက်အထိ</td>
                <td className="p-4 text-slate-400 line-through">၃,၀၀၀,၀၀၀/- ကျပ်</td>
                <td className="p-4 font-black text-purple-950 bg-amber-50/80">၂,၀၀၀,၀၀၀/- ကျပ်</td>
                <td className="p-4 font-bold text-emerald-600">၁,၀၀၀,၀၀၀/- ကျပ်</td>
              </tr>
              <tr className={`hover:bg-purple-50 transition-colors ${courseId === 'tmm' && qty > 10 && qty <= 20 ? 'bg-amber-100/60 font-bold' : ''}`}>
                <td className="p-4">ကျောင်းသား ၂၀ ယောက်အထိ</td>
                <td className="p-4 text-slate-400 line-through">၅,၀၀၀,၀၀၀/- ကျပ်</td>
                <td className="p-4 font-black text-purple-950 bg-amber-50/80">၃,၀၀၀,၀၀၀/- ကျပ်</td>
                <td className="p-4 font-bold text-emerald-600">၂,၀၀၀,၀၀၀/- ကျပ်</td>
              </tr>
              <tr className={`hover:bg-purple-50 transition-colors border-b-2 border-purple-200 ${courseId === 'tmm' && qty > 20 ? 'bg-amber-100/60 font-bold' : ''}`}>
                <td className="p-4">ကျောင်းသား ၅၀ ယောက်အထိ</td>
                <td className="p-4 text-slate-400 line-through">၁၂,၅၀၀,၀၀၀/- ကျပ်</td>
                <td className="p-4 font-black text-purple-950 bg-amber-50/80">၈,၀၀၀,၀၀၀/- ကျပ်</td>
                <td className="p-4 font-bold text-emerald-600">၄,၅၀၀,၀၀၀/- ကျပ်</td>
              </tr>

              {/* TLS Rows */}
              <tr className={`hover:bg-purple-50 transition-colors ${courseId === 'tls' && qty <= 10 ? 'bg-amber-100/60 font-bold' : ''}`}>
                <td className="p-4 font-black text-purple-950" rowSpan={3}>
                  2. TLS Class<br />
                  <span className="text-xs text-slate-500 font-normal">(Zoom Face to Face - ၅၀ နာရီ)</span>
                </td>
                <td className="p-4">ကျောင်းသား ၁၀ ယောက်အထိ</td>
                <td className="p-4 text-slate-400 line-through">၆,၀၀၀,၀၀၀/- ကျပ်</td>
                <td className="p-4 font-black text-purple-950 bg-amber-50/80">၄,၀၀၀,၀၀၀/- ကျပ်</td>
                <td className="p-4 font-bold text-emerald-600">၂,၀၀၀,၀၀၀/- ကျပ်</td>
              </tr>
              <tr className={`hover:bg-purple-50 transition-colors ${courseId === 'tls' && qty > 10 && qty <= 20 ? 'bg-amber-100/60 font-bold' : ''}`}>
                <td className="p-4">ကျောင်းသား ၂၀ ယောက်အထိ</td>
                <td className="p-4 text-slate-400 line-through">၁၁,၀၀၀,၀၀၀/- ကျပ်</td>
                <td className="p-4 font-black text-purple-950 bg-amber-50/80">၇,၀၀၀,၀၀၀/- ကျပ်</td>
                <td className="p-4 font-bold text-emerald-600">၄,၀၀၀,၀၀၀/- ကျပ်</td>
              </tr>
              <tr className={`hover:bg-purple-50 transition-colors border-b-2 border-purple-200 ${courseId === 'tls' && qty > 20 ? 'bg-amber-100/60 font-bold' : ''}`}>
                <td className="p-4">ကျောင်းသား ၅၀ ယောက်အထိ</td>
                <td className="p-4 text-slate-400 line-through">၂၅,၀၀၀,၀၀၀/- ကျပ်</td>
                <td className="p-4 font-black text-purple-950 bg-amber-50/80">၁၅,၀၀၀,၀၀၀/- ကျပ်</td>
                <td className="p-4 font-bold text-emerald-600">၁၀,၀၀၀,၀၀၀/- ကျပ်</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-xs text-slate-500 mt-3 italic">
          * မှတ်ချက် - အပြင်တန်း အုပ်စုဖွဲ့ သင်ကြားလိုပါက အထက်ပါ သင်တန်းကြေးတွင် အသွား/အပြန် ခရီးစရိတ် ထပ်ပေါင်းပါမည်။
        </p>
      </div>
    </motion.div>
  );
};

