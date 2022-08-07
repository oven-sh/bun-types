[bun-types](https://github.com/oven-sh/bun-types/blob/master/api-docs/README.md) / [Exports](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules.md) / ["events"](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/events_.md) / [EventEmitter](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/events_.EventEmitter.md) / Abortable

# Interface: Abortable

["events"](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/events_.md).[EventEmitter](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/events_.EventEmitter.md).Abortable

## Hierarchy

- **`Abortable`**

  ↳ [`StreamOptions`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/stream_.StreamOptions.md)

  ↳ [`FinishedOptions`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/stream_.FinishedOptions.md)

  ↳ [`StreamOptions`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/node_stream_.StreamOptions.md)

  ↳ [`FinishedOptions`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/node_stream_.FinishedOptions.md)

## Table of contents

### Properties

- [signal](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/events_.EventEmitter.Abortable.md#signal)

## Properties

### signal

• `Optional` **signal**: [`AbortSignal`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules.md#abortsignal)

When provided the corresponding `AbortController` can be used to cancel an asynchronous action.
