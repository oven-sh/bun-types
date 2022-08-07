[bun-types](https://oven-sh.github.io/bun-types/README.md) / [Exports](https://oven-sh.github.io/bun-types/modules.md) / ["fs"](https://oven-sh.github.io/bun-types/modules/fs_.md) / Dirent

# Class: Dirent

["fs"](https://oven-sh.github.io/bun-types/modules/fs_.md).Dirent

A representation of a directory entry, which can be a file or a subdirectory
within the directory, as returned by reading from an `fs.Dir`. The
directory entry is a combination of the file name and file type pairs.

Additionally, when [readdir](https://oven-sh.github.io/bun-types/modules/fs_.md#readdir) or [readdirSync](https://oven-sh.github.io/bun-types/modules/fs_.md#readdirsync) is called with
the `withFileTypes` option set to `true`, the resulting array is filled with `fs.Dirent` objects, rather than strings or `Buffer` s.

**`Since`**

v0.0.67

## Table of contents

### Constructors

- [constructor](https://oven-sh.github.io/bun-types/classes/fs_.Dirent.md#constructor)

### Properties

- [name](https://oven-sh.github.io/bun-types/classes/fs_.Dirent.md#name)

### Methods

- [isBlockDevice](https://oven-sh.github.io/bun-types/classes/fs_.Dirent.md#isblockdevice)
- [isCharacterDevice](https://oven-sh.github.io/bun-types/classes/fs_.Dirent.md#ischaracterdevice)
- [isDirectory](https://oven-sh.github.io/bun-types/classes/fs_.Dirent.md#isdirectory)
- [isFIFO](https://oven-sh.github.io/bun-types/classes/fs_.Dirent.md#isfifo)
- [isFile](https://oven-sh.github.io/bun-types/classes/fs_.Dirent.md#isfile)
- [isSocket](https://oven-sh.github.io/bun-types/classes/fs_.Dirent.md#issocket)
- [isSymbolicLink](https://oven-sh.github.io/bun-types/classes/fs_.Dirent.md#issymboliclink)

## Constructors

### constructor

• **new Dirent**()

## Properties

### name

• **name**: `string`

The file name that this `fs.Dirent` object refers to. The type of this
value is determined by the `options.encoding` passed to [readdir](https://oven-sh.github.io/bun-types/modules/fs_.md#readdir) or [readdirSync](https://oven-sh.github.io/bun-types/modules/fs_.md#readdirsync).

**`Since`**

v0.0.67

## Methods

### isBlockDevice

▸ **isBlockDevice**(): `boolean`

Returns `true` if the `fs.Dirent` object describes a block device.

**`Since`**

v0.0.67

#### Returns

`boolean`

___

### isCharacterDevice

▸ **isCharacterDevice**(): `boolean`

Returns `true` if the `fs.Dirent` object describes a character device.

**`Since`**

v0.0.67

#### Returns

`boolean`

___

### isDirectory

▸ **isDirectory**(): `boolean`

Returns `true` if the `fs.Dirent` object describes a file system
directory.

**`Since`**

v0.0.67

#### Returns

`boolean`

___

### isFIFO

▸ **isFIFO**(): `boolean`

Returns `true` if the `fs.Dirent` object describes a first-in-first-out
(FIFO) pipe.

**`Since`**

v0.0.67

#### Returns

`boolean`

___

### isFile

▸ **isFile**(): `boolean`

Returns `true` if the `fs.Dirent` object describes a regular file.

**`Since`**

v0.0.67

#### Returns

`boolean`

___

### isSocket

▸ **isSocket**(): `boolean`

Returns `true` if the `fs.Dirent` object describes a socket.

**`Since`**

v0.0.67

#### Returns

`boolean`

___

### isSymbolicLink

▸ **isSymbolicLink**(): `boolean`

Returns `true` if the `fs.Dirent` object describes a symbolic link.

**`Since`**

v0.0.67

#### Returns

`boolean`
