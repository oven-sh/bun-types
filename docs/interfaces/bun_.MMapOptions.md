[bun-types](https://oven-sh.github.io/bun-types/README.md) / [Exports](https://oven-sh.github.io/bun-types/modules.md) / ["bun"](https://oven-sh.github.io/bun-types/modules/bun_.md) / MMapOptions

# Interface: MMapOptions

["bun"](https://oven-sh.github.io/bun-types/modules/bun_.md).MMapOptions

## Table of contents

### Properties

- [shared](https://oven-sh.github.io/bun-types/interfaces/bun_.MMapOptions.md#shared)
- [sync](https://oven-sh.github.io/bun-types/interfaces/bun_.MMapOptions.md#sync)

## Properties

### shared

• `Optional` **shared**: `boolean`

Allow other processes to see results instantly?
This enables MAP_SHARED. If false, it enables MAP_PRIVATE.

**`Default`**

true

___

### sync

• `Optional` **sync**: `boolean`

Sets MAP_SYNC flag on Linux. Ignored on macOS due to lack of support.
