package singleton

fun main(args: Array<String>) {
    val obj1 = Singleton
    val obj2 = Singleton
    if (obj1 === obj2) {
        println("obj1とobj2は同じインスタンスである")
    } else {
        println("obj1とobj2は異なるインスタンスである")
    }
}