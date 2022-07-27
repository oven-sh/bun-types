[bun-types](https://github.com/oven-sh/bun-types/blob/master/api-docs/README.md) / [Exports](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules.md) / ["bun"](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/bun_.md) / SHA1

# Class: SHA1

["bun"](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/bun_.md).SHA1

This is not the default because it's not cryptographically secure and it's slower than [SHA512](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/bun_.SHA512.md)

Consider using the ugly-named [SHA512_256](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/bun_.SHA512_256.md) instead

## Hierarchy

- [`CryptoHashInterface`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/bun_.CryptoHashInterface.md)<[`SHA1`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/bun_.SHA1.md)\>

  ↳ **`SHA1`**

## Table of contents

### Constructors

- [constructor](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/bun_.SHA1.md#constructor)

### Properties

- [byteLength](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/bun_.SHA1.md#bytelength)

### Methods

- [digest](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/bun_.SHA1.md#digest)
- [update](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/bun_.SHA1.md#update)
- [hash](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/bun_.SHA1.md#hash)

## Constructors

### constructor

• **new SHA1**()

#### Overrides

[CryptoHashInterface](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/bun_.CryptoHashInterface.md).[constructor](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/bun_.CryptoHashInterface.md#constructor)

## Properties

### byteLength

▪ `Static` `Readonly` **byteLength**: ``20``

The number of bytes the hash will produce

## Methods

### digest

▸ **digest**(`encoding`): `string`

Finalize the hash

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `encoding` | [`DigestEncoding`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/bun_.md#digestencoding) | `DigestEncoding` to return the hash in. If none is provided, it will return a `Uint8Array`. |

#### Returns

`string`

#### Inherited from

[CryptoHashInterface](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/bun_.CryptoHashInterface.md).[digest](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/bun_.CryptoHashInterface.md#digest)

▸ **digest**(`hashInto?`): `TypedArray`

Finalize the hash

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `hashInto?` | `TypedArray` | `TypedArray` to write the hash into. Faster than creating a new one each time |

#### Returns

`TypedArray`

#### Inherited from

[CryptoHashInterface](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/bun_.CryptoHashInterface.md).[digest](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/bun_.CryptoHashInterface.md#digest)

___

### update

▸ **update**(`data`): [`SHA1`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/bun_.SHA1.md)

Update the hash with data

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `StringOrBuffer` |

#### Returns

[`SHA1`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/bun_.SHA1.md)

#### Inherited from

[CryptoHashInterface](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/bun_.CryptoHashInterface.md).[update](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/bun_.CryptoHashInterface.md#update)

___

### hash

▸ `Static` **hash**(`input`, `hashInto?`): `TypedArray`

Run the hash over the given data

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `input` | `StringOrBuffer` | `string`, `Uint8Array`, or `ArrayBuffer` to hash. `Uint8Array` or `ArrayBuffer` is faster. |
| `hashInto?` | `TypedArray` | `TypedArray` to write the hash into. Faster than creating a new one each time |

#### Returns

`TypedArray`

#### Inherited from

[CryptoHashInterface](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/bun_.CryptoHashInterface.md).[hash](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/bun_.CryptoHashInterface.md#hash)

▸ `Static` **hash**(`input`, `encoding`): `string`

Run the hash over the given data

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `input` | `StringOrBuffer` | `string`, `Uint8Array`, or `ArrayBuffer` to hash. `Uint8Array` or `ArrayBuffer` is faster. |
| `encoding` | [`DigestEncoding`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/bun_.md#digestencoding) | `DigestEncoding` to return the hash in |

#### Returns

`string`

#### Inherited from

[CryptoHashInterface](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/bun_.CryptoHashInterface.md).[hash](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/bun_.CryptoHashInterface.md#hash)
