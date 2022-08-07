[bun-types](https://oven-sh.github.io/bun-types/README.md) / [Exports](https://oven-sh.github.io/bun-types/modules.md) / ["fs"](https://oven-sh.github.io/bun-types/modules/fs_.md) / RmOptions

# Interface: RmOptions

["fs"](https://oven-sh.github.io/bun-types/modules/fs_.md).RmOptions

## Table of contents

### Properties

- [force](https://oven-sh.github.io/bun-types/interfaces/fs_.RmOptions.md#force)
- [maxRetries](https://oven-sh.github.io/bun-types/interfaces/fs_.RmOptions.md#maxretries)
- [recursive](https://oven-sh.github.io/bun-types/interfaces/fs_.RmOptions.md#recursive)
- [retryDelay](https://oven-sh.github.io/bun-types/interfaces/fs_.RmOptions.md#retrydelay)

## Properties

### force

• `Optional` **force**: `boolean`

When `true`, exceptions will be ignored if `path` does not exist.

**`Default`**

false

___

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

If `true`, perform a recursive directory removal. In
recursive mode, operations are retried on failure.

**`Default`**

false

___

### retryDelay

• `Optional` **retryDelay**: `number`

The amount of time in milliseconds to wait between retries.
This option is ignored if the `recursive` option is not `true`.

**`Default`**

100
