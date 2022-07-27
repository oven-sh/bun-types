[bun-types](https://github.com/oven-sh/bun-types/blob/master/api-docs/README.md) / [Exports](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules.md) / WritableStream

# Interface: WritableStream<W\>

This Streams API interface provides a standard abstraction for writing streaming data to a destination, known as a sink. This object comes with built-in backpressure and queuing.

## Type parameters

| Name | Type |
| :------ | :------ |
| `W` | `any` |

## Table of contents

### Properties

- [locked](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/WritableStream.md#locked)

### Methods

- [abort](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/WritableStream.md#abort)
- [close](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/WritableStream.md#close)
- [getWriter](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/WritableStream.md#getwriter)

## Properties

### locked

• `Readonly` **locked**: `boolean`

## Methods

### abort

▸ **abort**(`reason?`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `reason?` | `any` |

#### Returns

`Promise`<`void`\>

▸ **abort**(`reason?`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `reason?` | `any` |

#### Returns

`Promise`<`void`\>

___

### close

▸ **close**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

▸ **close**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

___

### getWriter

▸ **getWriter**(): [`WritableStreamDefaultWriter`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules.md#writablestreamdefaultwriter)<`W`\>

#### Returns

[`WritableStreamDefaultWriter`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules.md#writablestreamdefaultwriter)<`W`\>

▸ **getWriter**(): [`WritableStreamDefaultWriter`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules.md#writablestreamdefaultwriter)<`W`\>

#### Returns

[`WritableStreamDefaultWriter`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules.md#writablestreamdefaultwriter)<`W`\>
