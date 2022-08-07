[bun-types](https://oven-sh.github.io/bun-types/README.md) / [Exports](https://oven-sh.github.io/bun-types/modules.md) / ReadableStream

# Interface: ReadableStream<R\>

This Streams API interface represents a readable stream of byte data. The Fetch API offers a concrete instance of a ReadableStream through the body property of a Response object.

## Type parameters

| Name | Type |
| :------ | :------ |
| `R` | `any` |

## Table of contents

### Properties

- [locked](https://oven-sh.github.io/bun-types/interfaces/ReadableStream.md#locked)

### Methods

- [cancel](https://oven-sh.github.io/bun-types/interfaces/ReadableStream.md#cancel)
- [forEach](https://oven-sh.github.io/bun-types/interfaces/ReadableStream.md#foreach)
- [getReader](https://oven-sh.github.io/bun-types/interfaces/ReadableStream.md#getreader)
- [pipeThrough](https://oven-sh.github.io/bun-types/interfaces/ReadableStream.md#pipethrough)
- [pipeTo](https://oven-sh.github.io/bun-types/interfaces/ReadableStream.md#pipeto)
- [tee](https://oven-sh.github.io/bun-types/interfaces/ReadableStream.md#tee)

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
| `callbackfn` | (`value`: `any`, `key`: `number`, `parent`: [`ReadableStream`](https://oven-sh.github.io/bun-types/modules.md#readablestream)<`R`\>) => `void` |
| `thisArg?` | `any` |

#### Returns

`void`

▸ **forEach**(`callbackfn`, `thisArg?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `callbackfn` | (`value`: `any`, `key`: `number`, `parent`: [`ReadableStream`](https://oven-sh.github.io/bun-types/modules.md#readablestream)<`R`\>) => `void` |
| `thisArg?` | `any` |

#### Returns

`void`

___

### getReader

▸ **getReader**(): [`ReadableStreamDefaultReader`](https://oven-sh.github.io/bun-types/modules.md#readablestreamdefaultreader)<`R`\>

#### Returns

[`ReadableStreamDefaultReader`](https://oven-sh.github.io/bun-types/modules.md#readablestreamdefaultreader)<`R`\>

▸ **getReader**(): [`ReadableStreamDefaultReader`](https://oven-sh.github.io/bun-types/modules.md#readablestreamdefaultreader)<`R`\>

#### Returns

[`ReadableStreamDefaultReader`](https://oven-sh.github.io/bun-types/modules.md#readablestreamdefaultreader)<`R`\>

___

### pipeThrough

▸ **pipeThrough**<`T`\>(`transform`, `options?`): [`ReadableStream`](https://oven-sh.github.io/bun-types/modules.md#readablestream)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `transform` | [`ReadableWritablePair`](https://oven-sh.github.io/bun-types/interfaces/ReadableWritablePair.md)<`T`, `R`\> |
| `options?` | [`StreamPipeOptions`](https://oven-sh.github.io/bun-types/interfaces/StreamPipeOptions.md) |

#### Returns

[`ReadableStream`](https://oven-sh.github.io/bun-types/modules.md#readablestream)<`T`\>

▸ **pipeThrough**<`T`\>(`transform`, `options?`): [`ReadableStream`](https://oven-sh.github.io/bun-types/modules.md#readablestream)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `transform` | [`ReadableWritablePair`](https://oven-sh.github.io/bun-types/interfaces/ReadableWritablePair.md)<`T`, `R`\> |
| `options?` | [`StreamPipeOptions`](https://oven-sh.github.io/bun-types/interfaces/StreamPipeOptions.md) |

#### Returns

[`ReadableStream`](https://oven-sh.github.io/bun-types/modules.md#readablestream)<`T`\>

___

### pipeTo

▸ **pipeTo**(`destination`, `options?`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `destination` | [`WritableStream`](https://oven-sh.github.io/bun-types/modules.md#writablestream)<`R`\> |
| `options?` | [`StreamPipeOptions`](https://oven-sh.github.io/bun-types/interfaces/StreamPipeOptions.md) |

#### Returns

`Promise`<`void`\>

▸ **pipeTo**(`destination`, `options?`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `destination` | [`WritableStream`](https://oven-sh.github.io/bun-types/modules.md#writablestream)<`R`\> |
| `options?` | [`StreamPipeOptions`](https://oven-sh.github.io/bun-types/interfaces/StreamPipeOptions.md) |

#### Returns

`Promise`<`void`\>

___

### tee

▸ **tee**(): [[`ReadableStream`](https://oven-sh.github.io/bun-types/modules.md#readablestream)<`R`\>, [`ReadableStream`](https://oven-sh.github.io/bun-types/modules.md#readablestream)<`R`\>]

#### Returns

[[`ReadableStream`](https://oven-sh.github.io/bun-types/modules.md#readablestream)<`R`\>, [`ReadableStream`](https://oven-sh.github.io/bun-types/modules.md#readablestream)<`R`\>]

▸ **tee**(): [[`ReadableStream`](https://oven-sh.github.io/bun-types/modules.md#readablestream)<`R`\>, [`ReadableStream`](https://oven-sh.github.io/bun-types/modules.md#readablestream)<`R`\>]

#### Returns

[[`ReadableStream`](https://oven-sh.github.io/bun-types/modules.md#readablestream)<`R`\>, [`ReadableStream`](https://oven-sh.github.io/bun-types/modules.md#readablestream)<`R`\>]
