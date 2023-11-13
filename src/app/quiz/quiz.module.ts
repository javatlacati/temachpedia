import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ExamenmachComponent} from './examenmach/examenmach.component';
import {RouterModule} from "@angular/router";


@NgModule({
  declarations: [
    ExamenmachComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: 'signin', component: ExamenmachComponent},
    ])
  ]
})
export class QuizModule {
}
