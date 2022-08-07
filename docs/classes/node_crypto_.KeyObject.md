[bun-types](https://oven-sh.github.io/bun-types/README.md) / [Exports](https://oven-sh.github.io/bun-types/modules.md) / ["node:crypto"](https://oven-sh.github.io/bun-types/modules/node_crypto_.md) / KeyObject

# Class: KeyObject

["node:crypto"](https://oven-sh.github.io/bun-types/modules/node_crypto_.md).KeyObject

Node.js uses a `KeyObject` class to represent a symmetric or asymmetric key,
and each kind of key exposes different functions. The [createSecretKey](https://oven-sh.github.io/bun-types/modules/node_crypto_.md#createsecretkey), [createPublicKey](https://oven-sh.github.io/bun-types/modules/node_crypto_.md#createpublickey) and [createPrivateKey](https://oven-sh.github.io/bun-types/modules/node_crypto_.md#createprivatekey) methods are used to create `KeyObject`instances. `KeyObject`
objects are not to be created directly using the `new`keyword.

Most applications should consider using the new `KeyObject` API instead of
passing keys as strings or `Buffer`s due to improved security features.

`KeyObject` instances can be passed to other threads via `postMessage()`.
The receiver obtains a cloned `KeyObject`, and the `KeyObject` does not need to
be listed in the `transferList` argument.

## Table of contents

### Constructors

- [constructor](https://oven-sh.github.io/bun-types/classes/node_crypto_.KeyObject.md#constructor)

### Properties

- [asymmetricKeyDetails](https://oven-sh.github.io/bun-types/classes/node_crypto_.KeyObject.md#asymmetrickeydetails)
- [asymmetricKeySize](https://oven-sh.github.io/bun-types/classes/node_crypto_.KeyObject.md#asymmetrickeysize)
- [asymmetricKeyType](https://oven-sh.github.io/bun-types/classes/node_crypto_.KeyObject.md#asymmetrickeytype)
- [symmetricKeySize](https://oven-sh.github.io/bun-types/classes/node_crypto_.KeyObject.md#symmetrickeysize)
- [type](https://oven-sh.github.io/bun-types/classes/node_crypto_.KeyObject.md#type)

### Methods

- [export](https://oven-sh.github.io/bun-types/classes/node_crypto_.KeyObject.md#export)

## Constructors

### constructor

• `Private` **new KeyObject**()

## Properties

### asymmetricKeyDetails

• `Optional` **asymmetricKeyDetails**: [`AsymmetricKeyDetails`](https://oven-sh.github.io/bun-types/interfaces/crypto_.AsymmetricKeyDetails.md)

This property exists only on asymmetric keys. Depending on the type of the key,
this object contains information about the key. None of the information obtained
through this property can be used to uniquely identify a key or to compromise
the security of the key.

For RSA-PSS keys, if the key material contains a `RSASSA-PSS-params` sequence,
the `hashAlgorithm`, `mgf1HashAlgorithm`, and `saltLength` properties will be
set.

Other key details might be exposed via this API using additional attributes.

___

### asymmetricKeySize

• `Optional` **asymmetricKeySize**: `number`

For asymmetric keys, this property represents the size of the embedded key in
bytes. This property is `undefined` for symmetric keys.

___

### asymmetricKeyType

• `Optional` **asymmetricKeyType**: [`KeyType`](https://oven-sh.github.io/bun-types/modules/crypto_.md#keytype)

For asymmetric keys, this property represents the type of the key. Supported key
types are:

* `'rsa'` (OID 1.2.840.113549.1.1.1)
* `'rsa-pss'` (OID 1.2.840.113549.1.1.10)
* `'dsa'` (OID 1.2.840.10040.4.1)
* `'ec'` (OID 1.2.840.10045.2.1)
* `'x25519'` (OID 1.3.101.110)
* `'x448'` (OID 1.3.101.111)
* `'ed25519'` (OID 1.3.101.112)
* `'ed448'` (OID 1.3.101.113)
* `'dh'` (OID 1.2.840.113549.1.3.1)

This property is `undefined` for unrecognized `KeyObject` types and symmetric
keys.

___

### symmetricKeySize

• `Optional` **symmetricKeySize**: `number`

For secret keys, this property represents the size of the key in bytes. This
property is `undefined` for asymmetric keys.

___

### type

• **type**: [`KeyObjectType`](https://oven-sh.github.io/bun-types/modules/crypto_.md#keyobjecttype)

Depending on the type of this `KeyObject`, this property is either`'secret'` for secret (symmetric) keys, `'public'` for public (asymmetric) keys
or `'private'` for private (asymmetric) keys.

## Methods

### export

▸ **export**(`options`): `string` \| [`Buffer`](https://oven-sh.github.io/bun-types/modules/buffer_.md#buffer)

For symmetric keys, the following encoding options can be used:

For public keys, the following encoding options can be used:

For private keys, the following encoding options can be used:

The result type depends on the selected encoding format, when PEM the
result is a string, when DER it will be a buffer containing the data
encoded as DER, when [JWK](https://tools.ietf.org/html/rfc7517) it will be an object.

When [JWK](https://tools.ietf.org/html/rfc7517) encoding format was selected, all other encoding options are
ignored.

PKCS#1, SEC1, and PKCS#8 type keys can be encrypted by using a combination of
the `cipher` and `format` options. The PKCS#8 `type` can be used with any`format` to encrypt any key algorithm (RSA, EC, or DH) by specifying a`cipher`. PKCS#1 and SEC1 can only be
encrypted by specifying a `cipher`when the PEM `format` is used. For maximum compatibility, use PKCS#8 for
encrypted private keys. Since PKCS#8 defines its own
encryption mechanism, PEM-level encryption is not supported when encrypting
a PKCS#8 key. See [RFC 5208](https://www.rfc-editor.org/rfc/rfc5208.txt) for PKCS#8 encryption and [RFC 1421](https://www.rfc-editor.org/rfc/rfc1421.txt) for
PKCS#1 and SEC1 encryption.

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`KeyExportOptions`](https://oven-sh.github.io/bun-types/interfaces/crypto_.KeyExportOptions.md)<``"pem"``\> |

#### Returns

`string` \| [`Buffer`](https://oven-sh.github.io/bun-types/modules/buffer_.md#buffer)

▸ **export**(`options?`): [`Buffer`](https://oven-sh.github.io/bun-types/modules/buffer_.md#buffer)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`KeyExportOptions`](https://oven-sh.github.io/bun-types/interfaces/crypto_.KeyExportOptions.md)<``"der"``\> |

#### Returns

[`Buffer`](https://oven-sh.github.io/bun-types/modules/buffer_.md#buffer)

▸ **export**(`options?`): [`JsonWebKey`](https://oven-sh.github.io/bun-types/interfaces/crypto_.JsonWebKey.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`JwkKeyExportOptions`](https://oven-sh.github.io/bun-types/interfaces/crypto_.JwkKeyExportOptions.md) |

#### Returns

[`JsonWebKey`](https://oven-sh.github.io/bun-types/interfaces/crypto_.JsonWebKey.md)
