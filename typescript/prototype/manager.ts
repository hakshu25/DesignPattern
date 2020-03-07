import { Product } from './product';

export class Manager {
  private showcase: { [name: string]: Product } = {};

  register(name: string, proto: Product): void {
    this.showcase[name] = proto;
  }

  create(protoname: string): Product {
    const p: Product = this.showcase[protoname];
    return p.createClone();
  }
}