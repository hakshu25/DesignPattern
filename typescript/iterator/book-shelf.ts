import { Aggregate } from "./aggregate";
import { Book } from "./book";
import { Iterator } from "./iterator";
import { BookShelfIterator } from "./book-shelf-iterator";

export class BookShelf implements Aggregate<Book> {
  private books: Book[];
  private last = 0;
  constructor(max: number) {
    this.books = new Array(max);
  }

  getBookAt(index: number): Book {
    return this.books[index];
  }

  appendBook(book: Book): void {
    this.books[this.last] = book;
    this.last++;
  }

  iterator(): Iterator<Book> {
    return new BookShelfIterator(this);
  }

  get length(): number {
    return this.last;
  }
}
