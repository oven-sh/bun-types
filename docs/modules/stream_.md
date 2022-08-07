[bun-types](https://oven-sh.github.io/bun-types/README.md) / [Exports](https://oven-sh.github.io/bun-types/modules.md) / "stream"

# Namespace: "stream"

A stream is an abstract interface for working with streaming data in Node.js.
The `stream` module provides an API for implementing the stream interface.

There are many stream objects provided by Node.js. For instance, a `request to an HTTP server` and `process.stdout` are both stream instances.

Streams can be readable, writable, or both. All streams are instances of `EventEmitter`.

To access the `stream` module:

```js
const stream = require('stream');
```

The `stream` module is useful for creating new types of stream instances. It is
usually not necessary to use the `stream` module to consume streams.

**`See`**

[source](https://github.com/nodejs/node/blob/v18.0.0/lib/stream.js)

## Table of contents

### Namespaces

- [finished](https://oven-sh.github.io/bun-types/modules/stream_.finished.md)
- [pipeline](https://oven-sh.github.io/bun-types/modules/stream_.pipeline.md)

### Classes

- [Duplex](https://oven-sh.github.io/bun-types/classes/stream_.Duplex.md)
- [PassThrough](https://oven-sh.github.io/bun-types/classes/stream_.PassThrough.md)
- [Readable](https://oven-sh.github.io/bun-types/classes/stream_.Readable.md)
- [Stream](https://oven-sh.github.io/bun-types/classes/stream_.Stream.md)
- [Transform](https://oven-sh.github.io/bun-types/classes/stream_.Transform.md)
- [Writable](https://oven-sh.github.io/bun-types/classes/stream_.Writable.md)

### Interfaces

- [DuplexOptions](https://oven-sh.github.io/bun-types/interfaces/stream_.DuplexOptions.md)
- [FinishedOptions](https://oven-sh.github.io/bun-types/interfaces/stream_.FinishedOptions.md)
- [Pipe](https://oven-sh.github.io/bun-types/interfaces/stream_.Pipe.md)
- [PipelineOptions](https://oven-sh.github.io/bun-types/interfaces/stream_.PipelineOptions.md)
- [ReadableOptions](https://oven-sh.github.io/bun-types/interfaces/stream_.ReadableOptions.md)
- [StreamOptions](https://oven-sh.github.io/bun-types/interfaces/stream_.StreamOptions.md)
- [TransformOptions](https://oven-sh.github.io/bun-types/interfaces/stream_.TransformOptions.md)
- [WritableOptions](https://oven-sh.github.io/bun-types/interfaces/stream_.WritableOptions.md)

### Type Aliases

- [PipelineCallback](https://oven-sh.github.io/bun-types/modules/stream_.md#pipelinecallback)
- [PipelineDestination](https://oven-sh.github.io/bun-types/modules/stream_.md#pipelinedestination)
- [PipelineDestinationIterableFunction](https://oven-sh.github.io/bun-types/modules/stream_.md#pipelinedestinationiterablefunction)
- [PipelineDestinationPromiseFunction](https://oven-sh.github.io/bun-types/modules/stream_.md#pipelinedestinationpromisefunction)
- [PipelinePromise](https://oven-sh.github.io/bun-types/modules/stream_.md#pipelinepromise)
- [PipelineSource](https://oven-sh.github.io/bun-types/modules/stream_.md#pipelinesource)
- [PipelineSourceFunction](https://oven-sh.github.io/bun-types/modules/stream_.md#pipelinesourcefunction)
- [PipelineTransform](https://oven-sh.github.io/bun-types/modules/stream_.md#pipelinetransform)
- [PipelineTransformSource](https://oven-sh.github.io/bun-types/modules/stream_.md#pipelinetransformsource)
- [TransformCallback](https://oven-sh.github.io/bun-types/modules/stream_.md#transformcallback)

### Functions

- [addAbortSignal](https://oven-sh.github.io/bun-types/modules/stream_.md#addabortsignal)
- [finished](https://oven-sh.github.io/bun-types/modules/stream_.md#finished)
- [isErrored](https://oven-sh.github.io/bun-types/modules/stream_.md#iserrored)
- [isReadable](https://oven-sh.github.io/bun-types/modules/stream_.md#isreadable)
- [pipeline](https://oven-sh.github.io/bun-types/modules/stream_.md#pipeline)

## Type Aliases

### PipelineCallback

Ƭ **PipelineCallback**<`S`\>: `S` extends [`PipelineDestinationPromiseFunction`](https://oven-sh.github.io/bun-types/modules/stream_.md#pipelinedestinationpromisefunction)<`any`, infer P\> ? (`err`: [`ErrnoException`](https://oven-sh.github.io/bun-types/interfaces/ErrnoException.md) \| ``null``, `value`: `P`) => `void` : (`err`: [`ErrnoException`](https://oven-sh.github.io/bun-types/interfaces/ErrnoException.md) \| ``null``) => `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `S` | extends [`PipelineDestination`](https://oven-sh.github.io/bun-types/modules/stream_.md#pipelinedestination)<`any`, `any`\> |

___

### PipelineDestination

Ƭ **PipelineDestination**<`S`, `P`\>: `S` extends [`PipelineTransformSource`](https://oven-sh.github.io/bun-types/modules/stream_.md#pipelinetransformsource)<infer ST\> ? [`WritableStream`](https://oven-sh.github.io/bun-types/modules.md#writablestream) \| [`PipelineDestinationIterableFunction`](https://oven-sh.github.io/bun-types/modules/stream_.md#pipelinedestinationiterablefunction)<`ST`\> \| [`PipelineDestinationPromiseFunction`](https://oven-sh.github.io/bun-types/modules/stream_.md#pipelinedestinationpromisefunction)<`ST`, `P`\> : `never`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `S` | extends [`PipelineTransformSource`](https://oven-sh.github.io/bun-types/modules/stream_.md#pipelinetransformsource)<`any`\> |
| `P` | `P` |

___

### PipelineDestinationIterableFunction

Ƭ **PipelineDestinationIterableFunction**<`T`\>: (`source`: `AsyncIterable`<`T`\>) => `AsyncIterable`<`any`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Type declaration

▸ (`source`): `AsyncIterable`<`any`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `source` | `AsyncIterable`<`T`\> |

##### Returns

`AsyncIterable`<`any`\>

___

### PipelineDestinationPromiseFunction

Ƭ **PipelineDestinationPromiseFunction**<`T`, `P`\>: (`source`: `AsyncIterable`<`T`\>) => `Promise`<`P`\>

#### Type parameters

| Name |
| :------ |
| `T` |
| `P` |

#### Type declaration

▸ (`source`): `Promise`<`P`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `source` | `AsyncIterable`<`T`\> |

##### Returns

`Promise`<`P`\>

___

### PipelinePromise

Ƭ **PipelinePromise**<`S`\>: `S` extends [`PipelineDestinationPromiseFunction`](https://oven-sh.github.io/bun-types/modules/stream_.md#pipelinedestinationpromisefunction)<`any`, infer P\> ? `Promise`<`P`\> : `Promise`<`void`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `S` | extends [`PipelineDestination`](https://oven-sh.github.io/bun-types/modules/stream_.md#pipelinedestination)<`any`, `any`\> |

___

### PipelineSource

Ƭ **PipelineSource**<`T`\>: `Iterable`<`T`\> \| `AsyncIterable`<`T`\> \| [`ReadableStream`](https://oven-sh.github.io/bun-types/modules.md#readablestream) \| [`PipelineSourceFunction`](https://oven-sh.github.io/bun-types/modules/stream_.md#pipelinesourcefunction)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

___

### PipelineSourceFunction

Ƭ **PipelineSourceFunction**<`T`\>: () => `Iterable`<`T`\> \| `AsyncIterable`<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Type declaration

▸ (): `Iterable`<`T`\> \| `AsyncIterable`<`T`\>

##### Returns

`Iterable`<`T`\> \| `AsyncIterable`<`T`\>

___

### PipelineTransform

Ƭ **PipelineTransform**<`S`, `U`\>: [`ReadWriteStream`](https://oven-sh.github.io/bun-types/interfaces/ReadWriteStream.md) \| (`source`: `S` extends (...`args`: `any`[]) => `Iterable`<infer ST\> \| `AsyncIterable`<infer ST\> ? `AsyncIterable`<`ST`\> : `S`) => `AsyncIterable`<`U`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `S` | extends [`PipelineTransformSource`](https://oven-sh.github.io/bun-types/modules/stream_.md#pipelinetransformsource)<`any`\> |
| `U` | `U` |

___

### PipelineTransformSource

Ƭ **PipelineTransformSource**<`T`\>: [`PipelineSource`](https://oven-sh.github.io/bun-types/modules/stream_.md#pipelinesource)<`T`\> \| [`PipelineTransform`](https://oven-sh.github.io/bun-types/modules/stream_.md#pipelinetransform)<`any`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

___

### TransformCallback

Ƭ **TransformCallback**: (`error?`: `Error` \| ``null``, `data?`: `any`) => `void`

#### Type declaration

▸ (`error?`, `data?`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `error?` | `Error` \| ``null`` |
| `data?` | `any` |

##### Returns

`void`

## Functions

### addAbortSignal

▸ **addAbortSignal**<`T`\>(`signal`, `stream`): `T`

Attaches an AbortSignal to a readable or writeable stream. This lets code
control stream destruction using an `AbortController`.

Calling `abort` on the `AbortController` corresponding to the passed`AbortSignal` will behave the same way as calling `.destroy(new AbortError())`on the stream.

```js
const fs = require('fs');

const controller = new AbortController();
const read = addAbortSignal(
  controller.signal,
  fs.createReadStream(('object.json'))
);
// Later, abort the operation closing the stream
controller.abort();
```

Or using an `AbortSignal` with a readable stream as an async iterable:

```js
const controller = new AbortController();
setTimeout(() => controller.abort(), 10_000); // set a timeout
const stream = addAbortSignal(
  controller.signal,
  fs.createReadStream(('object.json'))
);
(async () => {
  try {
    for await (const chunk of stream) {
      await process(chunk);
    }
  } catch (e) {
    if (e.name === 'AbortError') {
      // The operation was cancelled
    } else {
      throw e;
    }
  }
})();
```

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Stream`](https://oven-sh.github.io/bun-types/classes/stream_.Stream.md)<`T`\> |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `signal` | [`AbortSignal`](https://oven-sh.github.io/bun-types/modules.md#abortsignal) | A signal representing possible cancellation |
| `stream` | `T` | a stream to attach a signal to |

#### Returns

`T`

___

### finished

▸ **finished**(`stream`, `options`, `callback`): () => `void`

A function to get notified when a stream is no longer readable, writable
or has experienced an error or a premature close event.

```js
const { finished } = require('stream');

const rs = fs.createReadStream('archive.tar');

finished(rs, (err) => {
  if (err) {
    console.error('Stream failed.', err);
  } else {
    console.log('Stream is done reading.');
  }
});

rs.resume(); // Drain the stream.
```

Especially useful in error handling scenarios where a stream is destroyed
prematurely (like an aborted HTTP request), and will not emit `'end'`or `'finish'`.

The `finished` API provides promise version:

```js
const { finished } = require('stream/promises');

const rs = fs.createReadStream('archive.tar');

async function run() {
  await finished(rs);
  console.log('Stream is done reading.');
}

run().catch(console.error);
rs.resume(); // Drain the stream.
```

`stream.finished()` leaves dangling event listeners (in particular`'error'`, `'end'`, `'finish'` and `'close'`) after `callback` has been
invoked. The reason for this is so that unexpected `'error'` events (due to
incorrect stream implementations) do not cause unexpected crashes.
If this is unwanted behavior then the returned cleanup function needs to be
invoked in the callback:

```js
const cleanup = finished(rs, (err) => {
  cleanup();
  // ...
});
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `stream` | [`ReadableStream`](https://oven-sh.github.io/bun-types/modules.md#readablestream)<`any`\> \| [`WritableStream`](https://oven-sh.github.io/bun-types/modules.md#writablestream)<`any`\> \| [`ReadWriteStream`](https://oven-sh.github.io/bun-types/interfaces/ReadWriteStream.md) | A readable and/or writable stream. |
| `options` | [`FinishedOptions`](https://oven-sh.github.io/bun-types/interfaces/stream_.FinishedOptions.md) | - |
| `callback` | (`err?`: [`ErrnoException`](https://oven-sh.github.io/bun-types/interfaces/ErrnoException.md)) => `void` | A callback function that takes an optional error argument. |

#### Returns

`fn`

A cleanup function which removes all registered listeners.

▸ (): `void`

##### Returns

`void`

▸ **finished**(`stream`, `callback`): () => `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `stream` | [`ReadableStream`](https://oven-sh.github.io/bun-types/modules.md#readablestream)<`any`\> \| [`WritableStream`](https://oven-sh.github.io/bun-types/modules.md#writablestream)<`any`\> \| [`ReadWriteStream`](https://oven-sh.github.io/bun-types/interfaces/ReadWriteStream.md) |
| `callback` | (`err?`: [`ErrnoException`](https://oven-sh.github.io/bun-types/interfaces/ErrnoException.md)) => `void` |

#### Returns

`fn`

▸ (): `void`

##### Returns

`void`

___

### isErrored

▸ **isErrored**(`stream`): `boolean`

Returns whether the stream has encountered an error.

#### Parameters

| Name | Type |
| :------ | :------ |
| `stream` | [`ReadableStream`](https://oven-sh.github.io/bun-types/modules.md#readablestream)<`any`\> \| [`Readable`](https://oven-sh.github.io/bun-types/classes/stream_.Readable.md)<`any`\> \| [`Writable`](https://oven-sh.github.io/bun-types/classes/stream_.Writable.md)<`any`\> \| [`WritableStream`](https://oven-sh.github.io/bun-types/modules.md#writablestream)<`any`\> |

#### Returns

`boolean`

___

### isReadable

▸ **isReadable**(`stream`): `boolean`

Returns whether the stream is readable.

#### Parameters

| Name | Type |
| :------ | :------ |
| `stream` | [`ReadableStream`](https://oven-sh.github.io/bun-types/modules.md#readablestream)<`any`\> \| [`Readable`](https://oven-sh.github.io/bun-types/classes/stream_.Readable.md)<`any`\> |

#### Returns

`boolean`

___

### pipeline

▸ **pipeline**<`A`, `B`\>(`source`, `destination`, `callback?`): `B` extends [`WritableStream`](https://oven-sh.github.io/bun-types/modules.md#writablestream) ? `B` : [`WritableStream`](https://oven-sh.github.io/bun-types/modules.md#writablestream)

A module method to pipe between streams and generators forwarding errors and
properly cleaning up and provide a callback when the pipeline is complete.

```js
const { pipeline } = require('stream');
const fs = require('fs');
const zlib = require('zlib');

// Use the pipeline API to easily pipe a series of streams
// together and get notified when the pipeline is fully done.

// A pipeline to gzip a potentially huge tar file efficiently:

pipeline(
  fs.createReadStream('archive.tar'),
  zlib.createGzip(),
  fs.createWriteStream('archive.tar.gz'),
  (err) => {
    if (err) {
      console.error('Pipeline failed.', err);
    } else {
      console.log('Pipeline succeeded.');
    }
  }
);
```

The `pipeline` API provides a promise version, which can also
receive an options argument as the last parameter with a`signal` `AbortSignal` property. When the signal is aborted,`destroy` will be called on the underlying pipeline, with
an`AbortError`.

```js
const { pipeline } = require('stream/promises');

async function run() {
  await pipeline(
    fs.createReadStream('archive.tar'),
    zlib.createGzip(),
    fs.createWriteStream('archive.tar.gz')
  );
  console.log('Pipeline succeeded.');
}

run().catch(console.error);
```

To use an `AbortSignal`, pass it inside an options object,
as the last argument:

```js
const { pipeline } = require('stream/promises');

async function run() {
  const ac = new AbortController();
  const signal = ac.signal;

  setTimeout(() => ac.abort(), 1);
  await pipeline(
    fs.createReadStream('archive.tar'),
    zlib.createGzip(),
    fs.createWriteStream('archive.tar.gz'),
    { signal },
  );
}

run().catch(console.error); // AbortError
```

The `pipeline` API also supports async generators:

```js
const { pipeline } = require('stream/promises');
const fs = require('fs');

async function run() {
  await pipeline(
    fs.createReadStream('lowercase.txt'),
    async function* (source, { signal }) {
      source.setEncoding('utf8');  // Work with strings rather than `Buffer`s.
      for await (const chunk of source) {
        yield await processChunk(chunk, { signal });
      }
    },
    fs.createWriteStream('uppercase.txt')
  );
  console.log('Pipeline succeeded.');
}

run().catch(console.error);
```

Remember to handle the `signal` argument passed into the async generator.
Especially in the case where the async generator is the source for the
pipeline (i.e. first argument) or the pipeline will never complete.

```js
const { pipeline } = require('stream/promises');
const fs = require('fs');

async function run() {
  await pipeline(
    async function* ({ signal }) {
      await someLongRunningfn({ signal });
      yield 'asd';
    },
    fs.createWriteStream('uppercase.txt')
  );
  console.log('Pipeline succeeded.');
}

run().catch(console.error);
```

`stream.pipeline()` will call `stream.destroy(err)` on all streams except:

* `Readable` streams which have emitted `'end'` or `'close'`.
* `Writable` streams which have emitted `'finish'` or `'close'`.

`stream.pipeline()` leaves dangling event listeners on the streams
after the `callback` has been invoked. In the case of reuse of streams after
failure, this can cause event listener leaks and swallowed errors. If the last
stream is readable, dangling event listeners will be removed so that the last
stream can be consumed later.

`stream.pipeline()` closes all the streams when an error is raised.
The `IncomingRequest` usage with `pipeline` could lead to an unexpected behavior
once it would destroy the socket without sending the expected response.
See the example below:

```js
const fs = require('fs');
const http = require('http');
const { pipeline } = require('stream');

const server = http.createServer((req, res) => {
  const fileStream = fs.createReadStream('./fileNotExist.txt');
  pipeline(fileStream, res, (err) => {
    if (err) {
      console.log(err); // No such file
      // this message can't be sent once `pipeline` already destroyed the socket
      return res.end('error!!!');
    }
  });
});
```

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | extends [`PipelineSource`](https://oven-sh.github.io/bun-types/modules/stream_.md#pipelinesource)<`any`\> |
| `B` | extends [`WritableStream`](https://oven-sh.github.io/bun-types/modules.md#writablestream)<`any`\> \| [`PipelineDestinationIterableFunction`](https://oven-sh.github.io/bun-types/modules/stream_.md#pipelinedestinationiterablefunction)<`any`\> \| [`PipelineDestinationPromiseFunction`](https://oven-sh.github.io/bun-types/modules/stream_.md#pipelinedestinationpromisefunction)<`any`, `any`\> \| [`WritableStream`](https://oven-sh.github.io/bun-types/modules.md#writablestream)<`any`\> \| [`PipelineDestinationIterableFunction`](https://oven-sh.github.io/bun-types/modules/stream_.md#pipelinedestinationiterablefunction)<`unknown`\> \| [`PipelineDestinationPromiseFunction`](https://oven-sh.github.io/bun-types/modules/stream_.md#pipelinedestinationpromisefunction)<`unknown`, `any`\> |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `source` | `A` | - |
| `destination` | `B` | - |
| `callback?` | [`PipelineCallback`](https://oven-sh.github.io/bun-types/modules/stream_.md#pipelinecallback)<`B`\> | Called when the pipeline is fully done. |

#### Returns

`B` extends [`WritableStream`](https://oven-sh.github.io/bun-types/modules.md#writablestream) ? `B` : [`WritableStream`](https://oven-sh.github.io/bun-types/modules.md#writablestream)

▸ **pipeline**<`A`, `T1`, `B`\>(`source`, `transform1`, `destination`, `callback?`): `B` extends [`WritableStream`](https://oven-sh.github.io/bun-types/modules.md#writablestream) ? `B` : [`WritableStream`](https://oven-sh.github.io/bun-types/modules.md#writablestream)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | extends [`PipelineSource`](https://oven-sh.github.io/bun-types/modules/stream_.md#pipelinesource)<`any`\> |
| `T1` | extends [`PipelineTransform`](https://oven-sh.github.io/bun-types/modules/stream_.md#pipelinetransform)<`A`, `any`\> |
| `B` | extends [`WritableStream`](https://oven-sh.github.io/bun-types/modules.md#writablestream)<`any`\> \| [`PipelineDestinationIterableFunction`](https://oven-sh.github.io/bun-types/modules/stream_.md#pipelinedestinationiterablefunction)<`any`\> \| [`PipelineDestinationPromiseFunction`](https://oven-sh.github.io/bun-types/modules/stream_.md#pipelinedestinationpromisefunction)<`any`, `any`\> \| [`WritableStream`](https://oven-sh.github.io/bun-types/modules.md#writablestream)<`any`\> \| [`PipelineDestinationIterableFunction`](https://oven-sh.github.io/bun-types/modules/stream_.md#pipelinedestinationiterablefunction)<`unknown`\> \| [`PipelineDestinationPromiseFunction`](https://oven-sh.github.io/bun-types/modules/stream_.md#pipelinedestinationpromisefunction)<`unknown`, `any`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | `A` |
| `transform1` | `T1` |
| `destination` | `B` |
| `callback?` | [`PipelineCallback`](https://oven-sh.github.io/bun-types/modules/stream_.md#pipelinecallback)<`B`\> |

#### Returns

`B` extends [`WritableStream`](https://oven-sh.github.io/bun-types/modules.md#writablestream) ? `B` : [`WritableStream`](https://oven-sh.github.io/bun-types/modules.md#writablestream)

▸ **pipeline**<`A`, `T1`, `T2`, `B`\>(`source`, `transform1`, `transform2`, `destination`, `callback?`): `B` extends [`WritableStream`](https://oven-sh.github.io/bun-types/modules.md#writablestream) ? `B` : [`WritableStream`](https://oven-sh.github.io/bun-types/modules.md#writablestream)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | extends [`PipelineSource`](https://oven-sh.github.io/bun-types/modules/stream_.md#pipelinesource)<`any`\> |
| `T1` | extends [`PipelineTransform`](https://oven-sh.github.io/bun-types/modules/stream_.md#pipelinetransform)<`A`, `any`\> |
| `T2` | extends [`PipelineTransform`](https://oven-sh.github.io/bun-types/modules/stream_.md#pipelinetransform)<`T1`, `any`\> |
| `B` | extends [`WritableStream`](https://oven-sh.github.io/bun-types/modules.md#writablestream)<`any`\> \| [`PipelineDestinationIterableFunction`](https://oven-sh.github.io/bun-types/modules/stream_.md#pipelinedestinationiterablefunction)<`any`\> \| [`PipelineDestinationPromiseFunction`](https://oven-sh.github.io/bun-types/modules/stream_.md#pipelinedestinationpromisefunction)<`any`, `any`\> \| [`WritableStream`](https://oven-sh.github.io/bun-types/modules.md#writablestream)<`any`\> \| [`PipelineDestinationIterableFunction`](https://oven-sh.github.io/bun-types/modules/stream_.md#pipelinedestinationiterablefunction)<`unknown`\> \| [`PipelineDestinationPromiseFunction`](https://oven-sh.github.io/bun-types/modules/stream_.md#pipelinedestinationpromisefunction)<`unknown`, `any`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | `A` |
| `transform1` | `T1` |
| `transform2` | `T2` |
| `destination` | `B` |
| `callback?` | [`PipelineCallback`](https://oven-sh.github.io/bun-types/modules/stream_.md#pipelinecallback)<`B`\> |

#### Returns

`B` extends [`WritableStream`](https://oven-sh.github.io/bun-types/modules.md#writablestream) ? `B` : [`WritableStream`](https://oven-sh.github.io/bun-types/modules.md#writablestream)

▸ **pipeline**<`A`, `T1`, `T2`, `T3`, `B`\>(`source`, `transform1`, `transform2`, `transform3`, `destination`, `callback?`): `B` extends [`WritableStream`](https://oven-sh.github.io/bun-types/modules.md#writablestream) ? `B` : [`WritableStream`](https://oven-sh.github.io/bun-types/modules.md#writablestream)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | extends [`PipelineSource`](https://oven-sh.github.io/bun-types/modules/stream_.md#pipelinesource)<`any`\> |
| `T1` | extends [`PipelineTransform`](https://oven-sh.github.io/bun-types/modules/stream_.md#pipelinetransform)<`A`, `any`\> |
| `T2` | extends [`PipelineTransform`](https://oven-sh.github.io/bun-types/modules/stream_.md#pipelinetransform)<`T1`, `any`\> |
| `T3` | extends [`PipelineTransform`](https://oven-sh.github.io/bun-types/modules/stream_.md#pipelinetransform)<`T2`, `any`\> |
| `B` | extends [`WritableStream`](https://oven-sh.github.io/bun-types/modules.md#writablestream)<`any`\> \| [`PipelineDestinationIterableFunction`](https://oven-sh.github.io/bun-types/modules/stream_.md#pipelinedestinationiterablefunction)<`any`\> \| [`PipelineDestinationPromiseFunction`](https://oven-sh.github.io/bun-types/modules/stream_.md#pipelinedestinationpromisefunction)<`any`, `any`\> \| [`WritableStream`](https://oven-sh.github.io/bun-types/modules.md#writablestream)<`any`\> \| [`PipelineDestinationIterableFunction`](https://oven-sh.github.io/bun-types/modules/stream_.md#pipelinedestinationiterablefunction)<`unknown`\> \| [`PipelineDestinationPromiseFunction`](https://oven-sh.github.io/bun-types/modules/stream_.md#pipelinedestinationpromisefunction)<`unknown`, `any`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | `A` |
| `transform1` | `T1` |
| `transform2` | `T2` |
| `transform3` | `T3` |
| `destination` | `B` |
| `callback?` | [`PipelineCallback`](https://oven-sh.github.io/bun-types/modules/stream_.md#pipelinecallback)<`B`\> |

#### Returns

`B` extends [`WritableStream`](https://oven-sh.github.io/bun-types/modules.md#writablestream) ? `B` : [`WritableStream`](https://oven-sh.github.io/bun-types/modules.md#writablestream)

▸ **pipeline**<`A`, `T1`, `T2`, `T3`, `T4`, `B`\>(`source`, `transform1`, `transform2`, `transform3`, `transform4`, `destination`, `callback?`): `B` extends [`WritableStream`](https://oven-sh.github.io/bun-types/modules.md#writablestream) ? `B` : [`WritableStream`](https://oven-sh.github.io/bun-types/modules.md#writablestream)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | extends [`PipelineSource`](https://oven-sh.github.io/bun-types/modules/stream_.md#pipelinesource)<`any`\> |
| `T1` | extends [`PipelineTransform`](https://oven-sh.github.io/bun-types/modules/stream_.md#pipelinetransform)<`A`, `any`\> |
| `T2` | extends [`PipelineTransform`](https://oven-sh.github.io/bun-types/modules/stream_.md#pipelinetransform)<`T1`, `any`\> |
| `T3` | extends [`PipelineTransform`](https://oven-sh.github.io/bun-types/modules/stream_.md#pipelinetransform)<`T2`, `any`\> |
| `T4` | extends [`PipelineTransform`](https://oven-sh.github.io/bun-types/modules/stream_.md#pipelinetransform)<`T3`, `any`\> |
| `B` | extends [`WritableStream`](https://oven-sh.github.io/bun-types/modules.md#writablestream)<`any`\> \| [`PipelineDestinationIterableFunction`](https://oven-sh.github.io/bun-types/modules/stream_.md#pipelinedestinationiterablefunction)<`any`\> \| [`PipelineDestinationPromiseFunction`](https://oven-sh.github.io/bun-types/modules/stream_.md#pipelinedestinationpromisefunction)<`any`, `any`\> \| [`WritableStream`](https://oven-sh.github.io/bun-types/modules.md#writablestream)<`any`\> \| [`PipelineDestinationIterableFunction`](https://oven-sh.github.io/bun-types/modules/stream_.md#pipelinedestinationiterablefunction)<`unknown`\> \| [`PipelineDestinationPromiseFunction`](https://oven-sh.github.io/bun-types/modules/stream_.md#pipelinedestinationpromisefunction)<`unknown`, `any`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | `A` |
| `transform1` | `T1` |
| `transform2` | `T2` |
| `transform3` | `T3` |
| `transform4` | `T4` |
| `destination` | `B` |
| `callback?` | [`PipelineCallback`](https://oven-sh.github.io/bun-types/modules/stream_.md#pipelinecallback)<`B`\> |

#### Returns

`B` extends [`WritableStream`](https://oven-sh.github.io/bun-types/modules.md#writablestream) ? `B` : [`WritableStream`](https://oven-sh.github.io/bun-types/modules.md#writablestream)

▸ **pipeline**(`streams`, `callback?`): [`WritableStream`](https://oven-sh.github.io/bun-types/modules.md#writablestream)

#### Parameters

| Name | Type |
| :------ | :------ |
| `streams` | readonly ([`ReadableStream`](https://oven-sh.github.io/bun-types/modules.md#readablestream)<`any`\> \| [`WritableStream`](https://oven-sh.github.io/bun-types/modules.md#writablestream)<`any`\> \| [`ReadWriteStream`](https://oven-sh.github.io/bun-types/interfaces/ReadWriteStream.md))[] |
| `callback?` | (`err`: [`ErrnoException`](https://oven-sh.github.io/bun-types/interfaces/ErrnoException.md)) => `void` |

#### Returns

[`WritableStream`](https://oven-sh.github.io/bun-types/modules.md#writablestream)

▸ **pipeline**(`stream1`, `stream2`, ...`streams`): [`WritableStream`](https://oven-sh.github.io/bun-types/modules.md#writablestream)

#### Parameters

| Name | Type |
| :------ | :------ |
| `stream1` | [`ReadableStream`](https://oven-sh.github.io/bun-types/modules.md#readablestream)<`any`\> |
| `stream2` | [`WritableStream`](https://oven-sh.github.io/bun-types/modules.md#writablestream)<`any`\> \| [`ReadWriteStream`](https://oven-sh.github.io/bun-types/interfaces/ReadWriteStream.md) |
| `...streams` | ([`WritableStream`](https://oven-sh.github.io/bun-types/modules.md#writablestream)<`any`\> \| [`ReadWriteStream`](https://oven-sh.github.io/bun-types/interfaces/ReadWriteStream.md) \| (`err`: [`ErrnoException`](https://oven-sh.github.io/bun-types/interfaces/ErrnoException.md)) => `void`)[] |

#### Returns

[`WritableStream`](https://oven-sh.github.io/bun-types/modules.md#writablestream)
