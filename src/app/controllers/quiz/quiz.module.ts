import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExamenmachComponent } from './examenmach/examenmach.component';
import { RouterModule } from '@angular/router';
import { CardModule } from 'primeng/card';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { TooltipModule } from 'primeng/tooltip';
import { SelectModule } from 'primeng/select';
import { DatePickerModule } from 'primeng/datepicker';

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
    SelectModule,
    DatePickerModule,
    ExamenmachComponent,
  ],
})
export class QuizModule {}
