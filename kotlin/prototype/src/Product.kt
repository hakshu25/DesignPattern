package prototype

abstract class Product : Cloneable {
    abstract fun use(str: String)
    abstract fun createClone(): Product
}