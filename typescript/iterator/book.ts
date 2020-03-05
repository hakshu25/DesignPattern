export class Book {
  constructor(private name: string) {}

  get title(): string {
    return this.name;
  }
}
