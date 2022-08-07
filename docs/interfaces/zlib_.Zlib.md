[bun-types](https://oven-sh.github.io/bun-types/README.md) / [Exports](https://oven-sh.github.io/bun-types/modules.md) / ["zlib"](https://oven-sh.github.io/bun-types/modules/zlib_.md) / Zlib

# Interface: Zlib

["zlib"](https://oven-sh.github.io/bun-types/modules/zlib_.md).Zlib

## Hierarchy

- **`Zlib`**

  ↳ [`BrotliCompress`](https://oven-sh.github.io/bun-types/interfaces/zlib_.BrotliCompress-1.md)

  ↳ [`BrotliDecompress`](https://oven-sh.github.io/bun-types/interfaces/zlib_.BrotliDecompress-1.md)

  ↳ [`Gzip`](https://oven-sh.github.io/bun-types/interfaces/zlib_.Gzip-1.md)

  ↳ [`Gunzip`](https://oven-sh.github.io/bun-types/interfaces/zlib_.Gunzip-1.md)

  ↳ [`Deflate`](https://oven-sh.github.io/bun-types/interfaces/zlib_.Deflate-1.md)

  ↳ [`Inflate`](https://oven-sh.github.io/bun-types/interfaces/zlib_.Inflate-1.md)

  ↳ [`DeflateRaw`](https://oven-sh.github.io/bun-types/interfaces/zlib_.DeflateRaw-1.md)

  ↳ [`InflateRaw`](https://oven-sh.github.io/bun-types/interfaces/zlib_.InflateRaw-1.md)

  ↳ [`Unzip`](https://oven-sh.github.io/bun-types/interfaces/zlib_.Unzip-1.md)

  ↳ [`BrotliCompress`](https://oven-sh.github.io/bun-types/interfaces/node_zlib_.BrotliCompress-1.md)

  ↳ [`BrotliDecompress`](https://oven-sh.github.io/bun-types/interfaces/node_zlib_.BrotliDecompress-1.md)

  ↳ [`Gzip`](https://oven-sh.github.io/bun-types/interfaces/node_zlib_.Gzip-1.md)

  ↳ [`Gunzip`](https://oven-sh.github.io/bun-types/interfaces/node_zlib_.Gunzip-1.md)

  ↳ [`Deflate`](https://oven-sh.github.io/bun-types/interfaces/node_zlib_.Deflate-1.md)

  ↳ [`Inflate`](https://oven-sh.github.io/bun-types/interfaces/node_zlib_.Inflate-1.md)

  ↳ [`DeflateRaw`](https://oven-sh.github.io/bun-types/interfaces/node_zlib_.DeflateRaw-1.md)

  ↳ [`InflateRaw`](https://oven-sh.github.io/bun-types/interfaces/node_zlib_.InflateRaw-1.md)

  ↳ [`Unzip`](https://oven-sh.github.io/bun-types/interfaces/node_zlib_.Unzip-1.md)

## Table of contents

### Properties

- [bytesRead](https://oven-sh.github.io/bun-types/interfaces/zlib_.Zlib.md#bytesread)
- [bytesWritten](https://oven-sh.github.io/bun-types/interfaces/zlib_.Zlib.md#byteswritten)
- [shell](https://oven-sh.github.io/bun-types/interfaces/zlib_.Zlib.md#shell)

### Methods

- [flush](https://oven-sh.github.io/bun-types/interfaces/zlib_.Zlib.md#flush)

## Properties

### bytesRead

• `Readonly` **bytesRead**: `number`

**`Deprecated`**

Use bytesWritten instead.

___

### bytesWritten

• `Readonly` **bytesWritten**: `number`

___

### shell

• `Optional` **shell**: `string` \| `boolean`

## Methods

### flush

▸ **flush**(`kind?`, `callback?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `kind?` | `number` |
| `callback?` | () => `void` |

#### Returns

`void`

▸ **flush**(`callback?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback?` | () => `void` |

#### Returns

`void`

▸ **flush**(`kind?`, `callback?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `kind?` | `number` |
| `callback?` | () => `void` |

#### Returns

`void`

▸ **flush**(`callback?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback?` | () => `void` |

#### Returns

`void`
