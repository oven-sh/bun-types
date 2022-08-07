[bun-types](https://github.com/oven-sh/bun-types/blob/master/api-docs/README.md) / [Exports](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules.md) / Process

# Interface: Process

## Table of contents

### Properties

- [arch](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/Process.md#arch)
- [argv](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/Process.md#argv)
- [env](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/Process.md#env)
- [isBun](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/Process.md#isbun)
- [pid](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/Process.md#pid)
- [platform](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/Process.md#platform)
- [ppid](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/Process.md#ppid)
- [version](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/Process.md#version)
- [versions](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/Process.md#versions)

### Methods

- [chdir](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/Process.md#chdir)
- [cwd](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/Process.md#cwd)
- [dlopen](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/Process.md#dlopen)
- [exit](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/Process.md#exit)
- [getgid](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/Process.md#getgid)
- [getuid](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/Process.md#getuid)
- [nextTick](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/Process.md#nexttick)
- [setgid](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/Process.md#setgid)
- [setuid](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/Process.md#setuid)

## Properties

### arch

• **arch**: `Architecture`

___

### argv

• **argv**: `string`[]

___

### env

• **env**: `Record`<`string`, `string`\> & { `NODE_ENV`: `string`  }

___

### isBun

• **isBun**: ``1``

Whether you are using Bun

___

### pid

• **pid**: `number`

___

### platform

• **platform**: `Platform`

___

### ppid

• **ppid**: `number`

___

### version

• **version**: `string`

The current version of Bun

___

### versions

• **versions**: `Record`<`string`, `string`\>

## Methods

### chdir

▸ **chdir**(`directory`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `directory` | `string` |

#### Returns

`void`

▸ **chdir**(`directory`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `directory` | `string` |

#### Returns

`void`

___

### cwd

▸ **cwd**(): `string`

#### Returns

`string`

▸ **cwd**(): `string`

#### Returns

`string`

___

### dlopen

▸ **dlopen**(`module`, `filename`, `flags?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `module` | `Object` |
| `module.exports` | `any` |
| `filename` | `string` |
| `flags?` | `number` |

#### Returns

`void`

▸ **dlopen**(`module`, `filename`, `flags?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `module` | `Object` |
| `module.exports` | `any` |
| `filename` | `string` |
| `flags?` | `number` |

#### Returns

`void`

___

### exit

▸ **exit**(`code?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `code?` | `number` |

#### Returns

`void`

▸ **exit**(`code?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `code?` | `number` |

#### Returns

`void`

___

### getgid

▸ **getgid**(): `number`

#### Returns

`number`

▸ **getgid**(): `number`

#### Returns

`number`

___

### getuid

▸ **getuid**(): `number`

#### Returns

`number`

▸ **getuid**(): `number`

#### Returns

`number`

___

### nextTick

▸ **nextTick**(`callback`, ...`args`): `void`

Run a function on the next tick of the event loop

This is the same as [queueMicrotask](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules.md#queuemicrotask)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `callback` | (...`args`: `any`) => `any` | The function to run |
| `...args` | `any` | - |

#### Returns

`void`

▸ **nextTick**(`callback`, ...`args`): `void`

Run a function on the next tick of the event loop

This is the same as [queueMicrotask](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules.md#queuemicrotask)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `callback` | (...`args`: `any`) => `any` | The function to run |
| `...args` | `any` | - |

#### Returns

`void`

___

### setgid

▸ **setgid**(`id`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` \| `number` |

#### Returns

`void`

▸ **setgid**(`id`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` \| `number` |

#### Returns

`void`

___

### setuid

▸ **setuid**(`id`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` \| `number` |

#### Returns

`void`

▸ **setuid**(`id`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` \| `number` |

#### Returns

`void`
