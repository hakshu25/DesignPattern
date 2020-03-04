package templateMethod

class StringDisplay(private val str: String) : AbstractDisplay() {
  private val width = str.toByteArray().size

  override fun open() {
    this.printLine()
  }
  override fun print() {
    println("|$str|")
  }
  override fun close() {
    this.printLine()
  }

  private fun printLine() {
    print("+")
    for (i in 1..width) print("-")
    println("+")
  }
}