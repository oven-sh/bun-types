[bun-types](https://github.com/oven-sh/bun-types/blob/master/api-docs/README.md) / [Exports](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules.md) / ["fs/promises"](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/fs_promises_.md) / FileReadOptions

# Interface: FileReadOptions<T\>

["fs/promises"](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/fs_promises_.md).FileReadOptions

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `ArrayBufferView` = [`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer) |

## Table of contents

### Properties

- [buffer](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/fs_promises_.FileReadOptions.md#buffer)
- [length](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/fs_promises_.FileReadOptions.md#length)
- [offset](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/fs_promises_.FileReadOptions.md#offset)
- [position](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/fs_promises_.FileReadOptions.md#position)

## Properties

### buffer

• `Optional` **buffer**: `T`

**`Default`**

`Buffer.alloc(0xffff)`

___

### length

• `Optional` **length**: `number`

**`Default`**

`buffer.byteLength`

___

### offset

• `Optional` **offset**: `number`

**`Default`**

0

___

### position

• `Optional` **position**: `number`
