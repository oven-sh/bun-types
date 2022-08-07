[bun-types](https://github.com/oven-sh/bun-types/blob/master/api-docs/README.md) / [Exports](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules.md) / ["node:domain"](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/node_domain_.md) / Domain

# Class: Domain

["node:domain"](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/node_domain_.md).Domain

The `Domain` class encapsulates the functionality of routing errors and
uncaught exceptions to the active `Domain` object.

To handle the errors that it catches, listen to its `'error'` event.

## Hierarchy

- [`EventEmitter`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/events_.EventEmitter-1.md)

  ↳ **`Domain`**

## Table of contents

### Constructors

- [constructor](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/node_domain_.Domain.md#constructor)

### Properties

- [members](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/node_domain_.Domain.md#members)
- [captureRejectionSymbol](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/node_domain_.Domain.md#capturerejectionsymbol)
- [captureRejections](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/node_domain_.Domain.md#capturerejections)
- [defaultMaxListeners](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/node_domain_.Domain.md#defaultmaxlisteners)
- [errorMonitor](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/node_domain_.Domain.md#errormonitor)

### Methods

- [add](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/node_domain_.Domain.md#add)
- [addListener](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/node_domain_.Domain.md#addlistener)
- [bind](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/node_domain_.Domain.md#bind)
- [emit](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/node_domain_.Domain.md#emit)
- [enter](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/node_domain_.Domain.md#enter)
- [eventNames](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/node_domain_.Domain.md#eventnames)
- [exit](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/node_domain_.Domain.md#exit)
- [getMaxListeners](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/node_domain_.Domain.md#getmaxlisteners)
- [intercept](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/node_domain_.Domain.md#intercept)
- [listenerCount](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/node_domain_.Domain.md#listenercount)
- [listeners](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/node_domain_.Domain.md#listeners)
- [off](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/node_domain_.Domain.md#off)
- [on](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/node_domain_.Domain.md#on)
- [once](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/node_domain_.Domain.md#once)
- [prependListener](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/node_domain_.Domain.md#prependlistener)
- [prependOnceListener](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/node_domain_.Domain.md#prependoncelistener)
- [rawListeners](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/node_domain_.Domain.md#rawlisteners)
- [remove](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/node_domain_.Domain.md#remove)
- [removeAllListeners](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/node_domain_.Domain.md#removealllisteners)
- [removeListener](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/node_domain_.Domain.md#removelistener)
- [run](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/node_domain_.Domain.md#run)
- [setMaxListeners](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/node_domain_.Domain.md#setmaxlisteners)
- [getEventListeners](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/node_domain_.Domain.md#geteventlisteners)
- [listenerCount](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/node_domain_.Domain.md#listenercount-1)
- [on](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/node_domain_.Domain.md#on-1)
- [once](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/node_domain_.Domain.md#once-1)
- [setMaxListeners](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/node_domain_.Domain.md#setmaxlisteners-1)

## Constructors

### constructor

• **new Domain**(`options?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `EventEmitterOptions` |

#### Inherited from

[EventEmitter](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/events_.EventEmitter-1.md).[constructor](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/events_.EventEmitter-1.md#constructor)

## Properties

### members

• **members**: (`number` \| [`EventEmitter`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/events_.EventEmitter-1.md))[]

An array of timers and event emitters that have been explicitly added
to the domain.

___

### captureRejectionSymbol

▪ `Static` `Readonly` **captureRejectionSymbol**: typeof [`captureRejectionSymbol`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Hash.md#capturerejectionsymbol)

#### Inherited from

[EventEmitter](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/events_.EventEmitter-1.md).[captureRejectionSymbol](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/events_.EventEmitter-1.md#capturerejectionsymbol)

___

### captureRejections

▪ `Static` **captureRejections**: `boolean`

Sets or gets the default captureRejection value for all emitters.

#### Inherited from

[EventEmitter](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/events_.EventEmitter-1.md).[captureRejections](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/events_.EventEmitter-1.md#capturerejections)

___

### defaultMaxListeners

▪ `Static` **defaultMaxListeners**: `number`

#### Inherited from

[EventEmitter](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/events_.EventEmitter-1.md).[defaultMaxListeners](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/events_.EventEmitter-1.md#defaultmaxlisteners)

___

### errorMonitor

▪ `Static` `Readonly` **errorMonitor**: typeof [`errorMonitor`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Hash.md#errormonitor)

This symbol shall be used to install a listener for only monitoring `'error'`
events. Listeners installed using this symbol are called before the regular
`'error'` listeners are called.

Installing a listener using this symbol does not change the behavior once an
`'error'` event is emitted, therefore the process will still crash if no
regular `'error'` listener is installed.

#### Inherited from

[EventEmitter](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/events_.EventEmitter-1.md).[errorMonitor](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/events_.EventEmitter-1.md#errormonitor)

## Methods

### add

▸ **add**(`emitter`): `void`

Explicitly adds an emitter to the domain. If any event handlers called by
the emitter throw an error, or if the emitter emits an `'error'` event, it
will be routed to the domain's `'error'` event, just like with implicit
binding.

This also works with timers that are returned from `setInterval()` and `setTimeout()`. If their callback function throws, it will be caught by
the domain `'error'` handler.

If the Timer or `EventEmitter` was already bound to a domain, it is removed
from that one, and bound to this one instead.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `emitter` | `number` \| [`EventEmitter`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/events_.EventEmitter-1.md) | emitter or timer to be added to the domain |

#### Returns

`void`

___

### addListener

▸ **addListener**(`eventName`, `listener`): [`Domain`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/domain_.Domain.md)

Alias for `emitter.on(eventName, listener)`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`Domain`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/domain_.Domain.md)

#### Inherited from

[EventEmitter](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/events_.EventEmitter-1.md).[addListener](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/events_.EventEmitter-1.md#addlistener)

___

### bind

▸ **bind**<`T`\>(`callback`): `T`

The returned function will be a wrapper around the supplied callback
function. When the returned function is called, any errors that are
thrown will be routed to the domain's `'error'` event.

```js
const d = domain.create();

function readSomeFile(filename, cb) {
  fs.readFile(filename, 'utf8', d.bind((er, data) => {
    // If this throws, it will also be passed to the domain.
    return cb(er, data ? JSON.parse(data) : null);
  }));
}

d.on('error', (er) => {
  // An error occurred somewhere. If we throw it now, it will crash the program
  // with the normal line number and stack message.
});
```

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `Function` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `callback` | `T` | The callback function |

#### Returns

`T`

The bound function

___

### emit

▸ **emit**(`eventName`, ...`args`): `boolean`

Synchronously calls each of the listeners registered for the event named`eventName`, in the order they were registered, passing the supplied arguments
to each.

Returns `true` if the event had listeners, `false` otherwise.

```js
const EventEmitter = require('events');
const myEmitter = new EventEmitter();

// First listener
myEmitter.on('event', function firstListener() {
  console.log('Helloooo! first listener');
});
// Second listener
myEmitter.on('event', function secondListener(arg1, arg2) {
  console.log(`event with parameters ${arg1}, ${arg2} in second listener`);
});
// Third listener
myEmitter.on('event', function thirdListener(...args) {
  const parameters = args.join(', ');
  console.log(`event with parameters ${parameters} in third listener`);
});

console.log(myEmitter.listeners('event'));

myEmitter.emit('event', 1, 2, 3, 4, 5);

// Prints:
// [
//   [Function: firstListener],
//   [Function: secondListener],
//   [Function: thirdListener]
// ]
// Helloooo! first listener
// event with parameters 1, 2 in second listener
// event with parameters 1, 2, 3, 4, 5 in third listener
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` \| `symbol` |
| `...args` | `any`[] |

#### Returns

`boolean`

#### Inherited from

[EventEmitter](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/events_.EventEmitter-1.md).[emit](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/events_.EventEmitter-1.md#emit)

___

### enter

▸ **enter**(): `void`

The `enter()` method is plumbing used by the `run()`, `bind()`, and`intercept()` methods to set the active domain. It sets `domain.active` and`process.domain` to the domain, and implicitly
pushes the domain onto the domain
stack managed by the domain module (see [exit](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/node_domain_.Domain.md#exit) for details on the
domain stack). The call to `enter()` delimits the beginning of a chain of
asynchronous calls and I/O operations bound to a domain.

Calling `enter()` changes only the active domain, and does not alter the domain
itself. `enter()` and `exit()` can be called an arbitrary number of times on a
single domain.

#### Returns

`void`

___

### eventNames

▸ **eventNames**(): (`string` \| `symbol`)[]

Returns an array listing the events for which the emitter has registered
listeners. The values in the array are strings or `Symbol`s.

```js
const EventEmitter = require('events');
const myEE = new EventEmitter();
myEE.on('foo', () => {});
myEE.on('bar', () => {});

const sym = Symbol('symbol');
myEE.on(sym, () => {});

console.log(myEE.eventNames());
// Prints: [ 'foo', 'bar', Symbol(symbol) ]
```

#### Returns

(`string` \| `symbol`)[]

#### Inherited from

[EventEmitter](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/events_.EventEmitter-1.md).[eventNames](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/events_.EventEmitter-1.md#eventnames)

___

### exit

▸ **exit**(): `void`

The `exit()` method exits the current domain, popping it off the domain stack.
Any time execution is going to switch to the context of a different chain of
asynchronous calls, it's important to ensure that the current domain is exited.
The call to `exit()` delimits either the end of or an interruption to the chain
of asynchronous calls and I/O operations bound to a domain.

If there are multiple, nested domains bound to the current execution context,`exit()` will exit any domains nested within this domain.

Calling `exit()` changes only the active domain, and does not alter the domain
itself. `enter()` and `exit()` can be called an arbitrary number of times on a
single domain.

#### Returns

`void`

___

### getMaxListeners

▸ **getMaxListeners**(): `number`

Returns the current max listener value for the `EventEmitter` which is either
set by `emitter.setMaxListeners(n)` or defaults to [defaultMaxListeners](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/node_domain_.Domain.md#defaultmaxlisteners).

#### Returns

`number`

#### Inherited from

[EventEmitter](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/events_.EventEmitter-1.md).[getMaxListeners](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/events_.EventEmitter-1.md#getmaxlisteners)

___

### intercept

▸ **intercept**<`T`\>(`callback`): `T`

This method is almost identical to [bind](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/node_domain_.Domain.md#bind). However, in
addition to catching thrown errors, it will also intercept `Error` objects sent as the first argument to the function.

In this way, the common `if (err) return callback(err);` pattern can be replaced
with a single error handler in a single place.

```js
const d = domain.create();

function readSomeFile(filename, cb) {
  fs.readFile(filename, 'utf8', d.intercept((data) => {
    // Note, the first argument is never passed to the
    // callback since it is assumed to be the 'Error' argument
    // and thus intercepted by the domain.

    // If this throws, it will also be passed to the domain
    // so the error-handling logic can be moved to the 'error'
    // event on the domain instead of being repeated throughout
    // the program.
    return cb(null, JSON.parse(data));
  }));
}

d.on('error', (er) => {
  // An error occurred somewhere. If we throw it now, it will crash the program
  // with the normal line number and stack message.
});
```

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `Function` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `callback` | `T` | The callback function |

#### Returns

`T`

The intercepted function

___

### listenerCount

▸ **listenerCount**(`eventName`): `number`

Returns the number of listeners listening to the event named `eventName`.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `eventName` | `string` \| `symbol` | The name of the event being listened for |

#### Returns

`number`

#### Inherited from

[EventEmitter](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/events_.EventEmitter-1.md).[listenerCount](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/events_.EventEmitter-1.md#listenercount)

___

### listeners

▸ **listeners**(`eventName`): `Function`[]

Returns a copy of the array of listeners for the event named `eventName`.

```js
server.on('connection', (stream) => {
  console.log('someone connected!');
});
console.log(util.inspect(server.listeners('connection')));
// Prints: [ [Function] ]
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` \| `symbol` |

#### Returns

`Function`[]

#### Inherited from

[EventEmitter](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/events_.EventEmitter-1.md).[listeners](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/events_.EventEmitter-1.md#listeners)

___

### off

▸ **off**(`eventName`, `listener`): [`Domain`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/domain_.Domain.md)

Alias for `emitter.removeListener()`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`Domain`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/domain_.Domain.md)

#### Inherited from

[EventEmitter](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/events_.EventEmitter-1.md).[off](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/events_.EventEmitter-1.md#off)

___

### on

▸ **on**(`eventName`, `listener`): [`Domain`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/domain_.Domain.md)

Adds the `listener` function to the end of the listeners array for the
event named `eventName`. No checks are made to see if the `listener` has
already been added. Multiple calls passing the same combination of `eventName`and `listener` will result in the `listener` being added, and called, multiple
times.

```js
server.on('connection', (stream) => {
  console.log('someone connected!');
});
```

Returns a reference to the `EventEmitter`, so that calls can be chained.

By default, event listeners are invoked in the order they are added. The`emitter.prependListener()` method can be used as an alternative to add the
event listener to the beginning of the listeners array.

```js
const myEE = new EventEmitter();
myEE.on('foo', () => console.log('a'));
myEE.prependListener('foo', () => console.log('b'));
myEE.emit('foo');
// Prints:
//   b
//   a
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `eventName` | `string` \| `symbol` | The name of the event. |
| `listener` | (...`args`: `any`[]) => `void` | The callback function |

#### Returns

[`Domain`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/domain_.Domain.md)

#### Inherited from

[EventEmitter](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/events_.EventEmitter-1.md).[on](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/events_.EventEmitter-1.md#on)

___

### once

▸ **once**(`eventName`, `listener`): [`Domain`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/domain_.Domain.md)

Adds a **one-time**`listener` function for the event named `eventName`. The
next time `eventName` is triggered, this listener is removed and then invoked.

```js
server.once('connection', (stream) => {
  console.log('Ah, we have our first user!');
});
```

Returns a reference to the `EventEmitter`, so that calls can be chained.

By default, event listeners are invoked in the order they are added. The`emitter.prependOnceListener()` method can be used as an alternative to add the
event listener to the beginning of the listeners array.

```js
const myEE = new EventEmitter();
myEE.once('foo', () => console.log('a'));
myEE.prependOnceListener('foo', () => console.log('b'));
myEE.emit('foo');
// Prints:
//   b
//   a
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `eventName` | `string` \| `symbol` | The name of the event. |
| `listener` | (...`args`: `any`[]) => `void` | The callback function |

#### Returns

[`Domain`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/domain_.Domain.md)

#### Inherited from

[EventEmitter](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/events_.EventEmitter-1.md).[once](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/events_.EventEmitter-1.md#once)

___

### prependListener

▸ **prependListener**(`eventName`, `listener`): [`Domain`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/domain_.Domain.md)

Adds the `listener` function to the _beginning_ of the listeners array for the
event named `eventName`. No checks are made to see if the `listener` has
already been added. Multiple calls passing the same combination of `eventName`and `listener` will result in the `listener` being added, and called, multiple
times.

```js
server.prependListener('connection', (stream) => {
  console.log('someone connected!');
});
```

Returns a reference to the `EventEmitter`, so that calls can be chained.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `eventName` | `string` \| `symbol` | The name of the event. |
| `listener` | (...`args`: `any`[]) => `void` | The callback function |

#### Returns

[`Domain`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/domain_.Domain.md)

#### Inherited from

[EventEmitter](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/events_.EventEmitter-1.md).[prependListener](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/events_.EventEmitter-1.md#prependlistener)

___

### prependOnceListener

▸ **prependOnceListener**(`eventName`, `listener`): [`Domain`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/domain_.Domain.md)

Adds a **one-time**`listener` function for the event named `eventName` to the_beginning_ of the listeners array. The next time `eventName` is triggered, this
listener is removed, and then invoked.

```js
server.prependOnceListener('connection', (stream) => {
  console.log('Ah, we have our first user!');
});
```

Returns a reference to the `EventEmitter`, so that calls can be chained.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `eventName` | `string` \| `symbol` | The name of the event. |
| `listener` | (...`args`: `any`[]) => `void` | The callback function |

#### Returns

[`Domain`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/domain_.Domain.md)

#### Inherited from

[EventEmitter](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/events_.EventEmitter-1.md).[prependOnceListener](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/events_.EventEmitter-1.md#prependoncelistener)

___

### rawListeners

▸ **rawListeners**(`eventName`): `Function`[]

Returns a copy of the array of listeners for the event named `eventName`,
including any wrappers (such as those created by `.once()`).

```js
const emitter = new EventEmitter();
emitter.once('log', () => console.log('log once'));

// Returns a new Array with a function `onceWrapper` which has a property
// `listener` which contains the original listener bound above
const listeners = emitter.rawListeners('log');
const logFnWrapper = listeners[0];

// Logs "log once" to the console and does not unbind the `once` event
logFnWrapper.listener();

// Logs "log once" to the console and removes the listener
logFnWrapper();

emitter.on('log', () => console.log('log persistently'));
// Will return a new Array with a single function bound by `.on()` above
const newListeners = emitter.rawListeners('log');

// Logs "log persistently" twice
newListeners[0]();
emitter.emit('log');
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` \| `symbol` |

#### Returns

`Function`[]

#### Inherited from

[EventEmitter](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/events_.EventEmitter-1.md).[rawListeners](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/events_.EventEmitter-1.md#rawlisteners)

___

### remove

▸ **remove**(`emitter`): `void`

The opposite of [add](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/node_domain_.Domain.md#add). Removes domain handling from the
specified emitter.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `emitter` | `number` \| [`EventEmitter`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/events_.EventEmitter-1.md) | emitter or timer to be removed from the domain |

#### Returns

`void`

___

### removeAllListeners

▸ **removeAllListeners**(`event?`): [`Domain`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/domain_.Domain.md)

Removes all listeners, or those of the specified `eventName`.

It is bad practice to remove listeners added elsewhere in the code,
particularly when the `EventEmitter` instance was created by some other
component or module (e.g. sockets or file streams).

Returns a reference to the `EventEmitter`, so that calls can be chained.

#### Parameters

| Name | Type |
| :------ | :------ |
| `event?` | `string` \| `symbol` |

#### Returns

[`Domain`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/domain_.Domain.md)

#### Inherited from

[EventEmitter](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/events_.EventEmitter-1.md).[removeAllListeners](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/events_.EventEmitter-1.md#removealllisteners)

___

### removeListener

▸ **removeListener**(`eventName`, `listener`): [`Domain`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/domain_.Domain.md)

Removes the specified `listener` from the listener array for the event named`eventName`.

```js
const callback = (stream) => {
  console.log('someone connected!');
};
server.on('connection', callback);
// ...
server.removeListener('connection', callback);
```

`removeListener()` will remove, at most, one instance of a listener from the
listener array. If any single listener has been added multiple times to the
listener array for the specified `eventName`, then `removeListener()` must be
called multiple times to remove each instance.

Once an event is emitted, all listeners attached to it at the
time of emitting are called in order. This implies that any`removeListener()` or `removeAllListeners()` calls _after_ emitting and_before_ the last listener finishes execution will
not remove them from`emit()` in progress. Subsequent events behave as expected.

```js
const myEmitter = new MyEmitter();

const callbackA = () => {
  console.log('A');
  myEmitter.removeListener('event', callbackB);
};

const callbackB = () => {
  console.log('B');
};

myEmitter.on('event', callbackA);

myEmitter.on('event', callbackB);

// callbackA removes listener callbackB but it will still be called.
// Internal listener array at time of emit [callbackA, callbackB]
myEmitter.emit('event');
// Prints:
//   A
//   B

// callbackB is now removed.
// Internal listener array [callbackA]
myEmitter.emit('event');
// Prints:
//   A
```

Because listeners are managed using an internal array, calling this will
change the position indices of any listener registered _after_ the listener
being removed. This will not impact the order in which listeners are called,
but it means that any copies of the listener array as returned by
the `emitter.listeners()` method will need to be recreated.

When a single function has been added as a handler multiple times for a single
event (as in the example below), `removeListener()` will remove the most
recently added instance. In the example the `once('ping')`listener is removed:

```js
const ee = new EventEmitter();

function pong() {
  console.log('pong');
}

ee.on('ping', pong);
ee.once('ping', pong);
ee.removeListener('ping', pong);

ee.emit('ping');
ee.emit('ping');
```

Returns a reference to the `EventEmitter`, so that calls can be chained.

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`Domain`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/domain_.Domain.md)

#### Inherited from

[EventEmitter](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/events_.EventEmitter-1.md).[removeListener](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/events_.EventEmitter-1.md#removelistener)

___

### run

▸ **run**<`T`\>(`fn`, ...`args`): `T`

Run the supplied function in the context of the domain, implicitly
binding all event emitters, timers, and lowlevel requests that are
created in that context. Optionally, arguments can be passed to
the function.

This is the most basic way to use a domain.

```js
const domain = require('domain');
const fs = require('fs');
const d = domain.create();
d.on('error', (er) => {
  console.error('Caught error!', er);
});
d.run(() => {
  process.nextTick(() => {
    setTimeout(() => { // Simulating some various async stuff
      fs.open('non-existent file', 'r', (er, fd) => {
        if (er) throw er;
        // proceed...
      });
    }, 100);
  });
});
```

In this example, the `d.on('error')` handler will be triggered, rather
than crashing the program.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fn` | (...`args`: `any`[]) => `T` |
| `...args` | `any`[] |

#### Returns

`T`

___

### setMaxListeners

▸ **setMaxListeners**(`n`): [`Domain`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/domain_.Domain.md)

By default `EventEmitter`s will print a warning if more than `10` listeners are
added for a particular event. This is a useful default that helps finding
memory leaks. The `emitter.setMaxListeners()` method allows the limit to be
modified for this specific `EventEmitter` instance. The value can be set to`Infinity` (or `0`) to indicate an unlimited number of listeners.

Returns a reference to the `EventEmitter`, so that calls can be chained.

#### Parameters

| Name | Type |
| :------ | :------ |
| `n` | `number` |

#### Returns

[`Domain`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/domain_.Domain.md)

#### Inherited from

[EventEmitter](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/events_.EventEmitter-1.md).[setMaxListeners](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/events_.EventEmitter-1.md#setmaxlisteners)

___

### getEventListeners

▸ `Static` **getEventListeners**(`emitter`, `name`): `Function`[]

Returns a copy of the array of listeners for the event named `eventName`.

For `EventEmitter`s this behaves exactly the same as calling `.listeners` on
the emitter.

For `EventTarget`s this is the only way to get the event listeners for the
event target. This is useful for debugging and diagnostic purposes.

```js
const { getEventListeners, EventEmitter } = require('events');

{
  const ee = new EventEmitter();
  const listener = () => console.log('Events are fun');
  ee.on('foo', listener);
  getEventListeners(ee, 'foo'); // [listener]
}
{
  const et = new EventTarget();
  const listener = () => console.log('Events are fun');
  et.addEventListener('foo', listener);
  getEventListeners(et, 'foo'); // [listener]
}
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `emitter` | [`EventEmitter`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/events_.EventEmitter-1.md) \| `DOMEventTarget` |
| `name` | `string` \| `symbol` |

#### Returns

`Function`[]

#### Inherited from

[EventEmitter](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/events_.EventEmitter-1.md).[getEventListeners](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/events_.EventEmitter-1.md#geteventlisteners)

___

### listenerCount

▸ `Static` **listenerCount**(`emitter`, `eventName`): `number`

A class method that returns the number of listeners for the given `eventName`registered on the given `emitter`.

```js
const { EventEmitter, listenerCount } = require('events');
const myEmitter = new EventEmitter();
myEmitter.on('event', () => {});
myEmitter.on('event', () => {});
console.log(listenerCount(myEmitter, 'event'));
// Prints: 2
```

**`Deprecated`**

Since v3.2.0 - Use `listenerCount` instead.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `emitter` | [`EventEmitter`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/events_.EventEmitter-1.md) | The emitter to query |
| `eventName` | `string` \| `symbol` | The event name |

#### Returns

`number`

#### Inherited from

[EventEmitter](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/events_.EventEmitter-1.md).[listenerCount](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/events_.EventEmitter-1.md#listenercount-1)

___

### on

▸ `Static` **on**(`emitter`, `eventName`, `options?`): `AsyncIterableIterator`<`any`\>

```js
const { on, EventEmitter } = require('events');

(async () => {
  const ee = new EventEmitter();

  // Emit later on
  process.nextTick(() => {
    ee.emit('foo', 'bar');
    ee.emit('foo', 42);
  });

  for await (const event of on(ee, 'foo')) {
    // The execution of this inner block is synchronous and it
    // processes one event at a time (even with await). Do not use
    // if concurrent execution is required.
    console.log(event); // prints ['bar'] [42]
  }
  // Unreachable here
})();
```

Returns an `AsyncIterator` that iterates `eventName` events. It will throw
if the `EventEmitter` emits `'error'`. It removes all listeners when
exiting the loop. The `value` returned by each iteration is an array
composed of the emitted event arguments.

An `AbortSignal` can be used to cancel waiting on events:

```js
const { on, EventEmitter } = require('events');
const ac = new AbortController();

(async () => {
  const ee = new EventEmitter();

  // Emit later on
  process.nextTick(() => {
    ee.emit('foo', 'bar');
    ee.emit('foo', 42);
  });

  for await (const event of on(ee, 'foo', { signal: ac.signal })) {
    // The execution of this inner block is synchronous and it
    // processes one event at a time (even with await). Do not use
    // if concurrent execution is required.
    console.log(event); // prints ['bar'] [42]
  }
  // Unreachable here
})();

process.nextTick(() => ac.abort());
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `emitter` | [`EventEmitter`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/events_.EventEmitter-1.md) | - |
| `eventName` | `string` | The name of the event being listened for |
| `options?` | `StaticEventEmitterOptions` | - |

#### Returns

`AsyncIterableIterator`<`any`\>

that iterates `eventName` events emitted by the `emitter`

#### Inherited from

[EventEmitter](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/events_.EventEmitter-1.md).[on](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/events_.EventEmitter-1.md#on-1)

___

### once

▸ `Static` **once**(`emitter`, `eventName`, `options?`): `Promise`<`any`[]\>

Creates a `Promise` that is fulfilled when the `EventEmitter` emits the given
event or that is rejected if the `EventEmitter` emits `'error'` while waiting.
The `Promise` will resolve with an array of all the arguments emitted to the
given event.

This method is intentionally generic and works with the web platform [EventTarget](https://dom.spec.whatwg.org/#interface-eventtarget) interface, which has no special`'error'` event
semantics and does not listen to the `'error'` event.

```js
const { once, EventEmitter } = require('events');

async function run() {
  const ee = new EventEmitter();

  process.nextTick(() => {
    ee.emit('myevent', 42);
  });

  const [value] = await once(ee, 'myevent');
  console.log(value);

  const err = new Error('kaboom');
  process.nextTick(() => {
    ee.emit('error', err);
  });

  try {
    await once(ee, 'myevent');
  } catch (err) {
    console.log('error happened', err);
  }
}

run();
```

The special handling of the `'error'` event is only used when `events.once()`is used to wait for another event. If `events.once()` is used to wait for the
'`error'` event itself, then it is treated as any other kind of event without
special handling:

```js
const { EventEmitter, once } = require('events');

const ee = new EventEmitter();

once(ee, 'error')
  .then(([err]) => console.log('ok', err.message))
  .catch((err) => console.log('error', err.message));

ee.emit('error', new Error('boom'));

// Prints: ok boom
```

An `AbortSignal` can be used to cancel waiting for the event:

```js
const { EventEmitter, once } = require('events');

const ee = new EventEmitter();
const ac = new AbortController();

async function foo(emitter, event, signal) {
  try {
    await once(emitter, event, { signal });
    console.log('event emitted!');
  } catch (error) {
    if (error.name === 'AbortError') {
      console.error('Waiting for the event was canceled!');
    } else {
      console.error('There was an error', error.message);
    }
  }
}

foo(ee, 'foo', ac.signal);
ac.abort(); // Abort waiting for the event
ee.emit('foo'); // Prints: Waiting for the event was canceled!
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `emitter` | `NodeEventTarget` |
| `eventName` | `string` \| `symbol` |
| `options?` | `StaticEventEmitterOptions` |

#### Returns

`Promise`<`any`[]\>

#### Inherited from

[EventEmitter](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/events_.EventEmitter-1.md).[once](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/events_.EventEmitter-1.md#once-1)

▸ `Static` **once**(`emitter`, `eventName`, `options?`): `Promise`<`any`[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `emitter` | `DOMEventTarget` |
| `eventName` | `string` |
| `options?` | `StaticEventEmitterOptions` |

#### Returns

`Promise`<`any`[]\>

#### Inherited from

[EventEmitter](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/events_.EventEmitter-1.md).[once](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/events_.EventEmitter-1.md#once-1)

___

### setMaxListeners

▸ `Static` **setMaxListeners**(`n?`, ...`eventTargets`): `void`

```js
const {
  setMaxListeners,
  EventEmitter
} = require('events');

const target = new EventTarget();
const emitter = new EventEmitter();

setMaxListeners(5, target, emitter);
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `n?` | `number` | A non-negative number. The maximum number of listeners per `EventTarget` event. |
| `...eventTargets` | ([`EventEmitter`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/events_.EventEmitter-1.md) \| `DOMEventTarget`)[] | - |

#### Returns

`void`

#### Inherited from

[EventEmitter](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/events_.EventEmitter-1.md).[setMaxListeners](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/events_.EventEmitter-1.md#setmaxlisteners-1)
