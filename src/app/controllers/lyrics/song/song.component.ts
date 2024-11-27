import {
  type AfterViewInit,
  ChangeDetectorRef,
  Component,
  type ElementRef,
  type OnDestroy,
  ViewChild,
} from '@angular/core';
import { LyricsService } from '../services/lyrics.service';
import { Lyric } from '../model/Lyric';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-song',
  templateUrl: './song.component.html',
  styleUrls: ['./song.component.scss'],
  standalone: false,
})
export class SongComponent implements AfterViewInit, OnDestroy {
  song: Lyric | undefined;
  videoWidth: number | undefined;
  videoHeight: number | undefined;
  @ViewChild('demoYouTubePlayer', { static: false }) demoYouTubePlayer!: ElementRef<HTMLDivElement>;

  constructor(
    lyricsService: LyricsService,
    private readonly route: ActivatedRoute,
    private readonly _changeDetectorRef: ChangeDetectorRef,
  ) {
    const title = this.route.snapshot.paramMap.get('title');
    this.song = lyricsService.getSongBytitle(title ?? '');
  }

  ngAfterViewInit(): void {
    console.log(this.demoYouTubePlayer.nativeElement.clientWidth);
    window.addEventListener('resize', this.onResize);
    this.onResize();
  }

  ngOnDestroy(): void {
    window.removeEventListener('resize', this.onResize);
  }

  onResize = () => {
    setTimeout(() => {
      this.videoWidth = Math.min(this.demoYouTubePlayer.nativeElement.clientWidth, 1200);
      this.videoHeight = this.videoWidth * 0.6;
      this._changeDetectorRef.detectChanges();
    }, 1000);
  };
}
