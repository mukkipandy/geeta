export type AudioSegmentType = 'recitation' | 'explanation' | 'motivation';

export interface AudioSegment {
  id: string;
  type: AudioSegmentType;
  uri: string;
  durationMs: number;
}

export interface AudioDuckingConfig {
  narrationVolume: number;
  musicVolumeNormal: number;
  musicVolumeDucked: number;
  duckInMs: number;
  duckOutMs: number;
}

export interface AudioSessionPlan {
  musicProfile: string;
  segments: AudioSegment[];
  config: AudioDuckingConfig;
}

export class AudioPlayerService {
  createSessionPlan(input: {
    musicProfile: string;
    recitationUri: string;
    explanationUri: string;
    motivationUri: string;
  }): AudioSessionPlan {
    return {
      musicProfile: input.musicProfile,
      segments: [
        { id: 'recitation', type: 'recitation', uri: input.recitationUri, durationMs: 25_000 },
        { id: 'explanation', type: 'explanation', uri: input.explanationUri, durationMs: 75_000 },
        { id: 'motivation', type: 'motivation', uri: input.motivationUri, durationMs: 35_000 }
      ],
      config: {
        narrationVolume: 1,
        musicVolumeNormal: 0.6,
        musicVolumeDucked: 0.22,
        duckInMs: 700,
        duckOutMs: 900
      }
    };
  }

  totalNarrationDurationMs(plan: AudioSessionPlan): number {
    return plan.segments.reduce((sum, segment) => sum + segment.durationMs, 0);
  }

  /**
   * Computes ducked music volume over progress [0..1] for smooth transitions.
   */
  getDuckedVolume(config: AudioDuckingConfig, progress: number): number {
    const p = Math.max(0, Math.min(1, progress));
    return config.musicVolumeNormal + (config.musicVolumeDucked - config.musicVolumeNormal) * p;
  }
}
