[bun-types](https://github.com/oven-sh/bun-types/blob/master/api-docs/README.md) / [Exports](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules.md) / ["crypto"](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/crypto_.md) / ECKeyPairOptions

# Interface: ECKeyPairOptions<PubF, PrivF\>

["crypto"](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/crypto_.md).ECKeyPairOptions

## Type parameters

| Name | Type |
| :------ | :------ |
| `PubF` | extends [`KeyFormat`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/crypto_.md#keyformat) |
| `PrivF` | extends [`KeyFormat`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/crypto_.md#keyformat) |

## Table of contents

### Properties

- [namedCurve](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.ECKeyPairOptions.md#namedcurve)
- [privateKeyEncoding](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.ECKeyPairOptions.md#privatekeyencoding)
- [publicKeyEncoding](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.ECKeyPairOptions.md#publickeyencoding)

## Properties

### namedCurve

• **namedCurve**: `string`

Name of the curve to use.

___

### privateKeyEncoding

• **privateKeyEncoding**: [`BasePrivateKeyEncodingOptions`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.BasePrivateKeyEncodingOptions.md)<`PrivF`\> & { `type`: ``"pkcs8"`` \| ``"sec1"``  }

___

### publicKeyEncoding

• **publicKeyEncoding**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `format` | `PubF` |
| `type` | ``"pkcs1"`` \| ``"spki"`` |
