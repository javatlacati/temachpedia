import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'app-music-platforms',
  standalone: true,
  imports: [CardModule],
  templateUrl: './music-platforms.component.html',
  styleUrl: './music-platforms.component.scss',
})
export class MusicPlatformsComponent {}
