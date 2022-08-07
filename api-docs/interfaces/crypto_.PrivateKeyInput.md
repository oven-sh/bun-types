[bun-types](https://github.com/oven-sh/bun-types/blob/master/api-docs/README.md) / [Exports](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules.md) / ["crypto"](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/crypto_.md) / PrivateKeyInput

# Interface: PrivateKeyInput

["crypto"](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/crypto_.md).PrivateKeyInput

## Hierarchy

- **`PrivateKeyInput`**

  ↳ [`SignPrivateKeyInput`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.SignPrivateKeyInput.md)

  ↳ [`SignPrivateKeyInput`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/node_crypto_.SignPrivateKeyInput.md)

## Table of contents

### Properties

- [format](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.PrivateKeyInput.md#format)
- [key](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.PrivateKeyInput.md#key)
- [passphrase](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.PrivateKeyInput.md#passphrase)
- [type](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.PrivateKeyInput.md#type)

## Properties

### format

• `Optional` **format**: [`KeyFormat`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/crypto_.md#keyformat)

___

### key

• **key**: `string` \| [`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer)

___

### passphrase

• `Optional` **passphrase**: `string` \| [`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer)

___

### type

• `Optional` **type**: ``"pkcs1"`` \| ``"pkcs8"`` \| ``"sec1"``
