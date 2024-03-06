---
title: "Why I Choose JavaScript/Typescript Over Everything"
date: 2024-03-06T00:09:03Z
draft: false
---


I’ve used many languages over the years. In all cases I built real world apps so it wasn’t like I formed opinions from a Todo app. The languages I’ve had the pleasure of working with are Ruby, Python, C#, Go, JavaScript and Typescript. At the moment I use TypeScript for everything. I build web servers, mobile and web apps. 

## Installing packages and managing language versions

I started writing software over a decade ago on a cheap laptop with a flavour of Linux. Who remembers [netbooks](https://en.wikipedia.org/wiki/Netbook)? This is when I started writing Ruby. I love Ruby syntax. It felt natural to me. However, I always had issues with basic things like installing packages. For some reason installing packages with [bundler](https://bundler.io/) always seemed to take forever. 

Python didn’t have this problem. Python is also an elegant language. However, I just hated the [virtualenv](https://virtualenv.pypa.io/en/latest/) API for using multiple Python versions. 

One of the things that was revolutionary about Node.js when it came out was its implementation	of package management. [NVM](https://www.freecodecamp.org/news/node-version-manager-nvm-install-guide/) also makes it a breeze to manage various Node.js versions. If your project has a nvm.rc file you just need to run one command, `nvm use`, to switch to the right Node.js version. 

## Startup times

All compiled languages have a compile step. If you are writing a small server this is not an issue but as soon as your server gets reasonably large this step can take anything from tens of seconds to several minutes. This is very annoying during development, because even tests have to be compiled before they run. This quickly adds up. 

JavaScript/TypeScript startup is fast. Your server is ready to serve requests almost immediately after startup.

## JSON

If you are writing a server in most cases you have to manipulate some data over the wire. It’s safe to say JSON won the data exchange format wars. Golang used to be my favorite server side language when I used to write Flutter apps. However, wrangling JSON in Golang seems a little overkill for my taste. The extra boilerplate is something you never have to deal with in JavaScript/TypeScript. To be fair, you don’t have to deal with it in a lot of dynamically typed languages like Python and Ruby.

However, in JavaScript/TypeScript JSON is a first class citizen. It just works.

## Package Choices

Node.js has packages for everything you will ever need to build a web server and more. Yet it’s not just about choice, the quality of these packages is insane. Some of the best developers in the world are JavaScript devs and it shows. 

Express.js is arguably the best minimal web server. I always thought I liked the batteries included philosophy of frameworks like [Rails](https://rubyonrails.org/) and [ASP.NET](https://dotnet.microsoft.com/en-us/apps/aspnet). However, after many years I’ve come to love the composability of something like Express.js. You almost always know what is going on and where.

Everybody wants to talk shit about React now, yet Flutter and Swift UI were both inspired by React. React itself is one of the most progressive communities I’ve ever seen. We went from class based components with state management libraries to functional components with hooks.

## Concurrency

Actually one of my motivations for writing this post is I saw a Tweet that said JavaScript doesn't belong on the server. I'm still laughing about this. Bro, Node.js literally introduced the world to non-blocking I/O operations on the server. Before Node.js most languages didn't have any form of non-blocking I/O. The server-side performance gains Node.js had from this single idea were profound. Node.js was literally a server-side revolution.

## OTA Updates

So you use Flutter, Swift or Kotlin to develop an app and push it to the app stores. You discover a serious bug. Your app has already been downloaded by users. What do you do? Just push a new one and pray all your customers update their app versions?

React Native has OTA updates which has changed the game for app releases. You can push updates anytime without customers having to download a new binary from the app stores. For me, this is the number one reason I choose React Native over Flutter even though I have other subjective reasons.

## SSR

On the web server-side rendering (SSR) is important for page load performance and SEO. Flutter still has terrible support for this. Yes you can accomplish this with Golang or Rails however you will still need to write JavaScript on the client if you want to do anything mildly complex. Which brings me to my final point.

## One Language For Everything

Jeff Atwood famously said “Any application that can be written in JavaScript will eventually be written in JavaScript”. This has turned out to be generally true.

Life is complex enough already, so where we can simplify we should. Why juggle multiple languages in multiple parts of your stack? You don’t want peace? Or you just have something to prove?

Vanilla JavaScript is painful at scale, but TypeScript fixed that problem. Today I won’t write any application in JavaScript or any dynamic language, but you will have a hard time convincing me not to use TypeScript.


## Conclusion

At [Nuanom](https://nuanom.com) we have a TypeScript monorepo we use to develop and maintain 4 native mobile apps and 2 web apps. Our API is a single GraphQL server with endpoints for the various apps. This allows us to share majority of our codebase and move extremely fast with an extremely small team.

X (formerly Twitter) is full of developers bashing JavaScript everyday. I bet most of those developers haven’t been in a position where they had to architect a stack that works across web and mobile, build a team, then build a product. If you were in that position what will you choose? 2/3 languages with a codebase you cannot share? I’m picking TypeScript every time.


