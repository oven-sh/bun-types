[bun-types](https://oven-sh.github.io/bun-types/README.md) / [Exports](https://oven-sh.github.io/bun-types/modules.md) / ["node:fs"](https://oven-sh.github.io/bun-types/modules/node_fs_.md) / Stats

# Class: Stats

["node:fs"](https://oven-sh.github.io/bun-types/modules/node_fs_.md).Stats

A `fs.Stats` object provides information about a file.

Objects returned from [stat](https://oven-sh.github.io/bun-types/modules/node_fs_.md#stat), [lstat](https://oven-sh.github.io/bun-types/modules/node_fs_.md#lstat) and [fstat](https://oven-sh.github.io/bun-types/modules/node_fs_.md#fstat) and
their synchronous counterparts are of this type.
If `bigint` in the `options` passed to those methods is true, the numeric values
will be `bigint` instead of `number`, and the object will contain additional
nanosecond-precision properties suffixed with `Ns`.

```console
Stats {
  dev: 2114,
  ino: 48064969,
  mode: 33188,
  nlink: 1,
  uid: 85,
  gid: 100,
  rdev: 0,
  size: 527,
  blksize: 4096,
  blocks: 8,
  atimeMs: 1318289051000.1,
  mtimeMs: 1318289051000.1,
  ctimeMs: 1318289051000.1,
  birthtimeMs: 1318289051000.1,
  atime: Mon, 10 Oct 2011 23:24:11 GMT,
  mtime: Mon, 10 Oct 2011 23:24:11 GMT,
  ctime: Mon, 10 Oct 2011 23:24:11 GMT,
  birthtime: Mon, 10 Oct 2011 23:24:11 GMT }
```

`bigint` version:

```console
BigIntStats {
  dev: 2114n,
  ino: 48064969n,
  mode: 33188n,
  nlink: 1n,
  uid: 85n,
  gid: 100n,
  rdev: 0n,
  size: 527n,
  blksize: 4096n,
  blocks: 8n,
  atimeMs: 1318289051000n,
  mtimeMs: 1318289051000n,
  ctimeMs: 1318289051000n,
  birthtimeMs: 1318289051000n,
  atimeNs: 1318289051000000000n,
  mtimeNs: 1318289051000000000n,
  ctimeNs: 1318289051000000000n,
  birthtimeNs: 1318289051000000000n,
  atime: Mon, 10 Oct 2011 23:24:11 GMT,
  mtime: Mon, 10 Oct 2011 23:24:11 GMT,
  ctime: Mon, 10 Oct 2011 23:24:11 GMT,
  birthtime: Mon, 10 Oct 2011 23:24:11 GMT }
```

**`Since`**

v0.0.67

## Hierarchy

- [`StatsBase`](https://oven-sh.github.io/bun-types/interfaces/fs_.StatsBase.md)<`number`\>

  ↳ **`Stats`**

## Table of contents

### Constructors

- [constructor](https://oven-sh.github.io/bun-types/classes/node_fs_.Stats.md#constructor)

### Properties

- [atime](https://oven-sh.github.io/bun-types/classes/node_fs_.Stats.md#atime)
- [atimeMs](https://oven-sh.github.io/bun-types/classes/node_fs_.Stats.md#atimems)
- [birthtime](https://oven-sh.github.io/bun-types/classes/node_fs_.Stats.md#birthtime)
- [birthtimeMs](https://oven-sh.github.io/bun-types/classes/node_fs_.Stats.md#birthtimems)
- [blksize](https://oven-sh.github.io/bun-types/classes/node_fs_.Stats.md#blksize)
- [blocks](https://oven-sh.github.io/bun-types/classes/node_fs_.Stats.md#blocks)
- [ctime](https://oven-sh.github.io/bun-types/classes/node_fs_.Stats.md#ctime)
- [ctimeMs](https://oven-sh.github.io/bun-types/classes/node_fs_.Stats.md#ctimems)
- [dev](https://oven-sh.github.io/bun-types/classes/node_fs_.Stats.md#dev)
- [gid](https://oven-sh.github.io/bun-types/classes/node_fs_.Stats.md#gid)
- [ino](https://oven-sh.github.io/bun-types/classes/node_fs_.Stats.md#ino)
- [mode](https://oven-sh.github.io/bun-types/classes/node_fs_.Stats.md#mode)
- [mtime](https://oven-sh.github.io/bun-types/classes/node_fs_.Stats.md#mtime)
- [mtimeMs](https://oven-sh.github.io/bun-types/classes/node_fs_.Stats.md#mtimems)
- [nlink](https://oven-sh.github.io/bun-types/classes/node_fs_.Stats.md#nlink)
- [rdev](https://oven-sh.github.io/bun-types/classes/node_fs_.Stats.md#rdev)
- [size](https://oven-sh.github.io/bun-types/classes/node_fs_.Stats.md#size)
- [uid](https://oven-sh.github.io/bun-types/classes/node_fs_.Stats.md#uid)

### Methods

- [isBlockDevice](https://oven-sh.github.io/bun-types/classes/node_fs_.Stats.md#isblockdevice)
- [isCharacterDevice](https://oven-sh.github.io/bun-types/classes/node_fs_.Stats.md#ischaracterdevice)
- [isDirectory](https://oven-sh.github.io/bun-types/classes/node_fs_.Stats.md#isdirectory)
- [isFIFO](https://oven-sh.github.io/bun-types/classes/node_fs_.Stats.md#isfifo)
- [isFile](https://oven-sh.github.io/bun-types/classes/node_fs_.Stats.md#isfile)
- [isSocket](https://oven-sh.github.io/bun-types/classes/node_fs_.Stats.md#issocket)
- [isSymbolicLink](https://oven-sh.github.io/bun-types/classes/node_fs_.Stats.md#issymboliclink)

## Constructors

### constructor

• **new Stats**()

#### Inherited from

StatsBase<number\>.constructor

## Properties

### atime

• **atime**: `Date`

#### Inherited from

[StatsBase](https://oven-sh.github.io/bun-types/interfaces/fs_.StatsBase.md).[atime](https://oven-sh.github.io/bun-types/interfaces/fs_.StatsBase.md#atime)

___

### atimeMs

• **atimeMs**: `number`

#### Inherited from

[StatsBase](https://oven-sh.github.io/bun-types/interfaces/fs_.StatsBase.md).[atimeMs](https://oven-sh.github.io/bun-types/interfaces/fs_.StatsBase.md#atimems)

___

### birthtime

• **birthtime**: `Date`

#### Inherited from

[StatsBase](https://oven-sh.github.io/bun-types/interfaces/fs_.StatsBase.md).[birthtime](https://oven-sh.github.io/bun-types/interfaces/fs_.StatsBase.md#birthtime)

___

### birthtimeMs

• **birthtimeMs**: `number`

#### Inherited from

[StatsBase](https://oven-sh.github.io/bun-types/interfaces/fs_.StatsBase.md).[birthtimeMs](https://oven-sh.github.io/bun-types/interfaces/fs_.StatsBase.md#birthtimems)

___

### blksize

• **blksize**: `number`

#### Inherited from

[StatsBase](https://oven-sh.github.io/bun-types/interfaces/fs_.StatsBase.md).[blksize](https://oven-sh.github.io/bun-types/interfaces/fs_.StatsBase.md#blksize)

___

### blocks

• **blocks**: `number`

#### Inherited from

[StatsBase](https://oven-sh.github.io/bun-types/interfaces/fs_.StatsBase.md).[blocks](https://oven-sh.github.io/bun-types/interfaces/fs_.StatsBase.md#blocks)

___

### ctime

• **ctime**: `Date`

#### Inherited from

[StatsBase](https://oven-sh.github.io/bun-types/interfaces/fs_.StatsBase.md).[ctime](https://oven-sh.github.io/bun-types/interfaces/fs_.StatsBase.md#ctime)

___

### ctimeMs

• **ctimeMs**: `number`

#### Inherited from

[StatsBase](https://oven-sh.github.io/bun-types/interfaces/fs_.StatsBase.md).[ctimeMs](https://oven-sh.github.io/bun-types/interfaces/fs_.StatsBase.md#ctimems)

___

### dev

• **dev**: `number`

#### Inherited from

[StatsBase](https://oven-sh.github.io/bun-types/interfaces/fs_.StatsBase.md).[dev](https://oven-sh.github.io/bun-types/interfaces/fs_.StatsBase.md#dev)

___

### gid

• **gid**: `number`

#### Inherited from

[StatsBase](https://oven-sh.github.io/bun-types/interfaces/fs_.StatsBase.md).[gid](https://oven-sh.github.io/bun-types/interfaces/fs_.StatsBase.md#gid)

___

### ino

• **ino**: `number`

#### Inherited from

[StatsBase](https://oven-sh.github.io/bun-types/interfaces/fs_.StatsBase.md).[ino](https://oven-sh.github.io/bun-types/interfaces/fs_.StatsBase.md#ino)

___

### mode

• **mode**: `number`

#### Inherited from

[StatsBase](https://oven-sh.github.io/bun-types/interfaces/fs_.StatsBase.md).[mode](https://oven-sh.github.io/bun-types/interfaces/fs_.StatsBase.md#mode)

___

### mtime

• **mtime**: `Date`

#### Inherited from

[StatsBase](https://oven-sh.github.io/bun-types/interfaces/fs_.StatsBase.md).[mtime](https://oven-sh.github.io/bun-types/interfaces/fs_.StatsBase.md#mtime)

___

### mtimeMs

• **mtimeMs**: `number`

#### Inherited from

[StatsBase](https://oven-sh.github.io/bun-types/interfaces/fs_.StatsBase.md).[mtimeMs](https://oven-sh.github.io/bun-types/interfaces/fs_.StatsBase.md#mtimems)

___

### nlink

• **nlink**: `number`

#### Inherited from

[StatsBase](https://oven-sh.github.io/bun-types/interfaces/fs_.StatsBase.md).[nlink](https://oven-sh.github.io/bun-types/interfaces/fs_.StatsBase.md#nlink)

___

### rdev

• **rdev**: `number`

#### Inherited from

[StatsBase](https://oven-sh.github.io/bun-types/interfaces/fs_.StatsBase.md).[rdev](https://oven-sh.github.io/bun-types/interfaces/fs_.StatsBase.md#rdev)

___

### size

• **size**: `number`

#### Inherited from

[StatsBase](https://oven-sh.github.io/bun-types/interfaces/fs_.StatsBase.md).[size](https://oven-sh.github.io/bun-types/interfaces/fs_.StatsBase.md#size)

___

### uid

• **uid**: `number`

#### Inherited from

[StatsBase](https://oven-sh.github.io/bun-types/interfaces/fs_.StatsBase.md).[uid](https://oven-sh.github.io/bun-types/interfaces/fs_.StatsBase.md#uid)

## Methods

### isBlockDevice

▸ **isBlockDevice**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[StatsBase](https://oven-sh.github.io/bun-types/interfaces/fs_.StatsBase.md).[isBlockDevice](https://oven-sh.github.io/bun-types/interfaces/fs_.StatsBase.md#isblockdevice)

▸ **isBlockDevice**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[StatsBase](https://oven-sh.github.io/bun-types/interfaces/fs_.StatsBase.md).[isBlockDevice](https://oven-sh.github.io/bun-types/interfaces/fs_.StatsBase.md#isblockdevice)

___

### isCharacterDevice

▸ **isCharacterDevice**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[StatsBase](https://oven-sh.github.io/bun-types/interfaces/fs_.StatsBase.md).[isCharacterDevice](https://oven-sh.github.io/bun-types/interfaces/fs_.StatsBase.md#ischaracterdevice)

▸ **isCharacterDevice**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[StatsBase](https://oven-sh.github.io/bun-types/interfaces/fs_.StatsBase.md).[isCharacterDevice](https://oven-sh.github.io/bun-types/interfaces/fs_.StatsBase.md#ischaracterdevice)

___

### isDirectory

▸ **isDirectory**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[StatsBase](https://oven-sh.github.io/bun-types/interfaces/fs_.StatsBase.md).[isDirectory](https://oven-sh.github.io/bun-types/interfaces/fs_.StatsBase.md#isdirectory)

▸ **isDirectory**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[StatsBase](https://oven-sh.github.io/bun-types/interfaces/fs_.StatsBase.md).[isDirectory](https://oven-sh.github.io/bun-types/interfaces/fs_.StatsBase.md#isdirectory)

___

### isFIFO

▸ **isFIFO**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[StatsBase](https://oven-sh.github.io/bun-types/interfaces/fs_.StatsBase.md).[isFIFO](https://oven-sh.github.io/bun-types/interfaces/fs_.StatsBase.md#isfifo)

▸ **isFIFO**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[StatsBase](https://oven-sh.github.io/bun-types/interfaces/fs_.StatsBase.md).[isFIFO](https://oven-sh.github.io/bun-types/interfaces/fs_.StatsBase.md#isfifo)

___

### isFile

▸ **isFile**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[StatsBase](https://oven-sh.github.io/bun-types/interfaces/fs_.StatsBase.md).[isFile](https://oven-sh.github.io/bun-types/interfaces/fs_.StatsBase.md#isfile)

▸ **isFile**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[StatsBase](https://oven-sh.github.io/bun-types/interfaces/fs_.StatsBase.md).[isFile](https://oven-sh.github.io/bun-types/interfaces/fs_.StatsBase.md#isfile)

___

### isSocket

▸ **isSocket**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[StatsBase](https://oven-sh.github.io/bun-types/interfaces/fs_.StatsBase.md).[isSocket](https://oven-sh.github.io/bun-types/interfaces/fs_.StatsBase.md#issocket)

▸ **isSocket**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[StatsBase](https://oven-sh.github.io/bun-types/interfaces/fs_.StatsBase.md).[isSocket](https://oven-sh.github.io/bun-types/interfaces/fs_.StatsBase.md#issocket)

___

### isSymbolicLink

▸ **isSymbolicLink**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[StatsBase](https://oven-sh.github.io/bun-types/interfaces/fs_.StatsBase.md).[isSymbolicLink](https://oven-sh.github.io/bun-types/interfaces/fs_.StatsBase.md#issymboliclink)

▸ **isSymbolicLink**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[StatsBase](https://oven-sh.github.io/bun-types/interfaces/fs_.StatsBase.md).[isSymbolicLink](https://oven-sh.github.io/bun-types/interfaces/fs_.StatsBase.md#issymboliclink)
