package byExtention

class PrintBanner(str: String) : Banner(str), Print {
    override fun printWeak() {
        super.showWithParen()
    }

    override fun printStrong() {
        super.showWithAster()
    }
}