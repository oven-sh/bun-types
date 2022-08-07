[bun-types](https://oven-sh.github.io/bun-types/README.md) / [Exports](https://oven-sh.github.io/bun-types/modules.md) / ["stream"](https://oven-sh.github.io/bun-types/modules/stream_.md) / TransformOptions

# Interface: TransformOptions

["stream"](https://oven-sh.github.io/bun-types/modules/stream_.md).TransformOptions

## Hierarchy

- [`DuplexOptions`](https://oven-sh.github.io/bun-types/interfaces/stream_.DuplexOptions.md)

  ↳ **`TransformOptions`**

  ↳↳ [`HashOptions`](https://oven-sh.github.io/bun-types/interfaces/crypto_.HashOptions.md)

  ↳↳ [`CipherCCMOptions`](https://oven-sh.github.io/bun-types/interfaces/crypto_.CipherCCMOptions.md)

  ↳↳ [`CipherGCMOptions`](https://oven-sh.github.io/bun-types/interfaces/crypto_.CipherGCMOptions.md)

  ↳↳ [`CipherOCBOptions`](https://oven-sh.github.io/bun-types/interfaces/crypto_.CipherOCBOptions.md)

  ↳↳ [`HashOptions`](https://oven-sh.github.io/bun-types/interfaces/node_crypto_.HashOptions.md)

  ↳↳ [`CipherCCMOptions`](https://oven-sh.github.io/bun-types/interfaces/node_crypto_.CipherCCMOptions.md)

  ↳↳ [`CipherGCMOptions`](https://oven-sh.github.io/bun-types/interfaces/node_crypto_.CipherGCMOptions.md)

  ↳↳ [`CipherOCBOptions`](https://oven-sh.github.io/bun-types/interfaces/node_crypto_.CipherOCBOptions.md)

## Table of contents

### Properties

- [allowHalfOpen](https://oven-sh.github.io/bun-types/interfaces/stream_.TransformOptions.md#allowhalfopen)
- [autoDestroy](https://oven-sh.github.io/bun-types/interfaces/stream_.TransformOptions.md#autodestroy)
- [decodeStrings](https://oven-sh.github.io/bun-types/interfaces/stream_.TransformOptions.md#decodestrings)
- [defaultEncoding](https://oven-sh.github.io/bun-types/interfaces/stream_.TransformOptions.md#defaultencoding)
- [emitClose](https://oven-sh.github.io/bun-types/interfaces/stream_.TransformOptions.md#emitclose)
- [encoding](https://oven-sh.github.io/bun-types/interfaces/stream_.TransformOptions.md#encoding)
- [highWaterMark](https://oven-sh.github.io/bun-types/interfaces/stream_.TransformOptions.md#highwatermark)
- [objectMode](https://oven-sh.github.io/bun-types/interfaces/stream_.TransformOptions.md#objectmode)
- [readableHighWaterMark](https://oven-sh.github.io/bun-types/interfaces/stream_.TransformOptions.md#readablehighwatermark)
- [readableObjectMode](https://oven-sh.github.io/bun-types/interfaces/stream_.TransformOptions.md#readableobjectmode)
- [signal](https://oven-sh.github.io/bun-types/interfaces/stream_.TransformOptions.md#signal)
- [writableCorked](https://oven-sh.github.io/bun-types/interfaces/stream_.TransformOptions.md#writablecorked)
- [writableHighWaterMark](https://oven-sh.github.io/bun-types/interfaces/stream_.TransformOptions.md#writablehighwatermark)
- [writableObjectMode](https://oven-sh.github.io/bun-types/interfaces/stream_.TransformOptions.md#writableobjectmode)

### Methods

- [construct](https://oven-sh.github.io/bun-types/interfaces/stream_.TransformOptions.md#construct)
- [destroy](https://oven-sh.github.io/bun-types/interfaces/stream_.TransformOptions.md#destroy)
- [final](https://oven-sh.github.io/bun-types/interfaces/stream_.TransformOptions.md#final)
- [flush](https://oven-sh.github.io/bun-types/interfaces/stream_.TransformOptions.md#flush)
- [read](https://oven-sh.github.io/bun-types/interfaces/stream_.TransformOptions.md#read)
- [transform](https://oven-sh.github.io/bun-types/interfaces/stream_.TransformOptions.md#transform)
- [write](https://oven-sh.github.io/bun-types/interfaces/stream_.TransformOptions.md#write)
- [writev](https://oven-sh.github.io/bun-types/interfaces/stream_.TransformOptions.md#writev)

## Properties

### allowHalfOpen

• `Optional` **allowHalfOpen**: `boolean`

#### Inherited from

[DuplexOptions](https://oven-sh.github.io/bun-types/interfaces/stream_.DuplexOptions.md).[allowHalfOpen](https://oven-sh.github.io/bun-types/interfaces/stream_.DuplexOptions.md#allowhalfopen)

___

### autoDestroy

• `Optional` **autoDestroy**: `boolean`

#### Inherited from

[DuplexOptions](https://oven-sh.github.io/bun-types/interfaces/stream_.DuplexOptions.md).[autoDestroy](https://oven-sh.github.io/bun-types/interfaces/stream_.DuplexOptions.md#autodestroy)

___

### decodeStrings

• `Optional` **decodeStrings**: `boolean`

#### Inherited from

[DuplexOptions](https://oven-sh.github.io/bun-types/interfaces/stream_.DuplexOptions.md).[decodeStrings](https://oven-sh.github.io/bun-types/interfaces/stream_.DuplexOptions.md#decodestrings)

___

### defaultEncoding

• `Optional` **defaultEncoding**: `BufferEncoding`

#### Inherited from

[DuplexOptions](https://oven-sh.github.io/bun-types/interfaces/stream_.DuplexOptions.md).[defaultEncoding](https://oven-sh.github.io/bun-types/interfaces/stream_.DuplexOptions.md#defaultencoding)

___

### emitClose

• `Optional` **emitClose**: `boolean`

#### Inherited from

[DuplexOptions](https://oven-sh.github.io/bun-types/interfaces/stream_.DuplexOptions.md).[emitClose](https://oven-sh.github.io/bun-types/interfaces/stream_.DuplexOptions.md#emitclose)

___

### encoding

• `Optional` **encoding**: `BufferEncoding`

#### Inherited from

[DuplexOptions](https://oven-sh.github.io/bun-types/interfaces/stream_.DuplexOptions.md).[encoding](https://oven-sh.github.io/bun-types/interfaces/stream_.DuplexOptions.md#encoding)

___

### highWaterMark

• `Optional` **highWaterMark**: `number`

#### Inherited from

[DuplexOptions](https://oven-sh.github.io/bun-types/interfaces/stream_.DuplexOptions.md).[highWaterMark](https://oven-sh.github.io/bun-types/interfaces/stream_.DuplexOptions.md#highwatermark)

___

### objectMode

• `Optional` **objectMode**: `boolean`

#### Inherited from

[DuplexOptions](https://oven-sh.github.io/bun-types/interfaces/stream_.DuplexOptions.md).[objectMode](https://oven-sh.github.io/bun-types/interfaces/stream_.DuplexOptions.md#objectmode)

___

### readableHighWaterMark

• `Optional` **readableHighWaterMark**: `number`

#### Inherited from

[DuplexOptions](https://oven-sh.github.io/bun-types/interfaces/stream_.DuplexOptions.md).[readableHighWaterMark](https://oven-sh.github.io/bun-types/interfaces/stream_.DuplexOptions.md#readablehighwatermark)

___

### readableObjectMode

• `Optional` **readableObjectMode**: `boolean`

#### Inherited from

[DuplexOptions](https://oven-sh.github.io/bun-types/interfaces/stream_.DuplexOptions.md).[readableObjectMode](https://oven-sh.github.io/bun-types/interfaces/stream_.DuplexOptions.md#readableobjectmode)

___

### signal

• `Optional` **signal**: [`AbortSignal`](https://oven-sh.github.io/bun-types/modules.md#abortsignal)

When provided the corresponding `AbortController` can be used to cancel an asynchronous action.

#### Inherited from

[DuplexOptions](https://oven-sh.github.io/bun-types/interfaces/stream_.DuplexOptions.md).[signal](https://oven-sh.github.io/bun-types/interfaces/stream_.DuplexOptions.md#signal)

___

### writableCorked

• `Optional` **writableCorked**: `number`

#### Inherited from

[DuplexOptions](https://oven-sh.github.io/bun-types/interfaces/stream_.DuplexOptions.md).[writableCorked](https://oven-sh.github.io/bun-types/interfaces/stream_.DuplexOptions.md#writablecorked)

___

### writableHighWaterMark

• `Optional` **writableHighWaterMark**: `number`

#### Inherited from

[DuplexOptions](https://oven-sh.github.io/bun-types/interfaces/stream_.DuplexOptions.md).[writableHighWaterMark](https://oven-sh.github.io/bun-types/interfaces/stream_.DuplexOptions.md#writablehighwatermark)

___

### writableObjectMode

• `Optional` **writableObjectMode**: `boolean`

#### Inherited from

[DuplexOptions](https://oven-sh.github.io/bun-types/interfaces/stream_.DuplexOptions.md).[writableObjectMode](https://oven-sh.github.io/bun-types/interfaces/stream_.DuplexOptions.md#writableobjectmode)

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

#### Overrides

[DuplexOptions](https://oven-sh.github.io/bun-types/interfaces/stream_.DuplexOptions.md).[construct](https://oven-sh.github.io/bun-types/interfaces/stream_.DuplexOptions.md#construct)

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

#### Overrides

[DuplexOptions](https://oven-sh.github.io/bun-types/interfaces/stream_.DuplexOptions.md).[destroy](https://oven-sh.github.io/bun-types/interfaces/stream_.DuplexOptions.md#destroy)

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

#### Overrides

[DuplexOptions](https://oven-sh.github.io/bun-types/interfaces/stream_.DuplexOptions.md).[final](https://oven-sh.github.io/bun-types/interfaces/stream_.DuplexOptions.md#final)

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

#### Overrides

[DuplexOptions](https://oven-sh.github.io/bun-types/interfaces/stream_.DuplexOptions.md).[read](https://oven-sh.github.io/bun-types/interfaces/stream_.DuplexOptions.md#read)

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

#### Overrides

[DuplexOptions](https://oven-sh.github.io/bun-types/interfaces/stream_.DuplexOptions.md).[write](https://oven-sh.github.io/bun-types/interfaces/stream_.DuplexOptions.md#write)

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

#### Overrides

[DuplexOptions](https://oven-sh.github.io/bun-types/interfaces/stream_.DuplexOptions.md).[writev](https://oven-sh.github.io/bun-types/interfaces/stream_.DuplexOptions.md#writev)
