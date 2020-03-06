import { Product } from "./product";

export class IdCard extends Product {
  constructor(private _owner: string) {
    super();
    console.log(`${_owner}のカードを作ります`);
  }

  use(): void {
    console.log(`${this._owner}のカードを使います`);
  }

  get owner(): string {
    return this._owner;
  }
}