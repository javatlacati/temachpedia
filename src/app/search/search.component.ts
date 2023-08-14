import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {DatasetLoaderService} from "../services/dataset-loader.service";
import {Transcript, Transcription} from "../model/Transcription";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  studentData: Transcription[] = [];
  searchQuery: string = '';
  matches: Transcription[] | undefined = undefined;
  readonly fileNames = [
    '1 - transcripts.json',
    '2 - transcripts.json',
    '3 - transcripts.json',
    '4 - transcripts.json',
    '5 - transcripts.json',
    '6 - transcripts.json',
    '7 - transcripts.json',
    '8 - transcripts.json',
    '9 - transcripts.json',
    '10 - transcripts.json',
  ];

  constructor(private dataloader: DatasetLoaderService) {
    let loadFiles: Promise<Awaited<Transcription[] | null>[]> = Promise.all(dataloader.createQuestionsFromFile(this.fileNames));
    loadFiles.then(data => {

      if (data) {
        let aData = data;
        if (aData) {
          console.log(`aData: ${JSON.stringify(aData[0])}`);
          aData.forEach(value => {
            if (value) {
              let valueElement = value[0];
              if (valueElement)
                this.studentData.push(valueElement);
            }
          });
          console.log(`loaded data ${JSON.stringify(this.studentData)}`)
        }
      }
    });

  }

  ngOnInit() {

  }

  searchForText() {
    this.matches = this.studentData;

    //deja videos que contengan por lo menos una vez la palabra
    this.matches = this.matches.filter((aVideoTranscription) => {
      return aVideoTranscription.transcript.some(phrase => phrase.text.includes(this.searchQuery))
    });
    //remplaza las transcripciones por aquellas que contengan la palabra a buscar
    this.matches.forEach(transcription => transcription.transcript = transcription.transcript.filter(phrase => phrase.text.includes(this.searchQuery)))
    console.log(`strings: ${JSON.stringify(this.matches)}`)

  }

  protected readonly undefined = undefined;
}
