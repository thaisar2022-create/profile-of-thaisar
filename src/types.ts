export type Language = 'my' | 'en';

export type TabType = 'overview' | 'curriculum' | 'benefits' | 'milestones' | 'proposal' | 'practice';

export interface CourseProgram {
  id: string;
  code: string;
  titleMy: string;
  titleEn: string;
  hours: number;
  durationMy: string;
  durationEn: string;
  descMy: string;
  descEn: string;
  badgeColor: string;
  featuresMy: string[];
  featuresEn: string[];
  sampleFlashcards: {
    thai: string;
    phonetic: string;
    myanmarPhonetic?: string;
    myanmar: string;
    english: string;
    audioText: string;
  }[];
}

export interface ProposalCalculation {
  qty: number;
  courseId: 'tmm' | 'tls' | 'one_on_one' | 'agency_collab';
  mode: 'zoom' | 'campus';
  standardFee: number;
  specialFee: number;
  savings: number;
}

export interface MilestoneItem {
  program: string;
  studentsMy: string;
  studentsEn: string;
  count: number;
  detailMy: string;
  detailEn: string;
  iconName: string;
}

export interface Flashcard {
  id: string;
  thai: string;
  phonetic: string;
  myanmarPhonetic?: string;
  myanmar: string;
  english: string;
  category: 'alphabet' | 'vowels' | 'words' | 'greeting' | 'workplace' | 'numbers' | 'safety';
  wordBreakdown?: { thai: string; phonetic: string; myanmar: string }[];
}

export interface QuizQuestion {
  id: number;
  questionMy: string;
  questionEn: string;
  thaiAudioText: string;
  options: {
    textMy: string;
    textEn: string;
    isCorrect: boolean;
  }[];
  explanationMy: string;
  explanationEn: string;
}
