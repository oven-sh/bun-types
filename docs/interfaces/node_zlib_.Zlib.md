[bun-types](https://oven-sh.github.io/bun-types/README.md) / [Exports](https://oven-sh.github.io/bun-types/modules.md) / ["node:zlib"](https://oven-sh.github.io/bun-types/modules/node_zlib_.md) / Zlib

# Interface: Zlib

["node:zlib"](https://oven-sh.github.io/bun-types/modules/node_zlib_.md).Zlib

## Table of contents

### Properties

- [bytesRead](https://oven-sh.github.io/bun-types/interfaces/node_zlib_.Zlib.md#bytesread)
- [bytesWritten](https://oven-sh.github.io/bun-types/interfaces/node_zlib_.Zlib.md#byteswritten)
- [shell](https://oven-sh.github.io/bun-types/interfaces/node_zlib_.Zlib.md#shell)

### Methods

- [flush](https://oven-sh.github.io/bun-types/interfaces/node_zlib_.Zlib.md#flush)

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
