package iterator

class BookShelf(max: Int) : Aggregate<Book> {
    private val books = arrayOfNulls<Book>(max)
    private var last = 0
    val length: Int get() = last

    fun getBookAt(index: Int): Book? {
        return books[index]
    }

    fun appendBook(book: Book) {
        books[last] = book
        last++
    }

    override fun iterator(): Iterator<Book> {
        return BookShelfIterator(this)
    }
}