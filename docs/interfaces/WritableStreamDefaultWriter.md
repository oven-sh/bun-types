[bun-types](https://oven-sh.github.io/bun-types/README.md) / [Exports](https://oven-sh.github.io/bun-types/modules.md) / WritableStreamDefaultWriter

# Interface: WritableStreamDefaultWriter<W\>

This Streams API interface is the object returned by WritableStream.getWriter() and once created locks the < writer to the WritableStream ensuring that no other streams can write to the underlying sink.

## Type parameters

| Name | Type |
| :------ | :------ |
| `W` | `any` |

## Table of contents

### Properties

- [closed](https://oven-sh.github.io/bun-types/interfaces/WritableStreamDefaultWriter.md#closed)
- [desiredSize](https://oven-sh.github.io/bun-types/interfaces/WritableStreamDefaultWriter.md#desiredsize)
- [ready](https://oven-sh.github.io/bun-types/interfaces/WritableStreamDefaultWriter.md#ready)

### Methods

- [abort](https://oven-sh.github.io/bun-types/interfaces/WritableStreamDefaultWriter.md#abort)
- [close](https://oven-sh.github.io/bun-types/interfaces/WritableStreamDefaultWriter.md#close)
- [releaseLock](https://oven-sh.github.io/bun-types/interfaces/WritableStreamDefaultWriter.md#releaselock)
- [write](https://oven-sh.github.io/bun-types/interfaces/WritableStreamDefaultWriter.md#write)

## Properties

### closed

• `Readonly` **closed**: `Promise`<`undefined`\>

___

### desiredSize

• `Readonly` **desiredSize**: `number`

___

### ready

• `Readonly` **ready**: `Promise`<`undefined`\>

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

### releaseLock

▸ **releaseLock**(): `void`

#### Returns

`void`

▸ **releaseLock**(): `void`

#### Returns

`void`

___

### write

▸ **write**(`chunk?`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `chunk?` | `W` |

#### Returns

`Promise`<`void`\>

▸ **write**(`chunk?`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `chunk?` | `W` |

#### Returns

`Promise`<`void`\>
