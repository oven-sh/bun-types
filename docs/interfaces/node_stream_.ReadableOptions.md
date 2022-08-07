[bun-types](https://github.com/oven-sh/bun-types/blob/master/api-docs/README.md) / [Exports](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules.md) / ["node:stream"](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/node_stream_.md) / ReadableOptions

# Interface: ReadableOptions

["node:stream"](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/node_stream_.md).ReadableOptions

## Hierarchy

- [`StreamOptions`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/stream_.StreamOptions.md)<[`Readable`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/stream_.Readable.md)\>

  ↳ **`ReadableOptions`**

## Table of contents

### Properties

- [autoDestroy](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/node_stream_.ReadableOptions.md#autodestroy)
- [emitClose](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/node_stream_.ReadableOptions.md#emitclose)
- [encoding](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/node_stream_.ReadableOptions.md#encoding)
- [highWaterMark](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/node_stream_.ReadableOptions.md#highwatermark)
- [objectMode](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/node_stream_.ReadableOptions.md#objectmode)
- [signal](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/node_stream_.ReadableOptions.md#signal)

### Methods

- [construct](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/node_stream_.ReadableOptions.md#construct)
- [destroy](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/node_stream_.ReadableOptions.md#destroy)
- [read](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/node_stream_.ReadableOptions.md#read)

## Properties

### autoDestroy

• `Optional` **autoDestroy**: `boolean`

#### Inherited from

[StreamOptions](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/stream_.StreamOptions.md).[autoDestroy](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/stream_.StreamOptions.md#autodestroy)

___

### emitClose

• `Optional` **emitClose**: `boolean`

#### Inherited from

[StreamOptions](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/stream_.StreamOptions.md).[emitClose](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/stream_.StreamOptions.md#emitclose)

___

### encoding

• `Optional` **encoding**: `BufferEncoding`

___

### highWaterMark

• `Optional` **highWaterMark**: `number`

#### Inherited from

[StreamOptions](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/stream_.StreamOptions.md).[highWaterMark](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/stream_.StreamOptions.md#highwatermark)

___

### objectMode

• `Optional` **objectMode**: `boolean`

#### Inherited from

[StreamOptions](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/stream_.StreamOptions.md).[objectMode](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/stream_.StreamOptions.md#objectmode)

___

### signal

• `Optional` **signal**: [`AbortSignal`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules.md#abortsignal)

When provided the corresponding `AbortController` can be used to cancel an asynchronous action.

#### Inherited from

[StreamOptions](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/stream_.StreamOptions.md).[signal](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/stream_.StreamOptions.md#signal)

## Methods

### construct

▸ `Optional` **construct**(`this`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | [`Readable`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/stream_.Readable.md)<`any`\> |
| `callback` | (`error?`: `Error`) => `void` |

#### Returns

`void`

#### Inherited from

[StreamOptions](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/stream_.StreamOptions.md).[construct](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/stream_.StreamOptions.md#construct)

___

### destroy

▸ `Optional` **destroy**(`this`, `error`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | [`Readable`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/stream_.Readable.md)<`any`\> |
| `error` | `Error` |
| `callback` | (`error`: `Error`) => `void` |

#### Returns

`void`

#### Inherited from

[StreamOptions](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/stream_.StreamOptions.md).[destroy](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/stream_.StreamOptions.md#destroy)

___

### read

▸ `Optional` **read**(`this`, `size`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | [`Readable`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/stream_.Readable.md)<`any`\> |
| `size` | `number` |

#### Returns

`void`
