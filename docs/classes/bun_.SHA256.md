[bun-types](https://oven-sh.github.io/bun-types/README.md) / [Exports](https://oven-sh.github.io/bun-types/modules.md) / ["bun"](https://oven-sh.github.io/bun-types/modules/bun_.md) / SHA256

# Class: SHA256

["bun"](https://oven-sh.github.io/bun-types/modules/bun_.md).SHA256

This class only exists in types

## Hierarchy

- [`CryptoHashInterface`](https://oven-sh.github.io/bun-types/classes/bun_.CryptoHashInterface.md)<[`SHA256`](https://oven-sh.github.io/bun-types/classes/bun_.SHA256.md)\>

  ↳ **`SHA256`**

## Table of contents

### Constructors

- [constructor](https://oven-sh.github.io/bun-types/classes/bun_.SHA256.md#constructor)

### Properties

- [byteLength](https://oven-sh.github.io/bun-types/classes/bun_.SHA256.md#bytelength)

### Methods

- [digest](https://oven-sh.github.io/bun-types/classes/bun_.SHA256.md#digest)
- [update](https://oven-sh.github.io/bun-types/classes/bun_.SHA256.md#update)
- [hash](https://oven-sh.github.io/bun-types/classes/bun_.SHA256.md#hash)

## Constructors

### constructor

• **new SHA256**()

#### Overrides

[CryptoHashInterface](https://oven-sh.github.io/bun-types/classes/bun_.CryptoHashInterface.md).[constructor](https://oven-sh.github.io/bun-types/classes/bun_.CryptoHashInterface.md#constructor)

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
| `encoding` | [`DigestEncoding`](https://oven-sh.github.io/bun-types/modules/bun_.md#digestencoding) | `DigestEncoding` to return the hash in. If none is provided, it will return a `Uint8Array`. |

#### Returns

`string`

#### Inherited from

[CryptoHashInterface](https://oven-sh.github.io/bun-types/classes/bun_.CryptoHashInterface.md).[digest](https://oven-sh.github.io/bun-types/classes/bun_.CryptoHashInterface.md#digest)

▸ **digest**(`hashInto?`): `TypedArray`

Finalize the hash

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `hashInto?` | `TypedArray` | `TypedArray` to write the hash into. Faster than creating a new one each time |

#### Returns

`TypedArray`

#### Inherited from

[CryptoHashInterface](https://oven-sh.github.io/bun-types/classes/bun_.CryptoHashInterface.md).[digest](https://oven-sh.github.io/bun-types/classes/bun_.CryptoHashInterface.md#digest)

___

### update

▸ **update**(`data`): [`SHA256`](https://oven-sh.github.io/bun-types/classes/bun_.SHA256.md)

Update the hash with data

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `StringOrBuffer` |

#### Returns

[`SHA256`](https://oven-sh.github.io/bun-types/classes/bun_.SHA256.md)

#### Inherited from

[CryptoHashInterface](https://oven-sh.github.io/bun-types/classes/bun_.CryptoHashInterface.md).[update](https://oven-sh.github.io/bun-types/classes/bun_.CryptoHashInterface.md#update)

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

[CryptoHashInterface](https://oven-sh.github.io/bun-types/classes/bun_.CryptoHashInterface.md).[hash](https://oven-sh.github.io/bun-types/classes/bun_.CryptoHashInterface.md#hash)

▸ `Static` **hash**(`input`, `encoding`): `string`

Run the hash over the given data

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `input` | `StringOrBuffer` | `string`, `Uint8Array`, or `ArrayBuffer` to hash. `Uint8Array` or `ArrayBuffer` is faster. |
| `encoding` | [`DigestEncoding`](https://oven-sh.github.io/bun-types/modules/bun_.md#digestencoding) | `DigestEncoding` to return the hash in |

#### Returns

`string`

#### Inherited from

[CryptoHashInterface](https://oven-sh.github.io/bun-types/classes/bun_.CryptoHashInterface.md).[hash](https://oven-sh.github.io/bun-types/classes/bun_.CryptoHashInterface.md#hash)
