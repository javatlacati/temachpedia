import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Transcription} from "../model/Transcription";

@Injectable({
  providedIn: 'root'
})
export class TranscriptService {

  constructor(private httpClient: HttpClient) {
  }

  public getTransriptForWord(word: string): Observable<Transcription[]> {
    return this.httpClient.post('http://localhost:8081/api/video-transcription', {
      "title": word
    }) as Observable<Transcription[]>
  }
}
