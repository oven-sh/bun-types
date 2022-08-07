[bun-types](https://github.com/oven-sh/bun-types/blob/master/api-docs/README.md) / [Exports](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules.md) / "url"

# Namespace: "url"

The `url` module provides utilities for URL resolution and parsing. It can be
accessed using:

```js
import url from 'url';
```

**`See`**

[source](https://github.com/nodejs/node/blob/v18.0.0/lib/url.js)

## Table of contents

### Interfaces

- [URL](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/url_.URL.md)
- [URLFormatOptions](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/url_.URLFormatOptions.md)
- [URLSearchParams](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/url_.URLSearchParams.md)
- [Url](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/url_.Url-1.md)
- [UrlObject](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/url_.UrlObject.md)
- [UrlWithParsedQuery](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/url_.UrlWithParsedQuery.md)
- [UrlWithStringQuery](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/url_.UrlWithStringQuery.md)

### Functions

- [fileURLToPath](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/url_.md#fileurltopath)
- [format](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/url_.md#format)
- [parse](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/url_.md#parse)
- [pathToFileURL](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/url_.md#pathtofileurl)
- [resolve](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/url_.md#resolve)

## Functions

### fileURLToPath

▸ **fileURLToPath**(`url`): `string`

This function ensures the correct decodings of percent-encoded characters as
well as ensuring a cross-platform valid absolute path string.

```js
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);

new URL('file:///C:/path/').pathname;      // Incorrect: /C:/path/
fileURLToPath('file:///C:/path/');         // Correct:   C:\path\ (Windows)

new URL('file://nas/foo.txt').pathname;    // Incorrect: /foo.txt
fileURLToPath('file://nas/foo.txt');       // Correct:   \\nas\foo.txt (Windows)

new URL('file:///你好.txt').pathname;      // Incorrect: /%E4%BD%A0%E5%A5%BD.txt
fileURLToPath('file:///你好.txt');         // Correct:   /你好.txt (POSIX)

new URL('file:///hello world').pathname;   // Incorrect: /hello%20world
fileURLToPath('file:///hello world');      // Correct:   /hello world (POSIX)
```

**`Since`**

v10.12.0

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `url` | `string` \| [`URL`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/url_.URL.md) | The file URL string or URL object to convert to a path. |

#### Returns

`string`

The fully-resolved platform-specific Node.js file path.

▸ **fileURLToPath**(`url`): `string`

This function ensures the correct decodings of percent-encoded characters as
well as ensuring a cross-platform valid absolute path string.

```js
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);

new URL('file:///C:/path/').pathname;      // Incorrect: /C:/path/
fileURLToPath('file:///C:/path/');         // Correct:   C:\path\ (Windows)

new URL('file://nas/foo.txt').pathname;    // Incorrect: /foo.txt
fileURLToPath('file://nas/foo.txt');       // Correct:   \\nas\foo.txt (Windows)

new URL('file:///你好.txt').pathname;      // Incorrect: /%E4%BD%A0%E5%A5%BD.txt
fileURLToPath('file:///你好.txt');         // Correct:   /你好.txt (POSIX)

new URL('file:///hello world').pathname;   // Incorrect: /hello%20world
fileURLToPath('file:///hello world');      // Correct:   /hello world (POSIX)
```

**`Since`**

v10.12.0

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `url` | `string` \| [`URL`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/url_.URL.md) | The file URL string or URL object to convert to a path. |

#### Returns

`string`

The fully-resolved platform-specific Node.js file path.

___

### format

▸ **format**(`urlObject`, `options?`): `string`

The `url.format()` method returns a formatted URL string derived from`urlObject`.

```js
const url = require('url');
url.format({
  protocol: 'https',
  hostname: 'example.com',
  pathname: '/some/path',
  query: {
    page: 1,
    format: 'json'
  }
});

// => 'https://example.com/some/path?page=1&#x26;format=json'
```

If `urlObject` is not an object or a string, `url.format()` will throw a `TypeError`.

The formatting process operates as follows:

* A new empty string `result` is created.
* If `urlObject.protocol` is a string, it is appended as-is to `result`.
* Otherwise, if `urlObject.protocol` is not `undefined` and is not a string, an `Error` is thrown.
* For all string values of `urlObject.protocol` that _do not end_ with an ASCII
colon (`:`) character, the literal string `:` will be appended to `result`.
* If either of the following conditions is true, then the literal string `//`will be appended to `result`:
   * `urlObject.slashes` property is true;
   * `urlObject.protocol` begins with `http`, `https`, `ftp`, `gopher`, or`file`;
* If the value of the `urlObject.auth` property is truthy, and either`urlObject.host` or `urlObject.hostname` are not `undefined`, the value of`urlObject.auth` will be coerced into a string
and appended to `result`followed by the literal string `@`.
* If the `urlObject.host` property is `undefined` then:
   * If the `urlObject.hostname` is a string, it is appended to `result`.
   * Otherwise, if `urlObject.hostname` is not `undefined` and is not a string,
   an `Error` is thrown.
   * If the `urlObject.port` property value is truthy, and `urlObject.hostname`is not `undefined`:
         * The literal string `:` is appended to `result`, and
         * The value of `urlObject.port` is coerced to a string and appended to`result`.
* Otherwise, if the `urlObject.host` property value is truthy, the value of`urlObject.host` is coerced to a string and appended to `result`.
* If the `urlObject.pathname` property is a string that is not an empty string:
   * If the `urlObject.pathname`_does not start_ with an ASCII forward slash
   (`/`), then the literal string `'/'` is appended to `result`.
   * The value of `urlObject.pathname` is appended to `result`.
* Otherwise, if `urlObject.pathname` is not `undefined` and is not a string, an `Error` is thrown.
* If the `urlObject.search` property is `undefined` and if the `urlObject.query`property is an `Object`, the literal string `?` is appended to `result`followed by the output of calling the
`querystring` module's `stringify()`method passing the value of `urlObject.query`.
* Otherwise, if `urlObject.search` is a string:
   * If the value of `urlObject.search`_does not start_ with the ASCII question
   mark (`?`) character, the literal string `?` is appended to `result`.
   * The value of `urlObject.search` is appended to `result`.
* Otherwise, if `urlObject.search` is not `undefined` and is not a string, an `Error` is thrown.
* If the `urlObject.hash` property is a string:
   * If the value of `urlObject.hash`_does not start_ with the ASCII hash (`#`)
   character, the literal string `#` is appended to `result`.
   * The value of `urlObject.hash` is appended to `result`.
* Otherwise, if the `urlObject.hash` property is not `undefined` and is not a
string, an `Error` is thrown.
* `result` is returned.

**`Since`**

v0.1.25

**`Deprecated`**

Legacy: Use the WHATWG URL API instead.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `urlObject` | [`URL`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/url_.URL.md) | A URL object (as returned by `url.parse()` or constructed otherwise). If a string, it is converted to an object by passing it to `url.parse()`. |
| `options?` | [`URLFormatOptions`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/url_.URLFormatOptions.md) | - |

#### Returns

`string`

▸ **format**(`urlObject`): `string`

The `url.format()` method returns a formatted URL string derived from`urlObject`.

```js
const url = require('url');
url.format({
  protocol: 'https',
  hostname: 'example.com',
  pathname: '/some/path',
  query: {
    page: 1,
    format: 'json'
  }
});

// => 'https://example.com/some/path?page=1&#x26;format=json'
```

If `urlObject` is not an object or a string, `url.format()` will throw a `TypeError`.

The formatting process operates as follows:

* A new empty string `result` is created.
* If `urlObject.protocol` is a string, it is appended as-is to `result`.
* Otherwise, if `urlObject.protocol` is not `undefined` and is not a string, an `Error` is thrown.
* For all string values of `urlObject.protocol` that _do not end_ with an ASCII
colon (`:`) character, the literal string `:` will be appended to `result`.
* If either of the following conditions is true, then the literal string `//`will be appended to `result`:
   * `urlObject.slashes` property is true;
   * `urlObject.protocol` begins with `http`, `https`, `ftp`, `gopher`, or`file`;
* If the value of the `urlObject.auth` property is truthy, and either`urlObject.host` or `urlObject.hostname` are not `undefined`, the value of`urlObject.auth` will be coerced into a string
and appended to `result`followed by the literal string `@`.
* If the `urlObject.host` property is `undefined` then:
   * If the `urlObject.hostname` is a string, it is appended to `result`.
   * Otherwise, if `urlObject.hostname` is not `undefined` and is not a string,
   an `Error` is thrown.
   * If the `urlObject.port` property value is truthy, and `urlObject.hostname`is not `undefined`:
         * The literal string `:` is appended to `result`, and
         * The value of `urlObject.port` is coerced to a string and appended to`result`.
* Otherwise, if the `urlObject.host` property value is truthy, the value of`urlObject.host` is coerced to a string and appended to `result`.
* If the `urlObject.pathname` property is a string that is not an empty string:
   * If the `urlObject.pathname`_does not start_ with an ASCII forward slash
   (`/`), then the literal string `'/'` is appended to `result`.
   * The value of `urlObject.pathname` is appended to `result`.
* Otherwise, if `urlObject.pathname` is not `undefined` and is not a string, an `Error` is thrown.
* If the `urlObject.search` property is `undefined` and if the `urlObject.query`property is an `Object`, the literal string `?` is appended to `result`followed by the output of calling the
`querystring` module's `stringify()`method passing the value of `urlObject.query`.
* Otherwise, if `urlObject.search` is a string:
   * If the value of `urlObject.search`_does not start_ with the ASCII question
   mark (`?`) character, the literal string `?` is appended to `result`.
   * The value of `urlObject.search` is appended to `result`.
* Otherwise, if `urlObject.search` is not `undefined` and is not a string, an `Error` is thrown.
* If the `urlObject.hash` property is a string:
   * If the value of `urlObject.hash`_does not start_ with the ASCII hash (`#`)
   character, the literal string `#` is appended to `result`.
   * The value of `urlObject.hash` is appended to `result`.
* Otherwise, if the `urlObject.hash` property is not `undefined` and is not a
string, an `Error` is thrown.
* `result` is returned.

**`Since`**

v0.1.25

**`Deprecated`**

Legacy: Use the WHATWG URL API instead.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `urlObject` | `string` \| [`UrlObject`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/url_.UrlObject.md) | A URL object (as returned by `url.parse()` or constructed otherwise). If a string, it is converted to an object by passing it to `url.parse()`. |

#### Returns

`string`

▸ **format**(`urlObject`, `options?`): `string`

The `url.format()` method returns a formatted URL string derived from`urlObject`.

```js
const url = require('url');
url.format({
  protocol: 'https',
  hostname: 'example.com',
  pathname: '/some/path',
  query: {
    page: 1,
    format: 'json'
  }
});

// => 'https://example.com/some/path?page=1&#x26;format=json'
```

If `urlObject` is not an object or a string, `url.format()` will throw a `TypeError`.

The formatting process operates as follows:

* A new empty string `result` is created.
* If `urlObject.protocol` is a string, it is appended as-is to `result`.
* Otherwise, if `urlObject.protocol` is not `undefined` and is not a string, an `Error` is thrown.
* For all string values of `urlObject.protocol` that _do not end_ with an ASCII
colon (`:`) character, the literal string `:` will be appended to `result`.
* If either of the following conditions is true, then the literal string `//`will be appended to `result`:
   * `urlObject.slashes` property is true;
   * `urlObject.protocol` begins with `http`, `https`, `ftp`, `gopher`, or`file`;
* If the value of the `urlObject.auth` property is truthy, and either`urlObject.host` or `urlObject.hostname` are not `undefined`, the value of`urlObject.auth` will be coerced into a string
and appended to `result`followed by the literal string `@`.
* If the `urlObject.host` property is `undefined` then:
   * If the `urlObject.hostname` is a string, it is appended to `result`.
   * Otherwise, if `urlObject.hostname` is not `undefined` and is not a string,
   an `Error` is thrown.
   * If the `urlObject.port` property value is truthy, and `urlObject.hostname`is not `undefined`:
         * The literal string `:` is appended to `result`, and
         * The value of `urlObject.port` is coerced to a string and appended to`result`.
* Otherwise, if the `urlObject.host` property value is truthy, the value of`urlObject.host` is coerced to a string and appended to `result`.
* If the `urlObject.pathname` property is a string that is not an empty string:
   * If the `urlObject.pathname`_does not start_ with an ASCII forward slash
   (`/`), then the literal string `'/'` is appended to `result`.
   * The value of `urlObject.pathname` is appended to `result`.
* Otherwise, if `urlObject.pathname` is not `undefined` and is not a string, an `Error` is thrown.
* If the `urlObject.search` property is `undefined` and if the `urlObject.query`property is an `Object`, the literal string `?` is appended to `result`followed by the output of calling the
`querystring` module's `stringify()`method passing the value of `urlObject.query`.
* Otherwise, if `urlObject.search` is a string:
   * If the value of `urlObject.search`_does not start_ with the ASCII question
   mark (`?`) character, the literal string `?` is appended to `result`.
   * The value of `urlObject.search` is appended to `result`.
* Otherwise, if `urlObject.search` is not `undefined` and is not a string, an `Error` is thrown.
* If the `urlObject.hash` property is a string:
   * If the value of `urlObject.hash`_does not start_ with the ASCII hash (`#`)
   character, the literal string `#` is appended to `result`.
   * The value of `urlObject.hash` is appended to `result`.
* Otherwise, if the `urlObject.hash` property is not `undefined` and is not a
string, an `Error` is thrown.
* `result` is returned.

**`Since`**

v0.1.25

**`Deprecated`**

Legacy: Use the WHATWG URL API instead.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `urlObject` | [`URL`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/url_.URL.md) | A URL object (as returned by `url.parse()` or constructed otherwise). If a string, it is converted to an object by passing it to `url.parse()`. |
| `options?` | [`URLFormatOptions`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/url_.URLFormatOptions.md) | - |

#### Returns

`string`

▸ **format**(`urlObject`): `string`

The `url.format()` method returns a formatted URL string derived from`urlObject`.

```js
const url = require('url');
url.format({
  protocol: 'https',
  hostname: 'example.com',
  pathname: '/some/path',
  query: {
    page: 1,
    format: 'json'
  }
});

// => 'https://example.com/some/path?page=1&#x26;format=json'
```

If `urlObject` is not an object or a string, `url.format()` will throw a `TypeError`.

The formatting process operates as follows:

* A new empty string `result` is created.
* If `urlObject.protocol` is a string, it is appended as-is to `result`.
* Otherwise, if `urlObject.protocol` is not `undefined` and is not a string, an `Error` is thrown.
* For all string values of `urlObject.protocol` that _do not end_ with an ASCII
colon (`:`) character, the literal string `:` will be appended to `result`.
* If either of the following conditions is true, then the literal string `//`will be appended to `result`:
   * `urlObject.slashes` property is true;
   * `urlObject.protocol` begins with `http`, `https`, `ftp`, `gopher`, or`file`;
* If the value of the `urlObject.auth` property is truthy, and either`urlObject.host` or `urlObject.hostname` are not `undefined`, the value of`urlObject.auth` will be coerced into a string
and appended to `result`followed by the literal string `@`.
* If the `urlObject.host` property is `undefined` then:
   * If the `urlObject.hostname` is a string, it is appended to `result`.
   * Otherwise, if `urlObject.hostname` is not `undefined` and is not a string,
   an `Error` is thrown.
   * If the `urlObject.port` property value is truthy, and `urlObject.hostname`is not `undefined`:
         * The literal string `:` is appended to `result`, and
         * The value of `urlObject.port` is coerced to a string and appended to`result`.
* Otherwise, if the `urlObject.host` property value is truthy, the value of`urlObject.host` is coerced to a string and appended to `result`.
* If the `urlObject.pathname` property is a string that is not an empty string:
   * If the `urlObject.pathname`_does not start_ with an ASCII forward slash
   (`/`), then the literal string `'/'` is appended to `result`.
   * The value of `urlObject.pathname` is appended to `result`.
* Otherwise, if `urlObject.pathname` is not `undefined` and is not a string, an `Error` is thrown.
* If the `urlObject.search` property is `undefined` and if the `urlObject.query`property is an `Object`, the literal string `?` is appended to `result`followed by the output of calling the
`querystring` module's `stringify()`method passing the value of `urlObject.query`.
* Otherwise, if `urlObject.search` is a string:
   * If the value of `urlObject.search`_does not start_ with the ASCII question
   mark (`?`) character, the literal string `?` is appended to `result`.
   * The value of `urlObject.search` is appended to `result`.
* Otherwise, if `urlObject.search` is not `undefined` and is not a string, an `Error` is thrown.
* If the `urlObject.hash` property is a string:
   * If the value of `urlObject.hash`_does not start_ with the ASCII hash (`#`)
   character, the literal string `#` is appended to `result`.
   * The value of `urlObject.hash` is appended to `result`.
* Otherwise, if the `urlObject.hash` property is not `undefined` and is not a
string, an `Error` is thrown.
* `result` is returned.

**`Since`**

v0.1.25

**`Deprecated`**

Legacy: Use the WHATWG URL API instead.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `urlObject` | `string` \| [`UrlObject`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/url_.UrlObject.md) | A URL object (as returned by `url.parse()` or constructed otherwise). If a string, it is converted to an object by passing it to `url.parse()`. |

#### Returns

`string`

___

### parse

▸ **parse**(`urlString`): [`UrlWithStringQuery`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/url_.UrlWithStringQuery.md)

The `url.parse()` method takes a URL string, parses it, and returns a URL
object.

A `TypeError` is thrown if `urlString` is not a string.

A `URIError` is thrown if the `auth` property is present but cannot be decoded.

Use of the legacy `url.parse()` method is discouraged. Users should
use the WHATWG `URL` API. Because the `url.parse()` method uses a
lenient, non-standard algorithm for parsing URL strings, security
issues can be introduced. Specifically, issues with [host name spoofing](https://hackerone.com/reports/678487) and
incorrect handling of usernames and passwords have been identified.

Deprecation of this API has been shelved for now primarily due to the the
inability of the [WHATWG API to parse relative URLs](https://github.com/nodejs/node/issues/12682#issuecomment-1154492373).
[Discussions are ongoing](https://github.com/whatwg/url/issues/531) for the  best way to resolve this.

**`Since`**

v0.1.25

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `urlString` | `string` | The URL string to parse. |

#### Returns

[`UrlWithStringQuery`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/url_.UrlWithStringQuery.md)

▸ **parse**(`urlString`, `parseQueryString`, `slashesDenoteHost?`): [`UrlWithStringQuery`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/url_.UrlWithStringQuery.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `urlString` | `string` |
| `parseQueryString` | ``false`` |
| `slashesDenoteHost?` | `boolean` |

#### Returns

[`UrlWithStringQuery`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/url_.UrlWithStringQuery.md)

▸ **parse**(`urlString`, `parseQueryString`, `slashesDenoteHost?`): [`UrlWithParsedQuery`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/url_.UrlWithParsedQuery.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `urlString` | `string` |
| `parseQueryString` | ``true`` |
| `slashesDenoteHost?` | `boolean` |

#### Returns

[`UrlWithParsedQuery`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/url_.UrlWithParsedQuery.md)

▸ **parse**(`urlString`, `parseQueryString`, `slashesDenoteHost?`): [`Url`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/url_.Url-1.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `urlString` | `string` |
| `parseQueryString` | `boolean` |
| `slashesDenoteHost?` | `boolean` |

#### Returns

[`Url`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/url_.Url-1.md)

▸ **parse**(`urlString`): [`UrlWithStringQuery`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/url_.UrlWithStringQuery.md)

The `url.parse()` method takes a URL string, parses it, and returns a URL
object.

A `TypeError` is thrown if `urlString` is not a string.

A `URIError` is thrown if the `auth` property is present but cannot be decoded.

Use of the legacy `url.parse()` method is discouraged. Users should
use the WHATWG `URL` API. Because the `url.parse()` method uses a
lenient, non-standard algorithm for parsing URL strings, security
issues can be introduced. Specifically, issues with [host name spoofing](https://hackerone.com/reports/678487) and
incorrect handling of usernames and passwords have been identified.

Deprecation of this API has been shelved for now primarily due to the the
inability of the [WHATWG API to parse relative URLs](https://github.com/nodejs/node/issues/12682#issuecomment-1154492373).
[Discussions are ongoing](https://github.com/whatwg/url/issues/531) for the  best way to resolve this.

**`Since`**

v0.1.25

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `urlString` | `string` | The URL string to parse. |

#### Returns

[`UrlWithStringQuery`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/url_.UrlWithStringQuery.md)

▸ **parse**(`urlString`, `parseQueryString`, `slashesDenoteHost?`): [`UrlWithStringQuery`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/url_.UrlWithStringQuery.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `urlString` | `string` |
| `parseQueryString` | ``false`` |
| `slashesDenoteHost?` | `boolean` |

#### Returns

[`UrlWithStringQuery`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/url_.UrlWithStringQuery.md)

▸ **parse**(`urlString`, `parseQueryString`, `slashesDenoteHost?`): [`UrlWithParsedQuery`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/url_.UrlWithParsedQuery.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `urlString` | `string` |
| `parseQueryString` | ``true`` |
| `slashesDenoteHost?` | `boolean` |

#### Returns

[`UrlWithParsedQuery`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/url_.UrlWithParsedQuery.md)

▸ **parse**(`urlString`, `parseQueryString`, `slashesDenoteHost?`): [`Url`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/url_.Url-1.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `urlString` | `string` |
| `parseQueryString` | `boolean` |
| `slashesDenoteHost?` | `boolean` |

#### Returns

[`Url`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/url_.Url-1.md)

___

### pathToFileURL

▸ **pathToFileURL**(`path`): [`URL`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/url_.URL.md)

This function ensures that `path` is resolved absolutely, and that the URL
control characters are correctly encoded when converting into a File URL.

```js
import { pathToFileURL } from 'url';

new URL('/foo#1', 'file:');           // Incorrect: file:///foo#1
pathToFileURL('/foo#1');              // Correct:   file:///foo%231 (POSIX)

new URL('/some/path%.c', 'file:');    // Incorrect: file:///some/path%.c
pathToFileURL('/some/path%.c');       // Correct:   file:///some/path%25.c (POSIX)
```

**`Since`**

v10.12.0

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `path` | `string` | The path to convert to a File URL. |

#### Returns

[`URL`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/url_.URL.md)

The file URL object.

▸ **pathToFileURL**(`path`): [`URL`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/url_.URL.md)

This function ensures that `path` is resolved absolutely, and that the URL
control characters are correctly encoded when converting into a File URL.

```js
import { pathToFileURL } from 'url';

new URL('/foo#1', 'file:');           // Incorrect: file:///foo#1
pathToFileURL('/foo#1');              // Correct:   file:///foo%231 (POSIX)

new URL('/some/path%.c', 'file:');    // Incorrect: file:///some/path%.c
pathToFileURL('/some/path%.c');       // Correct:   file:///some/path%25.c (POSIX)
```

**`Since`**

v10.12.0

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `path` | `string` | The path to convert to a File URL. |

#### Returns

[`URL`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/url_.URL.md)

The file URL object.

___

### resolve

▸ **resolve**(`from`, `to`): `string`

The `url.resolve()` method resolves a target URL relative to a base URL in a
manner similar to that of a web browser resolving an anchor tag.

```js
const url = require('url');
url.resolve('/one/two/three', 'four');         // '/one/two/four'
url.resolve('http://example.com/', '/one');    // 'http://example.com/one'
url.resolve('http://example.com/one', '/two'); // 'http://example.com/two'
```

To achieve the same result using the WHATWG URL API:

```js
function resolve(from, to) {
  const resolvedUrl = new URL(to, new URL(from, 'resolve://'));
  if (resolvedUrl.protocol === 'resolve:') {
    // `from` is a relative URL.
    const { pathname, search, hash } = resolvedUrl;
    return pathname + search + hash;
  }
  return resolvedUrl.toString();
}

resolve('/one/two/three', 'four');         // '/one/two/four'
resolve('http://example.com/', '/one');    // 'http://example.com/one'
resolve('http://example.com/one', '/two'); // 'http://example.com/two'
```

**`Since`**

v0.1.25

**`Deprecated`**

Legacy: Use the WHATWG URL API instead.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `from` | `string` | The base URL to use if `to` is a relative URL. |
| `to` | `string` | The target URL to resolve. |

#### Returns

`string`

▸ **resolve**(`from`, `to`): `string`

The `url.resolve()` method resolves a target URL relative to a base URL in a
manner similar to that of a web browser resolving an anchor tag.

```js
const url = require('url');
url.resolve('/one/two/three', 'four');         // '/one/two/four'
url.resolve('http://example.com/', '/one');    // 'http://example.com/one'
url.resolve('http://example.com/one', '/two'); // 'http://example.com/two'
```

To achieve the same result using the WHATWG URL API:

```js
function resolve(from, to) {
  const resolvedUrl = new URL(to, new URL(from, 'resolve://'));
  if (resolvedUrl.protocol === 'resolve:') {
    // `from` is a relative URL.
    const { pathname, search, hash } = resolvedUrl;
    return pathname + search + hash;
  }
  return resolvedUrl.toString();
}

resolve('/one/two/three', 'four');         // '/one/two/four'
resolve('http://example.com/', '/one');    // 'http://example.com/one'
resolve('http://example.com/one', '/two'); // 'http://example.com/two'
```

**`Since`**

v0.1.25

**`Deprecated`**

Legacy: Use the WHATWG URL API instead.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `from` | `string` | The base URL to use if `to` is a relative URL. |
| `to` | `string` | The target URL to resolve. |

#### Returns

`string`
