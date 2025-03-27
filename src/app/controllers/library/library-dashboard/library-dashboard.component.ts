import { Component } from '@angular/core';
import { LibraryService } from '../services/library.service';
import { Card } from 'primeng/card';
import { FormsModule } from '@angular/forms';
import { InputText } from 'primeng/inputtext';
import { Button, ButtonDirective } from 'primeng/button';
import { NgIf, NgFor } from '@angular/common';
import { TableModule } from 'primeng/table';
import { PrimeTemplate } from 'primeng/api';
import { Message } from 'primeng/message';

@Component({
  selector: 'app-library-dashboard',
  templateUrl: './library-dashboard.component.html',
  styleUrl: './library-dashboard.component.scss',
  imports: [
    Card,
    FormsModule,
    InputText,
    Button,
    ButtonDirective,
    NgIf,
    TableModule,
    PrimeTemplate,
    NgFor,
    Message,
  ],
})
export class LibraryDashboardComponent {
  books: any[] = []; // Para almacenar los libros obtenidos

  errorMessage: string = '';
  searchTitle: string = '';
  searchAuthor: string = '';

  constructor(private readonly libraryService: LibraryService) {}

  searchByTitle(title: string) {
    this.libraryService.searchBooksByTitle(title).subscribe({
      next: (data) => {
        this.books = data;
      },
      error: (err) => {
        this.errorMessage = err;
        console.error('Error al buscar por título:', err);
      },
    });
  }

  searchByAuthor(author: string) {
    this.libraryService.searchBooksByAuthor(author).subscribe({
      next: (data) => {
        this.books = data;
      },
      error: (err) => {
        this.errorMessage = err;
        console.error('Error al buscar por autor:', err);
      },
    });
  }

  openOrRequestBook(bookId: string) {
    this.libraryService.checkPermission(bookId).subscribe({
      next: (permission: { canAccess: boolean; downloadUrl: string }) => {
        if (permission.canAccess) {
          window.open(permission.downloadUrl, '_blank');
        } else {
          // Lógica para solicitar el libro
          this.libraryService.requestBook(bookId).subscribe({
            next: () => {
              alert('Solicitud enviada correctamente.');
            },
            error: (err) => {
              this.errorMessage = err;
              console.error('Error al solicitar el libro:', err);
            },
          });
        }
      },
      error: (err) => {
        this.errorMessage = err;
        console.error('Error al verificar permisos:', err);
      },
    });
  }
}
