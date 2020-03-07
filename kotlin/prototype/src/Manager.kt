package prototype

class Manager {
    private val showcase: HashMap<String, Product> = hashMapOf()

    fun register(name: String, proto: Product) {
        showcase[name] = proto
    }

    fun create(protoName: String): Product {
        return showcase.getValue(protoName).createClone()
    }
}