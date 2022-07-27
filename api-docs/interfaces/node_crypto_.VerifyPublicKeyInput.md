[bun-types](https://github.com/oven-sh/bun-types/blob/master/api-docs/README.md) / [Exports](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules.md) / ["node:crypto"](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/node_crypto_.md) / VerifyPublicKeyInput

# Interface: VerifyPublicKeyInput

["node:crypto"](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/node_crypto_.md).VerifyPublicKeyInput

## Hierarchy

- [`PublicKeyInput`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.PublicKeyInput.md)

- [`SigningOptions`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.SigningOptions.md)

  ↳ **`VerifyPublicKeyInput`**

## Table of contents

### Properties

- [dsaEncoding](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/node_crypto_.VerifyPublicKeyInput.md#dsaencoding)
- [format](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/node_crypto_.VerifyPublicKeyInput.md#format)
- [key](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/node_crypto_.VerifyPublicKeyInput.md#key)
- [padding](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/node_crypto_.VerifyPublicKeyInput.md#padding)
- [saltLength](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/node_crypto_.VerifyPublicKeyInput.md#saltlength)
- [type](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/node_crypto_.VerifyPublicKeyInput.md#type)

## Properties

### dsaEncoding

• `Optional` **dsaEncoding**: [`DSAEncoding`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/crypto_.md#dsaencoding)

#### Inherited from

[SigningOptions](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.SigningOptions.md).[dsaEncoding](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.SigningOptions.md#dsaencoding)

___

### format

• `Optional` **format**: [`KeyFormat`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/crypto_.md#keyformat)

#### Inherited from

[PublicKeyInput](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.PublicKeyInput.md).[format](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.PublicKeyInput.md#format)

___

### key

• **key**: `string` \| [`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer)

#### Inherited from

[PublicKeyInput](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.PublicKeyInput.md).[key](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.PublicKeyInput.md#key)

___

### padding

• `Optional` **padding**: `number`

**`See`**

crypto.constants.RSA_PKCS1_PADDING

#### Inherited from

[SigningOptions](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.SigningOptions.md).[padding](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.SigningOptions.md#padding)

___

### saltLength

• `Optional` **saltLength**: `number`

#### Inherited from

[SigningOptions](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.SigningOptions.md).[saltLength](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.SigningOptions.md#saltlength)

___

### type

• `Optional` **type**: ``"pkcs1"`` \| ``"spki"``

#### Inherited from

[PublicKeyInput](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.PublicKeyInput.md).[type](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.PublicKeyInput.md#type)
