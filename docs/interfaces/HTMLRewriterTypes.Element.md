[bun-types](https://oven-sh.github.io/bun-types/README.md) / [Exports](https://oven-sh.github.io/bun-types/modules.md) / [HTMLRewriterTypes](https://oven-sh.github.io/bun-types/modules/HTMLRewriterTypes.md) / Element

# Interface: Element

[HTMLRewriterTypes](https://oven-sh.github.io/bun-types/modules/HTMLRewriterTypes.md).Element

## Table of contents

### Properties

- [attributes](https://oven-sh.github.io/bun-types/interfaces/HTMLRewriterTypes.Element.md#attributes)
- [namespaceURI](https://oven-sh.github.io/bun-types/interfaces/HTMLRewriterTypes.Element.md#namespaceuri)
- [removed](https://oven-sh.github.io/bun-types/interfaces/HTMLRewriterTypes.Element.md#removed)
- [tagName](https://oven-sh.github.io/bun-types/interfaces/HTMLRewriterTypes.Element.md#tagname)

### Methods

- [after](https://oven-sh.github.io/bun-types/interfaces/HTMLRewriterTypes.Element.md#after)
- [append](https://oven-sh.github.io/bun-types/interfaces/HTMLRewriterTypes.Element.md#append)
- [before](https://oven-sh.github.io/bun-types/interfaces/HTMLRewriterTypes.Element.md#before)
- [getAttribute](https://oven-sh.github.io/bun-types/interfaces/HTMLRewriterTypes.Element.md#getattribute)
- [hasAttribute](https://oven-sh.github.io/bun-types/interfaces/HTMLRewriterTypes.Element.md#hasattribute)
- [onEndTag](https://oven-sh.github.io/bun-types/interfaces/HTMLRewriterTypes.Element.md#onendtag)
- [prepend](https://oven-sh.github.io/bun-types/interfaces/HTMLRewriterTypes.Element.md#prepend)
- [remove](https://oven-sh.github.io/bun-types/interfaces/HTMLRewriterTypes.Element.md#remove)
- [removeAndKeepContent](https://oven-sh.github.io/bun-types/interfaces/HTMLRewriterTypes.Element.md#removeandkeepcontent)
- [removeAttribute](https://oven-sh.github.io/bun-types/interfaces/HTMLRewriterTypes.Element.md#removeattribute)
- [replace](https://oven-sh.github.io/bun-types/interfaces/HTMLRewriterTypes.Element.md#replace)
- [setAttribute](https://oven-sh.github.io/bun-types/interfaces/HTMLRewriterTypes.Element.md#setattribute)
- [setInnerContent](https://oven-sh.github.io/bun-types/interfaces/HTMLRewriterTypes.Element.md#setinnercontent)

## Properties

### attributes

• `Readonly` **attributes**: `IterableIterator`<`string`[]\>

___

### namespaceURI

• `Readonly` **namespaceURI**: `string`

___

### removed

• `Readonly` **removed**: `boolean`

___

### tagName

• **tagName**: `string`

## Methods

### after

▸ **after**(`content`, `options?`): [`Element`](https://oven-sh.github.io/bun-types/interfaces/HTMLRewriterTypes.Element.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `content` | `string` |
| `options?` | [`ContentOptions`](https://oven-sh.github.io/bun-types/interfaces/HTMLRewriterTypes.ContentOptions.md) |

#### Returns

[`Element`](https://oven-sh.github.io/bun-types/interfaces/HTMLRewriterTypes.Element.md)

▸ **after**(`content`, `options?`): [`Element`](https://oven-sh.github.io/bun-types/interfaces/HTMLRewriterTypes.Element.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `content` | `string` |
| `options?` | [`ContentOptions`](https://oven-sh.github.io/bun-types/interfaces/HTMLRewriterTypes.ContentOptions.md) |

#### Returns

[`Element`](https://oven-sh.github.io/bun-types/interfaces/HTMLRewriterTypes.Element.md)

___

### append

▸ **append**(`content`, `options?`): [`Element`](https://oven-sh.github.io/bun-types/interfaces/HTMLRewriterTypes.Element.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `content` | `string` |
| `options?` | [`ContentOptions`](https://oven-sh.github.io/bun-types/interfaces/HTMLRewriterTypes.ContentOptions.md) |

#### Returns

[`Element`](https://oven-sh.github.io/bun-types/interfaces/HTMLRewriterTypes.Element.md)

▸ **append**(`content`, `options?`): [`Element`](https://oven-sh.github.io/bun-types/interfaces/HTMLRewriterTypes.Element.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `content` | `string` |
| `options?` | [`ContentOptions`](https://oven-sh.github.io/bun-types/interfaces/HTMLRewriterTypes.ContentOptions.md) |

#### Returns

[`Element`](https://oven-sh.github.io/bun-types/interfaces/HTMLRewriterTypes.Element.md)

___

### before

▸ **before**(`content`, `options?`): [`Element`](https://oven-sh.github.io/bun-types/interfaces/HTMLRewriterTypes.Element.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `content` | `string` |
| `options?` | [`ContentOptions`](https://oven-sh.github.io/bun-types/interfaces/HTMLRewriterTypes.ContentOptions.md) |

#### Returns

[`Element`](https://oven-sh.github.io/bun-types/interfaces/HTMLRewriterTypes.Element.md)

▸ **before**(`content`, `options?`): [`Element`](https://oven-sh.github.io/bun-types/interfaces/HTMLRewriterTypes.Element.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `content` | `string` |
| `options?` | [`ContentOptions`](https://oven-sh.github.io/bun-types/interfaces/HTMLRewriterTypes.ContentOptions.md) |

#### Returns

[`Element`](https://oven-sh.github.io/bun-types/interfaces/HTMLRewriterTypes.Element.md)

___

### getAttribute

▸ **getAttribute**(`name`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`string`

▸ **getAttribute**(`name`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`string`

___

### hasAttribute

▸ **hasAttribute**(`name`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`boolean`

▸ **hasAttribute**(`name`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`boolean`

___

### onEndTag

▸ **onEndTag**(`handler`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `handler` | (`tag`: [`EndTag`](https://oven-sh.github.io/bun-types/interfaces/HTMLRewriterTypes.EndTag.md)) => `void` \| `Promise`<`void`\> |

#### Returns

`void`

▸ **onEndTag**(`handler`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `handler` | (`tag`: [`EndTag`](https://oven-sh.github.io/bun-types/interfaces/HTMLRewriterTypes.EndTag.md)) => `void` \| `Promise`<`void`\> |

#### Returns

`void`

___

### prepend

▸ **prepend**(`content`, `options?`): [`Element`](https://oven-sh.github.io/bun-types/interfaces/HTMLRewriterTypes.Element.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `content` | `string` |
| `options?` | [`ContentOptions`](https://oven-sh.github.io/bun-types/interfaces/HTMLRewriterTypes.ContentOptions.md) |

#### Returns

[`Element`](https://oven-sh.github.io/bun-types/interfaces/HTMLRewriterTypes.Element.md)

▸ **prepend**(`content`, `options?`): [`Element`](https://oven-sh.github.io/bun-types/interfaces/HTMLRewriterTypes.Element.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `content` | `string` |
| `options?` | [`ContentOptions`](https://oven-sh.github.io/bun-types/interfaces/HTMLRewriterTypes.ContentOptions.md) |

#### Returns

[`Element`](https://oven-sh.github.io/bun-types/interfaces/HTMLRewriterTypes.Element.md)

___

### remove

▸ **remove**(): [`Element`](https://oven-sh.github.io/bun-types/interfaces/HTMLRewriterTypes.Element.md)

#### Returns

[`Element`](https://oven-sh.github.io/bun-types/interfaces/HTMLRewriterTypes.Element.md)

▸ **remove**(): [`Element`](https://oven-sh.github.io/bun-types/interfaces/HTMLRewriterTypes.Element.md)

#### Returns

[`Element`](https://oven-sh.github.io/bun-types/interfaces/HTMLRewriterTypes.Element.md)

___

### removeAndKeepContent

▸ **removeAndKeepContent**(): [`Element`](https://oven-sh.github.io/bun-types/interfaces/HTMLRewriterTypes.Element.md)

#### Returns

[`Element`](https://oven-sh.github.io/bun-types/interfaces/HTMLRewriterTypes.Element.md)

▸ **removeAndKeepContent**(): [`Element`](https://oven-sh.github.io/bun-types/interfaces/HTMLRewriterTypes.Element.md)

#### Returns

[`Element`](https://oven-sh.github.io/bun-types/interfaces/HTMLRewriterTypes.Element.md)

___

### removeAttribute

▸ **removeAttribute**(`name`): [`Element`](https://oven-sh.github.io/bun-types/interfaces/HTMLRewriterTypes.Element.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

[`Element`](https://oven-sh.github.io/bun-types/interfaces/HTMLRewriterTypes.Element.md)

▸ **removeAttribute**(`name`): [`Element`](https://oven-sh.github.io/bun-types/interfaces/HTMLRewriterTypes.Element.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

[`Element`](https://oven-sh.github.io/bun-types/interfaces/HTMLRewriterTypes.Element.md)

___

### replace

▸ **replace**(`content`, `options?`): [`Element`](https://oven-sh.github.io/bun-types/interfaces/HTMLRewriterTypes.Element.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `content` | `string` |
| `options?` | [`ContentOptions`](https://oven-sh.github.io/bun-types/interfaces/HTMLRewriterTypes.ContentOptions.md) |

#### Returns

[`Element`](https://oven-sh.github.io/bun-types/interfaces/HTMLRewriterTypes.Element.md)

▸ **replace**(`content`, `options?`): [`Element`](https://oven-sh.github.io/bun-types/interfaces/HTMLRewriterTypes.Element.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `content` | `string` |
| `options?` | [`ContentOptions`](https://oven-sh.github.io/bun-types/interfaces/HTMLRewriterTypes.ContentOptions.md) |

#### Returns

[`Element`](https://oven-sh.github.io/bun-types/interfaces/HTMLRewriterTypes.Element.md)

___

### setAttribute

▸ **setAttribute**(`name`, `value`): [`Element`](https://oven-sh.github.io/bun-types/interfaces/HTMLRewriterTypes.Element.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `value` | `string` |

#### Returns

[`Element`](https://oven-sh.github.io/bun-types/interfaces/HTMLRewriterTypes.Element.md)

▸ **setAttribute**(`name`, `value`): [`Element`](https://oven-sh.github.io/bun-types/interfaces/HTMLRewriterTypes.Element.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `value` | `string` |

#### Returns

[`Element`](https://oven-sh.github.io/bun-types/interfaces/HTMLRewriterTypes.Element.md)

___

### setInnerContent

▸ **setInnerContent**(`content`, `options?`): [`Element`](https://oven-sh.github.io/bun-types/interfaces/HTMLRewriterTypes.Element.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `content` | `string` |
| `options?` | [`ContentOptions`](https://oven-sh.github.io/bun-types/interfaces/HTMLRewriterTypes.ContentOptions.md) |

#### Returns

[`Element`](https://oven-sh.github.io/bun-types/interfaces/HTMLRewriterTypes.Element.md)

▸ **setInnerContent**(`content`, `options?`): [`Element`](https://oven-sh.github.io/bun-types/interfaces/HTMLRewriterTypes.Element.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `content` | `string` |
| `options?` | [`ContentOptions`](https://oven-sh.github.io/bun-types/interfaces/HTMLRewriterTypes.ContentOptions.md) |

#### Returns

[`Element`](https://oven-sh.github.io/bun-types/interfaces/HTMLRewriterTypes.Element.md)
