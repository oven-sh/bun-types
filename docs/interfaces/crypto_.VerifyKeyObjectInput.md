[bun-types](https://github.com/oven-sh/bun-types/blob/master/api-docs/README.md) / [Exports](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules.md) / ["crypto"](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/crypto_.md) / VerifyKeyObjectInput

# Interface: VerifyKeyObjectInput

["crypto"](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/crypto_.md).VerifyKeyObjectInput

## Hierarchy

- [`SigningOptions`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.SigningOptions.md)

  ↳ **`VerifyKeyObjectInput`**

## Table of contents

### Properties

- [dsaEncoding](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.VerifyKeyObjectInput.md#dsaencoding)
- [key](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.VerifyKeyObjectInput.md#key)
- [padding](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.VerifyKeyObjectInput.md#padding)
- [saltLength](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.VerifyKeyObjectInput.md#saltlength)

## Properties

### dsaEncoding

• `Optional` **dsaEncoding**: [`DSAEncoding`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/crypto_.md#dsaencoding)

#### Inherited from

[SigningOptions](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.SigningOptions.md).[dsaEncoding](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.SigningOptions.md#dsaencoding)

___

### key

• **key**: [`KeyObject`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.KeyObject.md)

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
