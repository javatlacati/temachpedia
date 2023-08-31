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
    //http://localhost:8081/api/video-transcription
    return this.httpClient.post('https://8wnah05m3h.execute-api.us-east-2.amazonaws.com/default/searchTranscriptionFromPublicElTemachVideos', {
      "title": word
    }) as Observable<Transcription[]>
  }
}
