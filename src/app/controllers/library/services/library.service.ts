import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LibraryService {
  books: any[] = [
    {
      id: '1',
      title: 'Cuestión de Vida',
      authors: ['White Shit State', 'Ruga Kisin'],
      downloadUrl:
        'https://diarioistmo.blob.core.windows.net.optimalcdn.com/docs/2023/12/14/puco1214_01_1702559543048.pdf',
    },
  ];

  searchBooksByTitle(title: string) {
    const lowerCaseTitle = title.toLowerCase();
    const filteredBooks = this.books.filter((book) =>
      book.title.toLowerCase().includes(lowerCaseTitle),
    );
    return of(filteredBooks);
  }

  searchBooksByAuthor(author: string) {
    const lowerCaseAuthor = author.toLowerCase();
    const filteredBooks = this.books.filter((book) =>
      book.authors.some((a: string) => a.toLowerCase().includes(lowerCaseAuthor)),
    );
    return of(filteredBooks);
  }

  checkPermission(bookId: string) {
    const book = this.books.find((b) => b.id === bookId);
    if (!book) {
      return of({ canAccess: false, downloadUrl: '' });
    }
    // Simula la lógica de permisos. Aquí, como ejemplo, todos tienen permiso.
    return of({ canAccess: true, downloadUrl: book.downloadUrl });
  }

  requestBook(bookId: string) {
    // Simula el envío de una solicitud para acceder a un libro.
    console.log(`Solicitud enviada para el libro con ID: ${bookId}`);
    return of(0);
  }
}
