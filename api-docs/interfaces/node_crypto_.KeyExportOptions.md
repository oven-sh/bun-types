[bun-types](https://github.com/oven-sh/bun-types/blob/master/api-docs/README.md) / [Exports](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules.md) / ["node:crypto"](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/node_crypto_.md) / KeyExportOptions

# Interface: KeyExportOptions<T\>

["node:crypto"](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/node_crypto_.md).KeyExportOptions

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`KeyFormat`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/crypto_.md#keyformat) |

## Table of contents

### Properties

- [cipher](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/node_crypto_.KeyExportOptions.md#cipher)
- [format](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/node_crypto_.KeyExportOptions.md#format)
- [passphrase](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/node_crypto_.KeyExportOptions.md#passphrase)
- [type](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/node_crypto_.KeyExportOptions.md#type)

## Properties

### cipher

• `Optional` **cipher**: `string`

___

### format

• **format**: `T`

___

### passphrase

• `Optional` **passphrase**: `string` \| [`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer)

___

### type

• **type**: ``"pkcs1"`` \| ``"spki"`` \| ``"pkcs8"`` \| ``"sec1"``
