[bun-types](https://oven-sh.github.io/bun-types/README.md) / [Exports](https://oven-sh.github.io/bun-types/modules.md) / ["crypto"](https://oven-sh.github.io/bun-types/modules/crypto_.md) / CipherInfo

# Interface: CipherInfo

["crypto"](https://oven-sh.github.io/bun-types/modules/crypto_.md).CipherInfo

## Table of contents

### Properties

- [blockSize](https://oven-sh.github.io/bun-types/interfaces/crypto_.CipherInfo.md#blocksize)
- [ivLength](https://oven-sh.github.io/bun-types/interfaces/crypto_.CipherInfo.md#ivlength)
- [keyLength](https://oven-sh.github.io/bun-types/interfaces/crypto_.CipherInfo.md#keylength)
- [mode](https://oven-sh.github.io/bun-types/interfaces/crypto_.CipherInfo.md#mode)
- [name](https://oven-sh.github.io/bun-types/interfaces/crypto_.CipherInfo.md#name)
- [nid](https://oven-sh.github.io/bun-types/interfaces/crypto_.CipherInfo.md#nid)

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

• **mode**: [`CipherMode`](https://oven-sh.github.io/bun-types/modules/crypto_.md#ciphermode)

The cipher mode.

___

### name

• **name**: `string`

The name of the cipher.

___

### nid

• **nid**: `number`

The nid of the cipher.
