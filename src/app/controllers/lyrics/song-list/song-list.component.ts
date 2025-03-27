import { Component } from '@angular/core';
import { type Lyric } from '../model/Lyric';
import { LyricsService } from '../services/lyrics.service';
import { NgFor } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-song-list',
  templateUrl: './song-list.component.html',
  styleUrls: ['./song-list.component.scss'],
  imports: [NgFor, RouterLink],
})
export class SongListComponent {
  lyrics: Lyric[] = [];

  constructor(lyricsService: LyricsService) {
    this.lyrics = lyricsService.lyrics;
  }
}
