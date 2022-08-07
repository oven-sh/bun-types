[bun-types](https://github.com/oven-sh/bun-types/blob/master/api-docs/README.md) / [Exports](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules.md) / ["bun:ffi"](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/bun_ffi_.md) / FFIType

# Enumeration: FFIType

["bun:ffi"](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/bun_ffi_.md).FFIType

## Table of contents

### Enumeration Members

- [bool](https://github.com/oven-sh/bun-types/blob/master/api-docs/enums/bun_ffi_.FFIType.md#bool)
- [char](https://github.com/oven-sh/bun-types/blob/master/api-docs/enums/bun_ffi_.FFIType.md#char)
- [cstring](https://github.com/oven-sh/bun-types/blob/master/api-docs/enums/bun_ffi_.FFIType.md#cstring)
- [double](https://github.com/oven-sh/bun-types/blob/master/api-docs/enums/bun_ffi_.FFIType.md#double)
- [f32](https://github.com/oven-sh/bun-types/blob/master/api-docs/enums/bun_ffi_.FFIType.md#f32)
- [f64](https://github.com/oven-sh/bun-types/blob/master/api-docs/enums/bun_ffi_.FFIType.md#f64)
- [float](https://github.com/oven-sh/bun-types/blob/master/api-docs/enums/bun_ffi_.FFIType.md#float)
- [i16](https://github.com/oven-sh/bun-types/blob/master/api-docs/enums/bun_ffi_.FFIType.md#i16)
- [i32](https://github.com/oven-sh/bun-types/blob/master/api-docs/enums/bun_ffi_.FFIType.md#i32)
- [i64](https://github.com/oven-sh/bun-types/blob/master/api-docs/enums/bun_ffi_.FFIType.md#i64)
- [i64\_fast](https://github.com/oven-sh/bun-types/blob/master/api-docs/enums/bun_ffi_.FFIType.md#i64_fast)
- [i8](https://github.com/oven-sh/bun-types/blob/master/api-docs/enums/bun_ffi_.FFIType.md#i8)
- [int](https://github.com/oven-sh/bun-types/blob/master/api-docs/enums/bun_ffi_.FFIType.md#int)
- [int16\_t](https://github.com/oven-sh/bun-types/blob/master/api-docs/enums/bun_ffi_.FFIType.md#int16_t)
- [int32\_t](https://github.com/oven-sh/bun-types/blob/master/api-docs/enums/bun_ffi_.FFIType.md#int32_t)
- [int64\_t](https://github.com/oven-sh/bun-types/blob/master/api-docs/enums/bun_ffi_.FFIType.md#int64_t)
- [int8\_t](https://github.com/oven-sh/bun-types/blob/master/api-docs/enums/bun_ffi_.FFIType.md#int8_t)
- [pointer](https://github.com/oven-sh/bun-types/blob/master/api-docs/enums/bun_ffi_.FFIType.md#pointer)
- [ptr](https://github.com/oven-sh/bun-types/blob/master/api-docs/enums/bun_ffi_.FFIType.md#ptr)
- [u16](https://github.com/oven-sh/bun-types/blob/master/api-docs/enums/bun_ffi_.FFIType.md#u16)
- [u32](https://github.com/oven-sh/bun-types/blob/master/api-docs/enums/bun_ffi_.FFIType.md#u32)
- [u64](https://github.com/oven-sh/bun-types/blob/master/api-docs/enums/bun_ffi_.FFIType.md#u64)
- [u64\_fast](https://github.com/oven-sh/bun-types/blob/master/api-docs/enums/bun_ffi_.FFIType.md#u64_fast)
- [u8](https://github.com/oven-sh/bun-types/blob/master/api-docs/enums/bun_ffi_.FFIType.md#u8)
- [uint16\_t](https://github.com/oven-sh/bun-types/blob/master/api-docs/enums/bun_ffi_.FFIType.md#uint16_t)
- [uint32\_t](https://github.com/oven-sh/bun-types/blob/master/api-docs/enums/bun_ffi_.FFIType.md#uint32_t)
- [uint64\_t](https://github.com/oven-sh/bun-types/blob/master/api-docs/enums/bun_ffi_.FFIType.md#uint64_t)
- [uint8\_t](https://github.com/oven-sh/bun-types/blob/master/api-docs/enums/bun_ffi_.FFIType.md#uint8_t)
- [void](https://github.com/oven-sh/bun-types/blob/master/api-docs/enums/bun_ffi_.FFIType.md#void)

## Enumeration Members

### bool

• **bool** = ``11``

Booelan value

Must be `true` or `false`. `0` and `1` type coercion is not supported.

In C, this corresponds to:
```c
bool
_Bool
```

___

### char

• **char** = ``0``

___

### cstring

• **cstring** = ``14``

When used as a `returns`, this will automatically become a [CString](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/bun_ffi_.CString.md).

When used in `args` it is equivalent to [pointer](https://github.com/oven-sh/bun-types/blob/master/api-docs/enums/bun_ffi_.FFIType.md#pointer)

___

### double

• **double** = ``9``

Doubles are not supported yet!

___

### f32

• **f32** = ``10``

Floats are not supported yet!

___

### f64

• **f64** = ``9``

Doubles are not supported yet!

___

### float

• **float** = ``10``

Floats are not supported yet!

___

### i16

• **i16** = ``3``

16-bit signed integer

Must be a value between -32768 and 32767

When passing to a FFI function (C ABI), type coercion is not performed.

In C:
```c
in16_t
short // on arm64 & x64
```

In JavaScript:
```js
var num = 0;
```

___

### i32

• **i32** = ``5``

32-bit signed integer

Alias of [int32_t](https://github.com/oven-sh/bun-types/blob/master/api-docs/enums/bun_ffi_.FFIType.md#int32_t)

___

### i64

• **i64** = ``7``

i64 is a 64-bit signed integer

This is not implemented yet!

___

### i64\_fast

• **i64\_fast** = ``15``

Attempt to coerce `BigInt` into a `Number` if it fits. This improves performance
but means you might get a `BigInt` or you might get a `number`.

In C, this always becomes `int64_t`

In JavaScript, this could be number or it could be BigInt, depending on what
value is passed in.

___

### i8

• **i8** = ``1``

8-bit signed integer

Must be a value between -127 and 127

When passing to a FFI function (C ABI), type coercion is not performed.

In C:
```c
signed char
char // on x64 & aarch64 macOS
```

In JavaScript:
```js
var num = 0;
```

___

### int

• **int** = ``5``

32-bit signed integer

The same as `int` in C

```c
int
```

___

### int16\_t

• **int16\_t** = ``3``

16-bit signed integer

Must be a value between -32768 and 32767

When passing to a FFI function (C ABI), type coercion is not performed.

In C:
```c
in16_t
short // on arm64 & x64
```

In JavaScript:
```js
var num = 0;
```

___

### int32\_t

• **int32\_t** = ``5``

32-bit signed integer

___

### int64\_t

• **int64\_t** = ``7``

int64 is a 64-bit signed integer

This is not implemented yet!

___

### int8\_t

• **int8\_t** = ``1``

8-bit signed integer

Must be a value between -127 and 127

When passing to a FFI function (C ABI), type coercion is not performed.

In C:
```c
signed char
char // on x64 & aarch64 macOS
```

In JavaScript:
```js
var num = 0;
```

___

### pointer

• **pointer** = ``12``

Pointer value

alias of [ptr](https://github.com/oven-sh/bun-types/blob/master/api-docs/enums/bun_ffi_.FFIType.md#ptr)

___

### ptr

• **ptr** = ``12``

Pointer value

See Bun.FFI.ptr for more information

In C:
```c
void*
```

In JavaScript:
```js
ptr(new Uint8Array(1))
```

___

### u16

• **u16** = ``4``

16-bit unsigned integer

Must be a value between 0 and 65535, inclusive.

When passing to a FFI function (C ABI), type coercion is not performed.

In C:
```c
uint16_t
unsigned short // on arm64 & x64
```

In JavaScript:
```js
var num = 0;
```

___

### u32

• **u32** = ``6``

32-bit unsigned integer

Alias of [uint32_t](https://github.com/oven-sh/bun-types/blob/master/api-docs/enums/bun_ffi_.FFIType.md#uint32_t)

___

### u64

• **u64** = ``8``

64-bit unsigned integer

This is not implemented yet!

___

### u64\_fast

• **u64\_fast** = ``16``

Attempt to coerce `BigInt` into a `Number` if it fits. This improves performance
but means you might get a `BigInt` or you might get a `number`.

In C, this always becomes `uint64_t`

In JavaScript, this could be number or it could be BigInt, depending on what
value is passed in.

___

### u8

• **u8** = ``2``

8-bit unsigned integer

Must be a value between 0 and 255

When passing to a FFI function (C ABI), type coercion is not performed.

In C:
```c
unsigned char
```

In JavaScript:
```js
var num = 0;
```

___

### uint16\_t

• **uint16\_t** = ``4``

16-bit unsigned integer

Must be a value between 0 and 65535, inclusive.

When passing to a FFI function (C ABI), type coercion is not performed.

In C:
```c
uint16_t
unsigned short // on arm64 & x64
```

In JavaScript:
```js
var num = 0;
```

___

### uint32\_t

• **uint32\_t** = ``6``

32-bit unsigned integer

The same as `unsigned int` in C (on x64 & arm64)

C:
```c
unsigned int
```
JavaScript:
```js
ptr(new Uint32Array(1))
```

___

### uint64\_t

• **uint64\_t** = ``8``

64-bit unsigned integer

This is not implemented yet!

___

### uint8\_t

• **uint8\_t** = ``2``

8-bit unsigned integer

Must be a value between 0 and 255

When passing to a FFI function (C ABI), type coercion is not performed.

In C:
```c
unsigned char
```

In JavaScript:
```js
var num = 0;
```

___

### void

• **void** = ``13``

void value

void arguments are not supported

void return type is the default return type

In C:
```c
void
```
