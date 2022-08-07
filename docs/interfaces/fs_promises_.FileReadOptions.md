[bun-types](https://oven-sh.github.io/bun-types/README.md) / [Exports](https://oven-sh.github.io/bun-types/modules.md) / ["fs/promises"](https://oven-sh.github.io/bun-types/modules/fs_promises_.md) / FileReadOptions

# Interface: FileReadOptions<T\>

["fs/promises"](https://oven-sh.github.io/bun-types/modules/fs_promises_.md).FileReadOptions

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `ArrayBufferView` = [`Buffer`](https://oven-sh.github.io/bun-types/modules/buffer_.md#buffer) |

## Table of contents

### Properties

- [buffer](https://oven-sh.github.io/bun-types/interfaces/fs_promises_.FileReadOptions.md#buffer)
- [length](https://oven-sh.github.io/bun-types/interfaces/fs_promises_.FileReadOptions.md#length)
- [offset](https://oven-sh.github.io/bun-types/interfaces/fs_promises_.FileReadOptions.md#offset)
- [position](https://oven-sh.github.io/bun-types/interfaces/fs_promises_.FileReadOptions.md#position)

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
