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

function hashText(input: string): string {
  let hash = 0;
  for (let i = 0; i < input.length; i += 1) {
    hash = (hash << 5) - hash + input.charCodeAt(i);
    hash |= 0;
  }
  return Math.abs(hash).toString(36);
}

export class TTSService {
  async synthesize(input: TTSRequest): Promise<TTSResult> {
    const cacheKey = `${input.languageCode}_${input.voiceGender}_${input.speed}_${hashText(input.text)}`;

    return {
      cacheKey,
      localUri: `audio/tts_cache/${cacheKey}.mp3`
    };
  }
}
