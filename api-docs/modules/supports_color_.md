[bun-types](https://github.com/oven-sh/bun-types/blob/master/api-docs/README.md) / [Exports](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules.md) / "supports-color"

# Namespace: "supports-color"

## Table of contents

### References

- [default](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/supports_color_.md#default)

### Interfaces

- [ColorSupport](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/supports_color_.ColorSupport.md)
- [Options](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/supports_color_.Options.md)

### Type Aliases

- [ColorInfo](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/supports_color_.md#colorinfo)
- [ColorSupportLevel](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/supports_color_.md#colorsupportlevel)

### Variables

- [stderr](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/supports_color_.md#stderr)
- [stdout](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/supports_color_.md#stdout)
- [supportsColor](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/supports_color_.md#supportscolor)

## References

### default

Renames and re-exports [supportsColor](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/supports_color_.md#supportscolor)

## Type Aliases

### ColorInfo

Ƭ **ColorInfo**: [`ColorSupport`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/supports_color_.ColorSupport.md) \| ``false``

___

### ColorSupportLevel

Ƭ **ColorSupportLevel**: ``0`` \| ``1`` \| ``2`` \| ``3``

Levels:
- `0` - All colors disabled.
- `1` - Basic 16 colors support.
- `2` - ANSI 256 colors support.
- `3` - Truecolor 16 million colors support.

## Variables

### stderr

• `Const` **stderr**: [`ColorInfo`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/supports_color_.md#colorinfo)

___

### stdout

• `Const` **stdout**: [`ColorInfo`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/supports_color_.md#colorinfo)

___

### supportsColor

• `Const` **supportsColor**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `stderr` | [`ColorInfo`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/supports_color_.md#colorinfo) |
| `stdout` | [`ColorInfo`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/supports_color_.md#colorinfo) |
