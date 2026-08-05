import { CourseProgram, MilestoneItem, Flashcard, QuizQuestion } from '../types';

export const coursePrograms: CourseProgram[] = [
  {
    id: 'tmm',
    code: 'TMM Level 1 + 2',
    titleMy: '1. စကားပြောသီးသန့် (Thai Made Money - TMM) Level 1 + 2',
    titleEn: '1. Speaking Specialist (Thai Made Money - TMM) Level 1 + 2',
    hours: 30,
    durationMy: '၃၀ နာရီ (၂ လ)',
    durationEn: '30 Hours (2 Months)',
    descMy: 'အသံထွက်မှန်ကန်စွာဖြင့် နေ့စဉ်သုံးနှင့် ရုံးသုံး/လုပ်ငန်းခွင်သုံး စကားပြောကို လျှင်မြန်စွာ ပြောဆိုနိုင်စေရန်။',
    descEn: 'Focuses on fluent everyday and workplace speaking, correct pronunciation, tone usage, and swift comprehension.',
    badgeColor: 'bg-amber-400 text-purple-950 font-black',
    featuresMy: [
      'နေ့စဉ်သုံးစကားပြော နှင့် အခြေခံ နှုတ်ဆက်စကားများ',
      'လုပ်ငန်းခွင်သုံး အမိန့်/ညွှန်ကြားချက်များ နားလည်ခြင်း',
      'အသံထွက်မှန်ကန်ရေး၊ အသံနိမ့်မြင့်စနစ် လေ့ကျင့်ပေးခြင်း',
      'Flashcards & Interactive Quizzes လက်ဆောင် ပါဝင်ခြင်း'
    ],
    featuresEn: [
      'Daily conversation and essential social greetings',
      'Understanding workplace orders & factory safety directives',
      'Pronunciation accuracy & tonal mastery drills',
      'Complimentary Digital Flashcards & Practice Quizzes'
    ],
    sampleFlashcards: [
      {
        thai: 'สวัสดีครับ / ค่ะ',
        phonetic: 'Sawasdee krub / ka',
        myanmarPhonetic: 'ဆဝါဒီခပ်(ပ်) / ခါ',
        myanmar: 'မင်္ဂလာပါ',
        english: 'Hello / Greetings',
        audioText: 'สวัสดีครับ'
      },
      {
        thai: 'เข้าใจไหมครับ',
        phonetic: 'Khao jai mai krub',
        myanmarPhonetic: 'ခေါက်(ဝ်)ကျိုင်မိုင်ခပ်(ပ်)',
        myanmar: 'နားလည်ပါသလား',
        english: 'Do you understand?',
        audioText: 'เข้าใจไหมครับ'
      },
      {
        thai: 'เท่าไหร่ครับ',
        phonetic: 'Tao rai krub',
        myanmarPhonetic: 'ထောင်းရိုင်ခပ်(ပ်)',
        myanmar: 'ဘယ်လောက်လဲ',
        english: 'How much is it?',
        audioText: 'เท่าไหร่ครับ'
      },
      {
        thai: 'ขอบคุณมากครับ',
        phonetic: 'Khop khun mak krub',
        myanmarPhonetic: 'ခေါပ်ခွန်မားခပ်(ပ်)',
        myanmar: 'အများကြီး ကျေးဇူးတင်ပါတယ်',
        english: 'Thank you very much',
        audioText: 'ขอบคุณมากครับ'
      }
    ]
  },
  {
    id: 'tls',
    code: 'TLS Level 1 + 2',
    titleMy: '2. 4 Skills + Grammar Standard (TLS) Level 1 + 2',
    titleEn: '2. 4 Skills + Grammar Standard (TLS) Level 1 + 2',
    hours: 50,
    durationMy: '၅၀ နာရီ (၄ လ)',
    durationEn: '50 Hours (4 Months)',
    descMy: 'ဖတ်၊ ရေး၊ ပြော၊ နားထောင် အခြေခံ စာသဘောတရားနှင့် ဗျည်း/သရ၊ အသံနိမ့်မြင့်စနစ်များကို ပိုင်နိုင်စွာ တည်ဆောက်ပေးရန်။ ထိုင်းစာကြောင်းများ ကိုယ်တိုင်တည်ဆောက်နိုင်ရန်။ ကိုယ်ပြောချင်သော စကားများကို သူများအားကိုးစရာမလို့ ကိုယ်တိုင် ပြောနိုင်၊ ပြောထွက်စေရန်။',
    descEn: 'Comprehensive foundational program covering reading, writing, speaking, listening, consonants, vowels, and tone rule mastery. Enables candidates to construct accurate sentences independently.',
    badgeColor: 'bg-purple-800 text-white font-black',
    featuresMy: [
      'ထိုင်းဗျည်း (၄၄) လုံး၊ သရ နှင့် အသံနိမ့်မြင့် စနစ်များ',
      'စာကြောင်းတည်ဆောက်ပုံ၊ သဒ္ဒါစည်းမျဉ်းများ စနစ်တကျ သင်ကြားခြင်း',
      'အရေး၊ အဖတ်၊ အပြော၊ အကြား 4 Skills စလုံး မပါမဖြစ် သင်ကြားခြင်း',
      'လုပ်ငန်းခွင်သုံး စာရွက်စာတမ်း ဖတ်ရှုနိုင်ရေး လေ့ကျင့်ခြင်း'
    ],
    featuresEn: [
      'All 44 consonants, vowels, and tone rule systems',
      'Systematic sentence formation & grammar rules',
      'Complete 4-Skills integration (Read, Write, Speak, Listen)',
      'Workplace signage & basic document reading drills'
    ],
    sampleFlashcards: [
      {
        thai: 'ยินดีที่ได้รู้จัก',
        phonetic: 'Yin dee tee dai roo jak',
        myanmar: 'တွေ့ရတာ ဝမ်းသာပါတယ်',
        english: 'Nice to meet you',
        audioText: 'ยินดีที่ได้รู้จัก'
      },
      {
        thai: 'ขอโทษครับ',
        phonetic: 'Kho thot krub',
        myanmar: 'တောင်းပန်ပါတယ် / အားနာပါတယ်',
        english: 'Sorry / Excuse me',
        audioText: 'ขอโทษครับ'
      },
      {
        thai: 'ช่วยหน่อยได้ไหมครับ',
        phonetic: 'Chuay noi dai mai krub',
        myanmar: 'ကူညီပေးလို့ ရမလား',
        english: 'Can you please help me?',
        audioText: 'ช่วยหน่อยได้ไหมครับ'
      },
      {
        thai: 'ตั้งใจทำงานนะครับ',
        phonetic: 'Tang jai tham ngan na krub',
        myanmar: 'ကြိုးစားပြီး အလုပ်လုပ်ပါ',
        english: 'Work hard with focus',
        audioText: 'ตั้งใจทำงานนะครับ'
      }
    ]
  },
  {
    id: 'advanced',
    code: 'TLS Level 3 Advanced',
    titleMy: '3. 4 Skills + Grammar Advanced Level 3',
    titleEn: '3. 4 Skills + Grammar Advanced Level 3',
    hours: 60,
    durationMy: '၆၀ နာရီ',
    durationEn: '60 Hours',
    descMy: 'အဆင့်မြင့် စာပိုဒ်များ ဖတ်ခြင်း၊ ရုံးသုံး စာရွက်စာတမ်းဆိုင်ရာများနှင့် လုပ်ငန်းခွင် အစည်းအဝေးသုံး ထိုင်းဘာသာစကားအထိ ကျွမ်းကျင်စေရန်။',
    descEn: 'Advanced passages, formal office documentation, corporate reporting, and business meeting level proficiency.',
    badgeColor: 'bg-emerald-600 text-white font-black',
    featuresMy: [
      'အဆင့်မြင့် စာပိုဒ်များနှင့် သတင်းဆောင်းပါးများ ဖတ်ရှုခြင်း',
      'ရုံးသုံး စာရွက်စာတမ်းများ၊ အစီရင်ခံစာ ရေးသားခြင်း',
      'လုပ်ငန်းခွင် အစည်းအဝေးသုံး ထိုင်းစကားပြော',
      'B2B & Corporate level တတ်မြောက်ရေး လေ့ကျင့်ခြင်း'
    ],
    featuresEn: [
      'Reading complex passages and official notices',
      'Formal office reporting and contract reading',
      'Business meeting interaction & presentation skills',
      'Corporate fluency & professional translation practice'
    ],
    sampleFlashcards: [
      {
        thai: 'การประชุมเริ่มกี่โมงครับ',
        phonetic: 'Karn pra chum ream kee mong krub',
        myanmar: 'အစည်းအဝေး ဘယ်အချိန် စမလဲ',
        english: 'What time does the meeting start?',
        audioText: 'การประชุมเริ่มกี่โมงครับ'
      },
      {
        thai: 'ส่งรายงานให้แล้วครับ',
        phonetic: 'Song rai ngan hai laew krub',
        myanmar: 'အစီရင်ခံစာ ပို့ပြီးပါပြီ',
        english: 'The report has been submitted',
        audioText: 'ส่งรายงานให้แล้วครับ'
      }
    ]
  }
];

export const milestoneItems: MilestoneItem[] = [
  {
    program: '4 Skills + Grammar Standard (TLS) Batches',
    studentsMy: '၃,၀၀၀ ကျော်',
    studentsEn: 'Over 3,000 Students',
    count: 3200,
    detailMy: '၂၀၂၂ ခုနှစ် ဖေဖော်ဝါရီလမှစ၍ သင်တန်းပေါင်း Batch-170 ကျော် အောင်မြင်စွာ သင်ကြားပြီးမြောက်ခဲ့ခြင်း။',
    detailEn: 'Over 170+ batches successfully graduated since February 2022.',
    iconName: 'BookOpen'
  },
  {
    program: 'Speaking Specialist (TMM) Batches',
    studentsMy: '၂,၀၀၀ ကျော်',
    studentsEn: 'Over 2,000 Students',
    count: 2100,
    detailMy: '၂၀၂၃ ခုနှစ်မှစ၍ စကားပြောသီးသန့် သင်တန်းသား ၂,၀၀၀ ကျော်အား လေ့ကျင့်ပေးခဲ့ခြင်း။ (TMM အတန်း ဆက်လက်သင်ကြားလျက်ရှိ)',
    detailEn: 'Trained 2,000+ speaking specialists since 2023 (Ongoing TMM program).',
    iconName: 'MessageSquare'
  },
  {
    program: 'Total Alumni (စုစုပေါင်း သင်တန်းဆင်း)',
    studentsMy: '၅,၀၀၀ ကျော်',
    studentsEn: 'Over 5,000 Graduates',
    count: 5300,
    detailMy: 'ထိုင်းနိုင်ငံအပါအဝင် လုပ်ငန်းခွင်အသီးသီးတွင် အမှန်တကယ် လက်တွေ့အသုံးချနေသူများ။',
    detailEn: '5,000+ graduates actively working in Thailand and international workplaces.',
    iconName: 'Award'
  }
];

export const sampleQuizQuestions: QuizQuestion[] = [
  {
    id: 1,
    questionMy: 'ထိုင်းဗျည်း အက္ခရာ ပထမဆုံး ဗျည်း "ก" (Kor Kai) ၏ အဓိပ္ပာယ်မှာ မည်သည့်အရာ ဖြစ်သနည်း။',
    questionEn: 'What is the meaning of the 1st Thai consonant "ก" (Kor Kai)?',
    thaiAudioText: 'ก ไก่',
    options: [
      { textMy: 'ไข่ - ကြက်ဥ (Khai)', textEn: 'Khai - Egg', isCorrect: false },
      { textMy: 'ไก่ - ကြက် (Kai)', textEn: 'Kai - Chicken', isCorrect: true },
      { textMy: 'ควาย - ကျွဲ (Khway)', textEn: 'Khway - Buffalo', isCorrect: false },
      { textMy: 'งู - မြွေ (Ngoo)', textEn: 'Ngoo - Snake', isCorrect: false }
    ],
    explanationMy: '"ก" (Kor Kai) သည် ထိုင်းဗျည်း ၄၄ လုံးတွင် ပထမဆုံးဗျည်းဖြစ်ပြီး "ไก่" (ကြက်) ကို ကိုယ်စားပြုပါသည်။',
    explanationEn: '"Kor Kai" is the 1st Thai consonant, representing chicken.'
  },
  {
    id: 2,
    questionMy: 'ထိုင်းသရ "-า" (Sara Aa) သည် မည်သည့် သရအမျိုးအစား ဖြစ်သနည်း။',
    questionEn: 'What type of vowel is "-า" (Sara Aa) in Thai?',
    thaiAudioText: 'สระอา',
    options: [
      { textMy: 'သရ အာ (အသံရှည် သရ - Long Vowel)', textEn: 'Sara Aa (Long Vowel)', isCorrect: true },
      { textMy: 'သရ အ (အသံတို သရ - Short Vowel)', textEn: 'Sara Ah (Short Vowel)', isCorrect: false },
      { textMy: 'သရ အိ (အသံတို သရ - Short Vowel)', textEn: 'Sara I (Short Vowel)', isCorrect: false },
      { textMy: 'သရ အီ (အသံရှည် သရ - Long Vowel)', textEn: 'Sara Ee (Long Vowel)', isCorrect: false }
    ],
    explanationMy: '"-า" (Sara Aa) သည် အသံရှည်သရ (Long Vowel) ဖြစ်ပြီး "အာ" ဟု အသံထွက်ရပါသည်။',
    explanationEn: '"Sara Aa" is a long vowel pronounced as "Aa".'
  },
  {
    id: 3,
    questionMy: 'ထိုင်းစကားလုံး "กิน" (Kin) ၏ မြန်မာအဓိပ္ပာယ်မှာ မည်သည်နည်း။',
    questionEn: 'What does the Thai word "กิน" (Kin) mean?',
    thaiAudioText: 'กิน',
    options: [
      { textMy: 'သွားသည် (Go)', textEn: 'Go', isCorrect: false },
      { textMy: 'အိပ်သည် (Sleep)', textEn: 'Sleep', isCorrect: false },
      { textMy: 'စားသည် (Eat)', textEn: 'Eat', isCorrect: true },
      { textMy: 'လာသည် (Come)', textEn: 'Come', isCorrect: false }
    ],
    explanationMy: '"กิน" (Kin) သည် "စားသည်" ဟု အဓိပ္ပာယ်ရသော နေ့စဉ်သုံး ကြိယာစကားလုံး ဖြစ်ပါသည်။',
    explanationEn: '"Kin" means "to eat" in Thai.'
  },
  {
    id: 4,
    questionMy: 'ထိုင်းဘာသာဖြင့် "မင်္ဂလာပါ" ဟု နှုတ်ဆက်လိုလျှင် မည်သို့ ပြောရမည်နည်း။',
    questionEn: 'How do you say "Hello" in Thai?',
    thaiAudioText: 'สวัสดีครับ',
    options: [
      { textMy: 'ขอบคุณครับ (Khop khun krub)', textEn: 'Khop khun krub', isCorrect: false },
      { textMy: 'สวัสดีครับ (Sawasdee krub)', textEn: 'Sawasdee krub', isCorrect: true },
      { textMy: 'ขอโทษครับ (Kho thot krub)', textEn: 'Kho thot krub', isCorrect: false },
      { textMy: 'สบายดีไหม (Sabai dee mai)', textEn: 'Sabai dee mai', isCorrect: false }
    ],
    explanationMy: '"สวัสดีครับ/ค่ะ" (Sawasdee krub/ka) သည် ထိုင်းဘာသာစကား၏ အခြေခံကျသော နှုတ်ဆက်စကားဖြစ်ပါသည်။',
    explanationEn: '"Sawasdee krub/ka" is the universal Thai greeting.'
  },
  {
    id: 5,
    questionMy: 'လုပ်ငန်းခွင်တွင် "ကူညီပေးလို့ရမလား" ဟု အကူအညီတောင်းလိုလျှင် ဘာပြောရမလဲ။',
    questionEn: 'How do you ask "Can you help me please?" in Thai?',
    thaiAudioText: 'ช่วยหน่อยได้ไหมครับ',
    options: [
      { textMy: 'ช่วยหน่อยได้ไหมครับ (Chuay noi dai mai krub)', textEn: 'Chuay noi dai mai krub', isCorrect: true },
      { textMy: 'เท่าไหร่ครับ (Tao rai krub)', textEn: 'Tao rai krub', isCorrect: false },
      { textMy: 'หิวข้าวแล้ว (Hiew khao laew)', textEn: 'Hiew khao laew', isCorrect: false },
      { textMy: 'ไปไหนครับ (Pai nai krub)', textEn: 'Pai nai krub', isCorrect: false }
    ],
    explanationMy: '"ช่วยหน่อยได้ไหมครับ" (Chuay noi dai mai krub) သည် ယဉ်ကျေးစွာ အကူအညီတောင်းသော စကားစုဖြစ်ပါသည်။',
    explanationEn: '"Chuay noi dai mai krub" politely asks for assistance.'
  }
];

export const allFlashcards: Flashcard[] = [
  // Consonants (ဗျည်း)
  {
    id: 'fc-alpha-1',
    thai: 'ก (ก ไก่)',
    phonetic: 'Kor Kai',
    myanmarPhonetic: 'ကော ကိုင်',
    myanmar: 'က - ကြက် (ထိုင်းဗျည်း အမှတ် ၁)',
    english: 'K - Chicken (1st Thai Consonant)',
    category: 'alphabet',
    wordBreakdown: [
      { thai: 'ก', phonetic: 'Kor', myanmar: 'က (ဗျည်း)' },
      { thai: 'ไก่', phonetic: 'Kai', myanmar: 'ကြက်' }
    ]
  },
  {
    id: 'fc-alpha-3',
    thai: 'ค (ค ควาย)',
    phonetic: 'Khor Khway',
    myanmarPhonetic: 'ခေါ ခဝိုင်',
    myanmar: 'ဂ/ခ - ကျွဲ (ထိုင်းဗျည်း အမှတ် ၃)',
    english: 'Kh - Buffalo (3rd Thai Consonant)',
    category: 'alphabet',
    wordBreakdown: [
      { thai: 'ค', phonetic: 'Khor', myanmar: 'ဂ/ခ (ဗျည်း)' },
      { thai: 'ควาย', phonetic: 'Khway', myanmar: 'ကျွဲ' }
    ]
  },
  {
    id: 'fc-alpha-4',
    thai: 'ง (ง งู)',
    phonetic: 'Ngor Ngoo',
    myanmarPhonetic: 'ငေါ ငူ',
    myanmar: 'င - မြွေ (ထိုင်းဗျည်း အမှတ် ၇)',
    english: 'Ng - Snake (7th Thai Consonant)',
    category: 'alphabet',
    wordBreakdown: [
      { thai: 'ง', phonetic: 'Ngor', myanmar: 'င (ဗျည်း)' },
      { thai: 'งู', phonetic: 'Ngoo', myanmar: 'မြွေ' }
    ]
  },

  // Vowels (သရ)
  {
    id: 'fc-vowel-1',
    thai: 'สระอะ (-ะ)',
    phonetic: 'Sara Ah',
    myanmarPhonetic: 'သရ အ',
    myanmar: 'သရ အ (အသံတို သရ)',
    english: 'Short Vowel Ah',
    category: 'vowels',
    wordBreakdown: [
      { thai: 'สระ', phonetic: 'Sara', myanmar: 'သရ' },
      { thai: '-ะ', phonetic: 'Ah', myanmar: 'အ (အသံတို)' }
    ]
  },
  {
    id: 'fc-vowel-2',
    thai: 'สระอา (-า)',
    phonetic: 'Sara Aa',
    myanmarPhonetic: 'သရ အာ',
    myanmar: 'သရ အာ (အသံရှည် သရ)',
    english: 'Long Vowel Aa',
    category: 'vowels',
    wordBreakdown: [
      { thai: 'สระ', phonetic: 'Sara', myanmar: 'သရ' },
      { thai: '-า', phonetic: 'Aa', myanmar: 'အာ (အသံရှည်)' }
    ]
  },
  {
    id: 'fc-vowel-3',
    thai: 'สระอิ (-ิ)',
    phonetic: 'Sara I',
    myanmarPhonetic: 'သရ အိ',
    myanmar: 'သရ အိ (အသံတို သရ)',
    english: 'Short Vowel I',
    category: 'vowels',
    wordBreakdown: [
      { thai: 'สระ', phonetic: 'Sara', myanmar: 'သရ' },
      { thai: '-ิ', phonetic: 'I', myanmar: 'အိ (အသံတို)' }
    ]
  },
  {
    id: 'fc-vowel-4',
    thai: 'สระอี (-ี)',
    phonetic: 'Sara Ee',
    myanmarPhonetic: 'သရ အီ',
    myanmar: 'သရ အီ (အသံရှည် သရ)',
    english: 'Long Vowel Ee',
    category: 'vowels',
    wordBreakdown: [
      { thai: 'สระ', phonetic: 'Sara', myanmar: 'သရ' },
      { thai: '-ี', phonetic: 'Ee', myanmar: 'အီ (အသံရှည်)' }
    ]
  },

  // Words (စကားလုံးများ)
  {
    id: 'fc-word-1',
    thai: 'กิน',
    phonetic: 'Kin',
    myanmarPhonetic: 'ကင်း(န်)',
    myanmar: 'စားသည်',
    english: 'To eat',
    category: 'words',
    wordBreakdown: [
      { thai: 'ก', phonetic: 'Kor (Consonant)', myanmar: 'က-ဗျည်း' },
      { thai: '-ิ', phonetic: 'Sara I (Vowel)', myanmar: 'အိ-သရ' },
      { thai: 'น', phonetic: 'Nor (Final)', myanmar: 'န-အသံသတ်' }
    ]
  },
  {
    id: 'fc-word-2',
    thai: 'นอน',
    phonetic: 'Non',
    myanmarPhonetic: 'နောန်',
    myanmar: 'အိပ်သည်',
    english: 'To sleep',
    category: 'words',
    wordBreakdown: [
      { thai: 'น', phonetic: 'Nor', myanmar: 'န-ဗျည်း' },
      { thai: 'อ', phonetic: 'Or', myanmar: 'ဩ-သရ' },
      { thai: 'น', phonetic: 'Nor', myanmar: 'န-အသံသတ်' }
    ]
  },
  {
    id: 'fc-word-3',
    thai: 'ไป',
    phonetic: 'Pai',
    myanmarPhonetic: 'ပိုင်း',
    myanmar: 'သွားသည်',
    english: 'To go',
    category: 'words',
    wordBreakdown: [
      { thai: 'ไ-', phonetic: 'Sara Ai', myanmar: 'အိုင်-သရ' },
      { thai: 'ป', phonetic: 'Por', myanmar: 'ပ-ဗျည်း' }
    ]
  },
  {
    id: 'fc-word-4',
    thai: 'น้ำ',
    phonetic: 'Nam',
    myanmarPhonetic: 'နမ်း',
    myanmar: 'ရေ',
    english: 'Water',
    category: 'words',
    wordBreakdown: [
      { thai: 'น', phonetic: 'Nor', myanmar: 'န-ဗျည်း' },
      { thai: 'ำ', phonetic: 'Sara Am', myanmar: 'အမ်-သရ' }
    ]
  },

  // Phrases & Greetings
  { 
    id: 'fc-1', 
    thai: 'สวัสดีครับ / ค่ะ', 
    phonetic: 'Sawasdee krub / ka', 
    myanmarPhonetic: 'ဆဝါဒီခပ်(ပ်) / ခါ', 
    myanmar: 'မင်္ဂလာပါ', 
    english: 'Hello', 
    category: 'greeting',
    wordBreakdown: [
      { thai: 'สวัสดี', phonetic: 'Sawasdee', myanmar: 'မင်္ဂလာပါ' },
      { thai: 'ครับ / ค่ะ', phonetic: 'krub / ka', myanmar: 'ယဉ်ကျေးသော အဆုံးသတ်စကား (ကျား/မ)' }
    ]
  },
  { 
    id: 'fc-2', 
    thai: 'ขอบคุณมากครับ', 
    phonetic: 'Khop khun mak krub', 
    myanmarPhonetic: 'ခေါပ်ခွန်မားခပ်(ပ်)', 
    myanmar: 'ကျေးဇူးအများကြီးတင်ပါတယ်', 
    english: 'Thank you very much', 
    category: 'greeting',
    wordBreakdown: [
      { thai: 'ขอบคุณ', phonetic: 'Khop khun', myanmar: 'ကျေးဇူးတင်ပါတယ်' },
      { thai: 'มาก', phonetic: 'mak', myanmar: 'အများကြီး' },
      { thai: 'ครับ', phonetic: 'krub', myanmar: 'ယဉ်ကျေးသော အဆုံးသတ်စကား (ကျား)' }
    ]
  },
  { 
    id: 'fc-3', 
    thai: 'ขอโทษครับ', 
    phonetic: 'Kho thot krub', 
    myanmarPhonetic: 'ခေါ်ထို့(တ်)ခပ်(ပ်)', 
    myanmar: 'တောင်းပန်ပါတယ်', 
    english: 'Sorry / Excuse me', 
    category: 'greeting',
    wordBreakdown: [
      { thai: 'ขอโทษ', phonetic: 'Kho thot', myanmar: 'တောင်းပန်ပါတယ် / ခွင့်လွှတ်ပါ' },
      { thai: 'ครับ', phonetic: 'krub', myanmar: 'ယဉ်ကျေးသော အသုံးအနှုန်း' }
    ]
  },
  { 
    id: 'fc-4', 
    thai: 'เข้าใจไหมครับ', 
    phonetic: 'Khao jai mai krub', 
    myanmarPhonetic: 'ခေါက်(ဝ်)ကျိုင်မိုင်ခပ်(ပ်)', 
    myanmar: 'နားလည်ပါသလား', 
    english: 'Do you understand?', 
    category: 'workplace',
    wordBreakdown: [
      { thai: 'เข้าใจ', phonetic: 'Khao jai', myanmar: 'နားလည်သည်' },
      { thai: 'ไหม', phonetic: 'mai', myanmar: 'ပါသလား (မေးခွန်း)' },
      { thai: 'ครับ', phonetic: 'krub', myanmar: 'ယဉ်ကျေးသော အသုံးအနှုန်း' }
    ]
  },
  { 
    id: 'fc-5', 
    thai: 'เข้าใจแล้วครับ', 
    phonetic: 'Khao jai laew krub', 
    myanmarPhonetic: 'ခေါက်(ဝ်)ကျိုင်လဲဝိုးခပ်(ပ်)', 
    myanmar: 'နားလည်ပါပြီ', 
    english: 'Understood', 
    category: 'workplace',
    wordBreakdown: [
      { thai: 'เข้าใจ', phonetic: 'Khao jai', myanmar: 'နားလည်သည်' },
      { thai: 'แล้ว', phonetic: 'laew', myanmar: 'ပြီးပြီ / ခဲ့ပြီ' },
      { thai: 'ครับ', phonetic: 'krub', myanmar: 'ယဉ်ကျေးသော အသုံးအနှုန်း' }
    ]
  },
  { 
    id: 'fc-6', 
    thai: 'ระวังอันตราย', 
    phonetic: 'Ra wang an ta rai', 
    myanmarPhonetic: 'လဝမ်(င်)အန်(န်)တရိုင်(ယ်)', 
    myanmar: 'အန္တရာယ် သတိပြုပါ', 
    english: 'Danger / Caution', 
    category: 'safety',
    wordBreakdown: [
      { thai: 'ระวัง', phonetic: 'Ra wang', myanmar: 'သတိထားပါ / သတိပြုပါ' },
      { thai: 'อันตราย', phonetic: 'An ta rai', myanmar: 'အန္တရာယ်' }
    ]
  },
  { 
    id: 'fc-8', 
    thai: 'เท่าไหร่ครับ', 
    phonetic: 'Tao rai krub', 
    myanmarPhonetic: 'ထောက်(ဝ်)လိုင်ခပ်(ပ်)', 
    myanmar: 'ဘယ်လောက်လဲ', 
    english: 'How much is it?', 
    category: 'numbers',
    wordBreakdown: [
      { thai: 'เท่าไหร่', phonetic: 'Tao rai', myanmar: 'ဘယ်လောက်လဲ' },
      { thai: 'ครับ', phonetic: 'krub', myanmar: 'ယဉ်ကျေးသော အသုံးအနှုန်း' }
    ]
  },
  { 
    id: 'fc-9', 
    thai: 'หนึ่ง สอง สาม', 
    phonetic: 'Neung, Song, Sam', 
    myanmarPhonetic: 'နင်(င်) စော်(င်) စမ်(မ်)', 
    myanmar: '၁၊ ၂၊ ၃ (တစ်၊ နှစ်၊ သုံး)', 
    english: '1, 2, 3', 
    category: 'numbers',
    wordBreakdown: [
      { thai: 'หนึ่ง', phonetic: 'Neung', myanmar: 'တစ် (၁)' },
      { thai: 'สอง', phonetic: 'Song', myanmar: 'နှစ် (၂)' },
      { thai: 'สาม', phonetic: 'Sam', myanmar: 'သုံး (၃)' }
    ]
  },
  { 
    id: 'fc-10', 
    thai: 'ตั้งใจทำงานนะครับ', 
    phonetic: 'Tang jai tham ngan na krub', 
    myanmarPhonetic: 'တန့်(င်)ကျိုင်းထမ်(မ်)ငါန်(န်)နခပ်(ပ်)', 
    myanmar: 'ကြိုးစားပြီး အလုပ်လုပ်ပါ', 
    english: 'Work with focus', 
    category: 'workplace',
    wordBreakdown: [
      { thai: 'ตั้งใจ', phonetic: 'Tang jai', myanmar: 'စိတ်ပါဝင်စားစွာ / ကြိုးစား၍' },
      { thai: 'ทำงาน', phonetic: 'Tham ngan', myanmar: 'အလုပ်လုပ်သည်' },
      { thai: 'นะครับ', phonetic: 'Na krub', myanmar: 'နော် (ယဉ်ကျေးသော အသုံးအနှုန်း)' }
    ]
  },
];
