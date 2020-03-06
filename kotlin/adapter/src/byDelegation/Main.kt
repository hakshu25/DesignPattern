package byDelegation

fun main(args: Array<String>) {
    val p: Print = PrintBanner("Hello")
    p.printWeak()
    p.printStrong()
}