import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search.component';
import { RouterModule } from '@angular/router';
import { CardModule } from 'primeng/card';
import { PaginatorModule } from 'primeng/paginator';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';
import { InputTextModule } from 'primeng/inputtext';

@NgModule({
  declarations: [SearchComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: SearchComponent }]),
    CardModule,
    PaginatorModule,
    ButtonModule,
    ToastModule,
    InputTextModule,
  ],
})
export class SearchModule {}
