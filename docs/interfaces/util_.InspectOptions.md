[bun-types](https://oven-sh.github.io/bun-types/README.md) / [Exports](https://oven-sh.github.io/bun-types/modules.md) / ["util"](https://oven-sh.github.io/bun-types/modules/util_.md) / InspectOptions

# Interface: InspectOptions

["util"](https://oven-sh.github.io/bun-types/modules/util_.md).InspectOptions

## Hierarchy

- **`InspectOptions`**

  ↳ [`InspectOptionsStylized`](https://oven-sh.github.io/bun-types/interfaces/util_.InspectOptionsStylized.md)

  ↳ [`InspectOptionsStylized`](https://oven-sh.github.io/bun-types/interfaces/node_util_.InspectOptionsStylized.md)

  ↳ [`InspectOptionsStylized`](https://oven-sh.github.io/bun-types/interfaces/sys_.InspectOptionsStylized.md)

  ↳ [`InspectOptionsStylized`](https://oven-sh.github.io/bun-types/interfaces/node_sys_.InspectOptionsStylized.md)

## Table of contents

### Properties

- [breakLength](https://oven-sh.github.io/bun-types/interfaces/util_.InspectOptions.md#breaklength)
- [colors](https://oven-sh.github.io/bun-types/interfaces/util_.InspectOptions.md#colors)
- [compact](https://oven-sh.github.io/bun-types/interfaces/util_.InspectOptions.md#compact)
- [customInspect](https://oven-sh.github.io/bun-types/interfaces/util_.InspectOptions.md#custominspect)
- [depth](https://oven-sh.github.io/bun-types/interfaces/util_.InspectOptions.md#depth)
- [getters](https://oven-sh.github.io/bun-types/interfaces/util_.InspectOptions.md#getters)
- [maxArrayLength](https://oven-sh.github.io/bun-types/interfaces/util_.InspectOptions.md#maxarraylength)
- [maxStringLength](https://oven-sh.github.io/bun-types/interfaces/util_.InspectOptions.md#maxstringlength)
- [showHidden](https://oven-sh.github.io/bun-types/interfaces/util_.InspectOptions.md#showhidden)
- [showProxy](https://oven-sh.github.io/bun-types/interfaces/util_.InspectOptions.md#showproxy)
- [sorted](https://oven-sh.github.io/bun-types/interfaces/util_.InspectOptions.md#sorted)

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
