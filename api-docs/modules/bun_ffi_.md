[bun-types](https://github.com/oven-sh/bun-types/blob/master/api-docs/README.md) / [Exports](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules.md) / "bun:ffi"

# Namespace: "bun:ffi"

`bun:ffi` lets you efficiently call C functions & FFI functions from JavaScript
 without writing bindings yourself.

```js
import {dlopen, CString, ptr} from 'bun:ffi';

const lib = dlopen('libsqlite3', {
});
```

This is powered by just-in-time compiling C wrappers
that convert JavaScript types to C types and back. Internally,
bun uses [tinycc](https://github.com/TinyCC/tinycc), so a big thanks
goes to Fabrice Bellard and TinyCC maintainers for making this possible.

## Table of contents

### Enumerations

- [FFIType](https://github.com/oven-sh/bun-types/blob/master/api-docs/enums/bun_ffi_.FFIType.md)

### Classes

- [CString](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/bun_ffi_.CString.md)

### Interfaces

- [FFIFunction](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/bun_ffi_.FFIFunction.md)
- [Library](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/bun_ffi_.Library.md)

### Type Aliases

- [FFITypeOrString](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/bun_ffi_.md#ffitypeorstring)
- [Symbols](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/bun_ffi_.md#symbols)

### Variables

- [suffix](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/bun_ffi_.md#suffix)

### Functions

- [CFunction](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/bun_ffi_.md#cfunction)
- [dlopen](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/bun_ffi_.md#dlopen)
- [linkSymbols](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/bun_ffi_.md#linksymbols)
- [ptr](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/bun_ffi_.md#ptr)
- [toArrayBuffer](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/bun_ffi_.md#toarraybuffer)
- [toBuffer](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/bun_ffi_.md#tobuffer)
- [viewSource](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/bun_ffi_.md#viewsource)

## Type Aliases

### FFITypeOrString

Ƭ **FFITypeOrString**: [`FFIType`](https://github.com/oven-sh/bun-types/blob/master/api-docs/enums/bun_ffi_.FFIType.md) \| ``"char"`` \| ``"int8_t"`` \| ``"i8"`` \| ``"uint8_t"`` \| ``"u8"`` \| ``"int16_t"`` \| ``"i16"`` \| ``"uint16_t"`` \| ``"u16"`` \| ``"int32_t"`` \| ``"i32"`` \| ``"int"`` \| ``"uint32_t"`` \| ``"u32"`` \| ``"int64_t"`` \| ``"i64"`` \| ``"uint64_t"`` \| ``"u64"`` \| ``"double"`` \| ``"f64"`` \| ``"float"`` \| ``"f32"`` \| ``"bool"`` \| ``"ptr"`` \| ``"pointer"`` \| ``"void"`` \| ``"cstring"``

___

### Symbols

Ƭ **Symbols**: `Record`<`string`, [`FFIFunction`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/bun_ffi_.FFIFunction.md)\>

## Variables

### suffix

• `Const` **suffix**: `string`

Platform-specific file extension name for dynamic libraries

"." is not included

**`Example`**

```js
"dylib" // macOS
```

**`Example`**

```js
"so" // linux
```

## Functions

### CFunction

▸ **CFunction**(`fn`): `CallableFunction` & { `close`: () => `void`  }

Turn a native library's function pointer into a JavaScript function

Libraries using Node-API & bun:ffi in the same module could use this to skip an extra dlopen() step.

**`Example`**

```js
import {CFunction} from 'bun:ffi';

const getVersion = new CFunction({
  returns: "cstring",
  args: [],
  ptr: myNativeLibraryGetVersion,
});
getVersion();
getVersion.close();
```

This is powered by just-in-time compiling C wrappers
that convert JavaScript types to C types and back. Internally,
bun uses [tinycc](https://github.com/TinyCC/tinycc), so a big thanks
goes to Fabrice Bellard and TinyCC maintainers for making this possible.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `fn` | [`FFIFunction`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/bun_ffi_.FFIFunction.md) & { `ptr`: `number` \| `bigint`  } | [FFIFunction](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/bun_ffi_.FFIFunction.md) declaration. `ptr` is required |

#### Returns

`CallableFunction` & { `close`: () => `void`  }

▸ **CFunction**(`fn`): `CallableFunction` & { `close`: () => `void`  }

Turn a native library's function pointer into a JavaScript function

Libraries using Node-API & bun:ffi in the same module could use this to skip an extra dlopen() step.

**`Example`**

```js
import {CFunction} from 'bun:ffi';

const getVersion = new CFunction({
  returns: "cstring",
  args: [],
  ptr: myNativeLibraryGetVersion,
});
getVersion();
getVersion.close();
```

This is powered by just-in-time compiling C wrappers
that convert JavaScript types to C types and back. Internally,
bun uses [tinycc](https://github.com/TinyCC/tinycc), so a big thanks
goes to Fabrice Bellard and TinyCC maintainers for making this possible.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `fn` | [`FFIFunction`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/bun_ffi_.FFIFunction.md) & { `ptr`: `number` \| `bigint`  } | [FFIFunction](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/bun_ffi_.FFIFunction.md) declaration. `ptr` is required |

#### Returns

`CallableFunction` & { `close`: () => `void`  }

___

### dlopen

▸ **dlopen**(`name`, `symbols`): [`Library`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/bun_ffi_.Library.md)

Open a library using `"bun:ffi"`

**`Example`**

```js
import {dlopen} from 'bun:ffi';

const lib = dlopen("duckdb.dylib", {
  get_version: {
    returns: "cstring",
    args: [],
  },
});
lib.symbols.get_version();
// "1.0.0"
```

This is powered by just-in-time compiling C wrappers
that convert JavaScript types to C types and back. Internally,
bun uses [tinycc](https://github.com/TinyCC/tinycc), so a big thanks
goes to Fabrice Bellard and TinyCC maintainers for making this possible.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | `string` | The name of the library or file path. This will be passed to `dlopen()` |
| `symbols` | [`Symbols`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/bun_ffi_.md#symbols) | Map of symbols to load where the key is the symbol name and the value is the [FFIFunction](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/bun_ffi_.FFIFunction.md) |

#### Returns

[`Library`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/bun_ffi_.Library.md)

▸ **dlopen**(`name`, `symbols`): [`Library`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/bun_ffi_.Library.md)

Open a library using `"bun:ffi"`

**`Example`**

```js
import {dlopen} from 'bun:ffi';

const lib = dlopen("duckdb.dylib", {
  get_version: {
    returns: "cstring",
    args: [],
  },
});
lib.symbols.get_version();
// "1.0.0"
```

This is powered by just-in-time compiling C wrappers
that convert JavaScript types to C types and back. Internally,
bun uses [tinycc](https://github.com/TinyCC/tinycc), so a big thanks
goes to Fabrice Bellard and TinyCC maintainers for making this possible.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | `string` | The name of the library or file path. This will be passed to `dlopen()` |
| `symbols` | [`Symbols`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/bun_ffi_.md#symbols) | Map of symbols to load where the key is the symbol name and the value is the [FFIFunction](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/bun_ffi_.FFIFunction.md) |

#### Returns

[`Library`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/bun_ffi_.Library.md)

___

### linkSymbols

▸ **linkSymbols**(`symbols`): [`Library`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/bun_ffi_.Library.md)

Link a map of symbols to JavaScript functions

This lets you use native libraries that were already loaded somehow. You usually will want [dlopen](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/bun_ffi_.md#dlopen) instead.

You could use this with Node-API to skip loading a second time.

**`Example`**

```js
import { linkSymbols } from "bun:ffi";

const [majorPtr, minorPtr, patchPtr] = getVersionPtrs();

const lib = linkSymbols({
  // Unlike with dlopen(), the names here can be whatever you want
  getMajor: {
    returns: "cstring",
    args: [],

    // Since this doesn't use dlsym(), you have to provide a valid ptr
    // That ptr could be a number or a bigint
    // An invalid pointer will crash your program.
    ptr: majorPtr,
  },
  getMinor: {
    returns: "cstring",
    args: [],
    ptr: minorPtr,
  },
  getPatch: {
    returns: "cstring",
    args: [],
    ptr: patchPtr,
  },
});

const [major, minor, patch] = [
  lib.symbols.getMajor(),
  lib.symbols.getMinor(),
  lib.symbols.getPatch(),
];
```

This is powered by just-in-time compiling C wrappers
that convert JavaScript types to C types and back. Internally,
bun uses [tinycc](https://github.com/TinyCC/tinycc), so a big thanks
goes to Fabrice Bellard and TinyCC maintainers for making this possible.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `symbols` | [`Symbols`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/bun_ffi_.md#symbols) | Map of symbols to load where the key is the symbol name and the value is the [FFIFunction](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/bun_ffi_.FFIFunction.md) |

#### Returns

[`Library`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/bun_ffi_.Library.md)

▸ **linkSymbols**(`symbols`): [`Library`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/bun_ffi_.Library.md)

Link a map of symbols to JavaScript functions

This lets you use native libraries that were already loaded somehow. You usually will want [dlopen](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/bun_ffi_.md#dlopen) instead.

You could use this with Node-API to skip loading a second time.

**`Example`**

```js
import { linkSymbols } from "bun:ffi";

const [majorPtr, minorPtr, patchPtr] = getVersionPtrs();

const lib = linkSymbols({
  // Unlike with dlopen(), the names here can be whatever you want
  getMajor: {
    returns: "cstring",
    args: [],

    // Since this doesn't use dlsym(), you have to provide a valid ptr
    // That ptr could be a number or a bigint
    // An invalid pointer will crash your program.
    ptr: majorPtr,
  },
  getMinor: {
    returns: "cstring",
    args: [],
    ptr: minorPtr,
  },
  getPatch: {
    returns: "cstring",
    args: [],
    ptr: patchPtr,
  },
});

const [major, minor, patch] = [
  lib.symbols.getMajor(),
  lib.symbols.getMinor(),
  lib.symbols.getPatch(),
];
```

This is powered by just-in-time compiling C wrappers
that convert JavaScript types to C types and back. Internally,
bun uses [tinycc](https://github.com/TinyCC/tinycc), so a big thanks
goes to Fabrice Bellard and TinyCC maintainers for making this possible.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `symbols` | [`Symbols`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/bun_ffi_.md#symbols) | Map of symbols to load where the key is the symbol name and the value is the [FFIFunction](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/bun_ffi_.FFIFunction.md) |

#### Returns

[`Library`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/bun_ffi_.Library.md)

___

### ptr

▸ **ptr**(`view`, `byteOffset?`): `number`

Get the pointer backing a TypedArray or ArrayBuffer

Use this to pass TypedArray or ArrayBuffer to C functions.

This is for use with FFI functions. For performance reasons, FFI will
not automatically convert typed arrays to C pointers.

**`Example`**

From JavaScript:
```js
const array = new Uint8Array(10);
const rawPtr = ptr(array);
myFFIFunction(rawPtr);
```
To C:
```c
void myFFIFunction(char* rawPtr) {
 // Do something with rawPtr
}
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `view` | `TypedArray` \| `ArrayBufferLike` \| `DataView` | the typed array or array buffer to get the pointer for |
| `byteOffset?` | `number` | optional offset into the view in bytes |

#### Returns

`number`

▸ **ptr**(`view`, `byteOffset?`): `number`

Get the pointer backing a TypedArray or ArrayBuffer

Use this to pass TypedArray or ArrayBuffer to C functions.

This is for use with FFI functions. For performance reasons, FFI will
not automatically convert typed arrays to C pointers.

**`Example`**

From JavaScript:
```js
const array = new Uint8Array(10);
const rawPtr = ptr(array);
myFFIFunction(rawPtr);
```
To C:
```c
void myFFIFunction(char* rawPtr) {
 // Do something with rawPtr
}
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `view` | `TypedArray` \| `ArrayBufferLike` \| `DataView` | the typed array or array buffer to get the pointer for |
| `byteOffset?` | `number` | optional offset into the view in bytes |

#### Returns

`number`

___

### toArrayBuffer

▸ **toArrayBuffer**(`ptr`, `byteOffset?`, `byteLength?`): `ArrayBuffer`

Read a pointer as an ArrayBuffer

If `byteLength` is not provided, the pointer is assumed to be 0-terminated.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `ptr` | `number` | The memory address to read |
| `byteOffset?` | `number` | bytes to skip before reading |
| `byteLength?` | `number` | bytes to read  While there are some checks to catch invalid pointers, this is a difficult thing to do safely. Passing an invalid pointer can crash the program and reading beyond the bounds of the pointer will crash the program or cause undefined behavior. Use with care! |

#### Returns

`ArrayBuffer`

▸ **toArrayBuffer**(`ptr`, `byteOffset?`, `byteLength?`): `ArrayBuffer`

Read a pointer as an ArrayBuffer

If `byteLength` is not provided, the pointer is assumed to be 0-terminated.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `ptr` | `number` | The memory address to read |
| `byteOffset?` | `number` | bytes to skip before reading |
| `byteLength?` | `number` | bytes to read  While there are some checks to catch invalid pointers, this is a difficult thing to do safely. Passing an invalid pointer can crash the program and reading beyond the bounds of the pointer will crash the program or cause undefined behavior. Use with care! |

#### Returns

`ArrayBuffer`

___

### toBuffer

▸ **toBuffer**(`ptr`, `byteOffset?`, `byteLength?`): [`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer)

Read a pointer as a [Buffer](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/Buffer.md)

If `byteLength` is not provided, the pointer is assumed to be 0-terminated.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `ptr` | `number` | The memory address to read |
| `byteOffset?` | `number` | bytes to skip before reading |
| `byteLength?` | `number` | bytes to read  While there are some checks to catch invalid pointers, this is a difficult thing to do safely. Passing an invalid pointer can crash the program and reading beyond the bounds of the pointer will crash the program or cause undefined behavior. Use with care! |

#### Returns

[`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer)

▸ **toBuffer**(`ptr`, `byteOffset?`, `byteLength?`): [`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer)

Read a pointer as a [Buffer](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/Buffer.md)

If `byteLength` is not provided, the pointer is assumed to be 0-terminated.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `ptr` | `number` | The memory address to read |
| `byteOffset?` | `number` | bytes to skip before reading |
| `byteLength?` | `number` | bytes to read  While there are some checks to catch invalid pointers, this is a difficult thing to do safely. Passing an invalid pointer can crash the program and reading beyond the bounds of the pointer will crash the program or cause undefined behavior. Use with care! |

#### Returns

[`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer)

___

### viewSource

▸ **viewSource**(`symbols`, `is_callback?`): `string`[]

View the generated C code for FFI bindings

You probably won't need this unless there's a bug in the FFI bindings
generator or you're just curious.

#### Parameters

| Name | Type |
| :------ | :------ |
| `symbols` | [`Symbols`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/bun_ffi_.md#symbols) |
| `is_callback?` | ``false`` |

#### Returns

`string`[]

▸ **viewSource**(`callback`, `is_callback`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | [`FFIFunction`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/bun_ffi_.FFIFunction.md) |
| `is_callback` | ``true`` |

#### Returns

`string`

▸ **viewSource**(`symbols`, `is_callback?`): `string`[]

View the generated C code for FFI bindings

You probably won't need this unless there's a bug in the FFI bindings
generator or you're just curious.

#### Parameters

| Name | Type |
| :------ | :------ |
| `symbols` | [`Symbols`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/bun_ffi_.md#symbols) |
| `is_callback?` | ``false`` |

#### Returns

`string`[]

▸ **viewSource**(`callback`, `is_callback`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | [`FFIFunction`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/bun_ffi_.FFIFunction.md) |
| `is_callback` | ``true`` |

#### Returns

`string`
