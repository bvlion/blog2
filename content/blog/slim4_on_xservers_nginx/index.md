---
title: XServer にデプロイした Slim のアプリで Authorization を取得する
date: 2024-03-10
tags: [技術,PHP]
image: head.jpg
description: XServer にデプロイした Slim FW で作ったアプリで Authorization が取得できなかった時の解決策を記事にしました！
layout: post_with_image
---
個人アプリのサーバー側を Slim4 に移行しました！  
その際 Authorization が取れず四苦八苦した記録です…

## 経緯

個人で[略語Generator](https://play.google.com/store/apps/details?id=net.ambitious.daigoapp.android&pli=1)なるアプリを作ってリリースしています(･∀･)  
元々は Kuromoji を Kotlin から使って形態素解析ができ、いい感じにアルファベットにもできたのでアプリにしようと思ったんですが、これが辞書もあるためなかなかの大サイズ…  
APK ファイルが大きすぎるのを防ぐべく、解析はサーバー側ですべく一旦 [API という形](https://github.com/bvlion/DAIgoAPI)で GCP に置いてリリースまで実施しました！

そのまままぁまぁな期間運用していたのですが、最近自社の SRE でも料金見直しを実施していて、自身のサーバー系でもコストでカットできる箇所はないかな〜と思っていたところ、この API が見つかりました(^^;  
別にこの程度のアプリは GCP である必要もないし、XServer にリリースすれば十分そうなので、PHP に書き換えて MeCab を利用することにしました！

MeCab を Xserver にインストールする方法はググれば出てくるので割愛するとして、PHP の FW は Slim4 にしました！  
元々 Kotlin の API でも Ktor を使っていたので、同じく軽量なフレームワークを利用しようという感じです(๑•̀ㅂ•́)و✧

## デプロイしたらエラー…

ローカルでは問題なくアプリとも接続できたので、いざデプロイ！…してみると認証が通らない(T_T)  
当初は MiddleWare で Authorization ヘッダーをチェックしていたので、もしかしてそれ？とも思い実装を変えてみるも違う…  
というか `$_SERVER` には当然ないし、`apache_request_headers()` にも `getallheaders()` にもない(>_<)

あれこれやってみるも手詰まりになり「そもそも XServer で取れないのか？」などとワケの分からんことを思い始めていた時、ふと思い出しました。  
[holidays-webhook-server](https://github.com/bvlion/holidays-webhook-server) は取れているということは、何か設定が…？  
探してみるとありました(^^;

## 必要なのは public/.htaccess の設定

`public/.htaccess` に以下の追記が必要でした…

```
# Handle Authorization Header
RewriteCond %{HTTP:Authorization} .
RewriteRule .* - [E=HTTP_AUTHORIZATION:%{HTTP:Authorization}]
```

そうです、XServer は Nginx なので FastCGI となるため、そのまま `getallheaders()` などでは取得できないので、Authorization を環境変数に代入してから取得するんですね！  
（解釈が違いそうでしたツッコミコメントお待ちしております）  
Laravel は Skeleton に最初から入っていたので全く気づけませんでした…

## 今後

ということで完成したのが [DAIgoAPI2](https://github.com/bvlion/DAIgoAPI2) ですw  
何か新機能をリリースするようなことがあるアプリでもないので、のんびりライブラリや SDK のアップデートなんかをしていこうと思います(*･ω･)ﾉ