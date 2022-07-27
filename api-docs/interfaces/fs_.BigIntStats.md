[bun-types](https://github.com/oven-sh/bun-types/blob/master/api-docs/README.md) / [Exports](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules.md) / ["fs"](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/fs_.md) / BigIntStats

# Interface: BigIntStats

["fs"](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/fs_.md).BigIntStats

## Hierarchy

- [`StatsBase`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/fs_.StatsBase.md)<`bigint`\>

  ↳ **`BigIntStats`**

## Table of contents

### Properties

- [atime](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/fs_.BigIntStats.md#atime)
- [atimeMs](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/fs_.BigIntStats.md#atimems)
- [atimeNs](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/fs_.BigIntStats.md#atimens)
- [birthtime](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/fs_.BigIntStats.md#birthtime)
- [birthtimeMs](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/fs_.BigIntStats.md#birthtimems)
- [birthtimeNs](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/fs_.BigIntStats.md#birthtimens)
- [blksize](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/fs_.BigIntStats.md#blksize)
- [blocks](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/fs_.BigIntStats.md#blocks)
- [ctime](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/fs_.BigIntStats.md#ctime)
- [ctimeMs](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/fs_.BigIntStats.md#ctimems)
- [ctimeNs](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/fs_.BigIntStats.md#ctimens)
- [dev](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/fs_.BigIntStats.md#dev)
- [gid](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/fs_.BigIntStats.md#gid)
- [ino](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/fs_.BigIntStats.md#ino)
- [mode](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/fs_.BigIntStats.md#mode)
- [mtime](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/fs_.BigIntStats.md#mtime)
- [mtimeMs](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/fs_.BigIntStats.md#mtimems)
- [mtimeNs](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/fs_.BigIntStats.md#mtimens)
- [nlink](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/fs_.BigIntStats.md#nlink)
- [rdev](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/fs_.BigIntStats.md#rdev)
- [size](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/fs_.BigIntStats.md#size)
- [uid](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/fs_.BigIntStats.md#uid)

### Methods

- [isBlockDevice](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/fs_.BigIntStats.md#isblockdevice)
- [isCharacterDevice](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/fs_.BigIntStats.md#ischaracterdevice)
- [isDirectory](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/fs_.BigIntStats.md#isdirectory)
- [isFIFO](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/fs_.BigIntStats.md#isfifo)
- [isFile](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/fs_.BigIntStats.md#isfile)
- [isSocket](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/fs_.BigIntStats.md#issocket)
- [isSymbolicLink](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/fs_.BigIntStats.md#issymboliclink)

## Properties

### atime

• **atime**: `Date`

#### Inherited from

[StatsBase](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/fs_.StatsBase.md).[atime](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/fs_.StatsBase.md#atime)

___

### atimeMs

• **atimeMs**: `bigint`

#### Inherited from

[StatsBase](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/fs_.StatsBase.md).[atimeMs](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/fs_.StatsBase.md#atimems)

___

### atimeNs

• **atimeNs**: `bigint`

___

### birthtime

• **birthtime**: `Date`

#### Inherited from

[StatsBase](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/fs_.StatsBase.md).[birthtime](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/fs_.StatsBase.md#birthtime)

___

### birthtimeMs

• **birthtimeMs**: `bigint`

#### Inherited from

[StatsBase](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/fs_.StatsBase.md).[birthtimeMs](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/fs_.StatsBase.md#birthtimems)

___

### birthtimeNs

• **birthtimeNs**: `bigint`

___

### blksize

• **blksize**: `bigint`

#### Inherited from

[StatsBase](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/fs_.StatsBase.md).[blksize](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/fs_.StatsBase.md#blksize)

___

### blocks

• **blocks**: `bigint`

#### Inherited from

[StatsBase](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/fs_.StatsBase.md).[blocks](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/fs_.StatsBase.md#blocks)

___

### ctime

• **ctime**: `Date`

#### Inherited from

[StatsBase](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/fs_.StatsBase.md).[ctime](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/fs_.StatsBase.md#ctime)

___

### ctimeMs

• **ctimeMs**: `bigint`

#### Inherited from

[StatsBase](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/fs_.StatsBase.md).[ctimeMs](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/fs_.StatsBase.md#ctimems)

___

### ctimeNs

• **ctimeNs**: `bigint`

___

### dev

• **dev**: `bigint`

#### Inherited from

[StatsBase](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/fs_.StatsBase.md).[dev](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/fs_.StatsBase.md#dev)

___

### gid

• **gid**: `bigint`

#### Inherited from

[StatsBase](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/fs_.StatsBase.md).[gid](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/fs_.StatsBase.md#gid)

___

### ino

• **ino**: `bigint`

#### Inherited from

[StatsBase](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/fs_.StatsBase.md).[ino](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/fs_.StatsBase.md#ino)

___

### mode

• **mode**: `bigint`

#### Inherited from

[StatsBase](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/fs_.StatsBase.md).[mode](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/fs_.StatsBase.md#mode)

___

### mtime

• **mtime**: `Date`

#### Inherited from

[StatsBase](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/fs_.StatsBase.md).[mtime](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/fs_.StatsBase.md#mtime)

___

### mtimeMs

• **mtimeMs**: `bigint`

#### Inherited from

[StatsBase](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/fs_.StatsBase.md).[mtimeMs](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/fs_.StatsBase.md#mtimems)

___

### mtimeNs

• **mtimeNs**: `bigint`

___

### nlink

• **nlink**: `bigint`

#### Inherited from

[StatsBase](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/fs_.StatsBase.md).[nlink](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/fs_.StatsBase.md#nlink)

___

### rdev

• **rdev**: `bigint`

#### Inherited from

[StatsBase](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/fs_.StatsBase.md).[rdev](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/fs_.StatsBase.md#rdev)

___

### size

• **size**: `bigint`

#### Inherited from

[StatsBase](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/fs_.StatsBase.md).[size](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/fs_.StatsBase.md#size)

___

### uid

• **uid**: `bigint`

#### Inherited from

[StatsBase](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/fs_.StatsBase.md).[uid](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/fs_.StatsBase.md#uid)

## Methods

### isBlockDevice

▸ **isBlockDevice**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[StatsBase](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/fs_.StatsBase.md).[isBlockDevice](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/fs_.StatsBase.md#isblockdevice)

▸ **isBlockDevice**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[StatsBase](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/fs_.StatsBase.md).[isBlockDevice](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/fs_.StatsBase.md#isblockdevice)

___

### isCharacterDevice

▸ **isCharacterDevice**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[StatsBase](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/fs_.StatsBase.md).[isCharacterDevice](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/fs_.StatsBase.md#ischaracterdevice)

▸ **isCharacterDevice**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[StatsBase](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/fs_.StatsBase.md).[isCharacterDevice](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/fs_.StatsBase.md#ischaracterdevice)

___

### isDirectory

▸ **isDirectory**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[StatsBase](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/fs_.StatsBase.md).[isDirectory](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/fs_.StatsBase.md#isdirectory)

▸ **isDirectory**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[StatsBase](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/fs_.StatsBase.md).[isDirectory](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/fs_.StatsBase.md#isdirectory)

___

### isFIFO

▸ **isFIFO**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[StatsBase](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/fs_.StatsBase.md).[isFIFO](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/fs_.StatsBase.md#isfifo)

▸ **isFIFO**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[StatsBase](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/fs_.StatsBase.md).[isFIFO](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/fs_.StatsBase.md#isfifo)

___

### isFile

▸ **isFile**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[StatsBase](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/fs_.StatsBase.md).[isFile](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/fs_.StatsBase.md#isfile)

▸ **isFile**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[StatsBase](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/fs_.StatsBase.md).[isFile](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/fs_.StatsBase.md#isfile)

___

### isSocket

▸ **isSocket**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[StatsBase](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/fs_.StatsBase.md).[isSocket](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/fs_.StatsBase.md#issocket)

▸ **isSocket**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[StatsBase](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/fs_.StatsBase.md).[isSocket](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/fs_.StatsBase.md#issocket)

___

### isSymbolicLink

▸ **isSymbolicLink**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[StatsBase](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/fs_.StatsBase.md).[isSymbolicLink](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/fs_.StatsBase.md#issymboliclink)

▸ **isSymbolicLink**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[StatsBase](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/fs_.StatsBase.md).[isSymbolicLink](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/fs_.StatsBase.md#issymboliclink)
