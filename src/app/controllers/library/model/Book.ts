export interface Book {
  id: string;
  title: string;
  authors: Author[];
  downloadUrl: string;
}

export interface Author {
  name: string;
}
