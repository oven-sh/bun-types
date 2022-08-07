[bun-types](https://oven-sh.github.io/bun-types/README.md) / [Exports](https://oven-sh.github.io/bun-types/modules.md) / ["bun:ffi"](https://oven-sh.github.io/bun-types/modules/bun_ffi_.md) / Library

# Interface: Library

["bun:ffi"](https://oven-sh.github.io/bun-types/modules/bun_ffi_.md).Library

## Table of contents

### Properties

- [symbols](https://oven-sh.github.io/bun-types/interfaces/bun_ffi_.Library.md#symbols)

### Methods

- [close](https://oven-sh.github.io/bun-types/interfaces/bun_ffi_.Library.md#close)

## Properties

### symbols

• **symbols**: `Record`<`string`, `CallableFunction` & { `native`: `CallableFunction`  }\>

## Methods

### close

▸ **close**(): `void`

`dlclose` the library, unloading the symbols and freeing allocated memory.

Once called, the library is no longer usable.

Calling a function from a library that has been closed is undefined behavior.

#### Returns

`void`

▸ **close**(): `void`

`dlclose` the library, unloading the symbols and freeing allocated memory.

Once called, the library is no longer usable.

Calling a function from a library that has been closed is undefined behavior.

#### Returns

`void`
