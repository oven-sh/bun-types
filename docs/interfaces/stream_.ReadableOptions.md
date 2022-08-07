[bun-types](https://oven-sh.github.io/bun-types/README.md) / [Exports](https://oven-sh.github.io/bun-types/modules.md) / ["stream"](https://oven-sh.github.io/bun-types/modules/stream_.md) / ReadableOptions

# Interface: ReadableOptions

["stream"](https://oven-sh.github.io/bun-types/modules/stream_.md).ReadableOptions

## Hierarchy

- [`StreamOptions`](https://oven-sh.github.io/bun-types/interfaces/stream_.StreamOptions.md)<[`Readable`](https://oven-sh.github.io/bun-types/classes/stream_.Readable.md)\>

  ↳ **`ReadableOptions`**

  ↳↳ [`DuplexOptions`](https://oven-sh.github.io/bun-types/interfaces/stream_.DuplexOptions.md)

  ↳↳ [`DuplexOptions`](https://oven-sh.github.io/bun-types/interfaces/node_stream_.DuplexOptions.md)

## Table of contents

### Properties

- [autoDestroy](https://oven-sh.github.io/bun-types/interfaces/stream_.ReadableOptions.md#autodestroy)
- [emitClose](https://oven-sh.github.io/bun-types/interfaces/stream_.ReadableOptions.md#emitclose)
- [encoding](https://oven-sh.github.io/bun-types/interfaces/stream_.ReadableOptions.md#encoding)
- [highWaterMark](https://oven-sh.github.io/bun-types/interfaces/stream_.ReadableOptions.md#highwatermark)
- [objectMode](https://oven-sh.github.io/bun-types/interfaces/stream_.ReadableOptions.md#objectmode)
- [signal](https://oven-sh.github.io/bun-types/interfaces/stream_.ReadableOptions.md#signal)

### Methods

- [construct](https://oven-sh.github.io/bun-types/interfaces/stream_.ReadableOptions.md#construct)
- [destroy](https://oven-sh.github.io/bun-types/interfaces/stream_.ReadableOptions.md#destroy)
- [read](https://oven-sh.github.io/bun-types/interfaces/stream_.ReadableOptions.md#read)

## Properties

### autoDestroy

• `Optional` **autoDestroy**: `boolean`

#### Inherited from

[StreamOptions](https://oven-sh.github.io/bun-types/interfaces/stream_.StreamOptions.md).[autoDestroy](https://oven-sh.github.io/bun-types/interfaces/stream_.StreamOptions.md#autodestroy)

___

### emitClose

• `Optional` **emitClose**: `boolean`

#### Inherited from

[StreamOptions](https://oven-sh.github.io/bun-types/interfaces/stream_.StreamOptions.md).[emitClose](https://oven-sh.github.io/bun-types/interfaces/stream_.StreamOptions.md#emitclose)

___

### encoding

• `Optional` **encoding**: `BufferEncoding`

___

### highWaterMark

• `Optional` **highWaterMark**: `number`

#### Inherited from

[StreamOptions](https://oven-sh.github.io/bun-types/interfaces/stream_.StreamOptions.md).[highWaterMark](https://oven-sh.github.io/bun-types/interfaces/stream_.StreamOptions.md#highwatermark)

___

### objectMode

• `Optional` **objectMode**: `boolean`

#### Inherited from

[StreamOptions](https://oven-sh.github.io/bun-types/interfaces/stream_.StreamOptions.md).[objectMode](https://oven-sh.github.io/bun-types/interfaces/stream_.StreamOptions.md#objectmode)

___

### signal

• `Optional` **signal**: [`AbortSignal`](https://oven-sh.github.io/bun-types/modules.md#abortsignal)

When provided the corresponding `AbortController` can be used to cancel an asynchronous action.

#### Inherited from

[StreamOptions](https://oven-sh.github.io/bun-types/interfaces/stream_.StreamOptions.md).[signal](https://oven-sh.github.io/bun-types/interfaces/stream_.StreamOptions.md#signal)

## Methods

### construct

▸ `Optional` **construct**(`this`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | [`Readable`](https://oven-sh.github.io/bun-types/classes/stream_.Readable.md)<`any`\> |
| `callback` | (`error?`: `Error`) => `void` |

#### Returns

`void`

#### Inherited from

[StreamOptions](https://oven-sh.github.io/bun-types/interfaces/stream_.StreamOptions.md).[construct](https://oven-sh.github.io/bun-types/interfaces/stream_.StreamOptions.md#construct)

___

### destroy

▸ `Optional` **destroy**(`this`, `error`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | [`Readable`](https://oven-sh.github.io/bun-types/classes/stream_.Readable.md)<`any`\> |
| `error` | `Error` |
| `callback` | (`error`: `Error`) => `void` |

#### Returns

`void`

#### Inherited from

[StreamOptions](https://oven-sh.github.io/bun-types/interfaces/stream_.StreamOptions.md).[destroy](https://oven-sh.github.io/bun-types/interfaces/stream_.StreamOptions.md#destroy)

___

### read

▸ `Optional` **read**(`this`, `size`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | [`Readable`](https://oven-sh.github.io/bun-types/classes/stream_.Readable.md)<`any`\> |
| `size` | `number` |

#### Returns

`void`
