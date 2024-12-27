import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Author, Book } from '../model/Book';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class LibraryService {
  books: Book[] = [];

  constructor(http: HttpClient) {
    http.get<Book[]>(`${environment.dataApi}/books`).subscribe((books) => {
      this.books = books;
    });
  }

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
