[bun-types](https://oven-sh.github.io/bun-types/README.md) / [Exports](https://oven-sh.github.io/bun-types/modules.md) / ["node:fs"](https://oven-sh.github.io/bun-types/modules/node_fs_.md) / MakeDirectoryOptions

# Interface: MakeDirectoryOptions

["node:fs"](https://oven-sh.github.io/bun-types/modules/node_fs_.md).MakeDirectoryOptions

## Table of contents

### Properties

- [mode](https://oven-sh.github.io/bun-types/interfaces/node_fs_.MakeDirectoryOptions.md#mode)
- [recursive](https://oven-sh.github.io/bun-types/interfaces/node_fs_.MakeDirectoryOptions.md#recursive)

## Properties

### mode

• `Optional` **mode**: [`Mode`](https://oven-sh.github.io/bun-types/modules/fs_.md#mode)

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
