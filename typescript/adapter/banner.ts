export class Banner {
  constructor(private str: string) {}

  showWithParen(): void {
    console.log(`(${this.str})`);
  }

  showWithAster(): void {
    console.log(`*${this.str}*`);
  }
}