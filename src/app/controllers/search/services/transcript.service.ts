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
    // return this.httpClient.post('https://z6hdo7e4zc.execute-api.us-east-1.amazonaws.com/default/temachpedia_search', {
      "title": word
    }) as Observable<Transcription[]>
  }
}
