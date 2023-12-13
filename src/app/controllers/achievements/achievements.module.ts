import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TrophyRoomComponent} from './trophy-room/trophy-room.component';
import {RouterModule} from "@angular/router";
import {CardModule} from "primeng/card";

@NgModule({
  declarations: [
    TrophyRoomComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: '', component: TrophyRoomComponent},
    ]),
    CardModule,
  ]
})
export class AchievementsModule {
}
