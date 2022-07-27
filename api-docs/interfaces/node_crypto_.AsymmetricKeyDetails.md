[bun-types](https://github.com/oven-sh/bun-types/blob/master/api-docs/README.md) / [Exports](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules.md) / ["node:crypto"](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/node_crypto_.md) / AsymmetricKeyDetails

# Interface: AsymmetricKeyDetails

["node:crypto"](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/node_crypto_.md).AsymmetricKeyDetails

## Table of contents

### Properties

- [divisorLength](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/node_crypto_.AsymmetricKeyDetails.md#divisorlength)
- [hashAlgorithm](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/node_crypto_.AsymmetricKeyDetails.md#hashalgorithm)
- [mgf1HashAlgorithm](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/node_crypto_.AsymmetricKeyDetails.md#mgf1hashalgorithm)
- [modulusLength](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/node_crypto_.AsymmetricKeyDetails.md#moduluslength)
- [namedCurve](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/node_crypto_.AsymmetricKeyDetails.md#namedcurve)
- [publicExponent](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/node_crypto_.AsymmetricKeyDetails.md#publicexponent)
- [saltLength](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/node_crypto_.AsymmetricKeyDetails.md#saltlength)

## Properties

### divisorLength

• `Optional` **divisorLength**: `number`

Size of q in bits (DSA).

___

### hashAlgorithm

• `Optional` **hashAlgorithm**: `string`

Name of the message digest (RSA-PSS).

___

### mgf1HashAlgorithm

• `Optional` **mgf1HashAlgorithm**: `string`

Name of the message digest used by MGF1 (RSA-PSS).

___

### modulusLength

• `Optional` **modulusLength**: `number`

Key size in bits (RSA, DSA).

___

### namedCurve

• `Optional` **namedCurve**: `string`

Name of the curve (EC).

___

### publicExponent

• `Optional` **publicExponent**: `bigint`

Public exponent (RSA).

___

### saltLength

• `Optional` **saltLength**: `number`

Minimal salt length in bytes (RSA-PSS).
