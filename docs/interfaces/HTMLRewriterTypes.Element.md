[bun-types](https://github.com/oven-sh/bun-types/blob/master/api-docs/README.md) / [Exports](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules.md) / [HTMLRewriterTypes](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/HTMLRewriterTypes.md) / Element

# Interface: Element

[HTMLRewriterTypes](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/HTMLRewriterTypes.md).Element

## Table of contents

### Properties

- [attributes](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/HTMLRewriterTypes.Element.md#attributes)
- [namespaceURI](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/HTMLRewriterTypes.Element.md#namespaceuri)
- [removed](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/HTMLRewriterTypes.Element.md#removed)
- [tagName](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/HTMLRewriterTypes.Element.md#tagname)

### Methods

- [after](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/HTMLRewriterTypes.Element.md#after)
- [append](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/HTMLRewriterTypes.Element.md#append)
- [before](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/HTMLRewriterTypes.Element.md#before)
- [getAttribute](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/HTMLRewriterTypes.Element.md#getattribute)
- [hasAttribute](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/HTMLRewriterTypes.Element.md#hasattribute)
- [onEndTag](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/HTMLRewriterTypes.Element.md#onendtag)
- [prepend](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/HTMLRewriterTypes.Element.md#prepend)
- [remove](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/HTMLRewriterTypes.Element.md#remove)
- [removeAndKeepContent](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/HTMLRewriterTypes.Element.md#removeandkeepcontent)
- [removeAttribute](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/HTMLRewriterTypes.Element.md#removeattribute)
- [replace](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/HTMLRewriterTypes.Element.md#replace)
- [setAttribute](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/HTMLRewriterTypes.Element.md#setattribute)
- [setInnerContent](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/HTMLRewriterTypes.Element.md#setinnercontent)

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

▸ **after**(`content`, `options?`): [`Element`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/HTMLRewriterTypes.Element.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `content` | `string` |
| `options?` | [`ContentOptions`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/HTMLRewriterTypes.ContentOptions.md) |

#### Returns

[`Element`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/HTMLRewriterTypes.Element.md)

▸ **after**(`content`, `options?`): [`Element`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/HTMLRewriterTypes.Element.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `content` | `string` |
| `options?` | [`ContentOptions`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/HTMLRewriterTypes.ContentOptions.md) |

#### Returns

[`Element`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/HTMLRewriterTypes.Element.md)

___

### append

▸ **append**(`content`, `options?`): [`Element`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/HTMLRewriterTypes.Element.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `content` | `string` |
| `options?` | [`ContentOptions`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/HTMLRewriterTypes.ContentOptions.md) |

#### Returns

[`Element`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/HTMLRewriterTypes.Element.md)

▸ **append**(`content`, `options?`): [`Element`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/HTMLRewriterTypes.Element.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `content` | `string` |
| `options?` | [`ContentOptions`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/HTMLRewriterTypes.ContentOptions.md) |

#### Returns

[`Element`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/HTMLRewriterTypes.Element.md)

___

### before

▸ **before**(`content`, `options?`): [`Element`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/HTMLRewriterTypes.Element.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `content` | `string` |
| `options?` | [`ContentOptions`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/HTMLRewriterTypes.ContentOptions.md) |

#### Returns

[`Element`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/HTMLRewriterTypes.Element.md)

▸ **before**(`content`, `options?`): [`Element`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/HTMLRewriterTypes.Element.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `content` | `string` |
| `options?` | [`ContentOptions`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/HTMLRewriterTypes.ContentOptions.md) |

#### Returns

[`Element`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/HTMLRewriterTypes.Element.md)

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
| `handler` | (`tag`: [`EndTag`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/HTMLRewriterTypes.EndTag.md)) => `void` \| `Promise`<`void`\> |

#### Returns

`void`

▸ **onEndTag**(`handler`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `handler` | (`tag`: [`EndTag`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/HTMLRewriterTypes.EndTag.md)) => `void` \| `Promise`<`void`\> |

#### Returns

`void`

___

### prepend

▸ **prepend**(`content`, `options?`): [`Element`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/HTMLRewriterTypes.Element.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `content` | `string` |
| `options?` | [`ContentOptions`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/HTMLRewriterTypes.ContentOptions.md) |

#### Returns

[`Element`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/HTMLRewriterTypes.Element.md)

▸ **prepend**(`content`, `options?`): [`Element`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/HTMLRewriterTypes.Element.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `content` | `string` |
| `options?` | [`ContentOptions`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/HTMLRewriterTypes.ContentOptions.md) |

#### Returns

[`Element`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/HTMLRewriterTypes.Element.md)

___

### remove

▸ **remove**(): [`Element`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/HTMLRewriterTypes.Element.md)

#### Returns

[`Element`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/HTMLRewriterTypes.Element.md)

▸ **remove**(): [`Element`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/HTMLRewriterTypes.Element.md)

#### Returns

[`Element`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/HTMLRewriterTypes.Element.md)

___

### removeAndKeepContent

▸ **removeAndKeepContent**(): [`Element`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/HTMLRewriterTypes.Element.md)

#### Returns

[`Element`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/HTMLRewriterTypes.Element.md)

▸ **removeAndKeepContent**(): [`Element`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/HTMLRewriterTypes.Element.md)

#### Returns

[`Element`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/HTMLRewriterTypes.Element.md)

___

### removeAttribute

▸ **removeAttribute**(`name`): [`Element`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/HTMLRewriterTypes.Element.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

[`Element`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/HTMLRewriterTypes.Element.md)

▸ **removeAttribute**(`name`): [`Element`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/HTMLRewriterTypes.Element.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

[`Element`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/HTMLRewriterTypes.Element.md)

___

### replace

▸ **replace**(`content`, `options?`): [`Element`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/HTMLRewriterTypes.Element.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `content` | `string` |
| `options?` | [`ContentOptions`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/HTMLRewriterTypes.ContentOptions.md) |

#### Returns

[`Element`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/HTMLRewriterTypes.Element.md)

▸ **replace**(`content`, `options?`): [`Element`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/HTMLRewriterTypes.Element.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `content` | `string` |
| `options?` | [`ContentOptions`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/HTMLRewriterTypes.ContentOptions.md) |

#### Returns

[`Element`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/HTMLRewriterTypes.Element.md)

___

### setAttribute

▸ **setAttribute**(`name`, `value`): [`Element`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/HTMLRewriterTypes.Element.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `value` | `string` |

#### Returns

[`Element`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/HTMLRewriterTypes.Element.md)

▸ **setAttribute**(`name`, `value`): [`Element`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/HTMLRewriterTypes.Element.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `value` | `string` |

#### Returns

[`Element`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/HTMLRewriterTypes.Element.md)

___

### setInnerContent

▸ **setInnerContent**(`content`, `options?`): [`Element`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/HTMLRewriterTypes.Element.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `content` | `string` |
| `options?` | [`ContentOptions`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/HTMLRewriterTypes.ContentOptions.md) |

#### Returns

[`Element`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/HTMLRewriterTypes.Element.md)

▸ **setInnerContent**(`content`, `options?`): [`Element`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/HTMLRewriterTypes.Element.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `content` | `string` |
| `options?` | [`ContentOptions`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/HTMLRewriterTypes.ContentOptions.md) |

#### Returns

[`Element`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/HTMLRewriterTypes.Element.md)
