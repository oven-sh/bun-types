[bun-types](https://oven-sh.github.io/bun-types/README.md) / [Exports](https://oven-sh.github.io/bun-types/modules.md) / ["bun"](https://oven-sh.github.io/bun-types/modules/bun_.md) / CryptoHashInterface

# Class: CryptoHashInterface<T\>

["bun"](https://oven-sh.github.io/bun-types/modules/bun_.md).CryptoHashInterface

This class only exists in types

## Type parameters

| Name |
| :------ |
| `T` |

## Hierarchy

- **`CryptoHashInterface`**

  ↳ [`SHA1`](https://oven-sh.github.io/bun-types/classes/bun_.SHA1.md)

  ↳ [`MD5`](https://oven-sh.github.io/bun-types/classes/bun_.MD5.md)

  ↳ [`MD4`](https://oven-sh.github.io/bun-types/classes/bun_.MD4.md)

  ↳ [`SHA224`](https://oven-sh.github.io/bun-types/classes/bun_.SHA224.md)

  ↳ [`SHA512`](https://oven-sh.github.io/bun-types/classes/bun_.SHA512.md)

  ↳ [`SHA384`](https://oven-sh.github.io/bun-types/classes/bun_.SHA384.md)

  ↳ [`SHA256`](https://oven-sh.github.io/bun-types/classes/bun_.SHA256.md)

  ↳ [`SHA512_256`](https://oven-sh.github.io/bun-types/classes/bun_.SHA512_256.md)

## Table of contents

### Constructors

- [constructor](https://oven-sh.github.io/bun-types/classes/bun_.CryptoHashInterface.md#constructor)

### Methods

- [digest](https://oven-sh.github.io/bun-types/classes/bun_.CryptoHashInterface.md#digest)
- [update](https://oven-sh.github.io/bun-types/classes/bun_.CryptoHashInterface.md#update)
- [hash](https://oven-sh.github.io/bun-types/classes/bun_.CryptoHashInterface.md#hash)

## Constructors

### constructor

• **new CryptoHashInterface**<`T`\>()

#### Type parameters

| Name |
| :------ |
| `T` |

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

▸ **digest**(`hashInto?`): `TypedArray`

Finalize the hash

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `hashInto?` | `TypedArray` | `TypedArray` to write the hash into. Faster than creating a new one each time |

#### Returns

`TypedArray`

___

### update

▸ **update**(`data`): `T`

Update the hash with data

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `StringOrBuffer` |

#### Returns

`T`

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

▸ `Static` **hash**(`input`, `encoding`): `string`

Run the hash over the given data

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `input` | `StringOrBuffer` | `string`, `Uint8Array`, or `ArrayBuffer` to hash. `Uint8Array` or `ArrayBuffer` is faster. |
| `encoding` | [`DigestEncoding`](https://oven-sh.github.io/bun-types/modules/bun_.md#digestencoding) | `DigestEncoding` to return the hash in |

#### Returns

`string`
