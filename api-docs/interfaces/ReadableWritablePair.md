[bun-types](https://github.com/oven-sh/bun-types/blob/master/api-docs/README.md) / [Exports](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules.md) / ReadableWritablePair

# Interface: ReadableWritablePair<R, W\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `R` | `any` |
| `W` | `any` |

## Table of contents

### Properties

- [readable](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/ReadableWritablePair.md#readable)
- [writable](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/ReadableWritablePair.md#writable)

## Properties

### readable

• **readable**: [`ReadableStream`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules.md#readablestream)<`R`\>

___

### writable

• **writable**: [`WritableStream`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules.md#writablestream)<`W`\>

Provides a convenient, chainable way of piping this readable stream through a transform stream (or any other { writable, readable } pair). It simply pipes the stream into the writable side of the supplied pair, and returns the readable side for further use.

Piping a stream will lock it for the duration of the pipe, preventing any other consumer from acquiring a reader.
