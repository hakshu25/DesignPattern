import { Banner } from "./banner";
import { Printer, Print } from "./print";

export class PrintBannerByExtention extends Banner implements Printer {
  constructor(str: string) {
    super(str);
  }

  printWeak(): void {
    this.showWithParen();
  }

  printStrong(): void {
    this.showWithAster();
  }
}

export class PrintBannerByDelegation extends Print {
  private banner: Banner;

  constructor(str: string) {
    super();
    this.banner = new Banner(str);
  }

  printWeak(): void {
    this.banner.showWithParen();
  }

  printStrong(): void {
    this.banner.showWithAster();
  }
}