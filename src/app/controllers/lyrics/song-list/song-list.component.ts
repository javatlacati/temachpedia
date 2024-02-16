import { Component } from '@angular/core';
import { type Lyric } from '../model/Lyric';
import { type LyricsService } from '../services/lyrics.service';

@Component({
  selector: 'app-song-list',
  templateUrl: './song-list.component.html',
  styleUrls: ['./song-list.component.scss'],
})
export class SongListComponent {
  lyrics: Lyric[] = [];

  constructor(lyricsService: LyricsService) {
    this.lyrics = lyricsService.lyrics;
  }
}
