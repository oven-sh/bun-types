[bun-types](https://oven-sh.github.io/bun-types/README.md) / [Exports](https://oven-sh.github.io/bun-types/modules.md) / ["crypto"](https://oven-sh.github.io/bun-types/modules/crypto_.md) / KeyExportOptions

# Interface: KeyExportOptions<T\>

["crypto"](https://oven-sh.github.io/bun-types/modules/crypto_.md).KeyExportOptions

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`KeyFormat`](https://oven-sh.github.io/bun-types/modules/crypto_.md#keyformat) |

## Table of contents

### Properties

- [cipher](https://oven-sh.github.io/bun-types/interfaces/crypto_.KeyExportOptions.md#cipher)
- [format](https://oven-sh.github.io/bun-types/interfaces/crypto_.KeyExportOptions.md#format)
- [passphrase](https://oven-sh.github.io/bun-types/interfaces/crypto_.KeyExportOptions.md#passphrase)
- [type](https://oven-sh.github.io/bun-types/interfaces/crypto_.KeyExportOptions.md#type)

## Properties

### cipher

• `Optional` **cipher**: `string`

___

### format

• **format**: `T`

___

### passphrase

• `Optional` **passphrase**: `string` \| [`Buffer`](https://oven-sh.github.io/bun-types/modules/buffer_.md#buffer)

___

### type

• **type**: ``"pkcs1"`` \| ``"spki"`` \| ``"pkcs8"`` \| ``"sec1"``
