[bun-types](https://oven-sh.github.io/bun-types/README.md) / [Exports](https://oven-sh.github.io/bun-types/modules.md) / RequestInit

# Interface: RequestInit

## Table of contents

### Properties

- [body](https://oven-sh.github.io/bun-types/interfaces/RequestInit.md#body)
- [cache](https://oven-sh.github.io/bun-types/interfaces/RequestInit.md#cache)
- [credentials](https://oven-sh.github.io/bun-types/interfaces/RequestInit.md#credentials)
- [headers](https://oven-sh.github.io/bun-types/interfaces/RequestInit.md#headers)
- [integrity](https://oven-sh.github.io/bun-types/interfaces/RequestInit.md#integrity)
- [keepalive](https://oven-sh.github.io/bun-types/interfaces/RequestInit.md#keepalive)
- [method](https://oven-sh.github.io/bun-types/interfaces/RequestInit.md#method)
- [mode](https://oven-sh.github.io/bun-types/interfaces/RequestInit.md#mode)
- [redirect](https://oven-sh.github.io/bun-types/interfaces/RequestInit.md#redirect)
- [referrer](https://oven-sh.github.io/bun-types/interfaces/RequestInit.md#referrer)
- [referrerPolicy](https://oven-sh.github.io/bun-types/interfaces/RequestInit.md#referrerpolicy)
- [signal](https://oven-sh.github.io/bun-types/interfaces/RequestInit.md#signal)
- [window](https://oven-sh.github.io/bun-types/interfaces/RequestInit.md#window)

## Properties

### body

• `Optional` **body**: `BodyInit`

A BodyInit object or null to set request's body.

___

### cache

• `Optional` **cache**: `RequestCache`

A string indicating how the request will interact with the browser's cache to set request's cache.

Note: as of Bun v0.0.74, this is not implemented yet.

___

### credentials

• `Optional` **credentials**: `RequestCredentials`

A string indicating whether credentials will be sent with the request always, never, or only when sent to a same-origin URL. Sets request's credentials.

___

### headers

• `Optional` **headers**: `HeadersInit`

A Headers object, an object literal, or an array of two-item arrays to set request's headers.

___

### integrity

• `Optional` **integrity**: `string`

A cryptographic hash of the resource to be fetched by request. Sets request's integrity.

Note: as of Bun v0.0.74, this is not implemented yet.

___

### keepalive

• `Optional` **keepalive**: `boolean`

A boolean to set request's keepalive.

Note: as of Bun v0.0.74, this is not implemented yet.

___

### method

• `Optional` **method**: `string`

A string to set request's method.

___

### mode

• `Optional` **mode**: `RequestMode`

A string to indicate whether the request will use CORS, or will be restricted to same-origin URLs. Sets request's mode.

___

### redirect

• `Optional` **redirect**: `RequestRedirect`

A string indicating whether request follows redirects, results in an error upon encountering a redirect, or returns the redirect (in an opaque fashion). Sets request's redirect.

___

### referrer

• `Optional` **referrer**: `string`

A string whose value is a same-origin URL, "about:client", or the empty string, to set request's referrer.

___

### referrerPolicy

• `Optional` **referrerPolicy**: `ReferrerPolicy`

A referrer policy to set request's referrerPolicy.

___

### signal

• `Optional` **signal**: [`AbortSignal`](https://oven-sh.github.io/bun-types/modules.md#abortsignal)

An AbortSignal to set request's signal.

Note: as of Bun v0.0.74, this is not implemented yet.

___

### window

• `Optional` **window**: `any`

Can only be null. Used to disassociate request from any Window.

This does nothing in Bun
