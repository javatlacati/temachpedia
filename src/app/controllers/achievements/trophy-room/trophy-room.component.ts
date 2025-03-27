import { Component, Renderer2 } from '@angular/core';
import { AchievementService } from '../services/achievement.service';
import { Achievement } from '../model/Achievement';
import { Card } from 'primeng/card';
import { NgFor } from '@angular/common';
import { Chip } from 'primeng/chip';
import { Carousel } from 'primeng/carousel';
import { PrimeTemplate } from 'primeng/api';
import { Button } from 'primeng/button';

@Component({
  selector: 'app-trophy-room',
  templateUrl: './trophy-room.component.html',
  styleUrls: ['./trophy-room.component.scss'],
  imports: [Card, NgFor, Chip, Carousel, PrimeTemplate, Button],
})
export class TrophyRoomComponent {
  layout: 'grid' | 'list' = 'list';
  categories: string[] = [
    'Superación personal',
    'Negocios',
    'Estudio',
    'Relaciones',
    'Cambio físico',
  ];

  heads: Achievement[] = [];
  responsiveOptions: any;

  constructor(
    private readonly renderer: Renderer2,
    private readonly service: AchievementService,
  ) {
    service.heads.subscribe((heads) => {
      this.heads = heads;
      console.log(this.heads);
    });

    this.responsiveOptions = [
      {
        breakpoint: '1199px',
        numVisible: 1,
        numScroll: 1,
      },
      {
        breakpoint: '991px',
        numVisible: 2,
        numScroll: 1,
      },
      {
        breakpoint: '767px',
        numVisible: 1,
        numScroll: 1,
      },
    ];

    renderer.setStyle(document.body, 'background-image', "url('/assets/cavern room.webp')");
  }
}
