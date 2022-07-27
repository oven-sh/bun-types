[bun-types](https://github.com/oven-sh/bun-types/blob/master/api-docs/README.md) / [Exports](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules.md) / Crypto

# Interface: Crypto

## Table of contents

### Methods

- [getRandomValues](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/Crypto.md#getrandomvalues)
- [randomUUID](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/Crypto.md#randomuuid)

## Methods

### getRandomValues

▸ **getRandomValues**<`T`\>(`array`): `T`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `TypedArray` = `TypedArray` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `array` | `T` |

#### Returns

`T`

▸ **getRandomValues**<`T`\>(`array`): `T`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `TypedArray` = `TypedArray` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `array` | `T` |

#### Returns

`T`

___

### randomUUID

▸ **randomUUID**(): `string`

Generate a cryptographically secure random UUID.

**`Example`**

```js
crypto.randomUUID()
'5e6adf82-f516-4468-b1e1-33d6f664d7dc'
```

#### Returns

`string`

▸ **randomUUID**(): `string`

Generate a cryptographically secure random UUID.

**`Example`**

```js
crypto.randomUUID()
'5e6adf82-f516-4468-b1e1-33d6f664d7dc'
```

#### Returns

`string`
