[bun-types](https://github.com/oven-sh/bun-types/blob/master/api-docs/README.md) / [Exports](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules.md) / ["bun:ffi"](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/bun_ffi_.md) / FFIFunction

# Interface: FFIFunction

["bun:ffi"](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/bun_ffi_.md).FFIFunction

## Table of contents

### Properties

- [args](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/bun_ffi_.FFIFunction.md#args)
- [ptr](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/bun_ffi_.FFIFunction.md#ptr)
- [returns](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/bun_ffi_.FFIFunction.md#returns)

## Properties

### args

• `Optional` **args**: [`FFITypeOrString`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/bun_ffi_.md#ffitypeorstring)[]

Arguments to a FFI function (C ABI)

Defaults to an empty array, which means no arguments.

To pass a pointer, use "ptr" or "pointer" as the type name. To get a pointer, see [ptr](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/bun_ffi_.md#ptr).

**`Example`**

From JavaScript:
```js
const lib = dlopen('add', {
   // FFIType can be used or you can pass string labels.
   args: [FFIType.i32, "i32"],
   returns: "i32",
});
lib.symbols.add(1, 2)
```
In C:
```c
int add(int a, int b) {
  return a + b;
}
```

___

### ptr

• `Optional` **ptr**: `number` \| `bigint`

Function pointer to the native function

If provided, instead of using dlsym() to lookup the function, Bun will use this instead.
This pointer should not be null (0).

This is useful if the library has already been loaded
or if the module is also using Node-API.

___

### returns

• `Optional` **returns**: [`FFITypeOrString`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/bun_ffi_.md#ffitypeorstring)

Return type to a FFI function (C ABI)

Defaults to [void](https://github.com/oven-sh/bun-types/blob/master/api-docs/enums/bun_ffi_.FFIType.md#void)

To pass a pointer, use "ptr" or "pointer" as the type name. To get a pointer, see [ptr](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/bun_ffi_.md#ptr).

**`Example`**

From JavaScript:
```js
const lib = dlopen('z', {
   version: {
     returns: "ptr",
  }
});
console.log(new CString(lib.symbols.version()));
```
In C:
```c
char* version()
{
 return "1.0.0";
}
```
