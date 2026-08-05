import React, { useState } from 'react';
import { AnimatePresence } from 'motion/react';
import { Language, TabType, ProposalCalculation } from './types';
import { Header } from './components/Header';
import { HeroBanner } from './components/HeroBanner';
import { OverviewTab } from './components/OverviewTab';
import { CurriculumTab } from './components/CurriculumTab';
import { BenefitsTab } from './components/BenefitsTab';
import { MilestonesTab } from './components/MilestonesTab';
import { ProposalTab } from './components/ProposalTab';
import { InteractivePracticeTab } from './components/InteractivePracticeTab';
import { PrintableProposalModal } from './components/PrintableProposalModal';
import { Footer } from './components/Footer';

export default function App() {
  const [currentLang, setCurrentLang] = useState<Language>('my');
  const [activeTab, setActiveTab] = useState<TabType>('overview');
  const [isPrintModalOpen, setIsPrintModalOpen] = useState<boolean>(false);
  const [customProposalData, setCustomProposalData] = useState<ProposalCalculation | null>(null);

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
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex-grow w-full">
        {/* Brand Hero Banner */}
        <HeroBanner
          currentLang={currentLang}
          onSelectTab={setActiveTab}
        />

        {/* Tab Content Panels */}
        <AnimatePresence mode="wait">
          {activeTab === 'overview' && (
            <OverviewTab key="overview" currentLang={currentLang} />
          )}

          {activeTab === 'curriculum' && (
            <CurriculumTab
              key="curriculum"
              currentLang={currentLang}
              onSelectTab={setActiveTab}
            />
          )}

          {activeTab === 'benefits' && (
            <BenefitsTab key="benefits" currentLang={currentLang} />
          )}

          {activeTab === 'milestones' && (
            <MilestonesTab key="milestones" currentLang={currentLang} />
          )}

          {activeTab === 'proposal' && (
            <ProposalTab
              key="proposal"
              currentLang={currentLang}
              onOpenPrintModalWithData={handleOpenPrintModalWithData}
            />
          )}

          {activeTab === 'practice' && (
            <InteractivePracticeTab key="practice" currentLang={currentLang} />
          )}
        </AnimatePresence>
      </main>

      {/* Footer */}
      <Footer
        currentLang={currentLang}
        onSelectTab={setActiveTab}
      />

      {/* Printable Proposal Modal */}
      {isPrintModalOpen && (
        <PrintableProposalModal
          currentLang={currentLang}
          proposalData={customProposalData}
          onClose={() => setIsPrintModalOpen(false)}
        />
      )}
    </div>
  );
}
