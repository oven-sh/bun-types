[bun-types](https://github.com/oven-sh/bun-types/blob/master/api-docs/README.md) / [Exports](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules.md) / "zlib"

# Namespace: "zlib"

The `zlib` module provides compression functionality implemented using Gzip,
Deflate/Inflate, and Brotli.

To access it:

```js
const zlib = require('zlib');
```

Compression and decompression are built around the Node.js `Streams API`.

Compressing or decompressing a stream (such as a file) can be accomplished by
piping the source stream through a `zlib` `Transform` stream into a destination
stream:

```js
const { createGzip } = require('zlib');
const { pipeline } = require('stream');
const {
  createReadStream,
  createWriteStream
} = require('fs');

const gzip = createGzip();
const source = createReadStream('input.txt');
const destination = createWriteStream('input.txt.gz');

pipeline(source, gzip, destination, (err) => {
  if (err) {
    console.error('An error occurred:', err);
    process.exitCode = 1;
  }
});

// Or, Promisified

const { promisify } = require('util');
const pipe = promisify(pipeline);

async function do_gzip(input, output) {
  const gzip = createGzip();
  const source = createReadStream(input);
  const destination = createWriteStream(output);
  await pipe(source, gzip, destination);
}

do_gzip('input.txt', 'input.txt.gz')
  .catch((err) => {
    console.error('An error occurred:', err);
    process.exitCode = 1;
  });
```

It is also possible to compress or decompress data in a single step:

```js
const { deflate, unzip } = require('zlib');

const input = '.................................';
deflate(input, (err, buffer) => {
  if (err) {
    console.error('An error occurred:', err);
    process.exitCode = 1;
  }
  console.log(buffer.toString('base64'));
});

const buffer = Buffer.from('eJzT0yMAAGTvBe8=', 'base64');
unzip(buffer, (err, buffer) => {
  if (err) {
    console.error('An error occurred:', err);
    process.exitCode = 1;
  }
  console.log(buffer.toString());
});

// Or, Promisified

const { promisify } = require('util');
const do_unzip = promisify(unzip);

do_unzip(buffer)
  .then((buf) => console.log(buf.toString()))
  .catch((err) => {
    console.error('An error occurred:', err);
    process.exitCode = 1;
  });
```

**`See`**

[source](https://github.com/nodejs/node/blob/v18.0.0/lib/zlib.js)

## Table of contents

### Namespaces

- [brotliCompress](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/zlib_.brotliCompress.md)
- [brotliDecompress](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/zlib_.brotliDecompress.md)
- [constants](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/zlib_.constants.md)
- [deflate](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/zlib_.deflate.md)
- [deflateRaw](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/zlib_.deflateRaw.md)
- [gunzip](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/zlib_.gunzip.md)
- [gzip](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/zlib_.gzip.md)
- [inflate](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/zlib_.inflate.md)
- [inflateRaw](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/zlib_.inflateRaw.md)
- [unzip](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/zlib_.unzip.md)

### Interfaces

- [BrotliCompress](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/zlib_.BrotliCompress-1.md)
- [BrotliDecompress](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/zlib_.BrotliDecompress-1.md)
- [BrotliOptions](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/zlib_.BrotliOptions.md)
- [Deflate](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/zlib_.Deflate-1.md)
- [DeflateRaw](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/zlib_.DeflateRaw-1.md)
- [Gunzip](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/zlib_.Gunzip-1.md)
- [Gzip](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/zlib_.Gzip-1.md)
- [Inflate](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/zlib_.Inflate-1.md)
- [InflateRaw](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/zlib_.InflateRaw-1.md)
- [Unzip](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/zlib_.Unzip-1.md)
- [Zlib](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/zlib_.Zlib.md)
- [ZlibOptions](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/zlib_.ZlibOptions.md)
- [ZlibParams](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/zlib_.ZlibParams.md)
- [ZlibReset](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/zlib_.ZlibReset.md)

### Type Aliases

- [CompressCallback](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/zlib_.md#compresscallback)
- [InputType](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/zlib_.md#inputtype)

### Variables

- [Z\_ASCII](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/zlib_.md#z_ascii)
- [Z\_BEST\_COMPRESSION](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/zlib_.md#z_best_compression)
- [Z\_BEST\_SPEED](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/zlib_.md#z_best_speed)
- [Z\_BINARY](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/zlib_.md#z_binary)
- [Z\_BLOCK](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/zlib_.md#z_block)
- [Z\_BUF\_ERROR](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/zlib_.md#z_buf_error)
- [Z\_DATA\_ERROR](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/zlib_.md#z_data_error)
- [Z\_DEFAULT\_COMPRESSION](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/zlib_.md#z_default_compression)
- [Z\_DEFAULT\_STRATEGY](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/zlib_.md#z_default_strategy)
- [Z\_DEFLATED](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/zlib_.md#z_deflated)
- [Z\_ERRNO](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/zlib_.md#z_errno)
- [Z\_FILTERED](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/zlib_.md#z_filtered)
- [Z\_FINISH](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/zlib_.md#z_finish)
- [Z\_FIXED](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/zlib_.md#z_fixed)
- [Z\_FULL\_FLUSH](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/zlib_.md#z_full_flush)
- [Z\_HUFFMAN\_ONLY](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/zlib_.md#z_huffman_only)
- [Z\_MEM\_ERROR](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/zlib_.md#z_mem_error)
- [Z\_NEED\_DICT](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/zlib_.md#z_need_dict)
- [Z\_NO\_COMPRESSION](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/zlib_.md#z_no_compression)
- [Z\_NO\_FLUSH](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/zlib_.md#z_no_flush)
- [Z\_OK](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/zlib_.md#z_ok)
- [Z\_PARTIAL\_FLUSH](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/zlib_.md#z_partial_flush)
- [Z\_RLE](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/zlib_.md#z_rle)
- [Z\_STREAM\_END](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/zlib_.md#z_stream_end)
- [Z\_STREAM\_ERROR](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/zlib_.md#z_stream_error)
- [Z\_SYNC\_FLUSH](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/zlib_.md#z_sync_flush)
- [Z\_TEXT](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/zlib_.md#z_text)
- [Z\_TREES](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/zlib_.md#z_trees)
- [Z\_UNKNOWN](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/zlib_.md#z_unknown)
- [Z\_VERSION\_ERROR](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/zlib_.md#z_version_error)

### Functions

- [brotliCompress](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/zlib_.md#brotlicompress)
- [brotliCompressSync](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/zlib_.md#brotlicompresssync)
- [brotliDecompress](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/zlib_.md#brotlidecompress)
- [brotliDecompressSync](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/zlib_.md#brotlidecompresssync)
- [createBrotliCompress](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/zlib_.md#createbrotlicompress)
- [createBrotliDecompress](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/zlib_.md#createbrotlidecompress)
- [createDeflate](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/zlib_.md#createdeflate)
- [createDeflateRaw](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/zlib_.md#createdeflateraw)
- [createGunzip](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/zlib_.md#creategunzip)
- [createGzip](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/zlib_.md#creategzip)
- [createInflate](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/zlib_.md#createinflate)
- [createInflateRaw](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/zlib_.md#createinflateraw)
- [createUnzip](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/zlib_.md#createunzip)
- [deflate](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/zlib_.md#deflate)
- [deflateRaw](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/zlib_.md#deflateraw)
- [deflateRawSync](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/zlib_.md#deflaterawsync)
- [deflateSync](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/zlib_.md#deflatesync)
- [gunzip](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/zlib_.md#gunzip)
- [gunzipSync](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/zlib_.md#gunzipsync)
- [gzip](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/zlib_.md#gzip)
- [gzipSync](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/zlib_.md#gzipsync)
- [inflate](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/zlib_.md#inflate)
- [inflateRaw](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/zlib_.md#inflateraw)
- [inflateRawSync](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/zlib_.md#inflaterawsync)
- [inflateSync](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/zlib_.md#inflatesync)
- [unzip](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/zlib_.md#unzip)
- [unzipSync](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/zlib_.md#unzipsync)

## Type Aliases

### CompressCallback

Ƭ **CompressCallback**: (`error`: `Error` \| ``null``, `result`: [`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer)) => `void`

#### Type declaration

▸ (`error`, `result`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `error` | `Error` \| ``null`` |
| `result` | [`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer) |

##### Returns

`void`

___

### InputType

Ƭ **InputType**: `string` \| `ArrayBuffer` \| `ArrayBufferView`

## Variables

### Z\_ASCII

• `Const` **Z\_ASCII**: `number`

**`Deprecated`**

___

### Z\_BEST\_COMPRESSION

• `Const` **Z\_BEST\_COMPRESSION**: `number`

**`Deprecated`**

Use `constants.Z_BEST_COMPRESSION`

___

### Z\_BEST\_SPEED

• `Const` **Z\_BEST\_SPEED**: `number`

**`Deprecated`**

Use `constants.Z_BEST_SPEED`

___

### Z\_BINARY

• `Const` **Z\_BINARY**: `number`

**`Deprecated`**

___

### Z\_BLOCK

• `Const` **Z\_BLOCK**: `number`

**`Deprecated`**

Use `constants.Z_BLOCK`

___

### Z\_BUF\_ERROR

• `Const` **Z\_BUF\_ERROR**: `number`

**`Deprecated`**

Use `constants.Z_BUF_ERROR`

___

### Z\_DATA\_ERROR

• `Const` **Z\_DATA\_ERROR**: `number`

**`Deprecated`**

Use `constants.Z_DATA_ERROR`

___

### Z\_DEFAULT\_COMPRESSION

• `Const` **Z\_DEFAULT\_COMPRESSION**: `number`

**`Deprecated`**

Use `constants.Z_DEFAULT_COMPRESSION`

___

### Z\_DEFAULT\_STRATEGY

• `Const` **Z\_DEFAULT\_STRATEGY**: `number`

**`Deprecated`**

Use `constants.Z_DEFAULT_STRATEGY`

___

### Z\_DEFLATED

• `Const` **Z\_DEFLATED**: `number`

**`Deprecated`**

___

### Z\_ERRNO

• `Const` **Z\_ERRNO**: `number`

**`Deprecated`**

Use `constants.Z_ERRNO`

___

### Z\_FILTERED

• `Const` **Z\_FILTERED**: `number`

**`Deprecated`**

Use `constants.Z_FILTERED`

___

### Z\_FINISH

• `Const` **Z\_FINISH**: `number`

**`Deprecated`**

Use `constants.Z_FINISH`

___

### Z\_FIXED

• `Const` **Z\_FIXED**: `number`

**`Deprecated`**

Use `constants.Z_FIXED`

___

### Z\_FULL\_FLUSH

• `Const` **Z\_FULL\_FLUSH**: `number`

**`Deprecated`**

Use `constants.Z_FULL_FLUSH`

___

### Z\_HUFFMAN\_ONLY

• `Const` **Z\_HUFFMAN\_ONLY**: `number`

**`Deprecated`**

Use `constants.Z_HUFFMAN_ONLY`

___

### Z\_MEM\_ERROR

• `Const` **Z\_MEM\_ERROR**: `number`

**`Deprecated`**

Use `constants.Z_MEM_ERROR`

___

### Z\_NEED\_DICT

• `Const` **Z\_NEED\_DICT**: `number`

**`Deprecated`**

Use `constants.Z_NEED_DICT`

___

### Z\_NO\_COMPRESSION

• `Const` **Z\_NO\_COMPRESSION**: `number`

**`Deprecated`**

Use `constants.Z_NO_COMPRESSION`

___

### Z\_NO\_FLUSH

• `Const` **Z\_NO\_FLUSH**: `number`

**`Deprecated`**

Use `constants.Z_NO_FLUSH`

___

### Z\_OK

• `Const` **Z\_OK**: `number`

**`Deprecated`**

Use `constants.Z_OK`

___

### Z\_PARTIAL\_FLUSH

• `Const` **Z\_PARTIAL\_FLUSH**: `number`

**`Deprecated`**

Use `constants.Z_PARTIAL_FLUSH`

___

### Z\_RLE

• `Const` **Z\_RLE**: `number`

**`Deprecated`**

Use `constants.Z_RLE`

___

### Z\_STREAM\_END

• `Const` **Z\_STREAM\_END**: `number`

**`Deprecated`**

Use `constants.Z_STREAM_END`

___

### Z\_STREAM\_ERROR

• `Const` **Z\_STREAM\_ERROR**: `number`

**`Deprecated`**

Use `constants.Z_STREAM_ERROR`

___

### Z\_SYNC\_FLUSH

• `Const` **Z\_SYNC\_FLUSH**: `number`

**`Deprecated`**

Use `constants.Z_SYNC_FLUSH`

___

### Z\_TEXT

• `Const` **Z\_TEXT**: `number`

**`Deprecated`**

___

### Z\_TREES

• `Const` **Z\_TREES**: `number`

**`Deprecated`**

Use `constants.Z_TREES`

___

### Z\_UNKNOWN

• `Const` **Z\_UNKNOWN**: `number`

**`Deprecated`**

___

### Z\_VERSION\_ERROR

• `Const` **Z\_VERSION\_ERROR**: `number`

**`Deprecated`**

Use `constants.Z_VERSION_ERROR`

## Functions

### brotliCompress

▸ **brotliCompress**(`buf`, `options`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `buf` | [`InputType`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/zlib_.md#inputtype) |
| `options` | [`BrotliOptions`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/zlib_.BrotliOptions.md) |
| `callback` | [`CompressCallback`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/zlib_.md#compresscallback) |

#### Returns

`void`

▸ **brotliCompress**(`buf`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `buf` | [`InputType`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/zlib_.md#inputtype) |
| `callback` | [`CompressCallback`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/zlib_.md#compresscallback) |

#### Returns

`void`

▸ **brotliCompress**(`buf`, `options`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `buf` | [`InputType`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/zlib_.md#inputtype) |
| `options` | [`BrotliOptions`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/zlib_.BrotliOptions.md) |
| `callback` | [`CompressCallback`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/zlib_.md#compresscallback) |

#### Returns

`void`

▸ **brotliCompress**(`buf`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `buf` | [`InputType`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/zlib_.md#inputtype) |
| `callback` | [`CompressCallback`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/zlib_.md#compresscallback) |

#### Returns

`void`

___

### brotliCompressSync

▸ **brotliCompressSync**(`buf`, `options?`): [`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer)

Compress a chunk of data with `BrotliCompress`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `buf` | [`InputType`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/zlib_.md#inputtype) |
| `options?` | [`BrotliOptions`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/zlib_.BrotliOptions.md) |

#### Returns

[`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer)

▸ **brotliCompressSync**(`buf`, `options?`): [`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer)

Compress a chunk of data with `BrotliCompress`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `buf` | [`InputType`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/zlib_.md#inputtype) |
| `options?` | [`BrotliOptions`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/zlib_.BrotliOptions.md) |

#### Returns

[`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer)

___

### brotliDecompress

▸ **brotliDecompress**(`buf`, `options`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `buf` | [`InputType`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/zlib_.md#inputtype) |
| `options` | [`BrotliOptions`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/zlib_.BrotliOptions.md) |
| `callback` | [`CompressCallback`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/zlib_.md#compresscallback) |

#### Returns

`void`

▸ **brotliDecompress**(`buf`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `buf` | [`InputType`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/zlib_.md#inputtype) |
| `callback` | [`CompressCallback`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/zlib_.md#compresscallback) |

#### Returns

`void`

▸ **brotliDecompress**(`buf`, `options`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `buf` | [`InputType`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/zlib_.md#inputtype) |
| `options` | [`BrotliOptions`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/zlib_.BrotliOptions.md) |
| `callback` | [`CompressCallback`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/zlib_.md#compresscallback) |

#### Returns

`void`

▸ **brotliDecompress**(`buf`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `buf` | [`InputType`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/zlib_.md#inputtype) |
| `callback` | [`CompressCallback`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/zlib_.md#compresscallback) |

#### Returns

`void`

___

### brotliDecompressSync

▸ **brotliDecompressSync**(`buf`, `options?`): [`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer)

Decompress a chunk of data with `BrotliDecompress`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `buf` | [`InputType`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/zlib_.md#inputtype) |
| `options?` | [`BrotliOptions`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/zlib_.BrotliOptions.md) |

#### Returns

[`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer)

▸ **brotliDecompressSync**(`buf`, `options?`): [`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer)

Decompress a chunk of data with `BrotliDecompress`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `buf` | [`InputType`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/zlib_.md#inputtype) |
| `options?` | [`BrotliOptions`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/zlib_.BrotliOptions.md) |

#### Returns

[`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer)

___

### createBrotliCompress

▸ **createBrotliCompress**(`options?`): [`BrotliCompress`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/zlib_.BrotliCompress-1.md)

Creates and returns a new `BrotliCompress` object.

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`BrotliOptions`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/zlib_.BrotliOptions.md) |

#### Returns

[`BrotliCompress`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/zlib_.BrotliCompress-1.md)

▸ **createBrotliCompress**(`options?`): [`BrotliCompress`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/zlib_.BrotliCompress-1.md)

Creates and returns a new `BrotliCompress` object.

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`BrotliOptions`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/zlib_.BrotliOptions.md) |

#### Returns

[`BrotliCompress`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/zlib_.BrotliCompress-1.md)

___

### createBrotliDecompress

▸ **createBrotliDecompress**(`options?`): [`BrotliDecompress`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/zlib_.BrotliDecompress-1.md)

Creates and returns a new `BrotliDecompress` object.

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`BrotliOptions`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/zlib_.BrotliOptions.md) |

#### Returns

[`BrotliDecompress`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/zlib_.BrotliDecompress-1.md)

▸ **createBrotliDecompress**(`options?`): [`BrotliDecompress`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/zlib_.BrotliDecompress-1.md)

Creates and returns a new `BrotliDecompress` object.

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`BrotliOptions`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/zlib_.BrotliOptions.md) |

#### Returns

[`BrotliDecompress`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/zlib_.BrotliDecompress-1.md)

___

### createDeflate

▸ **createDeflate**(`options?`): [`Deflate`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/zlib_.Deflate-1.md)

Creates and returns a new `Deflate` object.

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`ZlibOptions`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/zlib_.ZlibOptions.md) |

#### Returns

[`Deflate`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/zlib_.Deflate-1.md)

▸ **createDeflate**(`options?`): [`Deflate`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/zlib_.Deflate-1.md)

Creates and returns a new `Deflate` object.

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`ZlibOptions`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/zlib_.ZlibOptions.md) |

#### Returns

[`Deflate`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/zlib_.Deflate-1.md)

___

### createDeflateRaw

▸ **createDeflateRaw**(`options?`): [`DeflateRaw`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/zlib_.DeflateRaw-1.md)

Creates and returns a new `DeflateRaw` object.

An upgrade of zlib from 1.2.8 to 1.2.11 changed behavior when `windowBits`is set to 8 for raw deflate streams. zlib would automatically set `windowBits`to 9 if was initially set to 8\. Newer
versions of zlib will throw an exception,
so Node.js restored the original behavior of upgrading a value of 8 to 9,
since passing `windowBits = 9` to zlib actually results in a compressed stream
that effectively uses an 8-bit window only.

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`ZlibOptions`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/zlib_.ZlibOptions.md) |

#### Returns

[`DeflateRaw`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/zlib_.DeflateRaw-1.md)

▸ **createDeflateRaw**(`options?`): [`DeflateRaw`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/zlib_.DeflateRaw-1.md)

Creates and returns a new `DeflateRaw` object.

An upgrade of zlib from 1.2.8 to 1.2.11 changed behavior when `windowBits`is set to 8 for raw deflate streams. zlib would automatically set `windowBits`to 9 if was initially set to 8\. Newer
versions of zlib will throw an exception,
so Node.js restored the original behavior of upgrading a value of 8 to 9,
since passing `windowBits = 9` to zlib actually results in a compressed stream
that effectively uses an 8-bit window only.

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`ZlibOptions`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/zlib_.ZlibOptions.md) |

#### Returns

[`DeflateRaw`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/zlib_.DeflateRaw-1.md)

___

### createGunzip

▸ **createGunzip**(`options?`): [`Gunzip`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/zlib_.Gunzip-1.md)

Creates and returns a new `Gunzip` object.

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`ZlibOptions`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/zlib_.ZlibOptions.md) |

#### Returns

[`Gunzip`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/zlib_.Gunzip-1.md)

▸ **createGunzip**(`options?`): [`Gunzip`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/zlib_.Gunzip-1.md)

Creates and returns a new `Gunzip` object.

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`ZlibOptions`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/zlib_.ZlibOptions.md) |

#### Returns

[`Gunzip`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/zlib_.Gunzip-1.md)

___

### createGzip

▸ **createGzip**(`options?`): [`Gzip`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/zlib_.Gzip-1.md)

Creates and returns a new `Gzip` object.
See `example`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`ZlibOptions`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/zlib_.ZlibOptions.md) |

#### Returns

[`Gzip`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/zlib_.Gzip-1.md)

▸ **createGzip**(`options?`): [`Gzip`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/zlib_.Gzip-1.md)

Creates and returns a new `Gzip` object.
See `example`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`ZlibOptions`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/zlib_.ZlibOptions.md) |

#### Returns

[`Gzip`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/zlib_.Gzip-1.md)

___

### createInflate

▸ **createInflate**(`options?`): [`Inflate`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/zlib_.Inflate-1.md)

Creates and returns a new `Inflate` object.

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`ZlibOptions`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/zlib_.ZlibOptions.md) |

#### Returns

[`Inflate`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/zlib_.Inflate-1.md)

▸ **createInflate**(`options?`): [`Inflate`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/zlib_.Inflate-1.md)

Creates and returns a new `Inflate` object.

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`ZlibOptions`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/zlib_.ZlibOptions.md) |

#### Returns

[`Inflate`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/zlib_.Inflate-1.md)

___

### createInflateRaw

▸ **createInflateRaw**(`options?`): [`InflateRaw`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/zlib_.InflateRaw-1.md)

Creates and returns a new `InflateRaw` object.

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`ZlibOptions`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/zlib_.ZlibOptions.md) |

#### Returns

[`InflateRaw`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/zlib_.InflateRaw-1.md)

▸ **createInflateRaw**(`options?`): [`InflateRaw`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/zlib_.InflateRaw-1.md)

Creates and returns a new `InflateRaw` object.

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`ZlibOptions`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/zlib_.ZlibOptions.md) |

#### Returns

[`InflateRaw`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/zlib_.InflateRaw-1.md)

___

### createUnzip

▸ **createUnzip**(`options?`): [`Unzip`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/zlib_.Unzip-1.md)

Creates and returns a new `Unzip` object.

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`ZlibOptions`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/zlib_.ZlibOptions.md) |

#### Returns

[`Unzip`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/zlib_.Unzip-1.md)

▸ **createUnzip**(`options?`): [`Unzip`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/zlib_.Unzip-1.md)

Creates and returns a new `Unzip` object.

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`ZlibOptions`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/zlib_.ZlibOptions.md) |

#### Returns

[`Unzip`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/zlib_.Unzip-1.md)

___

### deflate

▸ **deflate**(`buf`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `buf` | [`InputType`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/zlib_.md#inputtype) |
| `callback` | [`CompressCallback`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/zlib_.md#compresscallback) |

#### Returns

`void`

▸ **deflate**(`buf`, `options`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `buf` | [`InputType`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/zlib_.md#inputtype) |
| `options` | [`ZlibOptions`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/zlib_.ZlibOptions.md) |
| `callback` | [`CompressCallback`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/zlib_.md#compresscallback) |

#### Returns

`void`

▸ **deflate**(`buf`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `buf` | [`InputType`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/zlib_.md#inputtype) |
| `callback` | [`CompressCallback`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/zlib_.md#compresscallback) |

#### Returns

`void`

▸ **deflate**(`buf`, `options`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `buf` | [`InputType`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/zlib_.md#inputtype) |
| `options` | [`ZlibOptions`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/zlib_.ZlibOptions.md) |
| `callback` | [`CompressCallback`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/zlib_.md#compresscallback) |

#### Returns

`void`

___

### deflateRaw

▸ **deflateRaw**(`buf`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `buf` | [`InputType`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/zlib_.md#inputtype) |
| `callback` | [`CompressCallback`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/zlib_.md#compresscallback) |

#### Returns

`void`

▸ **deflateRaw**(`buf`, `options`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `buf` | [`InputType`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/zlib_.md#inputtype) |
| `options` | [`ZlibOptions`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/zlib_.ZlibOptions.md) |
| `callback` | [`CompressCallback`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/zlib_.md#compresscallback) |

#### Returns

`void`

▸ **deflateRaw**(`buf`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `buf` | [`InputType`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/zlib_.md#inputtype) |
| `callback` | [`CompressCallback`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/zlib_.md#compresscallback) |

#### Returns

`void`

▸ **deflateRaw**(`buf`, `options`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `buf` | [`InputType`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/zlib_.md#inputtype) |
| `options` | [`ZlibOptions`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/zlib_.ZlibOptions.md) |
| `callback` | [`CompressCallback`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/zlib_.md#compresscallback) |

#### Returns

`void`

___

### deflateRawSync

▸ **deflateRawSync**(`buf`, `options?`): [`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer)

Compress a chunk of data with `DeflateRaw`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `buf` | [`InputType`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/zlib_.md#inputtype) |
| `options?` | [`ZlibOptions`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/zlib_.ZlibOptions.md) |

#### Returns

[`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer)

▸ **deflateRawSync**(`buf`, `options?`): [`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer)

Compress a chunk of data with `DeflateRaw`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `buf` | [`InputType`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/zlib_.md#inputtype) |
| `options?` | [`ZlibOptions`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/zlib_.ZlibOptions.md) |

#### Returns

[`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer)

___

### deflateSync

▸ **deflateSync**(`buf`, `options?`): [`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer)

Compress a chunk of data with `Deflate`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `buf` | [`InputType`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/zlib_.md#inputtype) |
| `options?` | [`ZlibOptions`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/zlib_.ZlibOptions.md) |

#### Returns

[`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer)

▸ **deflateSync**(`buf`, `options?`): [`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer)

Compress a chunk of data with `Deflate`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `buf` | [`InputType`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/zlib_.md#inputtype) |
| `options?` | [`ZlibOptions`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/zlib_.ZlibOptions.md) |

#### Returns

[`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer)

___

### gunzip

▸ **gunzip**(`buf`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `buf` | [`InputType`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/zlib_.md#inputtype) |
| `callback` | [`CompressCallback`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/zlib_.md#compresscallback) |

#### Returns

`void`

▸ **gunzip**(`buf`, `options`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `buf` | [`InputType`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/zlib_.md#inputtype) |
| `options` | [`ZlibOptions`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/zlib_.ZlibOptions.md) |
| `callback` | [`CompressCallback`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/zlib_.md#compresscallback) |

#### Returns

`void`

▸ **gunzip**(`buf`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `buf` | [`InputType`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/zlib_.md#inputtype) |
| `callback` | [`CompressCallback`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/zlib_.md#compresscallback) |

#### Returns

`void`

▸ **gunzip**(`buf`, `options`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `buf` | [`InputType`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/zlib_.md#inputtype) |
| `options` | [`ZlibOptions`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/zlib_.ZlibOptions.md) |
| `callback` | [`CompressCallback`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/zlib_.md#compresscallback) |

#### Returns

`void`

___

### gunzipSync

▸ **gunzipSync**(`buf`, `options?`): [`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer)

Decompress a chunk of data with `Gunzip`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `buf` | [`InputType`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/zlib_.md#inputtype) |
| `options?` | [`ZlibOptions`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/zlib_.ZlibOptions.md) |

#### Returns

[`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer)

▸ **gunzipSync**(`buf`, `options?`): [`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer)

Decompress a chunk of data with `Gunzip`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `buf` | [`InputType`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/zlib_.md#inputtype) |
| `options?` | [`ZlibOptions`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/zlib_.ZlibOptions.md) |

#### Returns

[`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer)

___

### gzip

▸ **gzip**(`buf`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `buf` | [`InputType`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/zlib_.md#inputtype) |
| `callback` | [`CompressCallback`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/zlib_.md#compresscallback) |

#### Returns

`void`

▸ **gzip**(`buf`, `options`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `buf` | [`InputType`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/zlib_.md#inputtype) |
| `options` | [`ZlibOptions`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/zlib_.ZlibOptions.md) |
| `callback` | [`CompressCallback`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/zlib_.md#compresscallback) |

#### Returns

`void`

▸ **gzip**(`buf`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `buf` | [`InputType`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/zlib_.md#inputtype) |
| `callback` | [`CompressCallback`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/zlib_.md#compresscallback) |

#### Returns

`void`

▸ **gzip**(`buf`, `options`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `buf` | [`InputType`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/zlib_.md#inputtype) |
| `options` | [`ZlibOptions`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/zlib_.ZlibOptions.md) |
| `callback` | [`CompressCallback`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/zlib_.md#compresscallback) |

#### Returns

`void`

___

### gzipSync

▸ **gzipSync**(`buf`, `options?`): [`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer)

Compress a chunk of data with `Gzip`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `buf` | [`InputType`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/zlib_.md#inputtype) |
| `options?` | [`ZlibOptions`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/zlib_.ZlibOptions.md) |

#### Returns

[`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer)

▸ **gzipSync**(`buf`, `options?`): [`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer)

Compress a chunk of data with `Gzip`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `buf` | [`InputType`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/zlib_.md#inputtype) |
| `options?` | [`ZlibOptions`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/zlib_.ZlibOptions.md) |

#### Returns

[`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer)

___

### inflate

▸ **inflate**(`buf`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `buf` | [`InputType`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/zlib_.md#inputtype) |
| `callback` | [`CompressCallback`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/zlib_.md#compresscallback) |

#### Returns

`void`

▸ **inflate**(`buf`, `options`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `buf` | [`InputType`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/zlib_.md#inputtype) |
| `options` | [`ZlibOptions`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/zlib_.ZlibOptions.md) |
| `callback` | [`CompressCallback`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/zlib_.md#compresscallback) |

#### Returns

`void`

▸ **inflate**(`buf`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `buf` | [`InputType`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/zlib_.md#inputtype) |
| `callback` | [`CompressCallback`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/zlib_.md#compresscallback) |

#### Returns

`void`

▸ **inflate**(`buf`, `options`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `buf` | [`InputType`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/zlib_.md#inputtype) |
| `options` | [`ZlibOptions`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/zlib_.ZlibOptions.md) |
| `callback` | [`CompressCallback`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/zlib_.md#compresscallback) |

#### Returns

`void`

___

### inflateRaw

▸ **inflateRaw**(`buf`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `buf` | [`InputType`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/zlib_.md#inputtype) |
| `callback` | [`CompressCallback`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/zlib_.md#compresscallback) |

#### Returns

`void`

▸ **inflateRaw**(`buf`, `options`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `buf` | [`InputType`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/zlib_.md#inputtype) |
| `options` | [`ZlibOptions`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/zlib_.ZlibOptions.md) |
| `callback` | [`CompressCallback`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/zlib_.md#compresscallback) |

#### Returns

`void`

▸ **inflateRaw**(`buf`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `buf` | [`InputType`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/zlib_.md#inputtype) |
| `callback` | [`CompressCallback`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/zlib_.md#compresscallback) |

#### Returns

`void`

▸ **inflateRaw**(`buf`, `options`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `buf` | [`InputType`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/zlib_.md#inputtype) |
| `options` | [`ZlibOptions`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/zlib_.ZlibOptions.md) |
| `callback` | [`CompressCallback`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/zlib_.md#compresscallback) |

#### Returns

`void`

___

### inflateRawSync

▸ **inflateRawSync**(`buf`, `options?`): [`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer)

Decompress a chunk of data with `InflateRaw`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `buf` | [`InputType`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/zlib_.md#inputtype) |
| `options?` | [`ZlibOptions`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/zlib_.ZlibOptions.md) |

#### Returns

[`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer)

▸ **inflateRawSync**(`buf`, `options?`): [`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer)

Decompress a chunk of data with `InflateRaw`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `buf` | [`InputType`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/zlib_.md#inputtype) |
| `options?` | [`ZlibOptions`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/zlib_.ZlibOptions.md) |

#### Returns

[`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer)

___

### inflateSync

▸ **inflateSync**(`buf`, `options?`): [`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer)

Decompress a chunk of data with `Inflate`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `buf` | [`InputType`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/zlib_.md#inputtype) |
| `options?` | [`ZlibOptions`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/zlib_.ZlibOptions.md) |

#### Returns

[`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer)

▸ **inflateSync**(`buf`, `options?`): [`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer)

Decompress a chunk of data with `Inflate`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `buf` | [`InputType`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/zlib_.md#inputtype) |
| `options?` | [`ZlibOptions`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/zlib_.ZlibOptions.md) |

#### Returns

[`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer)

___

### unzip

▸ **unzip**(`buf`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `buf` | [`InputType`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/zlib_.md#inputtype) |
| `callback` | [`CompressCallback`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/zlib_.md#compresscallback) |

#### Returns

`void`

▸ **unzip**(`buf`, `options`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `buf` | [`InputType`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/zlib_.md#inputtype) |
| `options` | [`ZlibOptions`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/zlib_.ZlibOptions.md) |
| `callback` | [`CompressCallback`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/zlib_.md#compresscallback) |

#### Returns

`void`

▸ **unzip**(`buf`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `buf` | [`InputType`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/zlib_.md#inputtype) |
| `callback` | [`CompressCallback`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/zlib_.md#compresscallback) |

#### Returns

`void`

▸ **unzip**(`buf`, `options`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `buf` | [`InputType`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/zlib_.md#inputtype) |
| `options` | [`ZlibOptions`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/zlib_.ZlibOptions.md) |
| `callback` | [`CompressCallback`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/zlib_.md#compresscallback) |

#### Returns

`void`

___

### unzipSync

▸ **unzipSync**(`buf`, `options?`): [`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer)

Decompress a chunk of data with `Unzip`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `buf` | [`InputType`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/zlib_.md#inputtype) |
| `options?` | [`ZlibOptions`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/zlib_.ZlibOptions.md) |

#### Returns

[`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer)

▸ **unzipSync**(`buf`, `options?`): [`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer)

Decompress a chunk of data with `Unzip`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `buf` | [`InputType`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/zlib_.md#inputtype) |
| `options?` | [`ZlibOptions`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/zlib_.ZlibOptions.md) |

#### Returns

[`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer)
