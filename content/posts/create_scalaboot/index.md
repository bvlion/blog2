---
title: Scalaboot 作りました！ 
date: 2017-05-24
tags: [サービス,技術,Scala]
image: https://github.com/bvlion/blog2/assets/24517539/2e3a8723-75ae-420d-a2b9-02b5e46c1c6e
description: もう若くないオジさんエンジニアがScalaを覚えるのに挫折しそうになった時、Scalabootを作って着実に勉強して覚えていけるようになったお話です(*･ω･)ﾉ
layout: post_with_image
---

少し前の話になってしまいますが、[Google I/O で Kotlin がサポート](http://jp.techcrunch.com/2017/05/18/20170517google-makes-kotlin-a-first-class-language-for-writing-android-apps/)されるようになりました！  
個人的なアプリは Kotlin で作ってきましたが、正式サポートは嬉しいですね(･∀･)  
ただ、相変わらず Android アプリ自体は Java で書いた方が楽ではあるでしょうから、そのあたりの見極めも大事にしていきたいところです♪

Kotlin の時もそうだったのですが、新しい言語とFW、同時に覚えるのは大変だと思います。  
少なくとも「Scala と Play2」とか「Scala と Skinny」みたいなのは挫折してしまいました(´･ω･`)  
そういえば「Ruby と Rails」も1度挫折しています…  
きっと「Kotlin と Android」でも挫折してしまっていただろうと思います。

でも Kotlin を挫折しなかったのは「Android」は Java を通じて知っていたからではないかと思っています。  
つまり「Scala も FW が違えば覚えられるのでは？」という考えになりました。  
そこで Java 界隈ではメインの FW となりつつある Springboot と合わせてみることに…  
これがバッチリでした！  
Scala を覚えていけそうです♪

# こういう思いは是非共有しなくては( `･ω･´)

ということで、今回 OSS を作ってみました(^^)  
Springboot を Scala で動かします！  
もう名前もまんま「Scalaboot」です(笑)

せっかく作ったなら、PaaS あたりにデプロイできるようにしたいと思うところ…  
なのでソースを見てもらえれば分かるかと思いますが、Heroku へデプロイしても動くようにしてあります。  
この作成手順は Qiita に書きました！

本当に土台だけなので、これから少しずつライブラリやテストを追加していこうと思います。  
ということで、Scalaboot のお知らせと「新しい言語は FW と別に覚えるといいよ」という経験をしたお話でした(*･ω･)ﾉ

ちなみに「Ruby と Rails」は「Ruby と Sinatra」で Ruby を覚えてから試したら、覚えられました！  
オジさんエンジニアはたくさんのことを同時に覚えられないようなので、1 つずつ着実に覚えるようにしたいと思います！