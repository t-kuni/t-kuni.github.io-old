# Github-Issue-2-Anki-Card

英語のリーディング力向上のために作成したPHPのスクリプトです。  
毎朝、[Anki](http://rs.luminousspice.com/how-to-anki/#i-1)に新しい問題を配信してくれます。
（※AnkiはスマホやWebで暗記カードを作成して学習できるアプリ＆Webサイト）  

![anki_card.png](https://raw.githubusercontent.com/t-kuni/github-issue-2-anki-card/master/docs/anki_card.png)
  
具体的には、Github Issue APIから英文を取得し、Google Translate APIに掛けて日本語化し  
表面が英語、裏面がその日本語訳となる暗記カードをAnkiに登録します。  
AnkiにはAPIが用意されていないためPuppeteer(ヘッドレスchrome)を使用してログイン＆カード追加を行っています。  

## アーキテクチャ



![architecture.png](https://raw.githubusercontent.com/t-kuni/github-issue-2-anki-card/master/docs/architecture.png)


## フォルダ構成

