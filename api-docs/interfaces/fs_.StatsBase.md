[bun-types](https://github.com/oven-sh/bun-types/blob/master/api-docs/README.md) / [Exports](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules.md) / ["fs"](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/fs_.md) / StatsBase

# Interface: StatsBase<T\>

["fs"](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/fs_.md).StatsBase

## Type parameters

| Name |
| :------ |
| `T` |

## Hierarchy

- **`StatsBase`**

  ↳ [`Stats`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/fs_.Stats.md)

  ↳ [`BigIntStats`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/fs_.BigIntStats.md)

  ↳ [`Stats`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/node_fs_.Stats.md)

  ↳ [`BigIntStats`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/node_fs_.BigIntStats.md)

## Table of contents

### Properties

- [atime](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/fs_.StatsBase.md#atime)
- [atimeMs](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/fs_.StatsBase.md#atimems)
- [birthtime](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/fs_.StatsBase.md#birthtime)
- [birthtimeMs](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/fs_.StatsBase.md#birthtimems)
- [blksize](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/fs_.StatsBase.md#blksize)
- [blocks](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/fs_.StatsBase.md#blocks)
- [ctime](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/fs_.StatsBase.md#ctime)
- [ctimeMs](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/fs_.StatsBase.md#ctimems)
- [dev](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/fs_.StatsBase.md#dev)
- [gid](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/fs_.StatsBase.md#gid)
- [ino](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/fs_.StatsBase.md#ino)
- [mode](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/fs_.StatsBase.md#mode)
- [mtime](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/fs_.StatsBase.md#mtime)
- [mtimeMs](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/fs_.StatsBase.md#mtimems)
- [nlink](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/fs_.StatsBase.md#nlink)
- [rdev](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/fs_.StatsBase.md#rdev)
- [size](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/fs_.StatsBase.md#size)
- [uid](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/fs_.StatsBase.md#uid)

### Methods

- [isBlockDevice](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/fs_.StatsBase.md#isblockdevice)
- [isCharacterDevice](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/fs_.StatsBase.md#ischaracterdevice)
- [isDirectory](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/fs_.StatsBase.md#isdirectory)
- [isFIFO](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/fs_.StatsBase.md#isfifo)
- [isFile](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/fs_.StatsBase.md#isfile)
- [isSocket](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/fs_.StatsBase.md#issocket)
- [isSymbolicLink](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/fs_.StatsBase.md#issymboliclink)

## Properties

### atime

• **atime**: `Date`

___

### atimeMs

• **atimeMs**: `T`

___

### birthtime

• **birthtime**: `Date`

___

### birthtimeMs

• **birthtimeMs**: `T`

___

### blksize

• **blksize**: `T`

___

### blocks

• **blocks**: `T`

___

### ctime

• **ctime**: `Date`

___

### ctimeMs

• **ctimeMs**: `T`

___

### dev

• **dev**: `T`

___

### gid

• **gid**: `T`

___

### ino

• **ino**: `T`

___

### mode

• **mode**: `T`

___

### mtime

• **mtime**: `Date`

___

### mtimeMs

• **mtimeMs**: `T`

___

### nlink

• **nlink**: `T`

___

### rdev

• **rdev**: `T`

___

### size

• **size**: `T`

___

### uid

• **uid**: `T`

## Methods

### isBlockDevice

▸ **isBlockDevice**(): `boolean`

#### Returns

`boolean`

▸ **isBlockDevice**(): `boolean`

#### Returns

`boolean`

___

### isCharacterDevice

▸ **isCharacterDevice**(): `boolean`

#### Returns

`boolean`

▸ **isCharacterDevice**(): `boolean`

#### Returns

`boolean`

___

### isDirectory

▸ **isDirectory**(): `boolean`

#### Returns

`boolean`

▸ **isDirectory**(): `boolean`

#### Returns

`boolean`

___

### isFIFO

▸ **isFIFO**(): `boolean`

#### Returns

`boolean`

▸ **isFIFO**(): `boolean`

#### Returns

`boolean`

___

### isFile

▸ **isFile**(): `boolean`

#### Returns

`boolean`

▸ **isFile**(): `boolean`

#### Returns

`boolean`

___

### isSocket

▸ **isSocket**(): `boolean`

#### Returns

`boolean`

▸ **isSocket**(): `boolean`

#### Returns

`boolean`

___

### isSymbolicLink

▸ **isSymbolicLink**(): `boolean`

#### Returns

`boolean`

▸ **isSymbolicLink**(): `boolean`

#### Returns

`boolean`
