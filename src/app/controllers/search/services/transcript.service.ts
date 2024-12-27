import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { type Observable } from 'rxjs';
import { type Transcription } from '../model/Transcription';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class TranscriptService {
  constructor(private readonly httpClient: HttpClient) {}

  public getTranscriptForWord(word: string): Observable<Transcription[]> {
    return this.httpClient.post(environment.transcriptUrl, {
      title: word,
    }) as Observable<Transcription[]>;
  }
}
