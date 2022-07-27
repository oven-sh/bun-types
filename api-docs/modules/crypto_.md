[bun-types](https://github.com/oven-sh/bun-types/blob/master/api-docs/README.md) / [Exports](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules.md) / "crypto"

# Namespace: "crypto"

The `crypto` module provides cryptographic functionality that includes a set of
wrappers for OpenSSL's hash, HMAC, cipher, decipher, sign, and verify functions.

```js
const { createHmac } = await import('crypto');

const secret = 'abcdefg';
const hash = createHmac('sha256', secret)
               .update('I love cupcakes')
               .digest('hex');
console.log(hash);
// Prints:
//   c0fa1bc00531bd78ef38c628449c5102aeabd49b5dc3a2a516ea6ea959d6658e
```

**`See`**

[source](https://github.com/nodejs/node/blob/v18.0.0/lib/crypto.js)

## Table of contents

### Namespaces

- [constants](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/crypto_.constants.md)
- [generateKeyPair](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/crypto_.generateKeyPair.md)

### Classes

- [Certificate](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Certificate.md)
- [Cipher](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Cipher.md)
- [Decipher](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Decipher.md)
- [DiffieHellman](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.DiffieHellman.md)
- [ECDH](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.ECDH.md)
- [Hash](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Hash.md)
- [Hmac](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Hmac.md)
- [KeyObject](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.KeyObject.md)
- [Sign](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Sign.md)
- [Verify](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Verify.md)

### Interfaces

- [AsymmetricKeyDetails](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.AsymmetricKeyDetails.md)
- [BasePrivateKeyEncodingOptions](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.BasePrivateKeyEncodingOptions.md)
- [CheckPrimeOptions](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.CheckPrimeOptions.md)
- [CipherCCM](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.CipherCCM.md)
- [CipherCCMOptions](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.CipherCCMOptions.md)
- [CipherGCM](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.CipherGCM.md)
- [CipherGCMOptions](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.CipherGCMOptions.md)
- [CipherInfo](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.CipherInfo.md)
- [CipherInfoOptions](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.CipherInfoOptions.md)
- [CipherOCB](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.CipherOCB.md)
- [CipherOCBOptions](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.CipherOCBOptions.md)
- [DSAKeyPairKeyObjectOptions](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.DSAKeyPairKeyObjectOptions.md)
- [DSAKeyPairOptions](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.DSAKeyPairOptions.md)
- [DecipherCCM](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.DecipherCCM.md)
- [DecipherGCM](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.DecipherGCM.md)
- [DecipherOCB](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.DecipherOCB.md)
- [ECKeyPairKeyObjectOptions](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.ECKeyPairKeyObjectOptions.md)
- [ECKeyPairOptions](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.ECKeyPairOptions.md)
- [ED25519KeyPairKeyObjectOptions](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.ED25519KeyPairKeyObjectOptions.md)
- [ED25519KeyPairOptions](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.ED25519KeyPairOptions.md)
- [ED448KeyPairKeyObjectOptions](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.ED448KeyPairKeyObjectOptions.md)
- [ED448KeyPairOptions](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.ED448KeyPairOptions.md)
- [GeneratePrimeOptions](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.GeneratePrimeOptions.md)
- [GeneratePrimeOptionsArrayBuffer](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.GeneratePrimeOptionsArrayBuffer.md)
- [GeneratePrimeOptionsBigInt](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.GeneratePrimeOptionsBigInt.md)
- [HashOptions](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.HashOptions.md)
- [JsonWebKey](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.JsonWebKey.md)
- [JsonWebKeyInput](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.JsonWebKeyInput.md)
- [JwkKeyExportOptions](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.JwkKeyExportOptions.md)
- [KeyExportOptions](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.KeyExportOptions.md)
- [KeyPairKeyObjectResult](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.KeyPairKeyObjectResult.md)
- [KeyPairSyncResult](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.KeyPairSyncResult.md)
- [PrivateKeyInput](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.PrivateKeyInput.md)
- [PublicKeyInput](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.PublicKeyInput.md)
- [RSAKeyPairKeyObjectOptions](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.RSAKeyPairKeyObjectOptions.md)
- [RSAKeyPairOptions](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.RSAKeyPairOptions.md)
- [RSAPSSKeyPairKeyObjectOptions](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.RSAPSSKeyPairKeyObjectOptions.md)
- [RSAPSSKeyPairOptions](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.RSAPSSKeyPairOptions.md)
- [RandomUUIDOptions](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.RandomUUIDOptions.md)
- [RsaPrivateKey](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.RsaPrivateKey.md)
- [RsaPublicKey](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.RsaPublicKey.md)
- [ScryptOptions](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.ScryptOptions.md)
- [SecureHeapUsage](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.SecureHeapUsage.md)
- [SignKeyObjectInput](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.SignKeyObjectInput.md)
- [SignPrivateKeyInput](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.SignPrivateKeyInput.md)
- [SigningOptions](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.SigningOptions.md)
- [VerifyKeyObjectInput](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.VerifyKeyObjectInput.md)
- [VerifyPublicKeyInput](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.VerifyPublicKeyInput.md)
- [X25519KeyPairKeyObjectOptions](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.X25519KeyPairKeyObjectOptions.md)
- [X25519KeyPairOptions](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.X25519KeyPairOptions.md)
- [X448KeyPairKeyObjectOptions](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.X448KeyPairKeyObjectOptions.md)
- [X448KeyPairOptions](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.X448KeyPairOptions.md)
- [X509CheckOptions](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.X509CheckOptions.md)

### Type Aliases

- [BinaryLike](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/crypto_.md#binarylike)
- [BinaryToTextEncoding](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/crypto_.md#binarytotextencoding)
- [CharacterEncoding](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/crypto_.md#characterencoding)
- [CipherCCMTypes](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/crypto_.md#cipherccmtypes)
- [CipherGCMTypes](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/crypto_.md#ciphergcmtypes)
- [CipherKey](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/crypto_.md#cipherkey)
- [CipherMode](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/crypto_.md#ciphermode)
- [CipherOCBTypes](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/crypto_.md#cipherocbtypes)
- [DSAEncoding](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/crypto_.md#dsaencoding)
- [ECDHKeyFormat](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/crypto_.md#ecdhkeyformat)
- [Encoding](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/crypto_.md#encoding)
- [KeyFormat](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/crypto_.md#keyformat)
- [KeyLike](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/crypto_.md#keylike)
- [KeyObjectType](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/crypto_.md#keyobjecttype)
- [KeyType](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/crypto_.md#keytype)
- [LargeNumberLike](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/crypto_.md#largenumberlike)
- [LegacyCharacterEncoding](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/crypto_.md#legacycharacterencoding)

### Variables

- [DEFAULT\_ENCODING](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/crypto_.md#default_encoding)
- [fips](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/crypto_.md#fips)

### Functions

- [checkPrime](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/crypto_.md#checkprime)
- [checkPrimeSync](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/crypto_.md#checkprimesync)
- [createCipher](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/crypto_.md#createcipher)
- [createCipheriv](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/crypto_.md#createcipheriv)
- [createDecipher](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/crypto_.md#createdecipher)
- [createDecipheriv](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/crypto_.md#createdecipheriv)
- [createDiffieHellman](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/crypto_.md#creatediffiehellman)
- [createECDH](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/crypto_.md#createecdh)
- [createHash](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/crypto_.md#createhash)
- [createHmac](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/crypto_.md#createhmac)
- [createPrivateKey](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/crypto_.md#createprivatekey)
- [createPublicKey](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/crypto_.md#createpublickey)
- [createSecretKey](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/crypto_.md#createsecretkey)
- [createSign](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/crypto_.md#createsign)
- [createVerify](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/crypto_.md#createverify)
- [diffieHellman](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/crypto_.md#diffiehellman)
- [generateKey](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/crypto_.md#generatekey)
- [generateKeyPair](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/crypto_.md#generatekeypair)
- [generateKeyPairSync](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/crypto_.md#generatekeypairsync)
- [generateKeySync](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/crypto_.md#generatekeysync)
- [generatePrime](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/crypto_.md#generateprime)
- [generatePrimeSync](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/crypto_.md#generateprimesync)
- [getCipherInfo](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/crypto_.md#getcipherinfo)
- [getCiphers](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/crypto_.md#getciphers)
- [getCurves](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/crypto_.md#getcurves)
- [getDiffieHellman](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/crypto_.md#getdiffiehellman)
- [getFips](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/crypto_.md#getfips)
- [getHashes](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/crypto_.md#gethashes)
- [hkdf](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/crypto_.md#hkdf)
- [hkdfSync](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/crypto_.md#hkdfsync)
- [pbkdf2](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/crypto_.md#pbkdf2)
- [pbkdf2Sync](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/crypto_.md#pbkdf2sync)
- [privateDecrypt](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/crypto_.md#privatedecrypt)
- [privateEncrypt](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/crypto_.md#privateencrypt)
- [pseudoRandomBytes](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/crypto_.md#pseudorandombytes)
- [publicDecrypt](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/crypto_.md#publicdecrypt)
- [publicEncrypt](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/crypto_.md#publicencrypt)
- [randomBytes](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/crypto_.md#randombytes)
- [randomFill](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/crypto_.md#randomfill)
- [randomFillSync](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/crypto_.md#randomfillsync)
- [randomInt](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/crypto_.md#randomint)
- [randomUUID](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/crypto_.md#randomuuid)
- [scrypt](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/crypto_.md#scrypt)
- [scryptSync](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/crypto_.md#scryptsync)
- [secureHeapUsed](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/crypto_.md#secureheapused)
- [sign](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/crypto_.md#sign)
- [timingSafeEqual](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/crypto_.md#timingsafeequal)
- [verify](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/crypto_.md#verify)

## Type Aliases

### BinaryLike

Ƭ **BinaryLike**: `string` \| `ArrayBufferView`

___

### BinaryToTextEncoding

Ƭ **BinaryToTextEncoding**: ``"base64"`` \| ``"base64url"`` \| ``"hex"`` \| ``"binary"``

___

### CharacterEncoding

Ƭ **CharacterEncoding**: ``"utf8"`` \| ``"utf-8"`` \| ``"utf16le"`` \| ``"latin1"``

___

### CipherCCMTypes

Ƭ **CipherCCMTypes**: ``"aes-128-ccm"`` \| ``"aes-192-ccm"`` \| ``"aes-256-ccm"`` \| ``"chacha20-poly1305"``

___

### CipherGCMTypes

Ƭ **CipherGCMTypes**: ``"aes-128-gcm"`` \| ``"aes-192-gcm"`` \| ``"aes-256-gcm"``

___

### CipherKey

Ƭ **CipherKey**: [`BinaryLike`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/crypto_.md#binarylike) \| [`KeyObject`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.KeyObject.md)

___

### CipherMode

Ƭ **CipherMode**: ``"cbc"`` \| ``"ccm"`` \| ``"cfb"`` \| ``"ctr"`` \| ``"ecb"`` \| ``"gcm"`` \| ``"ocb"`` \| ``"ofb"`` \| ``"stream"`` \| ``"wrap"`` \| ``"xts"``

___

### CipherOCBTypes

Ƭ **CipherOCBTypes**: ``"aes-128-ocb"`` \| ``"aes-192-ocb"`` \| ``"aes-256-ocb"``

___

### DSAEncoding

Ƭ **DSAEncoding**: ``"der"`` \| ``"ieee-p1363"``

___

### ECDHKeyFormat

Ƭ **ECDHKeyFormat**: ``"compressed"`` \| ``"uncompressed"`` \| ``"hybrid"``

___

### Encoding

Ƭ **Encoding**: [`BinaryToTextEncoding`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/crypto_.md#binarytotextencoding) \| [`CharacterEncoding`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/crypto_.md#characterencoding) \| [`LegacyCharacterEncoding`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/crypto_.md#legacycharacterencoding)

___

### KeyFormat

Ƭ **KeyFormat**: ``"pem"`` \| ``"der"``

___

### KeyLike

Ƭ **KeyLike**: `string` \| [`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer) \| [`KeyObject`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.KeyObject.md)

___

### KeyObjectType

Ƭ **KeyObjectType**: ``"secret"`` \| ``"public"`` \| ``"private"``

___

### KeyType

Ƭ **KeyType**: ``"rsa"`` \| ``"rsa-pss"`` \| ``"dsa"`` \| ``"ec"`` \| ``"ed25519"`` \| ``"ed448"`` \| ``"x25519"`` \| ``"x448"``

___

### LargeNumberLike

Ƭ **LargeNumberLike**: `ArrayBufferView` \| `SharedArrayBuffer` \| `ArrayBuffer` \| `bigint`

___

### LegacyCharacterEncoding

Ƭ **LegacyCharacterEncoding**: ``"ascii"`` \| ``"binary"`` \| ``"ucs2"`` \| ``"ucs-2"``

## Variables

### DEFAULT\_ENCODING

• `Const` **DEFAULT\_ENCODING**: `BufferEncoding`

**`Deprecated`**

since v10.0.0

___

### fips

• `Const` **fips**: `boolean`

**`Deprecated`**

since v10.0.0

## Functions

### checkPrime

▸ **checkPrime**(`value`, `callback`): `void`

Checks the primality of the `candidate`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`LargeNumberLike`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/crypto_.md#largenumberlike) |
| `callback` | (`err`: `Error`, `result`: `boolean`) => `void` |

#### Returns

`void`

▸ **checkPrime**(`value`, `options`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`LargeNumberLike`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/crypto_.md#largenumberlike) |
| `options` | [`CheckPrimeOptions`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.CheckPrimeOptions.md) |
| `callback` | (`err`: `Error`, `result`: `boolean`) => `void` |

#### Returns

`void`

▸ **checkPrime**(`value`, `callback`): `void`

Checks the primality of the `candidate`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`LargeNumberLike`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/crypto_.md#largenumberlike) |
| `callback` | (`err`: `Error`, `result`: `boolean`) => `void` |

#### Returns

`void`

▸ **checkPrime**(`value`, `options`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`LargeNumberLike`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/crypto_.md#largenumberlike) |
| `options` | [`CheckPrimeOptions`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.CheckPrimeOptions.md) |
| `callback` | (`err`: `Error`, `result`: `boolean`) => `void` |

#### Returns

`void`

___

### checkPrimeSync

▸ **checkPrimeSync**(`candidate`, `options?`): `boolean`

Checks the primality of the `candidate`.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `candidate` | [`LargeNumberLike`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/crypto_.md#largenumberlike) | A possible prime encoded as a sequence of big endian octets of arbitrary length. |
| `options?` | [`CheckPrimeOptions`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.CheckPrimeOptions.md) | - |

#### Returns

`boolean`

`true` if the candidate is a prime with an error probability less than `0.25 ** options.checks`.

▸ **checkPrimeSync**(`candidate`, `options?`): `boolean`

Checks the primality of the `candidate`.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `candidate` | [`LargeNumberLike`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/crypto_.md#largenumberlike) | A possible prime encoded as a sequence of big endian octets of arbitrary length. |
| `options?` | [`CheckPrimeOptions`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.CheckPrimeOptions.md) | - |

#### Returns

`boolean`

`true` if the candidate is a prime with an error probability less than `0.25 ** options.checks`.

___

### createCipher

▸ **createCipher**(`algorithm`, `password`, `options`): [`CipherCCM`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.CipherCCM.md)

Creates and returns a `Cipher` object that uses the given `algorithm` and`password`.

The `options` argument controls stream behavior and is optional except when a
cipher in CCM or OCB mode (e.g. `'aes-128-ccm'`) is used. In that case, the`authTagLength` option is required and specifies the length of the
authentication tag in bytes, see `CCM mode`. In GCM mode, the `authTagLength`option is not required but can be used to set the length of the authentication
tag that will be returned by `getAuthTag()` and defaults to 16 bytes.
For `chacha20-poly1305`, the `authTagLength` option defaults to 16 bytes.

The `algorithm` is dependent on OpenSSL, examples are `'aes192'`, etc. On
recent OpenSSL releases, `openssl list -cipher-algorithms` will
display the available cipher algorithms.

The `password` is used to derive the cipher key and initialization vector (IV).
The value must be either a `'latin1'` encoded string, a `Buffer`, a`TypedArray`, or a `DataView`.

The implementation of `crypto.createCipher()` derives keys using the OpenSSL
function [`EVP_BytesToKey`](https://www.openssl.org/docs/man1.1.0/crypto/EVP_BytesToKey.html) with the digest algorithm set to MD5, one
iteration, and no salt. The lack of salt allows dictionary attacks as the same
password always creates the same key. The low iteration count and
non-cryptographically secure hash algorithm allow passwords to be tested very
rapidly.

In line with OpenSSL's recommendation to use a more modern algorithm instead of [`EVP_BytesToKey`](https://www.openssl.org/docs/man1.1.0/crypto/EVP_BytesToKey.html) it is recommended that
developers derive a key and IV on
their own using [scrypt](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/crypto_.md#scrypt) and to use [createCipheriv](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/crypto_.md#createcipheriv) to create the `Cipher` object. Users should not use ciphers with counter mode
(e.g. CTR, GCM, or CCM) in `crypto.createCipher()`. A warning is emitted when
they are used in order to avoid the risk of IV reuse that causes
vulnerabilities. For the case when IV is reused in GCM, see [Nonce-Disrespecting Adversaries](https://github.com/nonce-disrespect/nonce-disrespect) for details.

**`Deprecated`**

Since v10.0.0 - Use [createCipheriv](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/crypto_.md#createcipheriv) instead.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `algorithm` | [`CipherCCMTypes`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/crypto_.md#cipherccmtypes) | - |
| `password` | [`BinaryLike`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/crypto_.md#binarylike) | - |
| `options` | [`CipherCCMOptions`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.CipherCCMOptions.md) | `stream.transform` options |

#### Returns

[`CipherCCM`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.CipherCCM.md)

▸ **createCipher**(`algorithm`, `password`, `options?`): [`CipherGCM`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.CipherGCM.md)

**`Deprecated`**

since v10.0.0 use `createCipheriv()`

#### Parameters

| Name | Type |
| :------ | :------ |
| `algorithm` | [`CipherGCMTypes`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/crypto_.md#ciphergcmtypes) |
| `password` | [`BinaryLike`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/crypto_.md#binarylike) |
| `options?` | [`CipherGCMOptions`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.CipherGCMOptions.md) |

#### Returns

[`CipherGCM`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.CipherGCM.md)

▸ **createCipher**(`algorithm`, `password`, `options?`): [`Cipher`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Cipher.md)

**`Deprecated`**

since v10.0.0 use `createCipheriv()`

#### Parameters

| Name | Type |
| :------ | :------ |
| `algorithm` | `string` |
| `password` | [`BinaryLike`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/crypto_.md#binarylike) |
| `options?` | [`TransformOptions`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/stream_.TransformOptions.md) |

#### Returns

[`Cipher`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Cipher.md)

▸ **createCipher**(`algorithm`, `password`, `options`): [`CipherCCM`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.CipherCCM.md)

Creates and returns a `Cipher` object that uses the given `algorithm` and`password`.

The `options` argument controls stream behavior and is optional except when a
cipher in CCM or OCB mode (e.g. `'aes-128-ccm'`) is used. In that case, the`authTagLength` option is required and specifies the length of the
authentication tag in bytes, see `CCM mode`. In GCM mode, the `authTagLength`option is not required but can be used to set the length of the authentication
tag that will be returned by `getAuthTag()` and defaults to 16 bytes.
For `chacha20-poly1305`, the `authTagLength` option defaults to 16 bytes.

The `algorithm` is dependent on OpenSSL, examples are `'aes192'`, etc. On
recent OpenSSL releases, `openssl list -cipher-algorithms` will
display the available cipher algorithms.

The `password` is used to derive the cipher key and initialization vector (IV).
The value must be either a `'latin1'` encoded string, a `Buffer`, a`TypedArray`, or a `DataView`.

The implementation of `crypto.createCipher()` derives keys using the OpenSSL
function [`EVP_BytesToKey`](https://www.openssl.org/docs/man1.1.0/crypto/EVP_BytesToKey.html) with the digest algorithm set to MD5, one
iteration, and no salt. The lack of salt allows dictionary attacks as the same
password always creates the same key. The low iteration count and
non-cryptographically secure hash algorithm allow passwords to be tested very
rapidly.

In line with OpenSSL's recommendation to use a more modern algorithm instead of [`EVP_BytesToKey`](https://www.openssl.org/docs/man1.1.0/crypto/EVP_BytesToKey.html) it is recommended that
developers derive a key and IV on
their own using [scrypt](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/crypto_.md#scrypt) and to use [createCipheriv](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/crypto_.md#createcipheriv) to create the `Cipher` object. Users should not use ciphers with counter mode
(e.g. CTR, GCM, or CCM) in `crypto.createCipher()`. A warning is emitted when
they are used in order to avoid the risk of IV reuse that causes
vulnerabilities. For the case when IV is reused in GCM, see [Nonce-Disrespecting Adversaries](https://github.com/nonce-disrespect/nonce-disrespect) for details.

**`Deprecated`**

Since v10.0.0 - Use [createCipheriv](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/crypto_.md#createcipheriv) instead.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `algorithm` | [`CipherCCMTypes`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/crypto_.md#cipherccmtypes) | - |
| `password` | [`BinaryLike`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/crypto_.md#binarylike) | - |
| `options` | [`CipherCCMOptions`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.CipherCCMOptions.md) | `stream.transform` options |

#### Returns

[`CipherCCM`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.CipherCCM.md)

▸ **createCipher**(`algorithm`, `password`, `options?`): [`CipherGCM`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.CipherGCM.md)

**`Deprecated`**

since v10.0.0 use `createCipheriv()`

#### Parameters

| Name | Type |
| :------ | :------ |
| `algorithm` | [`CipherGCMTypes`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/crypto_.md#ciphergcmtypes) |
| `password` | [`BinaryLike`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/crypto_.md#binarylike) |
| `options?` | [`CipherGCMOptions`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.CipherGCMOptions.md) |

#### Returns

[`CipherGCM`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.CipherGCM.md)

▸ **createCipher**(`algorithm`, `password`, `options?`): [`Cipher`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Cipher.md)

**`Deprecated`**

since v10.0.0 use `createCipheriv()`

#### Parameters

| Name | Type |
| :------ | :------ |
| `algorithm` | `string` |
| `password` | [`BinaryLike`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/crypto_.md#binarylike) |
| `options?` | [`TransformOptions`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/stream_.TransformOptions.md) |

#### Returns

[`Cipher`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Cipher.md)

___

### createCipheriv

▸ **createCipheriv**(`algorithm`, `key`, `iv`, `options`): [`CipherCCM`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.CipherCCM.md)

Creates and returns a `Cipher` object, with the given `algorithm`, `key` and
initialization vector (`iv`).

The `options` argument controls stream behavior and is optional except when a
cipher in CCM or OCB mode (e.g. `'aes-128-ccm'`) is used. In that case, the`authTagLength` option is required and specifies the length of the
authentication tag in bytes, see `CCM mode`. In GCM mode, the `authTagLength`option is not required but can be used to set the length of the authentication
tag that will be returned by `getAuthTag()` and defaults to 16 bytes.
For `chacha20-poly1305`, the `authTagLength` option defaults to 16 bytes.

The `algorithm` is dependent on OpenSSL, examples are `'aes192'`, etc. On
recent OpenSSL releases, `openssl list -cipher-algorithms` will
display the available cipher algorithms.

The `key` is the raw key used by the `algorithm` and `iv` is an [initialization vector](https://en.wikipedia.org/wiki/Initialization_vector). Both arguments must be `'utf8'` encoded
strings,`Buffers`, `TypedArray`, or `DataView`s. The `key` may optionally be
a `KeyObject` of type `secret`. If the cipher does not need
an initialization vector, `iv` may be `null`.

When passing strings for `key` or `iv`, please consider `caveats when using strings as inputs to cryptographic APIs`.

Initialization vectors should be unpredictable and unique; ideally, they will be
cryptographically random. They do not have to be secret: IVs are typically just
added to ciphertext messages unencrypted. It may sound contradictory that
something has to be unpredictable and unique, but does not have to be secret;
remember that an attacker must not be able to predict ahead of time what a
given IV will be.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `algorithm` | [`CipherCCMTypes`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/crypto_.md#cipherccmtypes) | - |
| `key` | [`CipherKey`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/crypto_.md#cipherkey) | - |
| `iv` | [`BinaryLike`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/crypto_.md#binarylike) | - |
| `options` | [`CipherCCMOptions`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.CipherCCMOptions.md) | `stream.transform` options |

#### Returns

[`CipherCCM`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.CipherCCM.md)

▸ **createCipheriv**(`algorithm`, `key`, `iv`, `options`): [`CipherOCB`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.CipherOCB.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `algorithm` | [`CipherOCBTypes`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/crypto_.md#cipherocbtypes) |
| `key` | [`CipherKey`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/crypto_.md#cipherkey) |
| `iv` | [`BinaryLike`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/crypto_.md#binarylike) |
| `options` | [`CipherOCBOptions`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.CipherOCBOptions.md) |

#### Returns

[`CipherOCB`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.CipherOCB.md)

▸ **createCipheriv**(`algorithm`, `key`, `iv`, `options?`): [`CipherGCM`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.CipherGCM.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `algorithm` | [`CipherGCMTypes`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/crypto_.md#ciphergcmtypes) |
| `key` | [`CipherKey`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/crypto_.md#cipherkey) |
| `iv` | [`BinaryLike`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/crypto_.md#binarylike) |
| `options?` | [`CipherGCMOptions`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.CipherGCMOptions.md) |

#### Returns

[`CipherGCM`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.CipherGCM.md)

▸ **createCipheriv**(`algorithm`, `key`, `iv`, `options?`): [`Cipher`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Cipher.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `algorithm` | `string` |
| `key` | [`CipherKey`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/crypto_.md#cipherkey) |
| `iv` | [`BinaryLike`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/crypto_.md#binarylike) |
| `options?` | [`TransformOptions`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/stream_.TransformOptions.md) |

#### Returns

[`Cipher`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Cipher.md)

▸ **createCipheriv**(`algorithm`, `key`, `iv`, `options`): [`CipherCCM`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.CipherCCM.md)

Creates and returns a `Cipher` object, with the given `algorithm`, `key` and
initialization vector (`iv`).

The `options` argument controls stream behavior and is optional except when a
cipher in CCM or OCB mode (e.g. `'aes-128-ccm'`) is used. In that case, the`authTagLength` option is required and specifies the length of the
authentication tag in bytes, see `CCM mode`. In GCM mode, the `authTagLength`option is not required but can be used to set the length of the authentication
tag that will be returned by `getAuthTag()` and defaults to 16 bytes.
For `chacha20-poly1305`, the `authTagLength` option defaults to 16 bytes.

The `algorithm` is dependent on OpenSSL, examples are `'aes192'`, etc. On
recent OpenSSL releases, `openssl list -cipher-algorithms` will
display the available cipher algorithms.

The `key` is the raw key used by the `algorithm` and `iv` is an [initialization vector](https://en.wikipedia.org/wiki/Initialization_vector). Both arguments must be `'utf8'` encoded
strings,`Buffers`, `TypedArray`, or `DataView`s. The `key` may optionally be
a `KeyObject` of type `secret`. If the cipher does not need
an initialization vector, `iv` may be `null`.

When passing strings for `key` or `iv`, please consider `caveats when using strings as inputs to cryptographic APIs`.

Initialization vectors should be unpredictable and unique; ideally, they will be
cryptographically random. They do not have to be secret: IVs are typically just
added to ciphertext messages unencrypted. It may sound contradictory that
something has to be unpredictable and unique, but does not have to be secret;
remember that an attacker must not be able to predict ahead of time what a
given IV will be.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `algorithm` | [`CipherCCMTypes`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/crypto_.md#cipherccmtypes) | - |
| `key` | [`CipherKey`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/crypto_.md#cipherkey) | - |
| `iv` | [`BinaryLike`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/crypto_.md#binarylike) | - |
| `options` | [`CipherCCMOptions`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.CipherCCMOptions.md) | `stream.transform` options |

#### Returns

[`CipherCCM`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.CipherCCM.md)

▸ **createCipheriv**(`algorithm`, `key`, `iv`, `options`): [`CipherOCB`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.CipherOCB.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `algorithm` | [`CipherOCBTypes`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/crypto_.md#cipherocbtypes) |
| `key` | [`CipherKey`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/crypto_.md#cipherkey) |
| `iv` | [`BinaryLike`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/crypto_.md#binarylike) |
| `options` | [`CipherOCBOptions`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.CipherOCBOptions.md) |

#### Returns

[`CipherOCB`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.CipherOCB.md)

▸ **createCipheriv**(`algorithm`, `key`, `iv`, `options?`): [`CipherGCM`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.CipherGCM.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `algorithm` | [`CipherGCMTypes`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/crypto_.md#ciphergcmtypes) |
| `key` | [`CipherKey`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/crypto_.md#cipherkey) |
| `iv` | [`BinaryLike`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/crypto_.md#binarylike) |
| `options?` | [`CipherGCMOptions`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.CipherGCMOptions.md) |

#### Returns

[`CipherGCM`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.CipherGCM.md)

▸ **createCipheriv**(`algorithm`, `key`, `iv`, `options?`): [`Cipher`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Cipher.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `algorithm` | `string` |
| `key` | [`CipherKey`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/crypto_.md#cipherkey) |
| `iv` | [`BinaryLike`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/crypto_.md#binarylike) |
| `options?` | [`TransformOptions`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/stream_.TransformOptions.md) |

#### Returns

[`Cipher`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Cipher.md)

___

### createDecipher

▸ **createDecipher**(`algorithm`, `password`, `options`): [`DecipherCCM`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.DecipherCCM.md)

Creates and returns a `Decipher` object that uses the given `algorithm` and`password` (key).

The `options` argument controls stream behavior and is optional except when a
cipher in CCM or OCB mode (e.g. `'aes-128-ccm'`) is used. In that case, the`authTagLength` option is required and specifies the length of the
authentication tag in bytes, see `CCM mode`.
For `chacha20-poly1305`, the `authTagLength` option defaults to 16 bytes.

The implementation of `crypto.createDecipher()` derives keys using the OpenSSL
function [`EVP_BytesToKey`](https://www.openssl.org/docs/man1.1.0/crypto/EVP_BytesToKey.html) with the digest algorithm set to MD5, one
iteration, and no salt. The lack of salt allows dictionary attacks as the same
password always creates the same key. The low iteration count and
non-cryptographically secure hash algorithm allow passwords to be tested very
rapidly.

In line with OpenSSL's recommendation to use a more modern algorithm instead of [`EVP_BytesToKey`](https://www.openssl.org/docs/man1.1.0/crypto/EVP_BytesToKey.html) it is recommended that
developers derive a key and IV on
their own using [scrypt](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/crypto_.md#scrypt) and to use [createDecipheriv](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/crypto_.md#createdecipheriv) to create the `Decipher` object.

**`Deprecated`**

Since v10.0.0 - Use [createDecipheriv](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/crypto_.md#createdecipheriv) instead.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `algorithm` | [`CipherCCMTypes`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/crypto_.md#cipherccmtypes) | - |
| `password` | [`BinaryLike`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/crypto_.md#binarylike) | - |
| `options` | [`CipherCCMOptions`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.CipherCCMOptions.md) | `stream.transform` options |

#### Returns

[`DecipherCCM`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.DecipherCCM.md)

▸ **createDecipher**(`algorithm`, `password`, `options?`): [`DecipherGCM`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.DecipherGCM.md)

**`Deprecated`**

since v10.0.0 use `createDecipheriv()`

#### Parameters

| Name | Type |
| :------ | :------ |
| `algorithm` | [`CipherGCMTypes`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/crypto_.md#ciphergcmtypes) |
| `password` | [`BinaryLike`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/crypto_.md#binarylike) |
| `options?` | [`CipherGCMOptions`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.CipherGCMOptions.md) |

#### Returns

[`DecipherGCM`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.DecipherGCM.md)

▸ **createDecipher**(`algorithm`, `password`, `options?`): [`Decipher`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Decipher.md)

**`Deprecated`**

since v10.0.0 use `createDecipheriv()`

#### Parameters

| Name | Type |
| :------ | :------ |
| `algorithm` | `string` |
| `password` | [`BinaryLike`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/crypto_.md#binarylike) |
| `options?` | [`TransformOptions`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/stream_.TransformOptions.md) |

#### Returns

[`Decipher`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Decipher.md)

▸ **createDecipher**(`algorithm`, `password`, `options`): [`DecipherCCM`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.DecipherCCM.md)

Creates and returns a `Decipher` object that uses the given `algorithm` and`password` (key).

The `options` argument controls stream behavior and is optional except when a
cipher in CCM or OCB mode (e.g. `'aes-128-ccm'`) is used. In that case, the`authTagLength` option is required and specifies the length of the
authentication tag in bytes, see `CCM mode`.
For `chacha20-poly1305`, the `authTagLength` option defaults to 16 bytes.

The implementation of `crypto.createDecipher()` derives keys using the OpenSSL
function [`EVP_BytesToKey`](https://www.openssl.org/docs/man1.1.0/crypto/EVP_BytesToKey.html) with the digest algorithm set to MD5, one
iteration, and no salt. The lack of salt allows dictionary attacks as the same
password always creates the same key. The low iteration count and
non-cryptographically secure hash algorithm allow passwords to be tested very
rapidly.

In line with OpenSSL's recommendation to use a more modern algorithm instead of [`EVP_BytesToKey`](https://www.openssl.org/docs/man1.1.0/crypto/EVP_BytesToKey.html) it is recommended that
developers derive a key and IV on
their own using [scrypt](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/crypto_.md#scrypt) and to use [createDecipheriv](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/crypto_.md#createdecipheriv) to create the `Decipher` object.

**`Deprecated`**

Since v10.0.0 - Use [createDecipheriv](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/crypto_.md#createdecipheriv) instead.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `algorithm` | [`CipherCCMTypes`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/crypto_.md#cipherccmtypes) | - |
| `password` | [`BinaryLike`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/crypto_.md#binarylike) | - |
| `options` | [`CipherCCMOptions`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.CipherCCMOptions.md) | `stream.transform` options |

#### Returns

[`DecipherCCM`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.DecipherCCM.md)

▸ **createDecipher**(`algorithm`, `password`, `options?`): [`DecipherGCM`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.DecipherGCM.md)

**`Deprecated`**

since v10.0.0 use `createDecipheriv()`

#### Parameters

| Name | Type |
| :------ | :------ |
| `algorithm` | [`CipherGCMTypes`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/crypto_.md#ciphergcmtypes) |
| `password` | [`BinaryLike`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/crypto_.md#binarylike) |
| `options?` | [`CipherGCMOptions`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.CipherGCMOptions.md) |

#### Returns

[`DecipherGCM`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.DecipherGCM.md)

▸ **createDecipher**(`algorithm`, `password`, `options?`): [`Decipher`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Decipher.md)

**`Deprecated`**

since v10.0.0 use `createDecipheriv()`

#### Parameters

| Name | Type |
| :------ | :------ |
| `algorithm` | `string` |
| `password` | [`BinaryLike`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/crypto_.md#binarylike) |
| `options?` | [`TransformOptions`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/stream_.TransformOptions.md) |

#### Returns

[`Decipher`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Decipher.md)

___

### createDecipheriv

▸ **createDecipheriv**(`algorithm`, `key`, `iv`, `options`): [`DecipherCCM`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.DecipherCCM.md)

Creates and returns a `Decipher` object that uses the given `algorithm`, `key`and initialization vector (`iv`).

The `options` argument controls stream behavior and is optional except when a
cipher in CCM or OCB mode (e.g. `'aes-128-ccm'`) is used. In that case, the`authTagLength` option is required and specifies the length of the
authentication tag in bytes, see `CCM mode`. In GCM mode, the `authTagLength`option is not required but can be used to restrict accepted authentication tags
to those with the specified length.
For `chacha20-poly1305`, the `authTagLength` option defaults to 16 bytes.

The `algorithm` is dependent on OpenSSL, examples are `'aes192'`, etc. On
recent OpenSSL releases, `openssl list -cipher-algorithms` will
display the available cipher algorithms.

The `key` is the raw key used by the `algorithm` and `iv` is an [initialization vector](https://en.wikipedia.org/wiki/Initialization_vector). Both arguments must be `'utf8'` encoded
strings,`Buffers`, `TypedArray`, or `DataView`s. The `key` may optionally be
a `KeyObject` of type `secret`. If the cipher does not need
an initialization vector, `iv` may be `null`.

When passing strings for `key` or `iv`, please consider `caveats when using strings as inputs to cryptographic APIs`.

Initialization vectors should be unpredictable and unique; ideally, they will be
cryptographically random. They do not have to be secret: IVs are typically just
added to ciphertext messages unencrypted. It may sound contradictory that
something has to be unpredictable and unique, but does not have to be secret;
remember that an attacker must not be able to predict ahead of time what a given
IV will be.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `algorithm` | [`CipherCCMTypes`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/crypto_.md#cipherccmtypes) | - |
| `key` | [`CipherKey`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/crypto_.md#cipherkey) | - |
| `iv` | [`BinaryLike`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/crypto_.md#binarylike) | - |
| `options` | [`CipherCCMOptions`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.CipherCCMOptions.md) | `stream.transform` options |

#### Returns

[`DecipherCCM`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.DecipherCCM.md)

▸ **createDecipheriv**(`algorithm`, `key`, `iv`, `options`): [`DecipherOCB`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.DecipherOCB.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `algorithm` | [`CipherOCBTypes`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/crypto_.md#cipherocbtypes) |
| `key` | [`CipherKey`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/crypto_.md#cipherkey) |
| `iv` | [`BinaryLike`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/crypto_.md#binarylike) |
| `options` | [`CipherOCBOptions`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.CipherOCBOptions.md) |

#### Returns

[`DecipherOCB`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.DecipherOCB.md)

▸ **createDecipheriv**(`algorithm`, `key`, `iv`, `options?`): [`DecipherGCM`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.DecipherGCM.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `algorithm` | [`CipherGCMTypes`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/crypto_.md#ciphergcmtypes) |
| `key` | [`CipherKey`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/crypto_.md#cipherkey) |
| `iv` | [`BinaryLike`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/crypto_.md#binarylike) |
| `options?` | [`CipherGCMOptions`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.CipherGCMOptions.md) |

#### Returns

[`DecipherGCM`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.DecipherGCM.md)

▸ **createDecipheriv**(`algorithm`, `key`, `iv`, `options?`): [`Decipher`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Decipher.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `algorithm` | `string` |
| `key` | [`CipherKey`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/crypto_.md#cipherkey) |
| `iv` | [`BinaryLike`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/crypto_.md#binarylike) |
| `options?` | [`TransformOptions`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/stream_.TransformOptions.md) |

#### Returns

[`Decipher`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Decipher.md)

▸ **createDecipheriv**(`algorithm`, `key`, `iv`, `options`): [`DecipherCCM`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.DecipherCCM.md)

Creates and returns a `Decipher` object that uses the given `algorithm`, `key`and initialization vector (`iv`).

The `options` argument controls stream behavior and is optional except when a
cipher in CCM or OCB mode (e.g. `'aes-128-ccm'`) is used. In that case, the`authTagLength` option is required and specifies the length of the
authentication tag in bytes, see `CCM mode`. In GCM mode, the `authTagLength`option is not required but can be used to restrict accepted authentication tags
to those with the specified length.
For `chacha20-poly1305`, the `authTagLength` option defaults to 16 bytes.

The `algorithm` is dependent on OpenSSL, examples are `'aes192'`, etc. On
recent OpenSSL releases, `openssl list -cipher-algorithms` will
display the available cipher algorithms.

The `key` is the raw key used by the `algorithm` and `iv` is an [initialization vector](https://en.wikipedia.org/wiki/Initialization_vector). Both arguments must be `'utf8'` encoded
strings,`Buffers`, `TypedArray`, or `DataView`s. The `key` may optionally be
a `KeyObject` of type `secret`. If the cipher does not need
an initialization vector, `iv` may be `null`.

When passing strings for `key` or `iv`, please consider `caveats when using strings as inputs to cryptographic APIs`.

Initialization vectors should be unpredictable and unique; ideally, they will be
cryptographically random. They do not have to be secret: IVs are typically just
added to ciphertext messages unencrypted. It may sound contradictory that
something has to be unpredictable and unique, but does not have to be secret;
remember that an attacker must not be able to predict ahead of time what a given
IV will be.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `algorithm` | [`CipherCCMTypes`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/crypto_.md#cipherccmtypes) | - |
| `key` | [`CipherKey`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/crypto_.md#cipherkey) | - |
| `iv` | [`BinaryLike`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/crypto_.md#binarylike) | - |
| `options` | [`CipherCCMOptions`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.CipherCCMOptions.md) | `stream.transform` options |

#### Returns

[`DecipherCCM`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.DecipherCCM.md)

▸ **createDecipheriv**(`algorithm`, `key`, `iv`, `options`): [`DecipherOCB`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.DecipherOCB.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `algorithm` | [`CipherOCBTypes`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/crypto_.md#cipherocbtypes) |
| `key` | [`CipherKey`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/crypto_.md#cipherkey) |
| `iv` | [`BinaryLike`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/crypto_.md#binarylike) |
| `options` | [`CipherOCBOptions`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.CipherOCBOptions.md) |

#### Returns

[`DecipherOCB`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.DecipherOCB.md)

▸ **createDecipheriv**(`algorithm`, `key`, `iv`, `options?`): [`DecipherGCM`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.DecipherGCM.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `algorithm` | [`CipherGCMTypes`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/crypto_.md#ciphergcmtypes) |
| `key` | [`CipherKey`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/crypto_.md#cipherkey) |
| `iv` | [`BinaryLike`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/crypto_.md#binarylike) |
| `options?` | [`CipherGCMOptions`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.CipherGCMOptions.md) |

#### Returns

[`DecipherGCM`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.DecipherGCM.md)

▸ **createDecipheriv**(`algorithm`, `key`, `iv`, `options?`): [`Decipher`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Decipher.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `algorithm` | `string` |
| `key` | [`CipherKey`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/crypto_.md#cipherkey) |
| `iv` | [`BinaryLike`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/crypto_.md#binarylike) |
| `options?` | [`TransformOptions`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/stream_.TransformOptions.md) |

#### Returns

[`Decipher`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Decipher.md)

___

### createDiffieHellman

▸ **createDiffieHellman**(`primeLength`, `generator?`): [`DiffieHellman`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.DiffieHellman.md)

Creates a `DiffieHellman` key exchange object using the supplied `prime` and an
optional specific `generator`.

The `generator` argument can be a number, string, or `Buffer`. If`generator` is not specified, the value `2` is used.

If `primeEncoding` is specified, `prime` is expected to be a string; otherwise
a `Buffer`, `TypedArray`, or `DataView` is expected.

If `generatorEncoding` is specified, `generator` is expected to be a string;
otherwise a number, `Buffer`, `TypedArray`, or `DataView` is expected.

#### Parameters

| Name | Type |
| :------ | :------ |
| `primeLength` | `number` |
| `generator?` | `number` \| `ArrayBufferView` |

#### Returns

[`DiffieHellman`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.DiffieHellman.md)

▸ **createDiffieHellman**(`prime`): [`DiffieHellman`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.DiffieHellman.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `prime` | `ArrayBufferView` |

#### Returns

[`DiffieHellman`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.DiffieHellman.md)

▸ **createDiffieHellman**(`prime`, `primeEncoding`): [`DiffieHellman`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.DiffieHellman.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `prime` | `string` |
| `primeEncoding` | [`BinaryToTextEncoding`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/crypto_.md#binarytotextencoding) |

#### Returns

[`DiffieHellman`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.DiffieHellman.md)

▸ **createDiffieHellman**(`prime`, `primeEncoding`, `generator`): [`DiffieHellman`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.DiffieHellman.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `prime` | `string` |
| `primeEncoding` | [`BinaryToTextEncoding`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/crypto_.md#binarytotextencoding) |
| `generator` | `number` \| `ArrayBufferView` |

#### Returns

[`DiffieHellman`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.DiffieHellman.md)

▸ **createDiffieHellman**(`prime`, `primeEncoding`, `generator`, `generatorEncoding`): [`DiffieHellman`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.DiffieHellman.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `prime` | `string` |
| `primeEncoding` | [`BinaryToTextEncoding`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/crypto_.md#binarytotextencoding) |
| `generator` | `string` |
| `generatorEncoding` | [`BinaryToTextEncoding`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/crypto_.md#binarytotextencoding) |

#### Returns

[`DiffieHellman`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.DiffieHellman.md)

▸ **createDiffieHellman**(`primeLength`, `generator?`): [`DiffieHellman`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.DiffieHellman.md)

Creates a `DiffieHellman` key exchange object using the supplied `prime` and an
optional specific `generator`.

The `generator` argument can be a number, string, or `Buffer`. If`generator` is not specified, the value `2` is used.

If `primeEncoding` is specified, `prime` is expected to be a string; otherwise
a `Buffer`, `TypedArray`, or `DataView` is expected.

If `generatorEncoding` is specified, `generator` is expected to be a string;
otherwise a number, `Buffer`, `TypedArray`, or `DataView` is expected.

#### Parameters

| Name | Type |
| :------ | :------ |
| `primeLength` | `number` |
| `generator?` | `number` \| `ArrayBufferView` |

#### Returns

[`DiffieHellman`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.DiffieHellman.md)

▸ **createDiffieHellman**(`prime`): [`DiffieHellman`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.DiffieHellman.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `prime` | `ArrayBufferView` |

#### Returns

[`DiffieHellman`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.DiffieHellman.md)

▸ **createDiffieHellman**(`prime`, `primeEncoding`): [`DiffieHellman`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.DiffieHellman.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `prime` | `string` |
| `primeEncoding` | [`BinaryToTextEncoding`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/crypto_.md#binarytotextencoding) |

#### Returns

[`DiffieHellman`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.DiffieHellman.md)

▸ **createDiffieHellman**(`prime`, `primeEncoding`, `generator`): [`DiffieHellman`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.DiffieHellman.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `prime` | `string` |
| `primeEncoding` | [`BinaryToTextEncoding`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/crypto_.md#binarytotextencoding) |
| `generator` | `number` \| `ArrayBufferView` |

#### Returns

[`DiffieHellman`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.DiffieHellman.md)

▸ **createDiffieHellman**(`prime`, `primeEncoding`, `generator`, `generatorEncoding`): [`DiffieHellman`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.DiffieHellman.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `prime` | `string` |
| `primeEncoding` | [`BinaryToTextEncoding`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/crypto_.md#binarytotextencoding) |
| `generator` | `string` |
| `generatorEncoding` | [`BinaryToTextEncoding`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/crypto_.md#binarytotextencoding) |

#### Returns

[`DiffieHellman`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.DiffieHellman.md)

___

### createECDH

▸ **createECDH**(`curveName`): [`ECDH`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.ECDH.md)

Creates an Elliptic Curve Diffie-Hellman (`ECDH`) key exchange object using a
predefined curve specified by the `curveName` string. Use [getCurves](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/crypto_.md#getcurves) to obtain a list of available curve names. On recent
OpenSSL releases, `openssl ecparam -list_curves` will also display the name
and description of each available elliptic curve.

#### Parameters

| Name | Type |
| :------ | :------ |
| `curveName` | `string` |

#### Returns

[`ECDH`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.ECDH.md)

▸ **createECDH**(`curveName`): [`ECDH`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.ECDH.md)

Creates an Elliptic Curve Diffie-Hellman (`ECDH`) key exchange object using a
predefined curve specified by the `curveName` string. Use [getCurves](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/crypto_.md#getcurves) to obtain a list of available curve names. On recent
OpenSSL releases, `openssl ecparam -list_curves` will also display the name
and description of each available elliptic curve.

#### Parameters

| Name | Type |
| :------ | :------ |
| `curveName` | `string` |

#### Returns

[`ECDH`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.ECDH.md)

___

### createHash

▸ **createHash**(`algorithm`, `options?`): [`Hash`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Hash.md)

Creates and returns a `Hash` object that can be used to generate hash digests
using the given `algorithm`. Optional `options` argument controls stream
behavior. For XOF hash functions such as `'shake256'`, the `outputLength` option
can be used to specify the desired output length in bytes.

The `algorithm` is dependent on the available algorithms supported by the
version of OpenSSL on the platform. Examples are `'sha256'`, `'sha512'`, etc.
On recent releases of OpenSSL, `openssl list -digest-algorithms` will
display the available digest algorithms.

Example: generating the sha256 sum of a file

```js
import {
  createReadStream
} from 'fs';
import { argv } from 'process';
const {
  createHash
} = await import('crypto');

const filename = argv[2];

const hash = createHash('sha256');

const input = createReadStream(filename);
input.on('readable', () => {
  // Only one element is going to be produced by the
  // hash stream.
  const data = input.read();
  if (data)
    hash.update(data);
  else {
    console.log(`${hash.digest('hex')} ${filename}`);
  }
});
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `algorithm` | `string` | - |
| `options?` | [`HashOptions`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.HashOptions.md) | `stream.transform` options |

#### Returns

[`Hash`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Hash.md)

▸ **createHash**(`algorithm`, `options?`): [`Hash`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Hash.md)

Creates and returns a `Hash` object that can be used to generate hash digests
using the given `algorithm`. Optional `options` argument controls stream
behavior. For XOF hash functions such as `'shake256'`, the `outputLength` option
can be used to specify the desired output length in bytes.

The `algorithm` is dependent on the available algorithms supported by the
version of OpenSSL on the platform. Examples are `'sha256'`, `'sha512'`, etc.
On recent releases of OpenSSL, `openssl list -digest-algorithms` will
display the available digest algorithms.

Example: generating the sha256 sum of a file

```js
import {
  createReadStream
} from 'fs';
import { argv } from 'process';
const {
  createHash
} = await import('crypto');

const filename = argv[2];

const hash = createHash('sha256');

const input = createReadStream(filename);
input.on('readable', () => {
  // Only one element is going to be produced by the
  // hash stream.
  const data = input.read();
  if (data)
    hash.update(data);
  else {
    console.log(`${hash.digest('hex')} ${filename}`);
  }
});
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `algorithm` | `string` | - |
| `options?` | [`HashOptions`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.HashOptions.md) | `stream.transform` options |

#### Returns

[`Hash`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Hash.md)

___

### createHmac

▸ **createHmac**(`algorithm`, `key`, `options?`): [`Hmac`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Hmac.md)

Creates and returns an `Hmac` object that uses the given `algorithm` and `key`.
Optional `options` argument controls stream behavior.

The `algorithm` is dependent on the available algorithms supported by the
version of OpenSSL on the platform. Examples are `'sha256'`, `'sha512'`, etc.
On recent releases of OpenSSL, `openssl list -digest-algorithms` will
display the available digest algorithms.

The `key` is the HMAC key used to generate the cryptographic HMAC hash. If it is
a `KeyObject`, its type must be `secret`.

Example: generating the sha256 HMAC of a file

```js
import {
  createReadStream
} from 'fs';
import { argv } from 'process';
const {
  createHmac
} = await import('crypto');

const filename = argv[2];

const hmac = createHmac('sha256', 'a secret');

const input = createReadStream(filename);
input.on('readable', () => {
  // Only one element is going to be produced by the
  // hash stream.
  const data = input.read();
  if (data)
    hmac.update(data);
  else {
    console.log(`${hmac.digest('hex')} ${filename}`);
  }
});
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `algorithm` | `string` | - |
| `key` | [`BinaryLike`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/crypto_.md#binarylike) \| [`KeyObject`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.KeyObject.md) | - |
| `options?` | [`TransformOptions`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/stream_.TransformOptions.md) | `stream.transform` options |

#### Returns

[`Hmac`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Hmac.md)

▸ **createHmac**(`algorithm`, `key`, `options?`): [`Hmac`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Hmac.md)

Creates and returns an `Hmac` object that uses the given `algorithm` and `key`.
Optional `options` argument controls stream behavior.

The `algorithm` is dependent on the available algorithms supported by the
version of OpenSSL on the platform. Examples are `'sha256'`, `'sha512'`, etc.
On recent releases of OpenSSL, `openssl list -digest-algorithms` will
display the available digest algorithms.

The `key` is the HMAC key used to generate the cryptographic HMAC hash. If it is
a `KeyObject`, its type must be `secret`.

Example: generating the sha256 HMAC of a file

```js
import {
  createReadStream
} from 'fs';
import { argv } from 'process';
const {
  createHmac
} = await import('crypto');

const filename = argv[2];

const hmac = createHmac('sha256', 'a secret');

const input = createReadStream(filename);
input.on('readable', () => {
  // Only one element is going to be produced by the
  // hash stream.
  const data = input.read();
  if (data)
    hmac.update(data);
  else {
    console.log(`${hmac.digest('hex')} ${filename}`);
  }
});
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `algorithm` | `string` | - |
| `key` | [`BinaryLike`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/crypto_.md#binarylike) \| [`KeyObject`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.KeyObject.md) | - |
| `options?` | [`TransformOptions`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/stream_.TransformOptions.md) | `stream.transform` options |

#### Returns

[`Hmac`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Hmac.md)

___

### createPrivateKey

▸ **createPrivateKey**(`key`): [`KeyObject`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.KeyObject.md)

Creates and returns a new key object containing a private key. If `key` is a
string or `Buffer`, `format` is assumed to be `'pem'`; otherwise, `key`must be an object with the properties described above.

If the private key is encrypted, a `passphrase` must be specified. The length
of the passphrase is limited to 1024 bytes.

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` \| [`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer) \| [`PrivateKeyInput`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.PrivateKeyInput.md) \| [`JsonWebKeyInput`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.JsonWebKeyInput.md) |

#### Returns

[`KeyObject`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.KeyObject.md)

▸ **createPrivateKey**(`key`): [`KeyObject`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.KeyObject.md)

Creates and returns a new key object containing a private key. If `key` is a
string or `Buffer`, `format` is assumed to be `'pem'`; otherwise, `key`must be an object with the properties described above.

If the private key is encrypted, a `passphrase` must be specified. The length
of the passphrase is limited to 1024 bytes.

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` \| [`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer) \| [`PrivateKeyInput`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.PrivateKeyInput.md) \| [`JsonWebKeyInput`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.JsonWebKeyInput.md) |

#### Returns

[`KeyObject`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.KeyObject.md)

___

### createPublicKey

▸ **createPublicKey**(`key`): [`KeyObject`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.KeyObject.md)

Creates and returns a new key object containing a public key. If `key` is a
string or `Buffer`, `format` is assumed to be `'pem'`; if `key` is a `KeyObject`with type `'private'`, the public key is derived from the given private key;
otherwise, `key` must be an object with the properties described above.

If the format is `'pem'`, the `'key'` may also be an X.509 certificate.

Because public keys can be derived from private keys, a private key may be
passed instead of a public key. In that case, this function behaves as if [createPrivateKey](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/crypto_.md#createprivatekey) had been called, except that the type of the
returned `KeyObject` will be `'public'` and that the private key cannot be
extracted from the returned `KeyObject`. Similarly, if a `KeyObject` with type`'private'` is given, a new `KeyObject` with type `'public'` will be returned
and it will be impossible to extract the private key from the returned object.

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` \| [`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer) \| [`KeyObject`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.KeyObject.md) \| [`JsonWebKeyInput`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.JsonWebKeyInput.md) \| [`PublicKeyInput`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.PublicKeyInput.md) |

#### Returns

[`KeyObject`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.KeyObject.md)

▸ **createPublicKey**(`key`): [`KeyObject`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.KeyObject.md)

Creates and returns a new key object containing a public key. If `key` is a
string or `Buffer`, `format` is assumed to be `'pem'`; if `key` is a `KeyObject`with type `'private'`, the public key is derived from the given private key;
otherwise, `key` must be an object with the properties described above.

If the format is `'pem'`, the `'key'` may also be an X.509 certificate.

Because public keys can be derived from private keys, a private key may be
passed instead of a public key. In that case, this function behaves as if [createPrivateKey](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/crypto_.md#createprivatekey) had been called, except that the type of the
returned `KeyObject` will be `'public'` and that the private key cannot be
extracted from the returned `KeyObject`. Similarly, if a `KeyObject` with type`'private'` is given, a new `KeyObject` with type `'public'` will be returned
and it will be impossible to extract the private key from the returned object.

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` \| [`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer) \| [`KeyObject`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.KeyObject.md) \| [`JsonWebKeyInput`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.JsonWebKeyInput.md) \| [`PublicKeyInput`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.PublicKeyInput.md) |

#### Returns

[`KeyObject`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.KeyObject.md)

___

### createSecretKey

▸ **createSecretKey**(`key`): [`KeyObject`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.KeyObject.md)

Creates and returns a new key object containing a secret key for symmetric
encryption or `Hmac`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `ArrayBufferView` |

#### Returns

[`KeyObject`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.KeyObject.md)

▸ **createSecretKey**(`key`, `encoding`): [`KeyObject`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.KeyObject.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `encoding` | `BufferEncoding` |

#### Returns

[`KeyObject`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.KeyObject.md)

▸ **createSecretKey**(`key`): [`KeyObject`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.KeyObject.md)

Creates and returns a new key object containing a secret key for symmetric
encryption or `Hmac`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `ArrayBufferView` |

#### Returns

[`KeyObject`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.KeyObject.md)

▸ **createSecretKey**(`key`, `encoding`): [`KeyObject`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.KeyObject.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `encoding` | `BufferEncoding` |

#### Returns

[`KeyObject`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.KeyObject.md)

___

### createSign

▸ **createSign**(`algorithm`, `options?`): [`Sign`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Sign.md)

Creates and returns a `Sign` object that uses the given `algorithm`. Use [getHashes](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/crypto_.md#gethashes) to obtain the names of the available digest algorithms.
Optional `options` argument controls the `stream.Writable` behavior.

In some cases, a `Sign` instance can be created using the name of a signature
algorithm, such as `'RSA-SHA256'`, instead of a digest algorithm. This will use
the corresponding digest algorithm. This does not work for all signature
algorithms, such as `'ecdsa-with-SHA256'`, so it is best to always use digest
algorithm names.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `algorithm` | `string` | - |
| `options?` | [`WritableOptions`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/stream_.WritableOptions.md) | `stream.Writable` options |

#### Returns

[`Sign`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Sign.md)

▸ **createSign**(`algorithm`, `options?`): [`Sign`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Sign.md)

Creates and returns a `Sign` object that uses the given `algorithm`. Use [getHashes](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/crypto_.md#gethashes) to obtain the names of the available digest algorithms.
Optional `options` argument controls the `stream.Writable` behavior.

In some cases, a `Sign` instance can be created using the name of a signature
algorithm, such as `'RSA-SHA256'`, instead of a digest algorithm. This will use
the corresponding digest algorithm. This does not work for all signature
algorithms, such as `'ecdsa-with-SHA256'`, so it is best to always use digest
algorithm names.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `algorithm` | `string` | - |
| `options?` | [`WritableOptions`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/stream_.WritableOptions.md) | `stream.Writable` options |

#### Returns

[`Sign`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Sign.md)

___

### createVerify

▸ **createVerify**(`algorithm`, `options?`): [`Verify`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Verify.md)

Creates and returns a `Verify` object that uses the given algorithm.
Use [getHashes](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/crypto_.md#gethashes) to obtain an array of names of the available
signing algorithms. Optional `options` argument controls the`stream.Writable` behavior.

In some cases, a `Verify` instance can be created using the name of a signature
algorithm, such as `'RSA-SHA256'`, instead of a digest algorithm. This will use
the corresponding digest algorithm. This does not work for all signature
algorithms, such as `'ecdsa-with-SHA256'`, so it is best to always use digest
algorithm names.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `algorithm` | `string` | - |
| `options?` | [`WritableOptions`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/stream_.WritableOptions.md) | `stream.Writable` options |

#### Returns

[`Verify`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Verify.md)

▸ **createVerify**(`algorithm`, `options?`): [`Verify`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Verify.md)

Creates and returns a `Verify` object that uses the given algorithm.
Use [getHashes](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/crypto_.md#gethashes) to obtain an array of names of the available
signing algorithms. Optional `options` argument controls the`stream.Writable` behavior.

In some cases, a `Verify` instance can be created using the name of a signature
algorithm, such as `'RSA-SHA256'`, instead of a digest algorithm. This will use
the corresponding digest algorithm. This does not work for all signature
algorithms, such as `'ecdsa-with-SHA256'`, so it is best to always use digest
algorithm names.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `algorithm` | `string` | - |
| `options?` | [`WritableOptions`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/stream_.WritableOptions.md) | `stream.Writable` options |

#### Returns

[`Verify`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Verify.md)

___

### diffieHellman

▸ **diffieHellman**(`options`): [`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer)

Computes the Diffie-Hellman secret based on a `privateKey` and a `publicKey`.
Both keys must have the same `asymmetricKeyType`, which must be one of `'dh'`(for Diffie-Hellman), `'ec'` (for ECDH), `'x448'`, or `'x25519'` (for ECDH-ES).

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Object` |
| `options.privateKey` | [`KeyObject`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.KeyObject.md) |
| `options.publicKey` | [`KeyObject`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.KeyObject.md) |

#### Returns

[`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer)

▸ **diffieHellman**(`options`): [`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer)

Computes the Diffie-Hellman secret based on a `privateKey` and a `publicKey`.
Both keys must have the same `asymmetricKeyType`, which must be one of `'dh'`(for Diffie-Hellman), `'ec'` (for ECDH), `'x448'`, or `'x25519'` (for ECDH-ES).

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Object` |
| `options.privateKey` | [`KeyObject`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.KeyObject.md) |
| `options.publicKey` | [`KeyObject`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.KeyObject.md) |

#### Returns

[`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer)

___

### generateKey

▸ **generateKey**(`type`, `options`, `callback`): `void`

Asynchronously generates a new random secret key of the given `length`. The`type` will determine which validations will be performed on the `length`.

```js
const {
  generateKey
} = await import('crypto');

generateKey('hmac', { length: 64 }, (err, key) => {
  if (err) throw err;
  console.log(key.export().toString('hex'));  // 46e..........620
});
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `type` | ``"hmac"`` \| ``"aes"`` | The intended use of the generated secret key. Currently accepted values are `'hmac'` and `'aes'`. |
| `options` | `Object` | - |
| `options.length` | `number` | - |
| `callback` | (`err`: `Error`, `key`: [`KeyObject`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.KeyObject.md)) => `void` | - |

#### Returns

`void`

▸ **generateKey**(`type`, `options`, `callback`): `void`

Asynchronously generates a new random secret key of the given `length`. The`type` will determine which validations will be performed on the `length`.

```js
const {
  generateKey
} = await import('crypto');

generateKey('hmac', { length: 64 }, (err, key) => {
  if (err) throw err;
  console.log(key.export().toString('hex'));  // 46e..........620
});
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `type` | ``"hmac"`` \| ``"aes"`` | The intended use of the generated secret key. Currently accepted values are `'hmac'` and `'aes'`. |
| `options` | `Object` | - |
| `options.length` | `number` | - |
| `callback` | (`err`: `Error`, `key`: [`KeyObject`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.KeyObject.md)) => `void` | - |

#### Returns

`void`

___

### generateKeyPair

▸ **generateKeyPair**(`type`, `options`, `callback`): `void`

Generates a new asymmetric key pair of the given `type`. RSA, RSA-PSS, DSA, EC,
Ed25519, Ed448, X25519, X448, and DH are currently supported.

If a `publicKeyEncoding` or `privateKeyEncoding` was specified, this function
behaves as if `keyObject.export()` had been called on its result. Otherwise,
the respective part of the key is returned as a `KeyObject`.

It is recommended to encode public keys as `'spki'` and private keys as`'pkcs8'` with encryption for long-term storage:

```js
const {
  generateKeyPair
} = await import('crypto');

generateKeyPair('rsa', {
  modulusLength: 4096,
  publicKeyEncoding: {
    type: 'spki',
    format: 'pem'
  },
  privateKeyEncoding: {
    type: 'pkcs8',
    format: 'pem',
    cipher: 'aes-256-cbc',
    passphrase: 'top secret'
  }
}, (err, publicKey, privateKey) => {
  // Handle errors and use the generated key pair.
});
```

On completion, `callback` will be called with `err` set to `undefined` and`publicKey` / `privateKey` representing the generated key pair.

If this method is invoked as its `util.promisify()` ed version, it returns
a `Promise` for an `Object` with `publicKey` and `privateKey` properties.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `type` | ``"rsa"`` | Must be `'rsa'`, `'rsa-pss'`, `'dsa'`, `'ec'`, `'ed25519'`, `'ed448'`, `'x25519'`, `'x448'`, or `'dh'`. |
| `options` | [`RSAKeyPairOptions`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.RSAKeyPairOptions.md)<``"pem"``, ``"pem"``\> | - |
| `callback` | (`err`: `Error`, `publicKey`: `string`, `privateKey`: `string`) => `void` | - |

#### Returns

`void`

▸ **generateKeyPair**(`type`, `options`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"rsa"`` |
| `options` | [`RSAKeyPairOptions`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.RSAKeyPairOptions.md)<``"pem"``, ``"der"``\> |
| `callback` | (`err`: `Error`, `publicKey`: `string`, `privateKey`: [`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer)) => `void` |

#### Returns

`void`

▸ **generateKeyPair**(`type`, `options`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"rsa"`` |
| `options` | [`RSAKeyPairOptions`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.RSAKeyPairOptions.md)<``"der"``, ``"pem"``\> |
| `callback` | (`err`: `Error`, `publicKey`: [`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer), `privateKey`: `string`) => `void` |

#### Returns

`void`

▸ **generateKeyPair**(`type`, `options`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"rsa"`` |
| `options` | [`RSAKeyPairOptions`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.RSAKeyPairOptions.md)<``"der"``, ``"der"``\> |
| `callback` | (`err`: `Error`, `publicKey`: [`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer), `privateKey`: [`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer)) => `void` |

#### Returns

`void`

▸ **generateKeyPair**(`type`, `options`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"rsa"`` |
| `options` | [`RSAKeyPairKeyObjectOptions`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.RSAKeyPairKeyObjectOptions.md) |
| `callback` | (`err`: `Error`, `publicKey`: [`KeyObject`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.KeyObject.md), `privateKey`: [`KeyObject`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.KeyObject.md)) => `void` |

#### Returns

`void`

▸ **generateKeyPair**(`type`, `options`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"rsa-pss"`` |
| `options` | [`RSAPSSKeyPairOptions`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.RSAPSSKeyPairOptions.md)<``"pem"``, ``"pem"``\> |
| `callback` | (`err`: `Error`, `publicKey`: `string`, `privateKey`: `string`) => `void` |

#### Returns

`void`

▸ **generateKeyPair**(`type`, `options`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"rsa-pss"`` |
| `options` | [`RSAPSSKeyPairOptions`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.RSAPSSKeyPairOptions.md)<``"pem"``, ``"der"``\> |
| `callback` | (`err`: `Error`, `publicKey`: `string`, `privateKey`: [`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer)) => `void` |

#### Returns

`void`

▸ **generateKeyPair**(`type`, `options`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"rsa-pss"`` |
| `options` | [`RSAPSSKeyPairOptions`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.RSAPSSKeyPairOptions.md)<``"der"``, ``"pem"``\> |
| `callback` | (`err`: `Error`, `publicKey`: [`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer), `privateKey`: `string`) => `void` |

#### Returns

`void`

▸ **generateKeyPair**(`type`, `options`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"rsa-pss"`` |
| `options` | [`RSAPSSKeyPairOptions`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.RSAPSSKeyPairOptions.md)<``"der"``, ``"der"``\> |
| `callback` | (`err`: `Error`, `publicKey`: [`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer), `privateKey`: [`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer)) => `void` |

#### Returns

`void`

▸ **generateKeyPair**(`type`, `options`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"rsa-pss"`` |
| `options` | [`RSAPSSKeyPairKeyObjectOptions`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.RSAPSSKeyPairKeyObjectOptions.md) |
| `callback` | (`err`: `Error`, `publicKey`: [`KeyObject`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.KeyObject.md), `privateKey`: [`KeyObject`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.KeyObject.md)) => `void` |

#### Returns

`void`

▸ **generateKeyPair**(`type`, `options`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"dsa"`` |
| `options` | [`DSAKeyPairOptions`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.DSAKeyPairOptions.md)<``"pem"``, ``"pem"``\> |
| `callback` | (`err`: `Error`, `publicKey`: `string`, `privateKey`: `string`) => `void` |

#### Returns

`void`

▸ **generateKeyPair**(`type`, `options`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"dsa"`` |
| `options` | [`DSAKeyPairOptions`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.DSAKeyPairOptions.md)<``"pem"``, ``"der"``\> |
| `callback` | (`err`: `Error`, `publicKey`: `string`, `privateKey`: [`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer)) => `void` |

#### Returns

`void`

▸ **generateKeyPair**(`type`, `options`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"dsa"`` |
| `options` | [`DSAKeyPairOptions`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.DSAKeyPairOptions.md)<``"der"``, ``"pem"``\> |
| `callback` | (`err`: `Error`, `publicKey`: [`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer), `privateKey`: `string`) => `void` |

#### Returns

`void`

▸ **generateKeyPair**(`type`, `options`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"dsa"`` |
| `options` | [`DSAKeyPairOptions`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.DSAKeyPairOptions.md)<``"der"``, ``"der"``\> |
| `callback` | (`err`: `Error`, `publicKey`: [`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer), `privateKey`: [`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer)) => `void` |

#### Returns

`void`

▸ **generateKeyPair**(`type`, `options`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"dsa"`` |
| `options` | [`DSAKeyPairKeyObjectOptions`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.DSAKeyPairKeyObjectOptions.md) |
| `callback` | (`err`: `Error`, `publicKey`: [`KeyObject`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.KeyObject.md), `privateKey`: [`KeyObject`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.KeyObject.md)) => `void` |

#### Returns

`void`

▸ **generateKeyPair**(`type`, `options`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"ec"`` |
| `options` | [`ECKeyPairOptions`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.ECKeyPairOptions.md)<``"pem"``, ``"pem"``\> |
| `callback` | (`err`: `Error`, `publicKey`: `string`, `privateKey`: `string`) => `void` |

#### Returns

`void`

▸ **generateKeyPair**(`type`, `options`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"ec"`` |
| `options` | [`ECKeyPairOptions`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.ECKeyPairOptions.md)<``"pem"``, ``"der"``\> |
| `callback` | (`err`: `Error`, `publicKey`: `string`, `privateKey`: [`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer)) => `void` |

#### Returns

`void`

▸ **generateKeyPair**(`type`, `options`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"ec"`` |
| `options` | [`ECKeyPairOptions`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.ECKeyPairOptions.md)<``"der"``, ``"pem"``\> |
| `callback` | (`err`: `Error`, `publicKey`: [`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer), `privateKey`: `string`) => `void` |

#### Returns

`void`

▸ **generateKeyPair**(`type`, `options`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"ec"`` |
| `options` | [`ECKeyPairOptions`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.ECKeyPairOptions.md)<``"der"``, ``"der"``\> |
| `callback` | (`err`: `Error`, `publicKey`: [`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer), `privateKey`: [`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer)) => `void` |

#### Returns

`void`

▸ **generateKeyPair**(`type`, `options`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"ec"`` |
| `options` | [`ECKeyPairKeyObjectOptions`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.ECKeyPairKeyObjectOptions.md) |
| `callback` | (`err`: `Error`, `publicKey`: [`KeyObject`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.KeyObject.md), `privateKey`: [`KeyObject`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.KeyObject.md)) => `void` |

#### Returns

`void`

▸ **generateKeyPair**(`type`, `options`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"ed25519"`` |
| `options` | [`ED25519KeyPairOptions`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.ED25519KeyPairOptions.md)<``"pem"``, ``"pem"``\> |
| `callback` | (`err`: `Error`, `publicKey`: `string`, `privateKey`: `string`) => `void` |

#### Returns

`void`

▸ **generateKeyPair**(`type`, `options`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"ed25519"`` |
| `options` | [`ED25519KeyPairOptions`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.ED25519KeyPairOptions.md)<``"pem"``, ``"der"``\> |
| `callback` | (`err`: `Error`, `publicKey`: `string`, `privateKey`: [`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer)) => `void` |

#### Returns

`void`

▸ **generateKeyPair**(`type`, `options`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"ed25519"`` |
| `options` | [`ED25519KeyPairOptions`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.ED25519KeyPairOptions.md)<``"der"``, ``"pem"``\> |
| `callback` | (`err`: `Error`, `publicKey`: [`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer), `privateKey`: `string`) => `void` |

#### Returns

`void`

▸ **generateKeyPair**(`type`, `options`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"ed25519"`` |
| `options` | [`ED25519KeyPairOptions`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.ED25519KeyPairOptions.md)<``"der"``, ``"der"``\> |
| `callback` | (`err`: `Error`, `publicKey`: [`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer), `privateKey`: [`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer)) => `void` |

#### Returns

`void`

▸ **generateKeyPair**(`type`, `options`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"ed25519"`` |
| `options` | [`ED25519KeyPairKeyObjectOptions`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.ED25519KeyPairKeyObjectOptions.md) |
| `callback` | (`err`: `Error`, `publicKey`: [`KeyObject`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.KeyObject.md), `privateKey`: [`KeyObject`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.KeyObject.md)) => `void` |

#### Returns

`void`

▸ **generateKeyPair**(`type`, `options`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"ed448"`` |
| `options` | [`ED448KeyPairOptions`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.ED448KeyPairOptions.md)<``"pem"``, ``"pem"``\> |
| `callback` | (`err`: `Error`, `publicKey`: `string`, `privateKey`: `string`) => `void` |

#### Returns

`void`

▸ **generateKeyPair**(`type`, `options`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"ed448"`` |
| `options` | [`ED448KeyPairOptions`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.ED448KeyPairOptions.md)<``"pem"``, ``"der"``\> |
| `callback` | (`err`: `Error`, `publicKey`: `string`, `privateKey`: [`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer)) => `void` |

#### Returns

`void`

▸ **generateKeyPair**(`type`, `options`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"ed448"`` |
| `options` | [`ED448KeyPairOptions`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.ED448KeyPairOptions.md)<``"der"``, ``"pem"``\> |
| `callback` | (`err`: `Error`, `publicKey`: [`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer), `privateKey`: `string`) => `void` |

#### Returns

`void`

▸ **generateKeyPair**(`type`, `options`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"ed448"`` |
| `options` | [`ED448KeyPairOptions`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.ED448KeyPairOptions.md)<``"der"``, ``"der"``\> |
| `callback` | (`err`: `Error`, `publicKey`: [`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer), `privateKey`: [`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer)) => `void` |

#### Returns

`void`

▸ **generateKeyPair**(`type`, `options`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"ed448"`` |
| `options` | [`ED448KeyPairKeyObjectOptions`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.ED448KeyPairKeyObjectOptions.md) |
| `callback` | (`err`: `Error`, `publicKey`: [`KeyObject`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.KeyObject.md), `privateKey`: [`KeyObject`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.KeyObject.md)) => `void` |

#### Returns

`void`

▸ **generateKeyPair**(`type`, `options`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"x25519"`` |
| `options` | [`X25519KeyPairOptions`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.X25519KeyPairOptions.md)<``"pem"``, ``"pem"``\> |
| `callback` | (`err`: `Error`, `publicKey`: `string`, `privateKey`: `string`) => `void` |

#### Returns

`void`

▸ **generateKeyPair**(`type`, `options`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"x25519"`` |
| `options` | [`X25519KeyPairOptions`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.X25519KeyPairOptions.md)<``"pem"``, ``"der"``\> |
| `callback` | (`err`: `Error`, `publicKey`: `string`, `privateKey`: [`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer)) => `void` |

#### Returns

`void`

▸ **generateKeyPair**(`type`, `options`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"x25519"`` |
| `options` | [`X25519KeyPairOptions`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.X25519KeyPairOptions.md)<``"der"``, ``"pem"``\> |
| `callback` | (`err`: `Error`, `publicKey`: [`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer), `privateKey`: `string`) => `void` |

#### Returns

`void`

▸ **generateKeyPair**(`type`, `options`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"x25519"`` |
| `options` | [`X25519KeyPairOptions`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.X25519KeyPairOptions.md)<``"der"``, ``"der"``\> |
| `callback` | (`err`: `Error`, `publicKey`: [`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer), `privateKey`: [`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer)) => `void` |

#### Returns

`void`

▸ **generateKeyPair**(`type`, `options`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"x25519"`` |
| `options` | [`X25519KeyPairKeyObjectOptions`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.X25519KeyPairKeyObjectOptions.md) |
| `callback` | (`err`: `Error`, `publicKey`: [`KeyObject`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.KeyObject.md), `privateKey`: [`KeyObject`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.KeyObject.md)) => `void` |

#### Returns

`void`

▸ **generateKeyPair**(`type`, `options`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"x448"`` |
| `options` | [`X448KeyPairOptions`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.X448KeyPairOptions.md)<``"pem"``, ``"pem"``\> |
| `callback` | (`err`: `Error`, `publicKey`: `string`, `privateKey`: `string`) => `void` |

#### Returns

`void`

▸ **generateKeyPair**(`type`, `options`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"x448"`` |
| `options` | [`X448KeyPairOptions`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.X448KeyPairOptions.md)<``"pem"``, ``"der"``\> |
| `callback` | (`err`: `Error`, `publicKey`: `string`, `privateKey`: [`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer)) => `void` |

#### Returns

`void`

▸ **generateKeyPair**(`type`, `options`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"x448"`` |
| `options` | [`X448KeyPairOptions`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.X448KeyPairOptions.md)<``"der"``, ``"pem"``\> |
| `callback` | (`err`: `Error`, `publicKey`: [`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer), `privateKey`: `string`) => `void` |

#### Returns

`void`

▸ **generateKeyPair**(`type`, `options`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"x448"`` |
| `options` | [`X448KeyPairOptions`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.X448KeyPairOptions.md)<``"der"``, ``"der"``\> |
| `callback` | (`err`: `Error`, `publicKey`: [`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer), `privateKey`: [`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer)) => `void` |

#### Returns

`void`

▸ **generateKeyPair**(`type`, `options`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"x448"`` |
| `options` | [`X448KeyPairKeyObjectOptions`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.X448KeyPairKeyObjectOptions.md) |
| `callback` | (`err`: `Error`, `publicKey`: [`KeyObject`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.KeyObject.md), `privateKey`: [`KeyObject`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.KeyObject.md)) => `void` |

#### Returns

`void`

▸ **generateKeyPair**(`type`, `options`, `callback`): `void`

Generates a new asymmetric key pair of the given `type`. RSA, RSA-PSS, DSA, EC,
Ed25519, Ed448, X25519, X448, and DH are currently supported.

If a `publicKeyEncoding` or `privateKeyEncoding` was specified, this function
behaves as if `keyObject.export()` had been called on its result. Otherwise,
the respective part of the key is returned as a `KeyObject`.

It is recommended to encode public keys as `'spki'` and private keys as`'pkcs8'` with encryption for long-term storage:

```js
const {
  generateKeyPair
} = await import('crypto');

generateKeyPair('rsa', {
  modulusLength: 4096,
  publicKeyEncoding: {
    type: 'spki',
    format: 'pem'
  },
  privateKeyEncoding: {
    type: 'pkcs8',
    format: 'pem',
    cipher: 'aes-256-cbc',
    passphrase: 'top secret'
  }
}, (err, publicKey, privateKey) => {
  // Handle errors and use the generated key pair.
});
```

On completion, `callback` will be called with `err` set to `undefined` and`publicKey` / `privateKey` representing the generated key pair.

If this method is invoked as its `util.promisify()` ed version, it returns
a `Promise` for an `Object` with `publicKey` and `privateKey` properties.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `type` | ``"rsa"`` | Must be `'rsa'`, `'rsa-pss'`, `'dsa'`, `'ec'`, `'ed25519'`, `'ed448'`, `'x25519'`, `'x448'`, or `'dh'`. |
| `options` | [`RSAKeyPairOptions`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.RSAKeyPairOptions.md)<``"pem"``, ``"pem"``\> | - |
| `callback` | (`err`: `Error`, `publicKey`: `string`, `privateKey`: `string`) => `void` | - |

#### Returns

`void`

▸ **generateKeyPair**(`type`, `options`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"rsa"`` |
| `options` | [`RSAKeyPairOptions`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.RSAKeyPairOptions.md)<``"pem"``, ``"der"``\> |
| `callback` | (`err`: `Error`, `publicKey`: `string`, `privateKey`: [`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer)) => `void` |

#### Returns

`void`

▸ **generateKeyPair**(`type`, `options`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"rsa"`` |
| `options` | [`RSAKeyPairOptions`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.RSAKeyPairOptions.md)<``"der"``, ``"pem"``\> |
| `callback` | (`err`: `Error`, `publicKey`: [`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer), `privateKey`: `string`) => `void` |

#### Returns

`void`

▸ **generateKeyPair**(`type`, `options`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"rsa"`` |
| `options` | [`RSAKeyPairOptions`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.RSAKeyPairOptions.md)<``"der"``, ``"der"``\> |
| `callback` | (`err`: `Error`, `publicKey`: [`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer), `privateKey`: [`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer)) => `void` |

#### Returns

`void`

▸ **generateKeyPair**(`type`, `options`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"rsa"`` |
| `options` | [`RSAKeyPairKeyObjectOptions`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.RSAKeyPairKeyObjectOptions.md) |
| `callback` | (`err`: `Error`, `publicKey`: [`KeyObject`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.KeyObject.md), `privateKey`: [`KeyObject`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.KeyObject.md)) => `void` |

#### Returns

`void`

▸ **generateKeyPair**(`type`, `options`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"rsa-pss"`` |
| `options` | [`RSAPSSKeyPairOptions`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.RSAPSSKeyPairOptions.md)<``"pem"``, ``"pem"``\> |
| `callback` | (`err`: `Error`, `publicKey`: `string`, `privateKey`: `string`) => `void` |

#### Returns

`void`

▸ **generateKeyPair**(`type`, `options`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"rsa-pss"`` |
| `options` | [`RSAPSSKeyPairOptions`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.RSAPSSKeyPairOptions.md)<``"pem"``, ``"der"``\> |
| `callback` | (`err`: `Error`, `publicKey`: `string`, `privateKey`: [`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer)) => `void` |

#### Returns

`void`

▸ **generateKeyPair**(`type`, `options`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"rsa-pss"`` |
| `options` | [`RSAPSSKeyPairOptions`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.RSAPSSKeyPairOptions.md)<``"der"``, ``"pem"``\> |
| `callback` | (`err`: `Error`, `publicKey`: [`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer), `privateKey`: `string`) => `void` |

#### Returns

`void`

▸ **generateKeyPair**(`type`, `options`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"rsa-pss"`` |
| `options` | [`RSAPSSKeyPairOptions`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.RSAPSSKeyPairOptions.md)<``"der"``, ``"der"``\> |
| `callback` | (`err`: `Error`, `publicKey`: [`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer), `privateKey`: [`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer)) => `void` |

#### Returns

`void`

▸ **generateKeyPair**(`type`, `options`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"rsa-pss"`` |
| `options` | [`RSAPSSKeyPairKeyObjectOptions`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.RSAPSSKeyPairKeyObjectOptions.md) |
| `callback` | (`err`: `Error`, `publicKey`: [`KeyObject`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.KeyObject.md), `privateKey`: [`KeyObject`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.KeyObject.md)) => `void` |

#### Returns

`void`

▸ **generateKeyPair**(`type`, `options`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"dsa"`` |
| `options` | [`DSAKeyPairOptions`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.DSAKeyPairOptions.md)<``"pem"``, ``"pem"``\> |
| `callback` | (`err`: `Error`, `publicKey`: `string`, `privateKey`: `string`) => `void` |

#### Returns

`void`

▸ **generateKeyPair**(`type`, `options`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"dsa"`` |
| `options` | [`DSAKeyPairOptions`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.DSAKeyPairOptions.md)<``"pem"``, ``"der"``\> |
| `callback` | (`err`: `Error`, `publicKey`: `string`, `privateKey`: [`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer)) => `void` |

#### Returns

`void`

▸ **generateKeyPair**(`type`, `options`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"dsa"`` |
| `options` | [`DSAKeyPairOptions`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.DSAKeyPairOptions.md)<``"der"``, ``"pem"``\> |
| `callback` | (`err`: `Error`, `publicKey`: [`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer), `privateKey`: `string`) => `void` |

#### Returns

`void`

▸ **generateKeyPair**(`type`, `options`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"dsa"`` |
| `options` | [`DSAKeyPairOptions`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.DSAKeyPairOptions.md)<``"der"``, ``"der"``\> |
| `callback` | (`err`: `Error`, `publicKey`: [`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer), `privateKey`: [`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer)) => `void` |

#### Returns

`void`

▸ **generateKeyPair**(`type`, `options`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"dsa"`` |
| `options` | [`DSAKeyPairKeyObjectOptions`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.DSAKeyPairKeyObjectOptions.md) |
| `callback` | (`err`: `Error`, `publicKey`: [`KeyObject`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.KeyObject.md), `privateKey`: [`KeyObject`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.KeyObject.md)) => `void` |

#### Returns

`void`

▸ **generateKeyPair**(`type`, `options`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"ec"`` |
| `options` | [`ECKeyPairOptions`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.ECKeyPairOptions.md)<``"pem"``, ``"pem"``\> |
| `callback` | (`err`: `Error`, `publicKey`: `string`, `privateKey`: `string`) => `void` |

#### Returns

`void`

▸ **generateKeyPair**(`type`, `options`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"ec"`` |
| `options` | [`ECKeyPairOptions`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.ECKeyPairOptions.md)<``"pem"``, ``"der"``\> |
| `callback` | (`err`: `Error`, `publicKey`: `string`, `privateKey`: [`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer)) => `void` |

#### Returns

`void`

▸ **generateKeyPair**(`type`, `options`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"ec"`` |
| `options` | [`ECKeyPairOptions`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.ECKeyPairOptions.md)<``"der"``, ``"pem"``\> |
| `callback` | (`err`: `Error`, `publicKey`: [`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer), `privateKey`: `string`) => `void` |

#### Returns

`void`

▸ **generateKeyPair**(`type`, `options`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"ec"`` |
| `options` | [`ECKeyPairOptions`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.ECKeyPairOptions.md)<``"der"``, ``"der"``\> |
| `callback` | (`err`: `Error`, `publicKey`: [`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer), `privateKey`: [`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer)) => `void` |

#### Returns

`void`

▸ **generateKeyPair**(`type`, `options`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"ec"`` |
| `options` | [`ECKeyPairKeyObjectOptions`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.ECKeyPairKeyObjectOptions.md) |
| `callback` | (`err`: `Error`, `publicKey`: [`KeyObject`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.KeyObject.md), `privateKey`: [`KeyObject`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.KeyObject.md)) => `void` |

#### Returns

`void`

▸ **generateKeyPair**(`type`, `options`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"ed25519"`` |
| `options` | [`ED25519KeyPairOptions`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.ED25519KeyPairOptions.md)<``"pem"``, ``"pem"``\> |
| `callback` | (`err`: `Error`, `publicKey`: `string`, `privateKey`: `string`) => `void` |

#### Returns

`void`

▸ **generateKeyPair**(`type`, `options`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"ed25519"`` |
| `options` | [`ED25519KeyPairOptions`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.ED25519KeyPairOptions.md)<``"pem"``, ``"der"``\> |
| `callback` | (`err`: `Error`, `publicKey`: `string`, `privateKey`: [`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer)) => `void` |

#### Returns

`void`

▸ **generateKeyPair**(`type`, `options`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"ed25519"`` |
| `options` | [`ED25519KeyPairOptions`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.ED25519KeyPairOptions.md)<``"der"``, ``"pem"``\> |
| `callback` | (`err`: `Error`, `publicKey`: [`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer), `privateKey`: `string`) => `void` |

#### Returns

`void`

▸ **generateKeyPair**(`type`, `options`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"ed25519"`` |
| `options` | [`ED25519KeyPairOptions`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.ED25519KeyPairOptions.md)<``"der"``, ``"der"``\> |
| `callback` | (`err`: `Error`, `publicKey`: [`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer), `privateKey`: [`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer)) => `void` |

#### Returns

`void`

▸ **generateKeyPair**(`type`, `options`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"ed25519"`` |
| `options` | [`ED25519KeyPairKeyObjectOptions`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.ED25519KeyPairKeyObjectOptions.md) |
| `callback` | (`err`: `Error`, `publicKey`: [`KeyObject`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.KeyObject.md), `privateKey`: [`KeyObject`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.KeyObject.md)) => `void` |

#### Returns

`void`

▸ **generateKeyPair**(`type`, `options`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"ed448"`` |
| `options` | [`ED448KeyPairOptions`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.ED448KeyPairOptions.md)<``"pem"``, ``"pem"``\> |
| `callback` | (`err`: `Error`, `publicKey`: `string`, `privateKey`: `string`) => `void` |

#### Returns

`void`

▸ **generateKeyPair**(`type`, `options`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"ed448"`` |
| `options` | [`ED448KeyPairOptions`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.ED448KeyPairOptions.md)<``"pem"``, ``"der"``\> |
| `callback` | (`err`: `Error`, `publicKey`: `string`, `privateKey`: [`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer)) => `void` |

#### Returns

`void`

▸ **generateKeyPair**(`type`, `options`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"ed448"`` |
| `options` | [`ED448KeyPairOptions`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.ED448KeyPairOptions.md)<``"der"``, ``"pem"``\> |
| `callback` | (`err`: `Error`, `publicKey`: [`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer), `privateKey`: `string`) => `void` |

#### Returns

`void`

▸ **generateKeyPair**(`type`, `options`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"ed448"`` |
| `options` | [`ED448KeyPairOptions`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.ED448KeyPairOptions.md)<``"der"``, ``"der"``\> |
| `callback` | (`err`: `Error`, `publicKey`: [`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer), `privateKey`: [`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer)) => `void` |

#### Returns

`void`

▸ **generateKeyPair**(`type`, `options`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"ed448"`` |
| `options` | [`ED448KeyPairKeyObjectOptions`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.ED448KeyPairKeyObjectOptions.md) |
| `callback` | (`err`: `Error`, `publicKey`: [`KeyObject`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.KeyObject.md), `privateKey`: [`KeyObject`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.KeyObject.md)) => `void` |

#### Returns

`void`

▸ **generateKeyPair**(`type`, `options`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"x25519"`` |
| `options` | [`X25519KeyPairOptions`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.X25519KeyPairOptions.md)<``"pem"``, ``"pem"``\> |
| `callback` | (`err`: `Error`, `publicKey`: `string`, `privateKey`: `string`) => `void` |

#### Returns

`void`

▸ **generateKeyPair**(`type`, `options`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"x25519"`` |
| `options` | [`X25519KeyPairOptions`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.X25519KeyPairOptions.md)<``"pem"``, ``"der"``\> |
| `callback` | (`err`: `Error`, `publicKey`: `string`, `privateKey`: [`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer)) => `void` |

#### Returns

`void`

▸ **generateKeyPair**(`type`, `options`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"x25519"`` |
| `options` | [`X25519KeyPairOptions`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.X25519KeyPairOptions.md)<``"der"``, ``"pem"``\> |
| `callback` | (`err`: `Error`, `publicKey`: [`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer), `privateKey`: `string`) => `void` |

#### Returns

`void`

▸ **generateKeyPair**(`type`, `options`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"x25519"`` |
| `options` | [`X25519KeyPairOptions`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.X25519KeyPairOptions.md)<``"der"``, ``"der"``\> |
| `callback` | (`err`: `Error`, `publicKey`: [`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer), `privateKey`: [`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer)) => `void` |

#### Returns

`void`

▸ **generateKeyPair**(`type`, `options`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"x25519"`` |
| `options` | [`X25519KeyPairKeyObjectOptions`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.X25519KeyPairKeyObjectOptions.md) |
| `callback` | (`err`: `Error`, `publicKey`: [`KeyObject`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.KeyObject.md), `privateKey`: [`KeyObject`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.KeyObject.md)) => `void` |

#### Returns

`void`

▸ **generateKeyPair**(`type`, `options`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"x448"`` |
| `options` | [`X448KeyPairOptions`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.X448KeyPairOptions.md)<``"pem"``, ``"pem"``\> |
| `callback` | (`err`: `Error`, `publicKey`: `string`, `privateKey`: `string`) => `void` |

#### Returns

`void`

▸ **generateKeyPair**(`type`, `options`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"x448"`` |
| `options` | [`X448KeyPairOptions`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.X448KeyPairOptions.md)<``"pem"``, ``"der"``\> |
| `callback` | (`err`: `Error`, `publicKey`: `string`, `privateKey`: [`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer)) => `void` |

#### Returns

`void`

▸ **generateKeyPair**(`type`, `options`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"x448"`` |
| `options` | [`X448KeyPairOptions`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.X448KeyPairOptions.md)<``"der"``, ``"pem"``\> |
| `callback` | (`err`: `Error`, `publicKey`: [`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer), `privateKey`: `string`) => `void` |

#### Returns

`void`

▸ **generateKeyPair**(`type`, `options`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"x448"`` |
| `options` | [`X448KeyPairOptions`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.X448KeyPairOptions.md)<``"der"``, ``"der"``\> |
| `callback` | (`err`: `Error`, `publicKey`: [`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer), `privateKey`: [`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer)) => `void` |

#### Returns

`void`

▸ **generateKeyPair**(`type`, `options`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"x448"`` |
| `options` | [`X448KeyPairKeyObjectOptions`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.X448KeyPairKeyObjectOptions.md) |
| `callback` | (`err`: `Error`, `publicKey`: [`KeyObject`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.KeyObject.md), `privateKey`: [`KeyObject`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.KeyObject.md)) => `void` |

#### Returns

`void`

___

### generateKeyPairSync

▸ **generateKeyPairSync**(`type`, `options`): [`KeyPairSyncResult`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.KeyPairSyncResult.md)<`string`, `string`\>

Generates a new asymmetric key pair of the given `type`. RSA, RSA-PSS, DSA, EC,
Ed25519, Ed448, X25519, X448, and DH are currently supported.

If a `publicKeyEncoding` or `privateKeyEncoding` was specified, this function
behaves as if `keyObject.export()` had been called on its result. Otherwise,
the respective part of the key is returned as a `KeyObject`.

When encoding public keys, it is recommended to use `'spki'`. When encoding
private keys, it is recommended to use `'pkcs8'` with a strong passphrase,
and to keep the passphrase confidential.

```js
const {
  generateKeyPairSync
} = await import('crypto');

const {
  publicKey,
  privateKey,
} = generateKeyPairSync('rsa', {
  modulusLength: 4096,
  publicKeyEncoding: {
    type: 'spki',
    format: 'pem'
  },
  privateKeyEncoding: {
    type: 'pkcs8',
    format: 'pem',
    cipher: 'aes-256-cbc',
    passphrase: 'top secret'
  }
});
```

The return value `{ publicKey, privateKey }` represents the generated key pair.
When PEM encoding was selected, the respective key will be a string, otherwise
it will be a buffer containing the data encoded as DER.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `type` | ``"rsa"`` | Must be `'rsa'`, `'rsa-pss'`, `'dsa'`, `'ec'`, `'ed25519'`, `'ed448'`, `'x25519'`, `'x448'`, or `'dh'`. |
| `options` | [`RSAKeyPairOptions`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.RSAKeyPairOptions.md)<``"pem"``, ``"pem"``\> | - |

#### Returns

[`KeyPairSyncResult`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.KeyPairSyncResult.md)<`string`, `string`\>

▸ **generateKeyPairSync**(`type`, `options`): [`KeyPairSyncResult`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.KeyPairSyncResult.md)<`string`, [`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"rsa"`` |
| `options` | [`RSAKeyPairOptions`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.RSAKeyPairOptions.md)<``"pem"``, ``"der"``\> |

#### Returns

[`KeyPairSyncResult`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.KeyPairSyncResult.md)<`string`, [`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer)\>

▸ **generateKeyPairSync**(`type`, `options`): [`KeyPairSyncResult`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.KeyPairSyncResult.md)<[`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer), `string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"rsa"`` |
| `options` | [`RSAKeyPairOptions`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.RSAKeyPairOptions.md)<``"der"``, ``"pem"``\> |

#### Returns

[`KeyPairSyncResult`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.KeyPairSyncResult.md)<[`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer), `string`\>

▸ **generateKeyPairSync**(`type`, `options`): [`KeyPairSyncResult`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.KeyPairSyncResult.md)<[`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer), [`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"rsa"`` |
| `options` | [`RSAKeyPairOptions`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.RSAKeyPairOptions.md)<``"der"``, ``"der"``\> |

#### Returns

[`KeyPairSyncResult`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.KeyPairSyncResult.md)<[`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer), [`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer)\>

▸ **generateKeyPairSync**(`type`, `options`): [`KeyPairKeyObjectResult`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.KeyPairKeyObjectResult.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"rsa"`` |
| `options` | [`RSAKeyPairKeyObjectOptions`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.RSAKeyPairKeyObjectOptions.md) |

#### Returns

[`KeyPairKeyObjectResult`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.KeyPairKeyObjectResult.md)

▸ **generateKeyPairSync**(`type`, `options`): [`KeyPairSyncResult`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.KeyPairSyncResult.md)<`string`, `string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"rsa-pss"`` |
| `options` | [`RSAPSSKeyPairOptions`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.RSAPSSKeyPairOptions.md)<``"pem"``, ``"pem"``\> |

#### Returns

[`KeyPairSyncResult`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.KeyPairSyncResult.md)<`string`, `string`\>

▸ **generateKeyPairSync**(`type`, `options`): [`KeyPairSyncResult`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.KeyPairSyncResult.md)<`string`, [`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"rsa-pss"`` |
| `options` | [`RSAPSSKeyPairOptions`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.RSAPSSKeyPairOptions.md)<``"pem"``, ``"der"``\> |

#### Returns

[`KeyPairSyncResult`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.KeyPairSyncResult.md)<`string`, [`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer)\>

▸ **generateKeyPairSync**(`type`, `options`): [`KeyPairSyncResult`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.KeyPairSyncResult.md)<[`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer), `string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"rsa-pss"`` |
| `options` | [`RSAPSSKeyPairOptions`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.RSAPSSKeyPairOptions.md)<``"der"``, ``"pem"``\> |

#### Returns

[`KeyPairSyncResult`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.KeyPairSyncResult.md)<[`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer), `string`\>

▸ **generateKeyPairSync**(`type`, `options`): [`KeyPairSyncResult`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.KeyPairSyncResult.md)<[`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer), [`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"rsa-pss"`` |
| `options` | [`RSAPSSKeyPairOptions`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.RSAPSSKeyPairOptions.md)<``"der"``, ``"der"``\> |

#### Returns

[`KeyPairSyncResult`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.KeyPairSyncResult.md)<[`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer), [`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer)\>

▸ **generateKeyPairSync**(`type`, `options`): [`KeyPairKeyObjectResult`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.KeyPairKeyObjectResult.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"rsa-pss"`` |
| `options` | [`RSAPSSKeyPairKeyObjectOptions`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.RSAPSSKeyPairKeyObjectOptions.md) |

#### Returns

[`KeyPairKeyObjectResult`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.KeyPairKeyObjectResult.md)

▸ **generateKeyPairSync**(`type`, `options`): [`KeyPairSyncResult`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.KeyPairSyncResult.md)<`string`, `string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"dsa"`` |
| `options` | [`DSAKeyPairOptions`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.DSAKeyPairOptions.md)<``"pem"``, ``"pem"``\> |

#### Returns

[`KeyPairSyncResult`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.KeyPairSyncResult.md)<`string`, `string`\>

▸ **generateKeyPairSync**(`type`, `options`): [`KeyPairSyncResult`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.KeyPairSyncResult.md)<`string`, [`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"dsa"`` |
| `options` | [`DSAKeyPairOptions`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.DSAKeyPairOptions.md)<``"pem"``, ``"der"``\> |

#### Returns

[`KeyPairSyncResult`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.KeyPairSyncResult.md)<`string`, [`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer)\>

▸ **generateKeyPairSync**(`type`, `options`): [`KeyPairSyncResult`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.KeyPairSyncResult.md)<[`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer), `string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"dsa"`` |
| `options` | [`DSAKeyPairOptions`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.DSAKeyPairOptions.md)<``"der"``, ``"pem"``\> |

#### Returns

[`KeyPairSyncResult`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.KeyPairSyncResult.md)<[`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer), `string`\>

▸ **generateKeyPairSync**(`type`, `options`): [`KeyPairSyncResult`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.KeyPairSyncResult.md)<[`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer), [`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"dsa"`` |
| `options` | [`DSAKeyPairOptions`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.DSAKeyPairOptions.md)<``"der"``, ``"der"``\> |

#### Returns

[`KeyPairSyncResult`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.KeyPairSyncResult.md)<[`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer), [`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer)\>

▸ **generateKeyPairSync**(`type`, `options`): [`KeyPairKeyObjectResult`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.KeyPairKeyObjectResult.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"dsa"`` |
| `options` | [`DSAKeyPairKeyObjectOptions`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.DSAKeyPairKeyObjectOptions.md) |

#### Returns

[`KeyPairKeyObjectResult`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.KeyPairKeyObjectResult.md)

▸ **generateKeyPairSync**(`type`, `options`): [`KeyPairSyncResult`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.KeyPairSyncResult.md)<`string`, `string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"ec"`` |
| `options` | [`ECKeyPairOptions`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.ECKeyPairOptions.md)<``"pem"``, ``"pem"``\> |

#### Returns

[`KeyPairSyncResult`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.KeyPairSyncResult.md)<`string`, `string`\>

▸ **generateKeyPairSync**(`type`, `options`): [`KeyPairSyncResult`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.KeyPairSyncResult.md)<`string`, [`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"ec"`` |
| `options` | [`ECKeyPairOptions`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.ECKeyPairOptions.md)<``"pem"``, ``"der"``\> |

#### Returns

[`KeyPairSyncResult`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.KeyPairSyncResult.md)<`string`, [`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer)\>

▸ **generateKeyPairSync**(`type`, `options`): [`KeyPairSyncResult`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.KeyPairSyncResult.md)<[`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer), `string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"ec"`` |
| `options` | [`ECKeyPairOptions`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.ECKeyPairOptions.md)<``"der"``, ``"pem"``\> |

#### Returns

[`KeyPairSyncResult`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.KeyPairSyncResult.md)<[`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer), `string`\>

▸ **generateKeyPairSync**(`type`, `options`): [`KeyPairSyncResult`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.KeyPairSyncResult.md)<[`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer), [`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"ec"`` |
| `options` | [`ECKeyPairOptions`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.ECKeyPairOptions.md)<``"der"``, ``"der"``\> |

#### Returns

[`KeyPairSyncResult`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.KeyPairSyncResult.md)<[`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer), [`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer)\>

▸ **generateKeyPairSync**(`type`, `options`): [`KeyPairKeyObjectResult`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.KeyPairKeyObjectResult.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"ec"`` |
| `options` | [`ECKeyPairKeyObjectOptions`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.ECKeyPairKeyObjectOptions.md) |

#### Returns

[`KeyPairKeyObjectResult`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.KeyPairKeyObjectResult.md)

▸ **generateKeyPairSync**(`type`, `options`): [`KeyPairSyncResult`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.KeyPairSyncResult.md)<`string`, `string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"ed25519"`` |
| `options` | [`ED25519KeyPairOptions`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.ED25519KeyPairOptions.md)<``"pem"``, ``"pem"``\> |

#### Returns

[`KeyPairSyncResult`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.KeyPairSyncResult.md)<`string`, `string`\>

▸ **generateKeyPairSync**(`type`, `options`): [`KeyPairSyncResult`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.KeyPairSyncResult.md)<`string`, [`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"ed25519"`` |
| `options` | [`ED25519KeyPairOptions`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.ED25519KeyPairOptions.md)<``"pem"``, ``"der"``\> |

#### Returns

[`KeyPairSyncResult`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.KeyPairSyncResult.md)<`string`, [`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer)\>

▸ **generateKeyPairSync**(`type`, `options`): [`KeyPairSyncResult`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.KeyPairSyncResult.md)<[`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer), `string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"ed25519"`` |
| `options` | [`ED25519KeyPairOptions`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.ED25519KeyPairOptions.md)<``"der"``, ``"pem"``\> |

#### Returns

[`KeyPairSyncResult`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.KeyPairSyncResult.md)<[`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer), `string`\>

▸ **generateKeyPairSync**(`type`, `options`): [`KeyPairSyncResult`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.KeyPairSyncResult.md)<[`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer), [`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"ed25519"`` |
| `options` | [`ED25519KeyPairOptions`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.ED25519KeyPairOptions.md)<``"der"``, ``"der"``\> |

#### Returns

[`KeyPairSyncResult`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.KeyPairSyncResult.md)<[`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer), [`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer)\>

▸ **generateKeyPairSync**(`type`, `options?`): [`KeyPairKeyObjectResult`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.KeyPairKeyObjectResult.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"ed25519"`` |
| `options?` | [`ED25519KeyPairKeyObjectOptions`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.ED25519KeyPairKeyObjectOptions.md) |

#### Returns

[`KeyPairKeyObjectResult`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.KeyPairKeyObjectResult.md)

▸ **generateKeyPairSync**(`type`, `options`): [`KeyPairSyncResult`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.KeyPairSyncResult.md)<`string`, `string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"ed448"`` |
| `options` | [`ED448KeyPairOptions`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.ED448KeyPairOptions.md)<``"pem"``, ``"pem"``\> |

#### Returns

[`KeyPairSyncResult`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.KeyPairSyncResult.md)<`string`, `string`\>

▸ **generateKeyPairSync**(`type`, `options`): [`KeyPairSyncResult`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.KeyPairSyncResult.md)<`string`, [`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"ed448"`` |
| `options` | [`ED448KeyPairOptions`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.ED448KeyPairOptions.md)<``"pem"``, ``"der"``\> |

#### Returns

[`KeyPairSyncResult`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.KeyPairSyncResult.md)<`string`, [`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer)\>

▸ **generateKeyPairSync**(`type`, `options`): [`KeyPairSyncResult`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.KeyPairSyncResult.md)<[`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer), `string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"ed448"`` |
| `options` | [`ED448KeyPairOptions`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.ED448KeyPairOptions.md)<``"der"``, ``"pem"``\> |

#### Returns

[`KeyPairSyncResult`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.KeyPairSyncResult.md)<[`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer), `string`\>

▸ **generateKeyPairSync**(`type`, `options`): [`KeyPairSyncResult`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.KeyPairSyncResult.md)<[`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer), [`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"ed448"`` |
| `options` | [`ED448KeyPairOptions`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.ED448KeyPairOptions.md)<``"der"``, ``"der"``\> |

#### Returns

[`KeyPairSyncResult`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.KeyPairSyncResult.md)<[`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer), [`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer)\>

▸ **generateKeyPairSync**(`type`, `options?`): [`KeyPairKeyObjectResult`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.KeyPairKeyObjectResult.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"ed448"`` |
| `options?` | [`ED448KeyPairKeyObjectOptions`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.ED448KeyPairKeyObjectOptions.md) |

#### Returns

[`KeyPairKeyObjectResult`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.KeyPairKeyObjectResult.md)

▸ **generateKeyPairSync**(`type`, `options`): [`KeyPairSyncResult`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.KeyPairSyncResult.md)<`string`, `string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"x25519"`` |
| `options` | [`X25519KeyPairOptions`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.X25519KeyPairOptions.md)<``"pem"``, ``"pem"``\> |

#### Returns

[`KeyPairSyncResult`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.KeyPairSyncResult.md)<`string`, `string`\>

▸ **generateKeyPairSync**(`type`, `options`): [`KeyPairSyncResult`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.KeyPairSyncResult.md)<`string`, [`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"x25519"`` |
| `options` | [`X25519KeyPairOptions`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.X25519KeyPairOptions.md)<``"pem"``, ``"der"``\> |

#### Returns

[`KeyPairSyncResult`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.KeyPairSyncResult.md)<`string`, [`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer)\>

▸ **generateKeyPairSync**(`type`, `options`): [`KeyPairSyncResult`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.KeyPairSyncResult.md)<[`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer), `string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"x25519"`` |
| `options` | [`X25519KeyPairOptions`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.X25519KeyPairOptions.md)<``"der"``, ``"pem"``\> |

#### Returns

[`KeyPairSyncResult`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.KeyPairSyncResult.md)<[`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer), `string`\>

▸ **generateKeyPairSync**(`type`, `options`): [`KeyPairSyncResult`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.KeyPairSyncResult.md)<[`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer), [`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"x25519"`` |
| `options` | [`X25519KeyPairOptions`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.X25519KeyPairOptions.md)<``"der"``, ``"der"``\> |

#### Returns

[`KeyPairSyncResult`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.KeyPairSyncResult.md)<[`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer), [`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer)\>

▸ **generateKeyPairSync**(`type`, `options?`): [`KeyPairKeyObjectResult`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.KeyPairKeyObjectResult.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"x25519"`` |
| `options?` | [`X25519KeyPairKeyObjectOptions`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.X25519KeyPairKeyObjectOptions.md) |

#### Returns

[`KeyPairKeyObjectResult`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.KeyPairKeyObjectResult.md)

▸ **generateKeyPairSync**(`type`, `options`): [`KeyPairSyncResult`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.KeyPairSyncResult.md)<`string`, `string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"x448"`` |
| `options` | [`X448KeyPairOptions`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.X448KeyPairOptions.md)<``"pem"``, ``"pem"``\> |

#### Returns

[`KeyPairSyncResult`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.KeyPairSyncResult.md)<`string`, `string`\>

▸ **generateKeyPairSync**(`type`, `options`): [`KeyPairSyncResult`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.KeyPairSyncResult.md)<`string`, [`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"x448"`` |
| `options` | [`X448KeyPairOptions`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.X448KeyPairOptions.md)<``"pem"``, ``"der"``\> |

#### Returns

[`KeyPairSyncResult`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.KeyPairSyncResult.md)<`string`, [`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer)\>

▸ **generateKeyPairSync**(`type`, `options`): [`KeyPairSyncResult`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.KeyPairSyncResult.md)<[`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer), `string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"x448"`` |
| `options` | [`X448KeyPairOptions`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.X448KeyPairOptions.md)<``"der"``, ``"pem"``\> |

#### Returns

[`KeyPairSyncResult`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.KeyPairSyncResult.md)<[`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer), `string`\>

▸ **generateKeyPairSync**(`type`, `options`): [`KeyPairSyncResult`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.KeyPairSyncResult.md)<[`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer), [`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"x448"`` |
| `options` | [`X448KeyPairOptions`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.X448KeyPairOptions.md)<``"der"``, ``"der"``\> |

#### Returns

[`KeyPairSyncResult`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.KeyPairSyncResult.md)<[`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer), [`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer)\>

▸ **generateKeyPairSync**(`type`, `options?`): [`KeyPairKeyObjectResult`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.KeyPairKeyObjectResult.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"x448"`` |
| `options?` | [`X448KeyPairKeyObjectOptions`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.X448KeyPairKeyObjectOptions.md) |

#### Returns

[`KeyPairKeyObjectResult`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.KeyPairKeyObjectResult.md)

▸ **generateKeyPairSync**(`type`, `options`): [`KeyPairSyncResult`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.KeyPairSyncResult.md)<`string`, `string`\>

Generates a new asymmetric key pair of the given `type`. RSA, RSA-PSS, DSA, EC,
Ed25519, Ed448, X25519, X448, and DH are currently supported.

If a `publicKeyEncoding` or `privateKeyEncoding` was specified, this function
behaves as if `keyObject.export()` had been called on its result. Otherwise,
the respective part of the key is returned as a `KeyObject`.

When encoding public keys, it is recommended to use `'spki'`. When encoding
private keys, it is recommended to use `'pkcs8'` with a strong passphrase,
and to keep the passphrase confidential.

```js
const {
  generateKeyPairSync
} = await import('crypto');

const {
  publicKey,
  privateKey,
} = generateKeyPairSync('rsa', {
  modulusLength: 4096,
  publicKeyEncoding: {
    type: 'spki',
    format: 'pem'
  },
  privateKeyEncoding: {
    type: 'pkcs8',
    format: 'pem',
    cipher: 'aes-256-cbc',
    passphrase: 'top secret'
  }
});
```

The return value `{ publicKey, privateKey }` represents the generated key pair.
When PEM encoding was selected, the respective key will be a string, otherwise
it will be a buffer containing the data encoded as DER.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `type` | ``"rsa"`` | Must be `'rsa'`, `'rsa-pss'`, `'dsa'`, `'ec'`, `'ed25519'`, `'ed448'`, `'x25519'`, `'x448'`, or `'dh'`. |
| `options` | [`RSAKeyPairOptions`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.RSAKeyPairOptions.md)<``"pem"``, ``"pem"``\> | - |

#### Returns

[`KeyPairSyncResult`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.KeyPairSyncResult.md)<`string`, `string`\>

▸ **generateKeyPairSync**(`type`, `options`): [`KeyPairSyncResult`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.KeyPairSyncResult.md)<`string`, [`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"rsa"`` |
| `options` | [`RSAKeyPairOptions`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.RSAKeyPairOptions.md)<``"pem"``, ``"der"``\> |

#### Returns

[`KeyPairSyncResult`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.KeyPairSyncResult.md)<`string`, [`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer)\>

▸ **generateKeyPairSync**(`type`, `options`): [`KeyPairSyncResult`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.KeyPairSyncResult.md)<[`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer), `string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"rsa"`` |
| `options` | [`RSAKeyPairOptions`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.RSAKeyPairOptions.md)<``"der"``, ``"pem"``\> |

#### Returns

[`KeyPairSyncResult`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.KeyPairSyncResult.md)<[`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer), `string`\>

▸ **generateKeyPairSync**(`type`, `options`): [`KeyPairSyncResult`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.KeyPairSyncResult.md)<[`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer), [`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"rsa"`` |
| `options` | [`RSAKeyPairOptions`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.RSAKeyPairOptions.md)<``"der"``, ``"der"``\> |

#### Returns

[`KeyPairSyncResult`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.KeyPairSyncResult.md)<[`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer), [`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer)\>

▸ **generateKeyPairSync**(`type`, `options`): [`KeyPairKeyObjectResult`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.KeyPairKeyObjectResult.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"rsa"`` |
| `options` | [`RSAKeyPairKeyObjectOptions`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.RSAKeyPairKeyObjectOptions.md) |

#### Returns

[`KeyPairKeyObjectResult`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.KeyPairKeyObjectResult.md)

▸ **generateKeyPairSync**(`type`, `options`): [`KeyPairSyncResult`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.KeyPairSyncResult.md)<`string`, `string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"rsa-pss"`` |
| `options` | [`RSAPSSKeyPairOptions`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.RSAPSSKeyPairOptions.md)<``"pem"``, ``"pem"``\> |

#### Returns

[`KeyPairSyncResult`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.KeyPairSyncResult.md)<`string`, `string`\>

▸ **generateKeyPairSync**(`type`, `options`): [`KeyPairSyncResult`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.KeyPairSyncResult.md)<`string`, [`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"rsa-pss"`` |
| `options` | [`RSAPSSKeyPairOptions`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.RSAPSSKeyPairOptions.md)<``"pem"``, ``"der"``\> |

#### Returns

[`KeyPairSyncResult`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.KeyPairSyncResult.md)<`string`, [`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer)\>

▸ **generateKeyPairSync**(`type`, `options`): [`KeyPairSyncResult`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.KeyPairSyncResult.md)<[`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer), `string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"rsa-pss"`` |
| `options` | [`RSAPSSKeyPairOptions`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.RSAPSSKeyPairOptions.md)<``"der"``, ``"pem"``\> |

#### Returns

[`KeyPairSyncResult`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.KeyPairSyncResult.md)<[`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer), `string`\>

▸ **generateKeyPairSync**(`type`, `options`): [`KeyPairSyncResult`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.KeyPairSyncResult.md)<[`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer), [`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"rsa-pss"`` |
| `options` | [`RSAPSSKeyPairOptions`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.RSAPSSKeyPairOptions.md)<``"der"``, ``"der"``\> |

#### Returns

[`KeyPairSyncResult`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.KeyPairSyncResult.md)<[`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer), [`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer)\>

▸ **generateKeyPairSync**(`type`, `options`): [`KeyPairKeyObjectResult`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.KeyPairKeyObjectResult.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"rsa-pss"`` |
| `options` | [`RSAPSSKeyPairKeyObjectOptions`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.RSAPSSKeyPairKeyObjectOptions.md) |

#### Returns

[`KeyPairKeyObjectResult`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.KeyPairKeyObjectResult.md)

▸ **generateKeyPairSync**(`type`, `options`): [`KeyPairSyncResult`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.KeyPairSyncResult.md)<`string`, `string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"dsa"`` |
| `options` | [`DSAKeyPairOptions`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.DSAKeyPairOptions.md)<``"pem"``, ``"pem"``\> |

#### Returns

[`KeyPairSyncResult`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.KeyPairSyncResult.md)<`string`, `string`\>

▸ **generateKeyPairSync**(`type`, `options`): [`KeyPairSyncResult`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.KeyPairSyncResult.md)<`string`, [`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"dsa"`` |
| `options` | [`DSAKeyPairOptions`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.DSAKeyPairOptions.md)<``"pem"``, ``"der"``\> |

#### Returns

[`KeyPairSyncResult`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.KeyPairSyncResult.md)<`string`, [`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer)\>

▸ **generateKeyPairSync**(`type`, `options`): [`KeyPairSyncResult`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.KeyPairSyncResult.md)<[`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer), `string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"dsa"`` |
| `options` | [`DSAKeyPairOptions`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.DSAKeyPairOptions.md)<``"der"``, ``"pem"``\> |

#### Returns

[`KeyPairSyncResult`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.KeyPairSyncResult.md)<[`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer), `string`\>

▸ **generateKeyPairSync**(`type`, `options`): [`KeyPairSyncResult`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.KeyPairSyncResult.md)<[`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer), [`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"dsa"`` |
| `options` | [`DSAKeyPairOptions`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.DSAKeyPairOptions.md)<``"der"``, ``"der"``\> |

#### Returns

[`KeyPairSyncResult`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.KeyPairSyncResult.md)<[`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer), [`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer)\>

▸ **generateKeyPairSync**(`type`, `options`): [`KeyPairKeyObjectResult`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.KeyPairKeyObjectResult.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"dsa"`` |
| `options` | [`DSAKeyPairKeyObjectOptions`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.DSAKeyPairKeyObjectOptions.md) |

#### Returns

[`KeyPairKeyObjectResult`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.KeyPairKeyObjectResult.md)

▸ **generateKeyPairSync**(`type`, `options`): [`KeyPairSyncResult`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.KeyPairSyncResult.md)<`string`, `string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"ec"`` |
| `options` | [`ECKeyPairOptions`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.ECKeyPairOptions.md)<``"pem"``, ``"pem"``\> |

#### Returns

[`KeyPairSyncResult`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.KeyPairSyncResult.md)<`string`, `string`\>

▸ **generateKeyPairSync**(`type`, `options`): [`KeyPairSyncResult`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.KeyPairSyncResult.md)<`string`, [`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"ec"`` |
| `options` | [`ECKeyPairOptions`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.ECKeyPairOptions.md)<``"pem"``, ``"der"``\> |

#### Returns

[`KeyPairSyncResult`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.KeyPairSyncResult.md)<`string`, [`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer)\>

▸ **generateKeyPairSync**(`type`, `options`): [`KeyPairSyncResult`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.KeyPairSyncResult.md)<[`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer), `string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"ec"`` |
| `options` | [`ECKeyPairOptions`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.ECKeyPairOptions.md)<``"der"``, ``"pem"``\> |

#### Returns

[`KeyPairSyncResult`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.KeyPairSyncResult.md)<[`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer), `string`\>

▸ **generateKeyPairSync**(`type`, `options`): [`KeyPairSyncResult`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.KeyPairSyncResult.md)<[`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer), [`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"ec"`` |
| `options` | [`ECKeyPairOptions`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.ECKeyPairOptions.md)<``"der"``, ``"der"``\> |

#### Returns

[`KeyPairSyncResult`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.KeyPairSyncResult.md)<[`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer), [`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer)\>

▸ **generateKeyPairSync**(`type`, `options`): [`KeyPairKeyObjectResult`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.KeyPairKeyObjectResult.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"ec"`` |
| `options` | [`ECKeyPairKeyObjectOptions`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.ECKeyPairKeyObjectOptions.md) |

#### Returns

[`KeyPairKeyObjectResult`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.KeyPairKeyObjectResult.md)

▸ **generateKeyPairSync**(`type`, `options`): [`KeyPairSyncResult`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.KeyPairSyncResult.md)<`string`, `string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"ed25519"`` |
| `options` | [`ED25519KeyPairOptions`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.ED25519KeyPairOptions.md)<``"pem"``, ``"pem"``\> |

#### Returns

[`KeyPairSyncResult`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.KeyPairSyncResult.md)<`string`, `string`\>

▸ **generateKeyPairSync**(`type`, `options`): [`KeyPairSyncResult`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.KeyPairSyncResult.md)<`string`, [`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"ed25519"`` |
| `options` | [`ED25519KeyPairOptions`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.ED25519KeyPairOptions.md)<``"pem"``, ``"der"``\> |

#### Returns

[`KeyPairSyncResult`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.KeyPairSyncResult.md)<`string`, [`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer)\>

▸ **generateKeyPairSync**(`type`, `options`): [`KeyPairSyncResult`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.KeyPairSyncResult.md)<[`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer), `string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"ed25519"`` |
| `options` | [`ED25519KeyPairOptions`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.ED25519KeyPairOptions.md)<``"der"``, ``"pem"``\> |

#### Returns

[`KeyPairSyncResult`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.KeyPairSyncResult.md)<[`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer), `string`\>

▸ **generateKeyPairSync**(`type`, `options`): [`KeyPairSyncResult`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.KeyPairSyncResult.md)<[`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer), [`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"ed25519"`` |
| `options` | [`ED25519KeyPairOptions`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.ED25519KeyPairOptions.md)<``"der"``, ``"der"``\> |

#### Returns

[`KeyPairSyncResult`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.KeyPairSyncResult.md)<[`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer), [`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer)\>

▸ **generateKeyPairSync**(`type`, `options?`): [`KeyPairKeyObjectResult`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.KeyPairKeyObjectResult.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"ed25519"`` |
| `options?` | [`ED25519KeyPairKeyObjectOptions`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.ED25519KeyPairKeyObjectOptions.md) |

#### Returns

[`KeyPairKeyObjectResult`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.KeyPairKeyObjectResult.md)

▸ **generateKeyPairSync**(`type`, `options`): [`KeyPairSyncResult`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.KeyPairSyncResult.md)<`string`, `string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"ed448"`` |
| `options` | [`ED448KeyPairOptions`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.ED448KeyPairOptions.md)<``"pem"``, ``"pem"``\> |

#### Returns

[`KeyPairSyncResult`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.KeyPairSyncResult.md)<`string`, `string`\>

▸ **generateKeyPairSync**(`type`, `options`): [`KeyPairSyncResult`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.KeyPairSyncResult.md)<`string`, [`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"ed448"`` |
| `options` | [`ED448KeyPairOptions`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.ED448KeyPairOptions.md)<``"pem"``, ``"der"``\> |

#### Returns

[`KeyPairSyncResult`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.KeyPairSyncResult.md)<`string`, [`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer)\>

▸ **generateKeyPairSync**(`type`, `options`): [`KeyPairSyncResult`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.KeyPairSyncResult.md)<[`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer), `string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"ed448"`` |
| `options` | [`ED448KeyPairOptions`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.ED448KeyPairOptions.md)<``"der"``, ``"pem"``\> |

#### Returns

[`KeyPairSyncResult`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.KeyPairSyncResult.md)<[`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer), `string`\>

▸ **generateKeyPairSync**(`type`, `options`): [`KeyPairSyncResult`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.KeyPairSyncResult.md)<[`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer), [`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"ed448"`` |
| `options` | [`ED448KeyPairOptions`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.ED448KeyPairOptions.md)<``"der"``, ``"der"``\> |

#### Returns

[`KeyPairSyncResult`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.KeyPairSyncResult.md)<[`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer), [`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer)\>

▸ **generateKeyPairSync**(`type`, `options?`): [`KeyPairKeyObjectResult`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.KeyPairKeyObjectResult.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"ed448"`` |
| `options?` | [`ED448KeyPairKeyObjectOptions`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.ED448KeyPairKeyObjectOptions.md) |

#### Returns

[`KeyPairKeyObjectResult`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.KeyPairKeyObjectResult.md)

▸ **generateKeyPairSync**(`type`, `options`): [`KeyPairSyncResult`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.KeyPairSyncResult.md)<`string`, `string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"x25519"`` |
| `options` | [`X25519KeyPairOptions`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.X25519KeyPairOptions.md)<``"pem"``, ``"pem"``\> |

#### Returns

[`KeyPairSyncResult`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.KeyPairSyncResult.md)<`string`, `string`\>

▸ **generateKeyPairSync**(`type`, `options`): [`KeyPairSyncResult`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.KeyPairSyncResult.md)<`string`, [`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"x25519"`` |
| `options` | [`X25519KeyPairOptions`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.X25519KeyPairOptions.md)<``"pem"``, ``"der"``\> |

#### Returns

[`KeyPairSyncResult`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.KeyPairSyncResult.md)<`string`, [`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer)\>

▸ **generateKeyPairSync**(`type`, `options`): [`KeyPairSyncResult`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.KeyPairSyncResult.md)<[`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer), `string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"x25519"`` |
| `options` | [`X25519KeyPairOptions`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.X25519KeyPairOptions.md)<``"der"``, ``"pem"``\> |

#### Returns

[`KeyPairSyncResult`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.KeyPairSyncResult.md)<[`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer), `string`\>

▸ **generateKeyPairSync**(`type`, `options`): [`KeyPairSyncResult`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.KeyPairSyncResult.md)<[`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer), [`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"x25519"`` |
| `options` | [`X25519KeyPairOptions`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.X25519KeyPairOptions.md)<``"der"``, ``"der"``\> |

#### Returns

[`KeyPairSyncResult`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.KeyPairSyncResult.md)<[`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer), [`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer)\>

▸ **generateKeyPairSync**(`type`, `options?`): [`KeyPairKeyObjectResult`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.KeyPairKeyObjectResult.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"x25519"`` |
| `options?` | [`X25519KeyPairKeyObjectOptions`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.X25519KeyPairKeyObjectOptions.md) |

#### Returns

[`KeyPairKeyObjectResult`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.KeyPairKeyObjectResult.md)

▸ **generateKeyPairSync**(`type`, `options`): [`KeyPairSyncResult`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.KeyPairSyncResult.md)<`string`, `string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"x448"`` |
| `options` | [`X448KeyPairOptions`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.X448KeyPairOptions.md)<``"pem"``, ``"pem"``\> |

#### Returns

[`KeyPairSyncResult`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.KeyPairSyncResult.md)<`string`, `string`\>

▸ **generateKeyPairSync**(`type`, `options`): [`KeyPairSyncResult`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.KeyPairSyncResult.md)<`string`, [`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"x448"`` |
| `options` | [`X448KeyPairOptions`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.X448KeyPairOptions.md)<``"pem"``, ``"der"``\> |

#### Returns

[`KeyPairSyncResult`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.KeyPairSyncResult.md)<`string`, [`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer)\>

▸ **generateKeyPairSync**(`type`, `options`): [`KeyPairSyncResult`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.KeyPairSyncResult.md)<[`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer), `string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"x448"`` |
| `options` | [`X448KeyPairOptions`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.X448KeyPairOptions.md)<``"der"``, ``"pem"``\> |

#### Returns

[`KeyPairSyncResult`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.KeyPairSyncResult.md)<[`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer), `string`\>

▸ **generateKeyPairSync**(`type`, `options`): [`KeyPairSyncResult`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.KeyPairSyncResult.md)<[`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer), [`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"x448"`` |
| `options` | [`X448KeyPairOptions`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.X448KeyPairOptions.md)<``"der"``, ``"der"``\> |

#### Returns

[`KeyPairSyncResult`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.KeyPairSyncResult.md)<[`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer), [`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer)\>

▸ **generateKeyPairSync**(`type`, `options?`): [`KeyPairKeyObjectResult`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.KeyPairKeyObjectResult.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"x448"`` |
| `options?` | [`X448KeyPairKeyObjectOptions`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.X448KeyPairKeyObjectOptions.md) |

#### Returns

[`KeyPairKeyObjectResult`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.KeyPairKeyObjectResult.md)

___

### generateKeySync

▸ **generateKeySync**(`type`, `options`): [`KeyObject`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.KeyObject.md)

Synchronously generates a new random secret key of the given `length`. The`type` will determine which validations will be performed on the `length`.

```js
const {
  generateKeySync
} = await import('crypto');

const key = generateKeySync('hmac', { length: 64 });
console.log(key.export().toString('hex'));  // e89..........41e
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `type` | ``"hmac"`` \| ``"aes"`` | The intended use of the generated secret key. Currently accepted values are `'hmac'` and `'aes'`. |
| `options` | `Object` | - |
| `options.length` | `number` | - |

#### Returns

[`KeyObject`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.KeyObject.md)

▸ **generateKeySync**(`type`, `options`): [`KeyObject`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.KeyObject.md)

Synchronously generates a new random secret key of the given `length`. The`type` will determine which validations will be performed on the `length`.

```js
const {
  generateKeySync
} = await import('crypto');

const key = generateKeySync('hmac', { length: 64 });
console.log(key.export().toString('hex'));  // e89..........41e
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `type` | ``"hmac"`` \| ``"aes"`` | The intended use of the generated secret key. Currently accepted values are `'hmac'` and `'aes'`. |
| `options` | `Object` | - |
| `options.length` | `number` | - |

#### Returns

[`KeyObject`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.KeyObject.md)

___

### generatePrime

▸ **generatePrime**(`size`, `callback`): `void`

Generates a pseudorandom prime of `size` bits.

If `options.safe` is `true`, the prime will be a safe prime -- that is,`(prime - 1) / 2` will also be a prime.

The `options.add` and `options.rem` parameters can be used to enforce additional
requirements, e.g., for Diffie-Hellman:

* If `options.add` and `options.rem` are both set, the prime will satisfy the
condition that `prime % add = rem`.
* If only `options.add` is set and `options.safe` is not `true`, the prime will
satisfy the condition that `prime % add = 1`.
* If only `options.add` is set and `options.safe` is set to `true`, the prime
will instead satisfy the condition that `prime % add = 3`. This is necessary
because `prime % add = 1` for `options.add > 2` would contradict the condition
enforced by `options.safe`.
* `options.rem` is ignored if `options.add` is not given.

Both `options.add` and `options.rem` must be encoded as big-endian sequences
if given as an `ArrayBuffer`, `SharedArrayBuffer`, `TypedArray`, `Buffer`, or`DataView`.

By default, the prime is encoded as a big-endian sequence of octets
in an [ArrayBuffer](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer). If the `bigint` option is `true`, then a
[bigint](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt) is provided.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `size` | `number` | The size (in bits) of the prime to generate. |
| `callback` | (`err`: `Error`, `prime`: `ArrayBuffer`) => `void` | - |

#### Returns

`void`

▸ **generatePrime**(`size`, `options`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `size` | `number` |
| `options` | [`GeneratePrimeOptionsBigInt`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.GeneratePrimeOptionsBigInt.md) |
| `callback` | (`err`: `Error`, `prime`: `bigint`) => `void` |

#### Returns

`void`

▸ **generatePrime**(`size`, `options`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `size` | `number` |
| `options` | [`GeneratePrimeOptionsArrayBuffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.GeneratePrimeOptionsArrayBuffer.md) |
| `callback` | (`err`: `Error`, `prime`: `ArrayBuffer`) => `void` |

#### Returns

`void`

▸ **generatePrime**(`size`, `options`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `size` | `number` |
| `options` | [`GeneratePrimeOptions`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.GeneratePrimeOptions.md) |
| `callback` | (`err`: `Error`, `prime`: `bigint` \| `ArrayBuffer`) => `void` |

#### Returns

`void`

▸ **generatePrime**(`size`, `callback`): `void`

Generates a pseudorandom prime of `size` bits.

If `options.safe` is `true`, the prime will be a safe prime -- that is,`(prime - 1) / 2` will also be a prime.

The `options.add` and `options.rem` parameters can be used to enforce additional
requirements, e.g., for Diffie-Hellman:

* If `options.add` and `options.rem` are both set, the prime will satisfy the
condition that `prime % add = rem`.
* If only `options.add` is set and `options.safe` is not `true`, the prime will
satisfy the condition that `prime % add = 1`.
* If only `options.add` is set and `options.safe` is set to `true`, the prime
will instead satisfy the condition that `prime % add = 3`. This is necessary
because `prime % add = 1` for `options.add > 2` would contradict the condition
enforced by `options.safe`.
* `options.rem` is ignored if `options.add` is not given.

Both `options.add` and `options.rem` must be encoded as big-endian sequences
if given as an `ArrayBuffer`, `SharedArrayBuffer`, `TypedArray`, `Buffer`, or`DataView`.

By default, the prime is encoded as a big-endian sequence of octets
in an [ArrayBuffer](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer). If the `bigint` option is `true`, then a
[bigint](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt) is provided.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `size` | `number` | The size (in bits) of the prime to generate. |
| `callback` | (`err`: `Error`, `prime`: `ArrayBuffer`) => `void` | - |

#### Returns

`void`

▸ **generatePrime**(`size`, `options`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `size` | `number` |
| `options` | [`GeneratePrimeOptionsBigInt`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.GeneratePrimeOptionsBigInt.md) |
| `callback` | (`err`: `Error`, `prime`: `bigint`) => `void` |

#### Returns

`void`

▸ **generatePrime**(`size`, `options`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `size` | `number` |
| `options` | [`GeneratePrimeOptionsArrayBuffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.GeneratePrimeOptionsArrayBuffer.md) |
| `callback` | (`err`: `Error`, `prime`: `ArrayBuffer`) => `void` |

#### Returns

`void`

▸ **generatePrime**(`size`, `options`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `size` | `number` |
| `options` | [`GeneratePrimeOptions`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.GeneratePrimeOptions.md) |
| `callback` | (`err`: `Error`, `prime`: `bigint` \| `ArrayBuffer`) => `void` |

#### Returns

`void`

___

### generatePrimeSync

▸ **generatePrimeSync**(`size`): `ArrayBuffer`

Generates a pseudorandom prime of `size` bits.

If `options.safe` is `true`, the prime will be a safe prime -- that is,`(prime - 1) / 2` will also be a prime.

The `options.add` and `options.rem` parameters can be used to enforce additional
requirements, e.g., for Diffie-Hellman:

* If `options.add` and `options.rem` are both set, the prime will satisfy the
condition that `prime % add = rem`.
* If only `options.add` is set and `options.safe` is not `true`, the prime will
satisfy the condition that `prime % add = 1`.
* If only `options.add` is set and `options.safe` is set to `true`, the prime
will instead satisfy the condition that `prime % add = 3`. This is necessary
because `prime % add = 1` for `options.add > 2` would contradict the condition
enforced by `options.safe`.
* `options.rem` is ignored if `options.add` is not given.

Both `options.add` and `options.rem` must be encoded as big-endian sequences
if given as an `ArrayBuffer`, `SharedArrayBuffer`, `TypedArray`, `Buffer`, or`DataView`.

By default, the prime is encoded as a big-endian sequence of octets
in an [ArrayBuffer](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer). If the `bigint` option is `true`, then a
[bigint](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt) is provided.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `size` | `number` | The size (in bits) of the prime to generate. |

#### Returns

`ArrayBuffer`

▸ **generatePrimeSync**(`size`, `options`): `bigint`

#### Parameters

| Name | Type |
| :------ | :------ |
| `size` | `number` |
| `options` | [`GeneratePrimeOptionsBigInt`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.GeneratePrimeOptionsBigInt.md) |

#### Returns

`bigint`

▸ **generatePrimeSync**(`size`, `options`): `ArrayBuffer`

#### Parameters

| Name | Type |
| :------ | :------ |
| `size` | `number` |
| `options` | [`GeneratePrimeOptionsArrayBuffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.GeneratePrimeOptionsArrayBuffer.md) |

#### Returns

`ArrayBuffer`

▸ **generatePrimeSync**(`size`, `options`): `ArrayBuffer` \| `bigint`

#### Parameters

| Name | Type |
| :------ | :------ |
| `size` | `number` |
| `options` | [`GeneratePrimeOptions`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.GeneratePrimeOptions.md) |

#### Returns

`ArrayBuffer` \| `bigint`

▸ **generatePrimeSync**(`size`): `ArrayBuffer`

Generates a pseudorandom prime of `size` bits.

If `options.safe` is `true`, the prime will be a safe prime -- that is,`(prime - 1) / 2` will also be a prime.

The `options.add` and `options.rem` parameters can be used to enforce additional
requirements, e.g., for Diffie-Hellman:

* If `options.add` and `options.rem` are both set, the prime will satisfy the
condition that `prime % add = rem`.
* If only `options.add` is set and `options.safe` is not `true`, the prime will
satisfy the condition that `prime % add = 1`.
* If only `options.add` is set and `options.safe` is set to `true`, the prime
will instead satisfy the condition that `prime % add = 3`. This is necessary
because `prime % add = 1` for `options.add > 2` would contradict the condition
enforced by `options.safe`.
* `options.rem` is ignored if `options.add` is not given.

Both `options.add` and `options.rem` must be encoded as big-endian sequences
if given as an `ArrayBuffer`, `SharedArrayBuffer`, `TypedArray`, `Buffer`, or`DataView`.

By default, the prime is encoded as a big-endian sequence of octets
in an [ArrayBuffer](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer). If the `bigint` option is `true`, then a
[bigint](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt) is provided.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `size` | `number` | The size (in bits) of the prime to generate. |

#### Returns

`ArrayBuffer`

▸ **generatePrimeSync**(`size`, `options`): `bigint`

#### Parameters

| Name | Type |
| :------ | :------ |
| `size` | `number` |
| `options` | [`GeneratePrimeOptionsBigInt`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.GeneratePrimeOptionsBigInt.md) |

#### Returns

`bigint`

▸ **generatePrimeSync**(`size`, `options`): `ArrayBuffer`

#### Parameters

| Name | Type |
| :------ | :------ |
| `size` | `number` |
| `options` | [`GeneratePrimeOptionsArrayBuffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.GeneratePrimeOptionsArrayBuffer.md) |

#### Returns

`ArrayBuffer`

▸ **generatePrimeSync**(`size`, `options`): `ArrayBuffer` \| `bigint`

#### Parameters

| Name | Type |
| :------ | :------ |
| `size` | `number` |
| `options` | [`GeneratePrimeOptions`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.GeneratePrimeOptions.md) |

#### Returns

`ArrayBuffer` \| `bigint`

___

### getCipherInfo

▸ **getCipherInfo**(`nameOrNid`, `options?`): [`CipherInfo`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.CipherInfo.md) \| `undefined`

Returns information about a given cipher.

Some ciphers accept variable length keys and initialization vectors. By default,
the `crypto.getCipherInfo()` method will return the default values for these
ciphers. To test if a given key length or iv length is acceptable for given
cipher, use the `keyLength` and `ivLength` options. If the given values are
unacceptable, `undefined` will be returned.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `nameOrNid` | `string` \| `number` | The name or nid of the cipher to query. |
| `options?` | [`CipherInfoOptions`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.CipherInfoOptions.md) | - |

#### Returns

[`CipherInfo`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.CipherInfo.md) \| `undefined`

▸ **getCipherInfo**(`nameOrNid`, `options?`): [`CipherInfo`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.CipherInfo.md) \| `undefined`

Returns information about a given cipher.

Some ciphers accept variable length keys and initialization vectors. By default,
the `crypto.getCipherInfo()` method will return the default values for these
ciphers. To test if a given key length or iv length is acceptable for given
cipher, use the `keyLength` and `ivLength` options. If the given values are
unacceptable, `undefined` will be returned.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `nameOrNid` | `string` \| `number` | The name or nid of the cipher to query. |
| `options?` | [`CipherInfoOptions`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.CipherInfoOptions.md) | - |

#### Returns

[`CipherInfo`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.CipherInfo.md) \| `undefined`

___

### getCiphers

▸ **getCiphers**(): `string`[]

```js
const {
  getCiphers
} = await import('crypto');

console.log(getCiphers()); // ['aes-128-cbc', 'aes-128-ccm', ...]
```

#### Returns

`string`[]

An array with the names of the supported cipher algorithms.

▸ **getCiphers**(): `string`[]

```js
const {
  getCiphers
} = await import('crypto');

console.log(getCiphers()); // ['aes-128-cbc', 'aes-128-ccm', ...]
```

#### Returns

`string`[]

An array with the names of the supported cipher algorithms.

___

### getCurves

▸ **getCurves**(): `string`[]

```js
const {
  getCurves
} = await import('crypto');

console.log(getCurves()); // ['Oakley-EC2N-3', 'Oakley-EC2N-4', ...]
```

#### Returns

`string`[]

An array with the names of the supported elliptic curves.

▸ **getCurves**(): `string`[]

```js
const {
  getCurves
} = await import('crypto');

console.log(getCurves()); // ['Oakley-EC2N-3', 'Oakley-EC2N-4', ...]
```

#### Returns

`string`[]

An array with the names of the supported elliptic curves.

___

### getDiffieHellman

▸ **getDiffieHellman**(`groupName`): [`DiffieHellman`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.DiffieHellman.md)

Creates a predefined `DiffieHellmanGroup` key exchange object. The
supported groups are: `'modp1'`, `'modp2'`, `'modp5'` (defined in [RFC 2412](https://www.rfc-editor.org/rfc/rfc2412.txt), but see `Caveats`) and `'modp14'`, `'modp15'`,`'modp16'`, `'modp17'`,
`'modp18'` (defined in [RFC 3526](https://www.rfc-editor.org/rfc/rfc3526.txt)). The
returned object mimics the interface of objects created by [createDiffieHellman](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/crypto_.md#creatediffiehellman), but will not allow changing
the keys (with `diffieHellman.setPublicKey()`, for example). The
advantage of using this method is that the parties do not have to
generate nor exchange a group modulus beforehand, saving both processor
and communication time.

Example (obtaining a shared secret):

```js
const {
  getDiffieHellman
} = await import('crypto');
const alice = getDiffieHellman('modp14');
const bob = getDiffieHellman('modp14');

alice.generateKeys();
bob.generateKeys();

const aliceSecret = alice.computeSecret(bob.getPublicKey(), null, 'hex');
const bobSecret = bob.computeSecret(alice.getPublicKey(), null, 'hex');

// aliceSecret and bobSecret should be the same
console.log(aliceSecret === bobSecret);
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `groupName` | `string` |

#### Returns

[`DiffieHellman`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.DiffieHellman.md)

▸ **getDiffieHellman**(`groupName`): [`DiffieHellman`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.DiffieHellman.md)

Creates a predefined `DiffieHellmanGroup` key exchange object. The
supported groups are: `'modp1'`, `'modp2'`, `'modp5'` (defined in [RFC 2412](https://www.rfc-editor.org/rfc/rfc2412.txt), but see `Caveats`) and `'modp14'`, `'modp15'`,`'modp16'`, `'modp17'`,
`'modp18'` (defined in [RFC 3526](https://www.rfc-editor.org/rfc/rfc3526.txt)). The
returned object mimics the interface of objects created by [createDiffieHellman](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/crypto_.md#creatediffiehellman), but will not allow changing
the keys (with `diffieHellman.setPublicKey()`, for example). The
advantage of using this method is that the parties do not have to
generate nor exchange a group modulus beforehand, saving both processor
and communication time.

Example (obtaining a shared secret):

```js
const {
  getDiffieHellman
} = await import('crypto');
const alice = getDiffieHellman('modp14');
const bob = getDiffieHellman('modp14');

alice.generateKeys();
bob.generateKeys();

const aliceSecret = alice.computeSecret(bob.getPublicKey(), null, 'hex');
const bobSecret = bob.computeSecret(alice.getPublicKey(), null, 'hex');

// aliceSecret and bobSecret should be the same
console.log(aliceSecret === bobSecret);
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `groupName` | `string` |

#### Returns

[`DiffieHellman`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.DiffieHellman.md)

___

### getFips

▸ **getFips**(): ``1`` \| ``0``

#### Returns

``1`` \| ``0``

`1` if and only if a FIPS compliant crypto provider is currently in use, `0` otherwise. A future semver-major release may change the return type of this API to a {boolean}.

▸ **getFips**(): ``1`` \| ``0``

#### Returns

``1`` \| ``0``

`1` if and only if a FIPS compliant crypto provider is currently in use, `0` otherwise. A future semver-major release may change the return type of this API to a {boolean}.

___

### getHashes

▸ **getHashes**(): `string`[]

```js
const {
  getHashes
} = await import('crypto');

console.log(getHashes()); // ['DSA', 'DSA-SHA', 'DSA-SHA1', ...]
```

#### Returns

`string`[]

An array of the names of the supported hash algorithms, such as `'RSA-SHA256'`. Hash algorithms are also called "digest" algorithms.

▸ **getHashes**(): `string`[]

```js
const {
  getHashes
} = await import('crypto');

console.log(getHashes()); // ['DSA', 'DSA-SHA', 'DSA-SHA1', ...]
```

#### Returns

`string`[]

An array of the names of the supported hash algorithms, such as `'RSA-SHA256'`. Hash algorithms are also called "digest" algorithms.

___

### hkdf

▸ **hkdf**(`digest`, `irm`, `salt`, `info`, `keylen`, `callback`): `void`

HKDF is a simple key derivation function defined in RFC 5869\. The given `ikm`,`salt` and `info` are used with the `digest` to derive a key of `keylen` bytes.

The supplied `callback` function is called with two arguments: `err` and`derivedKey`. If an errors occurs while deriving the key, `err` will be set;
otherwise `err` will be `null`. The successfully generated `derivedKey` will
be passed to the callback as an [ArrayBuffer](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer). An error will be thrown if any
of the input arguments specify invalid values or types.

```js
import { Buffer } from 'buffer';
const {
  hkdf
} = await import('crypto');

hkdf('sha512', 'key', 'salt', 'info', 64, (err, derivedKey) => {
  if (err) throw err;
  console.log(Buffer.from(derivedKey).toString('hex'));  // '24156e2...5391653'
});
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `digest` | `string` | The digest algorithm to use. |
| `irm` | [`BinaryLike`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/crypto_.md#binarylike) \| [`KeyObject`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.KeyObject.md) | - |
| `salt` | [`BinaryLike`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/crypto_.md#binarylike) | The salt value. Must be provided but can be zero-length. |
| `info` | [`BinaryLike`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/crypto_.md#binarylike) | Additional info value. Must be provided but can be zero-length, and cannot be more than 1024 bytes. |
| `keylen` | `number` | The length of the key to generate. Must be greater than 0. The maximum allowable value is `255` times the number of bytes produced by the selected digest function (e.g. `sha512` generates 64-byte hashes, making the maximum HKDF output 16320 bytes). |
| `callback` | (`err`: `Error`, `derivedKey`: `ArrayBuffer`) => `void` | - |

#### Returns

`void`

▸ **hkdf**(`digest`, `irm`, `salt`, `info`, `keylen`, `callback`): `void`

HKDF is a simple key derivation function defined in RFC 5869\. The given `ikm`,`salt` and `info` are used with the `digest` to derive a key of `keylen` bytes.

The supplied `callback` function is called with two arguments: `err` and`derivedKey`. If an errors occurs while deriving the key, `err` will be set;
otherwise `err` will be `null`. The successfully generated `derivedKey` will
be passed to the callback as an [ArrayBuffer](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer). An error will be thrown if any
of the input arguments specify invalid values or types.

```js
import { Buffer } from 'buffer';
const {
  hkdf
} = await import('crypto');

hkdf('sha512', 'key', 'salt', 'info', 64, (err, derivedKey) => {
  if (err) throw err;
  console.log(Buffer.from(derivedKey).toString('hex'));  // '24156e2...5391653'
});
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `digest` | `string` | The digest algorithm to use. |
| `irm` | [`BinaryLike`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/crypto_.md#binarylike) \| [`KeyObject`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.KeyObject.md) | - |
| `salt` | [`BinaryLike`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/crypto_.md#binarylike) | The salt value. Must be provided but can be zero-length. |
| `info` | [`BinaryLike`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/crypto_.md#binarylike) | Additional info value. Must be provided but can be zero-length, and cannot be more than 1024 bytes. |
| `keylen` | `number` | The length of the key to generate. Must be greater than 0. The maximum allowable value is `255` times the number of bytes produced by the selected digest function (e.g. `sha512` generates 64-byte hashes, making the maximum HKDF output 16320 bytes). |
| `callback` | (`err`: `Error`, `derivedKey`: `ArrayBuffer`) => `void` | - |

#### Returns

`void`

___

### hkdfSync

▸ **hkdfSync**(`digest`, `ikm`, `salt`, `info`, `keylen`): `ArrayBuffer`

Provides a synchronous HKDF key derivation function as defined in RFC 5869\. The
given `ikm`, `salt` and `info` are used with the `digest` to derive a key of`keylen` bytes.

The successfully generated `derivedKey` will be returned as an [ArrayBuffer](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer).

An error will be thrown if any of the input arguments specify invalid values or
types, or if the derived key cannot be generated.

```js
import { Buffer } from 'buffer';
const {
  hkdfSync
} = await import('crypto');

const derivedKey = hkdfSync('sha512', 'key', 'salt', 'info', 64);
console.log(Buffer.from(derivedKey).toString('hex'));  // '24156e2...5391653'
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `digest` | `string` | The digest algorithm to use. |
| `ikm` | [`BinaryLike`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/crypto_.md#binarylike) \| [`KeyObject`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.KeyObject.md) | The input keying material. It must be at least one byte in length. |
| `salt` | [`BinaryLike`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/crypto_.md#binarylike) | The salt value. Must be provided but can be zero-length. |
| `info` | [`BinaryLike`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/crypto_.md#binarylike) | Additional info value. Must be provided but can be zero-length, and cannot be more than 1024 bytes. |
| `keylen` | `number` | The length of the key to generate. Must be greater than 0. The maximum allowable value is `255` times the number of bytes produced by the selected digest function (e.g. `sha512` generates 64-byte hashes, making the maximum HKDF output 16320 bytes). |

#### Returns

`ArrayBuffer`

▸ **hkdfSync**(`digest`, `ikm`, `salt`, `info`, `keylen`): `ArrayBuffer`

Provides a synchronous HKDF key derivation function as defined in RFC 5869\. The
given `ikm`, `salt` and `info` are used with the `digest` to derive a key of`keylen` bytes.

The successfully generated `derivedKey` will be returned as an [ArrayBuffer](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer).

An error will be thrown if any of the input arguments specify invalid values or
types, or if the derived key cannot be generated.

```js
import { Buffer } from 'buffer';
const {
  hkdfSync
} = await import('crypto');

const derivedKey = hkdfSync('sha512', 'key', 'salt', 'info', 64);
console.log(Buffer.from(derivedKey).toString('hex'));  // '24156e2...5391653'
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `digest` | `string` | The digest algorithm to use. |
| `ikm` | [`BinaryLike`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/crypto_.md#binarylike) \| [`KeyObject`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.KeyObject.md) | The input keying material. It must be at least one byte in length. |
| `salt` | [`BinaryLike`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/crypto_.md#binarylike) | The salt value. Must be provided but can be zero-length. |
| `info` | [`BinaryLike`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/crypto_.md#binarylike) | Additional info value. Must be provided but can be zero-length, and cannot be more than 1024 bytes. |
| `keylen` | `number` | The length of the key to generate. Must be greater than 0. The maximum allowable value is `255` times the number of bytes produced by the selected digest function (e.g. `sha512` generates 64-byte hashes, making the maximum HKDF output 16320 bytes). |

#### Returns

`ArrayBuffer`

___

### pbkdf2

▸ **pbkdf2**(`password`, `salt`, `iterations`, `keylen`, `digest`, `callback`): `void`

Provides an asynchronous Password-Based Key Derivation Function 2 (PBKDF2)
implementation. A selected HMAC digest algorithm specified by `digest` is
applied to derive a key of the requested byte length (`keylen`) from the`password`, `salt` and `iterations`.

The supplied `callback` function is called with two arguments: `err` and`derivedKey`. If an error occurs while deriving the key, `err` will be set;
otherwise `err` will be `null`. By default, the successfully generated`derivedKey` will be passed to the callback as a `Buffer`. An error will be
thrown if any of the input arguments specify invalid values or types.

If `digest` is `null`, `'sha1'` will be used. This behavior is deprecated,
please specify a `digest` explicitly.

The `iterations` argument must be a number set as high as possible. The
higher the number of iterations, the more secure the derived key will be,
but will take a longer amount of time to complete.

The `salt` should be as unique as possible. It is recommended that a salt is
random and at least 16 bytes long. See [NIST SP 800-132](https://nvlpubs.nist.gov/nistpubs/Legacy/SP/nistspecialpublication800-132.pdf) for details.

When passing strings for `password` or `salt`, please consider `caveats when using strings as inputs to cryptographic APIs`.

```js
const {
  pbkdf2
} = await import('crypto');

pbkdf2('secret', 'salt', 100000, 64, 'sha512', (err, derivedKey) => {
  if (err) throw err;
  console.log(derivedKey.toString('hex'));  // '3745e48...08d59ae'
});
```

The `crypto.DEFAULT_ENCODING` property can be used to change the way the`derivedKey` is passed to the callback. This property, however, has been
deprecated and use should be avoided.

```js
import crypto from 'crypto';
crypto.DEFAULT_ENCODING = 'hex';
crypto.pbkdf2('secret', 'salt', 100000, 512, 'sha512', (err, derivedKey) => {
  if (err) throw err;
  console.log(derivedKey);  // '3745e48...aa39b34'
});
```

An array of supported digest functions can be retrieved using [getHashes](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/crypto_.md#gethashes).

This API uses libuv's threadpool, which can have surprising and
negative performance implications for some applications; see the `UV_THREADPOOL_SIZE` documentation for more information.

#### Parameters

| Name | Type |
| :------ | :------ |
| `password` | [`BinaryLike`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/crypto_.md#binarylike) |
| `salt` | [`BinaryLike`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/crypto_.md#binarylike) |
| `iterations` | `number` |
| `keylen` | `number` |
| `digest` | `string` |
| `callback` | (`err`: `Error`, `derivedKey`: [`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer)) => `void` |

#### Returns

`void`

▸ **pbkdf2**(`password`, `salt`, `iterations`, `keylen`, `digest`, `callback`): `void`

Provides an asynchronous Password-Based Key Derivation Function 2 (PBKDF2)
implementation. A selected HMAC digest algorithm specified by `digest` is
applied to derive a key of the requested byte length (`keylen`) from the`password`, `salt` and `iterations`.

The supplied `callback` function is called with two arguments: `err` and`derivedKey`. If an error occurs while deriving the key, `err` will be set;
otherwise `err` will be `null`. By default, the successfully generated`derivedKey` will be passed to the callback as a `Buffer`. An error will be
thrown if any of the input arguments specify invalid values or types.

If `digest` is `null`, `'sha1'` will be used. This behavior is deprecated,
please specify a `digest` explicitly.

The `iterations` argument must be a number set as high as possible. The
higher the number of iterations, the more secure the derived key will be,
but will take a longer amount of time to complete.

The `salt` should be as unique as possible. It is recommended that a salt is
random and at least 16 bytes long. See [NIST SP 800-132](https://nvlpubs.nist.gov/nistpubs/Legacy/SP/nistspecialpublication800-132.pdf) for details.

When passing strings for `password` or `salt`, please consider `caveats when using strings as inputs to cryptographic APIs`.

```js
const {
  pbkdf2
} = await import('crypto');

pbkdf2('secret', 'salt', 100000, 64, 'sha512', (err, derivedKey) => {
  if (err) throw err;
  console.log(derivedKey.toString('hex'));  // '3745e48...08d59ae'
});
```

The `crypto.DEFAULT_ENCODING` property can be used to change the way the`derivedKey` is passed to the callback. This property, however, has been
deprecated and use should be avoided.

```js
import crypto from 'crypto';
crypto.DEFAULT_ENCODING = 'hex';
crypto.pbkdf2('secret', 'salt', 100000, 512, 'sha512', (err, derivedKey) => {
  if (err) throw err;
  console.log(derivedKey);  // '3745e48...aa39b34'
});
```

An array of supported digest functions can be retrieved using [getHashes](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/crypto_.md#gethashes).

This API uses libuv's threadpool, which can have surprising and
negative performance implications for some applications; see the `UV_THREADPOOL_SIZE` documentation for more information.

#### Parameters

| Name | Type |
| :------ | :------ |
| `password` | [`BinaryLike`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/crypto_.md#binarylike) |
| `salt` | [`BinaryLike`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/crypto_.md#binarylike) |
| `iterations` | `number` |
| `keylen` | `number` |
| `digest` | `string` |
| `callback` | (`err`: `Error`, `derivedKey`: [`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer)) => `void` |

#### Returns

`void`

___

### pbkdf2Sync

▸ **pbkdf2Sync**(`password`, `salt`, `iterations`, `keylen`, `digest`): [`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer)

Provides a synchronous Password-Based Key Derivation Function 2 (PBKDF2)
implementation. A selected HMAC digest algorithm specified by `digest` is
applied to derive a key of the requested byte length (`keylen`) from the`password`, `salt` and `iterations`.

If an error occurs an `Error` will be thrown, otherwise the derived key will be
returned as a `Buffer`.

If `digest` is `null`, `'sha1'` will be used. This behavior is deprecated,
please specify a `digest` explicitly.

The `iterations` argument must be a number set as high as possible. The
higher the number of iterations, the more secure the derived key will be,
but will take a longer amount of time to complete.

The `salt` should be as unique as possible. It is recommended that a salt is
random and at least 16 bytes long. See [NIST SP 800-132](https://nvlpubs.nist.gov/nistpubs/Legacy/SP/nistspecialpublication800-132.pdf) for details.

When passing strings for `password` or `salt`, please consider `caveats when using strings as inputs to cryptographic APIs`.

```js
const {
  pbkdf2Sync
} = await import('crypto');

const key = pbkdf2Sync('secret', 'salt', 100000, 64, 'sha512');
console.log(key.toString('hex'));  // '3745e48...08d59ae'
```

The `crypto.DEFAULT_ENCODING` property may be used to change the way the`derivedKey` is returned. This property, however, is deprecated and use
should be avoided.

```js
import crypto from 'crypto';
crypto.DEFAULT_ENCODING = 'hex';
const key = crypto.pbkdf2Sync('secret', 'salt', 100000, 512, 'sha512');
console.log(key);  // '3745e48...aa39b34'
```

An array of supported digest functions can be retrieved using [getHashes](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/crypto_.md#gethashes).

#### Parameters

| Name | Type |
| :------ | :------ |
| `password` | [`BinaryLike`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/crypto_.md#binarylike) |
| `salt` | [`BinaryLike`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/crypto_.md#binarylike) |
| `iterations` | `number` |
| `keylen` | `number` |
| `digest` | `string` |

#### Returns

[`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer)

▸ **pbkdf2Sync**(`password`, `salt`, `iterations`, `keylen`, `digest`): [`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer)

Provides a synchronous Password-Based Key Derivation Function 2 (PBKDF2)
implementation. A selected HMAC digest algorithm specified by `digest` is
applied to derive a key of the requested byte length (`keylen`) from the`password`, `salt` and `iterations`.

If an error occurs an `Error` will be thrown, otherwise the derived key will be
returned as a `Buffer`.

If `digest` is `null`, `'sha1'` will be used. This behavior is deprecated,
please specify a `digest` explicitly.

The `iterations` argument must be a number set as high as possible. The
higher the number of iterations, the more secure the derived key will be,
but will take a longer amount of time to complete.

The `salt` should be as unique as possible. It is recommended that a salt is
random and at least 16 bytes long. See [NIST SP 800-132](https://nvlpubs.nist.gov/nistpubs/Legacy/SP/nistspecialpublication800-132.pdf) for details.

When passing strings for `password` or `salt`, please consider `caveats when using strings as inputs to cryptographic APIs`.

```js
const {
  pbkdf2Sync
} = await import('crypto');

const key = pbkdf2Sync('secret', 'salt', 100000, 64, 'sha512');
console.log(key.toString('hex'));  // '3745e48...08d59ae'
```

The `crypto.DEFAULT_ENCODING` property may be used to change the way the`derivedKey` is returned. This property, however, is deprecated and use
should be avoided.

```js
import crypto from 'crypto';
crypto.DEFAULT_ENCODING = 'hex';
const key = crypto.pbkdf2Sync('secret', 'salt', 100000, 512, 'sha512');
console.log(key);  // '3745e48...aa39b34'
```

An array of supported digest functions can be retrieved using [getHashes](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/crypto_.md#gethashes).

#### Parameters

| Name | Type |
| :------ | :------ |
| `password` | [`BinaryLike`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/crypto_.md#binarylike) |
| `salt` | [`BinaryLike`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/crypto_.md#binarylike) |
| `iterations` | `number` |
| `keylen` | `number` |
| `digest` | `string` |

#### Returns

[`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer)

___

### privateDecrypt

▸ **privateDecrypt**(`privateKey`, `buffer`): [`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer)

Decrypts `buffer` with `privateKey`. `buffer` was previously encrypted using
the corresponding public key, for example using [publicEncrypt](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/crypto_.md#publicencrypt).

If `privateKey` is not a `KeyObject`, this function behaves as if`privateKey` had been passed to [createPrivateKey](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/crypto_.md#createprivatekey). If it is an
object, the `padding` property can be passed. Otherwise, this function uses`RSA_PKCS1_OAEP_PADDING`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `privateKey` | [`RsaPrivateKey`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.RsaPrivateKey.md) \| [`KeyLike`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/crypto_.md#keylike) |
| `buffer` | `ArrayBufferView` |

#### Returns

[`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer)

▸ **privateDecrypt**(`privateKey`, `buffer`): [`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer)

Decrypts `buffer` with `privateKey`. `buffer` was previously encrypted using
the corresponding public key, for example using [publicEncrypt](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/crypto_.md#publicencrypt).

If `privateKey` is not a `KeyObject`, this function behaves as if`privateKey` had been passed to [createPrivateKey](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/crypto_.md#createprivatekey). If it is an
object, the `padding` property can be passed. Otherwise, this function uses`RSA_PKCS1_OAEP_PADDING`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `privateKey` | [`RsaPrivateKey`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.RsaPrivateKey.md) \| [`KeyLike`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/crypto_.md#keylike) |
| `buffer` | `ArrayBufferView` |

#### Returns

[`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer)

___

### privateEncrypt

▸ **privateEncrypt**(`privateKey`, `buffer`): [`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer)

Encrypts `buffer` with `privateKey`. The returned data can be decrypted using
the corresponding public key, for example using [publicDecrypt](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/crypto_.md#publicdecrypt).

If `privateKey` is not a `KeyObject`, this function behaves as if`privateKey` had been passed to [createPrivateKey](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/crypto_.md#createprivatekey). If it is an
object, the `padding` property can be passed. Otherwise, this function uses`RSA_PKCS1_PADDING`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `privateKey` | [`RsaPrivateKey`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.RsaPrivateKey.md) \| [`KeyLike`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/crypto_.md#keylike) |
| `buffer` | `ArrayBufferView` |

#### Returns

[`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer)

▸ **privateEncrypt**(`privateKey`, `buffer`): [`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer)

Encrypts `buffer` with `privateKey`. The returned data can be decrypted using
the corresponding public key, for example using [publicDecrypt](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/crypto_.md#publicdecrypt).

If `privateKey` is not a `KeyObject`, this function behaves as if`privateKey` had been passed to [createPrivateKey](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/crypto_.md#createprivatekey). If it is an
object, the `padding` property can be passed. Otherwise, this function uses`RSA_PKCS1_PADDING`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `privateKey` | [`RsaPrivateKey`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.RsaPrivateKey.md) \| [`KeyLike`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/crypto_.md#keylike) |
| `buffer` | `ArrayBufferView` |

#### Returns

[`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer)

___

### pseudoRandomBytes

▸ **pseudoRandomBytes**(`size`): [`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer)

#### Parameters

| Name | Type |
| :------ | :------ |
| `size` | `number` |

#### Returns

[`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer)

▸ **pseudoRandomBytes**(`size`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `size` | `number` |
| `callback` | (`err`: `Error`, `buf`: [`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer)) => `void` |

#### Returns

`void`

▸ **pseudoRandomBytes**(`size`): [`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer)

#### Parameters

| Name | Type |
| :------ | :------ |
| `size` | `number` |

#### Returns

[`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer)

▸ **pseudoRandomBytes**(`size`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `size` | `number` |
| `callback` | (`err`: `Error`, `buf`: [`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer)) => `void` |

#### Returns

`void`

___

### publicDecrypt

▸ **publicDecrypt**(`key`, `buffer`): [`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer)

Decrypts `buffer` with `key`.`buffer` was previously encrypted using
the corresponding private key, for example using [privateEncrypt](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/crypto_.md#privateencrypt).

If `key` is not a `KeyObject`, this function behaves as if`key` had been passed to [createPublicKey](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/crypto_.md#createpublickey). If it is an
object, the `padding` property can be passed. Otherwise, this function uses`RSA_PKCS1_PADDING`.

Because RSA public keys can be derived from private keys, a private key may
be passed instead of a public key.

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | [`RsaPublicKey`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.RsaPublicKey.md) \| [`RsaPrivateKey`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.RsaPrivateKey.md) \| [`KeyLike`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/crypto_.md#keylike) |
| `buffer` | `ArrayBufferView` |

#### Returns

[`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer)

▸ **publicDecrypt**(`key`, `buffer`): [`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer)

Decrypts `buffer` with `key`.`buffer` was previously encrypted using
the corresponding private key, for example using [privateEncrypt](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/crypto_.md#privateencrypt).

If `key` is not a `KeyObject`, this function behaves as if`key` had been passed to [createPublicKey](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/crypto_.md#createpublickey). If it is an
object, the `padding` property can be passed. Otherwise, this function uses`RSA_PKCS1_PADDING`.

Because RSA public keys can be derived from private keys, a private key may
be passed instead of a public key.

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | [`RsaPublicKey`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.RsaPublicKey.md) \| [`RsaPrivateKey`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.RsaPrivateKey.md) \| [`KeyLike`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/crypto_.md#keylike) |
| `buffer` | `ArrayBufferView` |

#### Returns

[`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer)

___

### publicEncrypt

▸ **publicEncrypt**(`key`, `buffer`): [`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer)

Encrypts the content of `buffer` with `key` and returns a new `Buffer` with encrypted content. The returned data can be decrypted using
the corresponding private key, for example using [privateDecrypt](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/crypto_.md#privatedecrypt).

If `key` is not a `KeyObject`, this function behaves as if`key` had been passed to [createPublicKey](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/crypto_.md#createpublickey). If it is an
object, the `padding` property can be passed. Otherwise, this function uses`RSA_PKCS1_OAEP_PADDING`.

Because RSA public keys can be derived from private keys, a private key may
be passed instead of a public key.

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | [`RsaPublicKey`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.RsaPublicKey.md) \| [`RsaPrivateKey`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.RsaPrivateKey.md) \| [`KeyLike`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/crypto_.md#keylike) |
| `buffer` | `ArrayBufferView` |

#### Returns

[`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer)

▸ **publicEncrypt**(`key`, `buffer`): [`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer)

Encrypts the content of `buffer` with `key` and returns a new `Buffer` with encrypted content. The returned data can be decrypted using
the corresponding private key, for example using [privateDecrypt](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/crypto_.md#privatedecrypt).

If `key` is not a `KeyObject`, this function behaves as if`key` had been passed to [createPublicKey](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/crypto_.md#createpublickey). If it is an
object, the `padding` property can be passed. Otherwise, this function uses`RSA_PKCS1_OAEP_PADDING`.

Because RSA public keys can be derived from private keys, a private key may
be passed instead of a public key.

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | [`RsaPublicKey`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.RsaPublicKey.md) \| [`RsaPrivateKey`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.RsaPrivateKey.md) \| [`KeyLike`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/crypto_.md#keylike) |
| `buffer` | `ArrayBufferView` |

#### Returns

[`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer)

___

### randomBytes

▸ **randomBytes**(`size`): [`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer)

Generates cryptographically strong pseudorandom data. The `size` argument
is a number indicating the number of bytes to generate.

If a `callback` function is provided, the bytes are generated asynchronously
and the `callback` function is invoked with two arguments: `err` and `buf`.
If an error occurs, `err` will be an `Error` object; otherwise it is `null`. The`buf` argument is a `Buffer` containing the generated bytes.

```js
// Asynchronous
const {
  randomBytes
} = await import('crypto');

randomBytes(256, (err, buf) => {
  if (err) throw err;
  console.log(`${buf.length} bytes of random data: ${buf.toString('hex')}`);
});
```

If the `callback` function is not provided, the random bytes are generated
synchronously and returned as a `Buffer`. An error will be thrown if
there is a problem generating the bytes.

```js
// Synchronous
const {
  randomBytes
} = await import('crypto');

const buf = randomBytes(256);
console.log(
  `${buf.length} bytes of random data: ${buf.toString('hex')}`);
```

The `crypto.randomBytes()` method will not complete until there is
sufficient entropy available.
This should normally never take longer than a few milliseconds. The only time
when generating the random bytes may conceivably block for a longer period of
time is right after boot, when the whole system is still low on entropy.

This API uses libuv's threadpool, which can have surprising and
negative performance implications for some applications; see the `UV_THREADPOOL_SIZE` documentation for more information.

The asynchronous version of `crypto.randomBytes()` is carried out in a single
threadpool request. To minimize threadpool task length variation, partition
large `randomBytes` requests when doing so as part of fulfilling a client
request.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `size` | `number` | The number of bytes to generate. The `size` must not be larger than `2**31 - 1`. |

#### Returns

[`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer)

if the `callback` function is not provided.

▸ **randomBytes**(`size`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `size` | `number` |
| `callback` | (`err`: `Error`, `buf`: [`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer)) => `void` |

#### Returns

`void`

▸ **randomBytes**(`size`): [`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer)

Generates cryptographically strong pseudorandom data. The `size` argument
is a number indicating the number of bytes to generate.

If a `callback` function is provided, the bytes are generated asynchronously
and the `callback` function is invoked with two arguments: `err` and `buf`.
If an error occurs, `err` will be an `Error` object; otherwise it is `null`. The`buf` argument is a `Buffer` containing the generated bytes.

```js
// Asynchronous
const {
  randomBytes
} = await import('crypto');

randomBytes(256, (err, buf) => {
  if (err) throw err;
  console.log(`${buf.length} bytes of random data: ${buf.toString('hex')}`);
});
```

If the `callback` function is not provided, the random bytes are generated
synchronously and returned as a `Buffer`. An error will be thrown if
there is a problem generating the bytes.

```js
// Synchronous
const {
  randomBytes
} = await import('crypto');

const buf = randomBytes(256);
console.log(
  `${buf.length} bytes of random data: ${buf.toString('hex')}`);
```

The `crypto.randomBytes()` method will not complete until there is
sufficient entropy available.
This should normally never take longer than a few milliseconds. The only time
when generating the random bytes may conceivably block for a longer period of
time is right after boot, when the whole system is still low on entropy.

This API uses libuv's threadpool, which can have surprising and
negative performance implications for some applications; see the `UV_THREADPOOL_SIZE` documentation for more information.

The asynchronous version of `crypto.randomBytes()` is carried out in a single
threadpool request. To minimize threadpool task length variation, partition
large `randomBytes` requests when doing so as part of fulfilling a client
request.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `size` | `number` | The number of bytes to generate. The `size` must not be larger than `2**31 - 1`. |

#### Returns

[`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer)

if the `callback` function is not provided.

▸ **randomBytes**(`size`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `size` | `number` |
| `callback` | (`err`: `Error`, `buf`: [`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer)) => `void` |

#### Returns

`void`

___

### randomFill

▸ **randomFill**<`T`\>(`buffer`, `callback`): `void`

This function is similar to [randomBytes](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/crypto_.md#randombytes) but requires the first
argument to be a `Buffer` that will be filled. It also
requires that a callback is passed in.

If the `callback` function is not provided, an error will be thrown.

```js
import { Buffer } from 'buffer';
const { randomFill } = await import('crypto');

const buf = Buffer.alloc(10);
randomFill(buf, (err, buf) => {
  if (err) throw err;
  console.log(buf.toString('hex'));
});

randomFill(buf, 5, (err, buf) => {
  if (err) throw err;
  console.log(buf.toString('hex'));
});

// The above is equivalent to the following:
randomFill(buf, 5, 5, (err, buf) => {
  if (err) throw err;
  console.log(buf.toString('hex'));
});
```

Any `ArrayBuffer`, `TypedArray`, or `DataView` instance may be passed as`buffer`.

While this includes instances of `Float32Array` and `Float64Array`, this
function should not be used to generate random floating-point numbers. The
result may contain `+Infinity`, `-Infinity`, and `NaN`, and even if the array
contains finite numbers only, they are not drawn from a uniform random
distribution and have no meaningful lower or upper bounds.

```js
import { Buffer } from 'buffer';
const { randomFill } = await import('crypto');

const a = new Uint32Array(10);
randomFill(a, (err, buf) => {
  if (err) throw err;
  console.log(Buffer.from(buf.buffer, buf.byteOffset, buf.byteLength)
    .toString('hex'));
});

const b = new DataView(new ArrayBuffer(10));
randomFill(b, (err, buf) => {
  if (err) throw err;
  console.log(Buffer.from(buf.buffer, buf.byteOffset, buf.byteLength)
    .toString('hex'));
});

const c = new ArrayBuffer(10);
randomFill(c, (err, buf) => {
  if (err) throw err;
  console.log(Buffer.from(buf).toString('hex'));
});
```

This API uses libuv's threadpool, which can have surprising and
negative performance implications for some applications; see the `UV_THREADPOOL_SIZE` documentation for more information.

The asynchronous version of `crypto.randomFill()` is carried out in a single
threadpool request. To minimize threadpool task length variation, partition
large `randomFill` requests when doing so as part of fulfilling a client
request.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `ArrayBufferView` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `buffer` | `T` | Must be supplied. The size of the provided `buffer` must not be larger than `2**31 - 1`. |
| `callback` | (`err`: `Error`, `buf`: `T`) => `void` | `function(err, buf) {}`. |

#### Returns

`void`

▸ **randomFill**<`T`\>(`buffer`, `offset`, `callback`): `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `ArrayBufferView` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `buffer` | `T` |
| `offset` | `number` |
| `callback` | (`err`: `Error`, `buf`: `T`) => `void` |

#### Returns

`void`

▸ **randomFill**<`T`\>(`buffer`, `offset`, `size`, `callback`): `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `ArrayBufferView` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `buffer` | `T` |
| `offset` | `number` |
| `size` | `number` |
| `callback` | (`err`: `Error`, `buf`: `T`) => `void` |

#### Returns

`void`

▸ **randomFill**<`T`\>(`buffer`, `callback`): `void`

This function is similar to [randomBytes](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/crypto_.md#randombytes) but requires the first
argument to be a `Buffer` that will be filled. It also
requires that a callback is passed in.

If the `callback` function is not provided, an error will be thrown.

```js
import { Buffer } from 'buffer';
const { randomFill } = await import('crypto');

const buf = Buffer.alloc(10);
randomFill(buf, (err, buf) => {
  if (err) throw err;
  console.log(buf.toString('hex'));
});

randomFill(buf, 5, (err, buf) => {
  if (err) throw err;
  console.log(buf.toString('hex'));
});

// The above is equivalent to the following:
randomFill(buf, 5, 5, (err, buf) => {
  if (err) throw err;
  console.log(buf.toString('hex'));
});
```

Any `ArrayBuffer`, `TypedArray`, or `DataView` instance may be passed as`buffer`.

While this includes instances of `Float32Array` and `Float64Array`, this
function should not be used to generate random floating-point numbers. The
result may contain `+Infinity`, `-Infinity`, and `NaN`, and even if the array
contains finite numbers only, they are not drawn from a uniform random
distribution and have no meaningful lower or upper bounds.

```js
import { Buffer } from 'buffer';
const { randomFill } = await import('crypto');

const a = new Uint32Array(10);
randomFill(a, (err, buf) => {
  if (err) throw err;
  console.log(Buffer.from(buf.buffer, buf.byteOffset, buf.byteLength)
    .toString('hex'));
});

const b = new DataView(new ArrayBuffer(10));
randomFill(b, (err, buf) => {
  if (err) throw err;
  console.log(Buffer.from(buf.buffer, buf.byteOffset, buf.byteLength)
    .toString('hex'));
});

const c = new ArrayBuffer(10);
randomFill(c, (err, buf) => {
  if (err) throw err;
  console.log(Buffer.from(buf).toString('hex'));
});
```

This API uses libuv's threadpool, which can have surprising and
negative performance implications for some applications; see the `UV_THREADPOOL_SIZE` documentation for more information.

The asynchronous version of `crypto.randomFill()` is carried out in a single
threadpool request. To minimize threadpool task length variation, partition
large `randomFill` requests when doing so as part of fulfilling a client
request.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `ArrayBufferView` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `buffer` | `T` | Must be supplied. The size of the provided `buffer` must not be larger than `2**31 - 1`. |
| `callback` | (`err`: `Error`, `buf`: `T`) => `void` | `function(err, buf) {}`. |

#### Returns

`void`

▸ **randomFill**<`T`\>(`buffer`, `offset`, `callback`): `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `ArrayBufferView` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `buffer` | `T` |
| `offset` | `number` |
| `callback` | (`err`: `Error`, `buf`: `T`) => `void` |

#### Returns

`void`

▸ **randomFill**<`T`\>(`buffer`, `offset`, `size`, `callback`): `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `ArrayBufferView` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `buffer` | `T` |
| `offset` | `number` |
| `size` | `number` |
| `callback` | (`err`: `Error`, `buf`: `T`) => `void` |

#### Returns

`void`

___

### randomFillSync

▸ **randomFillSync**<`T`\>(`buffer`, `offset?`, `size?`): `T`

Synchronous version of [randomFill](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/crypto_.md#randomfill).

```js
import { Buffer } from 'buffer';
const { randomFillSync } = await import('crypto');

const buf = Buffer.alloc(10);
console.log(randomFillSync(buf).toString('hex'));

randomFillSync(buf, 5);
console.log(buf.toString('hex'));

// The above is equivalent to the following:
randomFillSync(buf, 5, 5);
console.log(buf.toString('hex'));
```

Any `ArrayBuffer`, `TypedArray` or `DataView` instance may be passed as`buffer`.

```js
import { Buffer } from 'buffer';
const { randomFillSync } = await import('crypto');

const a = new Uint32Array(10);
console.log(Buffer.from(randomFillSync(a).buffer,
                        a.byteOffset, a.byteLength).toString('hex'));

const b = new DataView(new ArrayBuffer(10));
console.log(Buffer.from(randomFillSync(b).buffer,
                        b.byteOffset, b.byteLength).toString('hex'));

const c = new ArrayBuffer(10);
console.log(Buffer.from(randomFillSync(c)).toString('hex'));
```

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `ArrayBufferView` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `buffer` | `T` | Must be supplied. The size of the provided `buffer` must not be larger than `2**31 - 1`. |
| `offset?` | `number` |  |
| `size?` | `number` | - |

#### Returns

`T`

The object passed as `buffer` argument.

▸ **randomFillSync**<`T`\>(`buffer`, `offset?`, `size?`): `T`

Synchronous version of [randomFill](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/crypto_.md#randomfill).

```js
import { Buffer } from 'buffer';
const { randomFillSync } = await import('crypto');

const buf = Buffer.alloc(10);
console.log(randomFillSync(buf).toString('hex'));

randomFillSync(buf, 5);
console.log(buf.toString('hex'));

// The above is equivalent to the following:
randomFillSync(buf, 5, 5);
console.log(buf.toString('hex'));
```

Any `ArrayBuffer`, `TypedArray` or `DataView` instance may be passed as`buffer`.

```js
import { Buffer } from 'buffer';
const { randomFillSync } = await import('crypto');

const a = new Uint32Array(10);
console.log(Buffer.from(randomFillSync(a).buffer,
                        a.byteOffset, a.byteLength).toString('hex'));

const b = new DataView(new ArrayBuffer(10));
console.log(Buffer.from(randomFillSync(b).buffer,
                        b.byteOffset, b.byteLength).toString('hex'));

const c = new ArrayBuffer(10);
console.log(Buffer.from(randomFillSync(c)).toString('hex'));
```

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `ArrayBufferView` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `buffer` | `T` | Must be supplied. The size of the provided `buffer` must not be larger than `2**31 - 1`. |
| `offset?` | `number` |  |
| `size?` | `number` | - |

#### Returns

`T`

The object passed as `buffer` argument.

___

### randomInt

▸ **randomInt**(`max`): `number`

Return a random integer `n` such that `min <= n < max`.  This
implementation avoids [modulo bias](https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle#Modulo_bias).

The range (`max - min`) must be less than 248. `min` and `max` must
be [safe integers](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/isSafeInteger).

If the `callback` function is not provided, the random integer is
generated synchronously.

```js
// Asynchronous
const {
  randomInt
} = await import('crypto');

randomInt(3, (err, n) => {
  if (err) throw err;
  console.log(`Random number chosen from (0, 1, 2): ${n}`);
});
```

```js
// Synchronous
const {
  randomInt
} = await import('crypto');

const n = randomInt(3);
console.log(`Random number chosen from (0, 1, 2): ${n}`);
```

```js
// With `min` argument
const {
  randomInt
} = await import('crypto');

const n = randomInt(1, 7);
console.log(`The dice rolled: ${n}`);
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `max` | `number` | End of random range (exclusive). |

#### Returns

`number`

▸ **randomInt**(`min`, `max`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `min` | `number` |
| `max` | `number` |

#### Returns

`number`

▸ **randomInt**(`max`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `max` | `number` |
| `callback` | (`err`: `Error`, `value`: `number`) => `void` |

#### Returns

`void`

▸ **randomInt**(`min`, `max`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `min` | `number` |
| `max` | `number` |
| `callback` | (`err`: `Error`, `value`: `number`) => `void` |

#### Returns

`void`

▸ **randomInt**(`max`): `number`

Return a random integer `n` such that `min <= n < max`.  This
implementation avoids [modulo bias](https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle#Modulo_bias).

The range (`max - min`) must be less than 248. `min` and `max` must
be [safe integers](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/isSafeInteger).

If the `callback` function is not provided, the random integer is
generated synchronously.

```js
// Asynchronous
const {
  randomInt
} = await import('crypto');

randomInt(3, (err, n) => {
  if (err) throw err;
  console.log(`Random number chosen from (0, 1, 2): ${n}`);
});
```

```js
// Synchronous
const {
  randomInt
} = await import('crypto');

const n = randomInt(3);
console.log(`Random number chosen from (0, 1, 2): ${n}`);
```

```js
// With `min` argument
const {
  randomInt
} = await import('crypto');

const n = randomInt(1, 7);
console.log(`The dice rolled: ${n}`);
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `max` | `number` | End of random range (exclusive). |

#### Returns

`number`

▸ **randomInt**(`min`, `max`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `min` | `number` |
| `max` | `number` |

#### Returns

`number`

▸ **randomInt**(`max`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `max` | `number` |
| `callback` | (`err`: `Error`, `value`: `number`) => `void` |

#### Returns

`void`

▸ **randomInt**(`min`, `max`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `min` | `number` |
| `max` | `number` |
| `callback` | (`err`: `Error`, `value`: `number`) => `void` |

#### Returns

`void`

___

### randomUUID

▸ **randomUUID**(`options?`): `string`

Generates a random [RFC 4122](https://www.rfc-editor.org/rfc/rfc4122.txt) version 4 UUID. The UUID is generated using a
cryptographic pseudorandom number generator.

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`RandomUUIDOptions`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.RandomUUIDOptions.md) |

#### Returns

`string`

▸ **randomUUID**(`options?`): `string`

Generates a random [RFC 4122](https://www.rfc-editor.org/rfc/rfc4122.txt) version 4 UUID. The UUID is generated using a
cryptographic pseudorandom number generator.

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`RandomUUIDOptions`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.RandomUUIDOptions.md) |

#### Returns

`string`

___

### scrypt

▸ **scrypt**(`password`, `salt`, `keylen`, `callback`): `void`

Provides an asynchronous [scrypt](https://en.wikipedia.org/wiki/Scrypt) implementation. Scrypt is a password-based
key derivation function that is designed to be expensive computationally and
memory-wise in order to make brute-force attacks unrewarding.

The `salt` should be as unique as possible. It is recommended that a salt is
random and at least 16 bytes long. See [NIST SP 800-132](https://nvlpubs.nist.gov/nistpubs/Legacy/SP/nistspecialpublication800-132.pdf) for details.

When passing strings for `password` or `salt`, please consider `caveats when using strings as inputs to cryptographic APIs`.

The `callback` function is called with two arguments: `err` and `derivedKey`.`err` is an exception object when key derivation fails, otherwise `err` is`null`. `derivedKey` is passed to the
callback as a `Buffer`.

An exception is thrown when any of the input arguments specify invalid values
or types.

```js
const {
  scrypt
} = await import('crypto');

// Using the factory defaults.
scrypt('password', 'salt', 64, (err, derivedKey) => {
  if (err) throw err;
  console.log(derivedKey.toString('hex'));  // '3745e48...08d59ae'
});
// Using a custom N parameter. Must be a power of two.
scrypt('password', 'salt', 64, { N: 1024 }, (err, derivedKey) => {
  if (err) throw err;
  console.log(derivedKey.toString('hex'));  // '3745e48...aa39b34'
});
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `password` | [`BinaryLike`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/crypto_.md#binarylike) |
| `salt` | [`BinaryLike`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/crypto_.md#binarylike) |
| `keylen` | `number` |
| `callback` | (`err`: `Error`, `derivedKey`: [`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer)) => `void` |

#### Returns

`void`

▸ **scrypt**(`password`, `salt`, `keylen`, `options`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `password` | [`BinaryLike`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/crypto_.md#binarylike) |
| `salt` | [`BinaryLike`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/crypto_.md#binarylike) |
| `keylen` | `number` |
| `options` | [`ScryptOptions`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.ScryptOptions.md) |
| `callback` | (`err`: `Error`, `derivedKey`: [`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer)) => `void` |

#### Returns

`void`

▸ **scrypt**(`password`, `salt`, `keylen`, `callback`): `void`

Provides an asynchronous [scrypt](https://en.wikipedia.org/wiki/Scrypt) implementation. Scrypt is a password-based
key derivation function that is designed to be expensive computationally and
memory-wise in order to make brute-force attacks unrewarding.

The `salt` should be as unique as possible. It is recommended that a salt is
random and at least 16 bytes long. See [NIST SP 800-132](https://nvlpubs.nist.gov/nistpubs/Legacy/SP/nistspecialpublication800-132.pdf) for details.

When passing strings for `password` or `salt`, please consider `caveats when using strings as inputs to cryptographic APIs`.

The `callback` function is called with two arguments: `err` and `derivedKey`.`err` is an exception object when key derivation fails, otherwise `err` is`null`. `derivedKey` is passed to the
callback as a `Buffer`.

An exception is thrown when any of the input arguments specify invalid values
or types.

```js
const {
  scrypt
} = await import('crypto');

// Using the factory defaults.
scrypt('password', 'salt', 64, (err, derivedKey) => {
  if (err) throw err;
  console.log(derivedKey.toString('hex'));  // '3745e48...08d59ae'
});
// Using a custom N parameter. Must be a power of two.
scrypt('password', 'salt', 64, { N: 1024 }, (err, derivedKey) => {
  if (err) throw err;
  console.log(derivedKey.toString('hex'));  // '3745e48...aa39b34'
});
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `password` | [`BinaryLike`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/crypto_.md#binarylike) |
| `salt` | [`BinaryLike`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/crypto_.md#binarylike) |
| `keylen` | `number` |
| `callback` | (`err`: `Error`, `derivedKey`: [`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer)) => `void` |

#### Returns

`void`

▸ **scrypt**(`password`, `salt`, `keylen`, `options`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `password` | [`BinaryLike`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/crypto_.md#binarylike) |
| `salt` | [`BinaryLike`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/crypto_.md#binarylike) |
| `keylen` | `number` |
| `options` | [`ScryptOptions`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.ScryptOptions.md) |
| `callback` | (`err`: `Error`, `derivedKey`: [`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer)) => `void` |

#### Returns

`void`

___

### scryptSync

▸ **scryptSync**(`password`, `salt`, `keylen`, `options?`): [`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer)

Provides a synchronous [scrypt](https://en.wikipedia.org/wiki/Scrypt) implementation. Scrypt is a password-based
key derivation function that is designed to be expensive computationally and
memory-wise in order to make brute-force attacks unrewarding.

The `salt` should be as unique as possible. It is recommended that a salt is
random and at least 16 bytes long. See [NIST SP 800-132](https://nvlpubs.nist.gov/nistpubs/Legacy/SP/nistspecialpublication800-132.pdf) for details.

When passing strings for `password` or `salt`, please consider `caveats when using strings as inputs to cryptographic APIs`.

An exception is thrown when key derivation fails, otherwise the derived key is
returned as a `Buffer`.

An exception is thrown when any of the input arguments specify invalid values
or types.

```js
const {
  scryptSync
} = await import('crypto');
// Using the factory defaults.

const key1 = scryptSync('password', 'salt', 64);
console.log(key1.toString('hex'));  // '3745e48...08d59ae'
// Using a custom N parameter. Must be a power of two.
const key2 = scryptSync('password', 'salt', 64, { N: 1024 });
console.log(key2.toString('hex'));  // '3745e48...aa39b34'
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `password` | [`BinaryLike`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/crypto_.md#binarylike) |
| `salt` | [`BinaryLike`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/crypto_.md#binarylike) |
| `keylen` | `number` |
| `options?` | [`ScryptOptions`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.ScryptOptions.md) |

#### Returns

[`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer)

▸ **scryptSync**(`password`, `salt`, `keylen`, `options?`): [`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer)

Provides a synchronous [scrypt](https://en.wikipedia.org/wiki/Scrypt) implementation. Scrypt is a password-based
key derivation function that is designed to be expensive computationally and
memory-wise in order to make brute-force attacks unrewarding.

The `salt` should be as unique as possible. It is recommended that a salt is
random and at least 16 bytes long. See [NIST SP 800-132](https://nvlpubs.nist.gov/nistpubs/Legacy/SP/nistspecialpublication800-132.pdf) for details.

When passing strings for `password` or `salt`, please consider `caveats when using strings as inputs to cryptographic APIs`.

An exception is thrown when key derivation fails, otherwise the derived key is
returned as a `Buffer`.

An exception is thrown when any of the input arguments specify invalid values
or types.

```js
const {
  scryptSync
} = await import('crypto');
// Using the factory defaults.

const key1 = scryptSync('password', 'salt', 64);
console.log(key1.toString('hex'));  // '3745e48...08d59ae'
// Using a custom N parameter. Must be a power of two.
const key2 = scryptSync('password', 'salt', 64, { N: 1024 });
console.log(key2.toString('hex'));  // '3745e48...aa39b34'
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `password` | [`BinaryLike`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/crypto_.md#binarylike) |
| `salt` | [`BinaryLike`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/crypto_.md#binarylike) |
| `keylen` | `number` |
| `options?` | [`ScryptOptions`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.ScryptOptions.md) |

#### Returns

[`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer)

___

### secureHeapUsed

▸ **secureHeapUsed**(): [`SecureHeapUsage`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.SecureHeapUsage.md)

#### Returns

[`SecureHeapUsage`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.SecureHeapUsage.md)

▸ **secureHeapUsed**(): [`SecureHeapUsage`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.SecureHeapUsage.md)

#### Returns

[`SecureHeapUsage`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.SecureHeapUsage.md)

___

### sign

▸ **sign**(`algorithm`, `data`, `key`): [`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer)

Calculates and returns the signature for `data` using the given private key and
algorithm. If `algorithm` is `null` or `undefined`, then the algorithm is
dependent upon the key type (especially Ed25519 and Ed448).

If `key` is not a `KeyObject`, this function behaves as if `key` had been
passed to [createPrivateKey](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/crypto_.md#createprivatekey). If it is an object, the following
additional properties can be passed:

If the `callback` function is provided this function uses libuv's threadpool.

#### Parameters

| Name | Type |
| :------ | :------ |
| `algorithm` | `string` |
| `data` | `ArrayBufferView` |
| `key` | [`KeyLike`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/crypto_.md#keylike) \| [`SignKeyObjectInput`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.SignKeyObjectInput.md) \| [`SignPrivateKeyInput`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.SignPrivateKeyInput.md) |

#### Returns

[`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer)

▸ **sign**(`algorithm`, `data`, `key`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `algorithm` | `string` |
| `data` | `ArrayBufferView` |
| `key` | [`KeyLike`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/crypto_.md#keylike) \| [`SignKeyObjectInput`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.SignKeyObjectInput.md) \| [`SignPrivateKeyInput`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.SignPrivateKeyInput.md) |
| `callback` | (`error`: `Error`, `data`: [`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer)) => `void` |

#### Returns

`void`

▸ **sign**(`algorithm`, `data`, `key`): [`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer)

Calculates and returns the signature for `data` using the given private key and
algorithm. If `algorithm` is `null` or `undefined`, then the algorithm is
dependent upon the key type (especially Ed25519 and Ed448).

If `key` is not a `KeyObject`, this function behaves as if `key` had been
passed to [createPrivateKey](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/crypto_.md#createprivatekey). If it is an object, the following
additional properties can be passed:

If the `callback` function is provided this function uses libuv's threadpool.

#### Parameters

| Name | Type |
| :------ | :------ |
| `algorithm` | `string` |
| `data` | `ArrayBufferView` |
| `key` | [`KeyLike`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/crypto_.md#keylike) \| [`SignKeyObjectInput`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.SignKeyObjectInput.md) \| [`SignPrivateKeyInput`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.SignPrivateKeyInput.md) |

#### Returns

[`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer)

▸ **sign**(`algorithm`, `data`, `key`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `algorithm` | `string` |
| `data` | `ArrayBufferView` |
| `key` | [`KeyLike`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/crypto_.md#keylike) \| [`SignKeyObjectInput`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.SignKeyObjectInput.md) \| [`SignPrivateKeyInput`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.SignPrivateKeyInput.md) |
| `callback` | (`error`: `Error`, `data`: [`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer)) => `void` |

#### Returns

`void`

___

### timingSafeEqual

▸ **timingSafeEqual**(`a`, `b`): `boolean`

This function is based on a constant-time algorithm.
Returns true if `a` is equal to `b`, without leaking timing information that
would allow an attacker to guess one of the values. This is suitable for
comparing HMAC digests or secret values like authentication cookies or [capability urls](https://www.w3.org/TR/capability-urls/).

`a` and `b` must both be `Buffer`s, `TypedArray`s, or `DataView`s, and they
must have the same byte length. An error is thrown if `a` and `b` have
different byte lengths.

If at least one of `a` and `b` is a `TypedArray` with more than one byte per
entry, such as `Uint16Array`, the result will be computed using the platform
byte order.

Use of `crypto.timingSafeEqual` does not guarantee that the _surrounding_ code
is timing-safe. Care should be taken to ensure that the surrounding code does
not introduce timing vulnerabilities.

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `ArrayBufferView` |
| `b` | `ArrayBufferView` |

#### Returns

`boolean`

▸ **timingSafeEqual**(`a`, `b`): `boolean`

This function is based on a constant-time algorithm.
Returns true if `a` is equal to `b`, without leaking timing information that
would allow an attacker to guess one of the values. This is suitable for
comparing HMAC digests or secret values like authentication cookies or [capability urls](https://www.w3.org/TR/capability-urls/).

`a` and `b` must both be `Buffer`s, `TypedArray`s, or `DataView`s, and they
must have the same byte length. An error is thrown if `a` and `b` have
different byte lengths.

If at least one of `a` and `b` is a `TypedArray` with more than one byte per
entry, such as `Uint16Array`, the result will be computed using the platform
byte order.

Use of `crypto.timingSafeEqual` does not guarantee that the _surrounding_ code
is timing-safe. Care should be taken to ensure that the surrounding code does
not introduce timing vulnerabilities.

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `ArrayBufferView` |
| `b` | `ArrayBufferView` |

#### Returns

`boolean`

___

### verify

▸ **verify**(`algorithm`, `data`, `key`, `signature`): `boolean`

Verifies the given signature for `data` using the given key and algorithm. If`algorithm` is `null` or `undefined`, then the algorithm is dependent upon the
key type (especially Ed25519 and Ed448).

If `key` is not a `KeyObject`, this function behaves as if `key` had been
passed to [createPublicKey](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/crypto_.md#createpublickey). If it is an object, the following
additional properties can be passed:

The `signature` argument is the previously calculated signature for the `data`.

Because public keys can be derived from private keys, a private key or a public
key may be passed for `key`.

If the `callback` function is provided this function uses libuv's threadpool.

#### Parameters

| Name | Type |
| :------ | :------ |
| `algorithm` | `string` |
| `data` | `ArrayBufferView` |
| `key` | [`KeyLike`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/crypto_.md#keylike) \| [`VerifyKeyObjectInput`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.VerifyKeyObjectInput.md) \| [`VerifyPublicKeyInput`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.VerifyPublicKeyInput.md) |
| `signature` | `ArrayBufferView` |

#### Returns

`boolean`

▸ **verify**(`algorithm`, `data`, `key`, `signature`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `algorithm` | `string` |
| `data` | `ArrayBufferView` |
| `key` | [`KeyLike`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/crypto_.md#keylike) \| [`VerifyKeyObjectInput`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.VerifyKeyObjectInput.md) \| [`VerifyPublicKeyInput`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.VerifyPublicKeyInput.md) |
| `signature` | `ArrayBufferView` |
| `callback` | (`error`: `Error`, `result`: `boolean`) => `void` |

#### Returns

`void`

▸ **verify**(`algorithm`, `data`, `key`, `signature`): `boolean`

Verifies the given signature for `data` using the given key and algorithm. If`algorithm` is `null` or `undefined`, then the algorithm is dependent upon the
key type (especially Ed25519 and Ed448).

If `key` is not a `KeyObject`, this function behaves as if `key` had been
passed to [createPublicKey](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/crypto_.md#createpublickey). If it is an object, the following
additional properties can be passed:

The `signature` argument is the previously calculated signature for the `data`.

Because public keys can be derived from private keys, a private key or a public
key may be passed for `key`.

If the `callback` function is provided this function uses libuv's threadpool.

#### Parameters

| Name | Type |
| :------ | :------ |
| `algorithm` | `string` |
| `data` | `ArrayBufferView` |
| `key` | [`KeyLike`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/crypto_.md#keylike) \| [`VerifyKeyObjectInput`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.VerifyKeyObjectInput.md) \| [`VerifyPublicKeyInput`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.VerifyPublicKeyInput.md) |
| `signature` | `ArrayBufferView` |

#### Returns

`boolean`

▸ **verify**(`algorithm`, `data`, `key`, `signature`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `algorithm` | `string` |
| `data` | `ArrayBufferView` |
| `key` | [`KeyLike`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/crypto_.md#keylike) \| [`VerifyKeyObjectInput`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.VerifyKeyObjectInput.md) \| [`VerifyPublicKeyInput`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.VerifyPublicKeyInput.md) |
| `signature` | `ArrayBufferView` |
| `callback` | (`error`: `Error`, `result`: `boolean`) => `void` |

#### Returns

`void`
