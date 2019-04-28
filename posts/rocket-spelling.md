---
title: Rocket Spelling
date: 2017-08-08
summary: "I recently released a new educational website for elementary school students: Rocket Spelling. It was a huge project, and I thought it might be fun to write a blog post to help me decompress."
---
I recently released a new educational website for elementary school students: [Rocket Spelling](https://www.rocketspelling.com/). It was a huge project, and I thought it might be fun to write a blog post to help me decompress.

## What is Rocket Spelling?
Rocket Spelling is a website that's designed to make learning to spell enganging for students and easy for teachers. Many subjects (math in particular) are being done very well as online services, but spelling really isn't.

The next best option (after our own Rocket Spelling) is [Spelling City](https://www.spellingcity.com/), which does a lot of things that I don't agree with. Spelling City forces users to enter their own word list before playing, which is a lot of unnecessary work. But even once users enter their word list, Spelling City leaves much to be desired. The games try to make spelling fun by *distracting* from the fact that players are there to learn. This means that often players spend more time playing unrelated games than they do learning. And, if we're being perfectly honest, even the non-spelling parts aren't that fun.

Rocket Spelling takes a different approach to every one of these issues. Rather than requiring users to enter custom word lists, we do the hard work for them. We've arranged 1200 of the top high-frequency words into categories that match a particular pattern. Each pre-prepared level is carefully thought out and makes teaching spelling patterns easy. This takes a lot of burden off of the teacher.

On the student end of things, Rocket Spelling doesn't try to distract from the fact that we're just a site where you type words. Instead, we embrace the concept and make it suspenseful and engaging. Every minute of time playing a Rocket Spelling level is time well spent. At no point are users trying to avoid spelling. Instead, the point systems and awards are designed to keep students on the edge of their seats while they find out their results.

That was our plan from the beginning: Create a spelling website that does things differently. But the real challenge was the execution.

## How was it made?
This project is by far the most challenging I've ever taken on, and the main cause of difficulty was the massive variety of things to do. It's relatively easy to learn how to do front end programming, or back end programming, or design, or marketing, or copy writing, or any one of a seemingly endless list of tasks, but doing all of them is *really hard*. As such, I'd like to take a look at each part individually and see which struggles I faced.

### The back end
I chose to use [Django](https://www.djangoproject.com/) for the back end of Rocket Spelling. Before this project, I had done very little with regards to back end programming or databases, so I went in a little bit blind. Django described itself as "the web framework for perfectionists with deadlines". That sounded appealing, so I went with it.

After using Django for a year now, here are my thoughts:
1. Django does a terrific job of handling user accounts out of the box. You don't have to worry about dealing with passwords or preventing [CSRF](https://www.gnucitizen.org/blog/csrf-demystified/), which is a huge help. Even still, the django user system is very adaptable and can work for a lot of different use cases.
2. When saving complex information to the database, I ended up using a lot of JSON. Django has very nice built-in ways of saving and validating things like strings, datetimes, file uploads, and a whole lot more. However, there wasn't a perfect solution for more complex and customized information types. Most data regarding a student's Rocket Spelling progress is stored as JSON in a text field, which feels far too much like a hack for my liking. In hindsight, this might have been easier with Node.
3. Making changes to information stored in the database is painful. Django provides [migrations](https://docs.djangoproject.com/en/dev/topics/migrations/) to solve this issue, but I have had quite a lot of trouble getting them to work properly. Perhaps someone more knowledgable than me would be able to put migrations to good use, but it was a bit of a stumbling block in my experience. That being said, I have no clue if other frameworks handle this any better.
4. Django sticks hard to the DRY principle: [Don't Repeat Yourself](https://en.wikipedia.org/wiki/Don%27t_repeat_yourself), which saves a lot of time and effort.

In hindsight, using [Node](https://nodejs.org/en/) might have been a better choice, but only marginally.

### The front end
Front end development is the piece of the puzzle that I've had the most practice with in the past, and it's also the part that I had the most fun with.

I'm not a big fan of Django's templating system. It's very verbose, but somehow manages to be lacking in features at the same time. You *can* extend it by writing some additional python functions of your own, but it feels a little rough around the edges.

As for CSS: It may come as a suprise to some that I didn't use any preprocessors while working on Rocket Spelling. At one point in the project, I converted all of my CSS into SCSS (splitting it into `import`ed modules and such), but I couldn't stand it and had to switch back. I keep trying to give preprocessors an honest chance, because everyone seems to love them, but I just can't figure out why. Maybe I'm using them wrong, but it seems like the only really useful features in most preprocessors are `import`ing and variables. Personally, I've found that installing, preparing, and dealing with a preprocessor is *much* more work than just handling these issues myself. I'd love for someone to correct me and open my eyes, but so far, I'm not feeling it.

### The design
This is where things start to get sketchy. I'm not exactly an artist by nature, so it took a lot of iterations to get a design that was tolerable. In the end, I mostly just [stole from Nina Geometrieva](https://dribbble.com/shots/1323389-Meteor).

> Good artists copy; great artists steal.
> 
> -- [Someone, probably.](http://quoteinvestigator.com/2013/03/06/artists-steal/)

There are still many parts of the Rocket Spelling design that I'm dissatisfied with, but at some point, it's best to just let it be.

For anyone interested, nearly every one of the images used on Rocket Spelling is an SVG. Vector graphics are perfect for the simple shapes used in the Rocket Spelling aesthetic.

## Why free? Why not?
To celebrate the grand opening of Rocket Spelling, we've created a coupon code (`rocketlaunch`) that gives teachers 100% off their first year. (That's a bargain!)

I hate charging money for things, so giving the first year away for free was a nice way to ease into the process. It gives new teachers some time to try the site out risk-free and spread the word, but also gives me the piece of mind of knowing that if someone isn't satisfied, they haven't lost a penny.

Unfortunately, college in the US is expensive, and I'd like to go. Perhaps it would be more noble to continue giving the site away for free, but it's implausible to do *everything* at no cost, especially while paying for web hosting and whatnot. Instead, the plan is to sell Rocket Spelling for $3 per student after the first year. That's enough to pay for web hosting and database space, and hopefully take a small piece out of the ever-looming college costs, but doesn't seem unreasonable. If things go as planned, every student will be getting more than $3 worth of content from a year-long subscription, and most schools should be able to afford that price. If not, we also plan to be running pretty frequent deals and discounts (in the form of new coupon codes).

I have a lot of respect for the amazing people who do hard work for free, but also feel that it's not unreasonable to charge a small fee for a website that (ideally) provides a lot of value.

## What's next?
For the minute, I'm feeling a bit fatigued. But over the course of next summer I'm hoping to make Rocket Spelling much more mobile-friendly. (Right now, the website is about as responsive as Microsoft customer support.) Depending on how the year progresses, it's possible that I'll create Android and iOS apps for Rocket Spelling. Even if those apps don't support signing in as a teacher, having apps that allow students to play the Rocket Spelling games on phones or tablets natively would be a great step forward.

But, at least for now, I think it's time to take a break.