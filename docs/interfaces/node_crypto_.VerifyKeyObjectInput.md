[bun-types](https://oven-sh.github.io/bun-types/README.md) / [Exports](https://oven-sh.github.io/bun-types/modules.md) / ["node:crypto"](https://oven-sh.github.io/bun-types/modules/node_crypto_.md) / VerifyKeyObjectInput

# Interface: VerifyKeyObjectInput

["node:crypto"](https://oven-sh.github.io/bun-types/modules/node_crypto_.md).VerifyKeyObjectInput

## Hierarchy

- [`SigningOptions`](https://oven-sh.github.io/bun-types/interfaces/crypto_.SigningOptions.md)

  ↳ **`VerifyKeyObjectInput`**

## Table of contents

### Properties

- [dsaEncoding](https://oven-sh.github.io/bun-types/interfaces/node_crypto_.VerifyKeyObjectInput.md#dsaencoding)
- [key](https://oven-sh.github.io/bun-types/interfaces/node_crypto_.VerifyKeyObjectInput.md#key)
- [padding](https://oven-sh.github.io/bun-types/interfaces/node_crypto_.VerifyKeyObjectInput.md#padding)
- [saltLength](https://oven-sh.github.io/bun-types/interfaces/node_crypto_.VerifyKeyObjectInput.md#saltlength)

## Properties

### dsaEncoding

• `Optional` **dsaEncoding**: [`DSAEncoding`](https://oven-sh.github.io/bun-types/modules/crypto_.md#dsaencoding)

#### Inherited from

[SigningOptions](https://oven-sh.github.io/bun-types/interfaces/crypto_.SigningOptions.md).[dsaEncoding](https://oven-sh.github.io/bun-types/interfaces/crypto_.SigningOptions.md#dsaencoding)

___

### key

• **key**: [`KeyObject`](https://oven-sh.github.io/bun-types/classes/crypto_.KeyObject.md)

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
