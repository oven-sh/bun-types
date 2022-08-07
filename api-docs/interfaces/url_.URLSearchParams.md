[bun-types](https://github.com/oven-sh/bun-types/blob/master/api-docs/README.md) / [Exports](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules.md) / ["url"](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/url_.md) / URLSearchParams

# Interface: URLSearchParams

["url"](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/url_.md).URLSearchParams

## Table of contents

### Methods

- [append](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/url_.URLSearchParams.md#append)
- [delete](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/url_.URLSearchParams.md#delete)
- [forEach](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/url_.URLSearchParams.md#foreach)
- [get](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/url_.URLSearchParams.md#get)
- [getAll](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/url_.URLSearchParams.md#getall)
- [has](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/url_.URLSearchParams.md#has)
- [set](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/url_.URLSearchParams.md#set)
- [sort](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/url_.URLSearchParams.md#sort)
- [toString](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/url_.URLSearchParams.md#tostring)

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

### forEach

▸ **forEach**(`callbackfn`, `thisArg?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `callbackfn` | (`value`: `string`, `key`: `string`, `parent`: [`URLSearchParams`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/url_.URLSearchParams.md)) => `void` |
| `thisArg?` | `any` |

#### Returns

`void`

▸ **forEach**(`callbackfn`, `thisArg?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `callbackfn` | (`value`: `string`, `key`: `string`, `parent`: [`URLSearchParams`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/url_.URLSearchParams.md)) => `void` |
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
