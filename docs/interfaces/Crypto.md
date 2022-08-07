[bun-types](https://oven-sh.github.io/bun-types/README.md) / [Exports](https://oven-sh.github.io/bun-types/modules.md) / Crypto

# Interface: Crypto

## Table of contents

### Methods

- [getRandomValues](https://oven-sh.github.io/bun-types/interfaces/Crypto.md#getrandomvalues)
- [randomUUID](https://oven-sh.github.io/bun-types/interfaces/Crypto.md#randomuuid)

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
