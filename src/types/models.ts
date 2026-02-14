export type SpiritualSource =
  | 'gita'
  | 'quran'
  | 'bible'
  | 'buddhist'
  | 'torah'
  | 'guru_granth_sahib'
  | 'other';

export type OriginalScript =
  | 'devanagari'
  | 'arabic'
  | 'hebrew'
  | 'greek'
  | 'latin'
  | 'gurmukhi'
  | 'pali'
  | 'other';

export type AnimationTag =
  | 'peace'
  | 'compassion'
  | 'discipline'
  | 'surrender'
  | 'hope';

export type MusicProfile =
  | 'indian'
  | 'middle_eastern'
  | 'western'
  | 'buddhist_ambient'
  | 'generic';

export interface Verse {
  verse_id: string;
  source: SpiritualSource;
  book_name: string;
  chapter: number | string;
  verse_number: number | string;
  original_text: string;
  original_script: OriginalScript;
  transliteration?: string;
  translation_english: string;
  translations: Record<string, string>;
  explanation_text: string;
  motivation_text: string;
  animation_tag: AnimationTag;
  theme_keywords: string[];
  music_profile: MusicProfile;
  duration_seconds: number;
  difficulty_level?: 'beginner' | 'intermediate' | 'advanced';
  created_at: string;
  updated_at: string;
}

export interface UserVoiceSettings {
  gender: 'male' | 'female' | 'neutral';
  speed: number;
}

export interface UserMusicSettings {
  enabled: boolean;
  volume: number;
}

export interface UserPreferenceHistory {
  verse_id: string;
  date: string;
  completed: boolean;
}

export interface UserPreferences {
  user_id: string;
  selected_sources: SpiritualSource[];
  source_mixing_ratio: Partial<Record<SpiritualSource, number>>;
  preferred_language: string;
  voice_settings: UserVoiceSettings;
  music_settings: UserMusicSettings;
  theme: 'light' | 'dark' | 'pastel';
  notification_time: string;
  current_streak: number;
  total_verses_read: number;
  favorite_verses: string[];
  history: UserPreferenceHistory[];
}
