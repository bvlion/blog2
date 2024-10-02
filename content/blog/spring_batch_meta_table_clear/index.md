---
title: Spring BatchのMETA tableをクリアする
date: 2017-03-23
tags: [技術,バッチ]
image: head.jpg
description: いくつかのサイトやソースを参考に、Spring Batch の META table を掃除するシェルを作ってみました(･∀･)
layout: post_with_image
---

最近になって、やっと Spring Batch なるものを知りました(^ω^;)  
しばらく Java 系の勉強から離れていたもので… ← 言い訳(爆)

ということで、[まきさんのブログ](https://blog.ik.am/)を参考にさせていただいたり、Qiita の投稿記事や英語のサイト、@Configuration の仕組みを知るためにソースをダウンロードしたりして、コツコツ勉強しました。  
いやいや、なんとも便利なものです(･∀･)  
まぁ何かを作ったら GitHub にあげようと思います<(_ _)>

その中で @Scheduled という繰り返し機能を知ったのですが、これがまた便利で cron の機能もあったりします。  
ただ、実行される度に DB に実行結果が INSERT されるので結構肥大化してきます。  
大した件数ではないものの、やはり10秒毎とかになってくるとそこそこの件数です。

そこで、指定日以前のデータはごっそり削除するシェルを作成してみました！

<script src="https://gist.github.com/bvlion/cd5557977e0e5290faf92c815437f58b.js"></script>

毎度ながらコードは [Gist](https://gist.github.com/bvlion/cd5557977e0e5290faf92c815437f58b) に上がってますので、そちらを加工したりして使ってみてください(･∀･)  
各種サイトを参考に作らせていただいてますので、当然フリーライセンスでございます！

特に以下のサイトを参考にさせていただきました！  
ありがとうございます！

## 参考

https://sites.google.com/site/soracane/home/springnitsuite/spring-batch/83-can-kao-springbatchteburunodetakurin

参考サイトにもあるように、DELETE を実施する順番が大事です。  
実際にこちらのサイトを見ると分かる通り、FOREIGN KEY がガッツリ貼られているのでこれを回避するように SQL を実行しなくてはいけません。  
それと全件消してしまわないことだけ気をつければ、後は自由に消せると思います♪

こちらのシェルですが、cron で実行しても問題ないように 1 トランザクション内で実行するように作っています。(多分…)  
ツッコミがあればご指摘ください<(_ _)>

というものを作りました…というお話でした(`･ω･´)