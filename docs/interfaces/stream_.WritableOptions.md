[bun-types](https://oven-sh.github.io/bun-types/README.md) / [Exports](https://oven-sh.github.io/bun-types/modules.md) / ["stream"](https://oven-sh.github.io/bun-types/modules/stream_.md) / WritableOptions

# Interface: WritableOptions

["stream"](https://oven-sh.github.io/bun-types/modules/stream_.md).WritableOptions

## Hierarchy

- [`StreamOptions`](https://oven-sh.github.io/bun-types/interfaces/stream_.StreamOptions.md)<[`Writable`](https://oven-sh.github.io/bun-types/classes/stream_.Writable.md)\>

  ↳ **`WritableOptions`**

  ↳↳ [`DuplexOptions`](https://oven-sh.github.io/bun-types/interfaces/stream_.DuplexOptions.md)

  ↳↳ [`DuplexOptions`](https://oven-sh.github.io/bun-types/interfaces/node_stream_.DuplexOptions.md)

## Table of contents

### Properties

- [autoDestroy](https://oven-sh.github.io/bun-types/interfaces/stream_.WritableOptions.md#autodestroy)
- [decodeStrings](https://oven-sh.github.io/bun-types/interfaces/stream_.WritableOptions.md#decodestrings)
- [defaultEncoding](https://oven-sh.github.io/bun-types/interfaces/stream_.WritableOptions.md#defaultencoding)
- [emitClose](https://oven-sh.github.io/bun-types/interfaces/stream_.WritableOptions.md#emitclose)
- [highWaterMark](https://oven-sh.github.io/bun-types/interfaces/stream_.WritableOptions.md#highwatermark)
- [objectMode](https://oven-sh.github.io/bun-types/interfaces/stream_.WritableOptions.md#objectmode)
- [signal](https://oven-sh.github.io/bun-types/interfaces/stream_.WritableOptions.md#signal)

### Methods

- [construct](https://oven-sh.github.io/bun-types/interfaces/stream_.WritableOptions.md#construct)
- [destroy](https://oven-sh.github.io/bun-types/interfaces/stream_.WritableOptions.md#destroy)
- [final](https://oven-sh.github.io/bun-types/interfaces/stream_.WritableOptions.md#final)
- [write](https://oven-sh.github.io/bun-types/interfaces/stream_.WritableOptions.md#write)
- [writev](https://oven-sh.github.io/bun-types/interfaces/stream_.WritableOptions.md#writev)

## Properties

### autoDestroy

• `Optional` **autoDestroy**: `boolean`

#### Inherited from

[StreamOptions](https://oven-sh.github.io/bun-types/interfaces/stream_.StreamOptions.md).[autoDestroy](https://oven-sh.github.io/bun-types/interfaces/stream_.StreamOptions.md#autodestroy)

___

### decodeStrings

• `Optional` **decodeStrings**: `boolean`

___

### defaultEncoding

• `Optional` **defaultEncoding**: `BufferEncoding`

___

### emitClose

• `Optional` **emitClose**: `boolean`

#### Inherited from

[StreamOptions](https://oven-sh.github.io/bun-types/interfaces/stream_.StreamOptions.md).[emitClose](https://oven-sh.github.io/bun-types/interfaces/stream_.StreamOptions.md#emitclose)

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
| `this` | [`Writable`](https://oven-sh.github.io/bun-types/classes/stream_.Writable.md)<`any`\> |
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
| `this` | [`Writable`](https://oven-sh.github.io/bun-types/classes/stream_.Writable.md)<`any`\> |
| `error` | `Error` |
| `callback` | (`error`: `Error`) => `void` |

#### Returns

`void`

#### Inherited from

[StreamOptions](https://oven-sh.github.io/bun-types/interfaces/stream_.StreamOptions.md).[destroy](https://oven-sh.github.io/bun-types/interfaces/stream_.StreamOptions.md#destroy)

___

### final

▸ `Optional` **final**(`this`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | [`Writable`](https://oven-sh.github.io/bun-types/classes/stream_.Writable.md)<`any`\> |
| `callback` | (`error?`: `Error`) => `void` |

#### Returns

`void`

___

### write

▸ `Optional` **write**(`this`, `chunk`, `encoding`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | [`Writable`](https://oven-sh.github.io/bun-types/classes/stream_.Writable.md)<`any`\> |
| `chunk` | `any` |
| `encoding` | `BufferEncoding` |
| `callback` | (`error?`: `Error`) => `void` |

#### Returns

`void`

___

### writev

▸ `Optional` **writev**(`this`, `chunks`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | [`Writable`](https://oven-sh.github.io/bun-types/classes/stream_.Writable.md)<`any`\> |
| `chunks` | { `chunk`: `any` ; `encoding`: `BufferEncoding`  }[] |
| `callback` | (`error?`: `Error`) => `void` |

#### Returns

`void`
