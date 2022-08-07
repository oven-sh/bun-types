[bun-types](https://github.com/oven-sh/bun-types/blob/master/api-docs/README.md) / [Exports](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules.md) / AbortController

# Interface: AbortController

A controller object that allows you to abort one or more DOM requests as and when desired.

## Table of contents

### Properties

- [signal](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/AbortController.md#signal)

### Methods

- [abort](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/AbortController.md#abort)

## Properties

### signal

• `Readonly` **signal**: [`AbortSignal`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules.md#abortsignal)

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
