[bun-types](https://oven-sh.github.io/bun-types/README.md) / [Exports](https://oven-sh.github.io/bun-types/modules.md) / ["node:stream"](https://oven-sh.github.io/bun-types/modules/node_stream_.md) / FinishedOptions

# Interface: FinishedOptions

["node:stream"](https://oven-sh.github.io/bun-types/modules/node_stream_.md).FinishedOptions

## Hierarchy

- [`Abortable`](https://oven-sh.github.io/bun-types/interfaces/events_.EventEmitter.Abortable.md)

  ↳ **`FinishedOptions`**

## Table of contents

### Properties

- [error](https://oven-sh.github.io/bun-types/interfaces/node_stream_.FinishedOptions.md#error)
- [readable](https://oven-sh.github.io/bun-types/interfaces/node_stream_.FinishedOptions.md#readable)
- [signal](https://oven-sh.github.io/bun-types/interfaces/node_stream_.FinishedOptions.md#signal)
- [writable](https://oven-sh.github.io/bun-types/interfaces/node_stream_.FinishedOptions.md#writable)

## Properties

### error

• `Optional` **error**: `boolean`

___

### readable

• `Optional` **readable**: `boolean`

___

### signal

• `Optional` **signal**: [`AbortSignal`](https://oven-sh.github.io/bun-types/modules.md#abortsignal)

When provided the corresponding `AbortController` can be used to cancel an asynchronous action.

#### Inherited from

[Abortable](https://oven-sh.github.io/bun-types/interfaces/events_.EventEmitter.Abortable.md).[signal](https://oven-sh.github.io/bun-types/interfaces/events_.EventEmitter.Abortable.md#signal)

___

### writable

• `Optional` **writable**: `boolean`
