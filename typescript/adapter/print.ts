export interface Printer {
  printWeak(): void;
  printStrong(): void;
}

export abstract class Print {
  abstract printWeak(): void;
  abstract printStrong(): void;
}