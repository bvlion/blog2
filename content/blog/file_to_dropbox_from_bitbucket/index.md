---
title: BitbucketのPipelinesからDropboxへ成果物をアップロード
date: 2018-06-06
tags: [サービス,技術]
image: head.jpg
description: Android の APK を Bitbucket の Pipelines で作成した後、どうやって取得しようか悩んだ結果 Dropbox にアップすることにした備忘録です(･∀･)
layout: post_with_image
---

まんまタイトルの通りです。(^ω^;)  
Android の APK はそこまで頻繁に更新もしていなかったので、以前は手作業で作成していました。  
ただもういい加減、手作業で APK を作成するのはあまりにもダサいので、「[Bitbucket の PipeLine で Android をデプロイしてみた](https://qiita.com/kenyop/items/aae55649e6c4cfc056d4)」を参考に、Pipelines で APK を作成することにしました(･∀･)

ここでは、pipelines で APK を作成し、Dropbox へアップロードする内容を記載します。  
なので、jks を app 直下に置いて、signingConfigs をコリコリする等、assembleRelease で署名つき APK を作成する方法は色んな記事がありますので、そちらを参考にしてください<(_ _)>  
ということで、実際のは以下です。


<script src="https://gist.github.com/bvlion/06e3cc20fffca851163734b89896f5cf.js"></script>


本来デプロイ作業として動く dropbox.sh は別 step で切るべきでしょうが、まぁこちらはサンプルということで大目にみてください…  
要するに APK 作って Dropbox へアップロードするシェルを呼ぶだけです。  
access_token や apk-name は適宜読み替えてください。

最初の curl は、既存モジュールの削除です。  
もちろんリネームしても OK です(^^)  
そして 2 つめの curl でアップロードを実行します。

本来は Deploy build artifacts to Bitbucket Downloads を参考に

- pipelinesでBitbucketにアップ
- サーバー側でBitbucketからダウンロード
- デプロイ

とするのが正しい手順かと思いますが、Android の APK の場合、Google Play Console からアップしないといけないので、簡単にダウンロードできる環境を用意したいと考え、この方法を取りました(･∀･)  
（知らないだけで、API で公開までできるのかもしれませんが…） 
なお、[Deploy build artifacts to Bitbucket Downloads](https://confluence.atlassian.com/bitbucket/deploy-build-artifacts-to-bitbucket-downloads-872124574.html) の API ドキュメントはこちらです(*･ω･)ﾉ

実は当初、日本にある自鯖に scp でアップロードしようと考えていました。  
ただ Bitbucket のサーバーは日本にないようで、アップロードが遅い遅い… 
scp だけで無料時間枠を使い切ってしまいそうだったので、各国にある Dropbox を経由することで時間の削減を図りました！  
これはサーバーへのデプロイにも応用できるかもしれませんね♪

また便利な方法を思いついたら更新したいと思います(`･ω･´)

