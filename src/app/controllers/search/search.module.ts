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
  providers: [provideHttpClient(withInterceptorsFromDi())],
})
export class SearchModule {}
