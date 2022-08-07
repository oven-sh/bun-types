[bun-types](https://oven-sh.github.io/bun-types/README.md) / [Exports](https://oven-sh.github.io/bun-types/modules.md) / ["crypto"](https://oven-sh.github.io/bun-types/modules/crypto_.md) / ECKeyPairOptions

# Interface: ECKeyPairOptions<PubF, PrivF\>

["crypto"](https://oven-sh.github.io/bun-types/modules/crypto_.md).ECKeyPairOptions

## Type parameters

| Name | Type |
| :------ | :------ |
| `PubF` | extends [`KeyFormat`](https://oven-sh.github.io/bun-types/modules/crypto_.md#keyformat) |
| `PrivF` | extends [`KeyFormat`](https://oven-sh.github.io/bun-types/modules/crypto_.md#keyformat) |

## Table of contents

### Properties

- [namedCurve](https://oven-sh.github.io/bun-types/interfaces/crypto_.ECKeyPairOptions.md#namedcurve)
- [privateKeyEncoding](https://oven-sh.github.io/bun-types/interfaces/crypto_.ECKeyPairOptions.md#privatekeyencoding)
- [publicKeyEncoding](https://oven-sh.github.io/bun-types/interfaces/crypto_.ECKeyPairOptions.md#publickeyencoding)

## Properties

### namedCurve

• **namedCurve**: `string`

Name of the curve to use.

___

### privateKeyEncoding

• **privateKeyEncoding**: [`BasePrivateKeyEncodingOptions`](https://oven-sh.github.io/bun-types/interfaces/crypto_.BasePrivateKeyEncodingOptions.md)<`PrivF`\> & { `type`: ``"pkcs8"`` \| ``"sec1"``  }

___

### publicKeyEncoding

• **publicKeyEncoding**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `format` | `PubF` |
| `type` | ``"pkcs1"`` \| ``"spki"`` |
