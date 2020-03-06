package factoryMethod

class IdCardFactory : Factory() {
    val owners = arrayListOf<String>()

    override fun createProduct(owner: String): Product {
        return IdCard(owner)
    }

    override fun registerProduct(product: Product) {
        val card = product as IdCard
        this.owners.add(card.owner)
    }
}