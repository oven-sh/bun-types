[bun-types](https://oven-sh.github.io/bun-types/README.md) / [Exports](https://oven-sh.github.io/bun-types/modules.md) / ["node:fs"](https://oven-sh.github.io/bun-types/modules/node_fs_.md) / ReadAsyncOptions

# Interface: ReadAsyncOptions<TBuffer\>

["node:fs"](https://oven-sh.github.io/bun-types/modules/node_fs_.md).ReadAsyncOptions

## Type parameters

| Name | Type |
| :------ | :------ |
| `TBuffer` | extends `ArrayBufferView` |

## Hierarchy

- [`ReadSyncOptions`](https://oven-sh.github.io/bun-types/interfaces/fs_.ReadSyncOptions.md)

  ↳ **`ReadAsyncOptions`**

## Table of contents

### Properties

- [buffer](https://oven-sh.github.io/bun-types/interfaces/node_fs_.ReadAsyncOptions.md#buffer)
- [length](https://oven-sh.github.io/bun-types/interfaces/node_fs_.ReadAsyncOptions.md#length)
- [offset](https://oven-sh.github.io/bun-types/interfaces/node_fs_.ReadAsyncOptions.md#offset)
- [position](https://oven-sh.github.io/bun-types/interfaces/node_fs_.ReadAsyncOptions.md#position)

## Properties

### buffer

• `Optional` **buffer**: `TBuffer`

___

### length

• `Optional` **length**: `number`

**`Default`**

`length of buffer`

#### Inherited from

[ReadSyncOptions](https://oven-sh.github.io/bun-types/interfaces/fs_.ReadSyncOptions.md).[length](https://oven-sh.github.io/bun-types/interfaces/fs_.ReadSyncOptions.md#length)

___

### offset

• `Optional` **offset**: `number`

**`Default`**

0

#### Inherited from

[ReadSyncOptions](https://oven-sh.github.io/bun-types/interfaces/fs_.ReadSyncOptions.md).[offset](https://oven-sh.github.io/bun-types/interfaces/fs_.ReadSyncOptions.md#offset)

___

### position

• `Optional` **position**: [`ReadPosition`](https://oven-sh.github.io/bun-types/modules/fs_.md#readposition)

**`Default`**

null

#### Inherited from

[ReadSyncOptions](https://oven-sh.github.io/bun-types/interfaces/fs_.ReadSyncOptions.md).[position](https://oven-sh.github.io/bun-types/interfaces/fs_.ReadSyncOptions.md#position)
