import {Component, OnInit} from '@angular/core';
import {Transcription} from "../model/Transcription";
import {PaginatorState} from "primeng/paginator";
import {TranscriptService} from "../services/transcript.service";
import {MessageService} from "primeng/api";

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

  constructor(private transcriptionService: TranscriptService, private messageService: MessageService) {

  }

  ngOnInit() {

  }

  searchForText() {
    if (this.searchQuery.length > 4) {
      this.matches = [];
      if (this.matches) {
        this.transcriptionService.getTransriptForWord(this.searchQuery).subscribe(value => {
            console.log(JSON.stringify(value));
            this.matches = value;
            if (this.matches.length > 0) {
              this.first = 0;
            } else {
              this.messageService.add({
                severity: 'info',
                summary: 'Sin resultados',
                detail: 'No se encontraron resultados'
              });
            }
          }
        );
      }
    } else {
      this.messageService.add({
        severity: 'warn',
        summary: 'Sin consulta',
        detail: 'Por favor especifique un término de búsqueda con al menos 5 letras'
      });
    }
  }

  onPageChange($event: PaginatorState) {
    this.first = $event.first || 0;
  }

}
