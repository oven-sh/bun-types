[bun-types](https://github.com/oven-sh/bun-types/blob/master/api-docs/README.md) / [Exports](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules.md) / ["fs"](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/fs_.md) / ReadAsyncOptions

# Interface: ReadAsyncOptions<TBuffer\>

["fs"](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/fs_.md).ReadAsyncOptions

## Type parameters

| Name | Type |
| :------ | :------ |
| `TBuffer` | extends `ArrayBufferView` |

## Hierarchy

- [`ReadSyncOptions`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/fs_.ReadSyncOptions.md)

  ↳ **`ReadAsyncOptions`**

## Table of contents

### Properties

- [buffer](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/fs_.ReadAsyncOptions.md#buffer)
- [length](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/fs_.ReadAsyncOptions.md#length)
- [offset](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/fs_.ReadAsyncOptions.md#offset)
- [position](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/fs_.ReadAsyncOptions.md#position)

## Properties

### buffer

• `Optional` **buffer**: `TBuffer`

___

### length

• `Optional` **length**: `number`

**`Default`**

`length of buffer`

#### Inherited from

[ReadSyncOptions](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/fs_.ReadSyncOptions.md).[length](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/fs_.ReadSyncOptions.md#length)

___

### offset

• `Optional` **offset**: `number`

**`Default`**

0

#### Inherited from

[ReadSyncOptions](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/fs_.ReadSyncOptions.md).[offset](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/fs_.ReadSyncOptions.md#offset)

___

### position

• `Optional` **position**: [`ReadPosition`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/fs_.md#readposition)

**`Default`**

null

#### Inherited from

[ReadSyncOptions](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/fs_.ReadSyncOptions.md).[position](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/fs_.ReadSyncOptions.md#position)
