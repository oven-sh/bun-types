[bun-types](https://oven-sh.github.io/bun-types/README.md) / [Exports](https://oven-sh.github.io/bun-types/modules.md) / Transformer

# Interface: Transformer<I, O\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `I` | `any` |
| `O` | `any` |

## Table of contents

### Properties

- [flush](https://oven-sh.github.io/bun-types/interfaces/Transformer.md#flush)
- [readableType](https://oven-sh.github.io/bun-types/interfaces/Transformer.md#readabletype)
- [start](https://oven-sh.github.io/bun-types/interfaces/Transformer.md#start)
- [transform](https://oven-sh.github.io/bun-types/interfaces/Transformer.md#transform)
- [writableType](https://oven-sh.github.io/bun-types/interfaces/Transformer.md#writabletype)

## Properties

### flush

• `Optional` **flush**: [`TransformerFlushCallback`](https://oven-sh.github.io/bun-types/interfaces/TransformerFlushCallback.md)<`O`\>

___

### readableType

• `Optional` **readableType**: `undefined`

___

### start

• `Optional` **start**: [`TransformerStartCallback`](https://oven-sh.github.io/bun-types/interfaces/TransformerStartCallback.md)<`O`\>

___

### transform

• `Optional` **transform**: [`TransformerTransformCallback`](https://oven-sh.github.io/bun-types/interfaces/TransformerTransformCallback.md)<`I`, `O`\>

___

### writableType

• `Optional` **writableType**: `undefined`
