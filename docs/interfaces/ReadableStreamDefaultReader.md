[bun-types](https://oven-sh.github.io/bun-types/README.md) / [Exports](https://oven-sh.github.io/bun-types/modules.md) / ReadableStreamDefaultReader

# Interface: ReadableStreamDefaultReader<R\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `R` | `any` |

## Hierarchy

- [`ReadableStreamGenericReader`](https://oven-sh.github.io/bun-types/interfaces/ReadableStreamGenericReader.md)

  ↳ **`ReadableStreamDefaultReader`**

## Table of contents

### Properties

- [closed](https://oven-sh.github.io/bun-types/interfaces/ReadableStreamDefaultReader.md#closed)

### Methods

- [cancel](https://oven-sh.github.io/bun-types/interfaces/ReadableStreamDefaultReader.md#cancel)
- [read](https://oven-sh.github.io/bun-types/interfaces/ReadableStreamDefaultReader.md#read)
- [releaseLock](https://oven-sh.github.io/bun-types/interfaces/ReadableStreamDefaultReader.md#releaselock)

## Properties

### closed

• `Readonly` **closed**: `Promise`<`undefined`\>

#### Inherited from

[ReadableStreamGenericReader](https://oven-sh.github.io/bun-types/interfaces/ReadableStreamGenericReader.md).[closed](https://oven-sh.github.io/bun-types/interfaces/ReadableStreamGenericReader.md#closed)

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

[ReadableStreamGenericReader](https://oven-sh.github.io/bun-types/interfaces/ReadableStreamGenericReader.md).[cancel](https://oven-sh.github.io/bun-types/interfaces/ReadableStreamGenericReader.md#cancel)

▸ **cancel**(`reason?`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `reason?` | `any` |

#### Returns

`Promise`<`void`\>

#### Inherited from

[ReadableStreamGenericReader](https://oven-sh.github.io/bun-types/interfaces/ReadableStreamGenericReader.md).[cancel](https://oven-sh.github.io/bun-types/interfaces/ReadableStreamGenericReader.md#cancel)

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
