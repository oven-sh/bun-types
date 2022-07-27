[bun-types](https://github.com/oven-sh/bun-types/blob/master/api-docs/README.md) / [Exports](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules.md) / ["zlib"](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/zlib_.md) / BrotliOptions

# Interface: BrotliOptions

["zlib"](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/zlib_.md).BrotliOptions

## Table of contents

### Properties

- [chunkSize](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/zlib_.BrotliOptions.md#chunksize)
- [finishFlush](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/zlib_.BrotliOptions.md#finishflush)
- [flush](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/zlib_.BrotliOptions.md#flush)
- [maxOutputLength](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/zlib_.BrotliOptions.md#maxoutputlength)
- [params](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/zlib_.BrotliOptions.md#params)

## Properties

### chunkSize

• `Optional` **chunkSize**: `number`

**`Default`**

16*1024

___

### finishFlush

• `Optional` **finishFlush**: `number`

**`Default`**

constants.BROTLI_OPERATION_FINISH

___

### flush

• `Optional` **flush**: `number`

**`Default`**

constants.BROTLI_OPERATION_PROCESS

___

### maxOutputLength

• `Optional` **maxOutputLength**: `number`

___

### params

• `Optional` **params**: `Object`

#### Index signature

▪ [key: `number`]: `boolean` \| `number`
