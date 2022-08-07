[bun-types](https://oven-sh.github.io/bun-types/README.md) / [Exports](https://oven-sh.github.io/bun-types/modules.md) / ["node:stream"](https://oven-sh.github.io/bun-types/modules/node_stream_.md) / StreamOptions

# Interface: StreamOptions<T\>

["node:stream"](https://oven-sh.github.io/bun-types/modules/node_stream_.md).StreamOptions

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Stream`](https://oven-sh.github.io/bun-types/classes/stream_.Stream.md) |

## Hierarchy

- [`Abortable`](https://oven-sh.github.io/bun-types/interfaces/events_.EventEmitter.Abortable.md)

  ↳ **`StreamOptions`**

## Table of contents

### Properties

- [autoDestroy](https://oven-sh.github.io/bun-types/interfaces/node_stream_.StreamOptions.md#autodestroy)
- [emitClose](https://oven-sh.github.io/bun-types/interfaces/node_stream_.StreamOptions.md#emitclose)
- [highWaterMark](https://oven-sh.github.io/bun-types/interfaces/node_stream_.StreamOptions.md#highwatermark)
- [objectMode](https://oven-sh.github.io/bun-types/interfaces/node_stream_.StreamOptions.md#objectmode)
- [signal](https://oven-sh.github.io/bun-types/interfaces/node_stream_.StreamOptions.md#signal)

### Methods

- [construct](https://oven-sh.github.io/bun-types/interfaces/node_stream_.StreamOptions.md#construct)
- [destroy](https://oven-sh.github.io/bun-types/interfaces/node_stream_.StreamOptions.md#destroy)

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

• `Optional` **signal**: [`AbortSignal`](https://oven-sh.github.io/bun-types/modules.md#abortsignal)

When provided the corresponding `AbortController` can be used to cancel an asynchronous action.

#### Inherited from

[Abortable](https://oven-sh.github.io/bun-types/interfaces/events_.EventEmitter.Abortable.md).[signal](https://oven-sh.github.io/bun-types/interfaces/events_.EventEmitter.Abortable.md#signal)

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
