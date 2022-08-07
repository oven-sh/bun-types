[bun-types](https://oven-sh.github.io/bun-types/README.md) / [Exports](https://oven-sh.github.io/bun-types/modules.md) / ["events"](https://oven-sh.github.io/bun-types/modules/events_.md) / [EventEmitter](https://oven-sh.github.io/bun-types/modules/events_.EventEmitter.md) / Abortable

# Interface: Abortable

["events"](https://oven-sh.github.io/bun-types/modules/events_.md).[EventEmitter](https://oven-sh.github.io/bun-types/modules/events_.EventEmitter.md).Abortable

## Hierarchy

- **`Abortable`**

  ↳ [`StreamOptions`](https://oven-sh.github.io/bun-types/interfaces/stream_.StreamOptions.md)

  ↳ [`FinishedOptions`](https://oven-sh.github.io/bun-types/interfaces/stream_.FinishedOptions.md)

  ↳ [`StreamOptions`](https://oven-sh.github.io/bun-types/interfaces/node_stream_.StreamOptions.md)

  ↳ [`FinishedOptions`](https://oven-sh.github.io/bun-types/interfaces/node_stream_.FinishedOptions.md)

## Table of contents

### Properties

- [signal](https://oven-sh.github.io/bun-types/interfaces/events_.EventEmitter.Abortable.md#signal)

## Properties

### signal

• `Optional` **signal**: [`AbortSignal`](https://oven-sh.github.io/bun-types/modules.md#abortsignal)

When provided the corresponding `AbortController` can be used to cancel an asynchronous action.
