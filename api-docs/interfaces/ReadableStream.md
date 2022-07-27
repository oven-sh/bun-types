[bun-types](https://github.com/oven-sh/bun-types/blob/master/api-docs/README.md) / [Exports](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules.md) / ReadableStream

# Interface: ReadableStream<R\>

This Streams API interface represents a readable stream of byte data. The Fetch API offers a concrete instance of a ReadableStream through the body property of a Response object.

## Type parameters

| Name | Type |
| :------ | :------ |
| `R` | `any` |

## Table of contents

### Properties

- [locked](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/ReadableStream.md#locked)

### Methods

- [cancel](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/ReadableStream.md#cancel)
- [forEach](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/ReadableStream.md#foreach)
- [getReader](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/ReadableStream.md#getreader)
- [pipeThrough](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/ReadableStream.md#pipethrough)
- [pipeTo](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/ReadableStream.md#pipeto)
- [tee](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/ReadableStream.md#tee)

## Properties

### locked

• `Readonly` **locked**: `boolean`

## Methods

### cancel

▸ **cancel**(`reason?`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `reason?` | `any` |

#### Returns

`Promise`<`void`\>

▸ **cancel**(`reason?`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `reason?` | `any` |

#### Returns

`Promise`<`void`\>

___

### forEach

▸ **forEach**(`callbackfn`, `thisArg?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `callbackfn` | (`value`: `any`, `key`: `number`, `parent`: [`ReadableStream`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules.md#readablestream)<`R`\>) => `void` |
| `thisArg?` | `any` |

#### Returns

`void`

▸ **forEach**(`callbackfn`, `thisArg?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `callbackfn` | (`value`: `any`, `key`: `number`, `parent`: [`ReadableStream`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules.md#readablestream)<`R`\>) => `void` |
| `thisArg?` | `any` |

#### Returns

`void`

___

### getReader

▸ **getReader**(): [`ReadableStreamDefaultReader`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules.md#readablestreamdefaultreader)<`R`\>

#### Returns

[`ReadableStreamDefaultReader`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules.md#readablestreamdefaultreader)<`R`\>

▸ **getReader**(): [`ReadableStreamDefaultReader`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules.md#readablestreamdefaultreader)<`R`\>

#### Returns

[`ReadableStreamDefaultReader`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules.md#readablestreamdefaultreader)<`R`\>

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
| `transform` | [`ReadableWritablePair`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/ReadableWritablePair.md)<`T`, `R`\> |
| `options?` | [`StreamPipeOptions`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/StreamPipeOptions.md) |

#### Returns

[`ReadableStream`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules.md#readablestream)<`T`\>

▸ **pipeThrough**<`T`\>(`transform`, `options?`): [`ReadableStream`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules.md#readablestream)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `transform` | [`ReadableWritablePair`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/ReadableWritablePair.md)<`T`, `R`\> |
| `options?` | [`StreamPipeOptions`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/StreamPipeOptions.md) |

#### Returns

[`ReadableStream`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules.md#readablestream)<`T`\>

___

### pipeTo

▸ **pipeTo**(`destination`, `options?`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `destination` | [`WritableStream`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules.md#writablestream)<`R`\> |
| `options?` | [`StreamPipeOptions`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/StreamPipeOptions.md) |

#### Returns

`Promise`<`void`\>

▸ **pipeTo**(`destination`, `options?`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `destination` | [`WritableStream`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules.md#writablestream)<`R`\> |
| `options?` | [`StreamPipeOptions`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/StreamPipeOptions.md) |

#### Returns

`Promise`<`void`\>

___

### tee

▸ **tee**(): [[`ReadableStream`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules.md#readablestream)<`R`\>, [`ReadableStream`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules.md#readablestream)<`R`\>]

#### Returns

[[`ReadableStream`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules.md#readablestream)<`R`\>, [`ReadableStream`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules.md#readablestream)<`R`\>]

▸ **tee**(): [[`ReadableStream`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules.md#readablestream)<`R`\>, [`ReadableStream`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules.md#readablestream)<`R`\>]

#### Returns

[[`ReadableStream`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules.md#readablestream)<`R`\>, [`ReadableStream`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules.md#readablestream)<`R`\>]
