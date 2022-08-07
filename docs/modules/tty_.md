[bun-types](https://github.com/oven-sh/bun-types/blob/master/api-docs/README.md) / [Exports](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules.md) / "tty"

# Namespace: "tty"

## Table of contents

### Variables

- [ReadStream](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/tty_.md#readstream)
- [WriteStream](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/tty_.md#writestream)

### Functions

- [isatty](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/tty_.md#isatty)

## Variables

### ReadStream

• **ReadStream**: `Function`

___

### WriteStream

• **WriteStream**: `Function`

## Functions

### isatty

▸ **isatty**(`fd`): `boolean`

The `tty.isatty()` method returns `true` if the given `fd` is associated with
a TTY and `false` if it is not, including whenever `fd` is not a non-negative
integer.

**`Since`**

v0.5.8

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `fd` | `number` | A numeric file descriptor |

#### Returns

`boolean`

▸ **isatty**(`fd`): `boolean`

The `tty.isatty()` method returns `true` if the given `fd` is associated with
a TTY and `false` if it is not, including whenever `fd` is not a non-negative
integer.

**`Since`**

v0.5.8

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `fd` | `number` | A numeric file descriptor |

#### Returns

`boolean`
