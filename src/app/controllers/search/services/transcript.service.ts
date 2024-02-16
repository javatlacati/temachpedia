import { Injectable } from '@angular/core';
import { type HttpClient } from '@angular/common/http';
import { type Observable } from 'rxjs';
import { type Transcription } from '../model/Transcription';

@Injectable({
  providedIn: 'root',
})
export class TranscriptService {
  constructor(private readonly httpClient: HttpClient) {}

  public getTransriptForWord(word: string): Observable<Transcription[]> {
    // return this.httpClient.post('http://localhost:8081/api/video-transcription', {
    return this.httpClient.post(
      'https://55m31g500e.execute-api.us-east-1.amazonaws.com/default/searchTranscriptionFromPublicElTemachVideos',
      {
        title: word,
      },
    ) as Observable<Transcription[]>;
  }
}
