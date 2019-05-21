---
title: Why is JSX Okay?
date: 2019-05-21T02:30:15.862Z
summary: >-

  Before components were cool, we often split our code up into separate HTML,
  CSS, and JS files. This division kept tangles of related code pulled apart
  into separate chunks with only the necessary strings between them.
tags:
  - post
---
# The Old Way: Splitting Code by Language

Before components were cool, we often split our code up into separate HTML, CSS, and JS files. This division kept tangles of related code pulled apart into separate chunks with only the necessary strings between them.

Splitting code by language was better than putting everything into one file because it lowered the stress on our scroll wheels and allowed us to sleep at night under the false presumption that our code was properly organized.

But the connecting strings were there, and they haunted us.

All three languages were necessarily intertwined (if you change a class name in HTML, you have to update your CSS and JS too), so we were constantly jumping back and forth between related files.

# The New Way: Splitting Code by Component

A far better system, with less jumping involved, is to split code up based on what goes together. Components help us do that! Components are a recognition that splitting up our code into files based on the programming language is the wrong approach.

It was controversial in the beginning. There were outcries. The public made clear that such a convolution of concerns was an infringement on the very foundations of a civil society.

![Dan the Witch](/static/img/dan-abramov-witch.png)
> For a while we were convinced that [this generous bloke](https://twitter.com/dan_abramov) was actually a witch.

But, as it happens, combining HTML, CSS, and JS all together is actually a really great idea. The key condition? **You must instead divide up your code based on which pieces of HTML, CSS, and JS work together to form a coherent whole.** That's what happens when we split our code into files at the component level.

<p class="codepen" data-height="707" data-theme-id="0" data-default-tab="result" data-user="PullJosh" data-slug-hash="wbqyNP" style="height: 707px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="How do we split code? 👀">
  <span>See the Pen <a href="https://codepen.io/PullJosh/pen/wbqyNP/">
  How do we split code? 👀</a> by Josh (<a href="https://codepen.io/PullJosh">@PullJosh</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

The key benefit is that we no longer have strings attached between each of our files. (If we change a class name, everything happens in one place.) In an ideal world, every component is entirely self-contained and does not rely on the implementation details of other components to function properly. This means that we no longer need to jump between files nearly as often.

# Change is the Only `const`

Changing deep-rooted ideals (about, for instance, separation of concerns) is incredibly difficult. Fortunately, web developers seem to be quite good at it. The industry moves fast, and it can sometimes seem like we're reinventing the practice *too often*. But looking back at old ideas is a reminder that the adaptations are worth the pain. Keep up the good fight, y'all! ✌
