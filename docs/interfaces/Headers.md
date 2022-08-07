[bun-types](https://github.com/oven-sh/bun-types/blob/master/api-docs/README.md) / [Exports](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules.md) / Headers

# Interface: Headers

This Fetch API interface allows you to perform various actions on HTTP
request and response headers. These actions include retrieving, setting,
adding to, and removing. A Headers object has an associated header list,
which is initially empty and consists of zero or more name and value
pairs.

You can add to this using methods like append()

In all methods of this interface, header names are matched by
case-insensitive byte sequence.

## Table of contents

### Methods

- [append](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/Headers.md#append)
- [delete](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/Headers.md#delete)
- [entries](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/Headers.md#entries)
- [forEach](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/Headers.md#foreach)
- [get](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/Headers.md#get)
- [has](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/Headers.md#has)
- [keys](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/Headers.md#keys)
- [set](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/Headers.md#set)
- [values](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/Headers.md#values)

## Methods

### append

▸ **append**(`name`, `value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `value` | `string` |

#### Returns

`void`

▸ **append**(`name`, `value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `value` | `string` |

#### Returns

`void`

___

### delete

▸ **delete**(`name`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`void`

▸ **delete**(`name`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`void`

___

### entries

▸ **entries**(): `IterableIterator`<[`string`, `string`]\>

#### Returns

`IterableIterator`<[`string`, `string`]\>

▸ **entries**(): `IterableIterator`<[`string`, `string`]\>

#### Returns

`IterableIterator`<[`string`, `string`]\>

___

### forEach

▸ **forEach**(`callbackfn`, `thisArg?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `callbackfn` | (`value`: `string`, `key`: `string`, `parent`: [`Headers`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules.md#headers)) => `void` |
| `thisArg?` | `any` |

#### Returns

`void`

▸ **forEach**(`callbackfn`, `thisArg?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `callbackfn` | (`value`: `string`, `key`: `string`, `parent`: [`Headers`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules.md#headers)) => `void` |
| `thisArg?` | `any` |

#### Returns

`void`

___

### get

▸ **get**(`name`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`string`

▸ **get**(`name`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`string`

___

### has

▸ **has**(`name`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`boolean`

▸ **has**(`name`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`boolean`

___

### keys

▸ **keys**(): `IterableIterator`<`string`\>

#### Returns

`IterableIterator`<`string`\>

▸ **keys**(): `IterableIterator`<`string`\>

#### Returns

`IterableIterator`<`string`\>

___

### set

▸ **set**(`name`, `value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `value` | `string` |

#### Returns

`void`

▸ **set**(`name`, `value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `value` | `string` |

#### Returns

`void`

___

### values

▸ **values**(): `IterableIterator`<`string`\>

#### Returns

`IterableIterator`<`string`\>

▸ **values**(): `IterableIterator`<`string`\>

#### Returns

`IterableIterator`<`string`\>
