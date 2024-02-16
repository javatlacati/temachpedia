export interface Transcription {
  video_title: string;
  transcript: Transcript[];
}

export interface Transcript {
  url: string;
  text: string;
}
