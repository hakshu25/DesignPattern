import { AbstractDisplay } from "./abstract-display";

export class CharDisplay extends AbstractDisplay {
  constructor(private ch: string) {
    super();
  }

  public open(): void {
    process.stdout.write('<<');
  }

  public print(): void {
    process.stdout.write(this.ch);
  }

  public close(): void {
    console.log('>>');
  }
}