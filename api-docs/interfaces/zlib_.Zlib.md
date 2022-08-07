[bun-types](https://github.com/oven-sh/bun-types/blob/master/api-docs/README.md) / [Exports](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules.md) / ["zlib"](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/zlib_.md) / Zlib

# Interface: Zlib

["zlib"](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/zlib_.md).Zlib

## Hierarchy

- **`Zlib`**

  ↳ [`BrotliCompress`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/zlib_.BrotliCompress-1.md)

  ↳ [`BrotliDecompress`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/zlib_.BrotliDecompress-1.md)

  ↳ [`Gzip`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/zlib_.Gzip-1.md)

  ↳ [`Gunzip`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/zlib_.Gunzip-1.md)

  ↳ [`Deflate`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/zlib_.Deflate-1.md)

  ↳ [`Inflate`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/zlib_.Inflate-1.md)

  ↳ [`DeflateRaw`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/zlib_.DeflateRaw-1.md)

  ↳ [`InflateRaw`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/zlib_.InflateRaw-1.md)

  ↳ [`Unzip`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/zlib_.Unzip-1.md)

  ↳ [`BrotliCompress`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/node_zlib_.BrotliCompress-1.md)

  ↳ [`BrotliDecompress`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/node_zlib_.BrotliDecompress-1.md)

  ↳ [`Gzip`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/node_zlib_.Gzip-1.md)

  ↳ [`Gunzip`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/node_zlib_.Gunzip-1.md)

  ↳ [`Deflate`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/node_zlib_.Deflate-1.md)

  ↳ [`Inflate`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/node_zlib_.Inflate-1.md)

  ↳ [`DeflateRaw`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/node_zlib_.DeflateRaw-1.md)

  ↳ [`InflateRaw`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/node_zlib_.InflateRaw-1.md)

  ↳ [`Unzip`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/node_zlib_.Unzip-1.md)

## Table of contents

### Properties

- [bytesRead](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/zlib_.Zlib.md#bytesread)
- [bytesWritten](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/zlib_.Zlib.md#byteswritten)
- [shell](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/zlib_.Zlib.md#shell)

### Methods

- [flush](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/zlib_.Zlib.md#flush)

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
