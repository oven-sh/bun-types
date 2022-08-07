[bun-types](https://oven-sh.github.io/bun-types/README.md) / [Exports](https://oven-sh.github.io/bun-types/modules.md) / ["crypto"](https://oven-sh.github.io/bun-types/modules/crypto_.md) / PrivateKeyInput

# Interface: PrivateKeyInput

["crypto"](https://oven-sh.github.io/bun-types/modules/crypto_.md).PrivateKeyInput

## Hierarchy

- **`PrivateKeyInput`**

  ↳ [`SignPrivateKeyInput`](https://oven-sh.github.io/bun-types/interfaces/crypto_.SignPrivateKeyInput.md)

  ↳ [`SignPrivateKeyInput`](https://oven-sh.github.io/bun-types/interfaces/node_crypto_.SignPrivateKeyInput.md)

## Table of contents

### Properties

- [format](https://oven-sh.github.io/bun-types/interfaces/crypto_.PrivateKeyInput.md#format)
- [key](https://oven-sh.github.io/bun-types/interfaces/crypto_.PrivateKeyInput.md#key)
- [passphrase](https://oven-sh.github.io/bun-types/interfaces/crypto_.PrivateKeyInput.md#passphrase)
- [type](https://oven-sh.github.io/bun-types/interfaces/crypto_.PrivateKeyInput.md#type)

## Properties

### format

• `Optional` **format**: [`KeyFormat`](https://oven-sh.github.io/bun-types/modules/crypto_.md#keyformat)

___

### key

• **key**: `string` \| [`Buffer`](https://oven-sh.github.io/bun-types/modules/buffer_.md#buffer)

___

### passphrase

• `Optional` **passphrase**: `string` \| [`Buffer`](https://oven-sh.github.io/bun-types/modules/buffer_.md#buffer)

___

### type

• `Optional` **type**: ``"pkcs1"`` \| ``"pkcs8"`` \| ``"sec1"``
