---
title: JavaからSlackへ画像を投稿する
date: 2017-03-13
tags: [技術,Java,Google]
image: https://github.com/bvlion/blog2/assets/24517539/790e5199-10f4-4ba3-8e47-3d9dc87b1bae
description: GAE からでも Slack へ画像が投稿できるように作ってみました。
layout: post_with_image
---

随分と更新が空いてしまいました(´･ω･`)  
なるべく週に1つは書けるようガンバってみたいと思います(^ω^;)  
なかなか書こうと思うと、ブログ自体が久々すぎて進まない(>_<)

コードは [Gist](https://gist.github.com/bvlion/93d708317bba9846de4e29674c5fd003) に上がってますので、そちらを加工したりして使ってみてください(･∀･)  
フリーライセンスでございます！

Java から Slack へ投稿する…というのは大勢の方がやってらっしゃいます。  
実際に日本語の記事もあるのですが、結構 OkHttp とか GAE で使えないのが多かったりするんですよね(>_<)

GAE からデータを送信する場合、HttpURLConnection でガリガリ書かないといけません。  
そこで、独自に実装したコードを公開しました！というお話です。

特別なことはしていないので、ソースを見てもらえれば大体何やってるか分かると思います。  
ちなみに **GAE は Java7** なので、それに合わせたコードになっています。  
Java8 を使えればもう少し短くなるんですけどね…  
あと注意点としては、commons.lang 系を使ってますので、そちらだけは dependencies に入れるなりダウンロードするなりして使ってください<(_ _)>

セットする token ですが、こちらは Slack で発行します。  
https://api.slack.com/web を見ると載っていますが、こちらで使う **token は bot 用ではなく個人の token** です。  
bot（Outgoing Webhooks等）からは画像は投稿できないようです(´･ω･`)

気になる箇所などがありましたら、お気軽にお問い合わせください♪

<script src="https://gist.github.com/bvlion/93d708317bba9846de4e29674c5fd003.js"></script>