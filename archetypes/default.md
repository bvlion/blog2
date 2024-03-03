---
title: {{ replace .Name "-" " " | title }}
date: {{ now.Format "2006-01-2" }}
tags: [tag1, tag2]
image: "blog-pic.png"
description: "A smalll optional description"
layout: post_with_image
math: true              # to enable showing equations (katex)
mermaid: true           # to add diagrams using mermaid
---