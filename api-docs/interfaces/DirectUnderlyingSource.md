[bun-types](https://github.com/oven-sh/bun-types/blob/master/api-docs/README.md) / [Exports](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules.md) / DirectUnderlyingSource

# Interface: DirectUnderlyingSource<R\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `R` | `any` |

## Table of contents

### Properties

- [cancel](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/DirectUnderlyingSource.md#cancel)
- [pull](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/DirectUnderlyingSource.md#pull)
- [type](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/DirectUnderlyingSource.md#type)

## Properties

### cancel

• `Optional` **cancel**: [`UnderlyingSourceCancelCallback`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/UnderlyingSourceCancelCallback.md)

___

### pull

• **pull**: (`controller`: [`ReadableStreamDirectController`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/ReadableStreamDirectController.md)) => `void` \| `PromiseLike`<`void`\>

#### Type declaration

▸ (`controller`): `void` \| `PromiseLike`<`void`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `controller` | [`ReadableStreamDirectController`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/ReadableStreamDirectController.md) |

##### Returns

`void` \| `PromiseLike`<`void`\>

___

### type

• **type**: ``"direct"``
