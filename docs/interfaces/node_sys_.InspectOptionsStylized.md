[bun-types](https://github.com/oven-sh/bun-types/blob/master/api-docs/README.md) / [Exports](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules.md) / ["node:sys"](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/node_sys_.md) / InspectOptionsStylized

# Interface: InspectOptionsStylized

["node:sys"](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/node_sys_.md).InspectOptionsStylized

## Hierarchy

- [`InspectOptions`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/util_.InspectOptions.md)

  ↳ **`InspectOptionsStylized`**

## Table of contents

### Properties

- [breakLength](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/node_sys_.InspectOptionsStylized.md#breaklength)
- [colors](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/node_sys_.InspectOptionsStylized.md#colors)
- [compact](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/node_sys_.InspectOptionsStylized.md#compact)
- [customInspect](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/node_sys_.InspectOptionsStylized.md#custominspect)
- [depth](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/node_sys_.InspectOptionsStylized.md#depth)
- [getters](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/node_sys_.InspectOptionsStylized.md#getters)
- [maxArrayLength](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/node_sys_.InspectOptionsStylized.md#maxarraylength)
- [maxStringLength](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/node_sys_.InspectOptionsStylized.md#maxstringlength)
- [showHidden](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/node_sys_.InspectOptionsStylized.md#showhidden)
- [showProxy](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/node_sys_.InspectOptionsStylized.md#showproxy)
- [sorted](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/node_sys_.InspectOptionsStylized.md#sorted)

### Methods

- [stylize](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/node_sys_.InspectOptionsStylized.md#stylize)

## Properties

### breakLength

• `Optional` **breakLength**: `number`

#### Inherited from

[InspectOptions](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/util_.InspectOptions.md).[breakLength](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/util_.InspectOptions.md#breaklength)

___

### colors

• `Optional` **colors**: `boolean`

#### Inherited from

[InspectOptions](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/util_.InspectOptions.md).[colors](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/util_.InspectOptions.md#colors)

___

### compact

• `Optional` **compact**: `number` \| `boolean`

Setting this to `false` causes each object key
to be displayed on a new line. It will also add new lines to text that is
longer than `breakLength`. If set to a number, the most `n` inner elements
are united on a single line as long as all properties fit into
`breakLength`. Short array elements are also grouped together. Note that no
text will be reduced below 16 characters, no matter the `breakLength` size.
For more information, see the example below.

**`Default`**

`true`

#### Inherited from

[InspectOptions](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/util_.InspectOptions.md).[compact](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/util_.InspectOptions.md#compact)

___

### customInspect

• `Optional` **customInspect**: `boolean`

#### Inherited from

[InspectOptions](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/util_.InspectOptions.md).[customInspect](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/util_.InspectOptions.md#custominspect)

___

### depth

• `Optional` **depth**: `number`

**`Default`**

2

#### Inherited from

[InspectOptions](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/util_.InspectOptions.md).[depth](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/util_.InspectOptions.md#depth)

___

### getters

• `Optional` **getters**: `boolean` \| ``"get"`` \| ``"set"``

If set to `true`, getters are going to be
inspected as well. If set to `'get'` only getters without setter are going
to be inspected. If set to `'set'` only getters having a corresponding
setter are going to be inspected. This might cause side effects depending on
the getter function.

**`Default`**

`false`

#### Inherited from

[InspectOptions](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/util_.InspectOptions.md).[getters](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/util_.InspectOptions.md#getters)

___

### maxArrayLength

• `Optional` **maxArrayLength**: `number`

#### Inherited from

[InspectOptions](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/util_.InspectOptions.md).[maxArrayLength](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/util_.InspectOptions.md#maxarraylength)

___

### maxStringLength

• `Optional` **maxStringLength**: `number`

Specifies the maximum number of characters to
include when formatting. Set to `null` or `Infinity` to show all elements.
Set to `0` or negative to show no characters.

**`Default`**

10000

#### Inherited from

[InspectOptions](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/util_.InspectOptions.md).[maxStringLength](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/util_.InspectOptions.md#maxstringlength)

___

### showHidden

• `Optional` **showHidden**: `boolean`

#### Inherited from

[InspectOptions](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/util_.InspectOptions.md).[showHidden](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/util_.InspectOptions.md#showhidden)

___

### showProxy

• `Optional` **showProxy**: `boolean`

#### Inherited from

[InspectOptions](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/util_.InspectOptions.md).[showProxy](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/util_.InspectOptions.md#showproxy)

___

### sorted

• `Optional` **sorted**: `boolean` \| (`a`: `string`, `b`: `string`) => `number`

#### Inherited from

[InspectOptions](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/util_.InspectOptions.md).[sorted](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/util_.InspectOptions.md#sorted)

## Methods

### stylize

▸ **stylize**(`text`, `styleType`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `text` | `string` |
| `styleType` | [`Style`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/util_.md#style) |

#### Returns

`string`

▸ **stylize**(`text`, `styleType`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `text` | `string` |
| `styleType` | [`Style`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/util_.md#style) |

#### Returns

`string`
