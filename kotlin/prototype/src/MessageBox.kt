package prototype

class MessageBox(private val decoChar: Char) : Product() {
    override fun use(str: String) {
        val length: Int = str.toByteArray().size
        for (i in 0..(length + 3)) {
            print(decoChar)
        }
        println()
        println("$decoChar $str $decoChar")
        for (i in 0..(length + 3)) {
            print(decoChar)
        }
        println()
    }

    override fun createClone(): Product {
        try {
            return clone() as Product
        } catch (e : CloneNotSupportedException) {
            throw e
        }
    }
}