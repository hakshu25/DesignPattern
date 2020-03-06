import { IdCardFactory } from './id-card-factory';
import { Product } from './product';

export class Main {
  static main() {
    const factory = new IdCardFactory();

    const card1: Product = factory.create('結城浩');
    const card2: Product = factory.create('とむら');
    const card3: Product = factory.create('佐藤花子');

    card1.use();
    card2.use();
    card3.use();
  }
}

Main.main();
