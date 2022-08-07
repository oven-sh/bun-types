[bun-types](https://oven-sh.github.io/bun-types/README.md) / [Exports](https://oven-sh.github.io/bun-types/modules.md) / ByteLengthQueuingStrategy

# Interface: ByteLengthQueuingStrategy

This Streams API interface provides a built-in byte length queuing strategy that can be used when constructing streams.

## Hierarchy

- [`QueuingStrategy`](https://oven-sh.github.io/bun-types/interfaces/QueuingStrategy.md)<`ArrayBufferView`\>

  ↳ **`ByteLengthQueuingStrategy`**

## Table of contents

### Properties

- [highWaterMark](https://oven-sh.github.io/bun-types/interfaces/ByteLengthQueuingStrategy.md#highwatermark)
- [size](https://oven-sh.github.io/bun-types/interfaces/ByteLengthQueuingStrategy.md#size)

## Properties

### highWaterMark

• `Readonly` **highWaterMark**: `number`

#### Inherited from

[QueuingStrategy](https://oven-sh.github.io/bun-types/interfaces/QueuingStrategy.md).[highWaterMark](https://oven-sh.github.io/bun-types/interfaces/QueuingStrategy.md#highwatermark)

___

### size

• `Readonly` **size**: [`QueuingStrategySize`](https://oven-sh.github.io/bun-types/interfaces/QueuingStrategySize.md)<`ArrayBufferView`\>

#### Inherited from

[QueuingStrategy](https://oven-sh.github.io/bun-types/interfaces/QueuingStrategy.md).[size](https://oven-sh.github.io/bun-types/interfaces/QueuingStrategy.md#size)
