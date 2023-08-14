import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Transcription} from "../model/Transcription";

@Injectable({
  providedIn: 'root'
})
export class DatasetLoaderService {
  private static readonly BASE_PATH = '/assets/';

  constructor(private httpClient: HttpClient) {
  }

  createQuestionsFromFile(fileNames: string[]): Promise<Transcription[] | null>[] {
    return fileNames.map(fileName => this.httpClient.get(DatasetLoaderService.BASE_PATH + fileName, {responseType: "json"})
      .toPromise().then(transcriptionText => {
        if (transcriptionText) {
          return (transcriptionText as any) as Transcription[];
        } else {
          return null;
        }
      })
    );
  }
}
