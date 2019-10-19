# 当該ポートフォリオについて

Vue+Vuex+Vue-Routerを使ったSPAとなっており、Fluxアーキテクチャとatomicデザインを採用しています。
  
本番環境はgithub.ioにホスティングされています。

[読書ページ](https://t-kuni.github.io/books)の本データなどのリソースはyamlで定義されており
[yaml-loader](https://github.com/okonet/yaml-loader)で読み込んでいます。  
今見ているこの文章もマークダウンで記述されており[markdown-loader](https://github.com/peerigon/markdown-loader)で読み込んでいます。

## ソースコード

https://github.com/t-kuni/t-kuni.github.io/tree/src

## フォルダ構成

```
(root)			
└ src
　 ├ assets       # 画像やテキストなどのリソースが格納されているフォルダ
　 │ ├ products   # 「個人製作」ページのコンテンツが格納されているフォルダ
　 │ └ books.yml  # 「読書」ページのリソース
　 ├ components   # Vueコンポーネントが格納されているフォルダ
　 │ ├ atoms
　 │ ├ molecules
　 │ ├ organisms
　 │ └ pages
　 ├ App.vue      # 基底となるコンポーネント
　 ├ main.js      # 処理の起点となるスクリプト
　 ├ store.js     # Vuexストアの定義
　 ├ getters.js 
　 ├ mutations.js
　 ├ state.js
　 ├ router.js    # Vue-Routerの定義
　 └ routes.js
```