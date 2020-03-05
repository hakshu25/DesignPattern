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

### デメリット

- クラスの数が余分に増えやすい