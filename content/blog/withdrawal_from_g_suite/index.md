---
title: G Suiteからの退会 ~~メールアドレス移行編~~
date: 2017-01-20
tags: [サービス,Google]
image: head.jpg
description: G Suite をやめることにしました。その時に私がやったことを軽く記録がてら書いておきます。まずはメールアドレスの移行です。
layout: post_with_image
---

G Suite を 1 年使ってみました！  
使っていたのは **G Suite Basic** です。  
以前お世話になった会社で使ってらしたのを見て、自分も個人のドメインで使って見たいと思ったのがキッカケです(･∀･)

我が家は現在 2 人なので、2 人分で登録。  
月 1,000 円で Google のサービスがたくさん使えたり、ドライブも容量が多く大変満足でした！  
特にメールとカレンダーなんかは2人でも大変使い勝手が良かったです♪

でも少しずつ使わなくなり、相方も「そんなにたくさんメールアドレスいらないかな〜」と言い始めました…。  
そうなるとアクセスも減り、段々と必要性を感じなくなってきてしまいました(^ω^;)

2017 年 2 月で使い始めて 1 年となり、更新のタイミングがやってきます。  
そのタイミングより少し前に、メール機能付きのサーバーをレンタルし始めました(^^)  
そこで、これを機に一旦 G Suite を止めてレンタルサーバーにメールを移行し、その他のサービスを Google の通常のアカウントに移行してみようと思いました。

ということで、以下をやりました！

## メールの移行

まぁ兎にも角にもこれですね！  
やったことは

- レンタルサーバーにメールアドレスを追加（同じアドレスを追加）
- MX レコードをレンタルサーバーに向ける
- 届くかテストする（ここでハマる…）
- POP で Gmail 側をダウンロード
- imap でレンタルサーバーのメールサーバーに接続してメールを移行

という感じです。  
ここで MX レコードの設定をしくじり、全然メールが届きませんでした(>_<)

当初、以下のようなレコードにしていました。

ホスト名 | 種別 | 内容
--- | --- | ---
ドメイン | MX | ドメイン

ところがこれが届かない(´･ω･`)  
なんでかな〜とずっと思ってたんです。  
MX レコードのアドレスがキャッシュされてるのかな〜とか考えたり(笑)

そしたらしばらくして、G Suite ではない方の Gmail からこんなメールが…

![G suite delivery error](G_suite_delivery_error.png)

こんなにモザイクかけたら分からんよって話だとは思うんですが…(^ω^;)  
黒のモザイク部分には送信先のメールアドレスが、下の青のところはドメインと、そのドメインのIPが入ってました。

そこでやっと気づいたんです。  
**「ドメインは A レコードで自宅に向けていた…」**

そうなんです、IoT をやるために www 無し（ドメインだけの状態のもの）は家に向け、www がレンタルサーバーに向いていたんです。  
家に Dovecot だとか入れてないんで、そりゃ届かないですね(T_T)

ということで、以下のようにすることで解決できました！

ホスト名 | 種別 | 内容
--- | --- | ---
ドメイン | MX | www.ドメイン

いや〜、Gmail のお陰で助かりました。。。

次は Drive を移行したお話をかければと思います♪
