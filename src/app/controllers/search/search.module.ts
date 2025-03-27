import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { CardModule } from 'primeng/card';
import { PaginatorModule } from 'primeng/paginator';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';
import { InputTextModule } from 'primeng/inputtext';
import { SearchComponent } from './search.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: SearchComponent }]),
    CardModule,
    PaginatorModule,
    ButtonModule,
    ToastModule,
    InputTextModule,
    FormsModule,
    SearchComponent,
  ],
  providers: [provideHttpClient(withInterceptorsFromDi())],
})
export class SearchModule {}
