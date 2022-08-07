[bun-types](https://oven-sh.github.io/bun-types/README.md) / [Exports](https://oven-sh.github.io/bun-types/modules.md) / "bun:jsc"

# Namespace: "bun:jsc"

## Table of contents

### Functions

- [callerSourceOrigin](https://oven-sh.github.io/bun-types/modules/bun_jsc_.md#callersourceorigin)
- [describe](https://oven-sh.github.io/bun-types/modules/bun_jsc_.md#describe)
- [describeArray](https://oven-sh.github.io/bun-types/modules/bun_jsc_.md#describearray)
- [drainMicrotasks](https://oven-sh.github.io/bun-types/modules/bun_jsc_.md#drainmicrotasks)
- [edenGC](https://oven-sh.github.io/bun-types/modules/bun_jsc_.md#edengc)
- [fullGC](https://oven-sh.github.io/bun-types/modules/bun_jsc_.md#fullgc)
- [gcAndSweep](https://oven-sh.github.io/bun-types/modules/bun_jsc_.md#gcandsweep)
- [getProtectedObjects](https://oven-sh.github.io/bun-types/modules/bun_jsc_.md#getprotectedobjects)
- [getRandomSeed](https://oven-sh.github.io/bun-types/modules/bun_jsc_.md#getrandomseed)
- [heapSize](https://oven-sh.github.io/bun-types/modules/bun_jsc_.md#heapsize)
- [heapStats](https://oven-sh.github.io/bun-types/modules/bun_jsc_.md#heapstats)
- [isRope](https://oven-sh.github.io/bun-types/modules/bun_jsc_.md#isrope)
- [memoryUsage](https://oven-sh.github.io/bun-types/modules/bun_jsc_.md#memoryusage)
- [noFTL](https://oven-sh.github.io/bun-types/modules/bun_jsc_.md#noftl)
- [noOSRExitFuzzing](https://oven-sh.github.io/bun-types/modules/bun_jsc_.md#noosrexitfuzzing)
- [numberOfDFGCompiles](https://oven-sh.github.io/bun-types/modules/bun_jsc_.md#numberofdfgcompiles)
- [optimizeNextInvocation](https://oven-sh.github.io/bun-types/modules/bun_jsc_.md#optimizenextinvocation)
- [releaseWeakRefs](https://oven-sh.github.io/bun-types/modules/bun_jsc_.md#releaseweakrefs)
- [reoptimizationRetryCount](https://oven-sh.github.io/bun-types/modules/bun_jsc_.md#reoptimizationretrycount)
- [setRandomSeed](https://oven-sh.github.io/bun-types/modules/bun_jsc_.md#setrandomseed)
- [startRemoteDebugger](https://oven-sh.github.io/bun-types/modules/bun_jsc_.md#startremotedebugger)
- [totalCompileTime](https://oven-sh.github.io/bun-types/modules/bun_jsc_.md#totalcompiletime)

## Functions

### callerSourceOrigin

▸ **callerSourceOrigin**(): `string`

#### Returns

`string`

▸ **callerSourceOrigin**(): `string`

#### Returns

`string`

___

### describe

▸ **describe**(`value`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |

#### Returns

`string`

▸ **describe**(`value`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |

#### Returns

`string`

___

### describeArray

▸ **describeArray**(`args`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | `any`[] |

#### Returns

`string`

▸ **describeArray**(`args`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | `any`[] |

#### Returns

`string`

___

### drainMicrotasks

▸ **drainMicrotasks**(): `void`

#### Returns

`void`

▸ **drainMicrotasks**(): `void`

#### Returns

`void`

___

### edenGC

▸ **edenGC**(): `void`

#### Returns

`void`

▸ **edenGC**(): `void`

#### Returns

`void`

___

### fullGC

▸ **fullGC**(): `void`

#### Returns

`void`

▸ **fullGC**(): `void`

#### Returns

`void`

___

### gcAndSweep

▸ **gcAndSweep**(): `void`

#### Returns

`void`

▸ **gcAndSweep**(): `void`

#### Returns

`void`

___

### getProtectedObjects

▸ **getProtectedObjects**(): `any`[]

This returns objects which native code has explicitly protected from being
garbage collected

By calling this function you create another reference to the object, which
will further prevent it from being garbage collected

This function is mostly a debugging tool for bun itself.

Warning: not all objects returned are supposed to be observable from JavaScript

#### Returns

`any`[]

▸ **getProtectedObjects**(): `any`[]

This returns objects which native code has explicitly protected from being
garbage collected

By calling this function you create another reference to the object, which
will further prevent it from being garbage collected

This function is mostly a debugging tool for bun itself.

Warning: not all objects returned are supposed to be observable from JavaScript

#### Returns

`any`[]

___

### getRandomSeed

▸ **getRandomSeed**(): `number`

#### Returns

`number`

▸ **getRandomSeed**(): `number`

#### Returns

`number`

___

### heapSize

▸ **heapSize**(): `number`

#### Returns

`number`

▸ **heapSize**(): `number`

#### Returns

`number`

___

### heapStats

▸ **heapStats**(): `Object`

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `extraMemorySize` | `number` |
| `globalObjectCount` | `number` |
| `heapCapacity` | `number` |
| `heapSize` | `number` |
| `objectCount` | `number` |
| `objectTypeCounts` | `Record`<`string`, `number`\> |
| `protectedGlobalObjectCount` | `number` |
| `protectedObjectCount` | `number` |
| `protectedObjectTypeCounts` | `Record`<`string`, `number`\> |

▸ **heapStats**(): `Object`

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `extraMemorySize` | `number` |
| `globalObjectCount` | `number` |
| `heapCapacity` | `number` |
| `heapSize` | `number` |
| `objectCount` | `number` |
| `objectTypeCounts` | `Record`<`string`, `number`\> |
| `protectedGlobalObjectCount` | `number` |
| `protectedObjectCount` | `number` |
| `protectedObjectTypeCounts` | `Record`<`string`, `number`\> |

___

### isRope

▸ **isRope**(`input`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | `string` |

#### Returns

`boolean`

▸ **isRope**(`input`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | `string` |

#### Returns

`boolean`

___

### memoryUsage

▸ **memoryUsage**(): `Object`

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `current` | `number` |
| `currentCommit` | `number` |
| `pageFaults` | `number` |
| `peak` | `number` |
| `peakCommit` | `number` |

▸ **memoryUsage**(): `Object`

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `current` | `number` |
| `currentCommit` | `number` |
| `pageFaults` | `number` |
| `peak` | `number` |
| `peakCommit` | `number` |

___

### noFTL

▸ **noFTL**(`func`): `Function`

#### Parameters

| Name | Type |
| :------ | :------ |
| `func` | `Function` |

#### Returns

`Function`

▸ **noFTL**(`func`): `Function`

#### Parameters

| Name | Type |
| :------ | :------ |
| `func` | `Function` |

#### Returns

`Function`

___

### noOSRExitFuzzing

▸ **noOSRExitFuzzing**(`func`): `Function`

#### Parameters

| Name | Type |
| :------ | :------ |
| `func` | `Function` |

#### Returns

`Function`

▸ **noOSRExitFuzzing**(`func`): `Function`

#### Parameters

| Name | Type |
| :------ | :------ |
| `func` | `Function` |

#### Returns

`Function`

___

### numberOfDFGCompiles

▸ **numberOfDFGCompiles**(`func`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `func` | `Function` |

#### Returns

`number`

▸ **numberOfDFGCompiles**(`func`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `func` | `Function` |

#### Returns

`number`

___

### optimizeNextInvocation

▸ **optimizeNextInvocation**(`func`): `Function`

#### Parameters

| Name | Type |
| :------ | :------ |
| `func` | `Function` |

#### Returns

`Function`

▸ **optimizeNextInvocation**(`func`): `Function`

#### Parameters

| Name | Type |
| :------ | :------ |
| `func` | `Function` |

#### Returns

`Function`

___

### releaseWeakRefs

▸ **releaseWeakRefs**(): `void`

#### Returns

`void`

▸ **releaseWeakRefs**(): `void`

#### Returns

`void`

___

### reoptimizationRetryCount

▸ **reoptimizationRetryCount**(`func`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `func` | `Function` |

#### Returns

`number`

▸ **reoptimizationRetryCount**(`func`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `func` | `Function` |

#### Returns

`number`

___

### setRandomSeed

▸ **setRandomSeed**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

▸ **setRandomSeed**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

___

### startRemoteDebugger

▸ **startRemoteDebugger**(`host?`, `port?`): `void`

Start a remote debugging socket server on the given port.

This exposes JavaScriptCore's built-in debugging server.

This is untested. May not be supported yet on macOS

#### Parameters

| Name | Type |
| :------ | :------ |
| `host?` | `string` |
| `port?` | `number` |

#### Returns

`void`

▸ **startRemoteDebugger**(`host?`, `port?`): `void`

Start a remote debugging socket server on the given port.

This exposes JavaScriptCore's built-in debugging server.

This is untested. May not be supported yet on macOS

#### Parameters

| Name | Type |
| :------ | :------ |
| `host?` | `string` |
| `port?` | `number` |

#### Returns

`void`

___

### totalCompileTime

▸ **totalCompileTime**(`func`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `func` | `Function` |

#### Returns

`number`

▸ **totalCompileTime**(`func`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `func` | `Function` |

#### Returns

`number`
