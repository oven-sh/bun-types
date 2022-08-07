[bun-types](https://oven-sh.github.io/bun-types/README.md) / [Exports](https://oven-sh.github.io/bun-types/modules.md) / ["crypto"](https://oven-sh.github.io/bun-types/modules/crypto_.md) / VerifyPublicKeyInput

# Interface: VerifyPublicKeyInput

["crypto"](https://oven-sh.github.io/bun-types/modules/crypto_.md).VerifyPublicKeyInput

## Hierarchy

- [`PublicKeyInput`](https://oven-sh.github.io/bun-types/interfaces/crypto_.PublicKeyInput.md)

- [`SigningOptions`](https://oven-sh.github.io/bun-types/interfaces/crypto_.SigningOptions.md)

  ↳ **`VerifyPublicKeyInput`**

## Table of contents

### Properties

- [dsaEncoding](https://oven-sh.github.io/bun-types/interfaces/crypto_.VerifyPublicKeyInput.md#dsaencoding)
- [format](https://oven-sh.github.io/bun-types/interfaces/crypto_.VerifyPublicKeyInput.md#format)
- [key](https://oven-sh.github.io/bun-types/interfaces/crypto_.VerifyPublicKeyInput.md#key)
- [padding](https://oven-sh.github.io/bun-types/interfaces/crypto_.VerifyPublicKeyInput.md#padding)
- [saltLength](https://oven-sh.github.io/bun-types/interfaces/crypto_.VerifyPublicKeyInput.md#saltlength)
- [type](https://oven-sh.github.io/bun-types/interfaces/crypto_.VerifyPublicKeyInput.md#type)

## Properties

### dsaEncoding

• `Optional` **dsaEncoding**: [`DSAEncoding`](https://oven-sh.github.io/bun-types/modules/crypto_.md#dsaencoding)

#### Inherited from

[SigningOptions](https://oven-sh.github.io/bun-types/interfaces/crypto_.SigningOptions.md).[dsaEncoding](https://oven-sh.github.io/bun-types/interfaces/crypto_.SigningOptions.md#dsaencoding)

___

### format

• `Optional` **format**: [`KeyFormat`](https://oven-sh.github.io/bun-types/modules/crypto_.md#keyformat)

#### Inherited from

[PublicKeyInput](https://oven-sh.github.io/bun-types/interfaces/crypto_.PublicKeyInput.md).[format](https://oven-sh.github.io/bun-types/interfaces/crypto_.PublicKeyInput.md#format)

___

### key

• **key**: `string` \| [`Buffer`](https://oven-sh.github.io/bun-types/modules/buffer_.md#buffer)

#### Inherited from

[PublicKeyInput](https://oven-sh.github.io/bun-types/interfaces/crypto_.PublicKeyInput.md).[key](https://oven-sh.github.io/bun-types/interfaces/crypto_.PublicKeyInput.md#key)

___

### padding

• `Optional` **padding**: `number`

**`See`**

crypto.constants.RSA_PKCS1_PADDING

#### Inherited from

[SigningOptions](https://oven-sh.github.io/bun-types/interfaces/crypto_.SigningOptions.md).[padding](https://oven-sh.github.io/bun-types/interfaces/crypto_.SigningOptions.md#padding)

___

### saltLength

• `Optional` **saltLength**: `number`

#### Inherited from

[SigningOptions](https://oven-sh.github.io/bun-types/interfaces/crypto_.SigningOptions.md).[saltLength](https://oven-sh.github.io/bun-types/interfaces/crypto_.SigningOptions.md#saltlength)

___

### type

• `Optional` **type**: ``"pkcs1"`` \| ``"spki"``

#### Inherited from

[PublicKeyInput](https://oven-sh.github.io/bun-types/interfaces/crypto_.PublicKeyInput.md).[type](https://oven-sh.github.io/bun-types/interfaces/crypto_.PublicKeyInput.md#type)
