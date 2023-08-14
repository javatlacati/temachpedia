export interface Transcription {
  video_title: string,
  transcript: Array<Transcript>
}

export interface Transcript {
  url: string,
  text: string
}
