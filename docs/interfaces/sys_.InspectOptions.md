[bun-types](https://github.com/oven-sh/bun-types/blob/master/api-docs/README.md) / [Exports](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules.md) / ["sys"](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/sys_.md) / InspectOptions

# Interface: InspectOptions

["sys"](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/sys_.md).InspectOptions

## Table of contents

### Properties

- [breakLength](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/sys_.InspectOptions.md#breaklength)
- [colors](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/sys_.InspectOptions.md#colors)
- [compact](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/sys_.InspectOptions.md#compact)
- [customInspect](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/sys_.InspectOptions.md#custominspect)
- [depth](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/sys_.InspectOptions.md#depth)
- [getters](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/sys_.InspectOptions.md#getters)
- [maxArrayLength](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/sys_.InspectOptions.md#maxarraylength)
- [maxStringLength](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/sys_.InspectOptions.md#maxstringlength)
- [showHidden](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/sys_.InspectOptions.md#showhidden)
- [showProxy](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/sys_.InspectOptions.md#showproxy)
- [sorted](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/sys_.InspectOptions.md#sorted)

## Properties

### breakLength

• `Optional` **breakLength**: `number`

___

### colors

• `Optional` **colors**: `boolean`

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

___

### customInspect

• `Optional` **customInspect**: `boolean`

___

### depth

• `Optional` **depth**: `number`

**`Default`**

2

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

___

### maxArrayLength

• `Optional` **maxArrayLength**: `number`

___

### maxStringLength

• `Optional` **maxStringLength**: `number`

Specifies the maximum number of characters to
include when formatting. Set to `null` or `Infinity` to show all elements.
Set to `0` or negative to show no characters.

**`Default`**

10000

___

### showHidden

• `Optional` **showHidden**: `boolean`

___

### showProxy

• `Optional` **showProxy**: `boolean`

___

### sorted

• `Optional` **sorted**: `boolean` \| (`a`: `string`, `b`: `string`) => `number`
