import { Singleton } from "./singleton";

class Main {
  public static main() {
    const obj1: Singleton = Singleton.getInstance();
    const obj2: Singleton = Singleton.getInstance();
    if (obj1 === obj2) {
      console.log('obj1とobj2は同じインスタンスである');
    } else {
      console.log('obj1とobj2は異なるインスタンスである');
    }
  }
}

Main.main();