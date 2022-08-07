[bun-types](https://oven-sh.github.io/bun-types/README.md) / [Exports](https://oven-sh.github.io/bun-types/modules.md) / ["node:crypto"](https://oven-sh.github.io/bun-types/modules/node_crypto_.md) / SignPrivateKeyInput

# Interface: SignPrivateKeyInput

["node:crypto"](https://oven-sh.github.io/bun-types/modules/node_crypto_.md).SignPrivateKeyInput

## Hierarchy

- [`PrivateKeyInput`](https://oven-sh.github.io/bun-types/interfaces/crypto_.PrivateKeyInput.md)

- [`SigningOptions`](https://oven-sh.github.io/bun-types/interfaces/crypto_.SigningOptions.md)

  ↳ **`SignPrivateKeyInput`**

## Table of contents

### Properties

- [dsaEncoding](https://oven-sh.github.io/bun-types/interfaces/node_crypto_.SignPrivateKeyInput.md#dsaencoding)
- [format](https://oven-sh.github.io/bun-types/interfaces/node_crypto_.SignPrivateKeyInput.md#format)
- [key](https://oven-sh.github.io/bun-types/interfaces/node_crypto_.SignPrivateKeyInput.md#key)
- [padding](https://oven-sh.github.io/bun-types/interfaces/node_crypto_.SignPrivateKeyInput.md#padding)
- [passphrase](https://oven-sh.github.io/bun-types/interfaces/node_crypto_.SignPrivateKeyInput.md#passphrase)
- [saltLength](https://oven-sh.github.io/bun-types/interfaces/node_crypto_.SignPrivateKeyInput.md#saltlength)
- [type](https://oven-sh.github.io/bun-types/interfaces/node_crypto_.SignPrivateKeyInput.md#type)

## Properties

### dsaEncoding

• `Optional` **dsaEncoding**: [`DSAEncoding`](https://oven-sh.github.io/bun-types/modules/crypto_.md#dsaencoding)

#### Inherited from

[SigningOptions](https://oven-sh.github.io/bun-types/interfaces/crypto_.SigningOptions.md).[dsaEncoding](https://oven-sh.github.io/bun-types/interfaces/crypto_.SigningOptions.md#dsaencoding)

___

### format

• `Optional` **format**: [`KeyFormat`](https://oven-sh.github.io/bun-types/modules/crypto_.md#keyformat)

#### Inherited from

[PrivateKeyInput](https://oven-sh.github.io/bun-types/interfaces/crypto_.PrivateKeyInput.md).[format](https://oven-sh.github.io/bun-types/interfaces/crypto_.PrivateKeyInput.md#format)

___

### key

• **key**: `string` \| [`Buffer`](https://oven-sh.github.io/bun-types/modules/buffer_.md#buffer)

#### Inherited from

[PrivateKeyInput](https://oven-sh.github.io/bun-types/interfaces/crypto_.PrivateKeyInput.md).[key](https://oven-sh.github.io/bun-types/interfaces/crypto_.PrivateKeyInput.md#key)

___

### padding

• `Optional` **padding**: `number`

**`See`**

crypto.constants.RSA_PKCS1_PADDING

#### Inherited from

[SigningOptions](https://oven-sh.github.io/bun-types/interfaces/crypto_.SigningOptions.md).[padding](https://oven-sh.github.io/bun-types/interfaces/crypto_.SigningOptions.md#padding)

___

### passphrase

• `Optional` **passphrase**: `string` \| [`Buffer`](https://oven-sh.github.io/bun-types/modules/buffer_.md#buffer)

#### Inherited from

[PrivateKeyInput](https://oven-sh.github.io/bun-types/interfaces/crypto_.PrivateKeyInput.md).[passphrase](https://oven-sh.github.io/bun-types/interfaces/crypto_.PrivateKeyInput.md#passphrase)

___

### saltLength

• `Optional` **saltLength**: `number`

#### Inherited from

[SigningOptions](https://oven-sh.github.io/bun-types/interfaces/crypto_.SigningOptions.md).[saltLength](https://oven-sh.github.io/bun-types/interfaces/crypto_.SigningOptions.md#saltlength)

___

### type

• `Optional` **type**: ``"pkcs1"`` \| ``"pkcs8"`` \| ``"sec1"``

#### Inherited from

[PrivateKeyInput](https://oven-sh.github.io/bun-types/interfaces/crypto_.PrivateKeyInput.md).[type](https://oven-sh.github.io/bun-types/interfaces/crypto_.PrivateKeyInput.md#type)
