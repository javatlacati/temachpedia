import {Component, OnInit} from '@angular/core';
import {DatasetLoaderService} from "../services/dataset-loader.service";
import {Transcription} from "../model/Transcription";
import {PaginatorState} from "primeng/paginator";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  studentData: Transcription[] = [];
  searchQuery: string = '';
  matches: Transcription[] | undefined = undefined;

  //paginator
  first: number = 0;
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
    '11 - transcripts.json',
    '12 - transcripts.json',
    '13 - transcripts.json',
    '14 - transcripts.json',
    '15 - transcripts.json',
    // '16 - transcripts.json', video musical
    '17 - transcripts.json',
    '18 - transcripts.json',
    '19 - transcripts.json',
    '20 - transcripts.json',
    '21 - transcripts.json',
    '22 - transcripts.json',
    '23 - transcripts.json',
    '24 - transcripts.json',
    '25 - transcripts.json',
    '26 - transcripts.json',
    '27 - transcripts.json',
    '28 - transcripts.json',
    '29 - transcripts.json',
    '30 - transcripts.json',
    '31 - transcripts.json',
    '32 - transcripts.json',
    '33 - transcripts.json',
    '34 - transcripts.json',
    '35 - transcripts.json',
    '36 - transcripts.json',
    '37 - transcripts.json',
    '38 - transcripts.json',
    '39 - transcripts.json',
    '40 - transcripts.json',
    '41 - transcripts.json',
    '42 - transcripts.json',
    '43 - transcripts.json',
    '44 - transcripts.json',
    '45 - transcripts.json',
    '46 - transcripts.json',
    '47 - transcripts.json',
    '48 - transcripts.json',
    '49 - transcripts.json',
    '50 - transcripts.json',
    '51 - transcripts.json',
    '52 - transcripts.json',
    '53 - transcripts.json',
    '54 - transcripts.json',
    '55 - transcripts.json',
    '56 - transcripts.json',
    '57 - transcripts.json',
  ];

  constructor(private dataloader: DatasetLoaderService) {
    let loadFiles: Promise<Awaited<Transcription[] | null>[]> = Promise.all(dataloader.createQuestionsFromFile(this.fileNames));
    loadFiles.then(data => {

      if (data) {
        let aData = data;
        if (aData) {
          // console.log(`aData: ${JSON.stringify(aData[0])}`);
          aData.forEach(value => {
            if (value) {
              let valueElement = value[0];
              if (valueElement)
                this.studentData.push(valueElement);
            }
          });
          // console.log(`loaded data ${JSON.stringify(this.studentData)}`)
        }
      }
    });

  }

  ngOnInit() {

  }

  searchForText() {
    this.matches = JSON.parse(JSON.stringify(this.studentData));

    if (this.matches) {
      //deja videos que contengan por lo menos una vez la palabra
      this.matches = this.matches.filter((aVideoTranscription) => {
        return aVideoTranscription.transcript.some(phrase => phrase.text.includes(this.searchQuery))
      });
      //remplaza las transcripciones por aquellas que contengan la palabra a buscar
      this.matches.forEach(transcription => transcription.transcript = transcription.transcript.filter(phrase => phrase.text.includes(this.searchQuery)))
      // console.log(`strings: ${JSON.stringify(this.matches)}`)
      if (this.matches.length > 0) {
        this.first = 0;
      }
    }

  }

  onPageChange($event: PaginatorState) {
    this.first = $event.first || 0;
  }

}
