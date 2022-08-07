[bun-types](https://oven-sh.github.io/bun-types/README.md) / [Exports](https://oven-sh.github.io/bun-types/modules.md) / UnderlyingSink

# Interface: UnderlyingSink<W\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `W` | `any` |

## Table of contents

### Properties

- [abort](https://oven-sh.github.io/bun-types/interfaces/UnderlyingSink.md#abort)
- [close](https://oven-sh.github.io/bun-types/interfaces/UnderlyingSink.md#close)
- [start](https://oven-sh.github.io/bun-types/interfaces/UnderlyingSink.md#start)
- [type](https://oven-sh.github.io/bun-types/interfaces/UnderlyingSink.md#type)
- [write](https://oven-sh.github.io/bun-types/interfaces/UnderlyingSink.md#write)

## Properties

### abort

• `Optional` **abort**: [`UnderlyingSinkAbortCallback`](https://oven-sh.github.io/bun-types/interfaces/UnderlyingSinkAbortCallback.md)

___

### close

• `Optional` **close**: [`UnderlyingSinkCloseCallback`](https://oven-sh.github.io/bun-types/interfaces/UnderlyingSinkCloseCallback.md)

___

### start

• `Optional` **start**: [`UnderlyingSinkStartCallback`](https://oven-sh.github.io/bun-types/interfaces/UnderlyingSinkStartCallback.md)

___

### type

• `Optional` **type**: ``"default"`` \| ``"bytes"``

___

### write

• `Optional` **write**: [`UnderlyingSinkWriteCallback`](https://oven-sh.github.io/bun-types/interfaces/UnderlyingSinkWriteCallback.md)<`W`\>
