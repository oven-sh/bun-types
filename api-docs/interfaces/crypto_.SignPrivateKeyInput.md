[bun-types](https://github.com/oven-sh/bun-types/blob/master/api-docs/README.md) / [Exports](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules.md) / ["crypto"](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/crypto_.md) / SignPrivateKeyInput

# Interface: SignPrivateKeyInput

["crypto"](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/crypto_.md).SignPrivateKeyInput

## Hierarchy

- [`PrivateKeyInput`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.PrivateKeyInput.md)

- [`SigningOptions`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.SigningOptions.md)

  ↳ **`SignPrivateKeyInput`**

## Table of contents

### Properties

- [dsaEncoding](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.SignPrivateKeyInput.md#dsaencoding)
- [format](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.SignPrivateKeyInput.md#format)
- [key](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.SignPrivateKeyInput.md#key)
- [padding](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.SignPrivateKeyInput.md#padding)
- [passphrase](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.SignPrivateKeyInput.md#passphrase)
- [saltLength](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.SignPrivateKeyInput.md#saltlength)
- [type](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.SignPrivateKeyInput.md#type)

## Properties

### dsaEncoding

• `Optional` **dsaEncoding**: [`DSAEncoding`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/crypto_.md#dsaencoding)

#### Inherited from

[SigningOptions](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.SigningOptions.md).[dsaEncoding](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.SigningOptions.md#dsaencoding)

___

### format

• `Optional` **format**: [`KeyFormat`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/crypto_.md#keyformat)

#### Inherited from

[PrivateKeyInput](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.PrivateKeyInput.md).[format](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.PrivateKeyInput.md#format)

___

### key

• **key**: `string` \| [`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer)

#### Inherited from

[PrivateKeyInput](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.PrivateKeyInput.md).[key](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.PrivateKeyInput.md#key)

___

### padding

• `Optional` **padding**: `number`

**`See`**

crypto.constants.RSA_PKCS1_PADDING

#### Inherited from

[SigningOptions](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.SigningOptions.md).[padding](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.SigningOptions.md#padding)

___

### passphrase

• `Optional` **passphrase**: `string` \| [`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer)

#### Inherited from

[PrivateKeyInput](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.PrivateKeyInput.md).[passphrase](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.PrivateKeyInput.md#passphrase)

___

### saltLength

• `Optional` **saltLength**: `number`

#### Inherited from

[SigningOptions](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.SigningOptions.md).[saltLength](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.SigningOptions.md#saltlength)

___

### type

• `Optional` **type**: ``"pkcs1"`` \| ``"pkcs8"`` \| ``"sec1"``

#### Inherited from

[PrivateKeyInput](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.PrivateKeyInput.md).[type](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.PrivateKeyInput.md#type)
