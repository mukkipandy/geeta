export interface TTSRequest {
  text: string;
  languageCode: string;
  voiceGender: 'male' | 'female' | 'neutral';
  speed: number;
}

export interface TTSResult {
  cacheKey: string;
  localUri: string;
}

/**
 * Placeholder provider abstraction.
 * Real implementation can target Google/Azure and persist outputs to /audio/tts_cache.
 */
export class TTSService {
  async synthesize(input: TTSRequest): Promise<TTSResult> {
    const cacheKey = `${input.languageCode}_${input.voiceGender}_${input.speed}_${input.text.length}`;

    return {
      cacheKey,
      localUri: `audio/tts_cache/${cacheKey}.mp3`
    };
  }
}
