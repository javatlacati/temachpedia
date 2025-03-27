import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExamenmachComponent } from './examenmach/examenmach.component';
import { RouterModule } from '@angular/router';
import { CardModule } from 'primeng/card';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { TooltipModule } from 'primeng/tooltip';
import { DropdownModule } from 'primeng/dropdown';
import { CalendarModule } from 'primeng/calendar';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: ExamenmachComponent,
      },
    ]),
    CardModule,
    FormsModule,
    InputTextModule,
    TooltipModule,
    DropdownModule,
    CalendarModule,
    ExamenmachComponent,
  ],
})
export class QuizModule {}
