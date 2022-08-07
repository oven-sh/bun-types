[bun-types](https://oven-sh.github.io/bun-types/README.md) / [Exports](https://oven-sh.github.io/bun-types/modules.md) / ["crypto"](https://oven-sh.github.io/bun-types/modules/crypto_.md) / RSAKeyPairOptions

# Interface: RSAKeyPairOptions<PubF, PrivF\>

["crypto"](https://oven-sh.github.io/bun-types/modules/crypto_.md).RSAKeyPairOptions

## Type parameters

| Name | Type |
| :------ | :------ |
| `PubF` | extends [`KeyFormat`](https://oven-sh.github.io/bun-types/modules/crypto_.md#keyformat) |
| `PrivF` | extends [`KeyFormat`](https://oven-sh.github.io/bun-types/modules/crypto_.md#keyformat) |

## Table of contents

### Properties

- [modulusLength](https://oven-sh.github.io/bun-types/interfaces/crypto_.RSAKeyPairOptions.md#moduluslength)
- [privateKeyEncoding](https://oven-sh.github.io/bun-types/interfaces/crypto_.RSAKeyPairOptions.md#privatekeyencoding)
- [publicExponent](https://oven-sh.github.io/bun-types/interfaces/crypto_.RSAKeyPairOptions.md#publicexponent)
- [publicKeyEncoding](https://oven-sh.github.io/bun-types/interfaces/crypto_.RSAKeyPairOptions.md#publickeyencoding)

## Properties

### modulusLength

• **modulusLength**: `number`

Key size in bits

___

### privateKeyEncoding

• **privateKeyEncoding**: [`BasePrivateKeyEncodingOptions`](https://oven-sh.github.io/bun-types/interfaces/crypto_.BasePrivateKeyEncodingOptions.md)<`PrivF`\> & { `type`: ``"pkcs1"`` \| ``"pkcs8"``  }

___

### publicExponent

• `Optional` **publicExponent**: `number`

Public exponent

**`Default`**

0x10001

___

### publicKeyEncoding

• **publicKeyEncoding**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `format` | `PubF` |
| `type` | ``"pkcs1"`` \| ``"spki"`` |
