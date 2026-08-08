import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'motion/react';
import { Language, TabType, ProposalCalculation } from './types';
import { Header } from './components/Header';
import { HeroBanner } from './components/HeroBanner';
import { Footer } from './components/Footer';
import { TabErrorBoundary } from './components/TabErrorBoundary';
import { TabSkeleton } from './components/TabSkeleton';

// Code Splitting using React.lazy for heavy tab modules and printable modal
const OverviewTab = React.lazy(() => import('./components/OverviewTab').then(m => ({ default: m.OverviewTab })));
const CurriculumTab = React.lazy(() => import('./components/CurriculumTab').then(m => ({ default: m.CurriculumTab })));
const BenefitsTab = React.lazy(() => import('./components/BenefitsTab').then(m => ({ default: m.BenefitsTab })));
const MilestonesTab = React.lazy(() => import('./components/MilestonesTab').then(m => ({ default: m.MilestonesTab })));
const ProposalTab = React.lazy(() => import('./components/ProposalTab').then(m => ({ default: m.ProposalTab })));
const InteractivePracticeTab = React.lazy(() => import('./components/InteractivePracticeTab').then(m => ({ default: m.InteractivePracticeTab })));
const PrintableProposalModal = React.lazy(() => import('./components/PrintableProposalModal').then(m => ({ default: m.PrintableProposalModal })));

export default function App() {
  const [currentLang, setCurrentLang] = useState<Language>('my');
  const [activeTab, setActiveTab] = useState<TabType>('overview');
  const [isPrintModalOpen, setIsPrintModalOpen] = useState<boolean>(false);
  const [customProposalData, setCustomProposalData] = useState<ProposalCalculation | null>(null);

  // Dynamic Metadata Hook for SEO and OpenGraph updates
  useEffect(() => {
    const tabTitles: Record<TabType, { my: string; en: string }> = {
      overview: {
        my: 'ပင်မအကျဉ်းချုပ် | Thaisar Thai Language School',
        en: 'Overview & Profile | Thaisar Thai Language School'
      },
      curriculum: {
        my: 'သင်တန်းအမျိုးအစားနှင့် သင်ရိုး | Thaisar Thai Language School',
        en: 'Curriculum & Programs | Thaisar Thai Language School'
      },
      benefits: {
        my: 'အေဂျင်စီ ရရှိမည့် အကျိုးကျေးဇူးများ | Thaisar Thai Language School',
        en: 'Agency Partnership Benefits | Thaisar Thai Language School'
      },
      milestones: {
        my: 'သင်တန်း တိုးတက်မှု အဆင့် ၅ ဆင့် | Thaisar Thai Language School',
        en: '5-Stage Learning Milestones | Thaisar Thai Language School'
      },
      proposal: {
        my: 'အဆိုပြုလွှာနှင့် သင်တန်းကြေး တွက်ချက်ရန် | Thaisar Thai Language School',
        en: 'B2B Proposal & Fee Calculator | Thaisar Thai Language School'
      },
      practice: {
        my: 'လက်တွေ့ လေ့ကျင့်ရန် Flashcards & Quiz | Thaisar Thai Language School',
        en: 'Interactive Practice & Quiz | Thaisar Thai Language School'
      }
    };

    const tabDescriptions: Record<TabType, { my: string; en: string }> = {
      overview: {
        my: 'အေဂျင်စီများနှင့် လုပ်ငန်းရှင်များအတွက် စက်ရုံ/လုပ်ငန်းခွင်သုံး ထိုင်းစကားပြောနှင့် ၄ မျိုးစုံ သင်တန်းကျောင်း အကျဉ်းချုပ် Profile။',
        en: 'Overview profile of Thaisar Thai Language School specializing in workforce language training for agencies and overseas candidates.'
      },
      curriculum: {
        my: 'TMM Spoken Specialist, TLS 4-Skills, One-on-One VIP နှင့် Agency Collab သင်တန်းအမျိုးအစားများ၏ သင်ရိုးညွှန်းတမ်း အသေးစိတ်။',
        en: 'Comprehensive curriculum breakdown for TMM Spoken Specialist, TLS 4-Skills Standard, One-on-One VIP, and Agency Collaboration classes.'
      },
      benefits: {
        my: 'အေဂျင်စီများအတွက် သီးသန့် Dashboard၊ လစဉ် တိုးတက်မှု Report၊ တရားဝင် သင်တန်းဆင်းလက်မှတ်နှင့် 100% ရလဒ် အာမခံချက်။',
        en: 'Exclusive agency partner benefits including custom HR tracking dashboards, weekly diagnostic reports, and 100% money-back result guarantees.'
      },
      milestones: {
        my: 'အခြေခံ အသံထွက် မှစ၍ စက်ရုံ/လုပ်ငန်းခွင် အင်တာဗျူး အောင်မြင်သည်အထိ ကျောင်းသားများ ကျော်ဖြတ်ရမည့် အဆင့် ၅ ဆင့်။',
        en: '5-Stage roadmap from foundational pronunciation drills to factory interview readiness and employment language mastery.'
      },
      proposal: {
        my: 'ကျောင်းသား ဦးရေအလိုက် သင်တန်းကြေး တွက်ချက်ခြင်း၊ လျှော့စျေးများ ကြည့်ရှုခြင်းနှင့် တရားဝင် အဆိုပြုလွှာ Printable PDF ရယူခြင်း။',
        en: 'Interactive fee calculator for agency student batches, volume discount tiers, and official B2B proposal document generator.'
      },
      practice: {
        my: 'စက်ရုံသုံး ထိုင်းစကားပြော နမူနာ ဝေါဟာရများ၊ အသံထွက် နားထောင်ရန် Flashcards နှင့် Interactive Quiz စမ်းသပ်မှု။',
        en: 'Interactive Thai language practice studio featuring audio flashcards, factory vocabulary drills, and comprehension quizzes.'
      }
    };

    const title = tabTitles[activeTab][currentLang];
    const description = tabDescriptions[activeTab][currentLang];

    document.title = title;

    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute('content', description);

    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute('content', title);
    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute('content', description);

    document.documentElement.lang = currentLang;
  }, [activeTab, currentLang]);

  const handleOpenPrintModalWithData = (data: ProposalCalculation) => {
    setCustomProposalData(data);
    setIsPrintModalOpen(true);
  };

  const handleOpenGeneralPrintModal = () => {
    setIsPrintModalOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col justify-between bg-[#faf5ff] text-slate-900 font-sans antialiased selection:bg-amber-300 selection:text-purple-950">
      {/* Top Header Navigation */}
      <Header
        currentLang={currentLang}
        onSetLanguage={setCurrentLang}
        activeTab={activeTab}
        onSelectTab={setActiveTab}
        onOpenPrintModal={handleOpenGeneralPrintModal}
      />

      {/* Main Content Area */}
      <main id="main-content" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex-grow w-full">
        {/* Brand Hero Banner */}
        <HeroBanner
          currentLang={currentLang}
          onSelectTab={setActiveTab}
        />

        {/* Tab Content Panels wrapped in ErrorBoundary and Suspense */}
        <TabErrorBoundary currentLang={currentLang}>
          <React.Suspense fallback={<TabSkeleton currentLang={currentLang} />}>
            <AnimatePresence mode="wait">
              <div 
                key={activeTab}
                id={`tabpanel-${activeTab}`} 
                role="tabpanel" 
                aria-labelledby={`tab-${activeTab}`}
                tabIndex={0}
                className="focus:outline-none"
              >
                {activeTab === 'overview' && (
                  <OverviewTab currentLang={currentLang} />
                )}

                {activeTab === 'curriculum' && (
                  <CurriculumTab
                    currentLang={currentLang}
                    onSelectTab={setActiveTab}
                  />
                )}

                {activeTab === 'benefits' && (
                  <BenefitsTab currentLang={currentLang} />
                )}

                {activeTab === 'milestones' && (
                  <MilestonesTab currentLang={currentLang} />
                )}

                {activeTab === 'proposal' && (
                  <ProposalTab
                    currentLang={currentLang}
                    onOpenPrintModalWithData={handleOpenPrintModalWithData}
                  />
                )}

                {activeTab === 'practice' && (
                  <InteractivePracticeTab currentLang={currentLang} />
                )}
              </div>
            </AnimatePresence>
          </React.Suspense>
        </TabErrorBoundary>
      </main>

      {/* Footer */}
      <Footer
        currentLang={currentLang}
        onSelectTab={setActiveTab}
      />

      {/* Printable Proposal Modal with lazy loading & boundary */}
      {isPrintModalOpen && (
        <TabErrorBoundary currentLang={currentLang}>
          <React.Suspense fallback={
            <div role="status" aria-label="Loading document" className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 backdrop-blur-sm p-4">
              <div className="bg-white p-6 rounded-3xl shadow-2xl flex items-center gap-3 text-purple-950 font-extrabold border border-purple-200 animate-pulse">
                <div className="w-6 h-6 border-3 border-purple-900 border-t-transparent rounded-full animate-spin" />
                <span>{currentLang === 'my' ? 'အဆိုပြုလွှာ ခေါ်ယူနေပါသည်...' : 'Loading proposal document...'}</span>
              </div>
            </div>
          }>
            <PrintableProposalModal
              currentLang={currentLang}
              proposalData={customProposalData}
              onClose={() => setIsPrintModalOpen(false)}
            />
          </React.Suspense>
        </TabErrorBoundary>
      )}
    </div>
  );
}

