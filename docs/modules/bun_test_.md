[bun-types](https://oven-sh.github.io/bun-types/README.md) / [Exports](https://oven-sh.github.io/bun-types/modules.md) / "bun:test"

# Namespace: "bun:test"

This isn't really designed for third-party usage yet.
You can try it if you want though!

To run the tests, run `bun wiptest`

**`Example`**

```bash
$ bun wiptest
```

**`Example`**

```bash
$ bun wiptest file-name
```

## Table of contents

### Interfaces

- [Expect](https://oven-sh.github.io/bun-types/interfaces/bun_test_.Expect.md)

### Functions

- [describe](https://oven-sh.github.io/bun-types/modules/bun_test_.md#describe)
- [expect](https://oven-sh.github.io/bun-types/modules/bun_test_.md#expect)
- [it](https://oven-sh.github.io/bun-types/modules/bun_test_.md#it)
- [test](https://oven-sh.github.io/bun-types/modules/bun_test_.md#test)

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

▸ **expect**(`value`): [`Expect`](https://oven-sh.github.io/bun-types/interfaces/bun_test_.Expect.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |

#### Returns

[`Expect`](https://oven-sh.github.io/bun-types/interfaces/bun_test_.Expect.md)

▸ **expect**(`value`): [`Expect`](https://oven-sh.github.io/bun-types/interfaces/bun_test_.Expect.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |

#### Returns

[`Expect`](https://oven-sh.github.io/bun-types/interfaces/bun_test_.Expect.md)

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
