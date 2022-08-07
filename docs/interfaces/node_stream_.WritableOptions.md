[bun-types](https://github.com/oven-sh/bun-types/blob/master/api-docs/README.md) / [Exports](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules.md) / ["node:stream"](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/node_stream_.md) / WritableOptions

# Interface: WritableOptions

["node:stream"](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/node_stream_.md).WritableOptions

## Hierarchy

- [`StreamOptions`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/stream_.StreamOptions.md)<[`Writable`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/stream_.Writable.md)\>

  ↳ **`WritableOptions`**

## Table of contents

### Properties

- [autoDestroy](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/node_stream_.WritableOptions.md#autodestroy)
- [decodeStrings](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/node_stream_.WritableOptions.md#decodestrings)
- [defaultEncoding](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/node_stream_.WritableOptions.md#defaultencoding)
- [emitClose](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/node_stream_.WritableOptions.md#emitclose)
- [highWaterMark](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/node_stream_.WritableOptions.md#highwatermark)
- [objectMode](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/node_stream_.WritableOptions.md#objectmode)
- [signal](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/node_stream_.WritableOptions.md#signal)

### Methods

- [construct](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/node_stream_.WritableOptions.md#construct)
- [destroy](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/node_stream_.WritableOptions.md#destroy)
- [final](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/node_stream_.WritableOptions.md#final)
- [write](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/node_stream_.WritableOptions.md#write)
- [writev](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/node_stream_.WritableOptions.md#writev)

## Properties

### autoDestroy

• `Optional` **autoDestroy**: `boolean`

#### Inherited from

[StreamOptions](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/stream_.StreamOptions.md).[autoDestroy](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/stream_.StreamOptions.md#autodestroy)

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

[StreamOptions](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/stream_.StreamOptions.md).[emitClose](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/stream_.StreamOptions.md#emitclose)

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
| `this` | [`Writable`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/stream_.Writable.md)<`any`\> |
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
| `this` | [`Writable`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/stream_.Writable.md)<`any`\> |
| `error` | `Error` |
| `callback` | (`error`: `Error`) => `void` |

#### Returns

`void`

#### Inherited from

[StreamOptions](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/stream_.StreamOptions.md).[destroy](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/stream_.StreamOptions.md#destroy)

___

### final

▸ `Optional` **final**(`this`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | [`Writable`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/stream_.Writable.md)<`any`\> |
| `callback` | (`error?`: `Error`) => `void` |

#### Returns

`void`

___

### write

▸ `Optional` **write**(`this`, `chunk`, `encoding`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | [`Writable`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/stream_.Writable.md)<`any`\> |
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
| `this` | [`Writable`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/stream_.Writable.md)<`any`\> |
| `chunks` | { `chunk`: `any` ; `encoding`: `BufferEncoding`  }[] |
| `callback` | (`error?`: `Error`) => `void` |

#### Returns

`void`
