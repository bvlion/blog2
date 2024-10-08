---
title: Alfred の workflow を自作したお話
date: 2024-10-10
tags: [技術,Alfred]
image: head.png
description: Alfred の workflow を作った時の裏話的なポエムです
layout: post_with_image
---

私的に色々とありすぎる 2024 年ですが、少し落ち着いてきたのでブログも趣味の話なども交えて多めに更新していきたいと思います！

## 今回作ったもの

「全角半角変換」という Alfred の workflow です(*･ω･)ﾉ  
https://github.com/bvlion/zen-han-alfred-workflow  
詳細は README をご覧いただきたいですが、全角と半角を相互に変換してクリップボードに入れてくれるツールです！

## 経緯

久々に住所登録で全角・半角問題に当たり、火がついた勢いで作りました(^^;  
頻度が少ないこともありサイトを利用して変換していたのですが、頻度が少ないからこそブックマークもしておらず、都度検索してコピペして閉じるの繰り返し…  
基本 Mac しか使わず、しかも住所登録系はスマホではやらない方針なので、稀に使うこんなツールがあってもいいかな？と思って作り始めました(๑•̀ㅂ•́)و✧

## なぜ zsh から ruby を呼び出しているのか

当初は Run Script で直接 ruby を実行する予定でした！  
ただ Alfred の仕様を深く追っていませんが、Run Script で直接 ruby を実行すると `~/Library/Caches/com.runningwithcrayons.Alfred/Workflow Scripts` に対象の rb ファイルがコピーされ実行されるようです。  
そうすると require で読み込みたいファイルが見当たらず動作しません(´･ω･`)  
zsh はインストール展開されたディレクトリで直接実行してくれるようだったので、こちらの方法を採用しました(*･ω･)ﾉ

## NKF を使わなかった理由

ダブルクリックでインストールしたらサクッと使える、利用に余計なことをさせたくないという思いからでした！  
brew や gem でインストールすれば済む話ではありますが、あまり開発者都合でユーザーの手を煩わすのを好みません…  
なので言語も Mac に元々入っている zsh と ruby 2.6.0 でも問題なく動くようにしています(･∀･)  
ゆえにコードは愚直な箇所があります。。。

## 勉強になったこと

リリース用の GitHub Actions を見ていただければわかりますが、zip に圧縮して `alfredworkflow` という拡張子にすれば Alfred 用のインストールファイルになるんですね(^^)  
あと以前から感じてはいましたが、`unicode_normalize` など ruby は便利な関数が多いです！

## 最後に…

それっぽく issue template なども作りましたが、多分使わないんじゃなかろうかと思います(^^;  
とは言えせっかく作ったので、誰かに使ってもらえたら嬉しいです(･∀･)