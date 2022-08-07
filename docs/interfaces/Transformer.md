[bun-types](https://github.com/oven-sh/bun-types/blob/master/api-docs/README.md) / [Exports](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules.md) / Transformer

# Interface: Transformer<I, O\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `I` | `any` |
| `O` | `any` |

## Table of contents

### Properties

- [flush](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/Transformer.md#flush)
- [readableType](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/Transformer.md#readabletype)
- [start](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/Transformer.md#start)
- [transform](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/Transformer.md#transform)
- [writableType](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/Transformer.md#writabletype)

## Properties

### flush

• `Optional` **flush**: [`TransformerFlushCallback`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/TransformerFlushCallback.md)<`O`\>

___

### readableType

• `Optional` **readableType**: `undefined`

___

### start

• `Optional` **start**: [`TransformerStartCallback`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/TransformerStartCallback.md)<`O`\>

___

### transform

• `Optional` **transform**: [`TransformerTransformCallback`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/TransformerTransformCallback.md)<`I`, `O`\>

___

### writableType

• `Optional` **writableType**: `undefined`
