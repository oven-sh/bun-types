[bun-types](https://github.com/oven-sh/bun-types/blob/master/api-docs/README.md) / [Exports](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules.md) / QueuingStrategyInit

# Interface: QueuingStrategyInit

## Table of contents

### Properties

- [highWaterMark](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/QueuingStrategyInit.md#highwatermark)

## Properties

### highWaterMark

• **highWaterMark**: `number`

Creates a new ByteLengthQueuingStrategy with the provided high water mark.

Note that the provided high water mark will not be validated ahead of time. Instead, if it is negative, NaN, or not a number, the resulting ByteLengthQueuingStrategy will cause the corresponding stream constructor to throw.
