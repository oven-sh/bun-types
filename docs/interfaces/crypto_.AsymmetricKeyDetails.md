[bun-types](https://oven-sh.github.io/bun-types/README.md) / [Exports](https://oven-sh.github.io/bun-types/modules.md) / ["crypto"](https://oven-sh.github.io/bun-types/modules/crypto_.md) / AsymmetricKeyDetails

# Interface: AsymmetricKeyDetails

["crypto"](https://oven-sh.github.io/bun-types/modules/crypto_.md).AsymmetricKeyDetails

## Table of contents

### Properties

- [divisorLength](https://oven-sh.github.io/bun-types/interfaces/crypto_.AsymmetricKeyDetails.md#divisorlength)
- [hashAlgorithm](https://oven-sh.github.io/bun-types/interfaces/crypto_.AsymmetricKeyDetails.md#hashalgorithm)
- [mgf1HashAlgorithm](https://oven-sh.github.io/bun-types/interfaces/crypto_.AsymmetricKeyDetails.md#mgf1hashalgorithm)
- [modulusLength](https://oven-sh.github.io/bun-types/interfaces/crypto_.AsymmetricKeyDetails.md#moduluslength)
- [namedCurve](https://oven-sh.github.io/bun-types/interfaces/crypto_.AsymmetricKeyDetails.md#namedcurve)
- [publicExponent](https://oven-sh.github.io/bun-types/interfaces/crypto_.AsymmetricKeyDetails.md#publicexponent)
- [saltLength](https://oven-sh.github.io/bun-types/interfaces/crypto_.AsymmetricKeyDetails.md#saltlength)

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
