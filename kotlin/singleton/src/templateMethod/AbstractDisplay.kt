package templateMethod

abstract class AbstractDisplay {
  abstract fun open(): Unit
  abstract fun print(): Unit
  abstract fun close(): Unit
  // Template Method
  fun display(): Unit {
    this.open()
    for (i in 1..5) this.print()
    this.close()
  }
}