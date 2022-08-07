[bun-types](https://github.com/oven-sh/bun-types/blob/master/api-docs/README.md) / [Exports](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules.md) / ["bun"](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/bun_.md) / MMapOptions

# Interface: MMapOptions

["bun"](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/bun_.md).MMapOptions

## Table of contents

### Properties

- [shared](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/bun_.MMapOptions.md#shared)
- [sync](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/bun_.MMapOptions.md#sync)

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
