[bun-types](https://oven-sh.github.io/bun-types/README.md) / [Exports](https://oven-sh.github.io/bun-types/modules.md) / ["crypto"](https://oven-sh.github.io/bun-types/modules/crypto_.md) / generateKeyPair

# Namespace: generateKeyPair

["crypto"](https://oven-sh.github.io/bun-types/modules/crypto_.md).generateKeyPair

## Table of contents

### Functions

- [\_\_promisify\_\_](https://oven-sh.github.io/bun-types/modules/crypto_.generateKeyPair.md#__promisify__)

## Functions

### \_\_promisify\_\_

▸ **__promisify__**(`type`, `options`): `Promise`<{ `privateKey`: `string` ; `publicKey`: `string`  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"rsa"`` |
| `options` | [`RSAKeyPairOptions`](https://oven-sh.github.io/bun-types/interfaces/crypto_.RSAKeyPairOptions.md)<``"pem"``, ``"pem"``\> |

#### Returns

`Promise`<{ `privateKey`: `string` ; `publicKey`: `string`  }\>

▸ **__promisify__**(`type`, `options`): `Promise`<{ `privateKey`: [`Buffer`](https://oven-sh.github.io/bun-types/modules/buffer_.md#buffer) ; `publicKey`: `string`  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"rsa"`` |
| `options` | [`RSAKeyPairOptions`](https://oven-sh.github.io/bun-types/interfaces/crypto_.RSAKeyPairOptions.md)<``"pem"``, ``"der"``\> |

#### Returns

`Promise`<{ `privateKey`: [`Buffer`](https://oven-sh.github.io/bun-types/modules/buffer_.md#buffer) ; `publicKey`: `string`  }\>

▸ **__promisify__**(`type`, `options`): `Promise`<{ `privateKey`: `string` ; `publicKey`: [`Buffer`](https://oven-sh.github.io/bun-types/modules/buffer_.md#buffer)  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"rsa"`` |
| `options` | [`RSAKeyPairOptions`](https://oven-sh.github.io/bun-types/interfaces/crypto_.RSAKeyPairOptions.md)<``"der"``, ``"pem"``\> |

#### Returns

`Promise`<{ `privateKey`: `string` ; `publicKey`: [`Buffer`](https://oven-sh.github.io/bun-types/modules/buffer_.md#buffer)  }\>

▸ **__promisify__**(`type`, `options`): `Promise`<{ `privateKey`: [`Buffer`](https://oven-sh.github.io/bun-types/modules/buffer_.md#buffer) ; `publicKey`: [`Buffer`](https://oven-sh.github.io/bun-types/modules/buffer_.md#buffer)  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"rsa"`` |
| `options` | [`RSAKeyPairOptions`](https://oven-sh.github.io/bun-types/interfaces/crypto_.RSAKeyPairOptions.md)<``"der"``, ``"der"``\> |

#### Returns

`Promise`<{ `privateKey`: [`Buffer`](https://oven-sh.github.io/bun-types/modules/buffer_.md#buffer) ; `publicKey`: [`Buffer`](https://oven-sh.github.io/bun-types/modules/buffer_.md#buffer)  }\>

▸ **__promisify__**(`type`, `options`): `Promise`<[`KeyPairKeyObjectResult`](https://oven-sh.github.io/bun-types/interfaces/crypto_.KeyPairKeyObjectResult.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"rsa"`` |
| `options` | [`RSAKeyPairKeyObjectOptions`](https://oven-sh.github.io/bun-types/interfaces/crypto_.RSAKeyPairKeyObjectOptions.md) |

#### Returns

`Promise`<[`KeyPairKeyObjectResult`](https://oven-sh.github.io/bun-types/interfaces/crypto_.KeyPairKeyObjectResult.md)\>

▸ **__promisify__**(`type`, `options`): `Promise`<{ `privateKey`: `string` ; `publicKey`: `string`  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"rsa-pss"`` |
| `options` | [`RSAPSSKeyPairOptions`](https://oven-sh.github.io/bun-types/interfaces/crypto_.RSAPSSKeyPairOptions.md)<``"pem"``, ``"pem"``\> |

#### Returns

`Promise`<{ `privateKey`: `string` ; `publicKey`: `string`  }\>

▸ **__promisify__**(`type`, `options`): `Promise`<{ `privateKey`: [`Buffer`](https://oven-sh.github.io/bun-types/modules/buffer_.md#buffer) ; `publicKey`: `string`  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"rsa-pss"`` |
| `options` | [`RSAPSSKeyPairOptions`](https://oven-sh.github.io/bun-types/interfaces/crypto_.RSAPSSKeyPairOptions.md)<``"pem"``, ``"der"``\> |

#### Returns

`Promise`<{ `privateKey`: [`Buffer`](https://oven-sh.github.io/bun-types/modules/buffer_.md#buffer) ; `publicKey`: `string`  }\>

▸ **__promisify__**(`type`, `options`): `Promise`<{ `privateKey`: `string` ; `publicKey`: [`Buffer`](https://oven-sh.github.io/bun-types/modules/buffer_.md#buffer)  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"rsa-pss"`` |
| `options` | [`RSAPSSKeyPairOptions`](https://oven-sh.github.io/bun-types/interfaces/crypto_.RSAPSSKeyPairOptions.md)<``"der"``, ``"pem"``\> |

#### Returns

`Promise`<{ `privateKey`: `string` ; `publicKey`: [`Buffer`](https://oven-sh.github.io/bun-types/modules/buffer_.md#buffer)  }\>

▸ **__promisify__**(`type`, `options`): `Promise`<{ `privateKey`: [`Buffer`](https://oven-sh.github.io/bun-types/modules/buffer_.md#buffer) ; `publicKey`: [`Buffer`](https://oven-sh.github.io/bun-types/modules/buffer_.md#buffer)  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"rsa-pss"`` |
| `options` | [`RSAPSSKeyPairOptions`](https://oven-sh.github.io/bun-types/interfaces/crypto_.RSAPSSKeyPairOptions.md)<``"der"``, ``"der"``\> |

#### Returns

`Promise`<{ `privateKey`: [`Buffer`](https://oven-sh.github.io/bun-types/modules/buffer_.md#buffer) ; `publicKey`: [`Buffer`](https://oven-sh.github.io/bun-types/modules/buffer_.md#buffer)  }\>

▸ **__promisify__**(`type`, `options`): `Promise`<[`KeyPairKeyObjectResult`](https://oven-sh.github.io/bun-types/interfaces/crypto_.KeyPairKeyObjectResult.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"rsa-pss"`` |
| `options` | [`RSAPSSKeyPairKeyObjectOptions`](https://oven-sh.github.io/bun-types/interfaces/crypto_.RSAPSSKeyPairKeyObjectOptions.md) |

#### Returns

`Promise`<[`KeyPairKeyObjectResult`](https://oven-sh.github.io/bun-types/interfaces/crypto_.KeyPairKeyObjectResult.md)\>

▸ **__promisify__**(`type`, `options`): `Promise`<{ `privateKey`: `string` ; `publicKey`: `string`  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"dsa"`` |
| `options` | [`DSAKeyPairOptions`](https://oven-sh.github.io/bun-types/interfaces/crypto_.DSAKeyPairOptions.md)<``"pem"``, ``"pem"``\> |

#### Returns

`Promise`<{ `privateKey`: `string` ; `publicKey`: `string`  }\>

▸ **__promisify__**(`type`, `options`): `Promise`<{ `privateKey`: [`Buffer`](https://oven-sh.github.io/bun-types/modules/buffer_.md#buffer) ; `publicKey`: `string`  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"dsa"`` |
| `options` | [`DSAKeyPairOptions`](https://oven-sh.github.io/bun-types/interfaces/crypto_.DSAKeyPairOptions.md)<``"pem"``, ``"der"``\> |

#### Returns

`Promise`<{ `privateKey`: [`Buffer`](https://oven-sh.github.io/bun-types/modules/buffer_.md#buffer) ; `publicKey`: `string`  }\>

▸ **__promisify__**(`type`, `options`): `Promise`<{ `privateKey`: `string` ; `publicKey`: [`Buffer`](https://oven-sh.github.io/bun-types/modules/buffer_.md#buffer)  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"dsa"`` |
| `options` | [`DSAKeyPairOptions`](https://oven-sh.github.io/bun-types/interfaces/crypto_.DSAKeyPairOptions.md)<``"der"``, ``"pem"``\> |

#### Returns

`Promise`<{ `privateKey`: `string` ; `publicKey`: [`Buffer`](https://oven-sh.github.io/bun-types/modules/buffer_.md#buffer)  }\>

▸ **__promisify__**(`type`, `options`): `Promise`<{ `privateKey`: [`Buffer`](https://oven-sh.github.io/bun-types/modules/buffer_.md#buffer) ; `publicKey`: [`Buffer`](https://oven-sh.github.io/bun-types/modules/buffer_.md#buffer)  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"dsa"`` |
| `options` | [`DSAKeyPairOptions`](https://oven-sh.github.io/bun-types/interfaces/crypto_.DSAKeyPairOptions.md)<``"der"``, ``"der"``\> |

#### Returns

`Promise`<{ `privateKey`: [`Buffer`](https://oven-sh.github.io/bun-types/modules/buffer_.md#buffer) ; `publicKey`: [`Buffer`](https://oven-sh.github.io/bun-types/modules/buffer_.md#buffer)  }\>

▸ **__promisify__**(`type`, `options`): `Promise`<[`KeyPairKeyObjectResult`](https://oven-sh.github.io/bun-types/interfaces/crypto_.KeyPairKeyObjectResult.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"dsa"`` |
| `options` | [`DSAKeyPairKeyObjectOptions`](https://oven-sh.github.io/bun-types/interfaces/crypto_.DSAKeyPairKeyObjectOptions.md) |

#### Returns

`Promise`<[`KeyPairKeyObjectResult`](https://oven-sh.github.io/bun-types/interfaces/crypto_.KeyPairKeyObjectResult.md)\>

▸ **__promisify__**(`type`, `options`): `Promise`<{ `privateKey`: `string` ; `publicKey`: `string`  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"ec"`` |
| `options` | [`ECKeyPairOptions`](https://oven-sh.github.io/bun-types/interfaces/crypto_.ECKeyPairOptions.md)<``"pem"``, ``"pem"``\> |

#### Returns

`Promise`<{ `privateKey`: `string` ; `publicKey`: `string`  }\>

▸ **__promisify__**(`type`, `options`): `Promise`<{ `privateKey`: [`Buffer`](https://oven-sh.github.io/bun-types/modules/buffer_.md#buffer) ; `publicKey`: `string`  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"ec"`` |
| `options` | [`ECKeyPairOptions`](https://oven-sh.github.io/bun-types/interfaces/crypto_.ECKeyPairOptions.md)<``"pem"``, ``"der"``\> |

#### Returns

`Promise`<{ `privateKey`: [`Buffer`](https://oven-sh.github.io/bun-types/modules/buffer_.md#buffer) ; `publicKey`: `string`  }\>

▸ **__promisify__**(`type`, `options`): `Promise`<{ `privateKey`: `string` ; `publicKey`: [`Buffer`](https://oven-sh.github.io/bun-types/modules/buffer_.md#buffer)  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"ec"`` |
| `options` | [`ECKeyPairOptions`](https://oven-sh.github.io/bun-types/interfaces/crypto_.ECKeyPairOptions.md)<``"der"``, ``"pem"``\> |

#### Returns

`Promise`<{ `privateKey`: `string` ; `publicKey`: [`Buffer`](https://oven-sh.github.io/bun-types/modules/buffer_.md#buffer)  }\>

▸ **__promisify__**(`type`, `options`): `Promise`<{ `privateKey`: [`Buffer`](https://oven-sh.github.io/bun-types/modules/buffer_.md#buffer) ; `publicKey`: [`Buffer`](https://oven-sh.github.io/bun-types/modules/buffer_.md#buffer)  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"ec"`` |
| `options` | [`ECKeyPairOptions`](https://oven-sh.github.io/bun-types/interfaces/crypto_.ECKeyPairOptions.md)<``"der"``, ``"der"``\> |

#### Returns

`Promise`<{ `privateKey`: [`Buffer`](https://oven-sh.github.io/bun-types/modules/buffer_.md#buffer) ; `publicKey`: [`Buffer`](https://oven-sh.github.io/bun-types/modules/buffer_.md#buffer)  }\>

▸ **__promisify__**(`type`, `options`): `Promise`<[`KeyPairKeyObjectResult`](https://oven-sh.github.io/bun-types/interfaces/crypto_.KeyPairKeyObjectResult.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"ec"`` |
| `options` | [`ECKeyPairKeyObjectOptions`](https://oven-sh.github.io/bun-types/interfaces/crypto_.ECKeyPairKeyObjectOptions.md) |

#### Returns

`Promise`<[`KeyPairKeyObjectResult`](https://oven-sh.github.io/bun-types/interfaces/crypto_.KeyPairKeyObjectResult.md)\>

▸ **__promisify__**(`type`, `options`): `Promise`<{ `privateKey`: `string` ; `publicKey`: `string`  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"ed25519"`` |
| `options` | [`ED25519KeyPairOptions`](https://oven-sh.github.io/bun-types/interfaces/crypto_.ED25519KeyPairOptions.md)<``"pem"``, ``"pem"``\> |

#### Returns

`Promise`<{ `privateKey`: `string` ; `publicKey`: `string`  }\>

▸ **__promisify__**(`type`, `options`): `Promise`<{ `privateKey`: [`Buffer`](https://oven-sh.github.io/bun-types/modules/buffer_.md#buffer) ; `publicKey`: `string`  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"ed25519"`` |
| `options` | [`ED25519KeyPairOptions`](https://oven-sh.github.io/bun-types/interfaces/crypto_.ED25519KeyPairOptions.md)<``"pem"``, ``"der"``\> |

#### Returns

`Promise`<{ `privateKey`: [`Buffer`](https://oven-sh.github.io/bun-types/modules/buffer_.md#buffer) ; `publicKey`: `string`  }\>

▸ **__promisify__**(`type`, `options`): `Promise`<{ `privateKey`: `string` ; `publicKey`: [`Buffer`](https://oven-sh.github.io/bun-types/modules/buffer_.md#buffer)  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"ed25519"`` |
| `options` | [`ED25519KeyPairOptions`](https://oven-sh.github.io/bun-types/interfaces/crypto_.ED25519KeyPairOptions.md)<``"der"``, ``"pem"``\> |

#### Returns

`Promise`<{ `privateKey`: `string` ; `publicKey`: [`Buffer`](https://oven-sh.github.io/bun-types/modules/buffer_.md#buffer)  }\>

▸ **__promisify__**(`type`, `options`): `Promise`<{ `privateKey`: [`Buffer`](https://oven-sh.github.io/bun-types/modules/buffer_.md#buffer) ; `publicKey`: [`Buffer`](https://oven-sh.github.io/bun-types/modules/buffer_.md#buffer)  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"ed25519"`` |
| `options` | [`ED25519KeyPairOptions`](https://oven-sh.github.io/bun-types/interfaces/crypto_.ED25519KeyPairOptions.md)<``"der"``, ``"der"``\> |

#### Returns

`Promise`<{ `privateKey`: [`Buffer`](https://oven-sh.github.io/bun-types/modules/buffer_.md#buffer) ; `publicKey`: [`Buffer`](https://oven-sh.github.io/bun-types/modules/buffer_.md#buffer)  }\>

▸ **__promisify__**(`type`, `options?`): `Promise`<[`KeyPairKeyObjectResult`](https://oven-sh.github.io/bun-types/interfaces/crypto_.KeyPairKeyObjectResult.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"ed25519"`` |
| `options?` | [`ED25519KeyPairKeyObjectOptions`](https://oven-sh.github.io/bun-types/interfaces/crypto_.ED25519KeyPairKeyObjectOptions.md) |

#### Returns

`Promise`<[`KeyPairKeyObjectResult`](https://oven-sh.github.io/bun-types/interfaces/crypto_.KeyPairKeyObjectResult.md)\>

▸ **__promisify__**(`type`, `options`): `Promise`<{ `privateKey`: `string` ; `publicKey`: `string`  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"ed448"`` |
| `options` | [`ED448KeyPairOptions`](https://oven-sh.github.io/bun-types/interfaces/crypto_.ED448KeyPairOptions.md)<``"pem"``, ``"pem"``\> |

#### Returns

`Promise`<{ `privateKey`: `string` ; `publicKey`: `string`  }\>

▸ **__promisify__**(`type`, `options`): `Promise`<{ `privateKey`: [`Buffer`](https://oven-sh.github.io/bun-types/modules/buffer_.md#buffer) ; `publicKey`: `string`  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"ed448"`` |
| `options` | [`ED448KeyPairOptions`](https://oven-sh.github.io/bun-types/interfaces/crypto_.ED448KeyPairOptions.md)<``"pem"``, ``"der"``\> |

#### Returns

`Promise`<{ `privateKey`: [`Buffer`](https://oven-sh.github.io/bun-types/modules/buffer_.md#buffer) ; `publicKey`: `string`  }\>

▸ **__promisify__**(`type`, `options`): `Promise`<{ `privateKey`: `string` ; `publicKey`: [`Buffer`](https://oven-sh.github.io/bun-types/modules/buffer_.md#buffer)  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"ed448"`` |
| `options` | [`ED448KeyPairOptions`](https://oven-sh.github.io/bun-types/interfaces/crypto_.ED448KeyPairOptions.md)<``"der"``, ``"pem"``\> |

#### Returns

`Promise`<{ `privateKey`: `string` ; `publicKey`: [`Buffer`](https://oven-sh.github.io/bun-types/modules/buffer_.md#buffer)  }\>

▸ **__promisify__**(`type`, `options`): `Promise`<{ `privateKey`: [`Buffer`](https://oven-sh.github.io/bun-types/modules/buffer_.md#buffer) ; `publicKey`: [`Buffer`](https://oven-sh.github.io/bun-types/modules/buffer_.md#buffer)  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"ed448"`` |
| `options` | [`ED448KeyPairOptions`](https://oven-sh.github.io/bun-types/interfaces/crypto_.ED448KeyPairOptions.md)<``"der"``, ``"der"``\> |

#### Returns

`Promise`<{ `privateKey`: [`Buffer`](https://oven-sh.github.io/bun-types/modules/buffer_.md#buffer) ; `publicKey`: [`Buffer`](https://oven-sh.github.io/bun-types/modules/buffer_.md#buffer)  }\>

▸ **__promisify__**(`type`, `options?`): `Promise`<[`KeyPairKeyObjectResult`](https://oven-sh.github.io/bun-types/interfaces/crypto_.KeyPairKeyObjectResult.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"ed448"`` |
| `options?` | [`ED448KeyPairKeyObjectOptions`](https://oven-sh.github.io/bun-types/interfaces/crypto_.ED448KeyPairKeyObjectOptions.md) |

#### Returns

`Promise`<[`KeyPairKeyObjectResult`](https://oven-sh.github.io/bun-types/interfaces/crypto_.KeyPairKeyObjectResult.md)\>

▸ **__promisify__**(`type`, `options`): `Promise`<{ `privateKey`: `string` ; `publicKey`: `string`  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"x25519"`` |
| `options` | [`X25519KeyPairOptions`](https://oven-sh.github.io/bun-types/interfaces/crypto_.X25519KeyPairOptions.md)<``"pem"``, ``"pem"``\> |

#### Returns

`Promise`<{ `privateKey`: `string` ; `publicKey`: `string`  }\>

▸ **__promisify__**(`type`, `options`): `Promise`<{ `privateKey`: [`Buffer`](https://oven-sh.github.io/bun-types/modules/buffer_.md#buffer) ; `publicKey`: `string`  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"x25519"`` |
| `options` | [`X25519KeyPairOptions`](https://oven-sh.github.io/bun-types/interfaces/crypto_.X25519KeyPairOptions.md)<``"pem"``, ``"der"``\> |

#### Returns

`Promise`<{ `privateKey`: [`Buffer`](https://oven-sh.github.io/bun-types/modules/buffer_.md#buffer) ; `publicKey`: `string`  }\>

▸ **__promisify__**(`type`, `options`): `Promise`<{ `privateKey`: `string` ; `publicKey`: [`Buffer`](https://oven-sh.github.io/bun-types/modules/buffer_.md#buffer)  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"x25519"`` |
| `options` | [`X25519KeyPairOptions`](https://oven-sh.github.io/bun-types/interfaces/crypto_.X25519KeyPairOptions.md)<``"der"``, ``"pem"``\> |

#### Returns

`Promise`<{ `privateKey`: `string` ; `publicKey`: [`Buffer`](https://oven-sh.github.io/bun-types/modules/buffer_.md#buffer)  }\>

▸ **__promisify__**(`type`, `options`): `Promise`<{ `privateKey`: [`Buffer`](https://oven-sh.github.io/bun-types/modules/buffer_.md#buffer) ; `publicKey`: [`Buffer`](https://oven-sh.github.io/bun-types/modules/buffer_.md#buffer)  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"x25519"`` |
| `options` | [`X25519KeyPairOptions`](https://oven-sh.github.io/bun-types/interfaces/crypto_.X25519KeyPairOptions.md)<``"der"``, ``"der"``\> |

#### Returns

`Promise`<{ `privateKey`: [`Buffer`](https://oven-sh.github.io/bun-types/modules/buffer_.md#buffer) ; `publicKey`: [`Buffer`](https://oven-sh.github.io/bun-types/modules/buffer_.md#buffer)  }\>

▸ **__promisify__**(`type`, `options?`): `Promise`<[`KeyPairKeyObjectResult`](https://oven-sh.github.io/bun-types/interfaces/crypto_.KeyPairKeyObjectResult.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"x25519"`` |
| `options?` | [`X25519KeyPairKeyObjectOptions`](https://oven-sh.github.io/bun-types/interfaces/crypto_.X25519KeyPairKeyObjectOptions.md) |

#### Returns

`Promise`<[`KeyPairKeyObjectResult`](https://oven-sh.github.io/bun-types/interfaces/crypto_.KeyPairKeyObjectResult.md)\>

▸ **__promisify__**(`type`, `options`): `Promise`<{ `privateKey`: `string` ; `publicKey`: `string`  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"x448"`` |
| `options` | [`X448KeyPairOptions`](https://oven-sh.github.io/bun-types/interfaces/crypto_.X448KeyPairOptions.md)<``"pem"``, ``"pem"``\> |

#### Returns

`Promise`<{ `privateKey`: `string` ; `publicKey`: `string`  }\>

▸ **__promisify__**(`type`, `options`): `Promise`<{ `privateKey`: [`Buffer`](https://oven-sh.github.io/bun-types/modules/buffer_.md#buffer) ; `publicKey`: `string`  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"x448"`` |
| `options` | [`X448KeyPairOptions`](https://oven-sh.github.io/bun-types/interfaces/crypto_.X448KeyPairOptions.md)<``"pem"``, ``"der"``\> |

#### Returns

`Promise`<{ `privateKey`: [`Buffer`](https://oven-sh.github.io/bun-types/modules/buffer_.md#buffer) ; `publicKey`: `string`  }\>

▸ **__promisify__**(`type`, `options`): `Promise`<{ `privateKey`: `string` ; `publicKey`: [`Buffer`](https://oven-sh.github.io/bun-types/modules/buffer_.md#buffer)  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"x448"`` |
| `options` | [`X448KeyPairOptions`](https://oven-sh.github.io/bun-types/interfaces/crypto_.X448KeyPairOptions.md)<``"der"``, ``"pem"``\> |

#### Returns

`Promise`<{ `privateKey`: `string` ; `publicKey`: [`Buffer`](https://oven-sh.github.io/bun-types/modules/buffer_.md#buffer)  }\>

▸ **__promisify__**(`type`, `options`): `Promise`<{ `privateKey`: [`Buffer`](https://oven-sh.github.io/bun-types/modules/buffer_.md#buffer) ; `publicKey`: [`Buffer`](https://oven-sh.github.io/bun-types/modules/buffer_.md#buffer)  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"x448"`` |
| `options` | [`X448KeyPairOptions`](https://oven-sh.github.io/bun-types/interfaces/crypto_.X448KeyPairOptions.md)<``"der"``, ``"der"``\> |

#### Returns

`Promise`<{ `privateKey`: [`Buffer`](https://oven-sh.github.io/bun-types/modules/buffer_.md#buffer) ; `publicKey`: [`Buffer`](https://oven-sh.github.io/bun-types/modules/buffer_.md#buffer)  }\>

▸ **__promisify__**(`type`, `options?`): `Promise`<[`KeyPairKeyObjectResult`](https://oven-sh.github.io/bun-types/interfaces/crypto_.KeyPairKeyObjectResult.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"x448"`` |
| `options?` | [`X448KeyPairKeyObjectOptions`](https://oven-sh.github.io/bun-types/interfaces/crypto_.X448KeyPairKeyObjectOptions.md) |

#### Returns

`Promise`<[`KeyPairKeyObjectResult`](https://oven-sh.github.io/bun-types/interfaces/crypto_.KeyPairKeyObjectResult.md)\>

▸ **__promisify__**(`type`, `options`): `Promise`<{ `privateKey`: `string` ; `publicKey`: `string`  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"rsa"`` |
| `options` | [`RSAKeyPairOptions`](https://oven-sh.github.io/bun-types/interfaces/crypto_.RSAKeyPairOptions.md)<``"pem"``, ``"pem"``\> |

#### Returns

`Promise`<{ `privateKey`: `string` ; `publicKey`: `string`  }\>

▸ **__promisify__**(`type`, `options`): `Promise`<{ `privateKey`: [`Buffer`](https://oven-sh.github.io/bun-types/modules/buffer_.md#buffer) ; `publicKey`: `string`  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"rsa"`` |
| `options` | [`RSAKeyPairOptions`](https://oven-sh.github.io/bun-types/interfaces/crypto_.RSAKeyPairOptions.md)<``"pem"``, ``"der"``\> |

#### Returns

`Promise`<{ `privateKey`: [`Buffer`](https://oven-sh.github.io/bun-types/modules/buffer_.md#buffer) ; `publicKey`: `string`  }\>

▸ **__promisify__**(`type`, `options`): `Promise`<{ `privateKey`: `string` ; `publicKey`: [`Buffer`](https://oven-sh.github.io/bun-types/modules/buffer_.md#buffer)  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"rsa"`` |
| `options` | [`RSAKeyPairOptions`](https://oven-sh.github.io/bun-types/interfaces/crypto_.RSAKeyPairOptions.md)<``"der"``, ``"pem"``\> |

#### Returns

`Promise`<{ `privateKey`: `string` ; `publicKey`: [`Buffer`](https://oven-sh.github.io/bun-types/modules/buffer_.md#buffer)  }\>

▸ **__promisify__**(`type`, `options`): `Promise`<{ `privateKey`: [`Buffer`](https://oven-sh.github.io/bun-types/modules/buffer_.md#buffer) ; `publicKey`: [`Buffer`](https://oven-sh.github.io/bun-types/modules/buffer_.md#buffer)  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"rsa"`` |
| `options` | [`RSAKeyPairOptions`](https://oven-sh.github.io/bun-types/interfaces/crypto_.RSAKeyPairOptions.md)<``"der"``, ``"der"``\> |

#### Returns

`Promise`<{ `privateKey`: [`Buffer`](https://oven-sh.github.io/bun-types/modules/buffer_.md#buffer) ; `publicKey`: [`Buffer`](https://oven-sh.github.io/bun-types/modules/buffer_.md#buffer)  }\>

▸ **__promisify__**(`type`, `options`): `Promise`<[`KeyPairKeyObjectResult`](https://oven-sh.github.io/bun-types/interfaces/crypto_.KeyPairKeyObjectResult.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"rsa"`` |
| `options` | [`RSAKeyPairKeyObjectOptions`](https://oven-sh.github.io/bun-types/interfaces/crypto_.RSAKeyPairKeyObjectOptions.md) |

#### Returns

`Promise`<[`KeyPairKeyObjectResult`](https://oven-sh.github.io/bun-types/interfaces/crypto_.KeyPairKeyObjectResult.md)\>

▸ **__promisify__**(`type`, `options`): `Promise`<{ `privateKey`: `string` ; `publicKey`: `string`  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"rsa-pss"`` |
| `options` | [`RSAPSSKeyPairOptions`](https://oven-sh.github.io/bun-types/interfaces/crypto_.RSAPSSKeyPairOptions.md)<``"pem"``, ``"pem"``\> |

#### Returns

`Promise`<{ `privateKey`: `string` ; `publicKey`: `string`  }\>

▸ **__promisify__**(`type`, `options`): `Promise`<{ `privateKey`: [`Buffer`](https://oven-sh.github.io/bun-types/modules/buffer_.md#buffer) ; `publicKey`: `string`  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"rsa-pss"`` |
| `options` | [`RSAPSSKeyPairOptions`](https://oven-sh.github.io/bun-types/interfaces/crypto_.RSAPSSKeyPairOptions.md)<``"pem"``, ``"der"``\> |

#### Returns

`Promise`<{ `privateKey`: [`Buffer`](https://oven-sh.github.io/bun-types/modules/buffer_.md#buffer) ; `publicKey`: `string`  }\>

▸ **__promisify__**(`type`, `options`): `Promise`<{ `privateKey`: `string` ; `publicKey`: [`Buffer`](https://oven-sh.github.io/bun-types/modules/buffer_.md#buffer)  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"rsa-pss"`` |
| `options` | [`RSAPSSKeyPairOptions`](https://oven-sh.github.io/bun-types/interfaces/crypto_.RSAPSSKeyPairOptions.md)<``"der"``, ``"pem"``\> |

#### Returns

`Promise`<{ `privateKey`: `string` ; `publicKey`: [`Buffer`](https://oven-sh.github.io/bun-types/modules/buffer_.md#buffer)  }\>

▸ **__promisify__**(`type`, `options`): `Promise`<{ `privateKey`: [`Buffer`](https://oven-sh.github.io/bun-types/modules/buffer_.md#buffer) ; `publicKey`: [`Buffer`](https://oven-sh.github.io/bun-types/modules/buffer_.md#buffer)  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"rsa-pss"`` |
| `options` | [`RSAPSSKeyPairOptions`](https://oven-sh.github.io/bun-types/interfaces/crypto_.RSAPSSKeyPairOptions.md)<``"der"``, ``"der"``\> |

#### Returns

`Promise`<{ `privateKey`: [`Buffer`](https://oven-sh.github.io/bun-types/modules/buffer_.md#buffer) ; `publicKey`: [`Buffer`](https://oven-sh.github.io/bun-types/modules/buffer_.md#buffer)  }\>

▸ **__promisify__**(`type`, `options`): `Promise`<[`KeyPairKeyObjectResult`](https://oven-sh.github.io/bun-types/interfaces/crypto_.KeyPairKeyObjectResult.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"rsa-pss"`` |
| `options` | [`RSAPSSKeyPairKeyObjectOptions`](https://oven-sh.github.io/bun-types/interfaces/crypto_.RSAPSSKeyPairKeyObjectOptions.md) |

#### Returns

`Promise`<[`KeyPairKeyObjectResult`](https://oven-sh.github.io/bun-types/interfaces/crypto_.KeyPairKeyObjectResult.md)\>

▸ **__promisify__**(`type`, `options`): `Promise`<{ `privateKey`: `string` ; `publicKey`: `string`  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"dsa"`` |
| `options` | [`DSAKeyPairOptions`](https://oven-sh.github.io/bun-types/interfaces/crypto_.DSAKeyPairOptions.md)<``"pem"``, ``"pem"``\> |

#### Returns

`Promise`<{ `privateKey`: `string` ; `publicKey`: `string`  }\>

▸ **__promisify__**(`type`, `options`): `Promise`<{ `privateKey`: [`Buffer`](https://oven-sh.github.io/bun-types/modules/buffer_.md#buffer) ; `publicKey`: `string`  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"dsa"`` |
| `options` | [`DSAKeyPairOptions`](https://oven-sh.github.io/bun-types/interfaces/crypto_.DSAKeyPairOptions.md)<``"pem"``, ``"der"``\> |

#### Returns

`Promise`<{ `privateKey`: [`Buffer`](https://oven-sh.github.io/bun-types/modules/buffer_.md#buffer) ; `publicKey`: `string`  }\>

▸ **__promisify__**(`type`, `options`): `Promise`<{ `privateKey`: `string` ; `publicKey`: [`Buffer`](https://oven-sh.github.io/bun-types/modules/buffer_.md#buffer)  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"dsa"`` |
| `options` | [`DSAKeyPairOptions`](https://oven-sh.github.io/bun-types/interfaces/crypto_.DSAKeyPairOptions.md)<``"der"``, ``"pem"``\> |

#### Returns

`Promise`<{ `privateKey`: `string` ; `publicKey`: [`Buffer`](https://oven-sh.github.io/bun-types/modules/buffer_.md#buffer)  }\>

▸ **__promisify__**(`type`, `options`): `Promise`<{ `privateKey`: [`Buffer`](https://oven-sh.github.io/bun-types/modules/buffer_.md#buffer) ; `publicKey`: [`Buffer`](https://oven-sh.github.io/bun-types/modules/buffer_.md#buffer)  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"dsa"`` |
| `options` | [`DSAKeyPairOptions`](https://oven-sh.github.io/bun-types/interfaces/crypto_.DSAKeyPairOptions.md)<``"der"``, ``"der"``\> |

#### Returns

`Promise`<{ `privateKey`: [`Buffer`](https://oven-sh.github.io/bun-types/modules/buffer_.md#buffer) ; `publicKey`: [`Buffer`](https://oven-sh.github.io/bun-types/modules/buffer_.md#buffer)  }\>

▸ **__promisify__**(`type`, `options`): `Promise`<[`KeyPairKeyObjectResult`](https://oven-sh.github.io/bun-types/interfaces/crypto_.KeyPairKeyObjectResult.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"dsa"`` |
| `options` | [`DSAKeyPairKeyObjectOptions`](https://oven-sh.github.io/bun-types/interfaces/crypto_.DSAKeyPairKeyObjectOptions.md) |

#### Returns

`Promise`<[`KeyPairKeyObjectResult`](https://oven-sh.github.io/bun-types/interfaces/crypto_.KeyPairKeyObjectResult.md)\>

▸ **__promisify__**(`type`, `options`): `Promise`<{ `privateKey`: `string` ; `publicKey`: `string`  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"ec"`` |
| `options` | [`ECKeyPairOptions`](https://oven-sh.github.io/bun-types/interfaces/crypto_.ECKeyPairOptions.md)<``"pem"``, ``"pem"``\> |

#### Returns

`Promise`<{ `privateKey`: `string` ; `publicKey`: `string`  }\>

▸ **__promisify__**(`type`, `options`): `Promise`<{ `privateKey`: [`Buffer`](https://oven-sh.github.io/bun-types/modules/buffer_.md#buffer) ; `publicKey`: `string`  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"ec"`` |
| `options` | [`ECKeyPairOptions`](https://oven-sh.github.io/bun-types/interfaces/crypto_.ECKeyPairOptions.md)<``"pem"``, ``"der"``\> |

#### Returns

`Promise`<{ `privateKey`: [`Buffer`](https://oven-sh.github.io/bun-types/modules/buffer_.md#buffer) ; `publicKey`: `string`  }\>

▸ **__promisify__**(`type`, `options`): `Promise`<{ `privateKey`: `string` ; `publicKey`: [`Buffer`](https://oven-sh.github.io/bun-types/modules/buffer_.md#buffer)  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"ec"`` |
| `options` | [`ECKeyPairOptions`](https://oven-sh.github.io/bun-types/interfaces/crypto_.ECKeyPairOptions.md)<``"der"``, ``"pem"``\> |

#### Returns

`Promise`<{ `privateKey`: `string` ; `publicKey`: [`Buffer`](https://oven-sh.github.io/bun-types/modules/buffer_.md#buffer)  }\>

▸ **__promisify__**(`type`, `options`): `Promise`<{ `privateKey`: [`Buffer`](https://oven-sh.github.io/bun-types/modules/buffer_.md#buffer) ; `publicKey`: [`Buffer`](https://oven-sh.github.io/bun-types/modules/buffer_.md#buffer)  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"ec"`` |
| `options` | [`ECKeyPairOptions`](https://oven-sh.github.io/bun-types/interfaces/crypto_.ECKeyPairOptions.md)<``"der"``, ``"der"``\> |

#### Returns

`Promise`<{ `privateKey`: [`Buffer`](https://oven-sh.github.io/bun-types/modules/buffer_.md#buffer) ; `publicKey`: [`Buffer`](https://oven-sh.github.io/bun-types/modules/buffer_.md#buffer)  }\>

▸ **__promisify__**(`type`, `options`): `Promise`<[`KeyPairKeyObjectResult`](https://oven-sh.github.io/bun-types/interfaces/crypto_.KeyPairKeyObjectResult.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"ec"`` |
| `options` | [`ECKeyPairKeyObjectOptions`](https://oven-sh.github.io/bun-types/interfaces/crypto_.ECKeyPairKeyObjectOptions.md) |

#### Returns

`Promise`<[`KeyPairKeyObjectResult`](https://oven-sh.github.io/bun-types/interfaces/crypto_.KeyPairKeyObjectResult.md)\>

▸ **__promisify__**(`type`, `options`): `Promise`<{ `privateKey`: `string` ; `publicKey`: `string`  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"ed25519"`` |
| `options` | [`ED25519KeyPairOptions`](https://oven-sh.github.io/bun-types/interfaces/crypto_.ED25519KeyPairOptions.md)<``"pem"``, ``"pem"``\> |

#### Returns

`Promise`<{ `privateKey`: `string` ; `publicKey`: `string`  }\>

▸ **__promisify__**(`type`, `options`): `Promise`<{ `privateKey`: [`Buffer`](https://oven-sh.github.io/bun-types/modules/buffer_.md#buffer) ; `publicKey`: `string`  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"ed25519"`` |
| `options` | [`ED25519KeyPairOptions`](https://oven-sh.github.io/bun-types/interfaces/crypto_.ED25519KeyPairOptions.md)<``"pem"``, ``"der"``\> |

#### Returns

`Promise`<{ `privateKey`: [`Buffer`](https://oven-sh.github.io/bun-types/modules/buffer_.md#buffer) ; `publicKey`: `string`  }\>

▸ **__promisify__**(`type`, `options`): `Promise`<{ `privateKey`: `string` ; `publicKey`: [`Buffer`](https://oven-sh.github.io/bun-types/modules/buffer_.md#buffer)  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"ed25519"`` |
| `options` | [`ED25519KeyPairOptions`](https://oven-sh.github.io/bun-types/interfaces/crypto_.ED25519KeyPairOptions.md)<``"der"``, ``"pem"``\> |

#### Returns

`Promise`<{ `privateKey`: `string` ; `publicKey`: [`Buffer`](https://oven-sh.github.io/bun-types/modules/buffer_.md#buffer)  }\>

▸ **__promisify__**(`type`, `options`): `Promise`<{ `privateKey`: [`Buffer`](https://oven-sh.github.io/bun-types/modules/buffer_.md#buffer) ; `publicKey`: [`Buffer`](https://oven-sh.github.io/bun-types/modules/buffer_.md#buffer)  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"ed25519"`` |
| `options` | [`ED25519KeyPairOptions`](https://oven-sh.github.io/bun-types/interfaces/crypto_.ED25519KeyPairOptions.md)<``"der"``, ``"der"``\> |

#### Returns

`Promise`<{ `privateKey`: [`Buffer`](https://oven-sh.github.io/bun-types/modules/buffer_.md#buffer) ; `publicKey`: [`Buffer`](https://oven-sh.github.io/bun-types/modules/buffer_.md#buffer)  }\>

▸ **__promisify__**(`type`, `options?`): `Promise`<[`KeyPairKeyObjectResult`](https://oven-sh.github.io/bun-types/interfaces/crypto_.KeyPairKeyObjectResult.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"ed25519"`` |
| `options?` | [`ED25519KeyPairKeyObjectOptions`](https://oven-sh.github.io/bun-types/interfaces/crypto_.ED25519KeyPairKeyObjectOptions.md) |

#### Returns

`Promise`<[`KeyPairKeyObjectResult`](https://oven-sh.github.io/bun-types/interfaces/crypto_.KeyPairKeyObjectResult.md)\>

▸ **__promisify__**(`type`, `options`): `Promise`<{ `privateKey`: `string` ; `publicKey`: `string`  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"ed448"`` |
| `options` | [`ED448KeyPairOptions`](https://oven-sh.github.io/bun-types/interfaces/crypto_.ED448KeyPairOptions.md)<``"pem"``, ``"pem"``\> |

#### Returns

`Promise`<{ `privateKey`: `string` ; `publicKey`: `string`  }\>

▸ **__promisify__**(`type`, `options`): `Promise`<{ `privateKey`: [`Buffer`](https://oven-sh.github.io/bun-types/modules/buffer_.md#buffer) ; `publicKey`: `string`  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"ed448"`` |
| `options` | [`ED448KeyPairOptions`](https://oven-sh.github.io/bun-types/interfaces/crypto_.ED448KeyPairOptions.md)<``"pem"``, ``"der"``\> |

#### Returns

`Promise`<{ `privateKey`: [`Buffer`](https://oven-sh.github.io/bun-types/modules/buffer_.md#buffer) ; `publicKey`: `string`  }\>

▸ **__promisify__**(`type`, `options`): `Promise`<{ `privateKey`: `string` ; `publicKey`: [`Buffer`](https://oven-sh.github.io/bun-types/modules/buffer_.md#buffer)  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"ed448"`` |
| `options` | [`ED448KeyPairOptions`](https://oven-sh.github.io/bun-types/interfaces/crypto_.ED448KeyPairOptions.md)<``"der"``, ``"pem"``\> |

#### Returns

`Promise`<{ `privateKey`: `string` ; `publicKey`: [`Buffer`](https://oven-sh.github.io/bun-types/modules/buffer_.md#buffer)  }\>

▸ **__promisify__**(`type`, `options`): `Promise`<{ `privateKey`: [`Buffer`](https://oven-sh.github.io/bun-types/modules/buffer_.md#buffer) ; `publicKey`: [`Buffer`](https://oven-sh.github.io/bun-types/modules/buffer_.md#buffer)  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"ed448"`` |
| `options` | [`ED448KeyPairOptions`](https://oven-sh.github.io/bun-types/interfaces/crypto_.ED448KeyPairOptions.md)<``"der"``, ``"der"``\> |

#### Returns

`Promise`<{ `privateKey`: [`Buffer`](https://oven-sh.github.io/bun-types/modules/buffer_.md#buffer) ; `publicKey`: [`Buffer`](https://oven-sh.github.io/bun-types/modules/buffer_.md#buffer)  }\>

▸ **__promisify__**(`type`, `options?`): `Promise`<[`KeyPairKeyObjectResult`](https://oven-sh.github.io/bun-types/interfaces/crypto_.KeyPairKeyObjectResult.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"ed448"`` |
| `options?` | [`ED448KeyPairKeyObjectOptions`](https://oven-sh.github.io/bun-types/interfaces/crypto_.ED448KeyPairKeyObjectOptions.md) |

#### Returns

`Promise`<[`KeyPairKeyObjectResult`](https://oven-sh.github.io/bun-types/interfaces/crypto_.KeyPairKeyObjectResult.md)\>

▸ **__promisify__**(`type`, `options`): `Promise`<{ `privateKey`: `string` ; `publicKey`: `string`  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"x25519"`` |
| `options` | [`X25519KeyPairOptions`](https://oven-sh.github.io/bun-types/interfaces/crypto_.X25519KeyPairOptions.md)<``"pem"``, ``"pem"``\> |

#### Returns

`Promise`<{ `privateKey`: `string` ; `publicKey`: `string`  }\>

▸ **__promisify__**(`type`, `options`): `Promise`<{ `privateKey`: [`Buffer`](https://oven-sh.github.io/bun-types/modules/buffer_.md#buffer) ; `publicKey`: `string`  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"x25519"`` |
| `options` | [`X25519KeyPairOptions`](https://oven-sh.github.io/bun-types/interfaces/crypto_.X25519KeyPairOptions.md)<``"pem"``, ``"der"``\> |

#### Returns

`Promise`<{ `privateKey`: [`Buffer`](https://oven-sh.github.io/bun-types/modules/buffer_.md#buffer) ; `publicKey`: `string`  }\>

▸ **__promisify__**(`type`, `options`): `Promise`<{ `privateKey`: `string` ; `publicKey`: [`Buffer`](https://oven-sh.github.io/bun-types/modules/buffer_.md#buffer)  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"x25519"`` |
| `options` | [`X25519KeyPairOptions`](https://oven-sh.github.io/bun-types/interfaces/crypto_.X25519KeyPairOptions.md)<``"der"``, ``"pem"``\> |

#### Returns

`Promise`<{ `privateKey`: `string` ; `publicKey`: [`Buffer`](https://oven-sh.github.io/bun-types/modules/buffer_.md#buffer)  }\>

▸ **__promisify__**(`type`, `options`): `Promise`<{ `privateKey`: [`Buffer`](https://oven-sh.github.io/bun-types/modules/buffer_.md#buffer) ; `publicKey`: [`Buffer`](https://oven-sh.github.io/bun-types/modules/buffer_.md#buffer)  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"x25519"`` |
| `options` | [`X25519KeyPairOptions`](https://oven-sh.github.io/bun-types/interfaces/crypto_.X25519KeyPairOptions.md)<``"der"``, ``"der"``\> |

#### Returns

`Promise`<{ `privateKey`: [`Buffer`](https://oven-sh.github.io/bun-types/modules/buffer_.md#buffer) ; `publicKey`: [`Buffer`](https://oven-sh.github.io/bun-types/modules/buffer_.md#buffer)  }\>

▸ **__promisify__**(`type`, `options?`): `Promise`<[`KeyPairKeyObjectResult`](https://oven-sh.github.io/bun-types/interfaces/crypto_.KeyPairKeyObjectResult.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"x25519"`` |
| `options?` | [`X25519KeyPairKeyObjectOptions`](https://oven-sh.github.io/bun-types/interfaces/crypto_.X25519KeyPairKeyObjectOptions.md) |

#### Returns

`Promise`<[`KeyPairKeyObjectResult`](https://oven-sh.github.io/bun-types/interfaces/crypto_.KeyPairKeyObjectResult.md)\>

▸ **__promisify__**(`type`, `options`): `Promise`<{ `privateKey`: `string` ; `publicKey`: `string`  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"x448"`` |
| `options` | [`X448KeyPairOptions`](https://oven-sh.github.io/bun-types/interfaces/crypto_.X448KeyPairOptions.md)<``"pem"``, ``"pem"``\> |

#### Returns

`Promise`<{ `privateKey`: `string` ; `publicKey`: `string`  }\>

▸ **__promisify__**(`type`, `options`): `Promise`<{ `privateKey`: [`Buffer`](https://oven-sh.github.io/bun-types/modules/buffer_.md#buffer) ; `publicKey`: `string`  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"x448"`` |
| `options` | [`X448KeyPairOptions`](https://oven-sh.github.io/bun-types/interfaces/crypto_.X448KeyPairOptions.md)<``"pem"``, ``"der"``\> |

#### Returns

`Promise`<{ `privateKey`: [`Buffer`](https://oven-sh.github.io/bun-types/modules/buffer_.md#buffer) ; `publicKey`: `string`  }\>

▸ **__promisify__**(`type`, `options`): `Promise`<{ `privateKey`: `string` ; `publicKey`: [`Buffer`](https://oven-sh.github.io/bun-types/modules/buffer_.md#buffer)  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"x448"`` |
| `options` | [`X448KeyPairOptions`](https://oven-sh.github.io/bun-types/interfaces/crypto_.X448KeyPairOptions.md)<``"der"``, ``"pem"``\> |

#### Returns

`Promise`<{ `privateKey`: `string` ; `publicKey`: [`Buffer`](https://oven-sh.github.io/bun-types/modules/buffer_.md#buffer)  }\>

▸ **__promisify__**(`type`, `options`): `Promise`<{ `privateKey`: [`Buffer`](https://oven-sh.github.io/bun-types/modules/buffer_.md#buffer) ; `publicKey`: [`Buffer`](https://oven-sh.github.io/bun-types/modules/buffer_.md#buffer)  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"x448"`` |
| `options` | [`X448KeyPairOptions`](https://oven-sh.github.io/bun-types/interfaces/crypto_.X448KeyPairOptions.md)<``"der"``, ``"der"``\> |

#### Returns

`Promise`<{ `privateKey`: [`Buffer`](https://oven-sh.github.io/bun-types/modules/buffer_.md#buffer) ; `publicKey`: [`Buffer`](https://oven-sh.github.io/bun-types/modules/buffer_.md#buffer)  }\>

▸ **__promisify__**(`type`, `options?`): `Promise`<[`KeyPairKeyObjectResult`](https://oven-sh.github.io/bun-types/interfaces/crypto_.KeyPairKeyObjectResult.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"x448"`` |
| `options?` | [`X448KeyPairKeyObjectOptions`](https://oven-sh.github.io/bun-types/interfaces/crypto_.X448KeyPairKeyObjectOptions.md) |

#### Returns

`Promise`<[`KeyPairKeyObjectResult`](https://oven-sh.github.io/bun-types/interfaces/crypto_.KeyPairKeyObjectResult.md)\>
