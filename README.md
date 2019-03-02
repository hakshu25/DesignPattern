# DesignPattern

デザインパターン勉強用

## 実行方法

- Kotlin
  - IntelliJ IDEAにて各Main.ktを実行
- TypeScript

```bash
$ cd DesignPattern
$ yarn install
$ ts-node ./typescript/**/main.ts
>Print any result
```

---

## Singleton

### 目的

- 指定したクラスのインスタンスが絶対に1個しか生成されないことを保証

### クラス図

![Singleton](https://github.com/flyhighair/DesignPattern/blob/feature/singleton/class_diagrams/singleton/singleton.png)

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
