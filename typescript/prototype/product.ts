export interface Product {
  use(str: string): void;
  createClone(): Product;
}