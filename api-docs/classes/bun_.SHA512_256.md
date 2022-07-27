[bun-types](https://github.com/oven-sh/bun-types/blob/master/api-docs/README.md) / [Exports](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules.md) / ["bun"](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/bun_.md) / SHA512\_256

# Class: SHA512\_256

["bun"](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/bun_.md).SHA512_256

See also [sha](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/bun_.md#sha)

## Hierarchy

- [`CryptoHashInterface`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/bun_.CryptoHashInterface.md)<[`SHA512_256`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/bun_.SHA512_256.md)\>

  ↳ **`SHA512_256`**

## Table of contents

### Constructors

- [constructor](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/bun_.SHA512_256.md#constructor)

### Properties

- [byteLength](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/bun_.SHA512_256.md#bytelength)

### Methods

- [digest](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/bun_.SHA512_256.md#digest)
- [update](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/bun_.SHA512_256.md#update)
- [hash](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/bun_.SHA512_256.md#hash)

## Constructors

### constructor

• **new SHA512_256**()

#### Overrides

[CryptoHashInterface](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/bun_.CryptoHashInterface.md).[constructor](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/bun_.CryptoHashInterface.md#constructor)

## Properties

### byteLength

▪ `Static` `Readonly` **byteLength**: ``32``

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

▸ **update**(`data`): [`SHA512_256`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/bun_.SHA512_256.md)

Update the hash with data

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `StringOrBuffer` |

#### Returns

[`SHA512_256`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/bun_.SHA512_256.md)

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
