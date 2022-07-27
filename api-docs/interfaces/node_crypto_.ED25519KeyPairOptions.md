[bun-types](https://github.com/oven-sh/bun-types/blob/master/api-docs/README.md) / [Exports](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules.md) / ["node:crypto"](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/node_crypto_.md) / ED25519KeyPairOptions

# Interface: ED25519KeyPairOptions<PubF, PrivF\>

["node:crypto"](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/node_crypto_.md).ED25519KeyPairOptions

## Type parameters

| Name | Type |
| :------ | :------ |
| `PubF` | extends [`KeyFormat`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/crypto_.md#keyformat) |
| `PrivF` | extends [`KeyFormat`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/crypto_.md#keyformat) |

## Table of contents

### Properties

- [privateKeyEncoding](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/node_crypto_.ED25519KeyPairOptions.md#privatekeyencoding)
- [publicKeyEncoding](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/node_crypto_.ED25519KeyPairOptions.md#publickeyencoding)

## Properties

### privateKeyEncoding

• **privateKeyEncoding**: [`BasePrivateKeyEncodingOptions`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.BasePrivateKeyEncodingOptions.md)<`PrivF`\> & { `type`: ``"pkcs8"``  }

___

### publicKeyEncoding

• **publicKeyEncoding**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `format` | `PubF` |
| `type` | ``"spki"`` |
