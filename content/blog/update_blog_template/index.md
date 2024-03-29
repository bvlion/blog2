---
title: ブログのテンプレートを更新しました！
date: 2024-03-07
tags: [技術,GitHub]
image: Logo_of_Hugo_the_static_website_generator.svg
description: GitHub の Private Repository が無料になったため、Bitbucket から移行してみました(･∀･)
layout: post_with_image
---

実に 2 年半振りの更新です(^^;  
Google が 2021 年 6 月に [AMP 優遇を終了](https://gigazine.net/news/20210519-google-amp-no-longer-preferential-treatment/)したのを機にずっとテンプレートの更新をしようと思っていたのですが、そもそもデザイン思いつかないしレン鯖で動かす PHP の FW は何にするか…？などと考えているだけで、ずっと手が止まっておりました…  
（それに連動して記事を書くこと自体も止まってました）

そう思っていたところ、[Hugo](https://gohugo.io/) で静的 html を吐き出すことでレンダリングが早かったり色々よさそう、しかも GitHub Pages にデプロイで十分だしカスタムドメインも使えるし草も生える！となり、2024 年に入ってから粛々と DB から移行していました。  
なかなか時間はかかりましたが、一先ずリリースまで辿り着けて良かったです(･∀･)

ちなみにテンプレートは [BlogRa](https://github.com/rafed/BlogRa) を利用させていただきました！  
割と今っぽい UI になっているのではないかと思っています♪

なるべく URL が変わらないように心がけましたが、さすがに検索機能など動的生成だった部分は難しかったです…  
でも記事の URL（ドメイン含め）を変えずに済んだのは大きいなと思います！  
301 で返すように変えても良かったんですけどね(^^;

これからは DB に insert ではなく md ファイルのコミットだけで公開できるので、少し記事の作成が捗るかもしれません。  
色々と記事にしてないだけのことがたくさんあったので、もう少し色々書いていければと思います(๑•̀ㅂ•́)و✧