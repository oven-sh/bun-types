[bun-types](https://github.com/oven-sh/bun-types/blob/master/api-docs/README.md) / [Exports](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules.md) / ["stream"](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/stream_.md) / DuplexOptions

# Interface: DuplexOptions

["stream"](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/stream_.md).DuplexOptions

## Hierarchy

- [`ReadableOptions`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/stream_.ReadableOptions.md)

- [`WritableOptions`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/stream_.WritableOptions.md)

  ↳ **`DuplexOptions`**

  ↳↳ [`TransformOptions`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/stream_.TransformOptions.md)

  ↳↳ [`TransformOptions`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/node_stream_.TransformOptions.md)

## Table of contents

### Properties

- [allowHalfOpen](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/stream_.DuplexOptions.md#allowhalfopen)
- [autoDestroy](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/stream_.DuplexOptions.md#autodestroy)
- [decodeStrings](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/stream_.DuplexOptions.md#decodestrings)
- [defaultEncoding](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/stream_.DuplexOptions.md#defaultencoding)
- [emitClose](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/stream_.DuplexOptions.md#emitclose)
- [encoding](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/stream_.DuplexOptions.md#encoding)
- [highWaterMark](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/stream_.DuplexOptions.md#highwatermark)
- [objectMode](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/stream_.DuplexOptions.md#objectmode)
- [readableHighWaterMark](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/stream_.DuplexOptions.md#readablehighwatermark)
- [readableObjectMode](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/stream_.DuplexOptions.md#readableobjectmode)
- [signal](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/stream_.DuplexOptions.md#signal)
- [writableCorked](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/stream_.DuplexOptions.md#writablecorked)
- [writableHighWaterMark](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/stream_.DuplexOptions.md#writablehighwatermark)
- [writableObjectMode](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/stream_.DuplexOptions.md#writableobjectmode)

### Methods

- [construct](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/stream_.DuplexOptions.md#construct)
- [destroy](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/stream_.DuplexOptions.md#destroy)
- [final](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/stream_.DuplexOptions.md#final)
- [read](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/stream_.DuplexOptions.md#read)
- [write](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/stream_.DuplexOptions.md#write)
- [writev](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/stream_.DuplexOptions.md#writev)

## Properties

### allowHalfOpen

• `Optional` **allowHalfOpen**: `boolean`

___

### autoDestroy

• `Optional` **autoDestroy**: `boolean`

#### Inherited from

[WritableOptions](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/stream_.WritableOptions.md).[autoDestroy](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/stream_.WritableOptions.md#autodestroy)

___

### decodeStrings

• `Optional` **decodeStrings**: `boolean`

#### Inherited from

[WritableOptions](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/stream_.WritableOptions.md).[decodeStrings](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/stream_.WritableOptions.md#decodestrings)

___

### defaultEncoding

• `Optional` **defaultEncoding**: `BufferEncoding`

#### Inherited from

[WritableOptions](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/stream_.WritableOptions.md).[defaultEncoding](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/stream_.WritableOptions.md#defaultencoding)

___

### emitClose

• `Optional` **emitClose**: `boolean`

#### Inherited from

[WritableOptions](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/stream_.WritableOptions.md).[emitClose](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/stream_.WritableOptions.md#emitclose)

___

### encoding

• `Optional` **encoding**: `BufferEncoding`

#### Inherited from

[ReadableOptions](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/stream_.ReadableOptions.md).[encoding](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/stream_.ReadableOptions.md#encoding)

___

### highWaterMark

• `Optional` **highWaterMark**: `number`

#### Inherited from

[WritableOptions](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/stream_.WritableOptions.md).[highWaterMark](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/stream_.WritableOptions.md#highwatermark)

___

### objectMode

• `Optional` **objectMode**: `boolean`

#### Inherited from

[WritableOptions](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/stream_.WritableOptions.md).[objectMode](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/stream_.WritableOptions.md#objectmode)

___

### readableHighWaterMark

• `Optional` **readableHighWaterMark**: `number`

___

### readableObjectMode

• `Optional` **readableObjectMode**: `boolean`

___

### signal

• `Optional` **signal**: [`AbortSignal`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules.md#abortsignal)

When provided the corresponding `AbortController` can be used to cancel an asynchronous action.

#### Inherited from

[WritableOptions](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/stream_.WritableOptions.md).[signal](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/stream_.WritableOptions.md#signal)

___

### writableCorked

• `Optional` **writableCorked**: `number`

___

### writableHighWaterMark

• `Optional` **writableHighWaterMark**: `number`

___

### writableObjectMode

• `Optional` **writableObjectMode**: `boolean`

## Methods

### construct

▸ `Optional` **construct**(`this`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | [`Duplex`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/stream_.Duplex.md) |
| `callback` | (`error?`: `Error`) => `void` |

#### Returns

`void`

#### Overrides

[WritableOptions](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/stream_.WritableOptions.md).[construct](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/stream_.WritableOptions.md#construct)

___

### destroy

▸ `Optional` **destroy**(`this`, `error`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | [`Duplex`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/stream_.Duplex.md) |
| `error` | `Error` |
| `callback` | (`error`: `Error`) => `void` |

#### Returns

`void`

#### Overrides

[WritableOptions](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/stream_.WritableOptions.md).[destroy](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/stream_.WritableOptions.md#destroy)

___

### final

▸ `Optional` **final**(`this`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | [`Duplex`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/stream_.Duplex.md) |
| `callback` | (`error?`: `Error`) => `void` |

#### Returns

`void`

#### Overrides

[WritableOptions](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/stream_.WritableOptions.md).[final](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/stream_.WritableOptions.md#final)

___

### read

▸ `Optional` **read**(`this`, `size`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | [`Duplex`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/stream_.Duplex.md) |
| `size` | `number` |

#### Returns

`void`

#### Overrides

[ReadableOptions](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/stream_.ReadableOptions.md).[read](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/stream_.ReadableOptions.md#read)

___

### write

▸ `Optional` **write**(`this`, `chunk`, `encoding`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | [`Duplex`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/stream_.Duplex.md) |
| `chunk` | `any` |
| `encoding` | `BufferEncoding` |
| `callback` | (`error?`: `Error`) => `void` |

#### Returns

`void`

#### Overrides

[WritableOptions](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/stream_.WritableOptions.md).[write](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/stream_.WritableOptions.md#write)

___

### writev

▸ `Optional` **writev**(`this`, `chunks`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | [`Duplex`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/stream_.Duplex.md) |
| `chunks` | { `chunk`: `any` ; `encoding`: `BufferEncoding`  }[] |
| `callback` | (`error?`: `Error`) => `void` |

#### Returns

`void`

#### Overrides

[WritableOptions](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/stream_.WritableOptions.md).[writev](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/stream_.WritableOptions.md#writev)
