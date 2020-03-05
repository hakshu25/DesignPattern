package iterator

class BookShelfIterator(private val bookShelf: BookShelf) : Iterator<Book> {
    private var index = 0

    override fun hasNext(): Boolean {
        if (index < bookShelf.length) {
            return true
        }
        return false
    }

    override fun next(): Book {
        val book = bookShelf.getBookAt(index)
        this.index++
        return book as Book
    }
}