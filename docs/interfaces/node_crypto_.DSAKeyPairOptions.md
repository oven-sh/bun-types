[bun-types](https://oven-sh.github.io/bun-types/README.md) / [Exports](https://oven-sh.github.io/bun-types/modules.md) / ["node:crypto"](https://oven-sh.github.io/bun-types/modules/node_crypto_.md) / DSAKeyPairOptions

# Interface: DSAKeyPairOptions<PubF, PrivF\>

["node:crypto"](https://oven-sh.github.io/bun-types/modules/node_crypto_.md).DSAKeyPairOptions

## Type parameters

| Name | Type |
| :------ | :------ |
| `PubF` | extends [`KeyFormat`](https://oven-sh.github.io/bun-types/modules/crypto_.md#keyformat) |
| `PrivF` | extends [`KeyFormat`](https://oven-sh.github.io/bun-types/modules/crypto_.md#keyformat) |

## Table of contents

### Properties

- [divisorLength](https://oven-sh.github.io/bun-types/interfaces/node_crypto_.DSAKeyPairOptions.md#divisorlength)
- [modulusLength](https://oven-sh.github.io/bun-types/interfaces/node_crypto_.DSAKeyPairOptions.md#moduluslength)
- [privateKeyEncoding](https://oven-sh.github.io/bun-types/interfaces/node_crypto_.DSAKeyPairOptions.md#privatekeyencoding)
- [publicKeyEncoding](https://oven-sh.github.io/bun-types/interfaces/node_crypto_.DSAKeyPairOptions.md#publickeyencoding)

## Properties

### divisorLength

• **divisorLength**: `number`

Size of q in bits

___

### modulusLength

• **modulusLength**: `number`

Key size in bits

___

### privateKeyEncoding

• **privateKeyEncoding**: [`BasePrivateKeyEncodingOptions`](https://oven-sh.github.io/bun-types/interfaces/crypto_.BasePrivateKeyEncodingOptions.md)<`PrivF`\> & { `type`: ``"pkcs8"``  }

___

### publicKeyEncoding

• **publicKeyEncoding**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `format` | `PubF` |
| `type` | ``"spki"`` |
