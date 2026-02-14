import { selectDailyVerse } from './selectDailyVerse';
import { UserPreferences, Verse } from '../types/models';

export interface CachedDailyVerse {
  date: string;
  verse: Verse;
}

export function buildSevenDayVerseCache(input: {
  startDateISO: string;
  user: UserPreferences;
  verses: Verse[];
  days?: number;
}): CachedDailyVerse[] {
  const days = input.days ?? 7;
  const start = new Date(input.startDateISO);
  const cache: CachedDailyVerse[] = [];

  for (let i = 0; i < days; i += 1) {
    const nextDate = new Date(start);
    nextDate.setDate(start.getDate() + i);
    const iso = nextDate.toISOString();

    cache.push({
      date: iso.slice(0, 10),
      verse: selectDailyVerse({
        user: input.user,
        date: iso,
        verses: input.verses
      })
    });
  }

  return cache;
}
