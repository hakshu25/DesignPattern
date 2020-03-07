package prototype

class UnderlinePen(private val ulChar: Char) : Product() {
    override fun use(str: String) {
        val length: Int = str.toByteArray().size
        println("*$str*")
        print(" ")
        for (i in 0..(length - 1)) {
            print(ulChar)
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