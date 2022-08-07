[bun-types](https://github.com/oven-sh/bun-types/blob/master/api-docs/README.md) / [Exports](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules.md) / ["sys"](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/sys_.md) / inspect

# Namespace: inspect

["sys"](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/sys_.md).inspect

## Table of contents

### Variables

- [colors](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/sys_.inspect.md#colors)
- [custom](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/sys_.inspect.md#custom)
- [defaultOptions](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/sys_.inspect.md#defaultoptions)
- [replDefaults](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/sys_.inspect.md#repldefaults)
- [styles](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/sys_.inspect.md#styles)

## Variables

### colors

• **colors**: [`Dict`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/Dict.md)<[`number`, `number`]\>

___

### custom

• `Const` **custom**: unique `symbol`

That can be used to declare custom inspect functions.

___

### defaultOptions

• **defaultOptions**: [`InspectOptions`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/util_.InspectOptions.md)

___

### replDefaults

• **replDefaults**: [`InspectOptions`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/util_.InspectOptions.md)

Allows changing inspect settings from the repl.

___

### styles

• **styles**: { [K in Style]: string }
