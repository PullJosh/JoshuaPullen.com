---
title: How Portals Will Restructure the Internet
date: 2019-05-21T13:13:55.104Z
summary: >-
  The Chrome team has a new proposal for the web, and the very preliminary
  implementations are already beginning to ship in Chrome Canary. It's called
  "portals", and it's a little bit like iframes on steroids.
tags:
  - post
---
The Chrome team has a new proposal for the web, and the very preliminary implementations are already beginning to ship in Chrome Canary. It's called "portals", and it's a little bit like iframes on steroids:

<blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr">🚪Portals, combined with associated APIs, will fundamentally change the way users transition between web pages.<br><br>🚩It is now available in Chrome Canary, behind an experimental flag <a href="https://t.co/Q8pLXN728d">pic.twitter.com/Q8pLXN728d</a></p>&mdash; Chrome Developers (@ChromiumDev) <a href="https://twitter.com/ChromiumDev/status/1125886955542106112?ref_src=twsrc%5Etfw">May 7, 2019</a></blockquote>
<script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

Portals are crazy because they make it really difficult to follow which website is serving you content. Even with the current URL highlighted in the twitter video, it can be quite hard to understand exactly where everything is coming from.

At first I found this concerning, but over time I've begun to believe that **portals correctly identify that organizing web browsing by URL is not useful for users in the general case.** (URLs are, of course, excellent for sharing links to pages. But when clicking around, they aren't nearly as important as we make them seem.)

I've been thinking a lot lately about [orthogonal methods of grouping ideas](https://joshuapullen.com/blog/posts/why-is-jsx-okay/), and how the obvious grouping is not always the most useful one. In the frontend world, we collectively realized that grouping by language is less sensible than grouping by components:

<p class="codepen" data-height="597" data-theme-id="0" data-default-tab="result" data-user="PullJosh" data-slug-hash="wbqyNP" style="height: 597px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="How do we split code? 👀">
  <span>See the Pen <a href="https://codepen.io/PullJosh/pen/wbqyNP/">
  How do we split code? 👀</a> by Josh (<a href="https://codepen.io/PullJosh">@PullJosh</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

*I spent too much time on this to only include it in [one post](https://joshuapullen.com/blog/posts/why-is-jsx-okay/).*

To me, portals seem like the same type of (controversial) shift. **Rather than grouping the content we view by the domain it's served from, we choose to group it by the content it contains.** This means that links, the original "strings" of the internet, will no longer be needed to tie separate locations together. Instead, pieces of similar content will naturally be grouped regardless of origin.

I don't foresee this change coming to pass without some sort of major uprising first. We saw it with JSX, and I believe we'll see it again. **But I'm also going to make the claim that portals will drastically improve the internet experience by forcing website owners and users alike to care less about where content is hosted and more about how it's connected.**
