---
title: State of Design
date: 2016-01-02
summary: When it comes to design, it's been a couple of really awful years. Everything was kicked off with the launch of Windows 8. There are a number of ways to descibe its horrors, but let me just remind you that the power button was originaly in the "settings" panel of the charms bar. The CHARMS BAR. I'm a pretty advanced computer user, and I had to Google it to figure out how to turn the thing off.
---
When it comes to design, it's been a couple of really awful years. Everything was kicked off with the launch of Windows 8. There are a number of ways to descibe its horrors, but let me just remind you that the power button was originaly in the "settings" panel of the charms bar. The ***charms bar***. I'm a pretty advanced computer user, and I had to [Google it](https://en.wikipedia.org/wiki/Google_%28verb%29) to figure out how to turn the thing off.

The next piece of terrible design which stood out to me, although this one flew under the radar a bit more than Windows 8, was the [Wordpress 2014 Theme](https://twentyfourteendemo.wordpress.com/). Here's a quote from the theme's description:

> The default theme for 2014 is a magazine theme with a sleek, modern, and beautifully crafted **responsive** design.

Take note of the word "responsive" here. [Smashing Magazine](http://www.smashingmagazine.com/2011/01/guidelines-for-responsive-web-design/) defines responsive design as "the approach that suggests that design and development should respond to the user’s behavior and environment based on screen size, platform and orientation."

Here's a screenshot of the theme on my modestly large monitor:

![blank canvas](/static/img/wp2014.png)

You'll notice, if you're observant, the gaping hole on the right side of the screen, filled with nothing but a stray "follow" button and the site's scrollbar. Apparently this was an intentional design decision, but many people [reported it](https://wordpress.org/support/topic/showing-full-view-on-desktop-large-screen) as a bug (and rightly so!)

Now I'm no definition expert, but this doesn't seem to be responding to my screen size.

Of course, what the Wordpress developers *meant* when they said "responsive" was that it responded well for small screens, which is - to their credit - true. Google's [Pagespeed Insights](https://developers.google.com/speed/pagespeed/insights/) gave the theme a 99/100 for mobile user experience. But this is where the fun ends. The theme got a measly 44/100 in the speed category, which is horrendous. At that rate, the user would never even make it to the nice layouts.

The source of all this slowdown? Images. Those collosal beasts which add nothing to the experience, but slow it down to a crawl. We're going through a [Website Obesity Crisis](http://idlewords.com/talks/website_obesity.htm). To use the words of the Obesity Crisis article:

> This is part of a regrettable trend, made possible by faster networks, of having ‘hero images’ whose only purpose is for people to have something to scroll past. [...] The image is enormous. If you load this website in Safari, the image is several megabytes in size.

Fast-forward to the debut of Google's "Material Design". Material Design was an attempt to standardize the design across all of Google - from websites to products to apps, everything should follow the same basic styles. Within weeks of the spec being published, new versions of everything were being rolled out using the new material design style.

Let's step back, for a moment, to the release of Windows 8 - undoubtedly a disaster by all accounts. What was the motivation behind creating such a terrible piece of software? Microsoft wanted to unify every device - laptops, desktops, phones, tablets, wearables, and everything beyond - into a single design style. Sounds familiar.

The web is moving towards a one-size fits-all strategy, and that's not good. Mr. "Obesity Crisis" says it perfectly:

> It's like we woke up one morning in 2008 to find that our Lego had all turned to Duplo. Sites that used to show useful data now look like cartoons.
> 
> Interface elements are big and chunky. Any hint of complexity has been pushed deep into some sub-hamburger.
> 
> Sites target novice users on touchscreens at everyone else's expense.

So please, next time you're designing something, remember that one size does not fit all.

*This post was deeply inspired by that [Website Obesity Crisis](http://idlewords.com/talks/website_obesity.htm) article I mentioned a couple of times. It's a fantastic and funny read if you have the time; I highly reccomend it.*