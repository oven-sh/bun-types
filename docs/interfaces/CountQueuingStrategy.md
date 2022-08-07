[bun-types](https://oven-sh.github.io/bun-types/README.md) / [Exports](https://oven-sh.github.io/bun-types/modules.md) / CountQueuingStrategy

# Interface: CountQueuingStrategy

This Streams API interface provides a built-in byte length queuing strategy that can be used when constructing streams.

## Hierarchy

- [`QueuingStrategy`](https://oven-sh.github.io/bun-types/interfaces/QueuingStrategy.md)

  ↳ **`CountQueuingStrategy`**

## Table of contents

### Properties

- [highWaterMark](https://oven-sh.github.io/bun-types/interfaces/CountQueuingStrategy.md#highwatermark)
- [size](https://oven-sh.github.io/bun-types/interfaces/CountQueuingStrategy.md#size)

## Properties

### highWaterMark

• `Readonly` **highWaterMark**: `number`

#### Inherited from

[QueuingStrategy](https://oven-sh.github.io/bun-types/interfaces/QueuingStrategy.md).[highWaterMark](https://oven-sh.github.io/bun-types/interfaces/QueuingStrategy.md#highwatermark)

___

### size

• `Readonly` **size**: [`QueuingStrategySize`](https://oven-sh.github.io/bun-types/interfaces/QueuingStrategySize.md)<`any`\>

#### Inherited from

[QueuingStrategy](https://oven-sh.github.io/bun-types/interfaces/QueuingStrategy.md).[size](https://oven-sh.github.io/bun-types/interfaces/QueuingStrategy.md#size)
