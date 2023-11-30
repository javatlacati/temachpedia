import {Component} from '@angular/core';
import {LyricsService} from "../services/lyrics.service";
import {Lyric} from "../model/Lyric";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-song',
  templateUrl: './song.component.html',
  styleUrls: ['./song.component.scss']
})
export class SongComponent {
  song: Lyric | undefined;

  constructor(lyricsService: LyricsService, private route: ActivatedRoute) {
    let title = this.route.snapshot.paramMap.get("title");
    if (title) {
      this.song = lyricsService.getSongBytitle(title);
    }
  }

}
