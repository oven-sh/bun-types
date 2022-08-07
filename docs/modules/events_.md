[bun-types](https://oven-sh.github.io/bun-types/README.md) / [Exports](https://oven-sh.github.io/bun-types/modules.md) / "events"

# Namespace: "events"

Much of the Node.js core API is built around an idiomatic asynchronous
event-driven architecture in which certain kinds of objects (called "emitters")
emit named events that cause `Function` objects ("listeners") to be called.

For instance: a `net.Server` object emits an event each time a peer
connects to it; a `fs.ReadStream` emits an event when the file is opened;
a `stream` emits an event whenever data is available to be read.

All objects that emit events are instances of the `EventEmitter` class. These
objects expose an `eventEmitter.on()` function that allows one or more
functions to be attached to named events emitted by the object. Typically,
event names are camel-cased strings but any valid JavaScript property key
can be used.

When the `EventEmitter` object emits an event, all of the functions attached
to that specific event are called _synchronously_. Any values returned by the
called listeners are _ignored_ and discarded.

The following example shows a simple `EventEmitter` instance with a single
listener. The `eventEmitter.on()` method is used to register listeners, while
the `eventEmitter.emit()` method is used to trigger the event.

```js
const EventEmitter = require('events');

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();
myEmitter.on('event', () => {
  console.log('an event occurred!');
});
myEmitter.emit('event');
```

**`See`**

[source](https://github.com/nodejs/node/blob/v18.0.0/lib/events.js)

## Table of contents

### Namespaces

- [EventEmitter](https://oven-sh.github.io/bun-types/modules/events_.EventEmitter.md)

### Classes

- [EventEmitter](https://oven-sh.github.io/bun-types/classes/events_.EventEmitter-1.md)

### Interfaces

- [Abortable](https://oven-sh.github.io/bun-types/interfaces/events_.Abortable.md)
