[bun-types](https://github.com/oven-sh/bun-types/blob/master/api-docs/README.md) / [Exports](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules.md) / ["fs"](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/fs_.md) / MakeDirectoryOptions

# Interface: MakeDirectoryOptions

["fs"](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/fs_.md).MakeDirectoryOptions

## Table of contents

### Properties

- [mode](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/fs_.MakeDirectoryOptions.md#mode)
- [recursive](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/fs_.MakeDirectoryOptions.md#recursive)

## Properties

### mode

• `Optional` **mode**: [`Mode`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/fs_.md#mode)

A file mode. If a string is passed, it is parsed as an octal integer. If not specified

**`Default`**

0o777

___

### recursive

• `Optional` **recursive**: `boolean`

Indicates whether parent folders should be created.
If a folder was created, the path to the first created folder will be returned.

**`Default`**

false
