import {Component, OnInit} from '@angular/core';
import {Transcription} from "../model/Transcription";
import {PaginatorState} from "primeng/paginator";
import {TranscriptService} from "../services/transcript.service";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  searchQuery: string = '';
  matches: Transcription[] | undefined = undefined;

  //paginator
  first: number = 0;

  constructor(private transcriptionService: TranscriptService) {

  }

  ngOnInit() {

  }

  searchForText() {
    this.matches = [];
    if (this.matches) {
      this.transcriptionService.getTransriptForWord(this.searchQuery).subscribe(value => {
          // console.log(JSON.stringify(value));
          this.matches = value;
          if (this.matches.length > 0) {
            this.first = 0;
          }
        }
      );
    }

  }

  onPageChange($event: PaginatorState) {
    this.first = $event.first || 0;
  }

}
