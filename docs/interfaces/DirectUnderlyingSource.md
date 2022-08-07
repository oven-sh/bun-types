[bun-types](https://oven-sh.github.io/bun-types/README.md) / [Exports](https://oven-sh.github.io/bun-types/modules.md) / DirectUnderlyingSource

# Interface: DirectUnderlyingSource<R\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `R` | `any` |

## Table of contents

### Properties

- [cancel](https://oven-sh.github.io/bun-types/interfaces/DirectUnderlyingSource.md#cancel)
- [pull](https://oven-sh.github.io/bun-types/interfaces/DirectUnderlyingSource.md#pull)
- [type](https://oven-sh.github.io/bun-types/interfaces/DirectUnderlyingSource.md#type)

## Properties

### cancel

• `Optional` **cancel**: [`UnderlyingSourceCancelCallback`](https://oven-sh.github.io/bun-types/interfaces/UnderlyingSourceCancelCallback.md)

___

### pull

• **pull**: (`controller`: [`ReadableStreamDirectController`](https://oven-sh.github.io/bun-types/interfaces/ReadableStreamDirectController.md)) => `void` \| `PromiseLike`<`void`\>

#### Type declaration

▸ (`controller`): `void` \| `PromiseLike`<`void`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `controller` | [`ReadableStreamDirectController`](https://oven-sh.github.io/bun-types/interfaces/ReadableStreamDirectController.md) |

##### Returns

`void` \| `PromiseLike`<`void`\>

___

### type

• **type**: ``"direct"``
