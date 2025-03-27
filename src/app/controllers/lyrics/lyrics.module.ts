import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SongListComponent } from './song-list/song-list.component';
import { SongComponent } from './song/song.component';
import { RouterModule } from '@angular/router';
import { CardModule } from 'primeng/card';
import { YouTubePlayerModule } from '@angular/youtube-player';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: SongListComponent },
      { path: 'song/:title', component: SongComponent },
    ]),
    YouTubePlayerModule,
    CardModule,
    SongListComponent,
    SongComponent,
  ],
})
export class LyricsModule {}
