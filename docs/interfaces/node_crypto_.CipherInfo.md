[bun-types](https://github.com/oven-sh/bun-types/blob/master/api-docs/README.md) / [Exports](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules.md) / ["node:crypto"](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/node_crypto_.md) / CipherInfo

# Interface: CipherInfo

["node:crypto"](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/node_crypto_.md).CipherInfo

## Table of contents

### Properties

- [blockSize](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/node_crypto_.CipherInfo.md#blocksize)
- [ivLength](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/node_crypto_.CipherInfo.md#ivlength)
- [keyLength](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/node_crypto_.CipherInfo.md#keylength)
- [mode](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/node_crypto_.CipherInfo.md#mode)
- [name](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/node_crypto_.CipherInfo.md#name)
- [nid](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/node_crypto_.CipherInfo.md#nid)

## Properties

### blockSize

• `Optional` **blockSize**: `number`

The block size of the cipher in bytes.
This property is omitted when mode is 'stream'.

___

### ivLength

• `Optional` **ivLength**: `number`

The expected or default initialization vector length in bytes.
This property is omitted if the cipher does not use an initialization vector.

___

### keyLength

• **keyLength**: `number`

The expected or default key length in bytes.

___

### mode

• **mode**: [`CipherMode`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/crypto_.md#ciphermode)

The cipher mode.

___

### name

• **name**: `string`

The name of the cipher.

___

### nid

• **nid**: `number`

The nid of the cipher.
