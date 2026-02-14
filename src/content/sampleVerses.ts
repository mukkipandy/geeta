import { Verse } from '../types/models';

const now = new Date().toISOString();

export const sampleVerses: Verse[] = [
  {
    verse_id: 'gita_2_47',
    source: 'gita',
    book_name: 'Bhagavad Gita',
    chapter: 2,
    verse_number: 47,
    original_text: 'कर्मण्येवाधिकारस्ते मा फलेषु कदाचन।',
    original_script: 'devanagari',
    transliteration: 'karmaṇy-evādhikāras te mā phaleṣu kadācana',
    translation_english:
      'You have a right to your actions, but never to your fruits alone.',
    translations: {
      hindi: 'तुम्हारा अधिकार केवल कर्म करने में है, फल पर नहीं।',
      spanish: 'Tienes derecho a la acción, no solo a sus frutos.'
    },
    explanation_text:
      'This verse encourages mindful action without anxiety over outcomes.',
    motivation_text:
      'Today, focus on one sincere effort and release the pressure of results.',
    animation_tag: 'discipline',
    theme_keywords: ['duty', 'equanimity', 'focus'],
    music_profile: 'indian',
    duration_seconds: 140,
    created_at: now,
    updated_at: now
  },
  {
    verse_id: 'quran_94_5',
    source: 'quran',
    book_name: 'Quran',
    chapter: 94,
    verse_number: 5,
    original_text: 'فَإِنَّ مَعَ الْعُسْرِ يُسْرًا',
    original_script: 'arabic',
    translation_english: 'Indeed, with hardship comes ease.',
    translations: {
      hindi: 'निस्संदेह कठिनाई के साथ आसानी भी है।',
      urdu: 'بے شک مشکل کے ساتھ آسانی ہے۔'
    },
    explanation_text:
      'The verse reminds us that difficulty and relief often coexist.',
    motivation_text:
      'Breathe through today’s challenge; gentleness is already on its way.',
    animation_tag: 'hope',
    theme_keywords: ['hope', 'resilience'],
    music_profile: 'middle_eastern',
    duration_seconds: 120,
    created_at: now,
    updated_at: now
  },
  {
    verse_id: 'bible_psalm_46_10',
    source: 'bible',
    book_name: 'Psalms',
    chapter: 46,
    verse_number: 10,
    original_text: 'Be still, and know that I am God.',
    original_script: 'latin',
    translation_english: 'Be still, and know that I am God.',
    translations: {
      hindi: 'शांत हो जाओ और जानो कि मैं परमेश्वर हूँ।',
      french: 'Arrêtez, et sachez que je suis Dieu.'
    },
    explanation_text:
      'Stillness creates space for trust, humility, and perspective.',
    motivation_text:
      'Take one quiet minute today with no task, only awareness.',
    animation_tag: 'peace',
    theme_keywords: ['stillness', 'trust'],
    music_profile: 'western',
    duration_seconds: 130,
    created_at: now,
    updated_at: now
  }
];
