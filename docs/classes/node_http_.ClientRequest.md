[bun-types](https://oven-sh.github.io/bun-types/README.md) / [Exports](https://oven-sh.github.io/bun-types/modules.md) / ["node:http"](https://oven-sh.github.io/bun-types/modules/node_http_.md) / ClientRequest

# Class: ClientRequest

["node:http"](https://oven-sh.github.io/bun-types/modules/node_http_.md).ClientRequest

This object is created internally and returned from [request](https://oven-sh.github.io/bun-types/modules/node_http_.md#request). It
represents an _in-progress_ request whose header has already been queued. The
header is still mutable using the `setHeader(name, value)`,`getHeader(name)`, `removeHeader(name)` API. The actual header will
be sent along with the first data chunk or when calling `request.end()`.

To get the response, add a listener for `'response'` to the request object.`'response'` will be emitted from the request object when the response
headers have been received. The `'response'` event is executed with one
argument which is an instance of [IncomingMessage](https://oven-sh.github.io/bun-types/classes/node_http_.IncomingMessage.md).

During the `'response'` event, one can add listeners to the
response object; particularly to listen for the `'data'` event.

If no `'response'` handler is added, then the response will be
entirely discarded. However, if a `'response'` event handler is added,
then the data from the response object **must** be consumed, either by
calling `response.read()` whenever there is a `'readable'` event, or
by adding a `'data'` handler, or by calling the `.resume()` method.
Until the data is consumed, the `'end'` event will not fire. Also, until
the data is read it will consume memory that can eventually lead to a
'process out of memory' error.

For backward compatibility, `res` will only emit `'error'` if there is an`'error'` listener registered.

Node.js does not check whether Content-Length and the length of the
body which has been transmitted are equal or not.

## Table of contents

### Constructors

- [constructor](https://oven-sh.github.io/bun-types/classes/node_http_.ClientRequest.md#constructor)

### Properties

- [aborted](https://oven-sh.github.io/bun-types/classes/node_http_.ClientRequest.md#aborted)
- [host](https://oven-sh.github.io/bun-types/classes/node_http_.ClientRequest.md#host)
- [maxHeadersCount](https://oven-sh.github.io/bun-types/classes/node_http_.ClientRequest.md#maxheaderscount)
- [method](https://oven-sh.github.io/bun-types/classes/node_http_.ClientRequest.md#method)
- [path](https://oven-sh.github.io/bun-types/classes/node_http_.ClientRequest.md#path)
- [protocol](https://oven-sh.github.io/bun-types/classes/node_http_.ClientRequest.md#protocol)
- [reusedSocket](https://oven-sh.github.io/bun-types/classes/node_http_.ClientRequest.md#reusedsocket)

### Methods

- [abort](https://oven-sh.github.io/bun-types/classes/node_http_.ClientRequest.md#abort)
- [addListener](https://oven-sh.github.io/bun-types/classes/node_http_.ClientRequest.md#addlistener)
- [flushHeaders](https://oven-sh.github.io/bun-types/classes/node_http_.ClientRequest.md#flushheaders)
- [getHeader](https://oven-sh.github.io/bun-types/classes/node_http_.ClientRequest.md#getheader)
- [getRawHeaderNames](https://oven-sh.github.io/bun-types/classes/node_http_.ClientRequest.md#getrawheadernames)
- [on](https://oven-sh.github.io/bun-types/classes/node_http_.ClientRequest.md#on)
- [once](https://oven-sh.github.io/bun-types/classes/node_http_.ClientRequest.md#once)
- [prependListener](https://oven-sh.github.io/bun-types/classes/node_http_.ClientRequest.md#prependlistener)
- [prependOnceListener](https://oven-sh.github.io/bun-types/classes/node_http_.ClientRequest.md#prependoncelistener)
- [removeHeader](https://oven-sh.github.io/bun-types/classes/node_http_.ClientRequest.md#removeheader)
- [setHeader](https://oven-sh.github.io/bun-types/classes/node_http_.ClientRequest.md#setheader)
- [setNoDelay](https://oven-sh.github.io/bun-types/classes/node_http_.ClientRequest.md#setnodelay)
- [setSocketKeepAlive](https://oven-sh.github.io/bun-types/classes/node_http_.ClientRequest.md#setsocketkeepalive)
- [setTimeout](https://oven-sh.github.io/bun-types/classes/node_http_.ClientRequest.md#settimeout)

## Constructors

### constructor

• **new ClientRequest**(`url`, `cb?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` \| [`URL`](https://oven-sh.github.io/bun-types/modules.md#url) \| [`ClientRequestArgs`](https://oven-sh.github.io/bun-types/interfaces/http_.ClientRequestArgs.md) |
| `cb?` | (`res`: [`IncomingMessage`](https://oven-sh.github.io/bun-types/classes/http_.IncomingMessage.md)) => `void` |

## Properties

### aborted

• **aborted**: `boolean`

The `request.aborted` property will be `true` if the request has
been aborted.

**`Deprecated`**

Since v17.0.0,v16.12.0 - Check `destroyed` instead.

___

### host

• **host**: `string`

The request host.

___

### maxHeadersCount

• **maxHeadersCount**: `number`

Limits maximum response headers count. If set to 0, no limit will be applied.

___

### method

• **method**: `string`

The request method.

___

### path

• **path**: `string`

The request path.

___

### protocol

• **protocol**: `string`

The request protocol.

___

### reusedSocket

• **reusedSocket**: `boolean`

When sending request through a keep-alive enabled agent, the underlying socket
might be reused. But if server closes connection at unfortunate time, client
may run into a 'ECONNRESET' error.

```js
const http = require('http');

// Server has a 5 seconds keep-alive timeout by default
http
  .createServer((req, res) => {
    res.write('hello\n');
    res.end();
  })
  .listen(3000);

setInterval(() => {
  // Adapting a keep-alive agent
  http.get('http://localhost:3000', { agent }, (res) => {
    res.on('data', (data) => {
      // Do nothing
    });
  });
}, 5000); // Sending request on 5s interval so it's easy to hit idle timeout
```

By marking a request whether it reused socket or not, we can do
automatic error retry base on it.

```js
const http = require('http');
const agent = new http.Agent({ keepAlive: true });

function retriableRequest() {
  const req = http
    .get('http://localhost:3000', { agent }, (res) => {
      // ...
    })
    .on('error', (err) => {
      // Check if retry is needed
      if (req.reusedSocket &#x26;&#x26; err.code === 'ECONNRESET') {
        retriableRequest();
      }
    });
}

retriableRequest();
```

## Methods

### abort

▸ **abort**(): `void`

Marks the request as aborting. Calling this will cause remaining data
in the response to be dropped and the socket to be destroyed.

**`Deprecated`**

Since v14.1.0,v13.14.0 - Use `destroy` instead.

#### Returns

`void`

___

### addListener

▸ **addListener**(`event`, `listener`): [`ClientRequest`](https://oven-sh.github.io/bun-types/classes/http_.ClientRequest.md)

**`Deprecated`**

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"abort"`` |
| `listener` | () => `void` |

#### Returns

[`ClientRequest`](https://oven-sh.github.io/bun-types/classes/http_.ClientRequest.md)

▸ **addListener**(`event`, `listener`): [`ClientRequest`](https://oven-sh.github.io/bun-types/classes/http_.ClientRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"continue"`` |
| `listener` | () => `void` |

#### Returns

[`ClientRequest`](https://oven-sh.github.io/bun-types/classes/http_.ClientRequest.md)

▸ **addListener**(`event`, `listener`): [`ClientRequest`](https://oven-sh.github.io/bun-types/classes/http_.ClientRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"information"`` |
| `listener` | (`info`: [`InformationEvent`](https://oven-sh.github.io/bun-types/interfaces/http_.InformationEvent.md)) => `void` |

#### Returns

[`ClientRequest`](https://oven-sh.github.io/bun-types/classes/http_.ClientRequest.md)

▸ **addListener**(`event`, `listener`): [`ClientRequest`](https://oven-sh.github.io/bun-types/classes/http_.ClientRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"response"`` |
| `listener` | (`response`: [`IncomingMessage`](https://oven-sh.github.io/bun-types/classes/http_.IncomingMessage.md)) => `void` |

#### Returns

[`ClientRequest`](https://oven-sh.github.io/bun-types/classes/http_.ClientRequest.md)

▸ **addListener**(`event`, `listener`): [`ClientRequest`](https://oven-sh.github.io/bun-types/classes/http_.ClientRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"timeout"`` |
| `listener` | () => `void` |

#### Returns

[`ClientRequest`](https://oven-sh.github.io/bun-types/classes/http_.ClientRequest.md)

▸ **addListener**(`event`, `listener`): [`ClientRequest`](https://oven-sh.github.io/bun-types/classes/http_.ClientRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"close"`` |
| `listener` | () => `void` |

#### Returns

[`ClientRequest`](https://oven-sh.github.io/bun-types/classes/http_.ClientRequest.md)

▸ **addListener**(`event`, `listener`): [`ClientRequest`](https://oven-sh.github.io/bun-types/classes/http_.ClientRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"drain"`` |
| `listener` | () => `void` |

#### Returns

[`ClientRequest`](https://oven-sh.github.io/bun-types/classes/http_.ClientRequest.md)

▸ **addListener**(`event`, `listener`): [`ClientRequest`](https://oven-sh.github.io/bun-types/classes/http_.ClientRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"error"`` |
| `listener` | (`err`: `Error`) => `void` |

#### Returns

[`ClientRequest`](https://oven-sh.github.io/bun-types/classes/http_.ClientRequest.md)

▸ **addListener**(`event`, `listener`): [`ClientRequest`](https://oven-sh.github.io/bun-types/classes/http_.ClientRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"finish"`` |
| `listener` | () => `void` |

#### Returns

[`ClientRequest`](https://oven-sh.github.io/bun-types/classes/http_.ClientRequest.md)

▸ **addListener**(`event`, `listener`): [`ClientRequest`](https://oven-sh.github.io/bun-types/classes/http_.ClientRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"pipe"`` |
| `listener` | (`src`: [`Readable`](https://oven-sh.github.io/bun-types/classes/stream_.Readable.md)<`any`\>) => `void` |

#### Returns

[`ClientRequest`](https://oven-sh.github.io/bun-types/classes/http_.ClientRequest.md)

▸ **addListener**(`event`, `listener`): [`ClientRequest`](https://oven-sh.github.io/bun-types/classes/http_.ClientRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"unpipe"`` |
| `listener` | (`src`: [`Readable`](https://oven-sh.github.io/bun-types/classes/stream_.Readable.md)<`any`\>) => `void` |

#### Returns

[`ClientRequest`](https://oven-sh.github.io/bun-types/classes/http_.ClientRequest.md)

▸ **addListener**(`event`, `listener`): [`ClientRequest`](https://oven-sh.github.io/bun-types/classes/http_.ClientRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`ClientRequest`](https://oven-sh.github.io/bun-types/classes/http_.ClientRequest.md)

___

### flushHeaders

▸ **flushHeaders**(): `void`

Compulsorily flushes the message headers

For efficiency reason, Node.js normally buffers the message headers
until `outgoingMessage.end()` is called or the first chunk of message data
is written. It then tries to pack the headers and data into a single TCP
packet.

It is usually desired (it saves a TCP round-trip), but not when the first
data is not sent until possibly much later. `outgoingMessage.flushHeaders()`bypasses the optimization and kickstarts the request.

#### Returns

`void`

___

### getHeader

▸ **getHeader**(`name`): `string` \| `number` \| `string`[]

Gets the value of HTTP header with the given name. If such a name doesn't
exist in message, it will be `undefined`.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | `string` | Name of header |

#### Returns

`string` \| `number` \| `string`[]

___

### getRawHeaderNames

▸ **getRawHeaderNames**(): `string`[]

Returns an array containing the unique names of the current outgoing raw
headers. Header names are returned with their exact casing being set.

```js
request.setHeader('Foo', 'bar');
request.setHeader('Set-Cookie', ['foo=bar', 'bar=baz']);

const headerNames = request.getRawHeaderNames();
// headerNames === ['Foo', 'Set-Cookie']
```

#### Returns

`string`[]

___

### on

▸ **on**(`event`, `listener`): [`ClientRequest`](https://oven-sh.github.io/bun-types/classes/http_.ClientRequest.md)

**`Deprecated`**

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"abort"`` |
| `listener` | () => `void` |

#### Returns

[`ClientRequest`](https://oven-sh.github.io/bun-types/classes/http_.ClientRequest.md)

▸ **on**(`event`, `listener`): [`ClientRequest`](https://oven-sh.github.io/bun-types/classes/http_.ClientRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"continue"`` |
| `listener` | () => `void` |

#### Returns

[`ClientRequest`](https://oven-sh.github.io/bun-types/classes/http_.ClientRequest.md)

▸ **on**(`event`, `listener`): [`ClientRequest`](https://oven-sh.github.io/bun-types/classes/http_.ClientRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"information"`` |
| `listener` | (`info`: [`InformationEvent`](https://oven-sh.github.io/bun-types/interfaces/http_.InformationEvent.md)) => `void` |

#### Returns

[`ClientRequest`](https://oven-sh.github.io/bun-types/classes/http_.ClientRequest.md)

▸ **on**(`event`, `listener`): [`ClientRequest`](https://oven-sh.github.io/bun-types/classes/http_.ClientRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"response"`` |
| `listener` | (`response`: [`IncomingMessage`](https://oven-sh.github.io/bun-types/classes/http_.IncomingMessage.md)) => `void` |

#### Returns

[`ClientRequest`](https://oven-sh.github.io/bun-types/classes/http_.ClientRequest.md)

▸ **on**(`event`, `listener`): [`ClientRequest`](https://oven-sh.github.io/bun-types/classes/http_.ClientRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"timeout"`` |
| `listener` | () => `void` |

#### Returns

[`ClientRequest`](https://oven-sh.github.io/bun-types/classes/http_.ClientRequest.md)

▸ **on**(`event`, `listener`): [`ClientRequest`](https://oven-sh.github.io/bun-types/classes/http_.ClientRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"close"`` |
| `listener` | () => `void` |

#### Returns

[`ClientRequest`](https://oven-sh.github.io/bun-types/classes/http_.ClientRequest.md)

▸ **on**(`event`, `listener`): [`ClientRequest`](https://oven-sh.github.io/bun-types/classes/http_.ClientRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"drain"`` |
| `listener` | () => `void` |

#### Returns

[`ClientRequest`](https://oven-sh.github.io/bun-types/classes/http_.ClientRequest.md)

▸ **on**(`event`, `listener`): [`ClientRequest`](https://oven-sh.github.io/bun-types/classes/http_.ClientRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"error"`` |
| `listener` | (`err`: `Error`) => `void` |

#### Returns

[`ClientRequest`](https://oven-sh.github.io/bun-types/classes/http_.ClientRequest.md)

▸ **on**(`event`, `listener`): [`ClientRequest`](https://oven-sh.github.io/bun-types/classes/http_.ClientRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"finish"`` |
| `listener` | () => `void` |

#### Returns

[`ClientRequest`](https://oven-sh.github.io/bun-types/classes/http_.ClientRequest.md)

▸ **on**(`event`, `listener`): [`ClientRequest`](https://oven-sh.github.io/bun-types/classes/http_.ClientRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"pipe"`` |
| `listener` | (`src`: [`Readable`](https://oven-sh.github.io/bun-types/classes/stream_.Readable.md)<`any`\>) => `void` |

#### Returns

[`ClientRequest`](https://oven-sh.github.io/bun-types/classes/http_.ClientRequest.md)

▸ **on**(`event`, `listener`): [`ClientRequest`](https://oven-sh.github.io/bun-types/classes/http_.ClientRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"unpipe"`` |
| `listener` | (`src`: [`Readable`](https://oven-sh.github.io/bun-types/classes/stream_.Readable.md)<`any`\>) => `void` |

#### Returns

[`ClientRequest`](https://oven-sh.github.io/bun-types/classes/http_.ClientRequest.md)

▸ **on**(`event`, `listener`): [`ClientRequest`](https://oven-sh.github.io/bun-types/classes/http_.ClientRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`ClientRequest`](https://oven-sh.github.io/bun-types/classes/http_.ClientRequest.md)

___

### once

▸ **once**(`event`, `listener`): [`ClientRequest`](https://oven-sh.github.io/bun-types/classes/http_.ClientRequest.md)

**`Deprecated`**

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"abort"`` |
| `listener` | () => `void` |

#### Returns

[`ClientRequest`](https://oven-sh.github.io/bun-types/classes/http_.ClientRequest.md)

▸ **once**(`event`, `listener`): [`ClientRequest`](https://oven-sh.github.io/bun-types/classes/http_.ClientRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"continue"`` |
| `listener` | () => `void` |

#### Returns

[`ClientRequest`](https://oven-sh.github.io/bun-types/classes/http_.ClientRequest.md)

▸ **once**(`event`, `listener`): [`ClientRequest`](https://oven-sh.github.io/bun-types/classes/http_.ClientRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"information"`` |
| `listener` | (`info`: [`InformationEvent`](https://oven-sh.github.io/bun-types/interfaces/http_.InformationEvent.md)) => `void` |

#### Returns

[`ClientRequest`](https://oven-sh.github.io/bun-types/classes/http_.ClientRequest.md)

▸ **once**(`event`, `listener`): [`ClientRequest`](https://oven-sh.github.io/bun-types/classes/http_.ClientRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"response"`` |
| `listener` | (`response`: [`IncomingMessage`](https://oven-sh.github.io/bun-types/classes/http_.IncomingMessage.md)) => `void` |

#### Returns

[`ClientRequest`](https://oven-sh.github.io/bun-types/classes/http_.ClientRequest.md)

▸ **once**(`event`, `listener`): [`ClientRequest`](https://oven-sh.github.io/bun-types/classes/http_.ClientRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"timeout"`` |
| `listener` | () => `void` |

#### Returns

[`ClientRequest`](https://oven-sh.github.io/bun-types/classes/http_.ClientRequest.md)

▸ **once**(`event`, `listener`): [`ClientRequest`](https://oven-sh.github.io/bun-types/classes/http_.ClientRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"close"`` |
| `listener` | () => `void` |

#### Returns

[`ClientRequest`](https://oven-sh.github.io/bun-types/classes/http_.ClientRequest.md)

▸ **once**(`event`, `listener`): [`ClientRequest`](https://oven-sh.github.io/bun-types/classes/http_.ClientRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"drain"`` |
| `listener` | () => `void` |

#### Returns

[`ClientRequest`](https://oven-sh.github.io/bun-types/classes/http_.ClientRequest.md)

▸ **once**(`event`, `listener`): [`ClientRequest`](https://oven-sh.github.io/bun-types/classes/http_.ClientRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"error"`` |
| `listener` | (`err`: `Error`) => `void` |

#### Returns

[`ClientRequest`](https://oven-sh.github.io/bun-types/classes/http_.ClientRequest.md)

▸ **once**(`event`, `listener`): [`ClientRequest`](https://oven-sh.github.io/bun-types/classes/http_.ClientRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"finish"`` |
| `listener` | () => `void` |

#### Returns

[`ClientRequest`](https://oven-sh.github.io/bun-types/classes/http_.ClientRequest.md)

▸ **once**(`event`, `listener`): [`ClientRequest`](https://oven-sh.github.io/bun-types/classes/http_.ClientRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"pipe"`` |
| `listener` | (`src`: [`Readable`](https://oven-sh.github.io/bun-types/classes/stream_.Readable.md)<`any`\>) => `void` |

#### Returns

[`ClientRequest`](https://oven-sh.github.io/bun-types/classes/http_.ClientRequest.md)

▸ **once**(`event`, `listener`): [`ClientRequest`](https://oven-sh.github.io/bun-types/classes/http_.ClientRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"unpipe"`` |
| `listener` | (`src`: [`Readable`](https://oven-sh.github.io/bun-types/classes/stream_.Readable.md)<`any`\>) => `void` |

#### Returns

[`ClientRequest`](https://oven-sh.github.io/bun-types/classes/http_.ClientRequest.md)

▸ **once**(`event`, `listener`): [`ClientRequest`](https://oven-sh.github.io/bun-types/classes/http_.ClientRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`ClientRequest`](https://oven-sh.github.io/bun-types/classes/http_.ClientRequest.md)

___

### prependListener

▸ **prependListener**(`event`, `listener`): [`ClientRequest`](https://oven-sh.github.io/bun-types/classes/http_.ClientRequest.md)

**`Deprecated`**

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"abort"`` |
| `listener` | () => `void` |

#### Returns

[`ClientRequest`](https://oven-sh.github.io/bun-types/classes/http_.ClientRequest.md)

▸ **prependListener**(`event`, `listener`): [`ClientRequest`](https://oven-sh.github.io/bun-types/classes/http_.ClientRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"continue"`` |
| `listener` | () => `void` |

#### Returns

[`ClientRequest`](https://oven-sh.github.io/bun-types/classes/http_.ClientRequest.md)

▸ **prependListener**(`event`, `listener`): [`ClientRequest`](https://oven-sh.github.io/bun-types/classes/http_.ClientRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"information"`` |
| `listener` | (`info`: [`InformationEvent`](https://oven-sh.github.io/bun-types/interfaces/http_.InformationEvent.md)) => `void` |

#### Returns

[`ClientRequest`](https://oven-sh.github.io/bun-types/classes/http_.ClientRequest.md)

▸ **prependListener**(`event`, `listener`): [`ClientRequest`](https://oven-sh.github.io/bun-types/classes/http_.ClientRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"response"`` |
| `listener` | (`response`: [`IncomingMessage`](https://oven-sh.github.io/bun-types/classes/http_.IncomingMessage.md)) => `void` |

#### Returns

[`ClientRequest`](https://oven-sh.github.io/bun-types/classes/http_.ClientRequest.md)

▸ **prependListener**(`event`, `listener`): [`ClientRequest`](https://oven-sh.github.io/bun-types/classes/http_.ClientRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"timeout"`` |
| `listener` | () => `void` |

#### Returns

[`ClientRequest`](https://oven-sh.github.io/bun-types/classes/http_.ClientRequest.md)

▸ **prependListener**(`event`, `listener`): [`ClientRequest`](https://oven-sh.github.io/bun-types/classes/http_.ClientRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"close"`` |
| `listener` | () => `void` |

#### Returns

[`ClientRequest`](https://oven-sh.github.io/bun-types/classes/http_.ClientRequest.md)

▸ **prependListener**(`event`, `listener`): [`ClientRequest`](https://oven-sh.github.io/bun-types/classes/http_.ClientRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"drain"`` |
| `listener` | () => `void` |

#### Returns

[`ClientRequest`](https://oven-sh.github.io/bun-types/classes/http_.ClientRequest.md)

▸ **prependListener**(`event`, `listener`): [`ClientRequest`](https://oven-sh.github.io/bun-types/classes/http_.ClientRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"error"`` |
| `listener` | (`err`: `Error`) => `void` |

#### Returns

[`ClientRequest`](https://oven-sh.github.io/bun-types/classes/http_.ClientRequest.md)

▸ **prependListener**(`event`, `listener`): [`ClientRequest`](https://oven-sh.github.io/bun-types/classes/http_.ClientRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"finish"`` |
| `listener` | () => `void` |

#### Returns

[`ClientRequest`](https://oven-sh.github.io/bun-types/classes/http_.ClientRequest.md)

▸ **prependListener**(`event`, `listener`): [`ClientRequest`](https://oven-sh.github.io/bun-types/classes/http_.ClientRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"pipe"`` |
| `listener` | (`src`: [`Readable`](https://oven-sh.github.io/bun-types/classes/stream_.Readable.md)<`any`\>) => `void` |

#### Returns

[`ClientRequest`](https://oven-sh.github.io/bun-types/classes/http_.ClientRequest.md)

▸ **prependListener**(`event`, `listener`): [`ClientRequest`](https://oven-sh.github.io/bun-types/classes/http_.ClientRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"unpipe"`` |
| `listener` | (`src`: [`Readable`](https://oven-sh.github.io/bun-types/classes/stream_.Readable.md)<`any`\>) => `void` |

#### Returns

[`ClientRequest`](https://oven-sh.github.io/bun-types/classes/http_.ClientRequest.md)

▸ **prependListener**(`event`, `listener`): [`ClientRequest`](https://oven-sh.github.io/bun-types/classes/http_.ClientRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`ClientRequest`](https://oven-sh.github.io/bun-types/classes/http_.ClientRequest.md)

___

### prependOnceListener

▸ **prependOnceListener**(`event`, `listener`): [`ClientRequest`](https://oven-sh.github.io/bun-types/classes/http_.ClientRequest.md)

**`Deprecated`**

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"abort"`` |
| `listener` | () => `void` |

#### Returns

[`ClientRequest`](https://oven-sh.github.io/bun-types/classes/http_.ClientRequest.md)

▸ **prependOnceListener**(`event`, `listener`): [`ClientRequest`](https://oven-sh.github.io/bun-types/classes/http_.ClientRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"continue"`` |
| `listener` | () => `void` |

#### Returns

[`ClientRequest`](https://oven-sh.github.io/bun-types/classes/http_.ClientRequest.md)

▸ **prependOnceListener**(`event`, `listener`): [`ClientRequest`](https://oven-sh.github.io/bun-types/classes/http_.ClientRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"information"`` |
| `listener` | (`info`: [`InformationEvent`](https://oven-sh.github.io/bun-types/interfaces/http_.InformationEvent.md)) => `void` |

#### Returns

[`ClientRequest`](https://oven-sh.github.io/bun-types/classes/http_.ClientRequest.md)

▸ **prependOnceListener**(`event`, `listener`): [`ClientRequest`](https://oven-sh.github.io/bun-types/classes/http_.ClientRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"response"`` |
| `listener` | (`response`: [`IncomingMessage`](https://oven-sh.github.io/bun-types/classes/http_.IncomingMessage.md)) => `void` |

#### Returns

[`ClientRequest`](https://oven-sh.github.io/bun-types/classes/http_.ClientRequest.md)

▸ **prependOnceListener**(`event`, `listener`): [`ClientRequest`](https://oven-sh.github.io/bun-types/classes/http_.ClientRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"timeout"`` |
| `listener` | () => `void` |

#### Returns

[`ClientRequest`](https://oven-sh.github.io/bun-types/classes/http_.ClientRequest.md)

▸ **prependOnceListener**(`event`, `listener`): [`ClientRequest`](https://oven-sh.github.io/bun-types/classes/http_.ClientRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"close"`` |
| `listener` | () => `void` |

#### Returns

[`ClientRequest`](https://oven-sh.github.io/bun-types/classes/http_.ClientRequest.md)

▸ **prependOnceListener**(`event`, `listener`): [`ClientRequest`](https://oven-sh.github.io/bun-types/classes/http_.ClientRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"drain"`` |
| `listener` | () => `void` |

#### Returns

[`ClientRequest`](https://oven-sh.github.io/bun-types/classes/http_.ClientRequest.md)

▸ **prependOnceListener**(`event`, `listener`): [`ClientRequest`](https://oven-sh.github.io/bun-types/classes/http_.ClientRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"error"`` |
| `listener` | (`err`: `Error`) => `void` |

#### Returns

[`ClientRequest`](https://oven-sh.github.io/bun-types/classes/http_.ClientRequest.md)

▸ **prependOnceListener**(`event`, `listener`): [`ClientRequest`](https://oven-sh.github.io/bun-types/classes/http_.ClientRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"finish"`` |
| `listener` | () => `void` |

#### Returns

[`ClientRequest`](https://oven-sh.github.io/bun-types/classes/http_.ClientRequest.md)

▸ **prependOnceListener**(`event`, `listener`): [`ClientRequest`](https://oven-sh.github.io/bun-types/classes/http_.ClientRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"pipe"`` |
| `listener` | (`src`: [`Readable`](https://oven-sh.github.io/bun-types/classes/stream_.Readable.md)<`any`\>) => `void` |

#### Returns

[`ClientRequest`](https://oven-sh.github.io/bun-types/classes/http_.ClientRequest.md)

▸ **prependOnceListener**(`event`, `listener`): [`ClientRequest`](https://oven-sh.github.io/bun-types/classes/http_.ClientRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"unpipe"`` |
| `listener` | (`src`: [`Readable`](https://oven-sh.github.io/bun-types/classes/stream_.Readable.md)<`any`\>) => `void` |

#### Returns

[`ClientRequest`](https://oven-sh.github.io/bun-types/classes/http_.ClientRequest.md)

▸ **prependOnceListener**(`event`, `listener`): [`ClientRequest`](https://oven-sh.github.io/bun-types/classes/http_.ClientRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`ClientRequest`](https://oven-sh.github.io/bun-types/classes/http_.ClientRequest.md)

___

### removeHeader

▸ **removeHeader**(`name`): `void`

Removes a header that is queued for implicit sending.

```js
outgoingMessage.removeHeader('Content-Encoding');
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | `string` | Header name |

#### Returns

`void`

___

### setHeader

▸ **setHeader**(`name`, `value`): [`ClientRequest`](https://oven-sh.github.io/bun-types/classes/http_.ClientRequest.md)

Sets a single header value for the header object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | `string` | Header name |
| `value` | `string` \| `number` \| readonly `string`[] | Header value |

#### Returns

[`ClientRequest`](https://oven-sh.github.io/bun-types/classes/http_.ClientRequest.md)

___

### setNoDelay

▸ **setNoDelay**(`noDelay?`): `void`

Once a socket is assigned to this request and is connected `socket.setNoDelay()` will be called.

#### Parameters

| Name | Type |
| :------ | :------ |
| `noDelay?` | `boolean` |

#### Returns

`void`

___

### setSocketKeepAlive

▸ **setSocketKeepAlive**(`enable?`, `initialDelay?`): `void`

Once a socket is assigned to this request and is connected `socket.setKeepAlive()` will be called.

#### Parameters

| Name | Type |
| :------ | :------ |
| `enable?` | `boolean` |
| `initialDelay?` | `number` |

#### Returns

`void`

___

### setTimeout

▸ **setTimeout**(`timeout`, `callback?`): [`ClientRequest`](https://oven-sh.github.io/bun-types/classes/http_.ClientRequest.md)

Once a socket is assigned to this request and is connected `socket.setTimeout()` will be called.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `timeout` | `number` | Milliseconds before a request times out. |
| `callback?` | () => `void` | Optional function to be called when a timeout occurs. Same as binding to the `'timeout'` event. |

#### Returns

[`ClientRequest`](https://oven-sh.github.io/bun-types/classes/http_.ClientRequest.md)
