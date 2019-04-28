---
title: The Duct Tape Solution
date: 2016-11-22
summary: "As a programmer, it is my job to fix problems. That's really what programmers do: We fix problems. Sometimes those problems are small (the lights in my house don't automagically turn on when I wake up), and sometimes they are large (the private information of millions of people is being leaked). But at the end of the day, code is nothing more than a tool for solving problems."
---
As a programmer, it is my job to fix problems. That's really what programmers do: We fix problems. Sometimes those problems are small (the lights in my house don't automagically turn on when I wake up), and sometimes they are large (the private information of millions of people is being leaked). But at the end of the day, code is nothing more than a tool for solving problems. Like firemen have hoses and plumbers have compact electric drain cleaners ([apparently](http://www.harborfreight.com/household/plumbing.html)), programmers have code. It's our go-to solution to virtually any problem.

The very best programmers almost always started [because they wanted to solve a problem](https://blog.codinghorror.com/please-dont-learn-to-code/). A person wouldn't learn to swim if they never went in the water. Likewise, it makes little sense to learn how to write code  without having a problem to solve (even if it's as silly as modifying a game you're playing or creating an extra special Christmas light setup).

The difference between good code and bad code, then, is the elegance with which a problem is solved. But let's be honest: **Very little of the code that we write is good.** We can often solve problems in a way that, for the end user, appears totally acceptable. But any programmer worth their salt can identify the difference between code that just gets by, and code that is great. Even if both do the same thing.

To a non-programmer, this concept can often seem ridiculous. How can two programs which do the exactly same thing be inherently better or worse? To which I answer with a small parable from my own life:

The other day, my dad came to me with a request. He said that the pipes underneath the sink were leaking a bit, and asked if I could find a way to fix the leak without breaking the bank (or, ideally, the sink). It became apparent quite quickly that whoever had installed the pipe had done a pretty shoddy job. I'm not a plumber by any stretch of the imagination, but there was no questioning the fact that these pipes were far from correct.

There were three pipes involved. One pipe came out from under the sink, facing downwards. Another came up from the ground to roughly the same height as the downward-facing pipe. The last pipe was a short horizontal one to connect the two vertical pipes together.

What made the whole situation unique, though, was the fact that *there was nothing keeping the pipes connected to one another*. The horizontal pipe was wider than the two vertical ones, so it just slid around them in away that almost looked like it fit, but not quite. **And it worked, for seven straight years.**

This makeshift way of doing the plumbing was a Duct Tape Solution. It wasn't semantically correct, and it would give many plumbers the urge to projectile vomit. (Coincidentally, the amount of hair in those pipes almost made me vomit too.) But for a while, it worked. And that's the beauty of a Duct Tape Solution. Unfortunately, the ability to work temporarly is also their fatal flaw.

A Duct Tape Solution only ever comes to be because it, at least for a short while, works. But the key to understand is that they won't last forever. Eventually all Duct Tape Solutions will break; it's only a matter of time. This is the reason why good programmers, as well as good plumbers, can see a big difference between a quality solution and a crappy one, even if both are functionally the same.

Virtually everyone will agree that a temporary solution is worse than a permanent one, but that's not always the case. Sometimes it's okay to write shoddy code, with one condition: **The Duct Tape solution must never be regard as permanent.** If you're on a tight schedule, or trying to find the perfect solution is getting in the way of moving on to other parts of your code, then sometimes the best decision you can make is to patch over the issue and continue. But [as soon as a small imperfection is ignored or forgotten, your project is headed downhill](https://pragprog.com/the-pragmatic-programmer/extracts/software-entropy). It's okay to make smart decisions regarding time-management and having realistic expectations, but problems arise from entirely dismissing the little issues in your project.

Many different methods have been designed for keeping track of code that could be cleaner, and all of them have strengths and weaknesses. Below I'll list a few of my favorites:

A method for keeping track of hacks in CSS was proposed by Chris Coyier, Dave Ruper, and Harry Roberts. They call it [shame.css](http://csswizardry.com/2013/04/shame-css/). Although the name is a bit silly, the idea is very much a serious one. The concept is that you keep any Duct Tape Solutions in a separate stylesheet titled `shame.css`. By doing so, you acknowledge anything that is a hack, and never allow it to become fully acceptable, but you also create a sort of specialized to-do list for CSS Duct Tape Solutions which need to be fixed. I would recommend reading [the entire article](http://csswizardry.com/2013/04/shame-css/), but I'll also include a small excerpt explaining they key points to the system:

> 1. If it’s a hack, it goes in `shame.css`.
> 2. Document all hacks fully:
>     1. What part of the codebase does it relate to?
>     2. Why was this needed?
>     3. How does this fix it?
>     4. How might you fix it properly, given more time?
> 3. Do not blame the developer; if they explained why they had to do it then their reasons are probably (hopefully) valid.
> 4. Try and clean `shame.css` up when you have some down time.
>     1. Even better, get a tech-debt story in which you can dedicate actual sprint time to it.

The second method -- and this is the one that I use -- works for all types of code (CSS or not). I can't claim it's anything especially revolutionary, but it definitely works. At any point in your code where a Duct Tape Solution has been used, include a comment with a `TODO` message. Then, add an extension to your favorite text editor which can highlight all `TODO` comments and direct you to them. That way Duct Tape Solutions are not ignored, and when you want to fix them, you have an automatic to-do list already created for you.

If this is a method you're interested in trying, I'll leave you with a few text editor extensions that might be of use:
- Sublime Text: [TodoReview](https://github.com/jonathandelgado/SublimeTodoReview)
- Atom: [todo-show](https://atom.io/packages/todo-show)

But at the end of the day, the method you choose is really up to you. As long as you don't let yourself forget about your Duct Tape Solutions, or accept them as being reasonable, you know that you're writing high quality code.*

\* /s