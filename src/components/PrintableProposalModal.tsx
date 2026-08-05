import React from 'react';
import { Language, ProposalCalculation } from '../types';
import { translations } from '../data/translations';
import { X, Printer, ShieldCheck, CheckCircle2, Building, Phone, MapPin } from 'lucide-react';

interface PrintableProposalModalProps {
  currentLang: Language;
  proposalData: ProposalCalculation | null;
  onClose: () => void;
}

export const PrintableProposalModal: React.FC<PrintableProposalModalProps> = ({
  currentLang,
  proposalData,
  onClose
}) => {
  const formatMMK = (num: number) => num.toLocaleString('en-US') + '/- ကျပ်';

  const defaultData: ProposalCalculation = {
    qty: 10,
    courseId: 'tmm',
    mode: 'zoom',
    standardFee: 3000000,
    specialFee: 2000000,
    savings: 1000000
  };

  const data = proposalData || defaultData;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-white text-slate-900 rounded-3xl max-w-3xl w-full p-6 sm:p-10 shadow-2xl relative border border-purple-200 my-8">
        {/* Controls header in Modal */}
        <div className="flex items-center justify-between pb-4 border-b border-purple-100 no-print mb-6">
          <div className="flex items-center space-x-2 text-purple-950 font-bold text-sm">
            <Printer className="w-5 h-5 text-purple-800" />
            <span>Official B2B Proposal Document Preview</span>
          </div>
          <div className="flex items-center space-x-3">
            <button
              onClick={handlePrint}
              className="bg-amber-400 hover:bg-amber-300 text-purple-950 font-bold px-4 py-2 rounded-xl text-xs flex items-center space-x-1.5 transition-colors cursor-pointer shadow-md"
            >
              <Printer className="w-4 h-4" />
              <span>Print / Save PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-2 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* PRINTABLE DOCUMENT BODY */}
        <div id="printable-quote-document" className="space-y-6 text-slate-800 text-xs sm:text-sm">
          {/* Header */}
          <div className="flex items-center justify-between pb-6 border-b-2 border-purple-950">
            <div className="flex items-center space-x-4">
              <img 
                src="https://lh3.googleusercontent.com/pw/AP1GczMwFLSw2jZ1uvbxB1NybvU19q_q4wQ_zIyacLAw5-JekiGYYaKWpJSF0IJG_uOrfRDBSg1XUVRmPf7rcM5v69f6HeH09rHtXRPCXAc4bLjP7phKNRU=w2400" 
                alt="Thaisar Logo" 
                className="w-14 h-14 rounded-full object-cover border-2 border-amber-400 shadow-md flex-shrink-0"
                referrerPolicy="no-referrer"
              />
              <div>
                <h1 className="text-xl sm:text-2xl font-black text-purple-950 tracking-tight">
                  "ထိုင်းစာ" ထိုင်းဘာသာစကားသင်တန်းကျောင်း
                </h1>
                <h2 className="text-sm font-bold text-amber-700">
                  Thaisar Thai Language Academy
                </h2>
                <span className="text-[11px] text-slate-500 font-medium">Hledan, Kamayut Township, Yangon</span>
              </div>
            </div>

            <div className="text-right">
              <span className="bg-purple-950 text-amber-400 font-extrabold text-[10px] px-3 py-1 rounded-full uppercase tracking-wider block mb-1">
                Official Agency Quotation
              </span>
              <span className="text-[11px] font-mono text-slate-500">REF: THAISAR-B2B-{Date.now().toString().slice(-6)}</span>
            </div>
          </div>

          {/* Title */}
          <div className="bg-purple-50 p-4 rounded-2xl border border-purple-200 text-center">
            <h3 className="font-extrabold text-base text-purple-950">
              B2B / Overseas Employment Agency Special Collaboration Offer
            </h3>
            <p className="text-xs text-slate-600 mt-1">
              Custom Workforce Language Training & Job-Ready Deployment Proposal
            </p>
          </div>

          {/* Pricing Grid */}
          <div className="border border-purple-200 rounded-2xl overflow-hidden shadow-sm">
            <div className="bg-purple-950 text-white p-3 font-bold text-xs uppercase tracking-wider flex justify-between">
              <span>Proposal Breakdown Details</span>
              <span>Rate (MMK)</span>
            </div>
            <div className="divide-y divide-purple-100 p-4 space-y-2 text-xs">
              <div className="flex justify-between py-1">
                <span className="font-semibold text-slate-600">Target Workforce Capacity:</span>
                <span className="font-extrabold text-slate-900">{data.qty} Candidates</span>
              </div>
              <div className="flex justify-between py-1">
                <span className="font-semibold text-slate-600">Selected Program:</span>
                <span className="font-extrabold text-purple-900">
                  {data.courseId === 'tmm' ? 'TMM Speaking Specialist (30 Hours / 2 Months)' : 'TLS 4-Skills Standard (50 Hours / 4 Months)'}
                </span>
              </div>
              <div className="flex justify-between py-1">
                <span className="font-semibold text-slate-600">Delivery Format:</span>
                <span className="font-bold text-slate-900">
                  {data.mode === 'zoom' ? 'Zoom Live Face-to-Face Classroom' : 'On-Campus Group Training'}
                </span>
              </div>
              <div className="flex justify-between py-1 text-slate-400">
                <span>Standard Individual Class Fee:</span>
                <span className="line-through">{formatMMK(data.standardFee)}</span>
              </div>
              <div className="flex justify-between py-2 bg-amber-50 px-3 rounded-xl font-extrabold text-purple-950 text-sm">
                <span>Special B2B Agency Net Fee:</span>
                <span className="text-purple-950 text-base">{formatMMK(data.specialFee)}</span>
              </div>
              <div className="flex justify-between py-1 text-emerald-700 font-bold text-xs">
                <span>Total Net Agency Savings:</span>
                <span>{formatMMK(data.savings)}</span>
              </div>
            </div>
          </div>

          {/* Money Back Guarantee Clause */}
          <div className="bg-purple-950 text-white p-4 rounded-2xl border border-purple-800 space-y-2 text-xs">
            <div className="flex items-center space-x-2 text-amber-400 font-bold">
              <ShieldCheck className="w-4 h-4 text-amber-400" />
              <span>100% Official Money-Back Guarantee Clause</span>
            </div>
            <p className="text-purple-200 leading-relaxed text-[11px]">
              "သတ်မှတ်ထားသည့် စည်းကမ်း (၃) ချက် (သင်တန်းချိန် ၁၀၀% တက်ရောက်ခြင်း၊ ဆရာမညွှန်ကြားချက် လိုက်နာခြင်း၊ အိမ်စာ/လေ့ကျင့်ခန်း ပြီးမြောက်ခြင်း) ကို အပြည့်အဝ လိုက်နာပြီး မတတ်မြောက်ပါက သင်တန်းကြေး ၁၀၀% ပြန်အမ်းမည်။"
            </p>
          </div>

          {/* Footer Official Stamp & Signature */}
          <div className="pt-6 border-t border-purple-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
            <div className="space-y-1 text-slate-600">
              <div className="flex items-center space-x-1.5 font-bold text-slate-900">
                <Building className="w-3.5 h-3.5 text-purple-800" />
                <span>Thaisar Thai Language Academy</span>
              </div>
              <div>အမှတ် (၅၃/3B)၊ အင်းစိန်လမ်းမကြီး၊ လှည်းတန်း၊ ကမာရွတ်မြို့နယ်၊ ရန်ကုန်မြို့။</div>
              <div>Hotline: Hledan Campus, Yangon</div>
            </div>

            <div className="text-center sm:text-right border border-purple-200 p-3 rounded-2xl bg-purple-50/50">
              <div className="w-20 h-20 border-2 border-dashed border-purple-900 rounded-full flex flex-col items-center justify-center text-[10px] text-purple-950 font-black mx-auto sm:ml-auto mb-1">
                <span>THAISAR</span>
                <span>SEAL</span>
              </div>
              <span className="font-bold text-purple-950 block text-[11px]">Academic Director Signature</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
