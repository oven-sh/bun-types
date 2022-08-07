[bun-types](https://oven-sh.github.io/bun-types/README.md) / [Exports](https://oven-sh.github.io/bun-types/modules.md) / QueuingStrategy

# Interface: QueuingStrategy<T\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `any` |

## Hierarchy

- **`QueuingStrategy`**

  ↳ [`ByteLengthQueuingStrategy`](https://oven-sh.github.io/bun-types/interfaces/ByteLengthQueuingStrategy.md)

  ↳ [`CountQueuingStrategy`](https://oven-sh.github.io/bun-types/interfaces/CountQueuingStrategy.md)

## Table of contents

### Properties

- [highWaterMark](https://oven-sh.github.io/bun-types/interfaces/QueuingStrategy.md#highwatermark)
- [size](https://oven-sh.github.io/bun-types/interfaces/QueuingStrategy.md#size)

## Properties

### highWaterMark

• `Optional` **highWaterMark**: `number`

___

### size

• `Optional` **size**: [`QueuingStrategySize`](https://oven-sh.github.io/bun-types/interfaces/QueuingStrategySize.md)<`T`\>
