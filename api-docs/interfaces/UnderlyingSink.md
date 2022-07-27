[bun-types](https://github.com/oven-sh/bun-types/blob/master/api-docs/README.md) / [Exports](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules.md) / UnderlyingSink

# Interface: UnderlyingSink<W\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `W` | `any` |

## Table of contents

### Properties

- [abort](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/UnderlyingSink.md#abort)
- [close](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/UnderlyingSink.md#close)
- [start](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/UnderlyingSink.md#start)
- [type](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/UnderlyingSink.md#type)
- [write](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/UnderlyingSink.md#write)

## Properties

### abort

• `Optional` **abort**: [`UnderlyingSinkAbortCallback`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/UnderlyingSinkAbortCallback.md)

___

### close

• `Optional` **close**: [`UnderlyingSinkCloseCallback`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/UnderlyingSinkCloseCallback.md)

___

### start

• `Optional` **start**: [`UnderlyingSinkStartCallback`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/UnderlyingSinkStartCallback.md)

___

### type

• `Optional` **type**: ``"default"`` \| ``"bytes"``

___

### write

• `Optional` **write**: [`UnderlyingSinkWriteCallback`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/UnderlyingSinkWriteCallback.md)<`W`\>
