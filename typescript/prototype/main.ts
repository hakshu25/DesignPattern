import { Manager } from './manager';
import { UnderlinePen } from './underline-pen';
import { MessageBox } from './message-box';
import { Product } from './product';

export class Main {
  static main() {
    const manager = new Manager();
    const upen = new UnderlinePen('~');
    const mbox = new MessageBox('*');
    const sbox = new MessageBox('/');
    manager.register('strong message', upen);
    manager.register('warning box', mbox);
    manager.register('slash box', sbox);

    const p1: Product = manager.create('strong message');
    p1.use('Hello, world.');
    const p2: Product = manager.create('warning box');
    p2.use('Hello, world.');
    const p3: Product = manager.create('slash box');
    p3.use('Hello, world.');
  }
}

Main.main();
