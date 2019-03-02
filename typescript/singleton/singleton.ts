export class Singleton {
  private static instance = new Singleton();
  // コンストラクタを公開しないことでインスタンスが単一であることを保証する
  private constructor() {}

  public static getInstance(): Singleton {
    return this.instance;
  }
}