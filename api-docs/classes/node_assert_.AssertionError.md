[bun-types](https://github.com/oven-sh/bun-types/blob/master/api-docs/README.md) / [Exports](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules.md) / ["node:assert"](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/node_assert_.md) / AssertionError

# Class: AssertionError

["node:assert"](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/node_assert_.md).AssertionError

Indicates the failure of an assertion. All errors thrown by the `assert` module
will be instances of the `AssertionError` class.

## Hierarchy

- `Error`

  ↳ **`AssertionError`**

## Table of contents

### Constructors

- [constructor](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/node_assert_.AssertionError.md#constructor)

### Properties

- [actual](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/node_assert_.AssertionError.md#actual)
- [code](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/node_assert_.AssertionError.md#code)
- [expected](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/node_assert_.AssertionError.md#expected)
- [generatedMessage](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/node_assert_.AssertionError.md#generatedmessage)
- [operator](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/node_assert_.AssertionError.md#operator)

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
