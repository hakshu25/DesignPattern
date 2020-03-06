import { PrintBannerByExtention, PrintBannerByDelegation } from "./print-banner";

class Main {
  static main() {
    const pByE = new PrintBannerByExtention('Extend');
    const pByD = new PrintBannerByDelegation('Delegate');
    pByE.printWeak();
    pByE.printStrong();
    pByD.printWeak();
    pByD.printStrong();
  }
}

Main.main();