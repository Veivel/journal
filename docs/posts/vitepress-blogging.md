---
title: Blogging on VitePress
lastUpdated: 2026-01-27 00:00
tags: tech
published: false
---

Hello World!

This post is something I should have (and wanted to) write as a "first blog" almost two years ago. But alas, here we are. I'm still writing this because I think the contents remain relevant and hopefully useful.

When I started learning Javascript just four years ago, I did so by learning React. Naturally, the next thing I learnt was Next.js. Unfortunately, for a while Next.js was the only way I knew to do Javascript. I experimented by creating a blog and portfolio with NextJS, powered by a backend and frontend (as everyone does, for their first project).

I didn't know much about good web development practices, I just thought making the blog on the database through the backend was "cool". If you asked me about bundle sizes or minification then, I would have gone "huh?" and carried on with my day. Though, as an engineer who doesn't actually know how to do frontend, I'm not saying I know any better *now*. It's just that I then found out how heavy Next.js is, even just using the default boilerplate that comes with `create-next-app`.

![screenshot of default Next.js code in production](/assets/vitepress/sample.png)
<p class="text-center text-muted-1">The network tab under the default Next.js boilerplate</p>

It baffled me to learn that I can literally give Next.js *zero* lines of my own JS code but it will still ship over 110 kb of minified JS to the client. For a blog or a portfolio website, this is straight up overkill.

<!-- - Bring up: NextJS version of current porto, still very heavy?

Next:
- Sought to find vanilla JS, lighter
- Found Hexo (js? no js?)
- Problems with dev experience
- Found Vite & VitePress
  - Learn how they work. There's JS code, after all. How both can ship no js?
  - Develop carboncss for both repos
  - Acknowledge may not be best, still figuring out. fresh grad, not a frontend dev. just sharing. (?)
  - Final thing being shipped to client -->