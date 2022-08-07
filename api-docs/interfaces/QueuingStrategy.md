[bun-types](https://github.com/oven-sh/bun-types/blob/master/api-docs/README.md) / [Exports](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules.md) / QueuingStrategy

# Interface: QueuingStrategy<T\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `any` |

## Hierarchy

- **`QueuingStrategy`**

  ↳ [`ByteLengthQueuingStrategy`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/ByteLengthQueuingStrategy.md)

  ↳ [`CountQueuingStrategy`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/CountQueuingStrategy.md)

## Table of contents

### Properties

- [highWaterMark](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/QueuingStrategy.md#highwatermark)
- [size](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/QueuingStrategy.md#size)

## Properties

### highWaterMark

• `Optional` **highWaterMark**: `number`

___

### size

• `Optional` **size**: [`QueuingStrategySize`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/QueuingStrategySize.md)<`T`\>
