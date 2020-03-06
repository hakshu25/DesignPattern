import { Factory } from './factory';
import { Product } from './product';
import { IdCard } from './id-card';

export class IdCardFactory extends Factory {
  private _owners: string[] = [];

  createProduct(owner: string): Product {
    return new IdCard(owner);
  }

  registerProduct(product: Product): void {
    const card = product as IdCard;
    this._owners.push(card.owner);
  }

  get owners(): string[] {
    return this._owners;
  }
}