[bun-types](https://github.com/oven-sh/bun-types/blob/master/api-docs/README.md) / [Exports](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules.md) / ReadWriteStream

# Interface: ReadWriteStream

## Hierarchy

- [`ReadableStream`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules.md#readablestream)

- [`WritableStream`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules.md#writablestream)

  ↳ **`ReadWriteStream`**

## Table of contents

### Properties

- [locked](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/ReadWriteStream.md#locked)

### Methods

- [abort](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/ReadWriteStream.md#abort)
- [cancel](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/ReadWriteStream.md#cancel)
- [close](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/ReadWriteStream.md#close)
- [forEach](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/ReadWriteStream.md#foreach)
- [getReader](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/ReadWriteStream.md#getreader)
- [getWriter](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/ReadWriteStream.md#getwriter)
- [pipeThrough](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/ReadWriteStream.md#pipethrough)
- [pipeTo](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/ReadWriteStream.md#pipeto)
- [tee](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/ReadWriteStream.md#tee)

## Properties

### locked

• `Readonly` **locked**: `boolean`

#### Inherited from

ReadableStream.locked

## Methods

### abort

▸ **abort**(`reason?`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `reason?` | `any` |

#### Returns

`Promise`<`void`\>

#### Inherited from

WritableStream.abort

▸ **abort**(`reason?`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `reason?` | `any` |

#### Returns

`Promise`<`void`\>

#### Inherited from

WritableStream.abort

___

### cancel

▸ **cancel**(`reason?`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `reason?` | `any` |

#### Returns

`Promise`<`void`\>

#### Inherited from

ReadableStream.cancel

▸ **cancel**(`reason?`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `reason?` | `any` |

#### Returns

`Promise`<`void`\>

#### Inherited from

ReadableStream.cancel

___

### close

▸ **close**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Inherited from

WritableStream.close

▸ **close**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Inherited from

WritableStream.close

___

### forEach

▸ **forEach**(`callbackfn`, `thisArg?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `callbackfn` | (`value`: `any`, `key`: `number`, `parent`: [`ReadableStream`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules.md#readablestream)<`any`\>) => `void` |
| `thisArg?` | `any` |

#### Returns

`void`

#### Inherited from

ReadableStream.forEach

▸ **forEach**(`callbackfn`, `thisArg?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `callbackfn` | (`value`: `any`, `key`: `number`, `parent`: [`ReadableStream`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules.md#readablestream)<`any`\>) => `void` |
| `thisArg?` | `any` |

#### Returns

`void`

#### Inherited from

ReadableStream.forEach

___

### getReader

▸ **getReader**(): [`ReadableStreamDefaultReader`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules.md#readablestreamdefaultreader)<`any`\>

#### Returns

[`ReadableStreamDefaultReader`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules.md#readablestreamdefaultreader)<`any`\>

#### Inherited from

ReadableStream.getReader

▸ **getReader**(): [`ReadableStreamDefaultReader`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules.md#readablestreamdefaultreader)<`any`\>

#### Returns

[`ReadableStreamDefaultReader`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules.md#readablestreamdefaultreader)<`any`\>

#### Inherited from

ReadableStream.getReader

___

### getWriter

▸ **getWriter**(): [`WritableStreamDefaultWriter`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules.md#writablestreamdefaultwriter)<`any`\>

#### Returns

[`WritableStreamDefaultWriter`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules.md#writablestreamdefaultwriter)<`any`\>

#### Inherited from

WritableStream.getWriter

▸ **getWriter**(): [`WritableStreamDefaultWriter`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules.md#writablestreamdefaultwriter)<`any`\>

#### Returns

[`WritableStreamDefaultWriter`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules.md#writablestreamdefaultwriter)<`any`\>

#### Inherited from

WritableStream.getWriter

___

### pipeThrough

▸ **pipeThrough**<`T`\>(`transform`, `options?`): [`ReadableStream`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules.md#readablestream)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `transform` | [`ReadableWritablePair`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/ReadableWritablePair.md)<`T`, `any`\> |
| `options?` | [`StreamPipeOptions`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/StreamPipeOptions.md) |

#### Returns

[`ReadableStream`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules.md#readablestream)<`T`\>

#### Inherited from

ReadableStream.pipeThrough

▸ **pipeThrough**<`T`\>(`transform`, `options?`): [`ReadableStream`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules.md#readablestream)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `transform` | [`ReadableWritablePair`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/ReadableWritablePair.md)<`T`, `any`\> |
| `options?` | [`StreamPipeOptions`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/StreamPipeOptions.md) |

#### Returns

[`ReadableStream`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules.md#readablestream)<`T`\>

#### Inherited from

ReadableStream.pipeThrough

___

### pipeTo

▸ **pipeTo**(`destination`, `options?`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `destination` | [`WritableStream`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules.md#writablestream)<`any`\> |
| `options?` | [`StreamPipeOptions`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/StreamPipeOptions.md) |

#### Returns

`Promise`<`void`\>

#### Inherited from

ReadableStream.pipeTo

▸ **pipeTo**(`destination`, `options?`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `destination` | [`WritableStream`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules.md#writablestream)<`any`\> |
| `options?` | [`StreamPipeOptions`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/StreamPipeOptions.md) |

#### Returns

`Promise`<`void`\>

#### Inherited from

ReadableStream.pipeTo

___

### tee

▸ **tee**(): [[`ReadableStream`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules.md#readablestream)<`any`\>, [`ReadableStream`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules.md#readablestream)<`any`\>]

#### Returns

[[`ReadableStream`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules.md#readablestream)<`any`\>, [`ReadableStream`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules.md#readablestream)<`any`\>]

#### Inherited from

ReadableStream.tee

▸ **tee**(): [[`ReadableStream`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules.md#readablestream)<`any`\>, [`ReadableStream`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules.md#readablestream)<`any`\>]

#### Returns

[[`ReadableStream`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules.md#readablestream)<`any`\>, [`ReadableStream`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules.md#readablestream)<`any`\>]

#### Inherited from

ReadableStream.tee
