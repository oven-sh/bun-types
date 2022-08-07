[bun-types](https://oven-sh.github.io/bun-types/README.md) / [Exports](https://oven-sh.github.io/bun-types/modules.md) / ["crypto"](https://oven-sh.github.io/bun-types/modules/crypto_.md) / ED448KeyPairOptions

# Interface: ED448KeyPairOptions<PubF, PrivF\>

["crypto"](https://oven-sh.github.io/bun-types/modules/crypto_.md).ED448KeyPairOptions

## Type parameters

| Name | Type |
| :------ | :------ |
| `PubF` | extends [`KeyFormat`](https://oven-sh.github.io/bun-types/modules/crypto_.md#keyformat) |
| `PrivF` | extends [`KeyFormat`](https://oven-sh.github.io/bun-types/modules/crypto_.md#keyformat) |

## Table of contents

### Properties

- [privateKeyEncoding](https://oven-sh.github.io/bun-types/interfaces/crypto_.ED448KeyPairOptions.md#privatekeyencoding)
- [publicKeyEncoding](https://oven-sh.github.io/bun-types/interfaces/crypto_.ED448KeyPairOptions.md#publickeyencoding)

## Properties

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
