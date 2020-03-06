package byDelegation

class PrintBanner(str: String) : Print {
    private val banner = Banner(str)

    override fun printWeak() {
        banner.showWithParen()
    }

    override fun printStrong() {
        banner.showWithAster()
    }
}