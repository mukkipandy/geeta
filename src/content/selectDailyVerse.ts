import { createSeededRandom } from './seededRandom';
import { UserPreferenceHistory, UserPreferences, Verse } from '../types/models';

const MS_PER_DAY = 24 * 60 * 60 * 1000;

function dateOnly(input: string): string {
  return input.slice(0, 10);
}

function daysBetween(isoA: string, isoB: string): number {
  const a = new Date(dateOnly(isoA)).getTime();
  const b = new Date(dateOnly(isoB)).getTime();
  return Math.floor(Math.abs(a - b) / MS_PER_DAY);
}

function weightedPick<T extends string>(
  options: T[],
  weights: Record<T, number>,
  random: () => number
): T {
  const total = options.reduce((sum, option) => sum + Math.max(0, weights[option] ?? 0), 0);

  if (total <= 0) {
    return options[Math.floor(random() * options.length)];
  }

  const target = random() * total;
  let cumulative = 0;

  for (const option of options) {
    cumulative += Math.max(0, weights[option] ?? 0);
    if (target <= cumulative) {
      return option;
    }
  }

  return options[options.length - 1];
}

function normalizeRatios(preferences: UserPreferences): Record<string, number> {
  const ratios: Record<string, number> = {};

  for (const source of preferences.selected_sources) {
    ratios[source] = Math.max(0, preferences.source_mixing_ratio[source] ?? 0);
  }

  const sum = Object.values(ratios).reduce((acc, value) => acc + value, 0);

  if (sum === 0 && preferences.selected_sources.length > 0) {
    const equalWeight = 1 / preferences.selected_sources.length;
    for (const source of preferences.selected_sources) {
      ratios[source] = equalWeight;
    }
  }

  return ratios;
}

function recentVerseIds(history: UserPreferenceHistory[], date: string, noRepeatDays: number): Set<string> {
  return new Set(
    history
      .filter((entry) => daysBetween(entry.date, date) <= noRepeatDays)
      .map((entry) => entry.verse_id)
  );
}

export interface SelectDailyVerseInput {
  user: UserPreferences;
  date: string;
  verses: Verse[];
  noRepeatDays?: number;
}

export function selectDailyVerse({
  user,
  date,
  verses,
  noRepeatDays = 90
}: SelectDailyVerseInput): Verse {
  if (user.selected_sources.length === 0) {
    throw new Error('At least one source must be selected.');
  }

  const ratios = normalizeRatios(user);
  const random = createSeededRandom(`${user.user_id}::${dateOnly(date)}`);
  const recentlyShownIds = recentVerseIds(user.history, date, noRepeatDays);

  const available = verses.filter(
    (verse) => user.selected_sources.includes(verse.source) && !recentlyShownIds.has(verse.verse_id)
  );

  const pool = available.length > 0 ? available : verses.filter((v) => user.selected_sources.includes(v.source));

  if (pool.length === 0) {
    throw new Error('No verses available for selected sources.');
  }

  const availableSources = [...new Set(pool.map((verse) => verse.source))];
  const selectedSource = weightedPick(
    availableSources,
    Object.fromEntries(availableSources.map((source) => [source, ratios[source] ?? 0])) as Record<
      (typeof availableSources)[number],
      number
    >,
    random
  );

  const sourcePool = pool.filter((verse) => verse.source === selectedSource);
  return sourcePool[Math.floor(random() * sourcePool.length)];
}
