[bun-types](https://oven-sh.github.io/bun-types/README.md) / [Exports](https://oven-sh.github.io/bun-types/modules.md) / ["fs"](https://oven-sh.github.io/bun-types/modules/fs_.md) / RmDirOptions

# Interface: RmDirOptions

["fs"](https://oven-sh.github.io/bun-types/modules/fs_.md).RmDirOptions

## Table of contents

### Properties

- [maxRetries](https://oven-sh.github.io/bun-types/interfaces/fs_.RmDirOptions.md#maxretries)
- [recursive](https://oven-sh.github.io/bun-types/interfaces/fs_.RmDirOptions.md#recursive)
- [retryDelay](https://oven-sh.github.io/bun-types/interfaces/fs_.RmDirOptions.md#retrydelay)

## Properties

### maxRetries

• `Optional` **maxRetries**: `number`

If an `EBUSY`, `EMFILE`, `ENFILE`, `ENOTEMPTY`, or
`EPERM` error is encountered, Node.js will retry the operation with a linear
backoff wait of `retryDelay` ms longer on each try. This option represents the
number of retries. This option is ignored if the `recursive` option is not
`true`.

**`Default`**

0

___

### recursive

• `Optional` **recursive**: `boolean`

**`Deprecated`**

since v14.14.0 In future versions of Node.js and will trigger a warning
`fs.rmdir(path, { recursive: true })` will throw if `path` does not exist or is a file.
Use `fs.rm(path, { recursive: true, force: true })` instead.

If `true`, perform a recursive directory removal. In
recursive mode operations are retried on failure.

**`Default`**

false

___

### retryDelay

• `Optional` **retryDelay**: `number`

The amount of time in milliseconds to wait between retries.
This option is ignored if the `recursive` option is not `true`.

**`Default`**

100
