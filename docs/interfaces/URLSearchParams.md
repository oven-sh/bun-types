[bun-types](https://github.com/oven-sh/bun-types/blob/master/api-docs/README.md) / [Exports](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules.md) / URLSearchParams

# Interface: URLSearchParams

## Table of contents

### Methods

- [append](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/URLSearchParams.md#append)
- [delete](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/URLSearchParams.md#delete)
- [entries](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/URLSearchParams.md#entries)
- [forEach](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/URLSearchParams.md#foreach)
- [get](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/URLSearchParams.md#get)
- [getAll](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/URLSearchParams.md#getall)
- [has](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/URLSearchParams.md#has)
- [keys](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/URLSearchParams.md#keys)
- [set](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/URLSearchParams.md#set)
- [sort](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/URLSearchParams.md#sort)
- [toString](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/URLSearchParams.md#tostring)
- [values](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/URLSearchParams.md#values)

## Methods

### append

▸ **append**(`name`, `value`): `void`

Appends a specified key/value pair as a new search parameter.

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `value` | `string` |

#### Returns

`void`

▸ **append**(`name`, `value`): `void`

Appends a specified key/value pair as a new search parameter.

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

Deletes the given search parameter, and its associated value, from the list of all search parameters.

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`void`

▸ **delete**(`name`): `void`

Deletes the given search parameter, and its associated value, from the list of all search parameters.

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
| `callbackfn` | (`value`: `string`, `key`: `string`, `parent`: [`URLSearchParams`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules.md#urlsearchparams)) => `void` |
| `thisArg?` | `any` |

#### Returns

`void`

▸ **forEach**(`callbackfn`, `thisArg?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `callbackfn` | (`value`: `string`, `key`: `string`, `parent`: [`URLSearchParams`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules.md#urlsearchparams)) => `void` |
| `thisArg?` | `any` |

#### Returns

`void`

___

### get

▸ **get**(`name`): `string`

Returns the first value associated to the given search parameter.

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`string`

▸ **get**(`name`): `string`

Returns the first value associated to the given search parameter.

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`string`

___

### getAll

▸ **getAll**(`name`): `string`[]

Returns all the values association with a given search parameter.

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`string`[]

▸ **getAll**(`name`): `string`[]

Returns all the values association with a given search parameter.

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`string`[]

___

### has

▸ **has**(`name`): `boolean`

Returns a Boolean indicating if such a search parameter exists.

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`boolean`

▸ **has**(`name`): `boolean`

Returns a Boolean indicating if such a search parameter exists.

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`boolean`

___

### keys

▸ **keys**(): `IterableIterator`<`string`\>

Returns an iterator allowing to go through all keys of the key/value pairs of this search parameter.

#### Returns

`IterableIterator`<`string`\>

▸ **keys**(): `IterableIterator`<`string`\>

Returns an iterator allowing to go through all keys of the key/value pairs of this search parameter.

#### Returns

`IterableIterator`<`string`\>

___

### set

▸ **set**(`name`, `value`): `void`

Sets the value associated to a given search parameter to the given value. If there were several values, delete the others.

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `value` | `string` |

#### Returns

`void`

▸ **set**(`name`, `value`): `void`

Sets the value associated to a given search parameter to the given value. If there were several values, delete the others.

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `value` | `string` |

#### Returns

`void`

___

### sort

▸ **sort**(): `void`

#### Returns

`void`

▸ **sort**(): `void`

#### Returns

`void`

___

### toString

▸ **toString**(): `string`

Returns a string containing a query string suitable for use in a URL. Does not include the question mark.

#### Returns

`string`

▸ **toString**(): `string`

Returns a string containing a query string suitable for use in a URL. Does not include the question mark.

#### Returns

`string`

___

### values

▸ **values**(): `IterableIterator`<`string`\>

Returns an iterator allowing to go through all values of the key/value pairs of this search parameter.

#### Returns

`IterableIterator`<`string`\>

▸ **values**(): `IterableIterator`<`string`\>

Returns an iterator allowing to go through all values of the key/value pairs of this search parameter.

#### Returns

`IterableIterator`<`string`\>
