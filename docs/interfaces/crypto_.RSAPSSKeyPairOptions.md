[bun-types](https://oven-sh.github.io/bun-types/README.md) / [Exports](https://oven-sh.github.io/bun-types/modules.md) / ["crypto"](https://oven-sh.github.io/bun-types/modules/crypto_.md) / RSAPSSKeyPairOptions

# Interface: RSAPSSKeyPairOptions<PubF, PrivF\>

["crypto"](https://oven-sh.github.io/bun-types/modules/crypto_.md).RSAPSSKeyPairOptions

## Type parameters

| Name | Type |
| :------ | :------ |
| `PubF` | extends [`KeyFormat`](https://oven-sh.github.io/bun-types/modules/crypto_.md#keyformat) |
| `PrivF` | extends [`KeyFormat`](https://oven-sh.github.io/bun-types/modules/crypto_.md#keyformat) |

## Table of contents

### Properties

- [hashAlgorithm](https://oven-sh.github.io/bun-types/interfaces/crypto_.RSAPSSKeyPairOptions.md#hashalgorithm)
- [mgf1HashAlgorithm](https://oven-sh.github.io/bun-types/interfaces/crypto_.RSAPSSKeyPairOptions.md#mgf1hashalgorithm)
- [modulusLength](https://oven-sh.github.io/bun-types/interfaces/crypto_.RSAPSSKeyPairOptions.md#moduluslength)
- [privateKeyEncoding](https://oven-sh.github.io/bun-types/interfaces/crypto_.RSAPSSKeyPairOptions.md#privatekeyencoding)
- [publicExponent](https://oven-sh.github.io/bun-types/interfaces/crypto_.RSAPSSKeyPairOptions.md#publicexponent)
- [publicKeyEncoding](https://oven-sh.github.io/bun-types/interfaces/crypto_.RSAPSSKeyPairOptions.md#publickeyencoding)
- [saltLength](https://oven-sh.github.io/bun-types/interfaces/crypto_.RSAPSSKeyPairOptions.md#saltlength)

## Properties

### hashAlgorithm

• `Optional` **hashAlgorithm**: `string`

Name of the message digest

___

### mgf1HashAlgorithm

• `Optional` **mgf1HashAlgorithm**: `string`

Name of the message digest used by MGF1

___

### modulusLength

• **modulusLength**: `number`

Key size in bits

___

### privateKeyEncoding

• **privateKeyEncoding**: [`BasePrivateKeyEncodingOptions`](https://oven-sh.github.io/bun-types/interfaces/crypto_.BasePrivateKeyEncodingOptions.md)<`PrivF`\> & { `type`: ``"pkcs8"``  }

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
| `type` | ``"spki"`` |

___

### saltLength

• `Optional` **saltLength**: `string`

Minimal salt length in bytes
