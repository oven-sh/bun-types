[bun-types](https://oven-sh.github.io/bun-types/README.md) / [Exports](https://oven-sh.github.io/bun-types/modules.md) / "bun"

# Namespace: "bun"

Bun.js runtime APIs

**`Example`**

```js
import {file} from 'bun';

// Log the file to the console
const input = await file('/path/to/file.txt').text();
console.log(input);
```

This module aliases `globalThis.Bun`.

## Table of contents

### Classes

- [ArrayBufferSink](https://oven-sh.github.io/bun-types/classes/bun_.ArrayBufferSink.md)
- [CryptoHashInterface](https://oven-sh.github.io/bun-types/classes/bun_.CryptoHashInterface.md)
- [MD4](https://oven-sh.github.io/bun-types/classes/bun_.MD4.md)
- [MD5](https://oven-sh.github.io/bun-types/classes/bun_.MD5.md)
- [SHA1](https://oven-sh.github.io/bun-types/classes/bun_.SHA1.md)
- [SHA224](https://oven-sh.github.io/bun-types/classes/bun_.SHA224.md)
- [SHA256](https://oven-sh.github.io/bun-types/classes/bun_.SHA256.md)
- [SHA384](https://oven-sh.github.io/bun-types/classes/bun_.SHA384.md)
- [SHA512](https://oven-sh.github.io/bun-types/classes/bun_.SHA512.md)
- [SHA512\_256](https://oven-sh.github.io/bun-types/classes/bun_.SHA512_256.md)
- [Transpiler](https://oven-sh.github.io/bun-types/classes/bun_.Transpiler.md)

### Interfaces

- [EditorOptions](https://oven-sh.github.io/bun-types/interfaces/bun_.EditorOptions.md)
- [Errorlike](https://oven-sh.github.io/bun-types/interfaces/bun_.Errorlike.md)
- [FileBlob](https://oven-sh.github.io/bun-types/interfaces/bun_.FileBlob.md)
- [Hash](https://oven-sh.github.io/bun-types/interfaces/bun_.Hash.md)
- [HeapSnapshot](https://oven-sh.github.io/bun-types/interfaces/bun_.HeapSnapshot.md)
- [Import](https://oven-sh.github.io/bun-types/interfaces/bun_.Import.md)
- [MMapOptions](https://oven-sh.github.io/bun-types/interfaces/bun_.MMapOptions.md)
- [SSLAdvancedOptions](https://oven-sh.github.io/bun-types/interfaces/bun_.SSLAdvancedOptions.md)
- [SSLOptions](https://oven-sh.github.io/bun-types/interfaces/bun_.SSLOptions.md)
- [ServeOptions](https://oven-sh.github.io/bun-types/interfaces/bun_.ServeOptions.md)
- [Server](https://oven-sh.github.io/bun-types/interfaces/bun_.Server.md)
- [SystemError](https://oven-sh.github.io/bun-types/interfaces/bun_.SystemError.md)
- [TranspilerOptions](https://oven-sh.github.io/bun-types/interfaces/bun_.TranspilerOptions.md)
- [unsafe](https://oven-sh.github.io/bun-types/interfaces/bun_.unsafe.md)

### Type Aliases

- [DigestEncoding](https://oven-sh.github.io/bun-types/modules/bun_.md#digestencoding)
- [JavaScriptLoader](https://oven-sh.github.io/bun-types/modules/bun_.md#javascriptloader)
- [MacroMap](https://oven-sh.github.io/bun-types/modules/bun_.md#macromap)
- [Platform](https://oven-sh.github.io/bun-types/modules/bun_.md#platform)
- [SSLServeOptions](https://oven-sh.github.io/bun-types/modules/bun_.md#sslserveoptions)
- [Serve](https://oven-sh.github.io/bun-types/modules/bun_.md#serve)
- [ZlibCompressionOptions](https://oven-sh.github.io/bun-types/modules/bun_.md#zlibcompressionoptions)

### Variables

- [enableANSIColors](https://oven-sh.github.io/bun-types/modules/bun_.md#enableansicolors)
- [main](https://oven-sh.github.io/bun-types/modules/bun_.md#main)
- [stderr](https://oven-sh.github.io/bun-types/modules/bun_.md#stderr)
- [stdin](https://oven-sh.github.io/bun-types/modules/bun_.md#stdin)
- [stdout](https://oven-sh.github.io/bun-types/modules/bun_.md#stdout)
- [unsafe](https://oven-sh.github.io/bun-types/modules/bun_.md#unsafe)

### Functions

- [allocUnsafe](https://oven-sh.github.io/bun-types/modules/bun_.md#allocunsafe)
- [concatArrayBuffers](https://oven-sh.github.io/bun-types/modules/bun_.md#concatarraybuffers)
- [deflateSync](https://oven-sh.github.io/bun-types/modules/bun_.md#deflatesync)
- [escapeHTML](https://oven-sh.github.io/bun-types/modules/bun_.md#escapehtml)
- [file](https://oven-sh.github.io/bun-types/modules/bun_.md#file)
- [fileURLToPath](https://oven-sh.github.io/bun-types/modules/bun_.md#fileurltopath)
- [gc](https://oven-sh.github.io/bun-types/modules/bun_.md#gc)
- [generateHeapSnapshot](https://oven-sh.github.io/bun-types/modules/bun_.md#generateheapsnapshot)
- [gunzipSync](https://oven-sh.github.io/bun-types/modules/bun_.md#gunzipsync)
- [gzipSync](https://oven-sh.github.io/bun-types/modules/bun_.md#gzipsync)
- [hash](https://oven-sh.github.io/bun-types/modules/bun_.md#hash)
- [inflateSync](https://oven-sh.github.io/bun-types/modules/bun_.md#inflatesync)
- [inspect](https://oven-sh.github.io/bun-types/modules/bun_.md#inspect)
- [mmap](https://oven-sh.github.io/bun-types/modules/bun_.md#mmap)
- [nanoseconds](https://oven-sh.github.io/bun-types/modules/bun_.md#nanoseconds)
- [openInEditor](https://oven-sh.github.io/bun-types/modules/bun_.md#openineditor)
- [pathToFileURL](https://oven-sh.github.io/bun-types/modules/bun_.md#pathtofileurl)
- [readableStreamToArray](https://oven-sh.github.io/bun-types/modules/bun_.md#readablestreamtoarray)
- [readableStreamToArrayBuffer](https://oven-sh.github.io/bun-types/modules/bun_.md#readablestreamtoarraybuffer)
- [readableStreamToBlob](https://oven-sh.github.io/bun-types/modules/bun_.md#readablestreamtoblob)
- [readableStreamToJSON](https://oven-sh.github.io/bun-types/modules/bun_.md#readablestreamtojson)
- [readableStreamToText](https://oven-sh.github.io/bun-types/modules/bun_.md#readablestreamtotext)
- [resolve](https://oven-sh.github.io/bun-types/modules/bun_.md#resolve)
- [resolveSync](https://oven-sh.github.io/bun-types/modules/bun_.md#resolvesync)
- [serve](https://oven-sh.github.io/bun-types/modules/bun_.md#serve-1)
- [sha](https://oven-sh.github.io/bun-types/modules/bun_.md#sha)
- [shrink](https://oven-sh.github.io/bun-types/modules/bun_.md#shrink)
- [write](https://oven-sh.github.io/bun-types/modules/bun_.md#write)

## Type Aliases

### DigestEncoding

Ƭ **DigestEncoding**: ``"hex"`` \| ``"base64"``

___

### JavaScriptLoader

Ƭ **JavaScriptLoader**: ``"jsx"`` \| ``"js"`` \| ``"ts"`` \| ``"tsx"``

___

### MacroMap

Ƭ **MacroMap**: `Record`<`string`, `Record`<`string`, `string`\>\>

This lets you use macros as regular imports

**`Example`**

```
  {
    "react-relay": {
      "graphql": "bun-macro-relay/bun-macro-relay.tsx"
    }
  }
 ```

___

### Platform

Ƭ **Platform**: ``"bun"`` \| ``"browser"`` \| ``"node"`` \| ``"neutral"``

___

### SSLServeOptions

Ƭ **SSLServeOptions**: [`ServeOptions`](https://oven-sh.github.io/bun-types/interfaces/bun_.ServeOptions.md) & [`SSLOptions`](https://oven-sh.github.io/bun-types/interfaces/bun_.SSLOptions.md) & [`SSLAdvancedOptions`](https://oven-sh.github.io/bun-types/interfaces/bun_.SSLAdvancedOptions.md) & { `serverNames`: `Record`<`string`, [`SSLOptions`](https://oven-sh.github.io/bun-types/interfaces/bun_.SSLOptions.md) & [`SSLAdvancedOptions`](https://oven-sh.github.io/bun-types/interfaces/bun_.SSLAdvancedOptions.md)\>  }

___

### Serve

Ƭ **Serve**: [`SSLServeOptions`](https://oven-sh.github.io/bun-types/modules/bun_.md#sslserveoptions) \| [`ServeOptions`](https://oven-sh.github.io/bun-types/interfaces/bun_.ServeOptions.md)

___

### ZlibCompressionOptions

Ƭ **ZlibCompressionOptions**: `Object`

Compression options for `Bun.deflateSync` and `Bun.gzipSync`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `level?` | ``-1`` \| ``0`` \| ``1`` \| ``2`` \| ``3`` \| ``4`` \| ``5`` \| ``6`` \| ``7`` \| ``8`` \| ``9`` | The compression level to use. Must be between `-1` and `9`. - A value of `-1` uses the default compression level (Currently `6`) - A value of `0` gives no compression - A value of `1` gives least compression, fastest speed - A value of `9` gives best compression, slowest speed |
| `memLevel?` | ``1`` \| ``2`` \| ``3`` \| ``4`` \| ``5`` \| ``6`` \| ``7`` \| ``8`` \| ``9`` | How much memory should be allocated for the internal compression state.  A value of `1` uses minimum memory but is slow and reduces compression ratio.  A value of `9` uses maximum memory for optimal speed. The default is `8`. |
| `strategy?` | `number` | Tunes the compression algorithm.  - `Z_DEFAULT_STRATEGY`: For normal data **(Default)** - `Z_FILTERED`: For data produced by a filter or predictor - `Z_HUFFMAN_ONLY`: Force Huffman encoding only (no string match) - `Z_RLE`: Limit match distances to one (run-length encoding) - `Z_FIXED` prevents the use of dynamic Huffman codes  `Z_RLE` is designed to be almost as fast as `Z_HUFFMAN_ONLY`, but give better compression for PNG image data.  `Z_FILTERED` forces more Huffman coding and less string matching, it is somewhat intermediate between `Z_DEFAULT_STRATEGY` and `Z_HUFFMAN_ONLY`. Filtered data consists mostly of small values with a somewhat random distribution. |
| `windowBits?` | ``-9`` \| ``-10`` \| ``-11`` \| ``-12`` \| ``-13`` \| ``-14`` \| ``-15`` \| ``9`` \| ``10`` \| ``11`` \| ``12`` \| ``13`` \| ``14`` \| ``15`` \| ``25`` \| ``26`` \| ``27`` \| ``28`` \| ``29`` \| ``30`` \| ``31`` | The base 2 logarithm of the window size (the size of the history buffer).  Larger values of this parameter result in better compression at the expense of memory usage.  The following value ranges are supported: - `9..15`: The output will have a zlib header and footer (Deflate) - `-9..-15`: The output will **not** have a zlib header or footer (Raw Deflate) - `25..31` (16+`9..15`): The output will have a gzip header and footer (gzip)  The gzip header will have no file name, no extra data, no comment, no modification time (set to zero) and no header CRC. |

## Variables

### enableANSIColors

• `Const` **enableANSIColors**: `boolean`

Are ANSI colors enabled for stdin and stdout?

Used for [log](https://oven-sh.github.io/bun-types/interfaces/console.md#log)

___

### main

• `Const` **main**: `string`

What script launched bun?

Absolute file path

**`Example`**

```ts
"/never-gonna-give-you-up.js"
```

___

### stderr

• `Const` **stderr**: [`FileBlob`](https://oven-sh.github.io/bun-types/interfaces/bun_.FileBlob.md)

Write to stderr

___

### stdin

• `Const` **stdin**: [`FileBlob`](https://oven-sh.github.io/bun-types/interfaces/bun_.FileBlob.md)

Read from stdin

This is read-only

___

### stdout

• `Const` **stdout**: [`FileBlob`](https://oven-sh.github.io/bun-types/interfaces/bun_.FileBlob.md)

Write to stdout

___

### unsafe

• **unsafe**: [`unsafe`](https://oven-sh.github.io/bun-types/modules/bun_.md#unsafe)

## Functions

### allocUnsafe

▸ **allocUnsafe**(`size`): `Uint8Array`

Allocate a new [`Uint8Array`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Uint8Array) without zeroing the bytes.

This can be 3.5x faster than `new Uint8Array(size)`, but if you send uninitialized memory to your users (even unintentionally), it can potentially leak anything recently in memory.

#### Parameters

| Name | Type |
| :------ | :------ |
| `size` | `number` |

#### Returns

`Uint8Array`

▸ **allocUnsafe**(`size`): `Uint8Array`

Allocate a new [`Uint8Array`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Uint8Array) without zeroing the bytes.

This can be 3.5x faster than `new Uint8Array(size)`, but if you send uninitialized memory to your users (even unintentionally), it can potentially leak anything recently in memory.

#### Parameters

| Name | Type |
| :------ | :------ |
| `size` | `number` |

#### Returns

`Uint8Array`

___

### concatArrayBuffers

▸ **concatArrayBuffers**(`buffers`): `ArrayBuffer`

Concatenate an array of typed arrays into a single `ArrayBuffer`. This is a fast path.

You can do this manually if you'd like, but this function will generally
be a little faster.

If you want a `Uint8Array` instead, consider `Buffer.concat`.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `buffers` | (`ArrayBufferLike` \| `ArrayBufferView`)[] | An array of typed arrays to concatenate. |

#### Returns

`ArrayBuffer`

An `ArrayBuffer` with the data from all the buffers.

Here is similar code to do it manually, except about 30% slower:
```js
  var chunks = [...];
  var size = 0;
  for (const chunk of chunks) {
    size += chunk.byteLength;
  }
  var buffer = new ArrayBuffer(size);
  var view = new Uint8Array(buffer);
  var offset = 0;
  for (const chunk of chunks) {
    view.set(chunk, offset);
    offset += chunk.byteLength;
  }
  return buffer;
```

This function is faster because it uses uninitialized memory when copying. Since the entire
length of the buffer is known, it is safe to use uninitialized memory.

▸ **concatArrayBuffers**(`buffers`): `ArrayBuffer`

Concatenate an array of typed arrays into a single `ArrayBuffer`. This is a fast path.

You can do this manually if you'd like, but this function will generally
be a little faster.

If you want a `Uint8Array` instead, consider `Buffer.concat`.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `buffers` | (`ArrayBufferLike` \| `ArrayBufferView`)[] | An array of typed arrays to concatenate. |

#### Returns

`ArrayBuffer`

An `ArrayBuffer` with the data from all the buffers.

Here is similar code to do it manually, except about 30% slower:
```js
  var chunks = [...];
  var size = 0;
  for (const chunk of chunks) {
    size += chunk.byteLength;
  }
  var buffer = new ArrayBuffer(size);
  var view = new Uint8Array(buffer);
  var offset = 0;
  for (const chunk of chunks) {
    view.set(chunk, offset);
    offset += chunk.byteLength;
  }
  return buffer;
```

This function is faster because it uses uninitialized memory when copying. Since the entire
length of the buffer is known, it is safe to use uninitialized memory.

___

### deflateSync

▸ **deflateSync**(`data`, `options?`): `Uint8Array`

Compresses a chunk of data with `zlib` DEFLATE algorithm.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `data` | `Uint8Array` | The buffer of data to compress |
| `options?` | [`ZlibCompressionOptions`](https://oven-sh.github.io/bun-types/modules/bun_.md#zlibcompressionoptions) | Compression options to use |

#### Returns

`Uint8Array`

The output buffer with the compressed data

▸ **deflateSync**(`data`, `options?`): `Uint8Array`

Compresses a chunk of data with `zlib` DEFLATE algorithm.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `data` | `Uint8Array` | The buffer of data to compress |
| `options?` | [`ZlibCompressionOptions`](https://oven-sh.github.io/bun-types/modules/bun_.md#zlibcompressionoptions) | Compression options to use |

#### Returns

`Uint8Array`

The output buffer with the compressed data

___

### escapeHTML

▸ **escapeHTML**(`input`): `string`

Escape the following characters in a string:

- `"` becomes `"&quot;"`
- `&` becomes `"&amp;"`
- `'` becomes `"&#x27;"`
- `<` becomes `"&lt;"`
- `>` becomes `"&gt;"`

This function is optimized for large input. On an M1X, it processes 480 MB/s -
20 GB/s, depending on how much data is being escaped and whether there is non-ascii
text.

Non-string types will be converted to a string before escaping.

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | `string` \| `number` \| `boolean` \| `object` |

#### Returns

`string`

▸ **escapeHTML**(`input`): `string`

Escape the following characters in a string:

- `"` becomes `"&quot;"`
- `&` becomes `"&amp;"`
- `'` becomes `"&#x27;"`
- `<` becomes `"&lt;"`
- `>` becomes `"&gt;"`

This function is optimized for large input. On an M1X, it processes 480 MB/s -
20 GB/s, depending on how much data is being escaped and whether there is non-ascii
text.

Non-string types will be converted to a string before escaping.

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | `string` \| `number` \| `boolean` \| `object` |

#### Returns

`string`

___

### file

▸ **file**(`path`, `options?`): [`FileBlob`](https://oven-sh.github.io/bun-types/interfaces/bun_.FileBlob.md)

[`Blob`](https://developer.mozilla.org/en-US/docs/Web/API/Blob) powered by the fastest system calls available for operating on files.

This Blob is lazy. That means it won't do any work until you read from it.

- `size` will not be valid until the contents of the file are read at least once.
- `type` is auto-set based on the file extension when possible

**`Example`**

```js
const file = Bun.file("./hello.json");
console.log(file.type); // "application/json"
console.log(await file.json()); // { hello: "world" }
```

**`Example`**

```js
await Bun.write(
  Bun.file("./hello.txt"),
  "Hello, world!"
);
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `path` | `string` | The path to the file (lazily loaded) |
| `options?` | [`BlobPropertyBag`](https://oven-sh.github.io/bun-types/interfaces/BlobPropertyBag.md) | - |

#### Returns

[`FileBlob`](https://oven-sh.github.io/bun-types/interfaces/bun_.FileBlob.md)

▸ **file**(`path`, `options?`): [`FileBlob`](https://oven-sh.github.io/bun-types/interfaces/bun_.FileBlob.md)

`Blob` that leverages the fastest system calls available to operate on files.

This Blob is lazy. It won't do any work until you read from it. Errors propagate as promise rejections.

`Blob.size` will not be valid until the contents of the file are read at least once.
`Blob.type` will have a default set based on the file extension

**`Example`**

```js
const file = Bun.file(new TextEncoder.encode("./hello.json"));
console.log(file.type); // "application/json"
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `path` | `Uint8Array` \| `ArrayBufferLike` | The path to the file as a byte buffer (the buffer is copied) |
| `options?` | [`BlobPropertyBag`](https://oven-sh.github.io/bun-types/interfaces/BlobPropertyBag.md) | - |

#### Returns

[`FileBlob`](https://oven-sh.github.io/bun-types/interfaces/bun_.FileBlob.md)

▸ **file**(`fileDescriptor`, `options?`): [`FileBlob`](https://oven-sh.github.io/bun-types/interfaces/bun_.FileBlob.md)

[`Blob`](https://developer.mozilla.org/en-US/docs/Web/API/Blob) powered by the fastest system calls available for operating on files.

This Blob is lazy. That means it won't do any work until you read from it.

- `size` will not be valid until the contents of the file are read at least once.

**`Example`**

```js
const file = Bun.file(fd);
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `fileDescriptor` | `number` | The file descriptor of the file |
| `options?` | [`BlobPropertyBag`](https://oven-sh.github.io/bun-types/interfaces/BlobPropertyBag.md) | - |

#### Returns

[`FileBlob`](https://oven-sh.github.io/bun-types/interfaces/bun_.FileBlob.md)

▸ **file**(`path`, `options?`): [`FileBlob`](https://oven-sh.github.io/bun-types/interfaces/bun_.FileBlob.md)

[`Blob`](https://developer.mozilla.org/en-US/docs/Web/API/Blob) powered by the fastest system calls available for operating on files.

This Blob is lazy. That means it won't do any work until you read from it.

- `size` will not be valid until the contents of the file are read at least once.
- `type` is auto-set based on the file extension when possible

**`Example`**

```js
const file = Bun.file("./hello.json");
console.log(file.type); // "application/json"
console.log(await file.json()); // { hello: "world" }
```

**`Example`**

```js
await Bun.write(
  Bun.file("./hello.txt"),
  "Hello, world!"
);
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `path` | `string` | The path to the file (lazily loaded) |
| `options?` | [`BlobPropertyBag`](https://oven-sh.github.io/bun-types/interfaces/BlobPropertyBag.md) | - |

#### Returns

[`FileBlob`](https://oven-sh.github.io/bun-types/interfaces/bun_.FileBlob.md)

▸ **file**(`path`, `options?`): [`FileBlob`](https://oven-sh.github.io/bun-types/interfaces/bun_.FileBlob.md)

`Blob` that leverages the fastest system calls available to operate on files.

This Blob is lazy. It won't do any work until you read from it. Errors propagate as promise rejections.

`Blob.size` will not be valid until the contents of the file are read at least once.
`Blob.type` will have a default set based on the file extension

**`Example`**

```js
const file = Bun.file(new TextEncoder.encode("./hello.json"));
console.log(file.type); // "application/json"
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `path` | `Uint8Array` \| `ArrayBufferLike` | The path to the file as a byte buffer (the buffer is copied) |
| `options?` | [`BlobPropertyBag`](https://oven-sh.github.io/bun-types/interfaces/BlobPropertyBag.md) | - |

#### Returns

[`FileBlob`](https://oven-sh.github.io/bun-types/interfaces/bun_.FileBlob.md)

▸ **file**(`fileDescriptor`, `options?`): [`FileBlob`](https://oven-sh.github.io/bun-types/interfaces/bun_.FileBlob.md)

[`Blob`](https://developer.mozilla.org/en-US/docs/Web/API/Blob) powered by the fastest system calls available for operating on files.

This Blob is lazy. That means it won't do any work until you read from it.

- `size` will not be valid until the contents of the file are read at least once.

**`Example`**

```js
const file = Bun.file(fd);
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `fileDescriptor` | `number` | The file descriptor of the file |
| `options?` | [`BlobPropertyBag`](https://oven-sh.github.io/bun-types/interfaces/BlobPropertyBag.md) | - |

#### Returns

[`FileBlob`](https://oven-sh.github.io/bun-types/interfaces/bun_.FileBlob.md)

___

### fileURLToPath

▸ **fileURLToPath**(`url`): `string`

Convert a [URL](https://oven-sh.github.io/bun-types/interfaces/URL.md) to a filesystem path.

**`Throws`**

If the URL is not a URL.

**`Example`**

```js
const path = Bun.fileURLToPath(new URL("file:///foo/bar.txt"));
console.log(path); // "/foo/bar.txt"
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `url` | [`URL`](https://oven-sh.github.io/bun-types/modules.md#url) | The URL to convert. |

#### Returns

`string`

A filesystem path.

▸ **fileURLToPath**(`url`): `string`

Convert a [URL](https://oven-sh.github.io/bun-types/interfaces/URL.md) to a filesystem path.

**`Throws`**

If the URL is not a URL.

**`Example`**

```js
const path = Bun.fileURLToPath(new URL("file:///foo/bar.txt"));
console.log(path); // "/foo/bar.txt"
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `url` | [`URL`](https://oven-sh.github.io/bun-types/modules.md#url) | The URL to convert. |

#### Returns

`string`

A filesystem path.

___

### gc

▸ **gc**(`force`): `void`

Manually trigger the garbage collector

This does two things:
1. It tells JavaScriptCore to run the garbage collector
2. It tells [mimalloc](https://github.com/microsoft/mimalloc) to clean up fragmented memory. Mimalloc manages the heap not used in JavaScriptCore.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `force` | `boolean` | Synchronously run the garbage collector |

#### Returns

`void`

▸ **gc**(`force`): `void`

Manually trigger the garbage collector

This does two things:
1. It tells JavaScriptCore to run the garbage collector
2. It tells [mimalloc](https://github.com/microsoft/mimalloc) to clean up fragmented memory. Mimalloc manages the heap not used in JavaScriptCore.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `force` | `boolean` | Synchronously run the garbage collector |

#### Returns

`void`

___

### generateHeapSnapshot

▸ **generateHeapSnapshot**(): [`HeapSnapshot`](https://oven-sh.github.io/bun-types/interfaces/bun_.HeapSnapshot.md)

Generate a heap snapshot for seeing where the heap is being used

#### Returns

[`HeapSnapshot`](https://oven-sh.github.io/bun-types/interfaces/bun_.HeapSnapshot.md)

▸ **generateHeapSnapshot**(): [`HeapSnapshot`](https://oven-sh.github.io/bun-types/interfaces/bun_.HeapSnapshot.md)

Generate a heap snapshot for seeing where the heap is being used

#### Returns

[`HeapSnapshot`](https://oven-sh.github.io/bun-types/interfaces/bun_.HeapSnapshot.md)

___

### gunzipSync

▸ **gunzipSync**(`data`): `Uint8Array`

Decompresses a chunk of data with `zlib` GUNZIP algorithm.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `data` | `Uint8Array` | The buffer of data to decompress |

#### Returns

`Uint8Array`

The output buffer with the decompressed data

▸ **gunzipSync**(`data`): `Uint8Array`

Decompresses a chunk of data with `zlib` GUNZIP algorithm.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `data` | `Uint8Array` | The buffer of data to decompress |

#### Returns

`Uint8Array`

The output buffer with the decompressed data

___

### gzipSync

▸ **gzipSync**(`data`, `options?`): `Uint8Array`

Compresses a chunk of data with `zlib` GZIP algorithm.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `data` | `Uint8Array` | The buffer of data to compress |
| `options?` | [`ZlibCompressionOptions`](https://oven-sh.github.io/bun-types/modules/bun_.md#zlibcompressionoptions) | Compression options to use |

#### Returns

`Uint8Array`

The output buffer with the compressed data

▸ **gzipSync**(`data`, `options?`): `Uint8Array`

Compresses a chunk of data with `zlib` GZIP algorithm.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `data` | `Uint8Array` | The buffer of data to compress |
| `options?` | [`ZlibCompressionOptions`](https://oven-sh.github.io/bun-types/modules/bun_.md#zlibcompressionoptions) | Compression options to use |

#### Returns

`Uint8Array`

The output buffer with the compressed data

___

### hash

▸ **hash**(`data`, `seed?`): `number` \| `bigint`

Hash a string or array buffer using Wyhash

This is not a cryptographic hash function.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `data` | `string` \| `ArrayBuffer` \| `ArrayBufferView` | The data to hash. |
| `seed?` | `number` | The seed to use. |

#### Returns

`number` \| `bigint`

___

### inflateSync

▸ **inflateSync**(`data`): `Uint8Array`

Decompresses a chunk of data with `zlib` INFLATE algorithm.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `data` | `Uint8Array` | The buffer of data to decompress |

#### Returns

`Uint8Array`

The output buffer with the decompressed data

▸ **inflateSync**(`data`): `Uint8Array`

Decompresses a chunk of data with `zlib` INFLATE algorithm.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `data` | `Uint8Array` | The buffer of data to decompress |

#### Returns

`Uint8Array`

The output buffer with the decompressed data

___

### inspect

▸ **inspect**(...`args`): `string`

Pretty-print an object the same as [log](https://oven-sh.github.io/bun-types/interfaces/console.md#log) to a `string`

Supports JSX

#### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | `any` |

#### Returns

`string`

▸ **inspect**(...`args`): `string`

Pretty-print an object the same as [log](https://oven-sh.github.io/bun-types/interfaces/console.md#log) to a `string`

Supports JSX

#### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | `any` |

#### Returns

`string`

___

### mmap

▸ **mmap**(`path`, `opts?`): `Uint8Array`

Open a file as a live-updating `Uint8Array` without copying memory
- Writing to the array writes to the file.
- Reading from the array reads from the file.

This uses the [`mmap()`](https://man7.org/linux/man-pages/man2/mmap.2.html) syscall under the hood.

---

This API inherently has some rough edges:
- It does not support empty files. It will throw a `SystemError` with `EINVAL`
- Usage on shared/networked filesystems is discouraged. It will be very slow.
- If you delete or truncate the file, that will crash bun. This is called a segmentation fault.

---

To close the file, set the array to `null` and it will be garbage collected eventually.

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `PathLike` |
| `opts?` | [`MMapOptions`](https://oven-sh.github.io/bun-types/interfaces/bun_.MMapOptions.md) |

#### Returns

`Uint8Array`

▸ **mmap**(`path`, `opts?`): `Uint8Array`

Open a file as a live-updating `Uint8Array` without copying memory
- Writing to the array writes to the file.
- Reading from the array reads from the file.

This uses the [`mmap()`](https://man7.org/linux/man-pages/man2/mmap.2.html) syscall under the hood.

---

This API inherently has some rough edges:
- It does not support empty files. It will throw a `SystemError` with `EINVAL`
- Usage on shared/networked filesystems is discouraged. It will be very slow.
- If you delete or truncate the file, that will crash bun. This is called a segmentation fault.

---

To close the file, set the array to `null` and it will be garbage collected eventually.

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `PathLike` |
| `opts?` | [`MMapOptions`](https://oven-sh.github.io/bun-types/interfaces/bun_.MMapOptions.md) |

#### Returns

`Uint8Array`

___

### nanoseconds

▸ **nanoseconds**(): `number`

Nanoseconds since Bun.js was started as an integer.

This uses a high-resolution monotonic system timer.

After 14 weeks of consecutive uptime, this function
wraps

#### Returns

`number`

▸ **nanoseconds**(): `number`

Nanoseconds since Bun.js was started as an integer.

This uses a high-resolution monotonic system timer.

After 14 weeks of consecutive uptime, this function
wraps

#### Returns

`number`

___

### openInEditor

▸ **openInEditor**(`path`, `options?`): `void`

Open a file in your local editor. Auto-detects via `$VISUAL` || `$EDITOR`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `path` | `string` | path to open |
| `options?` | [`EditorOptions`](https://oven-sh.github.io/bun-types/interfaces/bun_.EditorOptions.md) | - |

#### Returns

`void`

▸ **openInEditor**(`path`, `options?`): `void`

Open a file in your local editor. Auto-detects via `$VISUAL` || `$EDITOR`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `path` | `string` | path to open |
| `options?` | [`EditorOptions`](https://oven-sh.github.io/bun-types/interfaces/bun_.EditorOptions.md) | - |

#### Returns

`void`

___

### pathToFileURL

▸ **pathToFileURL**(`path`): [`URL`](https://oven-sh.github.io/bun-types/modules.md#url)

Convert a filesystem path to a file:// URL.

**`Example`**

```js
const url = Bun.pathToFileURL("/foo/bar.txt");
console.log(url.href); // "file:///foo/bar.txt"
```

Internally, this function uses WebKit's URL API to
convert the path to a file:// URL.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `path` | `string` | The path to convert. |

#### Returns

[`URL`](https://oven-sh.github.io/bun-types/modules.md#url)

A [URL](https://oven-sh.github.io/bun-types/interfaces/URL.md) with the file:// scheme.

▸ **pathToFileURL**(`path`): [`URL`](https://oven-sh.github.io/bun-types/modules.md#url)

Convert a filesystem path to a file:// URL.

**`Example`**

```js
const url = Bun.pathToFileURL("/foo/bar.txt");
console.log(url.href); // "file:///foo/bar.txt"
```

Internally, this function uses WebKit's URL API to
convert the path to a file:// URL.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `path` | `string` | The path to convert. |

#### Returns

[`URL`](https://oven-sh.github.io/bun-types/modules.md#url)

A [URL](https://oven-sh.github.io/bun-types/interfaces/URL.md) with the file:// scheme.

___

### readableStreamToArray

▸ **readableStreamToArray**<`T`\>(`stream`): `Promise`<`T`[]\> \| `T`[]

Consume all data from a [ReadableStream](https://oven-sh.github.io/bun-types/interfaces/ReadableStream.md) until it closes or errors.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `stream` | [`ReadableStream`](https://oven-sh.github.io/bun-types/modules.md#readablestream)<`any`\> | The stream to consume |

#### Returns

`Promise`<`T`[]\> \| `T`[]

A promise that resolves with the chunks as an array

▸ **readableStreamToArray**<`T`\>(`stream`): `Promise`<`T`[]\> \| `T`[]

Consume all data from a [ReadableStream](https://oven-sh.github.io/bun-types/interfaces/ReadableStream.md) until it closes or errors.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `stream` | [`ReadableStream`](https://oven-sh.github.io/bun-types/modules.md#readablestream)<`any`\> | The stream to consume |

#### Returns

`Promise`<`T`[]\> \| `T`[]

A promise that resolves with the chunks as an array

___

### readableStreamToArrayBuffer

▸ **readableStreamToArrayBuffer**(`stream`): `Promise`<`ArrayBuffer`\> \| `ArrayBuffer`

Consume all data from a [ReadableStream](https://oven-sh.github.io/bun-types/interfaces/ReadableStream.md) until it closes or errors.

Concatenate the chunks into a single ArrayBuffer.

Each chunk must be a TypedArray or an ArrayBuffer. If you need to support
chunks of different types, consider [readableStreamToBlob](https://oven-sh.github.io/bun-types/modules/bun_.md#readablestreamtoblob)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `stream` | [`ReadableStream`](https://oven-sh.github.io/bun-types/modules.md#readablestream)<`any`\> | The stream to consume. |

#### Returns

`Promise`<`ArrayBuffer`\> \| `ArrayBuffer`

A promise that resolves with the concatenated chunks or the concatenated chunks as an `ArrayBuffer`.

▸ **readableStreamToArrayBuffer**(`stream`): `Promise`<`ArrayBuffer`\> \| `ArrayBuffer`

Consume all data from a [ReadableStream](https://oven-sh.github.io/bun-types/interfaces/ReadableStream.md) until it closes or errors.

Concatenate the chunks into a single ArrayBuffer.

Each chunk must be a TypedArray or an ArrayBuffer. If you need to support
chunks of different types, consider [readableStreamToBlob](https://oven-sh.github.io/bun-types/modules/bun_.md#readablestreamtoblob)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `stream` | [`ReadableStream`](https://oven-sh.github.io/bun-types/modules.md#readablestream)<`any`\> | The stream to consume. |

#### Returns

`Promise`<`ArrayBuffer`\> \| `ArrayBuffer`

A promise that resolves with the concatenated chunks or the concatenated chunks as an `ArrayBuffer`.

___

### readableStreamToBlob

▸ **readableStreamToBlob**(`stream`): `Promise`<`Blob`\>

Consume all data from a [ReadableStream](https://oven-sh.github.io/bun-types/interfaces/ReadableStream.md) until it closes or errors.

Concatenate the chunks into a single Blob.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `stream` | [`ReadableStream`](https://oven-sh.github.io/bun-types/modules.md#readablestream)<`any`\> | The stream to consume. |

#### Returns

`Promise`<`Blob`\>

A promise that resolves with the concatenated chunks as a Blob.

▸ **readableStreamToBlob**(`stream`): `Promise`<`Blob`\>

Consume all data from a [ReadableStream](https://oven-sh.github.io/bun-types/interfaces/ReadableStream.md) until it closes or errors.

Concatenate the chunks into a single Blob.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `stream` | [`ReadableStream`](https://oven-sh.github.io/bun-types/modules.md#readablestream)<`any`\> | The stream to consume. |

#### Returns

`Promise`<`Blob`\>

A promise that resolves with the concatenated chunks as a Blob.

___

### readableStreamToJSON

▸ **readableStreamToJSON**(`stream`): `Promise`<`any`\>

Consume all data from a [ReadableStream](https://oven-sh.github.io/bun-types/interfaces/ReadableStream.md) until it closes or errors.

Concatenate the chunks into a single string and parse as JSON. Chunks must be a TypedArray or an ArrayBuffer. If you need to support chunks of different types, consider [readableStreamToBlob](https://oven-sh.github.io/bun-types/modules/bun_.md#readablestreamtoblob).

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `stream` | [`ReadableStream`](https://oven-sh.github.io/bun-types/modules.md#readablestream)<`any`\> | The stream to consume. |

#### Returns

`Promise`<`any`\>

A promise that resolves with the concatenated chunks as a String.

▸ **readableStreamToJSON**(`stream`): `Promise`<`any`\>

Consume all data from a [ReadableStream](https://oven-sh.github.io/bun-types/interfaces/ReadableStream.md) until it closes or errors.

Concatenate the chunks into a single string and parse as JSON. Chunks must be a TypedArray or an ArrayBuffer. If you need to support chunks of different types, consider [readableStreamToBlob](https://oven-sh.github.io/bun-types/modules/bun_.md#readablestreamtoblob).

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `stream` | [`ReadableStream`](https://oven-sh.github.io/bun-types/modules.md#readablestream)<`any`\> | The stream to consume. |

#### Returns

`Promise`<`any`\>

A promise that resolves with the concatenated chunks as a String.

___

### readableStreamToText

▸ **readableStreamToText**(`stream`): `Promise`<`string`\>

Consume all data from a [ReadableStream](https://oven-sh.github.io/bun-types/interfaces/ReadableStream.md) until it closes or errors.

Concatenate the chunks into a single string. Chunks must be a TypedArray or an ArrayBuffer. If you need to support chunks of different types, consider [readableStreamToBlob](https://oven-sh.github.io/bun-types/modules/bun_.md#readablestreamtoblob).

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `stream` | [`ReadableStream`](https://oven-sh.github.io/bun-types/modules.md#readablestream)<`any`\> | The stream to consume. |

#### Returns

`Promise`<`string`\>

A promise that resolves with the concatenated chunks as a String.

▸ **readableStreamToText**(`stream`): `Promise`<`string`\>

Consume all data from a [ReadableStream](https://oven-sh.github.io/bun-types/interfaces/ReadableStream.md) until it closes or errors.

Concatenate the chunks into a single string. Chunks must be a TypedArray or an ArrayBuffer. If you need to support chunks of different types, consider [readableStreamToBlob](https://oven-sh.github.io/bun-types/modules/bun_.md#readablestreamtoblob).

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `stream` | [`ReadableStream`](https://oven-sh.github.io/bun-types/modules.md#readablestream)<`any`\> | The stream to consume. |

#### Returns

`Promise`<`string`\>

A promise that resolves with the concatenated chunks as a String.

___

### resolve

▸ **resolve**(`moduleId`, `parent`): `Promise`<`string`\>

Resolve a `moduleId` as though it were imported from `parent`

On failure, throws a `ResolveError`

For now, use the sync version. There is zero performance benefit to using this async version. It exists for future-proofing.

#### Parameters

| Name | Type |
| :------ | :------ |
| `moduleId` | `string` |
| `parent` | `string` |

#### Returns

`Promise`<`string`\>

▸ **resolve**(`moduleId`, `parent`): `Promise`<`string`\>

Resolve a `moduleId` as though it were imported from `parent`

On failure, throws a `ResolveError`

For now, use the sync version. There is zero performance benefit to using this async version. It exists for future-proofing.

#### Parameters

| Name | Type |
| :------ | :------ |
| `moduleId` | `string` |
| `parent` | `string` |

#### Returns

`Promise`<`string`\>

___

### resolveSync

▸ **resolveSync**(`moduleId`, `parent`): `string`

Synchronously resolve a `moduleId` as though it were imported from `parent`

On failure, throws a `ResolveError`

#### Parameters

| Name | Type |
| :------ | :------ |
| `moduleId` | `string` |
| `parent` | `string` |

#### Returns

`string`

▸ **resolveSync**(`moduleId`, `parent`): `string`

Synchronously resolve a `moduleId` as though it were imported from `parent`

On failure, throws a `ResolveError`

#### Parameters

| Name | Type |
| :------ | :------ |
| `moduleId` | `string` |
| `parent` | `string` |

#### Returns

`string`

___

### serve

▸ **serve**(`options`): [`Server`](https://oven-sh.github.io/bun-types/interfaces/bun_.Server.md)

Start a fast HTTP server.

**`Example`**

```ts
Bun.serve({
  fetch(req: Request): Response | Promise<Response> {
    return new Response("Hello World!");
  },

  // Optional port number - the default value is 3000
  port: process.env.PORT || 3000,
});
```
-----

**`Example`**

Send a file

```ts
Bun.serve({
  fetch(req: Request): Response | Promise<Response> {
    return new Response(Bun.file("./package.json"));
  },

  // Optional port number - the default value is 3000
  port: process.env.PORT || 3000,
});
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | [`Serve`](https://oven-sh.github.io/bun-types/modules/bun_.md#serve) | Server options (port defaults to $PORT \|\| 8080)  ----- |

#### Returns

[`Server`](https://oven-sh.github.io/bun-types/interfaces/bun_.Server.md)

▸ **serve**(`options`): [`Server`](https://oven-sh.github.io/bun-types/interfaces/bun_.Server.md)

Start a fast HTTP server.

**`Example`**

```ts
Bun.serve({
  fetch(req: Request): Response | Promise<Response> {
    return new Response("Hello World!");
  },

  // Optional port number - the default value is 3000
  port: process.env.PORT || 3000,
});
```
-----

**`Example`**

Send a file

```ts
Bun.serve({
  fetch(req: Request): Response | Promise<Response> {
    return new Response(Bun.file("./package.json"));
  },

  // Optional port number - the default value is 3000
  port: process.env.PORT || 3000,
});
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | [`Serve`](https://oven-sh.github.io/bun-types/modules/bun_.md#serve) | Server options (port defaults to $PORT \|\| 8080)  ----- |

#### Returns

[`Server`](https://oven-sh.github.io/bun-types/interfaces/bun_.Server.md)

___

### sha

▸ **sha**(`input`, `hashInto?`): `Uint8Array`

Hash `input` using [SHA-2 512/256](https://en.wikipedia.org/wiki/SHA-2#Comparison_of_SHA_functions)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `input` | `StringOrBuffer` | `string`, `Uint8Array`, or `ArrayBuffer` to hash. `Uint8Array` or `ArrayBuffer` will be faster |
| `hashInto?` | `Uint8Array` | optional `Uint8Array` to write the hash to. 32 bytes minimum.  This hashing function balances speed with cryptographic strength. This does not encrypt or decrypt data.  The implementation uses [BoringSSL](https://boringssl.googlesource.com/boringssl) (used in Chromium & Go)  The equivalent `openssl` command is:  ```bash # You will need OpenSSL 3 or later openssl sha512-256 /path/to/file ``` |

#### Returns

`Uint8Array`

▸ **sha**(`input`, `encoding`): `string`

Hash `input` using [SHA-2 512/256](https://en.wikipedia.org/wiki/SHA-2#Comparison_of_SHA_functions)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `input` | `StringOrBuffer` | `string`, `Uint8Array`, or `ArrayBuffer` to hash. `Uint8Array` or `ArrayBuffer` will be faster |
| `encoding` | [`DigestEncoding`](https://oven-sh.github.io/bun-types/modules/bun_.md#digestencoding) | `DigestEncoding` to return the hash in  This hashing function balances speed with cryptographic strength. This does not encrypt or decrypt data.  The implementation uses [BoringSSL](https://boringssl.googlesource.com/boringssl) (used in Chromium & Go)  The equivalent `openssl` command is:  ```bash # You will need OpenSSL 3 or later openssl sha512-256 /path/to/file ``` |

#### Returns

`string`

▸ **sha**(`input`, `hashInto?`): `Uint8Array`

Hash `input` using [SHA-2 512/256](https://en.wikipedia.org/wiki/SHA-2#Comparison_of_SHA_functions)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `input` | `StringOrBuffer` | `string`, `Uint8Array`, or `ArrayBuffer` to hash. `Uint8Array` or `ArrayBuffer` will be faster |
| `hashInto?` | `Uint8Array` | optional `Uint8Array` to write the hash to. 32 bytes minimum.  This hashing function balances speed with cryptographic strength. This does not encrypt or decrypt data.  The implementation uses [BoringSSL](https://boringssl.googlesource.com/boringssl) (used in Chromium & Go)  The equivalent `openssl` command is:  ```bash # You will need OpenSSL 3 or later openssl sha512-256 /path/to/file ``` |

#### Returns

`Uint8Array`

▸ **sha**(`input`, `encoding`): `string`

Hash `input` using [SHA-2 512/256](https://en.wikipedia.org/wiki/SHA-2#Comparison_of_SHA_functions)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `input` | `StringOrBuffer` | `string`, `Uint8Array`, or `ArrayBuffer` to hash. `Uint8Array` or `ArrayBuffer` will be faster |
| `encoding` | [`DigestEncoding`](https://oven-sh.github.io/bun-types/modules/bun_.md#digestencoding) | `DigestEncoding` to return the hash in  This hashing function balances speed with cryptographic strength. This does not encrypt or decrypt data.  The implementation uses [BoringSSL](https://boringssl.googlesource.com/boringssl) (used in Chromium & Go)  The equivalent `openssl` command is:  ```bash # You will need OpenSSL 3 or later openssl sha512-256 /path/to/file ``` |

#### Returns

`string`

___

### shrink

▸ **shrink**(): `void`

The next time JavaScriptCore is idle, clear unused memory and attempt to reduce the heap size.

#### Returns

`void`

▸ **shrink**(): `void`

The next time JavaScriptCore is idle, clear unused memory and attempt to reduce the heap size.

#### Returns

`void`

___

### write

▸ **write**(`destination`, `input`): `Promise`<`number`\>

Use the fastest syscalls available to copy from `input` into `destination`.

If `destination` exists, it must be a regular file or symlink to a file.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `destination` | [`FileBlob`](https://oven-sh.github.io/bun-types/interfaces/bun_.FileBlob.md) \| `PathLike` | The file or file path to write to |
| `input` | `string` \| `Blob` \| `TypedArray` \| `ArrayBufferLike` \| `BlobPart`[] | The data to copy into `destination`. |

#### Returns

`Promise`<`number`\>

A promise that resolves with the number of bytes written.

▸ **write**(`destination`, `input`): `Promise`<`number`\>

Persist a Response body to disk.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `destination` | [`FileBlob`](https://oven-sh.github.io/bun-types/interfaces/bun_.FileBlob.md) | The file to write to. If the file doesn't exist, it will be created and if the file does exist, it will be overwritten. If `input`'s size is less than `destination`'s size, `destination` will be truncated. |
| `input` | `Response` | `Response` object |

#### Returns

`Promise`<`number`\>

A promise that resolves with the number of bytes written.

▸ **write**(`destinationPath`, `input`): `Promise`<`number`\>

Persist a Response body to disk.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `destinationPath` | `PathLike` | The file path to write to. If the file doesn't exist, it will be created and if the file does exist, it will be overwritten. If `input`'s size is less than `destination`'s size, `destination` will be truncated. |
| `input` | `Response` | `Response` object |

#### Returns

`Promise`<`number`\>

A promise that resolves with the number of bytes written.

▸ **write**(`destination`, `input`): `Promise`<`number`\>

Use the fastest syscalls available to copy from `input` into `destination`.

If `destination` exists, it must be a regular file or symlink to a file.

On Linux, this uses `copy_file_range`.

On macOS, when the destination doesn't already exist, this uses
[`clonefile()`](https://www.manpagez.com/man/2/clonefile/) and falls
back to [`fcopyfile()`](https://www.manpagez.com/man/2/fcopyfile/)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `destination` | [`FileBlob`](https://oven-sh.github.io/bun-types/interfaces/bun_.FileBlob.md) | The file to write to. If the file doesn't exist, it will be created and if the file does exist, it will be overwritten. If `input`'s size is less than `destination`'s size, `destination` will be truncated. |
| `input` | [`FileBlob`](https://oven-sh.github.io/bun-types/interfaces/bun_.FileBlob.md) | The file to copy from. |

#### Returns

`Promise`<`number`\>

A promise that resolves with the number of bytes written.

▸ **write**(`destinationPath`, `input`): `Promise`<`number`\>

Use the fastest syscalls available to copy from `input` into `destination`.

If `destination` exists, it must be a regular file or symlink to a file.

On Linux, this uses `copy_file_range`.

On macOS, when the destination doesn't already exist, this uses
[`clonefile()`](https://www.manpagez.com/man/2/clonefile/) and falls
back to [`fcopyfile()`](https://www.manpagez.com/man/2/fcopyfile/)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `destinationPath` | `PathLike` | The file path to write to. If the file doesn't exist, it will be created and if the file does exist, it will be overwritten. If `input`'s size is less than `destination`'s size, `destination` will be truncated. |
| `input` | [`FileBlob`](https://oven-sh.github.io/bun-types/interfaces/bun_.FileBlob.md) | The file to copy from. |

#### Returns

`Promise`<`number`\>

A promise that resolves with the number of bytes written.

▸ **write**(`destination`, `input`): `Promise`<`number`\>

Use the fastest syscalls available to copy from `input` into `destination`.

If `destination` exists, it must be a regular file or symlink to a file.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `destination` | [`FileBlob`](https://oven-sh.github.io/bun-types/interfaces/bun_.FileBlob.md) \| `PathLike` | The file or file path to write to |
| `input` | `string` \| `Blob` \| `TypedArray` \| `ArrayBufferLike` \| `BlobPart`[] | The data to copy into `destination`. |

#### Returns

`Promise`<`number`\>

A promise that resolves with the number of bytes written.

▸ **write**(`destination`, `input`): `Promise`<`number`\>

Persist a Response body to disk.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `destination` | [`FileBlob`](https://oven-sh.github.io/bun-types/interfaces/bun_.FileBlob.md) | The file to write to. If the file doesn't exist, it will be created and if the file does exist, it will be overwritten. If `input`'s size is less than `destination`'s size, `destination` will be truncated. |
| `input` | `Response` | `Response` object |

#### Returns

`Promise`<`number`\>

A promise that resolves with the number of bytes written.

▸ **write**(`destinationPath`, `input`): `Promise`<`number`\>

Persist a Response body to disk.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `destinationPath` | `PathLike` | The file path to write to. If the file doesn't exist, it will be created and if the file does exist, it will be overwritten. If `input`'s size is less than `destination`'s size, `destination` will be truncated. |
| `input` | `Response` | `Response` object |

#### Returns

`Promise`<`number`\>

A promise that resolves with the number of bytes written.

▸ **write**(`destination`, `input`): `Promise`<`number`\>

Use the fastest syscalls available to copy from `input` into `destination`.

If `destination` exists, it must be a regular file or symlink to a file.

On Linux, this uses `copy_file_range`.

On macOS, when the destination doesn't already exist, this uses
[`clonefile()`](https://www.manpagez.com/man/2/clonefile/) and falls
back to [`fcopyfile()`](https://www.manpagez.com/man/2/fcopyfile/)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `destination` | [`FileBlob`](https://oven-sh.github.io/bun-types/interfaces/bun_.FileBlob.md) | The file to write to. If the file doesn't exist, it will be created and if the file does exist, it will be overwritten. If `input`'s size is less than `destination`'s size, `destination` will be truncated. |
| `input` | [`FileBlob`](https://oven-sh.github.io/bun-types/interfaces/bun_.FileBlob.md) | The file to copy from. |

#### Returns

`Promise`<`number`\>

A promise that resolves with the number of bytes written.

▸ **write**(`destinationPath`, `input`): `Promise`<`number`\>

Use the fastest syscalls available to copy from `input` into `destination`.

If `destination` exists, it must be a regular file or symlink to a file.

On Linux, this uses `copy_file_range`.

On macOS, when the destination doesn't already exist, this uses
[`clonefile()`](https://www.manpagez.com/man/2/clonefile/) and falls
back to [`fcopyfile()`](https://www.manpagez.com/man/2/fcopyfile/)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `destinationPath` | `PathLike` | The file path to write to. If the file doesn't exist, it will be created and if the file does exist, it will be overwritten. If `input`'s size is less than `destination`'s size, `destination` will be truncated. |
| `input` | [`FileBlob`](https://oven-sh.github.io/bun-types/interfaces/bun_.FileBlob.md) | The file to copy from. |

#### Returns

`Promise`<`number`\>

A promise that resolves with the number of bytes written.
