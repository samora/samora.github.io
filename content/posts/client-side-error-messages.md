---
title: "Client Side Error Messages"
date: 2023-08-09T20:22:49Z
categories:
  - Sofware Development
tags:
  - software

---

Usually when building our apps we connect to some backend service to query or maninpulate data. Our app's
dependence on external services makes it susceptible to things going wrong. How do we handle these errors? Here is my 2 cents.

Do not show the user the real error from the service. Show them a custom user friendly error. Example: "Something went wrong. Try again later.". During development
you can log the real error to your console. In production you should setup remote error logging for your app. 