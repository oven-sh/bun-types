[bun-types](https://oven-sh.github.io/bun-types/README.md) / [Exports](https://oven-sh.github.io/bun-types/modules.md) / "node:tty"

# Namespace: "node:tty"

## Table of contents

### Variables

- [ReadStream](https://oven-sh.github.io/bun-types/modules/node_tty_.md#readstream)
- [WriteStream](https://oven-sh.github.io/bun-types/modules/node_tty_.md#writestream)

### Functions

- [isatty](https://oven-sh.github.io/bun-types/modules/node_tty_.md#isatty)

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
