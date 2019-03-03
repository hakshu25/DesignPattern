import { AbstractDisplay } from "./abstract-display";

export class StringDisplay extends AbstractDisplay {
  private width: number;
  constructor(private string: string) {
    super();
    this.width = this.getBytes(this.string);
  }

  private getBytes(str: string): number {
    return(encodeURIComponent(str).replace(/%../g,"x").length);
  }

  public open(): void {
    this.printLine();
  }

  public print(): void {
    console.log(`|${this.string}|`);
  }

  public close(): void {
    this.printLine();
  }

  public printLine(): void {
    process.stdout.write('+');
    for (let i: number = 0; i < this.width; i++) {
      process.stdout.write('-');
    }
    console.log('+');
  }
}