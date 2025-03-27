import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LibraryDashboardComponent } from './library-dashboard/library-dashboard.component';
import { RouterModule } from '@angular/router';
import { TableModule } from 'primeng/table';
import { MessageModule } from 'primeng/message';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: LibraryDashboardComponent }]),
    TableModule,
    MessageModule,
    InputTextModule,
    FormsModule,
    ButtonModule,
    CardModule,
    LibraryDashboardComponent,
  ],
})
export class LibraryModule {}
