[bun-types](https://oven-sh.github.io/bun-types/README.md) / [Exports](https://oven-sh.github.io/bun-types/modules.md) / ["node:stream"](https://oven-sh.github.io/bun-types/modules/node_stream_.md) / DuplexOptions

# Interface: DuplexOptions

["node:stream"](https://oven-sh.github.io/bun-types/modules/node_stream_.md).DuplexOptions

## Hierarchy

- [`ReadableOptions`](https://oven-sh.github.io/bun-types/interfaces/stream_.ReadableOptions.md)

- [`WritableOptions`](https://oven-sh.github.io/bun-types/interfaces/stream_.WritableOptions.md)

  ↳ **`DuplexOptions`**

## Table of contents

### Properties

- [allowHalfOpen](https://oven-sh.github.io/bun-types/interfaces/node_stream_.DuplexOptions.md#allowhalfopen)
- [autoDestroy](https://oven-sh.github.io/bun-types/interfaces/node_stream_.DuplexOptions.md#autodestroy)
- [decodeStrings](https://oven-sh.github.io/bun-types/interfaces/node_stream_.DuplexOptions.md#decodestrings)
- [defaultEncoding](https://oven-sh.github.io/bun-types/interfaces/node_stream_.DuplexOptions.md#defaultencoding)
- [emitClose](https://oven-sh.github.io/bun-types/interfaces/node_stream_.DuplexOptions.md#emitclose)
- [encoding](https://oven-sh.github.io/bun-types/interfaces/node_stream_.DuplexOptions.md#encoding)
- [highWaterMark](https://oven-sh.github.io/bun-types/interfaces/node_stream_.DuplexOptions.md#highwatermark)
- [objectMode](https://oven-sh.github.io/bun-types/interfaces/node_stream_.DuplexOptions.md#objectmode)
- [readableHighWaterMark](https://oven-sh.github.io/bun-types/interfaces/node_stream_.DuplexOptions.md#readablehighwatermark)
- [readableObjectMode](https://oven-sh.github.io/bun-types/interfaces/node_stream_.DuplexOptions.md#readableobjectmode)
- [signal](https://oven-sh.github.io/bun-types/interfaces/node_stream_.DuplexOptions.md#signal)
- [writableCorked](https://oven-sh.github.io/bun-types/interfaces/node_stream_.DuplexOptions.md#writablecorked)
- [writableHighWaterMark](https://oven-sh.github.io/bun-types/interfaces/node_stream_.DuplexOptions.md#writablehighwatermark)
- [writableObjectMode](https://oven-sh.github.io/bun-types/interfaces/node_stream_.DuplexOptions.md#writableobjectmode)

### Methods

- [construct](https://oven-sh.github.io/bun-types/interfaces/node_stream_.DuplexOptions.md#construct)
- [destroy](https://oven-sh.github.io/bun-types/interfaces/node_stream_.DuplexOptions.md#destroy)
- [final](https://oven-sh.github.io/bun-types/interfaces/node_stream_.DuplexOptions.md#final)
- [read](https://oven-sh.github.io/bun-types/interfaces/node_stream_.DuplexOptions.md#read)
- [write](https://oven-sh.github.io/bun-types/interfaces/node_stream_.DuplexOptions.md#write)
- [writev](https://oven-sh.github.io/bun-types/interfaces/node_stream_.DuplexOptions.md#writev)

## Properties

### allowHalfOpen

• `Optional` **allowHalfOpen**: `boolean`

___

### autoDestroy

• `Optional` **autoDestroy**: `boolean`

#### Inherited from

[WritableOptions](https://oven-sh.github.io/bun-types/interfaces/stream_.WritableOptions.md).[autoDestroy](https://oven-sh.github.io/bun-types/interfaces/stream_.WritableOptions.md#autodestroy)

___

### decodeStrings

• `Optional` **decodeStrings**: `boolean`

#### Inherited from

[WritableOptions](https://oven-sh.github.io/bun-types/interfaces/stream_.WritableOptions.md).[decodeStrings](https://oven-sh.github.io/bun-types/interfaces/stream_.WritableOptions.md#decodestrings)

___

### defaultEncoding

• `Optional` **defaultEncoding**: `BufferEncoding`

#### Inherited from

[WritableOptions](https://oven-sh.github.io/bun-types/interfaces/stream_.WritableOptions.md).[defaultEncoding](https://oven-sh.github.io/bun-types/interfaces/stream_.WritableOptions.md#defaultencoding)

___

### emitClose

• `Optional` **emitClose**: `boolean`

#### Inherited from

[WritableOptions](https://oven-sh.github.io/bun-types/interfaces/stream_.WritableOptions.md).[emitClose](https://oven-sh.github.io/bun-types/interfaces/stream_.WritableOptions.md#emitclose)

___

### encoding

• `Optional` **encoding**: `BufferEncoding`

#### Inherited from

[ReadableOptions](https://oven-sh.github.io/bun-types/interfaces/stream_.ReadableOptions.md).[encoding](https://oven-sh.github.io/bun-types/interfaces/stream_.ReadableOptions.md#encoding)

___

### highWaterMark

• `Optional` **highWaterMark**: `number`

#### Inherited from

[WritableOptions](https://oven-sh.github.io/bun-types/interfaces/stream_.WritableOptions.md).[highWaterMark](https://oven-sh.github.io/bun-types/interfaces/stream_.WritableOptions.md#highwatermark)

___

### objectMode

• `Optional` **objectMode**: `boolean`

#### Inherited from

[WritableOptions](https://oven-sh.github.io/bun-types/interfaces/stream_.WritableOptions.md).[objectMode](https://oven-sh.github.io/bun-types/interfaces/stream_.WritableOptions.md#objectmode)

___

### readableHighWaterMark

• `Optional` **readableHighWaterMark**: `number`

___

### readableObjectMode

• `Optional` **readableObjectMode**: `boolean`

___

### signal

• `Optional` **signal**: [`AbortSignal`](https://oven-sh.github.io/bun-types/modules.md#abortsignal)

When provided the corresponding `AbortController` can be used to cancel an asynchronous action.

#### Inherited from

[WritableOptions](https://oven-sh.github.io/bun-types/interfaces/stream_.WritableOptions.md).[signal](https://oven-sh.github.io/bun-types/interfaces/stream_.WritableOptions.md#signal)

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
| `this` | [`Duplex`](https://oven-sh.github.io/bun-types/classes/stream_.Duplex.md) |
| `callback` | (`error?`: `Error`) => `void` |

#### Returns

`void`

#### Overrides

[WritableOptions](https://oven-sh.github.io/bun-types/interfaces/stream_.WritableOptions.md).[construct](https://oven-sh.github.io/bun-types/interfaces/stream_.WritableOptions.md#construct)

___

### destroy

▸ `Optional` **destroy**(`this`, `error`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | [`Duplex`](https://oven-sh.github.io/bun-types/classes/stream_.Duplex.md) |
| `error` | `Error` |
| `callback` | (`error`: `Error`) => `void` |

#### Returns

`void`

#### Overrides

[WritableOptions](https://oven-sh.github.io/bun-types/interfaces/stream_.WritableOptions.md).[destroy](https://oven-sh.github.io/bun-types/interfaces/stream_.WritableOptions.md#destroy)

___

### final

▸ `Optional` **final**(`this`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | [`Duplex`](https://oven-sh.github.io/bun-types/classes/stream_.Duplex.md) |
| `callback` | (`error?`: `Error`) => `void` |

#### Returns

`void`

#### Overrides

[WritableOptions](https://oven-sh.github.io/bun-types/interfaces/stream_.WritableOptions.md).[final](https://oven-sh.github.io/bun-types/interfaces/stream_.WritableOptions.md#final)

___

### read

▸ `Optional` **read**(`this`, `size`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | [`Duplex`](https://oven-sh.github.io/bun-types/classes/stream_.Duplex.md) |
| `size` | `number` |

#### Returns

`void`

#### Overrides

[ReadableOptions](https://oven-sh.github.io/bun-types/interfaces/stream_.ReadableOptions.md).[read](https://oven-sh.github.io/bun-types/interfaces/stream_.ReadableOptions.md#read)

___

### write

▸ `Optional` **write**(`this`, `chunk`, `encoding`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | [`Duplex`](https://oven-sh.github.io/bun-types/classes/stream_.Duplex.md) |
| `chunk` | `any` |
| `encoding` | `BufferEncoding` |
| `callback` | (`error?`: `Error`) => `void` |

#### Returns

`void`

#### Overrides

[WritableOptions](https://oven-sh.github.io/bun-types/interfaces/stream_.WritableOptions.md).[write](https://oven-sh.github.io/bun-types/interfaces/stream_.WritableOptions.md#write)

___

### writev

▸ `Optional` **writev**(`this`, `chunks`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | [`Duplex`](https://oven-sh.github.io/bun-types/classes/stream_.Duplex.md) |
| `chunks` | { `chunk`: `any` ; `encoding`: `BufferEncoding`  }[] |
| `callback` | (`error?`: `Error`) => `void` |

#### Returns

`void`

#### Overrides

[WritableOptions](https://oven-sh.github.io/bun-types/interfaces/stream_.WritableOptions.md).[writev](https://oven-sh.github.io/bun-types/interfaces/stream_.WritableOptions.md#writev)
