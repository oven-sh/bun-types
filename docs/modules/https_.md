[bun-types](https://oven-sh.github.io/bun-types/README.md) / [Exports](https://oven-sh.github.io/bun-types/modules.md) / "https"

# Namespace: "https"

## Table of contents

### Classes

- [ClientRequest](https://oven-sh.github.io/bun-types/classes/https_.ClientRequest.md)
- [IncomingMessage](https://oven-sh.github.io/bun-types/classes/https_.IncomingMessage.md)

### Interfaces

- [ClientRequestArgs](https://oven-sh.github.io/bun-types/interfaces/https_.ClientRequestArgs.md)
- [IncomingHttpHeaders](https://oven-sh.github.io/bun-types/interfaces/https_.IncomingHttpHeaders.md)
- [InformationEvent](https://oven-sh.github.io/bun-types/interfaces/https_.InformationEvent.md)
- [OutgoingHttpHeaders](https://oven-sh.github.io/bun-types/interfaces/https_.OutgoingHttpHeaders.md)
- [RequestOptions](https://oven-sh.github.io/bun-types/interfaces/https_.RequestOptions.md)

### Type Aliases

- [OutgoingHttpHeader](https://oven-sh.github.io/bun-types/modules/https_.md#outgoinghttpheader)

### Variables

- [METHODS](https://oven-sh.github.io/bun-types/modules/https_.md#methods)
- [STATUS\_CODES](https://oven-sh.github.io/bun-types/modules/https_.md#status_codes)
- [maxHeaderSize](https://oven-sh.github.io/bun-types/modules/https_.md#maxheadersize)

### Functions

- [get](https://oven-sh.github.io/bun-types/modules/https_.md#get)
- [request](https://oven-sh.github.io/bun-types/modules/https_.md#request)

## Type Aliases

### OutgoingHttpHeader

Ƭ **OutgoingHttpHeader**: `number` \| `string` \| `string`[]

## Variables

### METHODS

• `Const` **METHODS**: `string`[]

___

### STATUS\_CODES

• `Const` **STATUS\_CODES**: `Object`

#### Index signature

▪ [errorCode: `number`]: `string` \| `undefined`

___

### maxHeaderSize

• `Const` **maxHeaderSize**: `number`

Read-only property specifying the maximum allowed size of HTTP headers in bytes.
Defaults to 16KB. Configurable using the `--max-http-header-size` CLI option.

## Functions

### get

▸ **get**(`options`, `callback?`): [`ClientRequest`](https://oven-sh.github.io/bun-types/classes/http_.ClientRequest.md)

Since most requests are GET requests without bodies, Node.js provides this
convenience method. The only difference between this method and [request](https://oven-sh.github.io/bun-types/modules/https_.md#request) is that it sets the method to GET and calls `req.end()`automatically. The callback must take care to consume the
response
data for reasons stated in [ClientRequest](https://oven-sh.github.io/bun-types/classes/https_.ClientRequest.md) section.

The `callback` is invoked with a single argument that is an instance of [IncomingMessage](https://oven-sh.github.io/bun-types/classes/https_.IncomingMessage.md).

JSON fetching example:

```js
http.get('http://localhost:8000/', (res) => {
  const { statusCode } = res;
  const contentType = res.headers['content-type'];

  let error;
  // Any 2xx status code signals a successful response but
  // here we're only checking for 200.
  if (statusCode !== 200) {
    error = new Error('Request Failed.\n' +
                      `Status Code: ${statusCode}`);
  } else if (!/^application/json/.test(contentType)) {
    error = new Error('Invalid content-type.\n' +
                      `Expected application/json but received ${contentType}`);
  }
  if (error) {
    console.error(error.message);
    // Consume response data to free up memory
    res.resume();
    return;
  }

  res.setEncoding('utf8');
  let rawData = '';
  res.on('data', (chunk) => { rawData += chunk; });
  res.on('end', () => {
    try {
      const parsedData = JSON.parse(rawData);
      console.log(parsedData);
    } catch (e) {
      console.error(e.message);
    }
  });
}).on('error', (e) => {
  console.error(`Got error: ${e.message}`);
});

// Create a local server to receive data from
const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify({
    data: 'Hello World!'
  }));
});

server.listen(8000);
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | `string` \| [`URL`](https://oven-sh.github.io/bun-types/modules.md#url) \| [`RequestOptions`](https://oven-sh.github.io/bun-types/interfaces/http_.RequestOptions.md) | Accepts the same `options` as [request](https://oven-sh.github.io/bun-types/modules/https_.md#request), with the `method` always set to `GET`. Properties that are inherited from the prototype are ignored. |
| `callback?` | (`res`: [`IncomingMessage`](https://oven-sh.github.io/bun-types/classes/http_.IncomingMessage.md)) => `void` | - |

#### Returns

[`ClientRequest`](https://oven-sh.github.io/bun-types/classes/http_.ClientRequest.md)

▸ **get**(`url`, `options`, `callback?`): [`ClientRequest`](https://oven-sh.github.io/bun-types/classes/http_.ClientRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` \| [`URL`](https://oven-sh.github.io/bun-types/modules.md#url) |
| `options` | [`RequestOptions`](https://oven-sh.github.io/bun-types/interfaces/http_.RequestOptions.md) |
| `callback?` | (`res`: [`IncomingMessage`](https://oven-sh.github.io/bun-types/classes/http_.IncomingMessage.md)) => `void` |

#### Returns

[`ClientRequest`](https://oven-sh.github.io/bun-types/classes/http_.ClientRequest.md)

▸ **get**(`options`, `callback?`): [`ClientRequest`](https://oven-sh.github.io/bun-types/classes/http_.ClientRequest.md)

Since most requests are GET requests without bodies, Node.js provides this
convenience method. The only difference between this method and [request](https://oven-sh.github.io/bun-types/modules/https_.md#request) is that it sets the method to GET and calls `req.end()`automatically. The callback must take care to consume the
response
data for reasons stated in [ClientRequest](https://oven-sh.github.io/bun-types/classes/https_.ClientRequest.md) section.

The `callback` is invoked with a single argument that is an instance of [IncomingMessage](https://oven-sh.github.io/bun-types/classes/https_.IncomingMessage.md).

JSON fetching example:

```js
http.get('http://localhost:8000/', (res) => {
  const { statusCode } = res;
  const contentType = res.headers['content-type'];

  let error;
  // Any 2xx status code signals a successful response but
  // here we're only checking for 200.
  if (statusCode !== 200) {
    error = new Error('Request Failed.\n' +
                      `Status Code: ${statusCode}`);
  } else if (!/^application/json/.test(contentType)) {
    error = new Error('Invalid content-type.\n' +
                      `Expected application/json but received ${contentType}`);
  }
  if (error) {
    console.error(error.message);
    // Consume response data to free up memory
    res.resume();
    return;
  }

  res.setEncoding('utf8');
  let rawData = '';
  res.on('data', (chunk) => { rawData += chunk; });
  res.on('end', () => {
    try {
      const parsedData = JSON.parse(rawData);
      console.log(parsedData);
    } catch (e) {
      console.error(e.message);
    }
  });
}).on('error', (e) => {
  console.error(`Got error: ${e.message}`);
});

// Create a local server to receive data from
const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify({
    data: 'Hello World!'
  }));
});

server.listen(8000);
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | `string` \| [`URL`](https://oven-sh.github.io/bun-types/modules.md#url) \| [`RequestOptions`](https://oven-sh.github.io/bun-types/interfaces/http_.RequestOptions.md) | Accepts the same `options` as [request](https://oven-sh.github.io/bun-types/modules/https_.md#request), with the `method` always set to `GET`. Properties that are inherited from the prototype are ignored. |
| `callback?` | (`res`: [`IncomingMessage`](https://oven-sh.github.io/bun-types/classes/http_.IncomingMessage.md)) => `void` | - |

#### Returns

[`ClientRequest`](https://oven-sh.github.io/bun-types/classes/http_.ClientRequest.md)

▸ **get**(`url`, `options`, `callback?`): [`ClientRequest`](https://oven-sh.github.io/bun-types/classes/http_.ClientRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` \| [`URL`](https://oven-sh.github.io/bun-types/modules.md#url) |
| `options` | [`RequestOptions`](https://oven-sh.github.io/bun-types/interfaces/http_.RequestOptions.md) |
| `callback?` | (`res`: [`IncomingMessage`](https://oven-sh.github.io/bun-types/classes/http_.IncomingMessage.md)) => `void` |

#### Returns

[`ClientRequest`](https://oven-sh.github.io/bun-types/classes/http_.ClientRequest.md)

___

### request

▸ **request**(`options`, `callback?`): [`ClientRequest`](https://oven-sh.github.io/bun-types/classes/http_.ClientRequest.md)

`options` in `socket.connect()` are also supported.

Node.js maintains several connections per server to make HTTP requests.
This function allows one to transparently issue requests.

`url` can be a string or a `URL` object. If `url` is a
string, it is automatically parsed with `new URL()`. If it is a `URL` object, it will be automatically converted to an ordinary `options` object.

If both `url` and `options` are specified, the objects are merged, with the`options` properties taking precedence.

The optional `callback` parameter will be added as a one-time listener for
the `'response'` event.

`http.request()` returns an instance of the [ClientRequest](https://oven-sh.github.io/bun-types/classes/https_.ClientRequest.md) class. The `ClientRequest` instance is a writable stream. If one needs to
upload a file with a POST request, then write to the `ClientRequest` object.

```js
const http = require('http');

const postData = JSON.stringify({
  'msg': 'Hello World!'
});

const options = {
  hostname: 'www.google.com',
  port: 80,
  path: '/upload',
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Content-Length': Buffer.byteLength(postData)
  }
};

const req = http.request(options, (res) => {
  console.log(`STATUS: ${res.statusCode}`);
  console.log(`HEADERS: ${JSON.stringify(res.headers)}`);
  res.setEncoding('utf8');
  res.on('data', (chunk) => {
    console.log(`BODY: ${chunk}`);
  });
  res.on('end', () => {
    console.log('No more data in response.');
  });
});

req.on('error', (e) => {
  console.error(`problem with request: ${e.message}`);
});

// Write data to request body
req.write(postData);
req.end();
```

In the example `req.end()` was called. With `http.request()` one
must always call `req.end()` to signify the end of the request -
even if there is no data being written to the request body.

If any error is encountered during the request (be that with DNS resolution,
TCP level errors, or actual HTTP parse errors) an `'error'` event is emitted
on the returned request object. As with all `'error'` events, if no listeners
are registered the error will be thrown.

There are a few special headers that should be noted.

* Sending a 'Connection: keep-alive' will notify Node.js that the connection to
the server should be persisted until the next request.
* Sending a 'Content-Length' header will disable the default chunked encoding.
* Sending an 'Expect' header will immediately send the request headers.
Usually, when sending 'Expect: 100-continue', both a timeout and a listener
for the `'continue'` event should be set. See RFC 2616 Section 8.2.3 for more
information.
* Sending an Authorization header will override using the `auth` option
to compute basic authentication.

Example using a `URL` as `options`:

```js
const options = new URL('http://abc:xyz@example.com');

const req = http.request(options, (res) => {
  // ...
});
```

In a successful request, the following events will be emitted in the following
order:

* `'socket'`
* `'response'`
   * `'data'` any number of times, on the `res` object
   (`'data'` will not be emitted at all if the response body is empty, for
   instance, in most redirects)
   * `'end'` on the `res` object
* `'close'`

In the case of a connection error, the following events will be emitted:

* `'socket'`
* `'error'`
* `'close'`

In the case of a premature connection close before the response is received,
the following events will be emitted in the following order:

* `'socket'`
* `'error'` with an error with message `'Error: socket hang up'` and code`'ECONNRESET'`
* `'close'`

In the case of a premature connection close after the response is received,
the following events will be emitted in the following order:

* `'socket'`
* `'response'`
   * `'data'` any number of times, on the `res` object
* (connection closed here)
* `'aborted'` on the `res` object
* `'error'` on the `res` object with an error with message`'Error: aborted'` and code `'ECONNRESET'`.
* `'close'`
* `'close'` on the `res` object

If `req.destroy()` is called before a socket is assigned, the following
events will be emitted in the following order:

* (`req.destroy()` called here)
* `'error'` with an error with message `'Error: socket hang up'` and code`'ECONNRESET'`
* `'close'`

If `req.destroy()` is called before the connection succeeds, the following
events will be emitted in the following order:

* `'socket'`
* (`req.destroy()` called here)
* `'error'` with an error with message `'Error: socket hang up'` and code`'ECONNRESET'`
* `'close'`

If `req.destroy()` is called after the response is received, the following
events will be emitted in the following order:

* `'socket'`
* `'response'`
   * `'data'` any number of times, on the `res` object
* (`req.destroy()` called here)
* `'aborted'` on the `res` object
* `'error'` on the `res` object with an error with message`'Error: aborted'` and code `'ECONNRESET'`.
* `'close'`
* `'close'` on the `res` object

If `req.abort()` is called before a socket is assigned, the following
events will be emitted in the following order:

* (`req.abort()` called here)
* `'abort'`
* `'close'`

If `req.abort()` is called before the connection succeeds, the following
events will be emitted in the following order:

* `'socket'`
* (`req.abort()` called here)
* `'abort'`
* `'error'` with an error with message `'Error: socket hang up'` and code`'ECONNRESET'`
* `'close'`

If `req.abort()` is called after the response is received, the following
events will be emitted in the following order:

* `'socket'`
* `'response'`
   * `'data'` any number of times, on the `res` object
* (`req.abort()` called here)
* `'abort'`
* `'aborted'` on the `res` object
* `'error'` on the `res` object with an error with message`'Error: aborted'` and code `'ECONNRESET'`.
* `'close'`
* `'close'` on the `res` object

Setting the `timeout` option or using the `setTimeout()` function will
not abort the request or do anything besides add a `'timeout'` event.

Passing an `AbortSignal` and then calling `abort` on the corresponding`AbortController` will behave the same way as calling `.destroy()` on the
request itself.

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `string` \| [`URL`](https://oven-sh.github.io/bun-types/modules.md#url) \| [`RequestOptions`](https://oven-sh.github.io/bun-types/interfaces/http_.RequestOptions.md) |
| `callback?` | (`res`: [`IncomingMessage`](https://oven-sh.github.io/bun-types/classes/http_.IncomingMessage.md)) => `void` |

#### Returns

[`ClientRequest`](https://oven-sh.github.io/bun-types/classes/http_.ClientRequest.md)

▸ **request**(`url`, `options`, `callback?`): [`ClientRequest`](https://oven-sh.github.io/bun-types/classes/http_.ClientRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` \| [`URL`](https://oven-sh.github.io/bun-types/modules.md#url) |
| `options` | [`RequestOptions`](https://oven-sh.github.io/bun-types/interfaces/http_.RequestOptions.md) |
| `callback?` | (`res`: [`IncomingMessage`](https://oven-sh.github.io/bun-types/classes/http_.IncomingMessage.md)) => `void` |

#### Returns

[`ClientRequest`](https://oven-sh.github.io/bun-types/classes/http_.ClientRequest.md)

▸ **request**(`options`, `callback?`): [`ClientRequest`](https://oven-sh.github.io/bun-types/classes/http_.ClientRequest.md)

`options` in `socket.connect()` are also supported.

Node.js maintains several connections per server to make HTTP requests.
This function allows one to transparently issue requests.

`url` can be a string or a `URL` object. If `url` is a
string, it is automatically parsed with `new URL()`. If it is a `URL` object, it will be automatically converted to an ordinary `options` object.

If both `url` and `options` are specified, the objects are merged, with the`options` properties taking precedence.

The optional `callback` parameter will be added as a one-time listener for
the `'response'` event.

`http.request()` returns an instance of the [ClientRequest](https://oven-sh.github.io/bun-types/classes/https_.ClientRequest.md) class. The `ClientRequest` instance is a writable stream. If one needs to
upload a file with a POST request, then write to the `ClientRequest` object.

```js
const http = require('http');

const postData = JSON.stringify({
  'msg': 'Hello World!'
});

const options = {
  hostname: 'www.google.com',
  port: 80,
  path: '/upload',
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Content-Length': Buffer.byteLength(postData)
  }
};

const req = http.request(options, (res) => {
  console.log(`STATUS: ${res.statusCode}`);
  console.log(`HEADERS: ${JSON.stringify(res.headers)}`);
  res.setEncoding('utf8');
  res.on('data', (chunk) => {
    console.log(`BODY: ${chunk}`);
  });
  res.on('end', () => {
    console.log('No more data in response.');
  });
});

req.on('error', (e) => {
  console.error(`problem with request: ${e.message}`);
});

// Write data to request body
req.write(postData);
req.end();
```

In the example `req.end()` was called. With `http.request()` one
must always call `req.end()` to signify the end of the request -
even if there is no data being written to the request body.

If any error is encountered during the request (be that with DNS resolution,
TCP level errors, or actual HTTP parse errors) an `'error'` event is emitted
on the returned request object. As with all `'error'` events, if no listeners
are registered the error will be thrown.

There are a few special headers that should be noted.

* Sending a 'Connection: keep-alive' will notify Node.js that the connection to
the server should be persisted until the next request.
* Sending a 'Content-Length' header will disable the default chunked encoding.
* Sending an 'Expect' header will immediately send the request headers.
Usually, when sending 'Expect: 100-continue', both a timeout and a listener
for the `'continue'` event should be set. See RFC 2616 Section 8.2.3 for more
information.
* Sending an Authorization header will override using the `auth` option
to compute basic authentication.

Example using a `URL` as `options`:

```js
const options = new URL('http://abc:xyz@example.com');

const req = http.request(options, (res) => {
  // ...
});
```

In a successful request, the following events will be emitted in the following
order:

* `'socket'`
* `'response'`
   * `'data'` any number of times, on the `res` object
   (`'data'` will not be emitted at all if the response body is empty, for
   instance, in most redirects)
   * `'end'` on the `res` object
* `'close'`

In the case of a connection error, the following events will be emitted:

* `'socket'`
* `'error'`
* `'close'`

In the case of a premature connection close before the response is received,
the following events will be emitted in the following order:

* `'socket'`
* `'error'` with an error with message `'Error: socket hang up'` and code`'ECONNRESET'`
* `'close'`

In the case of a premature connection close after the response is received,
the following events will be emitted in the following order:

* `'socket'`
* `'response'`
   * `'data'` any number of times, on the `res` object
* (connection closed here)
* `'aborted'` on the `res` object
* `'error'` on the `res` object with an error with message`'Error: aborted'` and code `'ECONNRESET'`.
* `'close'`
* `'close'` on the `res` object

If `req.destroy()` is called before a socket is assigned, the following
events will be emitted in the following order:

* (`req.destroy()` called here)
* `'error'` with an error with message `'Error: socket hang up'` and code`'ECONNRESET'`
* `'close'`

If `req.destroy()` is called before the connection succeeds, the following
events will be emitted in the following order:

* `'socket'`
* (`req.destroy()` called here)
* `'error'` with an error with message `'Error: socket hang up'` and code`'ECONNRESET'`
* `'close'`

If `req.destroy()` is called after the response is received, the following
events will be emitted in the following order:

* `'socket'`
* `'response'`
   * `'data'` any number of times, on the `res` object
* (`req.destroy()` called here)
* `'aborted'` on the `res` object
* `'error'` on the `res` object with an error with message`'Error: aborted'` and code `'ECONNRESET'`.
* `'close'`
* `'close'` on the `res` object

If `req.abort()` is called before a socket is assigned, the following
events will be emitted in the following order:

* (`req.abort()` called here)
* `'abort'`
* `'close'`

If `req.abort()` is called before the connection succeeds, the following
events will be emitted in the following order:

* `'socket'`
* (`req.abort()` called here)
* `'abort'`
* `'error'` with an error with message `'Error: socket hang up'` and code`'ECONNRESET'`
* `'close'`

If `req.abort()` is called after the response is received, the following
events will be emitted in the following order:

* `'socket'`
* `'response'`
   * `'data'` any number of times, on the `res` object
* (`req.abort()` called here)
* `'abort'`
* `'aborted'` on the `res` object
* `'error'` on the `res` object with an error with message`'Error: aborted'` and code `'ECONNRESET'`.
* `'close'`
* `'close'` on the `res` object

Setting the `timeout` option or using the `setTimeout()` function will
not abort the request or do anything besides add a `'timeout'` event.

Passing an `AbortSignal` and then calling `abort` on the corresponding`AbortController` will behave the same way as calling `.destroy()` on the
request itself.

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `string` \| [`URL`](https://oven-sh.github.io/bun-types/modules.md#url) \| [`RequestOptions`](https://oven-sh.github.io/bun-types/interfaces/http_.RequestOptions.md) |
| `callback?` | (`res`: [`IncomingMessage`](https://oven-sh.github.io/bun-types/classes/http_.IncomingMessage.md)) => `void` |

#### Returns

[`ClientRequest`](https://oven-sh.github.io/bun-types/classes/http_.ClientRequest.md)

▸ **request**(`url`, `options`, `callback?`): [`ClientRequest`](https://oven-sh.github.io/bun-types/classes/http_.ClientRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` \| [`URL`](https://oven-sh.github.io/bun-types/modules.md#url) |
| `options` | [`RequestOptions`](https://oven-sh.github.io/bun-types/interfaces/http_.RequestOptions.md) |
| `callback?` | (`res`: [`IncomingMessage`](https://oven-sh.github.io/bun-types/classes/http_.IncomingMessage.md)) => `void` |

#### Returns

[`ClientRequest`](https://oven-sh.github.io/bun-types/classes/http_.ClientRequest.md)
