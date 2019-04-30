---
title: Be Mindful What you Measure
date: 2019-04-30T23:08:02.421Z
summary: >
  When you measure something, you change it.


  "In physics, the observer effect is the theory that the mere observation of a
  situation or phenomenon inevitably changes that phenomenon."


  Quantum physics are pretty weird, but it turns out that humans are weird in
  much the same way. Who knew?
tags:
  - post
---
When you measure something, you change it.

> **[Observer Effect](https://en.wikipedia.org/wiki/Observer_effect_(physics)):**
> 
> "In physics, the observer effect is the theory that the mere observation of a situation or phenomenon inevitably changes that phenomenon."

Quantum physics are pretty weird, but it turns out that humans are weird in much the same way. Who knew?

In my life, standardized tests are a big deal. AP tests are coming up, and the ACT is still on the horizon.  SAT results come out Thursday. I work tirelessly to resist the idea that my education is about beating a test, but it's not easy to avoid.

In the pursuit of more data, we've created tests that attempt to evaluate students' abilities. These tests aren't perfect, of course — you can't effectively measure skills like interpersonal communication on a multiple choice exam — but it seems reasonable to expect that more data will result in better decision-making. Unfortunately, when we measure what students have learned, we change what they learn.

It's no secret that schools, if they want to do a "good" job (according to the measurement tools at our disposal), must teach the skills that are testable and overlook the ones that aren't. But the compatibility of a skill with a multiple-choice exam is not at all correlated with its usefulness in the real world. (Or, if you're feeling really spicy, you might even argue that a correlation exists and is downward-sloping.) As a result, our choice to collect more data has caused the quality of education to decline.

# We must be careful what we measure.

**If measurement can affect an outcome then we need to be thoughtful about what we measure and how we might change things as a result.** We all know that measuring a programmer's success in "lines of code" is a futile exercise.

<blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr">“Measuring programming progress by lines of code is like measuring aircraft building progress by weight.” - Bill Gates</p>&mdash; Programming Wisdom (@CodeWisdom) <a href="https://twitter.com/CodeWisdom/status/837749167049031681?ref_src=twsrc%5Etfw">March 3, 2017</a></blockquote>
<script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

On my best days, I write negative code. But if you want me to make that number big, it's an easy game to play:

```
if (
  true
)
{
  console.log('6 lines already! 🎉 Am I a rockstar developer?')
}
```
We encourage what we measure, so we have to be sure that we're measuring the right thing.

Fortunately, this measurement effect can be weaponized for good too. That's why [Discourse](https://www.discourse.org/) displays the amount of time a user has spent reading, not how much they have written:

> "Printing a post count number next to every user's name implies that the more you post, the better things are. [...] *Is this even true?*
>
> I find that the value of conversations has little to do with how much people are talking. I find that too much talking has a *negative* effect on conversations."
>
> \- [Jeff Atwood (Coding Horror)](https://blog.codinghorror.com/because-reading-is-fundamental-2/)

Instead, by measuring time spent reading, the system encourages people to read more. It's not complicated, but — as is often the case with simple things — it's [startlingly effective](https://blog.codinghorror.com/for-a-bit-of-colored-ribbon/).

## How can we apply this idea ourselves?

When we are developing our own products, we can — we must — think about the effects that our measurements will have, and choose to emphasize the measurements that we believe matter. If you're making a social media app, think about [the numbers](https://dev.to/grv19/number-of-followers-to-be-shown-on-a-profile-pbi) you display next to users' posts. Do they promote the kind of interactions you're looking for?

<blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr">Instagram is testing hiding like count from audiences,<br><br>as stated in the app: &quot;We want your followers to focus on what you share, not how many likes your posts get&quot; <a href="https://t.co/MN7woHowVN">pic.twitter.com/MN7woHowVN</a></p>&mdash; Jane Manchun Wong (@wongmjane) <a href="https://twitter.com/wongmjane/status/1118970853654290432?ref_src=twsrc%5Etfw">April 18, 2019</a></blockquote>
<script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

There are no set rules. The answers to questions like these will change depending on your circumstances and goals. But there's no doubt in my mind that simply measuring and displaying data is a great way to manipulate it.

Perhaps we can measure how we measure. That might do the trick.
