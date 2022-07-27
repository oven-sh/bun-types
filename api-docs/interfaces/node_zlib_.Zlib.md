[bun-types](https://github.com/oven-sh/bun-types/blob/master/api-docs/README.md) / [Exports](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules.md) / ["node:zlib"](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/node_zlib_.md) / Zlib

# Interface: Zlib

["node:zlib"](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/node_zlib_.md).Zlib

## Table of contents

### Properties

- [bytesRead](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/node_zlib_.Zlib.md#bytesread)
- [bytesWritten](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/node_zlib_.Zlib.md#byteswritten)
- [shell](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/node_zlib_.Zlib.md#shell)

### Methods

- [flush](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/node_zlib_.Zlib.md#flush)

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
