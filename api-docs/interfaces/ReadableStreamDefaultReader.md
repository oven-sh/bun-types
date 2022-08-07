[bun-types](https://github.com/oven-sh/bun-types/blob/master/api-docs/README.md) / [Exports](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules.md) / ReadableStreamDefaultReader

# Interface: ReadableStreamDefaultReader<R\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `R` | `any` |

## Hierarchy

- [`ReadableStreamGenericReader`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/ReadableStreamGenericReader.md)

  ↳ **`ReadableStreamDefaultReader`**

## Table of contents

### Properties

- [closed](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/ReadableStreamDefaultReader.md#closed)

### Methods

- [cancel](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/ReadableStreamDefaultReader.md#cancel)
- [read](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/ReadableStreamDefaultReader.md#read)
- [releaseLock](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/ReadableStreamDefaultReader.md#releaselock)

## Properties

### closed

• `Readonly` **closed**: `Promise`<`undefined`\>

#### Inherited from

[ReadableStreamGenericReader](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/ReadableStreamGenericReader.md).[closed](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/ReadableStreamGenericReader.md#closed)

## Methods

### cancel

▸ **cancel**(`reason?`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `reason?` | `any` |

#### Returns

`Promise`<`void`\>

#### Inherited from

[ReadableStreamGenericReader](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/ReadableStreamGenericReader.md).[cancel](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/ReadableStreamGenericReader.md#cancel)

▸ **cancel**(`reason?`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `reason?` | `any` |

#### Returns

`Promise`<`void`\>

#### Inherited from

[ReadableStreamGenericReader](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/ReadableStreamGenericReader.md).[cancel](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/ReadableStreamGenericReader.md#cancel)

___

### read

▸ **read**(): `Promise`<`ReadableStreamDefaultReadResult`<`R`\>\>

#### Returns

`Promise`<`ReadableStreamDefaultReadResult`<`R`\>\>

▸ **read**(): `Promise`<`ReadableStreamDefaultReadResult`<`R`\>\>

#### Returns

`Promise`<`ReadableStreamDefaultReadResult`<`R`\>\>

___

### releaseLock

▸ **releaseLock**(): `void`

#### Returns

`void`

▸ **releaseLock**(): `void`

#### Returns

`void`
