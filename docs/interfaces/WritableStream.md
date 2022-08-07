[bun-types](https://oven-sh.github.io/bun-types/README.md) / [Exports](https://oven-sh.github.io/bun-types/modules.md) / WritableStream

# Interface: WritableStream<W\>

This Streams API interface provides a standard abstraction for writing streaming data to a destination, known as a sink. This object comes with built-in backpressure and queuing.

## Type parameters

| Name | Type |
| :------ | :------ |
| `W` | `any` |

## Table of contents

### Properties

- [locked](https://oven-sh.github.io/bun-types/interfaces/WritableStream.md#locked)

### Methods

- [abort](https://oven-sh.github.io/bun-types/interfaces/WritableStream.md#abort)
- [close](https://oven-sh.github.io/bun-types/interfaces/WritableStream.md#close)
- [getWriter](https://oven-sh.github.io/bun-types/interfaces/WritableStream.md#getwriter)

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

▸ **getWriter**(): [`WritableStreamDefaultWriter`](https://oven-sh.github.io/bun-types/modules.md#writablestreamdefaultwriter)<`W`\>

#### Returns

[`WritableStreamDefaultWriter`](https://oven-sh.github.io/bun-types/modules.md#writablestreamdefaultwriter)<`W`\>

▸ **getWriter**(): [`WritableStreamDefaultWriter`](https://oven-sh.github.io/bun-types/modules.md#writablestreamdefaultwriter)<`W`\>

#### Returns

[`WritableStreamDefaultWriter`](https://oven-sh.github.io/bun-types/modules.md#writablestreamdefaultwriter)<`W`\>
