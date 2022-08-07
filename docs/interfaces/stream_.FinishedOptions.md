[bun-types](https://github.com/oven-sh/bun-types/blob/master/api-docs/README.md) / [Exports](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules.md) / ["stream"](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/stream_.md) / FinishedOptions

# Interface: FinishedOptions

["stream"](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/stream_.md).FinishedOptions

## Hierarchy

- [`Abortable`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/events_.EventEmitter.Abortable.md)

  ↳ **`FinishedOptions`**

## Table of contents

### Properties

- [error](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/stream_.FinishedOptions.md#error)
- [readable](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/stream_.FinishedOptions.md#readable)
- [signal](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/stream_.FinishedOptions.md#signal)
- [writable](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/stream_.FinishedOptions.md#writable)

## Properties

### error

• `Optional` **error**: `boolean`

___

### readable

• `Optional` **readable**: `boolean`

___

### signal

• `Optional` **signal**: [`AbortSignal`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules.md#abortsignal)

When provided the corresponding `AbortController` can be used to cancel an asynchronous action.

#### Inherited from

[Abortable](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/events_.EventEmitter.Abortable.md).[signal](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/events_.EventEmitter.Abortable.md#signal)

___

### writable

• `Optional` **writable**: `boolean`
