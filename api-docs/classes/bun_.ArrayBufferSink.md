[bun-types](https://github.com/oven-sh/bun-types/blob/master/api-docs/README.md) / [Exports](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules.md) / ["bun"](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/bun_.md) / ArrayBufferSink

# Class: ArrayBufferSink

["bun"](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/bun_.md).ArrayBufferSink

Fast incremental writer that becomes an `ArrayBuffer` on end().

## Table of contents

### Constructors

- [constructor](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/bun_.ArrayBufferSink.md#constructor)

### Methods

- [end](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/bun_.ArrayBufferSink.md#end)
- [flush](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/bun_.ArrayBufferSink.md#flush)
- [start](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/bun_.ArrayBufferSink.md#start)
- [write](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/bun_.ArrayBufferSink.md#write)

## Constructors

### constructor

• **new ArrayBufferSink**()

## Methods

### end

▸ **end**(): `Uint8Array` \| `ArrayBuffer`

#### Returns

`Uint8Array` \| `ArrayBuffer`

___

### flush

▸ **flush**(): `number` \| `Uint8Array` \| `ArrayBuffer`

Flush the internal buffer

If [start](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/bun_.ArrayBufferSink.md#start) was passed a `stream` option, this will return a `ArrayBuffer`
If [start](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/bun_.ArrayBufferSink.md#start) was passed a `stream` option and `asUint8Array`, this will return a `Uint8Array`
Otherwise, this will return the number of bytes written since the last flush

This API might change later to separate Uint8ArraySink and ArrayBufferSink

#### Returns

`number` \| `Uint8Array` \| `ArrayBuffer`

___

### start

▸ **start**(`options?`): `void`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options?` | `Object` | - |
| `options.asUint8Array?` | `boolean` | - |
| `options.highWaterMark?` | `number` | Preallocate an internal buffer of this size This can significantly improve performance when the chunk size is small |
| `options.stream?` | `boolean` | On [flush](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/bun_.ArrayBufferSink.md#flush), return the written data as a `Uint8Array`. Writes will restart from the beginning of the buffer. |

#### Returns

`void`

___

### write

▸ **write**(`chunk`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `chunk` | `string` \| `ArrayBuffer` \| `ArrayBufferView` |

#### Returns

`number`
