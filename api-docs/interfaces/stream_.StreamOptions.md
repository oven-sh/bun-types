[bun-types](https://github.com/oven-sh/bun-types/blob/master/api-docs/README.md) / [Exports](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules.md) / ["stream"](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/stream_.md) / StreamOptions

# Interface: StreamOptions<T\>

["stream"](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/stream_.md).StreamOptions

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Stream`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/stream_.Stream.md) |

## Hierarchy

- [`Abortable`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/events_.EventEmitter.Abortable.md)

  ↳ **`StreamOptions`**

  ↳↳ [`ReadableOptions`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/stream_.ReadableOptions.md)

  ↳↳ [`WritableOptions`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/stream_.WritableOptions.md)

  ↳↳ [`ReadableOptions`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/node_stream_.ReadableOptions.md)

  ↳↳ [`WritableOptions`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/node_stream_.WritableOptions.md)

## Table of contents

### Properties

- [autoDestroy](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/stream_.StreamOptions.md#autodestroy)
- [emitClose](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/stream_.StreamOptions.md#emitclose)
- [highWaterMark](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/stream_.StreamOptions.md#highwatermark)
- [objectMode](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/stream_.StreamOptions.md#objectmode)
- [signal](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/stream_.StreamOptions.md#signal)

### Methods

- [construct](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/stream_.StreamOptions.md#construct)
- [destroy](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/stream_.StreamOptions.md#destroy)

## Properties

### autoDestroy

• `Optional` **autoDestroy**: `boolean`

___

### emitClose

• `Optional` **emitClose**: `boolean`

___

### highWaterMark

• `Optional` **highWaterMark**: `number`

___

### objectMode

• `Optional` **objectMode**: `boolean`

___

### signal

• `Optional` **signal**: [`AbortSignal`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules.md#abortsignal)

When provided the corresponding `AbortController` can be used to cancel an asynchronous action.

#### Inherited from

[Abortable](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/events_.EventEmitter.Abortable.md).[signal](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/events_.EventEmitter.Abortable.md#signal)

## Methods

### construct

▸ `Optional` **construct**(`this`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | `T` |
| `callback` | (`error?`: `Error`) => `void` |

#### Returns

`void`

___

### destroy

▸ `Optional` **destroy**(`this`, `error`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | `T` |
| `error` | `Error` |
| `callback` | (`error`: `Error`) => `void` |

#### Returns

`void`
