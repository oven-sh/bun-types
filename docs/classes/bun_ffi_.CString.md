[bun-types](https://oven-sh.github.io/bun-types/README.md) / [Exports](https://oven-sh.github.io/bun-types/modules.md) / ["bun:ffi"](https://oven-sh.github.io/bun-types/modules/bun_ffi_.md) / CString

# Class: CString

["bun:ffi"](https://oven-sh.github.io/bun-types/modules/bun_ffi_.md).CString

Get a string from a UTF-8 encoded C string
If `byteLength` is not provided, the string is assumed to be null-terminated.

**`Example`**

```js
var ptr = lib.symbols.getVersion();
console.log(new CString(ptr));
```

**`Example`**

```js
var ptr = lib.symbols.getVersion();
// print the first 4 characters
console.log(new CString(ptr, 0, 4));
```

While there are some checks to catch invalid pointers, this is a difficult
thing to do safely. Passing an invalid pointer can crash the program and
reading beyond the bounds of the pointer will crash the program or cause
undefined behavior. Use with care!

## Hierarchy

- `String`

  ↳ **`CString`**

## Table of contents

### Constructors

- [constructor](https://oven-sh.github.io/bun-types/classes/bun_ffi_.CString.md#constructor)

### Properties

- [byteLength](https://oven-sh.github.io/bun-types/classes/bun_ffi_.CString.md#bytelength)
- [byteOffset](https://oven-sh.github.io/bun-types/classes/bun_ffi_.CString.md#byteoffset)
- [ptr](https://oven-sh.github.io/bun-types/classes/bun_ffi_.CString.md#ptr)

### Accessors

- [arrayBuffer](https://oven-sh.github.io/bun-types/classes/bun_ffi_.CString.md#arraybuffer)

## Constructors

### constructor

• **new CString**(`ptr`, `byteOffset?`, `byteLength?`)

Get a string from a UTF-8 encoded C string
If `byteLength` is not provided, the string is assumed to be null-terminated.

**`Example`**

```js
var ptr = lib.symbols.getVersion();
console.log(new CString(ptr));
```

**`Example`**

```js
var ptr = lib.symbols.getVersion();
// print the first 4 characters
console.log(new CString(ptr, 0, 4));
```

While there are some checks to catch invalid pointers, this is a difficult
thing to do safely. Passing an invalid pointer can crash the program and
reading beyond the bounds of the pointer will crash the program or cause
undefined behavior. Use with care!

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `ptr` | `number` | The pointer to the C string |
| `byteOffset?` | `number` | bytes to skip before reading |
| `byteLength?` | `number` | bytes to read |

#### Overrides

String.constructor

## Properties

### byteLength

• `Optional` **byteLength**: `number`

___

### byteOffset

• `Optional` **byteOffset**: `number`

___

### ptr

• **ptr**: `number`

The ptr to the C string

This `CString` instance is a clone of the string, so it
is safe to continue using this instance after the `ptr` has been
freed.

## Accessors

### arrayBuffer

• `get` **arrayBuffer**(): `ArrayBuffer`

Get the [ptr](https://oven-sh.github.io/bun-types/modules/bun_ffi_.md#ptr) as an `ArrayBuffer`

`null` or empty ptrs returns an `ArrayBuffer` with `byteLength` 0

#### Returns

`ArrayBuffer`
