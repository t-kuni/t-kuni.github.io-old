# Wockie

様々なOSSのドキュメントを行ったり来たりするのに疲れて作成したElectron製のGUIアプリケーションです。
Web上のドキュメントをローカルにインポートしてキーワードでまとめて全文検索できます。

![wockie-main.gif](https://camo.githubusercontent.com/9bd2e798db7ca6196105fd27d5eacc4192766674/68747470733a2f2f7261772e6769746875622e636f6d2f77696b692f7469676d69756d2f776f636b69652f323031392d30312d30365f31316831395f34332e676966)  
（Wockieでドキュメントをインポートして検索している図）  

全文検索にはelasticlunr.jsを使用しています。  
elasticlunr.jsについてはQiitaに[記事](https://qiita.com/t-kuni/items/410aac718e531c6aee17)を書いています。

## ソースコード

https://github.com/t-kuni/wockie

## アーキテクチャ

Electronにはレンダラプロセスとメインプロセスがあり、ビジネスロジックはメインプロセスで実行する様にしている。  
以下は、画面上で操作が行われた際の制御の遷移を表しています。

```
GUI上での操作        再レンダリング
    ↓                  ↑
    ↓ イベント発火      ↑ state更新
    ↓                  ↑
Vueコンポーネント(src/renderer/components/...)のイベントリスナ
    ↓                  ↑
    ↓ プロセス間通信    ↑ プロセス間通信
    ↓                  ↑
メインプロセス(src/main/index.js)のイベントリスナ
    ↓                  ↑
    ↓ 処理呼び出し      ↑ 処理終了
    ↓                  ↑
ビジネスロジック(src/renderer/services)実行
```
メインプロセスにプロセス間通信

## フォルダ構成

```
(root)			
├ src		
│ ├ main         # Electronのメインプロセス関連のフォルダ
│ ├ renderer
│ │ ├ assets     # 画像リソースなどが格納されているフォルダ
│ │ └ components # コンポーネントが格納されているフォルダ
│ ├ libraries	# npmに対応していない外部ライブラリが格納されているフォルダ
│ ├ router	
│ ├ services     # ビジネスロジックが格納されているフォルダ	
│ ├ store	
│ ├ style	
│ ├ App.vue
│ └ main.js      # Electronのレンダラープロセスのエントリーポイント
└ test		
　 └ unit	
　 　 └ specs    # ユニットテストが格納されているフォルダ
```

## 主な使用ライブラリ


* vue
    * UIコンポーネント
* vue-router
    * Vueのルータ
* vuex
    * Vueの状態管理
* axios
    * HTTPクライアント
* buefy
    * Vue用のUIコンポーネント
* bulma
    * CSSフレームワーク
* cheerio
    * jQueryライクにHTMLを操作できる
    * linkタグを再帰的に辿ったりテキストだけ抽出したりするのに使用している。
* elasticlunr
    * 全文検索