import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrophyRoomComponent } from './trophy-room/trophy-room.component';
import { RouterModule } from '@angular/router';
import { CardModule } from 'primeng/card';
import { TagModule } from 'primeng/tag';
import { ButtonModule } from 'primeng/button';
import { CarouselModule } from 'primeng/carousel';
import { ChipModule } from 'primeng/chip';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: TrophyRoomComponent }]),
    CardModule,
    TagModule,
    ButtonModule,
    CarouselModule,
    ChipModule,
    TrophyRoomComponent,
  ],
})
export class AchievementsModule {}
