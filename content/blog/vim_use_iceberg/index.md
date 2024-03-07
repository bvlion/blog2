---
title: Iceberg を各所に導入
date: 2018-05-31
tags: [技術]
image: https://github.com/bvlion/blog2/assets/24517539/1beaecf5-a1ff-4210-8a83-dfe97445571c
description: GW に先輩に聞いた Iceberg を iTerm2 と Vim に導入したので、その備忘録になります(^^)
layout: post_with_image
---

今年の GW は 9 連休にした方も多いでしょうか？  
私も休もうと思えば休めたんですが、有給を使うほどでもないかな〜というのと、ウチのも出勤で朝は結局起きなきゃいけないので、通常通り出勤しました(^ω^;)

まぁ当然(？)弊社も出勤してる人が少なかったんですが、スペシャリストの先輩は出勤されていて Vim の話で盛り上がっていました♪  
そこでカラースキーマの話になったのですが、Iceberg が結構いいということで、私も導入してみることにしました！  
（後で知りましたが、別の先輩も Iceberg を導入していたようです。）  
今回はその作業備忘録です。

## Vim

まずは Vim ですね！  
GitHub はこちらです。  
https://github.com/cocopon/iceberg.vim

フツーに curl で colors 以下にダウンロードして、`.vimrc` を変えて完了です(`･ω･´)  
あ、ちなみにそれまではずっと desert256 を使っていました(^ω^;)

```
cd ~/.vim/colors
curl -O https://raw.githubusercontent.com/cocopon/iceberg.vim/master/colors/iceberg.vim
```

```
-colorscheme desert256
+colorscheme iceberg
```

どうやら古い設定の Mac だったようで、`.vimrc` と `.gvimrc` が別れてました…  
ダサいのでシンボリックで対応します(*･ω･)ﾉ

```
ln -snfv ~/.vimrc ~/.gvimrc
```

## iTerm2

続いて iTerm2 も対応させます！  
GitHub はこちらです。  
https://github.com/Arc0re/Iceberg-iTerm2

まず curl でダウンロードします！

```
curl -O https://raw.githubusercontent.com/Arc0re/Iceberg-iTerm2/master/iceberg.itermcolors
```

まぁ GitHub に書いてある通りなんですが、まずはインポート(･∀･)

![iTerm2 Iceberg import](https://github.com/bvlion/blog2/assets/24517539/5ea4bbec-930b-428c-b4ea-59d3b3d05acd)

そしてチェックをつけて設定完了です！

![iTerm2 Iceberg setting](https://github.com/bvlion/blog2/assets/24517539/efadbb0b-4d68-4f02-b243-07a2827852c5)

## 使ってみた感想など…

トップ画が実際にHTMLを開いたところですが、美しいですね♪  
作成されたのが日本人というのも嬉しいところです(^^)

一応 IntelliJ も有志の方が作られていたようなので使ってみましたが、ちょっと私が Java を書くには合わなかったため断念しました…  
やっぱり慣れってありますからね(>_<)  
一応リンクは以下になります。  
https://github.com/Kuniwak/iceberg.icls

最近すっかりVimの更新が止まってしまっていたので、少しずつ対応していきたいと思います！