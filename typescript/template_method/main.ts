import { CharDisplay } from "./char-display";
import { AbstractDisplay } from "./abstract-display";
import { StringDisplay } from "./string-display";

class Main {
  public static main() {
    const d1: AbstractDisplay = new CharDisplay('H');
    const d2: AbstractDisplay = new StringDisplay('Hello, world.');
    const d3: AbstractDisplay = new StringDisplay('こんにちは。');
    d1.display();
    d2.display();
    d3.display();
  }
}

Main.main();