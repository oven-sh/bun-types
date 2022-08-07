[bun-types](https://oven-sh.github.io/bun-types/README.md) / [Exports](https://oven-sh.github.io/bun-types/modules.md) / ReadWriteStream

# Interface: ReadWriteStream

## Hierarchy

- [`ReadableStream`](https://oven-sh.github.io/bun-types/modules.md#readablestream)

- [`WritableStream`](https://oven-sh.github.io/bun-types/modules.md#writablestream)

  ↳ **`ReadWriteStream`**

## Table of contents

### Properties

- [locked](https://oven-sh.github.io/bun-types/interfaces/ReadWriteStream.md#locked)

### Methods

- [abort](https://oven-sh.github.io/bun-types/interfaces/ReadWriteStream.md#abort)
- [cancel](https://oven-sh.github.io/bun-types/interfaces/ReadWriteStream.md#cancel)
- [close](https://oven-sh.github.io/bun-types/interfaces/ReadWriteStream.md#close)
- [forEach](https://oven-sh.github.io/bun-types/interfaces/ReadWriteStream.md#foreach)
- [getReader](https://oven-sh.github.io/bun-types/interfaces/ReadWriteStream.md#getreader)
- [getWriter](https://oven-sh.github.io/bun-types/interfaces/ReadWriteStream.md#getwriter)
- [pipeThrough](https://oven-sh.github.io/bun-types/interfaces/ReadWriteStream.md#pipethrough)
- [pipeTo](https://oven-sh.github.io/bun-types/interfaces/ReadWriteStream.md#pipeto)
- [tee](https://oven-sh.github.io/bun-types/interfaces/ReadWriteStream.md#tee)

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
| `callbackfn` | (`value`: `any`, `key`: `number`, `parent`: [`ReadableStream`](https://oven-sh.github.io/bun-types/modules.md#readablestream)<`any`\>) => `void` |
| `thisArg?` | `any` |

#### Returns

`void`

#### Inherited from

ReadableStream.forEach

▸ **forEach**(`callbackfn`, `thisArg?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `callbackfn` | (`value`: `any`, `key`: `number`, `parent`: [`ReadableStream`](https://oven-sh.github.io/bun-types/modules.md#readablestream)<`any`\>) => `void` |
| `thisArg?` | `any` |

#### Returns

`void`

#### Inherited from

ReadableStream.forEach

___

### getReader

▸ **getReader**(): [`ReadableStreamDefaultReader`](https://oven-sh.github.io/bun-types/modules.md#readablestreamdefaultreader)<`any`\>

#### Returns

[`ReadableStreamDefaultReader`](https://oven-sh.github.io/bun-types/modules.md#readablestreamdefaultreader)<`any`\>

#### Inherited from

ReadableStream.getReader

▸ **getReader**(): [`ReadableStreamDefaultReader`](https://oven-sh.github.io/bun-types/modules.md#readablestreamdefaultreader)<`any`\>

#### Returns

[`ReadableStreamDefaultReader`](https://oven-sh.github.io/bun-types/modules.md#readablestreamdefaultreader)<`any`\>

#### Inherited from

ReadableStream.getReader

___

### getWriter

▸ **getWriter**(): [`WritableStreamDefaultWriter`](https://oven-sh.github.io/bun-types/modules.md#writablestreamdefaultwriter)<`any`\>

#### Returns

[`WritableStreamDefaultWriter`](https://oven-sh.github.io/bun-types/modules.md#writablestreamdefaultwriter)<`any`\>

#### Inherited from

WritableStream.getWriter

▸ **getWriter**(): [`WritableStreamDefaultWriter`](https://oven-sh.github.io/bun-types/modules.md#writablestreamdefaultwriter)<`any`\>

#### Returns

[`WritableStreamDefaultWriter`](https://oven-sh.github.io/bun-types/modules.md#writablestreamdefaultwriter)<`any`\>

#### Inherited from

WritableStream.getWriter

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
| `transform` | [`ReadableWritablePair`](https://oven-sh.github.io/bun-types/interfaces/ReadableWritablePair.md)<`T`, `any`\> |
| `options?` | [`StreamPipeOptions`](https://oven-sh.github.io/bun-types/interfaces/StreamPipeOptions.md) |

#### Returns

[`ReadableStream`](https://oven-sh.github.io/bun-types/modules.md#readablestream)<`T`\>

#### Inherited from

ReadableStream.pipeThrough

▸ **pipeThrough**<`T`\>(`transform`, `options?`): [`ReadableStream`](https://oven-sh.github.io/bun-types/modules.md#readablestream)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `transform` | [`ReadableWritablePair`](https://oven-sh.github.io/bun-types/interfaces/ReadableWritablePair.md)<`T`, `any`\> |
| `options?` | [`StreamPipeOptions`](https://oven-sh.github.io/bun-types/interfaces/StreamPipeOptions.md) |

#### Returns

[`ReadableStream`](https://oven-sh.github.io/bun-types/modules.md#readablestream)<`T`\>

#### Inherited from

ReadableStream.pipeThrough

___

### pipeTo

▸ **pipeTo**(`destination`, `options?`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `destination` | [`WritableStream`](https://oven-sh.github.io/bun-types/modules.md#writablestream)<`any`\> |
| `options?` | [`StreamPipeOptions`](https://oven-sh.github.io/bun-types/interfaces/StreamPipeOptions.md) |

#### Returns

`Promise`<`void`\>

#### Inherited from

ReadableStream.pipeTo

▸ **pipeTo**(`destination`, `options?`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `destination` | [`WritableStream`](https://oven-sh.github.io/bun-types/modules.md#writablestream)<`any`\> |
| `options?` | [`StreamPipeOptions`](https://oven-sh.github.io/bun-types/interfaces/StreamPipeOptions.md) |

#### Returns

`Promise`<`void`\>

#### Inherited from

ReadableStream.pipeTo

___

### tee

▸ **tee**(): [[`ReadableStream`](https://oven-sh.github.io/bun-types/modules.md#readablestream)<`any`\>, [`ReadableStream`](https://oven-sh.github.io/bun-types/modules.md#readablestream)<`any`\>]

#### Returns

[[`ReadableStream`](https://oven-sh.github.io/bun-types/modules.md#readablestream)<`any`\>, [`ReadableStream`](https://oven-sh.github.io/bun-types/modules.md#readablestream)<`any`\>]

#### Inherited from

ReadableStream.tee

▸ **tee**(): [[`ReadableStream`](https://oven-sh.github.io/bun-types/modules.md#readablestream)<`any`\>, [`ReadableStream`](https://oven-sh.github.io/bun-types/modules.md#readablestream)<`any`\>]

#### Returns

[[`ReadableStream`](https://oven-sh.github.io/bun-types/modules.md#readablestream)<`any`\>, [`ReadableStream`](https://oven-sh.github.io/bun-types/modules.md#readablestream)<`any`\>]

#### Inherited from

ReadableStream.tee
