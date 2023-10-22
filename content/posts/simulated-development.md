---
title: "Simulated Development"
date: 2023-10-22T07:56:03Z
draft: false
---

Yesterday, I watched a recent [interview with Jensen Huang](https://www.youtube.com/watch?v=y6NfxiemvHg), CEO of NVIDIA. I found it very insightful. He spoke about how they don't build hardware prototypes of their chips. They are able to simulate the underlying hardware design with software. It rang a bell. In software development the equivalent of that will be writing your code without running it locally, then shipping it to users. This is something we actually do at [Nuanom](https://nuanom.com) for our private APIs.

At Nuanom, we don't run API servers locally during development. We simulate usage with tests. However, we don't write unit tests. We don't write integration tests. We only write end-2-end tests with a coverage threshold which we strive to increase every chance we get. This currently sits at 94%. External API calls are mocked ("simulated") to mirror their real implementations.

You might ask, aren't these tests slow to run? Not really. We have 193 tests and all of them take about 4 minutes to run on our CI and a little less than a minute on my laptop. During development you almost never have to run all the tests locally because you are only focused on the set of API interactions you are working on and you can run those tests in isolation, which takes a few seconds to run.

It's also good to mention that our architecture affords us the luxury to do this. We have five (5) apps but they all consume one server. We use GraphQL to isolate the APIs for each application while sharing most of the logic. This allows us to easily simulate complex user interactions across our apps. We do a lot of this and that is what gives us the confidence to never have to run a local development server. When we discover a bug, we fix it, then create a simulation that validates the fix.

One of the keys to doing this is to have great logging. However, you don't need fancy logging. We just write clear messages to stderr and stdout. This works very well for us. No BS.

I know what you are thinking. Isn't "simulated development" some fancy term for end-2-end test driven development? Yes it is. 😊

Our app will be available in a few days. Visit [nuanom.com](https://nuanom.com) to subscribe for notification and learn more.