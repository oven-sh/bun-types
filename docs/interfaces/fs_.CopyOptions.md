[bun-types](https://github.com/oven-sh/bun-types/blob/master/api-docs/README.md) / [Exports](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules.md) / ["fs"](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/fs_.md) / CopyOptions

# Interface: CopyOptions

["fs"](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/fs_.md).CopyOptions

## Table of contents

### Properties

- [dereference](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/fs_.CopyOptions.md#dereference)
- [errorOnExist](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/fs_.CopyOptions.md#erroronexist)
- [force](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/fs_.CopyOptions.md#force)
- [preserveTimestamps](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/fs_.CopyOptions.md#preservetimestamps)
- [recursive](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/fs_.CopyOptions.md#recursive)

### Methods

- [filter](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/fs_.CopyOptions.md#filter)

## Properties

### dereference

• `Optional` **dereference**: `boolean`

Dereference symlinks

**`Default`**

false

___

### errorOnExist

• `Optional` **errorOnExist**: `boolean`

When `force` is `false`, and the destination
exists, throw an error.

**`Default`**

false

___

### force

• `Optional` **force**: `boolean`

Overwrite existing file or directory. _The copy
operation will ignore errors if you set this to false and the destination
exists. Use the `errorOnExist` option to change this behavior.

**`Default`**

true

___

### preserveTimestamps

• `Optional` **preserveTimestamps**: `boolean`

When `true` timestamps from `src` will
be preserved.

**`Default`**

false

___

### recursive

• `Optional` **recursive**: `boolean`

Copy directories recursively.

**`Default`**

false

## Methods

### filter

▸ `Optional` **filter**(`source`, `destination`): `boolean`

function to filter copied files/directories. Return
`true` to copy the item, `false` to ignore it.

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | `string` |
| `destination` | `string` |

#### Returns

`boolean`

▸ `Optional` **filter**(`source`, `destination`): `boolean`

function to filter copied files/directories. Return
`true` to copy the item, `false` to ignore it.

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | `string` |
| `destination` | `string` |

#### Returns

`boolean`
