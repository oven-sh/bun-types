[bun-types](https://oven-sh.github.io/bun-types/README.md) / [Exports](https://oven-sh.github.io/bun-types/modules.md) / "timers"

# Namespace: "timers"

The `timer` module exposes a global API for scheduling functions to
be called at some future period of time. Because the timer functions are
globals, there is no need to call `require('timers')` to use the API.

The timer functions within Node.js implement a similar API as the timers API
provided by Web Browsers but use a different internal implementation that is
built around the Node.js [Event Loop](https://nodejs.org/en/docs/guides/event-loop-timers-and-nexttick/#setimmediate-vs-settimeout).

**`See`**

[source](https://github.com/nodejs/node/blob/v18.0.0/lib/timers.js)
