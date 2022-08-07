[bun-types](https://github.com/oven-sh/bun-types/blob/master/api-docs/README.md) / [Exports](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules.md) / "test"

# Namespace: "test"

## Table of contents

### Interfaces

- [Expect](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/test_.Expect.md)

### Functions

- [describe](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/test_.md#describe)
- [expect](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/test_.md#expect)
- [it](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/test_.md#it)
- [test](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/test_.md#test)

## Functions

### describe

▸ **describe**(`label`, `body`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `label` | `string` |
| `body` | () => `void` |

#### Returns

`any`

▸ **describe**(`label`, `body`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `label` | `string` |
| `body` | () => `void` |

#### Returns

`any`

___

### expect

▸ **expect**(`value`): [`Expect`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/bun_test_.Expect.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |

#### Returns

[`Expect`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/bun_test_.Expect.md)

▸ **expect**(`value`): [`Expect`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/bun_test_.Expect.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |

#### Returns

[`Expect`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/bun_test_.Expect.md)

___

### it

▸ **it**(`label`, `test`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `label` | `string` |
| `test` | () => `void` \| `Promise`<`any`\> |

#### Returns

`any`

▸ **it**(`label`, `test`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `label` | `string` |
| `test` | () => `void` \| `Promise`<`any`\> |

#### Returns

`any`

___

### test

▸ **test**(`label`, `test`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `label` | `string` |
| `test` | () => `void` \| `Promise`<`any`\> |

#### Returns

`any`

▸ **test**(`label`, `test`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `label` | `string` |
| `test` | () => `void` \| `Promise`<`any`\> |

#### Returns

`any`
