import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Author, Book } from '../model/Book';

@Injectable({
  providedIn: 'root',
})
export class LibraryService {
  books: Book[] = [
    {
      id: '1',
      title: 'Cuestión de Vida',
      authors: [{ name: 'White Shit State' }, { name: 'Ruga Kisin' }],
      downloadUrl:
        'https://diarioistmo.blob.core.windows.net.optimalcdn.com/docs/2023/12/14/puco1214_01_1702559543048.pdf',
    },
  ];

  searchBooksByTitle(title: string): Observable<Book[]> {
    const lowerCaseTitle = title.toLowerCase();
    const filteredBooks = this.books.filter((book) =>
      book.title.toLowerCase().includes(lowerCaseTitle),
    );
    return of(filteredBooks);
  }

  searchBooksByAuthor(author: string): Observable<Book[]> {
    const lowerCaseAuthor = author.toLowerCase();
    const filteredBooks = this.books.filter((book) =>
      book.authors.some((a: Author) => a.name.toLowerCase().includes(lowerCaseAuthor)),
    );
    return of(filteredBooks);
  }

  checkPermission(bookId: string) {
    const book = this.books.find((b) => b.id === bookId);
    if (book === undefined) {
      return of({ canAccess: false, downloadUrl: '' });
    } else {
      // Simula la lógica de permisos. Aquí, como ejemplo, todos tienen permiso.
      return of({ canAccess: true, downloadUrl: book.downloadUrl });
    }
  }

  requestBook(bookId: string): Observable<number> {
    // Simula el envío de una solicitud para acceder a un libro.
    console.log(`Solicitud enviada para el libro con ID: ${bookId}`);
    return of(0);
  }
}
