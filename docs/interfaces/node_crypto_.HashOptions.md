[bun-types](https://oven-sh.github.io/bun-types/README.md) / [Exports](https://oven-sh.github.io/bun-types/modules.md) / ["node:crypto"](https://oven-sh.github.io/bun-types/modules/node_crypto_.md) / HashOptions

# Interface: HashOptions

["node:crypto"](https://oven-sh.github.io/bun-types/modules/node_crypto_.md).HashOptions

## Hierarchy

- [`TransformOptions`](https://oven-sh.github.io/bun-types/interfaces/stream_.TransformOptions.md)

  ↳ **`HashOptions`**

## Table of contents

### Properties

- [allowHalfOpen](https://oven-sh.github.io/bun-types/interfaces/node_crypto_.HashOptions.md#allowhalfopen)
- [autoDestroy](https://oven-sh.github.io/bun-types/interfaces/node_crypto_.HashOptions.md#autodestroy)
- [decodeStrings](https://oven-sh.github.io/bun-types/interfaces/node_crypto_.HashOptions.md#decodestrings)
- [defaultEncoding](https://oven-sh.github.io/bun-types/interfaces/node_crypto_.HashOptions.md#defaultencoding)
- [emitClose](https://oven-sh.github.io/bun-types/interfaces/node_crypto_.HashOptions.md#emitclose)
- [encoding](https://oven-sh.github.io/bun-types/interfaces/node_crypto_.HashOptions.md#encoding)
- [highWaterMark](https://oven-sh.github.io/bun-types/interfaces/node_crypto_.HashOptions.md#highwatermark)
- [objectMode](https://oven-sh.github.io/bun-types/interfaces/node_crypto_.HashOptions.md#objectmode)
- [outputLength](https://oven-sh.github.io/bun-types/interfaces/node_crypto_.HashOptions.md#outputlength)
- [readableHighWaterMark](https://oven-sh.github.io/bun-types/interfaces/node_crypto_.HashOptions.md#readablehighwatermark)
- [readableObjectMode](https://oven-sh.github.io/bun-types/interfaces/node_crypto_.HashOptions.md#readableobjectmode)
- [signal](https://oven-sh.github.io/bun-types/interfaces/node_crypto_.HashOptions.md#signal)
- [writableCorked](https://oven-sh.github.io/bun-types/interfaces/node_crypto_.HashOptions.md#writablecorked)
- [writableHighWaterMark](https://oven-sh.github.io/bun-types/interfaces/node_crypto_.HashOptions.md#writablehighwatermark)
- [writableObjectMode](https://oven-sh.github.io/bun-types/interfaces/node_crypto_.HashOptions.md#writableobjectmode)

### Methods

- [construct](https://oven-sh.github.io/bun-types/interfaces/node_crypto_.HashOptions.md#construct)
- [destroy](https://oven-sh.github.io/bun-types/interfaces/node_crypto_.HashOptions.md#destroy)
- [final](https://oven-sh.github.io/bun-types/interfaces/node_crypto_.HashOptions.md#final)
- [flush](https://oven-sh.github.io/bun-types/interfaces/node_crypto_.HashOptions.md#flush)
- [read](https://oven-sh.github.io/bun-types/interfaces/node_crypto_.HashOptions.md#read)
- [transform](https://oven-sh.github.io/bun-types/interfaces/node_crypto_.HashOptions.md#transform)
- [write](https://oven-sh.github.io/bun-types/interfaces/node_crypto_.HashOptions.md#write)
- [writev](https://oven-sh.github.io/bun-types/interfaces/node_crypto_.HashOptions.md#writev)

## Properties

### allowHalfOpen

• `Optional` **allowHalfOpen**: `boolean`

#### Inherited from

[TransformOptions](https://oven-sh.github.io/bun-types/interfaces/stream_.TransformOptions.md).[allowHalfOpen](https://oven-sh.github.io/bun-types/interfaces/stream_.TransformOptions.md#allowhalfopen)

___

### autoDestroy

• `Optional` **autoDestroy**: `boolean`

#### Inherited from

[TransformOptions](https://oven-sh.github.io/bun-types/interfaces/stream_.TransformOptions.md).[autoDestroy](https://oven-sh.github.io/bun-types/interfaces/stream_.TransformOptions.md#autodestroy)

___

### decodeStrings

• `Optional` **decodeStrings**: `boolean`

#### Inherited from

[TransformOptions](https://oven-sh.github.io/bun-types/interfaces/stream_.TransformOptions.md).[decodeStrings](https://oven-sh.github.io/bun-types/interfaces/stream_.TransformOptions.md#decodestrings)

___

### defaultEncoding

• `Optional` **defaultEncoding**: `BufferEncoding`

#### Inherited from

[TransformOptions](https://oven-sh.github.io/bun-types/interfaces/stream_.TransformOptions.md).[defaultEncoding](https://oven-sh.github.io/bun-types/interfaces/stream_.TransformOptions.md#defaultencoding)

___

### emitClose

• `Optional` **emitClose**: `boolean`

#### Inherited from

[TransformOptions](https://oven-sh.github.io/bun-types/interfaces/stream_.TransformOptions.md).[emitClose](https://oven-sh.github.io/bun-types/interfaces/stream_.TransformOptions.md#emitclose)

___

### encoding

• `Optional` **encoding**: `BufferEncoding`

#### Inherited from

[TransformOptions](https://oven-sh.github.io/bun-types/interfaces/stream_.TransformOptions.md).[encoding](https://oven-sh.github.io/bun-types/interfaces/stream_.TransformOptions.md#encoding)

___

### highWaterMark

• `Optional` **highWaterMark**: `number`

#### Inherited from

[TransformOptions](https://oven-sh.github.io/bun-types/interfaces/stream_.TransformOptions.md).[highWaterMark](https://oven-sh.github.io/bun-types/interfaces/stream_.TransformOptions.md#highwatermark)

___

### objectMode

• `Optional` **objectMode**: `boolean`

#### Inherited from

[TransformOptions](https://oven-sh.github.io/bun-types/interfaces/stream_.TransformOptions.md).[objectMode](https://oven-sh.github.io/bun-types/interfaces/stream_.TransformOptions.md#objectmode)

___

### outputLength

• `Optional` **outputLength**: `number`

For XOF hash functions such as `shake256`, the
outputLength option can be used to specify the desired output length in bytes.

___

### readableHighWaterMark

• `Optional` **readableHighWaterMark**: `number`

#### Inherited from

[TransformOptions](https://oven-sh.github.io/bun-types/interfaces/stream_.TransformOptions.md).[readableHighWaterMark](https://oven-sh.github.io/bun-types/interfaces/stream_.TransformOptions.md#readablehighwatermark)

___

### readableObjectMode

• `Optional` **readableObjectMode**: `boolean`

#### Inherited from

[TransformOptions](https://oven-sh.github.io/bun-types/interfaces/stream_.TransformOptions.md).[readableObjectMode](https://oven-sh.github.io/bun-types/interfaces/stream_.TransformOptions.md#readableobjectmode)

___

### signal

• `Optional` **signal**: [`AbortSignal`](https://oven-sh.github.io/bun-types/modules.md#abortsignal)

When provided the corresponding `AbortController` can be used to cancel an asynchronous action.

#### Inherited from

[TransformOptions](https://oven-sh.github.io/bun-types/interfaces/stream_.TransformOptions.md).[signal](https://oven-sh.github.io/bun-types/interfaces/stream_.TransformOptions.md#signal)

___

### writableCorked

• `Optional` **writableCorked**: `number`

#### Inherited from

[TransformOptions](https://oven-sh.github.io/bun-types/interfaces/stream_.TransformOptions.md).[writableCorked](https://oven-sh.github.io/bun-types/interfaces/stream_.TransformOptions.md#writablecorked)

___

### writableHighWaterMark

• `Optional` **writableHighWaterMark**: `number`

#### Inherited from

[TransformOptions](https://oven-sh.github.io/bun-types/interfaces/stream_.TransformOptions.md).[writableHighWaterMark](https://oven-sh.github.io/bun-types/interfaces/stream_.TransformOptions.md#writablehighwatermark)

___

### writableObjectMode

• `Optional` **writableObjectMode**: `boolean`

#### Inherited from

[TransformOptions](https://oven-sh.github.io/bun-types/interfaces/stream_.TransformOptions.md).[writableObjectMode](https://oven-sh.github.io/bun-types/interfaces/stream_.TransformOptions.md#writableobjectmode)

## Methods

### construct

▸ `Optional` **construct**(`this`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | [`Transform`](https://oven-sh.github.io/bun-types/classes/stream_.Transform.md) |
| `callback` | (`error?`: `Error`) => `void` |

#### Returns

`void`

#### Inherited from

[TransformOptions](https://oven-sh.github.io/bun-types/interfaces/stream_.TransformOptions.md).[construct](https://oven-sh.github.io/bun-types/interfaces/stream_.TransformOptions.md#construct)

___

### destroy

▸ `Optional` **destroy**(`this`, `error`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | [`Transform`](https://oven-sh.github.io/bun-types/classes/stream_.Transform.md) |
| `error` | `Error` |
| `callback` | (`error`: `Error`) => `void` |

#### Returns

`void`

#### Inherited from

[TransformOptions](https://oven-sh.github.io/bun-types/interfaces/stream_.TransformOptions.md).[destroy](https://oven-sh.github.io/bun-types/interfaces/stream_.TransformOptions.md#destroy)

___

### final

▸ `Optional` **final**(`this`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | [`Transform`](https://oven-sh.github.io/bun-types/classes/stream_.Transform.md) |
| `callback` | (`error?`: `Error`) => `void` |

#### Returns

`void`

#### Inherited from

[TransformOptions](https://oven-sh.github.io/bun-types/interfaces/stream_.TransformOptions.md).[final](https://oven-sh.github.io/bun-types/interfaces/stream_.TransformOptions.md#final)

___

### flush

▸ `Optional` **flush**(`this`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | [`Transform`](https://oven-sh.github.io/bun-types/classes/stream_.Transform.md) |
| `callback` | [`TransformCallback`](https://oven-sh.github.io/bun-types/modules/stream_.md#transformcallback) |

#### Returns

`void`

#### Inherited from

[TransformOptions](https://oven-sh.github.io/bun-types/interfaces/stream_.TransformOptions.md).[flush](https://oven-sh.github.io/bun-types/interfaces/stream_.TransformOptions.md#flush)

___

### read

▸ `Optional` **read**(`this`, `size`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | [`Transform`](https://oven-sh.github.io/bun-types/classes/stream_.Transform.md) |
| `size` | `number` |

#### Returns

`void`

#### Inherited from

[TransformOptions](https://oven-sh.github.io/bun-types/interfaces/stream_.TransformOptions.md).[read](https://oven-sh.github.io/bun-types/interfaces/stream_.TransformOptions.md#read)

___

### transform

▸ `Optional` **transform**(`this`, `chunk`, `encoding`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | [`Transform`](https://oven-sh.github.io/bun-types/classes/stream_.Transform.md) |
| `chunk` | `any` |
| `encoding` | `BufferEncoding` |
| `callback` | [`TransformCallback`](https://oven-sh.github.io/bun-types/modules/stream_.md#transformcallback) |

#### Returns

`void`

#### Inherited from

[TransformOptions](https://oven-sh.github.io/bun-types/interfaces/stream_.TransformOptions.md).[transform](https://oven-sh.github.io/bun-types/interfaces/stream_.TransformOptions.md#transform)

___

### write

▸ `Optional` **write**(`this`, `chunk`, `encoding`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | [`Transform`](https://oven-sh.github.io/bun-types/classes/stream_.Transform.md) |
| `chunk` | `any` |
| `encoding` | `BufferEncoding` |
| `callback` | (`error?`: `Error`) => `void` |

#### Returns

`void`

#### Inherited from

[TransformOptions](https://oven-sh.github.io/bun-types/interfaces/stream_.TransformOptions.md).[write](https://oven-sh.github.io/bun-types/interfaces/stream_.TransformOptions.md#write)

___

### writev

▸ `Optional` **writev**(`this`, `chunks`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | [`Transform`](https://oven-sh.github.io/bun-types/classes/stream_.Transform.md) |
| `chunks` | { `chunk`: `any` ; `encoding`: `BufferEncoding`  }[] |
| `callback` | (`error?`: `Error`) => `void` |

#### Returns

`void`

#### Inherited from

[TransformOptions](https://oven-sh.github.io/bun-types/interfaces/stream_.TransformOptions.md).[writev](https://oven-sh.github.io/bun-types/interfaces/stream_.TransformOptions.md#writev)
