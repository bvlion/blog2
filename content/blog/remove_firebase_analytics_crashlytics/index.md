---
title: 個人開発アプリから Firebase Analytics / Crashlytics を外しました
date: 2026-09-23
tags: [技術,Android,Firebase]
image: head.jpg
description: 個人開発の Android アプリから、ほとんど利用していなかった Firebase Analytics / Crashlytics を外しました。
layout: post_with_image
---

最近、個人で公開している Android アプリの Play Console 周りを整理しています。  
Data safety の申告内容を確認するため Firebase Analytics や Crashlytics について調べていたのですが、  
その途中でふと**そもそもこのデータほとんど見てないな…** ということに気が付きました(^^;  
そこで [DAIgoAPP](https://github.com/bvlion/DAIgoAPP) と [WearLink](https://github.com/bvlion/WearLink) から Firebase Analytics / Crashlytics を外すことにしました。

## 使っていないなら外してしまう

DAIgoAPP では Analytics と Crashlytics、WearLink では Crashlytics を利用していました。  
ですが Analytics の結果を見て機能を改善したり、Crashlytics から不具合を追ったりすることはほとんどありませんでした。  
Crashlytics は少し迷いましたが、クラッシュや ANR については Google Play の Android Vitals でも確認できます。  
WearLink では非致命的例外も Crashlytics に記録していましたが、こちらもほとんど見ていなかったため、今回はまとめて外すことにしました(*･ω･)ﾉ

一方、この2アプリで Firebase Analytics / Crashlytics を使い続けるためには SDK だけでなく、

- Gradle Plugin や dependency
- `google-services.json`
- GitHub Actions の Secrets
- Data safety の申告
- プライバシーポリシー

なども管理します。  
ほとんど確認していない計測・診断データのためにこれらを維持するより、無い方がシンプルだと判断しました。  
今回は送信を OFF にするだけではなく、Firebase SDK や関連 Plugin、`google-services.json` まで含めて撤去しています。

## プライバシー面でも分かりやすくなった

これは主目的ではありませんでしたが、副作用として良かったところです。  
Analytics や Crashlytics を外したことで、アプリの利用状況やクラッシュ・診断情報を Firebase へ送る SDK や処理もなくなりました。  
ただし、この2アプリには本来の機能として端末外へデータを送る処理があるため、Firebase を外したからといって Data safety 上の「収集」がなくなるわけではありません。  
**使っていない計測・診断データは増やさない**という意味では分かりやすくなりました(･∀･)

もちろん Analytics や Crashlytics を実際に活用しているアプリなら便利な仕組みです。  
今回は単純に、私のアプリではその役割がなくなっていました。

## まとめ

「とりあえず入れておこう」で追加した仕組みも、長く運用していると本当に必要なのか分からなくなることがあります。  
今回 Data safety を見直したことで、それに気付けたのは良かったです。  
必要になれば、また入れればいい。  
しばらくは Firebase なしのシンプルな構成で運用してみようと思います(^^)