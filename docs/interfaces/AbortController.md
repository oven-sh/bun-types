[bun-types](https://oven-sh.github.io/bun-types/README.md) / [Exports](https://oven-sh.github.io/bun-types/modules.md) / AbortController

# Interface: AbortController

A controller object that allows you to abort one or more DOM requests as and when desired.

## Table of contents

### Properties

- [signal](https://oven-sh.github.io/bun-types/interfaces/AbortController.md#signal)

### Methods

- [abort](https://oven-sh.github.io/bun-types/interfaces/AbortController.md#abort)

## Properties

### signal

• `Readonly` **signal**: [`AbortSignal`](https://oven-sh.github.io/bun-types/modules.md#abortsignal)

Returns the AbortSignal object associated with this object.

## Methods

### abort

▸ **abort**(): `void`

Invoking this method will set this object's AbortSignal's aborted flag and signal to any observers that the associated activity is to be aborted.

#### Returns

`void`

▸ **abort**(): `void`

Invoking this method will set this object's AbortSignal's aborted flag and signal to any observers that the associated activity is to be aborted.

#### Returns

`void`
