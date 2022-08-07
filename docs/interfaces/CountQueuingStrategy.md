[bun-types](https://github.com/oven-sh/bun-types/blob/master/api-docs/README.md) / [Exports](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules.md) / CountQueuingStrategy

# Interface: CountQueuingStrategy

This Streams API interface provides a built-in byte length queuing strategy that can be used when constructing streams.

## Hierarchy

- [`QueuingStrategy`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/QueuingStrategy.md)

  ↳ **`CountQueuingStrategy`**

## Table of contents

### Properties

- [highWaterMark](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/CountQueuingStrategy.md#highwatermark)
- [size](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/CountQueuingStrategy.md#size)

## Properties

### highWaterMark

• `Readonly` **highWaterMark**: `number`

#### Inherited from

[QueuingStrategy](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/QueuingStrategy.md).[highWaterMark](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/QueuingStrategy.md#highwatermark)

___

### size

• `Readonly` **size**: [`QueuingStrategySize`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/QueuingStrategySize.md)<`any`\>

#### Inherited from

[QueuingStrategy](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/QueuingStrategy.md).[size](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/QueuingStrategy.md#size)
