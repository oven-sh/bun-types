[bun-types](https://github.com/oven-sh/bun-types/blob/master/api-docs/README.md) / [Exports](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules.md) / ["crypto"](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/crypto_.md) / generateKeyPair

# Namespace: generateKeyPair

["crypto"](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/crypto_.md).generateKeyPair

## Table of contents

### Functions

- [\_\_promisify\_\_](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/crypto_.generateKeyPair.md#__promisify__)

## Functions

### \_\_promisify\_\_

▸ **__promisify__**(`type`, `options`): `Promise`<{ `privateKey`: `string` ; `publicKey`: `string`  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"rsa"`` |
| `options` | [`RSAKeyPairOptions`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.RSAKeyPairOptions.md)<``"pem"``, ``"pem"``\> |

#### Returns

`Promise`<{ `privateKey`: `string` ; `publicKey`: `string`  }\>

▸ **__promisify__**(`type`, `options`): `Promise`<{ `privateKey`: [`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer) ; `publicKey`: `string`  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"rsa"`` |
| `options` | [`RSAKeyPairOptions`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.RSAKeyPairOptions.md)<``"pem"``, ``"der"``\> |

#### Returns

`Promise`<{ `privateKey`: [`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer) ; `publicKey`: `string`  }\>

▸ **__promisify__**(`type`, `options`): `Promise`<{ `privateKey`: `string` ; `publicKey`: [`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer)  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"rsa"`` |
| `options` | [`RSAKeyPairOptions`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.RSAKeyPairOptions.md)<``"der"``, ``"pem"``\> |

#### Returns

`Promise`<{ `privateKey`: `string` ; `publicKey`: [`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer)  }\>

▸ **__promisify__**(`type`, `options`): `Promise`<{ `privateKey`: [`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer) ; `publicKey`: [`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer)  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"rsa"`` |
| `options` | [`RSAKeyPairOptions`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.RSAKeyPairOptions.md)<``"der"``, ``"der"``\> |

#### Returns

`Promise`<{ `privateKey`: [`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer) ; `publicKey`: [`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer)  }\>

▸ **__promisify__**(`type`, `options`): `Promise`<[`KeyPairKeyObjectResult`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.KeyPairKeyObjectResult.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"rsa"`` |
| `options` | [`RSAKeyPairKeyObjectOptions`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.RSAKeyPairKeyObjectOptions.md) |

#### Returns

`Promise`<[`KeyPairKeyObjectResult`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.KeyPairKeyObjectResult.md)\>

▸ **__promisify__**(`type`, `options`): `Promise`<{ `privateKey`: `string` ; `publicKey`: `string`  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"rsa-pss"`` |
| `options` | [`RSAPSSKeyPairOptions`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.RSAPSSKeyPairOptions.md)<``"pem"``, ``"pem"``\> |

#### Returns

`Promise`<{ `privateKey`: `string` ; `publicKey`: `string`  }\>

▸ **__promisify__**(`type`, `options`): `Promise`<{ `privateKey`: [`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer) ; `publicKey`: `string`  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"rsa-pss"`` |
| `options` | [`RSAPSSKeyPairOptions`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.RSAPSSKeyPairOptions.md)<``"pem"``, ``"der"``\> |

#### Returns

`Promise`<{ `privateKey`: [`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer) ; `publicKey`: `string`  }\>

▸ **__promisify__**(`type`, `options`): `Promise`<{ `privateKey`: `string` ; `publicKey`: [`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer)  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"rsa-pss"`` |
| `options` | [`RSAPSSKeyPairOptions`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.RSAPSSKeyPairOptions.md)<``"der"``, ``"pem"``\> |

#### Returns

`Promise`<{ `privateKey`: `string` ; `publicKey`: [`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer)  }\>

▸ **__promisify__**(`type`, `options`): `Promise`<{ `privateKey`: [`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer) ; `publicKey`: [`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer)  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"rsa-pss"`` |
| `options` | [`RSAPSSKeyPairOptions`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.RSAPSSKeyPairOptions.md)<``"der"``, ``"der"``\> |

#### Returns

`Promise`<{ `privateKey`: [`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer) ; `publicKey`: [`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer)  }\>

▸ **__promisify__**(`type`, `options`): `Promise`<[`KeyPairKeyObjectResult`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.KeyPairKeyObjectResult.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"rsa-pss"`` |
| `options` | [`RSAPSSKeyPairKeyObjectOptions`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.RSAPSSKeyPairKeyObjectOptions.md) |

#### Returns

`Promise`<[`KeyPairKeyObjectResult`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.KeyPairKeyObjectResult.md)\>

▸ **__promisify__**(`type`, `options`): `Promise`<{ `privateKey`: `string` ; `publicKey`: `string`  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"dsa"`` |
| `options` | [`DSAKeyPairOptions`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.DSAKeyPairOptions.md)<``"pem"``, ``"pem"``\> |

#### Returns

`Promise`<{ `privateKey`: `string` ; `publicKey`: `string`  }\>

▸ **__promisify__**(`type`, `options`): `Promise`<{ `privateKey`: [`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer) ; `publicKey`: `string`  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"dsa"`` |
| `options` | [`DSAKeyPairOptions`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.DSAKeyPairOptions.md)<``"pem"``, ``"der"``\> |

#### Returns

`Promise`<{ `privateKey`: [`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer) ; `publicKey`: `string`  }\>

▸ **__promisify__**(`type`, `options`): `Promise`<{ `privateKey`: `string` ; `publicKey`: [`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer)  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"dsa"`` |
| `options` | [`DSAKeyPairOptions`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.DSAKeyPairOptions.md)<``"der"``, ``"pem"``\> |

#### Returns

`Promise`<{ `privateKey`: `string` ; `publicKey`: [`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer)  }\>

▸ **__promisify__**(`type`, `options`): `Promise`<{ `privateKey`: [`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer) ; `publicKey`: [`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer)  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"dsa"`` |
| `options` | [`DSAKeyPairOptions`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.DSAKeyPairOptions.md)<``"der"``, ``"der"``\> |

#### Returns

`Promise`<{ `privateKey`: [`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer) ; `publicKey`: [`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer)  }\>

▸ **__promisify__**(`type`, `options`): `Promise`<[`KeyPairKeyObjectResult`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.KeyPairKeyObjectResult.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"dsa"`` |
| `options` | [`DSAKeyPairKeyObjectOptions`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.DSAKeyPairKeyObjectOptions.md) |

#### Returns

`Promise`<[`KeyPairKeyObjectResult`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.KeyPairKeyObjectResult.md)\>

▸ **__promisify__**(`type`, `options`): `Promise`<{ `privateKey`: `string` ; `publicKey`: `string`  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"ec"`` |
| `options` | [`ECKeyPairOptions`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.ECKeyPairOptions.md)<``"pem"``, ``"pem"``\> |

#### Returns

`Promise`<{ `privateKey`: `string` ; `publicKey`: `string`  }\>

▸ **__promisify__**(`type`, `options`): `Promise`<{ `privateKey`: [`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer) ; `publicKey`: `string`  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"ec"`` |
| `options` | [`ECKeyPairOptions`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.ECKeyPairOptions.md)<``"pem"``, ``"der"``\> |

#### Returns

`Promise`<{ `privateKey`: [`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer) ; `publicKey`: `string`  }\>

▸ **__promisify__**(`type`, `options`): `Promise`<{ `privateKey`: `string` ; `publicKey`: [`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer)  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"ec"`` |
| `options` | [`ECKeyPairOptions`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.ECKeyPairOptions.md)<``"der"``, ``"pem"``\> |

#### Returns

`Promise`<{ `privateKey`: `string` ; `publicKey`: [`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer)  }\>

▸ **__promisify__**(`type`, `options`): `Promise`<{ `privateKey`: [`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer) ; `publicKey`: [`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer)  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"ec"`` |
| `options` | [`ECKeyPairOptions`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.ECKeyPairOptions.md)<``"der"``, ``"der"``\> |

#### Returns

`Promise`<{ `privateKey`: [`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer) ; `publicKey`: [`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer)  }\>

▸ **__promisify__**(`type`, `options`): `Promise`<[`KeyPairKeyObjectResult`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.KeyPairKeyObjectResult.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"ec"`` |
| `options` | [`ECKeyPairKeyObjectOptions`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.ECKeyPairKeyObjectOptions.md) |

#### Returns

`Promise`<[`KeyPairKeyObjectResult`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.KeyPairKeyObjectResult.md)\>

▸ **__promisify__**(`type`, `options`): `Promise`<{ `privateKey`: `string` ; `publicKey`: `string`  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"ed25519"`` |
| `options` | [`ED25519KeyPairOptions`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.ED25519KeyPairOptions.md)<``"pem"``, ``"pem"``\> |

#### Returns

`Promise`<{ `privateKey`: `string` ; `publicKey`: `string`  }\>

▸ **__promisify__**(`type`, `options`): `Promise`<{ `privateKey`: [`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer) ; `publicKey`: `string`  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"ed25519"`` |
| `options` | [`ED25519KeyPairOptions`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.ED25519KeyPairOptions.md)<``"pem"``, ``"der"``\> |

#### Returns

`Promise`<{ `privateKey`: [`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer) ; `publicKey`: `string`  }\>

▸ **__promisify__**(`type`, `options`): `Promise`<{ `privateKey`: `string` ; `publicKey`: [`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer)  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"ed25519"`` |
| `options` | [`ED25519KeyPairOptions`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.ED25519KeyPairOptions.md)<``"der"``, ``"pem"``\> |

#### Returns

`Promise`<{ `privateKey`: `string` ; `publicKey`: [`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer)  }\>

▸ **__promisify__**(`type`, `options`): `Promise`<{ `privateKey`: [`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer) ; `publicKey`: [`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer)  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"ed25519"`` |
| `options` | [`ED25519KeyPairOptions`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.ED25519KeyPairOptions.md)<``"der"``, ``"der"``\> |

#### Returns

`Promise`<{ `privateKey`: [`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer) ; `publicKey`: [`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer)  }\>

▸ **__promisify__**(`type`, `options?`): `Promise`<[`KeyPairKeyObjectResult`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.KeyPairKeyObjectResult.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"ed25519"`` |
| `options?` | [`ED25519KeyPairKeyObjectOptions`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.ED25519KeyPairKeyObjectOptions.md) |

#### Returns

`Promise`<[`KeyPairKeyObjectResult`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.KeyPairKeyObjectResult.md)\>

▸ **__promisify__**(`type`, `options`): `Promise`<{ `privateKey`: `string` ; `publicKey`: `string`  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"ed448"`` |
| `options` | [`ED448KeyPairOptions`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.ED448KeyPairOptions.md)<``"pem"``, ``"pem"``\> |

#### Returns

`Promise`<{ `privateKey`: `string` ; `publicKey`: `string`  }\>

▸ **__promisify__**(`type`, `options`): `Promise`<{ `privateKey`: [`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer) ; `publicKey`: `string`  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"ed448"`` |
| `options` | [`ED448KeyPairOptions`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.ED448KeyPairOptions.md)<``"pem"``, ``"der"``\> |

#### Returns

`Promise`<{ `privateKey`: [`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer) ; `publicKey`: `string`  }\>

▸ **__promisify__**(`type`, `options`): `Promise`<{ `privateKey`: `string` ; `publicKey`: [`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer)  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"ed448"`` |
| `options` | [`ED448KeyPairOptions`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.ED448KeyPairOptions.md)<``"der"``, ``"pem"``\> |

#### Returns

`Promise`<{ `privateKey`: `string` ; `publicKey`: [`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer)  }\>

▸ **__promisify__**(`type`, `options`): `Promise`<{ `privateKey`: [`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer) ; `publicKey`: [`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer)  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"ed448"`` |
| `options` | [`ED448KeyPairOptions`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.ED448KeyPairOptions.md)<``"der"``, ``"der"``\> |

#### Returns

`Promise`<{ `privateKey`: [`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer) ; `publicKey`: [`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer)  }\>

▸ **__promisify__**(`type`, `options?`): `Promise`<[`KeyPairKeyObjectResult`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.KeyPairKeyObjectResult.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"ed448"`` |
| `options?` | [`ED448KeyPairKeyObjectOptions`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.ED448KeyPairKeyObjectOptions.md) |

#### Returns

`Promise`<[`KeyPairKeyObjectResult`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.KeyPairKeyObjectResult.md)\>

▸ **__promisify__**(`type`, `options`): `Promise`<{ `privateKey`: `string` ; `publicKey`: `string`  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"x25519"`` |
| `options` | [`X25519KeyPairOptions`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.X25519KeyPairOptions.md)<``"pem"``, ``"pem"``\> |

#### Returns

`Promise`<{ `privateKey`: `string` ; `publicKey`: `string`  }\>

▸ **__promisify__**(`type`, `options`): `Promise`<{ `privateKey`: [`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer) ; `publicKey`: `string`  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"x25519"`` |
| `options` | [`X25519KeyPairOptions`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.X25519KeyPairOptions.md)<``"pem"``, ``"der"``\> |

#### Returns

`Promise`<{ `privateKey`: [`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer) ; `publicKey`: `string`  }\>

▸ **__promisify__**(`type`, `options`): `Promise`<{ `privateKey`: `string` ; `publicKey`: [`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer)  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"x25519"`` |
| `options` | [`X25519KeyPairOptions`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.X25519KeyPairOptions.md)<``"der"``, ``"pem"``\> |

#### Returns

`Promise`<{ `privateKey`: `string` ; `publicKey`: [`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer)  }\>

▸ **__promisify__**(`type`, `options`): `Promise`<{ `privateKey`: [`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer) ; `publicKey`: [`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer)  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"x25519"`` |
| `options` | [`X25519KeyPairOptions`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.X25519KeyPairOptions.md)<``"der"``, ``"der"``\> |

#### Returns

`Promise`<{ `privateKey`: [`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer) ; `publicKey`: [`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer)  }\>

▸ **__promisify__**(`type`, `options?`): `Promise`<[`KeyPairKeyObjectResult`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.KeyPairKeyObjectResult.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"x25519"`` |
| `options?` | [`X25519KeyPairKeyObjectOptions`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.X25519KeyPairKeyObjectOptions.md) |

#### Returns

`Promise`<[`KeyPairKeyObjectResult`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.KeyPairKeyObjectResult.md)\>

▸ **__promisify__**(`type`, `options`): `Promise`<{ `privateKey`: `string` ; `publicKey`: `string`  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"x448"`` |
| `options` | [`X448KeyPairOptions`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.X448KeyPairOptions.md)<``"pem"``, ``"pem"``\> |

#### Returns

`Promise`<{ `privateKey`: `string` ; `publicKey`: `string`  }\>

▸ **__promisify__**(`type`, `options`): `Promise`<{ `privateKey`: [`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer) ; `publicKey`: `string`  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"x448"`` |
| `options` | [`X448KeyPairOptions`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.X448KeyPairOptions.md)<``"pem"``, ``"der"``\> |

#### Returns

`Promise`<{ `privateKey`: [`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer) ; `publicKey`: `string`  }\>

▸ **__promisify__**(`type`, `options`): `Promise`<{ `privateKey`: `string` ; `publicKey`: [`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer)  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"x448"`` |
| `options` | [`X448KeyPairOptions`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.X448KeyPairOptions.md)<``"der"``, ``"pem"``\> |

#### Returns

`Promise`<{ `privateKey`: `string` ; `publicKey`: [`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer)  }\>

▸ **__promisify__**(`type`, `options`): `Promise`<{ `privateKey`: [`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer) ; `publicKey`: [`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer)  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"x448"`` |
| `options` | [`X448KeyPairOptions`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.X448KeyPairOptions.md)<``"der"``, ``"der"``\> |

#### Returns

`Promise`<{ `privateKey`: [`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer) ; `publicKey`: [`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer)  }\>

▸ **__promisify__**(`type`, `options?`): `Promise`<[`KeyPairKeyObjectResult`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.KeyPairKeyObjectResult.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"x448"`` |
| `options?` | [`X448KeyPairKeyObjectOptions`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.X448KeyPairKeyObjectOptions.md) |

#### Returns

`Promise`<[`KeyPairKeyObjectResult`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.KeyPairKeyObjectResult.md)\>

▸ **__promisify__**(`type`, `options`): `Promise`<{ `privateKey`: `string` ; `publicKey`: `string`  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"rsa"`` |
| `options` | [`RSAKeyPairOptions`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.RSAKeyPairOptions.md)<``"pem"``, ``"pem"``\> |

#### Returns

`Promise`<{ `privateKey`: `string` ; `publicKey`: `string`  }\>

▸ **__promisify__**(`type`, `options`): `Promise`<{ `privateKey`: [`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer) ; `publicKey`: `string`  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"rsa"`` |
| `options` | [`RSAKeyPairOptions`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.RSAKeyPairOptions.md)<``"pem"``, ``"der"``\> |

#### Returns

`Promise`<{ `privateKey`: [`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer) ; `publicKey`: `string`  }\>

▸ **__promisify__**(`type`, `options`): `Promise`<{ `privateKey`: `string` ; `publicKey`: [`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer)  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"rsa"`` |
| `options` | [`RSAKeyPairOptions`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.RSAKeyPairOptions.md)<``"der"``, ``"pem"``\> |

#### Returns

`Promise`<{ `privateKey`: `string` ; `publicKey`: [`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer)  }\>

▸ **__promisify__**(`type`, `options`): `Promise`<{ `privateKey`: [`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer) ; `publicKey`: [`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer)  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"rsa"`` |
| `options` | [`RSAKeyPairOptions`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.RSAKeyPairOptions.md)<``"der"``, ``"der"``\> |

#### Returns

`Promise`<{ `privateKey`: [`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer) ; `publicKey`: [`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer)  }\>

▸ **__promisify__**(`type`, `options`): `Promise`<[`KeyPairKeyObjectResult`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.KeyPairKeyObjectResult.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"rsa"`` |
| `options` | [`RSAKeyPairKeyObjectOptions`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.RSAKeyPairKeyObjectOptions.md) |

#### Returns

`Promise`<[`KeyPairKeyObjectResult`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.KeyPairKeyObjectResult.md)\>

▸ **__promisify__**(`type`, `options`): `Promise`<{ `privateKey`: `string` ; `publicKey`: `string`  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"rsa-pss"`` |
| `options` | [`RSAPSSKeyPairOptions`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.RSAPSSKeyPairOptions.md)<``"pem"``, ``"pem"``\> |

#### Returns

`Promise`<{ `privateKey`: `string` ; `publicKey`: `string`  }\>

▸ **__promisify__**(`type`, `options`): `Promise`<{ `privateKey`: [`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer) ; `publicKey`: `string`  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"rsa-pss"`` |
| `options` | [`RSAPSSKeyPairOptions`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.RSAPSSKeyPairOptions.md)<``"pem"``, ``"der"``\> |

#### Returns

`Promise`<{ `privateKey`: [`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer) ; `publicKey`: `string`  }\>

▸ **__promisify__**(`type`, `options`): `Promise`<{ `privateKey`: `string` ; `publicKey`: [`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer)  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"rsa-pss"`` |
| `options` | [`RSAPSSKeyPairOptions`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.RSAPSSKeyPairOptions.md)<``"der"``, ``"pem"``\> |

#### Returns

`Promise`<{ `privateKey`: `string` ; `publicKey`: [`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer)  }\>

▸ **__promisify__**(`type`, `options`): `Promise`<{ `privateKey`: [`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer) ; `publicKey`: [`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer)  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"rsa-pss"`` |
| `options` | [`RSAPSSKeyPairOptions`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.RSAPSSKeyPairOptions.md)<``"der"``, ``"der"``\> |

#### Returns

`Promise`<{ `privateKey`: [`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer) ; `publicKey`: [`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer)  }\>

▸ **__promisify__**(`type`, `options`): `Promise`<[`KeyPairKeyObjectResult`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.KeyPairKeyObjectResult.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"rsa-pss"`` |
| `options` | [`RSAPSSKeyPairKeyObjectOptions`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.RSAPSSKeyPairKeyObjectOptions.md) |

#### Returns

`Promise`<[`KeyPairKeyObjectResult`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.KeyPairKeyObjectResult.md)\>

▸ **__promisify__**(`type`, `options`): `Promise`<{ `privateKey`: `string` ; `publicKey`: `string`  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"dsa"`` |
| `options` | [`DSAKeyPairOptions`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.DSAKeyPairOptions.md)<``"pem"``, ``"pem"``\> |

#### Returns

`Promise`<{ `privateKey`: `string` ; `publicKey`: `string`  }\>

▸ **__promisify__**(`type`, `options`): `Promise`<{ `privateKey`: [`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer) ; `publicKey`: `string`  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"dsa"`` |
| `options` | [`DSAKeyPairOptions`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.DSAKeyPairOptions.md)<``"pem"``, ``"der"``\> |

#### Returns

`Promise`<{ `privateKey`: [`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer) ; `publicKey`: `string`  }\>

▸ **__promisify__**(`type`, `options`): `Promise`<{ `privateKey`: `string` ; `publicKey`: [`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer)  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"dsa"`` |
| `options` | [`DSAKeyPairOptions`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.DSAKeyPairOptions.md)<``"der"``, ``"pem"``\> |

#### Returns

`Promise`<{ `privateKey`: `string` ; `publicKey`: [`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer)  }\>

▸ **__promisify__**(`type`, `options`): `Promise`<{ `privateKey`: [`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer) ; `publicKey`: [`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer)  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"dsa"`` |
| `options` | [`DSAKeyPairOptions`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.DSAKeyPairOptions.md)<``"der"``, ``"der"``\> |

#### Returns

`Promise`<{ `privateKey`: [`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer) ; `publicKey`: [`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer)  }\>

▸ **__promisify__**(`type`, `options`): `Promise`<[`KeyPairKeyObjectResult`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.KeyPairKeyObjectResult.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"dsa"`` |
| `options` | [`DSAKeyPairKeyObjectOptions`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.DSAKeyPairKeyObjectOptions.md) |

#### Returns

`Promise`<[`KeyPairKeyObjectResult`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.KeyPairKeyObjectResult.md)\>

▸ **__promisify__**(`type`, `options`): `Promise`<{ `privateKey`: `string` ; `publicKey`: `string`  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"ec"`` |
| `options` | [`ECKeyPairOptions`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.ECKeyPairOptions.md)<``"pem"``, ``"pem"``\> |

#### Returns

`Promise`<{ `privateKey`: `string` ; `publicKey`: `string`  }\>

▸ **__promisify__**(`type`, `options`): `Promise`<{ `privateKey`: [`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer) ; `publicKey`: `string`  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"ec"`` |
| `options` | [`ECKeyPairOptions`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.ECKeyPairOptions.md)<``"pem"``, ``"der"``\> |

#### Returns

`Promise`<{ `privateKey`: [`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer) ; `publicKey`: `string`  }\>

▸ **__promisify__**(`type`, `options`): `Promise`<{ `privateKey`: `string` ; `publicKey`: [`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer)  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"ec"`` |
| `options` | [`ECKeyPairOptions`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.ECKeyPairOptions.md)<``"der"``, ``"pem"``\> |

#### Returns

`Promise`<{ `privateKey`: `string` ; `publicKey`: [`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer)  }\>

▸ **__promisify__**(`type`, `options`): `Promise`<{ `privateKey`: [`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer) ; `publicKey`: [`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer)  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"ec"`` |
| `options` | [`ECKeyPairOptions`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.ECKeyPairOptions.md)<``"der"``, ``"der"``\> |

#### Returns

`Promise`<{ `privateKey`: [`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer) ; `publicKey`: [`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer)  }\>

▸ **__promisify__**(`type`, `options`): `Promise`<[`KeyPairKeyObjectResult`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.KeyPairKeyObjectResult.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"ec"`` |
| `options` | [`ECKeyPairKeyObjectOptions`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.ECKeyPairKeyObjectOptions.md) |

#### Returns

`Promise`<[`KeyPairKeyObjectResult`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.KeyPairKeyObjectResult.md)\>

▸ **__promisify__**(`type`, `options`): `Promise`<{ `privateKey`: `string` ; `publicKey`: `string`  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"ed25519"`` |
| `options` | [`ED25519KeyPairOptions`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.ED25519KeyPairOptions.md)<``"pem"``, ``"pem"``\> |

#### Returns

`Promise`<{ `privateKey`: `string` ; `publicKey`: `string`  }\>

▸ **__promisify__**(`type`, `options`): `Promise`<{ `privateKey`: [`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer) ; `publicKey`: `string`  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"ed25519"`` |
| `options` | [`ED25519KeyPairOptions`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.ED25519KeyPairOptions.md)<``"pem"``, ``"der"``\> |

#### Returns

`Promise`<{ `privateKey`: [`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer) ; `publicKey`: `string`  }\>

▸ **__promisify__**(`type`, `options`): `Promise`<{ `privateKey`: `string` ; `publicKey`: [`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer)  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"ed25519"`` |
| `options` | [`ED25519KeyPairOptions`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.ED25519KeyPairOptions.md)<``"der"``, ``"pem"``\> |

#### Returns

`Promise`<{ `privateKey`: `string` ; `publicKey`: [`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer)  }\>

▸ **__promisify__**(`type`, `options`): `Promise`<{ `privateKey`: [`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer) ; `publicKey`: [`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer)  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"ed25519"`` |
| `options` | [`ED25519KeyPairOptions`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.ED25519KeyPairOptions.md)<``"der"``, ``"der"``\> |

#### Returns

`Promise`<{ `privateKey`: [`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer) ; `publicKey`: [`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer)  }\>

▸ **__promisify__**(`type`, `options?`): `Promise`<[`KeyPairKeyObjectResult`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.KeyPairKeyObjectResult.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"ed25519"`` |
| `options?` | [`ED25519KeyPairKeyObjectOptions`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.ED25519KeyPairKeyObjectOptions.md) |

#### Returns

`Promise`<[`KeyPairKeyObjectResult`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.KeyPairKeyObjectResult.md)\>

▸ **__promisify__**(`type`, `options`): `Promise`<{ `privateKey`: `string` ; `publicKey`: `string`  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"ed448"`` |
| `options` | [`ED448KeyPairOptions`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.ED448KeyPairOptions.md)<``"pem"``, ``"pem"``\> |

#### Returns

`Promise`<{ `privateKey`: `string` ; `publicKey`: `string`  }\>

▸ **__promisify__**(`type`, `options`): `Promise`<{ `privateKey`: [`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer) ; `publicKey`: `string`  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"ed448"`` |
| `options` | [`ED448KeyPairOptions`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.ED448KeyPairOptions.md)<``"pem"``, ``"der"``\> |

#### Returns

`Promise`<{ `privateKey`: [`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer) ; `publicKey`: `string`  }\>

▸ **__promisify__**(`type`, `options`): `Promise`<{ `privateKey`: `string` ; `publicKey`: [`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer)  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"ed448"`` |
| `options` | [`ED448KeyPairOptions`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.ED448KeyPairOptions.md)<``"der"``, ``"pem"``\> |

#### Returns

`Promise`<{ `privateKey`: `string` ; `publicKey`: [`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer)  }\>

▸ **__promisify__**(`type`, `options`): `Promise`<{ `privateKey`: [`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer) ; `publicKey`: [`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer)  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"ed448"`` |
| `options` | [`ED448KeyPairOptions`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.ED448KeyPairOptions.md)<``"der"``, ``"der"``\> |

#### Returns

`Promise`<{ `privateKey`: [`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer) ; `publicKey`: [`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer)  }\>

▸ **__promisify__**(`type`, `options?`): `Promise`<[`KeyPairKeyObjectResult`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.KeyPairKeyObjectResult.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"ed448"`` |
| `options?` | [`ED448KeyPairKeyObjectOptions`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.ED448KeyPairKeyObjectOptions.md) |

#### Returns

`Promise`<[`KeyPairKeyObjectResult`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.KeyPairKeyObjectResult.md)\>

▸ **__promisify__**(`type`, `options`): `Promise`<{ `privateKey`: `string` ; `publicKey`: `string`  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"x25519"`` |
| `options` | [`X25519KeyPairOptions`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.X25519KeyPairOptions.md)<``"pem"``, ``"pem"``\> |

#### Returns

`Promise`<{ `privateKey`: `string` ; `publicKey`: `string`  }\>

▸ **__promisify__**(`type`, `options`): `Promise`<{ `privateKey`: [`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer) ; `publicKey`: `string`  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"x25519"`` |
| `options` | [`X25519KeyPairOptions`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.X25519KeyPairOptions.md)<``"pem"``, ``"der"``\> |

#### Returns

`Promise`<{ `privateKey`: [`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer) ; `publicKey`: `string`  }\>

▸ **__promisify__**(`type`, `options`): `Promise`<{ `privateKey`: `string` ; `publicKey`: [`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer)  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"x25519"`` |
| `options` | [`X25519KeyPairOptions`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.X25519KeyPairOptions.md)<``"der"``, ``"pem"``\> |

#### Returns

`Promise`<{ `privateKey`: `string` ; `publicKey`: [`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer)  }\>

▸ **__promisify__**(`type`, `options`): `Promise`<{ `privateKey`: [`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer) ; `publicKey`: [`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer)  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"x25519"`` |
| `options` | [`X25519KeyPairOptions`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.X25519KeyPairOptions.md)<``"der"``, ``"der"``\> |

#### Returns

`Promise`<{ `privateKey`: [`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer) ; `publicKey`: [`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer)  }\>

▸ **__promisify__**(`type`, `options?`): `Promise`<[`KeyPairKeyObjectResult`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.KeyPairKeyObjectResult.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"x25519"`` |
| `options?` | [`X25519KeyPairKeyObjectOptions`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.X25519KeyPairKeyObjectOptions.md) |

#### Returns

`Promise`<[`KeyPairKeyObjectResult`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.KeyPairKeyObjectResult.md)\>

▸ **__promisify__**(`type`, `options`): `Promise`<{ `privateKey`: `string` ; `publicKey`: `string`  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"x448"`` |
| `options` | [`X448KeyPairOptions`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.X448KeyPairOptions.md)<``"pem"``, ``"pem"``\> |

#### Returns

`Promise`<{ `privateKey`: `string` ; `publicKey`: `string`  }\>

▸ **__promisify__**(`type`, `options`): `Promise`<{ `privateKey`: [`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer) ; `publicKey`: `string`  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"x448"`` |
| `options` | [`X448KeyPairOptions`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.X448KeyPairOptions.md)<``"pem"``, ``"der"``\> |

#### Returns

`Promise`<{ `privateKey`: [`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer) ; `publicKey`: `string`  }\>

▸ **__promisify__**(`type`, `options`): `Promise`<{ `privateKey`: `string` ; `publicKey`: [`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer)  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"x448"`` |
| `options` | [`X448KeyPairOptions`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.X448KeyPairOptions.md)<``"der"``, ``"pem"``\> |

#### Returns

`Promise`<{ `privateKey`: `string` ; `publicKey`: [`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer)  }\>

▸ **__promisify__**(`type`, `options`): `Promise`<{ `privateKey`: [`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer) ; `publicKey`: [`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer)  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"x448"`` |
| `options` | [`X448KeyPairOptions`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.X448KeyPairOptions.md)<``"der"``, ``"der"``\> |

#### Returns

`Promise`<{ `privateKey`: [`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer) ; `publicKey`: [`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer)  }\>

▸ **__promisify__**(`type`, `options?`): `Promise`<[`KeyPairKeyObjectResult`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.KeyPairKeyObjectResult.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"x448"`` |
| `options?` | [`X448KeyPairKeyObjectOptions`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.X448KeyPairKeyObjectOptions.md) |

#### Returns

`Promise`<[`KeyPairKeyObjectResult`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.KeyPairKeyObjectResult.md)\>
