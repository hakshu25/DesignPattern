package templateMethod

class StringDisplay(val str: String) : AbstractDisplay {
  val width = str.length

  override fun open() {
    this.printLine()
  }
  override fun print() {
    println("|${str}|")
  }
  override fun close() {
    this.printLine()
  }

  private printLine(): Unit {
    print("+")
    for (i in width) print("-")
    println("+")
  }
}