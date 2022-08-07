[bun-types](https://oven-sh.github.io/bun-types/README.md) / [Exports](https://oven-sh.github.io/bun-types/modules.md) / ["node:assert"](https://oven-sh.github.io/bun-types/modules/node_assert_.md) / AssertionError

# Class: AssertionError

["node:assert"](https://oven-sh.github.io/bun-types/modules/node_assert_.md).AssertionError

Indicates the failure of an assertion. All errors thrown by the `assert` module
will be instances of the `AssertionError` class.

## Hierarchy

- `Error`

  ↳ **`AssertionError`**

## Table of contents

### Constructors

- [constructor](https://oven-sh.github.io/bun-types/classes/node_assert_.AssertionError.md#constructor)

### Properties

- [actual](https://oven-sh.github.io/bun-types/classes/node_assert_.AssertionError.md#actual)
- [code](https://oven-sh.github.io/bun-types/classes/node_assert_.AssertionError.md#code)
- [expected](https://oven-sh.github.io/bun-types/classes/node_assert_.AssertionError.md#expected)
- [generatedMessage](https://oven-sh.github.io/bun-types/classes/node_assert_.AssertionError.md#generatedmessage)
- [operator](https://oven-sh.github.io/bun-types/classes/node_assert_.AssertionError.md#operator)

## Constructors

### constructor

• **new AssertionError**(`options?`)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options?` | `Object` | - |
| `options.actual?` | `unknown` | The `actual` property on the error instance. |
| `options.expected?` | `unknown` | The `expected` property on the error instance. |
| `options.message?` | `string` | If provided, the error message is set to this value. |
| `options.operator?` | `string` | The `operator` property on the error instance. |
| `options.stackStartFn?` | `Function` | If provided, the generated stack trace omits frames before this function. |

#### Overrides

Error.constructor

## Properties

### actual

• **actual**: `unknown`

___

### code

• **code**: ``"ERR_ASSERTION"``

___

### expected

• **expected**: `unknown`

___

### generatedMessage

• **generatedMessage**: `boolean`

___

### operator

• **operator**: `string`
