---
title: "Why I gave Gatsby a try"
date: "2017-01-01T00:00:00Z"
layout: post
draft: true
path: "/pages/"
category: "Gatsby"
description: "Gatsby is advirtised as being a robust static generator and it seems it has delivered"
tags: ["Engineering", "Draft"]
---

My first personal website I built was an accumulation of css hacks and poorly written HTML code. I've come a long way ever since (I think). I decided to build my very own tech blog from scratch since every cool kid on the silicon block is doing it. First thing that came to my mind is Jekyll static generator. I knew its been around for so long which is good thing. I also observed that aging frameworks give way for newer frameworks which address their the predecessor's short comings. A quick google and I found Gatsby.

# Why I stuck with it

Having the chance to learn many transferrable skills through Gatsby made it very favourable. In short, React-based static generator powered by GraphQL made developing kind of ... fun. For those who don't know about GraphQL, its like REST but with querying functionality.

# Plugins

Plugins are super important in Gatsby ecosystem. The plugins can allow for your GraphQL queries to attach to your backend server or databases. It is also where you can apply third party libraries to ehnance your front-end. Chances are most major libaries have plugin. If they don't then that's an oppuurtunity to get open-source contribution :)
This is some beautiful code:

```javascript
// In your gatsby-config.js
plugins: [
  {
    resolve: `gatsby-transformer-remark`,
    options: {
      plugins: [
        `gatsby-remark-prismjs`,
      ]
    }
  }
]
```
