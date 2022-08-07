[bun-types](https://oven-sh.github.io/bun-types/README.md) / [Exports](https://oven-sh.github.io/bun-types/modules.md) / "supports-color"

# Namespace: "supports-color"

## Table of contents

### References

- [default](https://oven-sh.github.io/bun-types/modules/supports_color_.md#default)

### Interfaces

- [ColorSupport](https://oven-sh.github.io/bun-types/interfaces/supports_color_.ColorSupport.md)
- [Options](https://oven-sh.github.io/bun-types/interfaces/supports_color_.Options.md)

### Type Aliases

- [ColorInfo](https://oven-sh.github.io/bun-types/modules/supports_color_.md#colorinfo)
- [ColorSupportLevel](https://oven-sh.github.io/bun-types/modules/supports_color_.md#colorsupportlevel)

### Variables

- [stderr](https://oven-sh.github.io/bun-types/modules/supports_color_.md#stderr)
- [stdout](https://oven-sh.github.io/bun-types/modules/supports_color_.md#stdout)
- [supportsColor](https://oven-sh.github.io/bun-types/modules/supports_color_.md#supportscolor)

## References

### default

Renames and re-exports [supportsColor](https://oven-sh.github.io/bun-types/modules/supports_color_.md#supportscolor)

## Type Aliases

### ColorInfo

Ƭ **ColorInfo**: [`ColorSupport`](https://oven-sh.github.io/bun-types/interfaces/supports_color_.ColorSupport.md) \| ``false``

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

• `Const` **stderr**: [`ColorInfo`](https://oven-sh.github.io/bun-types/modules/supports_color_.md#colorinfo)

___

### stdout

• `Const` **stdout**: [`ColorInfo`](https://oven-sh.github.io/bun-types/modules/supports_color_.md#colorinfo)

___

### supportsColor

• `Const` **supportsColor**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `stderr` | [`ColorInfo`](https://oven-sh.github.io/bun-types/modules/supports_color_.md#colorinfo) |
| `stdout` | [`ColorInfo`](https://oven-sh.github.io/bun-types/modules/supports_color_.md#colorinfo) |
