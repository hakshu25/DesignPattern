# DesignPattern

デザインパターン勉強用

## 実行方法

- Kotlin
  - IntelliJ IDEAにて各Main.ktを実行
- TypeScript

```bash
$ cd DesignPattern
$ yarn install
$ yarn ts-node ./typescript/**/main.ts
>Print any result
```

---

## Singleton

### 目的

- 指定したクラスのインスタンスが絶対に1個しか生成されないことを保証

### クラス図

![Singleton](https://user-images.githubusercontent.com/32229790/75941235-7490a100-5ed2-11ea-8452-02d061bc6806.png)

### 仕様

- インスタンスをprivateなメンバ変数として定義する
- コンストラクタをprivateにする
- 外部からメンバ変数のインスタンスを取得するpublicなメンバメソッドを用意する

### メリット

- オブジェクトの生成数をコントロールできる

### デメリット

- 実質グローバル変数である
- 暗黙の依存関係を生む
- このクラスを外部から渡せなくなり、ユニットテストしづらい
- マルチスレッドだとアクセスへのロックが必要

## Template Method

### 目的

- 処理の枠組みを定める

### クラス図

![Template Method](https://user-images.githubusercontent.com/32229790/75941317-a99cf380-5ed2-11ea-9048-eb9342a5472e.png)

### 仕様

- スーパークラスの抽象クラスで処理の枠組みを決める
- サブクラスで具体的な処理内容を定める
- 共通メソッドは処理内容をスーパークラスで定義する
- サブクラスに任せる処理はスーパークラスで抽象メソッドとして定義する

### メリット

- ロジックを複数クラスで共通化でき、バグ修正が容易になる

## Iterator

### 目的

- 要素を順番にスキャンする処理を抽象化する

### クラス図

![Iterator](https://user-images.githubusercontent.com/32229790/75942601-34332200-5ed6-11ea-84a1-a969c5105575.png)

### 仕様

- 集約インターフェースがIteratorを生成する
- Iteratorは次の要素が存在するかの判断と、次の要素の取得ができる

### メリット

- Iteratorを使う側の実装と切り離して数え上げを行うことができる

## Adapter

### 目的

- 既存のものをそのまま流用できない時に必要な形で使えるようにする

### クラス図

![Adapter 委譲パターン](https://user-images.githubusercontent.com/32229790/75974969-09b78800-5f1b-11ea-97b8-c8091846659c.png)

![Adapter 継承パターン](https://user-images.githubusercontent.com/32229790/75974985-0de3a580-5f1b-11ea-85a1-2d01a572dffc.png)

### 仕様

- 継承もしくは委譲で実現する
- 既存のものをWrapする形のAPIを提供する

### メリット

- 既存のオブジェクトのAPIを変えずに新しいAPIに適合させることができる
- ライブラリで使えば、古いバージョンと新しいバージョンを共存させられる
