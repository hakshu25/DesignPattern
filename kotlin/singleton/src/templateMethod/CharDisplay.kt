package templateMethod

class CharDisplay(val char: Char) : AbstractDisplay {
  override fun open() {
    print("<<")
  }
  override fun print() {
    print(char)
  }
  override fun close() {
    print(">>")
  }
}