import { Iterator } from "./iterator";
import { BookShelf } from "./book-shelf";
import { Book } from "./book";

export class BookShelfIterator implements Iterator<Book> {
  private index = 0;

  constructor(private bookShelf: BookShelf) {}

  hasNext(): boolean {
    if (this.index < this.bookShelf.length) {
      return true;
    }
    return false;
  }

  next(): Book {
    const book = this.bookShelf.getBookAt(this.index);
    this.index++;
    return book;
  }
}
