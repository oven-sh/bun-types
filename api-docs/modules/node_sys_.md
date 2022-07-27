[bun-types](https://github.com/oven-sh/bun-types/blob/master/api-docs/README.md) / [Exports](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules.md) / "node:sys"

# Namespace: "node:sys"

## Table of contents

### Namespaces

- [inspect](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/node_sys_.inspect.md)
- [promisify](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/node_sys_.promisify.md)

### Interfaces

- [CustomPromisifyLegacy](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/node_sys_.CustomPromisifyLegacy.md)
- [CustomPromisifySymbol](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/node_sys_.CustomPromisifySymbol.md)
- [DebugLogger](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/node_sys_.DebugLogger.md)
- [EncodeIntoResult](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/node_sys_.EncodeIntoResult.md)
- [InspectOptions](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/node_sys_.InspectOptions.md)
- [InspectOptionsStylized](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/node_sys_.InspectOptionsStylized.md)

### Type Aliases

- [CustomInspectFunction](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/node_sys_.md#custominspectfunction)
- [CustomPromisify](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/node_sys_.md#custompromisify)
- [DebugLoggerFunction](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/node_sys_.md#debugloggerfunction)
- [Style](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/node_sys_.md#style)

### Functions

- [callbackify](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/node_sys_.md#callbackify)
- [debug](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/node_sys_.md#debug)
- [debuglog](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/node_sys_.md#debuglog)
- [deprecate](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/node_sys_.md#deprecate)
- [format](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/node_sys_.md#format)
- [inherits](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/node_sys_.md#inherits)
- [inspect](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/node_sys_.md#inspect)
- [isArray](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/node_sys_.md#isarray)
- [isBoolean](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/node_sys_.md#isboolean)
- [isBuffer](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/node_sys_.md#isbuffer)
- [isDate](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/node_sys_.md#isdate)
- [isDeepStrictEqual](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/node_sys_.md#isdeepstrictequal)
- [isError](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/node_sys_.md#iserror)
- [isFunction](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/node_sys_.md#isfunction)
- [isNull](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/node_sys_.md#isnull)
- [isNullOrUndefined](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/node_sys_.md#isnullorundefined)
- [isNumber](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/node_sys_.md#isnumber)
- [isObject](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/node_sys_.md#isobject)
- [isPrimitive](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/node_sys_.md#isprimitive)
- [isRegExp](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/node_sys_.md#isregexp)
- [isString](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/node_sys_.md#isstring)
- [isSymbol](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/node_sys_.md#issymbol)
- [isUndefined](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/node_sys_.md#isundefined)
- [log](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/node_sys_.md#log)
- [promisify](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/node_sys_.md#promisify)

## Type Aliases

### CustomInspectFunction

Ƭ **CustomInspectFunction**: (`depth`: `number`, `options`: [`InspectOptionsStylized`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/util_.InspectOptionsStylized.md)) => `string`

#### Type declaration

▸ (`depth`, `options`): `string`

##### Parameters

| Name | Type |
| :------ | :------ |
| `depth` | `number` |
| `options` | [`InspectOptionsStylized`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/util_.InspectOptionsStylized.md) |

##### Returns

`string`

___

### CustomPromisify

Ƭ **CustomPromisify**<`TCustom`\>: [`CustomPromisifySymbol`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/util_.CustomPromisifySymbol.md)<`TCustom`\> \| [`CustomPromisifyLegacy`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/util_.CustomPromisifyLegacy.md)<`TCustom`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TCustom` | extends `Function` |

___

### DebugLoggerFunction

Ƭ **DebugLoggerFunction**: (`msg`: `string`, ...`param`: `unknown`[]) => `void`

#### Type declaration

▸ (`msg`, ...`param`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `msg` | `string` |
| `...param` | `unknown`[] |

##### Returns

`void`

___

### Style

Ƭ **Style**: ``"special"`` \| ``"number"`` \| ``"bigint"`` \| ``"boolean"`` \| ``"undefined"`` \| ``"null"`` \| ``"string"`` \| ``"symbol"`` \| ``"date"`` \| ``"regexp"`` \| ``"module"``

## Functions

### callbackify

▸ **callbackify**(`fn`): (`callback`: (`err`: [`ErrnoException`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/ErrnoException.md)) => `void`) => `void`

Takes an `async` function (or a function that returns a `Promise`) and returns a
function following the error-first callback style, i.e. taking
an `(err, value) => ...` callback as the last argument. In the callback, the
first argument will be the rejection reason (or `null` if the `Promise`resolved), and the second argument will be the resolved value.

```js
const util = require('util');

async function fn() {
  return 'hello world';
}
const callbackFunction = util.callbackify(fn);

callbackFunction((err, ret) => {
  if (err) throw err;
  console.log(ret);
});
```

Will print:

```text
hello world
```

The callback is executed asynchronously, and will have a limited stack trace.
If the callback throws, the process will emit an `'uncaughtException'` event, and if not handled will exit.

Since `null` has a special meaning as the first argument to a callback, if a
wrapped function rejects a `Promise` with a falsy value as a reason, the value
is wrapped in an `Error` with the original value stored in a field named`reason`.

```js
function fn() {
  return Promise.reject(null);
}
const callbackFunction = util.callbackify(fn);

callbackFunction((err, ret) => {
  // When the Promise was rejected with `null` it is wrapped with an Error and
  // the original value is stored in `reason`.
  err &#x26;&#x26; Object.hasOwn(err, 'reason') &#x26;&#x26; err.reason === null;  // true
});
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `fn` | () => `Promise`<`void`\> |

#### Returns

`fn`

a callback style function

▸ (`callback`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | (`err`: [`ErrnoException`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/ErrnoException.md)) => `void` |

##### Returns

`void`

▸ **callbackify**<`TResult`\>(`fn`): (`callback`: (`err`: [`ErrnoException`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/ErrnoException.md), `result`: `TResult`) => `void`) => `void`

#### Type parameters

| Name |
| :------ |
| `TResult` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fn` | () => `Promise`<`TResult`\> |

#### Returns

`fn`

▸ (`callback`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | (`err`: [`ErrnoException`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/ErrnoException.md), `result`: `TResult`) => `void` |

##### Returns

`void`

▸ **callbackify**<`T1`\>(`fn`): (`arg1`: `T1`, `callback`: (`err`: [`ErrnoException`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/ErrnoException.md)) => `void`) => `void`

#### Type parameters

| Name |
| :------ |
| `T1` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fn` | (`arg1`: `T1`) => `Promise`<`void`\> |

#### Returns

`fn`

▸ (`arg1`, `callback`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `arg1` | `T1` |
| `callback` | (`err`: [`ErrnoException`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/ErrnoException.md)) => `void` |

##### Returns

`void`

▸ **callbackify**<`T1`, `TResult`\>(`fn`): (`arg1`: `T1`, `callback`: (`err`: [`ErrnoException`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/ErrnoException.md), `result`: `TResult`) => `void`) => `void`

#### Type parameters

| Name |
| :------ |
| `T1` |
| `TResult` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fn` | (`arg1`: `T1`) => `Promise`<`TResult`\> |

#### Returns

`fn`

▸ (`arg1`, `callback`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `arg1` | `T1` |
| `callback` | (`err`: [`ErrnoException`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/ErrnoException.md), `result`: `TResult`) => `void` |

##### Returns

`void`

▸ **callbackify**<`T1`, `T2`\>(`fn`): (`arg1`: `T1`, `arg2`: `T2`, `callback`: (`err`: [`ErrnoException`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/ErrnoException.md)) => `void`) => `void`

#### Type parameters

| Name |
| :------ |
| `T1` |
| `T2` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fn` | (`arg1`: `T1`, `arg2`: `T2`) => `Promise`<`void`\> |

#### Returns

`fn`

▸ (`arg1`, `arg2`, `callback`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `arg1` | `T1` |
| `arg2` | `T2` |
| `callback` | (`err`: [`ErrnoException`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/ErrnoException.md)) => `void` |

##### Returns

`void`

▸ **callbackify**<`T1`, `T2`, `TResult`\>(`fn`): (`arg1`: `T1`, `arg2`: `T2`, `callback`: (`err`: [`ErrnoException`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/ErrnoException.md) \| ``null``, `result`: `TResult`) => `void`) => `void`

#### Type parameters

| Name |
| :------ |
| `T1` |
| `T2` |
| `TResult` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fn` | (`arg1`: `T1`, `arg2`: `T2`) => `Promise`<`TResult`\> |

#### Returns

`fn`

▸ (`arg1`, `arg2`, `callback`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `arg1` | `T1` |
| `arg2` | `T2` |
| `callback` | (`err`: [`ErrnoException`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/ErrnoException.md) \| ``null``, `result`: `TResult`) => `void` |

##### Returns

`void`

▸ **callbackify**<`T1`, `T2`, `T3`\>(`fn`): (`arg1`: `T1`, `arg2`: `T2`, `arg3`: `T3`, `callback`: (`err`: [`ErrnoException`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/ErrnoException.md)) => `void`) => `void`

#### Type parameters

| Name |
| :------ |
| `T1` |
| `T2` |
| `T3` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fn` | (`arg1`: `T1`, `arg2`: `T2`, `arg3`: `T3`) => `Promise`<`void`\> |

#### Returns

`fn`

▸ (`arg1`, `arg2`, `arg3`, `callback`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `arg1` | `T1` |
| `arg2` | `T2` |
| `arg3` | `T3` |
| `callback` | (`err`: [`ErrnoException`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/ErrnoException.md)) => `void` |

##### Returns

`void`

▸ **callbackify**<`T1`, `T2`, `T3`, `TResult`\>(`fn`): (`arg1`: `T1`, `arg2`: `T2`, `arg3`: `T3`, `callback`: (`err`: [`ErrnoException`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/ErrnoException.md) \| ``null``, `result`: `TResult`) => `void`) => `void`

#### Type parameters

| Name |
| :------ |
| `T1` |
| `T2` |
| `T3` |
| `TResult` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fn` | (`arg1`: `T1`, `arg2`: `T2`, `arg3`: `T3`) => `Promise`<`TResult`\> |

#### Returns

`fn`

▸ (`arg1`, `arg2`, `arg3`, `callback`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `arg1` | `T1` |
| `arg2` | `T2` |
| `arg3` | `T3` |
| `callback` | (`err`: [`ErrnoException`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/ErrnoException.md) \| ``null``, `result`: `TResult`) => `void` |

##### Returns

`void`

▸ **callbackify**<`T1`, `T2`, `T3`, `T4`\>(`fn`): (`arg1`: `T1`, `arg2`: `T2`, `arg3`: `T3`, `arg4`: `T4`, `callback`: (`err`: [`ErrnoException`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/ErrnoException.md)) => `void`) => `void`

#### Type parameters

| Name |
| :------ |
| `T1` |
| `T2` |
| `T3` |
| `T4` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fn` | (`arg1`: `T1`, `arg2`: `T2`, `arg3`: `T3`, `arg4`: `T4`) => `Promise`<`void`\> |

#### Returns

`fn`

▸ (`arg1`, `arg2`, `arg3`, `arg4`, `callback`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `arg1` | `T1` |
| `arg2` | `T2` |
| `arg3` | `T3` |
| `arg4` | `T4` |
| `callback` | (`err`: [`ErrnoException`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/ErrnoException.md)) => `void` |

##### Returns

`void`

▸ **callbackify**<`T1`, `T2`, `T3`, `T4`, `TResult`\>(`fn`): (`arg1`: `T1`, `arg2`: `T2`, `arg3`: `T3`, `arg4`: `T4`, `callback`: (`err`: [`ErrnoException`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/ErrnoException.md) \| ``null``, `result`: `TResult`) => `void`) => `void`

#### Type parameters

| Name |
| :------ |
| `T1` |
| `T2` |
| `T3` |
| `T4` |
| `TResult` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fn` | (`arg1`: `T1`, `arg2`: `T2`, `arg3`: `T3`, `arg4`: `T4`) => `Promise`<`TResult`\> |

#### Returns

`fn`

▸ (`arg1`, `arg2`, `arg3`, `arg4`, `callback`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `arg1` | `T1` |
| `arg2` | `T2` |
| `arg3` | `T3` |
| `arg4` | `T4` |
| `callback` | (`err`: [`ErrnoException`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/ErrnoException.md) \| ``null``, `result`: `TResult`) => `void` |

##### Returns

`void`

▸ **callbackify**<`T1`, `T2`, `T3`, `T4`, `T5`\>(`fn`): (`arg1`: `T1`, `arg2`: `T2`, `arg3`: `T3`, `arg4`: `T4`, `arg5`: `T5`, `callback`: (`err`: [`ErrnoException`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/ErrnoException.md)) => `void`) => `void`

#### Type parameters

| Name |
| :------ |
| `T1` |
| `T2` |
| `T3` |
| `T4` |
| `T5` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fn` | (`arg1`: `T1`, `arg2`: `T2`, `arg3`: `T3`, `arg4`: `T4`, `arg5`: `T5`) => `Promise`<`void`\> |

#### Returns

`fn`

▸ (`arg1`, `arg2`, `arg3`, `arg4`, `arg5`, `callback`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `arg1` | `T1` |
| `arg2` | `T2` |
| `arg3` | `T3` |
| `arg4` | `T4` |
| `arg5` | `T5` |
| `callback` | (`err`: [`ErrnoException`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/ErrnoException.md)) => `void` |

##### Returns

`void`

▸ **callbackify**<`T1`, `T2`, `T3`, `T4`, `T5`, `TResult`\>(`fn`): (`arg1`: `T1`, `arg2`: `T2`, `arg3`: `T3`, `arg4`: `T4`, `arg5`: `T5`, `callback`: (`err`: [`ErrnoException`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/ErrnoException.md) \| ``null``, `result`: `TResult`) => `void`) => `void`

#### Type parameters

| Name |
| :------ |
| `T1` |
| `T2` |
| `T3` |
| `T4` |
| `T5` |
| `TResult` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fn` | (`arg1`: `T1`, `arg2`: `T2`, `arg3`: `T3`, `arg4`: `T4`, `arg5`: `T5`) => `Promise`<`TResult`\> |

#### Returns

`fn`

▸ (`arg1`, `arg2`, `arg3`, `arg4`, `arg5`, `callback`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `arg1` | `T1` |
| `arg2` | `T2` |
| `arg3` | `T3` |
| `arg4` | `T4` |
| `arg5` | `T5` |
| `callback` | (`err`: [`ErrnoException`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/ErrnoException.md) \| ``null``, `result`: `TResult`) => `void` |

##### Returns

`void`

▸ **callbackify**<`T1`, `T2`, `T3`, `T4`, `T5`, `T6`\>(`fn`): (`arg1`: `T1`, `arg2`: `T2`, `arg3`: `T3`, `arg4`: `T4`, `arg5`: `T5`, `arg6`: `T6`, `callback`: (`err`: [`ErrnoException`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/ErrnoException.md)) => `void`) => `void`

#### Type parameters

| Name |
| :------ |
| `T1` |
| `T2` |
| `T3` |
| `T4` |
| `T5` |
| `T6` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fn` | (`arg1`: `T1`, `arg2`: `T2`, `arg3`: `T3`, `arg4`: `T4`, `arg5`: `T5`, `arg6`: `T6`) => `Promise`<`void`\> |

#### Returns

`fn`

▸ (`arg1`, `arg2`, `arg3`, `arg4`, `arg5`, `arg6`, `callback`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `arg1` | `T1` |
| `arg2` | `T2` |
| `arg3` | `T3` |
| `arg4` | `T4` |
| `arg5` | `T5` |
| `arg6` | `T6` |
| `callback` | (`err`: [`ErrnoException`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/ErrnoException.md)) => `void` |

##### Returns

`void`

▸ **callbackify**<`T1`, `T2`, `T3`, `T4`, `T5`, `T6`, `TResult`\>(`fn`): (`arg1`: `T1`, `arg2`: `T2`, `arg3`: `T3`, `arg4`: `T4`, `arg5`: `T5`, `arg6`: `T6`, `callback`: (`err`: [`ErrnoException`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/ErrnoException.md) \| ``null``, `result`: `TResult`) => `void`) => `void`

#### Type parameters

| Name |
| :------ |
| `T1` |
| `T2` |
| `T3` |
| `T4` |
| `T5` |
| `T6` |
| `TResult` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fn` | (`arg1`: `T1`, `arg2`: `T2`, `arg3`: `T3`, `arg4`: `T4`, `arg5`: `T5`, `arg6`: `T6`) => `Promise`<`TResult`\> |

#### Returns

`fn`

▸ (`arg1`, `arg2`, `arg3`, `arg4`, `arg5`, `arg6`, `callback`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `arg1` | `T1` |
| `arg2` | `T2` |
| `arg3` | `T3` |
| `arg4` | `T4` |
| `arg5` | `T5` |
| `arg6` | `T6` |
| `callback` | (`err`: [`ErrnoException`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/ErrnoException.md) \| ``null``, `result`: `TResult`) => `void` |

##### Returns

`void`

▸ **callbackify**(`fn`): (`callback`: (`err`: [`ErrnoException`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/ErrnoException.md)) => `void`) => `void`

Takes an `async` function (or a function that returns a `Promise`) and returns a
function following the error-first callback style, i.e. taking
an `(err, value) => ...` callback as the last argument. In the callback, the
first argument will be the rejection reason (or `null` if the `Promise`resolved), and the second argument will be the resolved value.

```js
const util = require('util');

async function fn() {
  return 'hello world';
}
const callbackFunction = util.callbackify(fn);

callbackFunction((err, ret) => {
  if (err) throw err;
  console.log(ret);
});
```

Will print:

```text
hello world
```

The callback is executed asynchronously, and will have a limited stack trace.
If the callback throws, the process will emit an `'uncaughtException'` event, and if not handled will exit.

Since `null` has a special meaning as the first argument to a callback, if a
wrapped function rejects a `Promise` with a falsy value as a reason, the value
is wrapped in an `Error` with the original value stored in a field named`reason`.

```js
function fn() {
  return Promise.reject(null);
}
const callbackFunction = util.callbackify(fn);

callbackFunction((err, ret) => {
  // When the Promise was rejected with `null` it is wrapped with an Error and
  // the original value is stored in `reason`.
  err &#x26;&#x26; Object.hasOwn(err, 'reason') &#x26;&#x26; err.reason === null;  // true
});
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `fn` | () => `Promise`<`void`\> |

#### Returns

`fn`

a callback style function

▸ (`callback`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | (`err`: [`ErrnoException`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/ErrnoException.md)) => `void` |

##### Returns

`void`

▸ **callbackify**<`TResult`\>(`fn`): (`callback`: (`err`: [`ErrnoException`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/ErrnoException.md), `result`: `TResult`) => `void`) => `void`

#### Type parameters

| Name |
| :------ |
| `TResult` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fn` | () => `Promise`<`TResult`\> |

#### Returns

`fn`

▸ (`callback`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | (`err`: [`ErrnoException`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/ErrnoException.md), `result`: `TResult`) => `void` |

##### Returns

`void`

▸ **callbackify**<`T1`\>(`fn`): (`arg1`: `T1`, `callback`: (`err`: [`ErrnoException`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/ErrnoException.md)) => `void`) => `void`

#### Type parameters

| Name |
| :------ |
| `T1` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fn` | (`arg1`: `T1`) => `Promise`<`void`\> |

#### Returns

`fn`

▸ (`arg1`, `callback`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `arg1` | `T1` |
| `callback` | (`err`: [`ErrnoException`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/ErrnoException.md)) => `void` |

##### Returns

`void`

▸ **callbackify**<`T1`, `TResult`\>(`fn`): (`arg1`: `T1`, `callback`: (`err`: [`ErrnoException`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/ErrnoException.md), `result`: `TResult`) => `void`) => `void`

#### Type parameters

| Name |
| :------ |
| `T1` |
| `TResult` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fn` | (`arg1`: `T1`) => `Promise`<`TResult`\> |

#### Returns

`fn`

▸ (`arg1`, `callback`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `arg1` | `T1` |
| `callback` | (`err`: [`ErrnoException`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/ErrnoException.md), `result`: `TResult`) => `void` |

##### Returns

`void`

▸ **callbackify**<`T1`, `T2`\>(`fn`): (`arg1`: `T1`, `arg2`: `T2`, `callback`: (`err`: [`ErrnoException`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/ErrnoException.md)) => `void`) => `void`

#### Type parameters

| Name |
| :------ |
| `T1` |
| `T2` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fn` | (`arg1`: `T1`, `arg2`: `T2`) => `Promise`<`void`\> |

#### Returns

`fn`

▸ (`arg1`, `arg2`, `callback`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `arg1` | `T1` |
| `arg2` | `T2` |
| `callback` | (`err`: [`ErrnoException`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/ErrnoException.md)) => `void` |

##### Returns

`void`

▸ **callbackify**<`T1`, `T2`, `TResult`\>(`fn`): (`arg1`: `T1`, `arg2`: `T2`, `callback`: (`err`: [`ErrnoException`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/ErrnoException.md) \| ``null``, `result`: `TResult`) => `void`) => `void`

#### Type parameters

| Name |
| :------ |
| `T1` |
| `T2` |
| `TResult` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fn` | (`arg1`: `T1`, `arg2`: `T2`) => `Promise`<`TResult`\> |

#### Returns

`fn`

▸ (`arg1`, `arg2`, `callback`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `arg1` | `T1` |
| `arg2` | `T2` |
| `callback` | (`err`: [`ErrnoException`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/ErrnoException.md) \| ``null``, `result`: `TResult`) => `void` |

##### Returns

`void`

▸ **callbackify**<`T1`, `T2`, `T3`\>(`fn`): (`arg1`: `T1`, `arg2`: `T2`, `arg3`: `T3`, `callback`: (`err`: [`ErrnoException`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/ErrnoException.md)) => `void`) => `void`

#### Type parameters

| Name |
| :------ |
| `T1` |
| `T2` |
| `T3` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fn` | (`arg1`: `T1`, `arg2`: `T2`, `arg3`: `T3`) => `Promise`<`void`\> |

#### Returns

`fn`

▸ (`arg1`, `arg2`, `arg3`, `callback`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `arg1` | `T1` |
| `arg2` | `T2` |
| `arg3` | `T3` |
| `callback` | (`err`: [`ErrnoException`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/ErrnoException.md)) => `void` |

##### Returns

`void`

▸ **callbackify**<`T1`, `T2`, `T3`, `TResult`\>(`fn`): (`arg1`: `T1`, `arg2`: `T2`, `arg3`: `T3`, `callback`: (`err`: [`ErrnoException`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/ErrnoException.md) \| ``null``, `result`: `TResult`) => `void`) => `void`

#### Type parameters

| Name |
| :------ |
| `T1` |
| `T2` |
| `T3` |
| `TResult` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fn` | (`arg1`: `T1`, `arg2`: `T2`, `arg3`: `T3`) => `Promise`<`TResult`\> |

#### Returns

`fn`

▸ (`arg1`, `arg2`, `arg3`, `callback`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `arg1` | `T1` |
| `arg2` | `T2` |
| `arg3` | `T3` |
| `callback` | (`err`: [`ErrnoException`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/ErrnoException.md) \| ``null``, `result`: `TResult`) => `void` |

##### Returns

`void`

▸ **callbackify**<`T1`, `T2`, `T3`, `T4`\>(`fn`): (`arg1`: `T1`, `arg2`: `T2`, `arg3`: `T3`, `arg4`: `T4`, `callback`: (`err`: [`ErrnoException`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/ErrnoException.md)) => `void`) => `void`

#### Type parameters

| Name |
| :------ |
| `T1` |
| `T2` |
| `T3` |
| `T4` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fn` | (`arg1`: `T1`, `arg2`: `T2`, `arg3`: `T3`, `arg4`: `T4`) => `Promise`<`void`\> |

#### Returns

`fn`

▸ (`arg1`, `arg2`, `arg3`, `arg4`, `callback`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `arg1` | `T1` |
| `arg2` | `T2` |
| `arg3` | `T3` |
| `arg4` | `T4` |
| `callback` | (`err`: [`ErrnoException`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/ErrnoException.md)) => `void` |

##### Returns

`void`

▸ **callbackify**<`T1`, `T2`, `T3`, `T4`, `TResult`\>(`fn`): (`arg1`: `T1`, `arg2`: `T2`, `arg3`: `T3`, `arg4`: `T4`, `callback`: (`err`: [`ErrnoException`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/ErrnoException.md) \| ``null``, `result`: `TResult`) => `void`) => `void`

#### Type parameters

| Name |
| :------ |
| `T1` |
| `T2` |
| `T3` |
| `T4` |
| `TResult` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fn` | (`arg1`: `T1`, `arg2`: `T2`, `arg3`: `T3`, `arg4`: `T4`) => `Promise`<`TResult`\> |

#### Returns

`fn`

▸ (`arg1`, `arg2`, `arg3`, `arg4`, `callback`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `arg1` | `T1` |
| `arg2` | `T2` |
| `arg3` | `T3` |
| `arg4` | `T4` |
| `callback` | (`err`: [`ErrnoException`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/ErrnoException.md) \| ``null``, `result`: `TResult`) => `void` |

##### Returns

`void`

▸ **callbackify**<`T1`, `T2`, `T3`, `T4`, `T5`\>(`fn`): (`arg1`: `T1`, `arg2`: `T2`, `arg3`: `T3`, `arg4`: `T4`, `arg5`: `T5`, `callback`: (`err`: [`ErrnoException`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/ErrnoException.md)) => `void`) => `void`

#### Type parameters

| Name |
| :------ |
| `T1` |
| `T2` |
| `T3` |
| `T4` |
| `T5` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fn` | (`arg1`: `T1`, `arg2`: `T2`, `arg3`: `T3`, `arg4`: `T4`, `arg5`: `T5`) => `Promise`<`void`\> |

#### Returns

`fn`

▸ (`arg1`, `arg2`, `arg3`, `arg4`, `arg5`, `callback`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `arg1` | `T1` |
| `arg2` | `T2` |
| `arg3` | `T3` |
| `arg4` | `T4` |
| `arg5` | `T5` |
| `callback` | (`err`: [`ErrnoException`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/ErrnoException.md)) => `void` |

##### Returns

`void`

▸ **callbackify**<`T1`, `T2`, `T3`, `T4`, `T5`, `TResult`\>(`fn`): (`arg1`: `T1`, `arg2`: `T2`, `arg3`: `T3`, `arg4`: `T4`, `arg5`: `T5`, `callback`: (`err`: [`ErrnoException`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/ErrnoException.md) \| ``null``, `result`: `TResult`) => `void`) => `void`

#### Type parameters

| Name |
| :------ |
| `T1` |
| `T2` |
| `T3` |
| `T4` |
| `T5` |
| `TResult` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fn` | (`arg1`: `T1`, `arg2`: `T2`, `arg3`: `T3`, `arg4`: `T4`, `arg5`: `T5`) => `Promise`<`TResult`\> |

#### Returns

`fn`

▸ (`arg1`, `arg2`, `arg3`, `arg4`, `arg5`, `callback`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `arg1` | `T1` |
| `arg2` | `T2` |
| `arg3` | `T3` |
| `arg4` | `T4` |
| `arg5` | `T5` |
| `callback` | (`err`: [`ErrnoException`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/ErrnoException.md) \| ``null``, `result`: `TResult`) => `void` |

##### Returns

`void`

▸ **callbackify**<`T1`, `T2`, `T3`, `T4`, `T5`, `T6`\>(`fn`): (`arg1`: `T1`, `arg2`: `T2`, `arg3`: `T3`, `arg4`: `T4`, `arg5`: `T5`, `arg6`: `T6`, `callback`: (`err`: [`ErrnoException`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/ErrnoException.md)) => `void`) => `void`

#### Type parameters

| Name |
| :------ |
| `T1` |
| `T2` |
| `T3` |
| `T4` |
| `T5` |
| `T6` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fn` | (`arg1`: `T1`, `arg2`: `T2`, `arg3`: `T3`, `arg4`: `T4`, `arg5`: `T5`, `arg6`: `T6`) => `Promise`<`void`\> |

#### Returns

`fn`

▸ (`arg1`, `arg2`, `arg3`, `arg4`, `arg5`, `arg6`, `callback`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `arg1` | `T1` |
| `arg2` | `T2` |
| `arg3` | `T3` |
| `arg4` | `T4` |
| `arg5` | `T5` |
| `arg6` | `T6` |
| `callback` | (`err`: [`ErrnoException`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/ErrnoException.md)) => `void` |

##### Returns

`void`

▸ **callbackify**<`T1`, `T2`, `T3`, `T4`, `T5`, `T6`, `TResult`\>(`fn`): (`arg1`: `T1`, `arg2`: `T2`, `arg3`: `T3`, `arg4`: `T4`, `arg5`: `T5`, `arg6`: `T6`, `callback`: (`err`: [`ErrnoException`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/ErrnoException.md) \| ``null``, `result`: `TResult`) => `void`) => `void`

#### Type parameters

| Name |
| :------ |
| `T1` |
| `T2` |
| `T3` |
| `T4` |
| `T5` |
| `T6` |
| `TResult` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fn` | (`arg1`: `T1`, `arg2`: `T2`, `arg3`: `T3`, `arg4`: `T4`, `arg5`: `T5`, `arg6`: `T6`) => `Promise`<`TResult`\> |

#### Returns

`fn`

▸ (`arg1`, `arg2`, `arg3`, `arg4`, `arg5`, `arg6`, `callback`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `arg1` | `T1` |
| `arg2` | `T2` |
| `arg3` | `T3` |
| `arg4` | `T4` |
| `arg5` | `T5` |
| `arg6` | `T6` |
| `callback` | (`err`: [`ErrnoException`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/ErrnoException.md) \| ``null``, `result`: `TResult`) => `void` |

##### Returns

`void`

___

### debug

▸ **debug**(`section`, `callback?`): [`DebugLogger`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/util_.DebugLogger.md)

The `util.debuglog()` method is used to create a function that conditionally
writes debug messages to `stderr` based on the existence of the `NODE_DEBUG`environment variable. If the `section` name appears within the value of that
environment variable, then the returned function operates similar to `console.error()`. If not, then the returned function is a no-op.

```js
const util = require('util');
const debuglog = util.debuglog('foo');

debuglog('hello from foo [%d]', 123);
```

If this program is run with `NODE_DEBUG=foo` in the environment, then
it will output something like:

```console
FOO 3245: hello from foo [123]
```

where `3245` is the process id. If it is not run with that
environment variable set, then it will not print anything.

The `section` supports wildcard also:

```js
const util = require('util');
const debuglog = util.debuglog('foo-bar');

debuglog('hi there, it\'s foo-bar [%d]', 2333);
```

if it is run with `NODE_DEBUG=foo*` in the environment, then it will output
something like:

```console
FOO-BAR 3257: hi there, it's foo-bar [2333]
```

Multiple comma-separated `section` names may be specified in the `NODE_DEBUG`environment variable: `NODE_DEBUG=fs,net,tls`.

The optional `callback` argument can be used to replace the logging function
with a different function that doesn't have any initialization or
unnecessary wrapping.

```js
const util = require('util');
let debuglog = util.debuglog('internals', (debug) => {
  // Replace with a logging function that optimizes out
  // testing if the section is enabled
  debuglog = debug;
});
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `section` | `string` | A string identifying the portion of the application for which the `debuglog` function is being created. |
| `callback?` | (`fn`: [`DebugLoggerFunction`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/util_.md#debugloggerfunction)) => `void` | A callback invoked the first time the logging function is called with a function argument that is a more optimized logging function. |

#### Returns

[`DebugLogger`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/util_.DebugLogger.md)

The logging function

▸ **debug**(`section`, `callback?`): [`DebugLogger`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/util_.DebugLogger.md)

The `util.debuglog()` method is used to create a function that conditionally
writes debug messages to `stderr` based on the existence of the `NODE_DEBUG`environment variable. If the `section` name appears within the value of that
environment variable, then the returned function operates similar to `console.error()`. If not, then the returned function is a no-op.

```js
const util = require('util');
const debuglog = util.debuglog('foo');

debuglog('hello from foo [%d]', 123);
```

If this program is run with `NODE_DEBUG=foo` in the environment, then
it will output something like:

```console
FOO 3245: hello from foo [123]
```

where `3245` is the process id. If it is not run with that
environment variable set, then it will not print anything.

The `section` supports wildcard also:

```js
const util = require('util');
const debuglog = util.debuglog('foo-bar');

debuglog('hi there, it\'s foo-bar [%d]', 2333);
```

if it is run with `NODE_DEBUG=foo*` in the environment, then it will output
something like:

```console
FOO-BAR 3257: hi there, it's foo-bar [2333]
```

Multiple comma-separated `section` names may be specified in the `NODE_DEBUG`environment variable: `NODE_DEBUG=fs,net,tls`.

The optional `callback` argument can be used to replace the logging function
with a different function that doesn't have any initialization or
unnecessary wrapping.

```js
const util = require('util');
let debuglog = util.debuglog('internals', (debug) => {
  // Replace with a logging function that optimizes out
  // testing if the section is enabled
  debuglog = debug;
});
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `section` | `string` | A string identifying the portion of the application for which the `debuglog` function is being created. |
| `callback?` | (`fn`: [`DebugLoggerFunction`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/util_.md#debugloggerfunction)) => `void` | A callback invoked the first time the logging function is called with a function argument that is a more optimized logging function. |

#### Returns

[`DebugLogger`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/util_.DebugLogger.md)

The logging function

___

### debuglog

▸ **debuglog**(`section`, `callback?`): [`DebugLogger`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/util_.DebugLogger.md)

The `util.debuglog()` method is used to create a function that conditionally
writes debug messages to `stderr` based on the existence of the `NODE_DEBUG`environment variable. If the `section` name appears within the value of that
environment variable, then the returned function operates similar to `console.error()`. If not, then the returned function is a no-op.

```js
const util = require('util');
const debuglog = util.debuglog('foo');

debuglog('hello from foo [%d]', 123);
```

If this program is run with `NODE_DEBUG=foo` in the environment, then
it will output something like:

```console
FOO 3245: hello from foo [123]
```

where `3245` is the process id. If it is not run with that
environment variable set, then it will not print anything.

The `section` supports wildcard also:

```js
const util = require('util');
const debuglog = util.debuglog('foo-bar');

debuglog('hi there, it\'s foo-bar [%d]', 2333);
```

if it is run with `NODE_DEBUG=foo*` in the environment, then it will output
something like:

```console
FOO-BAR 3257: hi there, it's foo-bar [2333]
```

Multiple comma-separated `section` names may be specified in the `NODE_DEBUG`environment variable: `NODE_DEBUG=fs,net,tls`.

The optional `callback` argument can be used to replace the logging function
with a different function that doesn't have any initialization or
unnecessary wrapping.

```js
const util = require('util');
let debuglog = util.debuglog('internals', (debug) => {
  // Replace with a logging function that optimizes out
  // testing if the section is enabled
  debuglog = debug;
});
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `section` | `string` | A string identifying the portion of the application for which the `debuglog` function is being created. |
| `callback?` | (`fn`: [`DebugLoggerFunction`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/util_.md#debugloggerfunction)) => `void` | A callback invoked the first time the logging function is called with a function argument that is a more optimized logging function. |

#### Returns

[`DebugLogger`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/util_.DebugLogger.md)

The logging function

▸ **debuglog**(`section`, `callback?`): [`DebugLogger`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/util_.DebugLogger.md)

The `util.debuglog()` method is used to create a function that conditionally
writes debug messages to `stderr` based on the existence of the `NODE_DEBUG`environment variable. If the `section` name appears within the value of that
environment variable, then the returned function operates similar to `console.error()`. If not, then the returned function is a no-op.

```js
const util = require('util');
const debuglog = util.debuglog('foo');

debuglog('hello from foo [%d]', 123);
```

If this program is run with `NODE_DEBUG=foo` in the environment, then
it will output something like:

```console
FOO 3245: hello from foo [123]
```

where `3245` is the process id. If it is not run with that
environment variable set, then it will not print anything.

The `section` supports wildcard also:

```js
const util = require('util');
const debuglog = util.debuglog('foo-bar');

debuglog('hi there, it\'s foo-bar [%d]', 2333);
```

if it is run with `NODE_DEBUG=foo*` in the environment, then it will output
something like:

```console
FOO-BAR 3257: hi there, it's foo-bar [2333]
```

Multiple comma-separated `section` names may be specified in the `NODE_DEBUG`environment variable: `NODE_DEBUG=fs,net,tls`.

The optional `callback` argument can be used to replace the logging function
with a different function that doesn't have any initialization or
unnecessary wrapping.

```js
const util = require('util');
let debuglog = util.debuglog('internals', (debug) => {
  // Replace with a logging function that optimizes out
  // testing if the section is enabled
  debuglog = debug;
});
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `section` | `string` | A string identifying the portion of the application for which the `debuglog` function is being created. |
| `callback?` | (`fn`: [`DebugLoggerFunction`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/util_.md#debugloggerfunction)) => `void` | A callback invoked the first time the logging function is called with a function argument that is a more optimized logging function. |

#### Returns

[`DebugLogger`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/util_.DebugLogger.md)

The logging function

___

### deprecate

▸ **deprecate**<`T`\>(`fn`, `msg`, `code?`): `T`

The `util.deprecate()` method wraps `fn` (which may be a function or class) in
such a way that it is marked as deprecated.

```js
const util = require('util');

exports.obsoleteFunction = util.deprecate(() => {
  // Do something here.
}, 'obsoleteFunction() is deprecated. Use newShinyFunction() instead.');
```

When called, `util.deprecate()` will return a function that will emit a`DeprecationWarning` using the `'warning'` event. The warning will
be emitted and printed to `stderr` the first time the returned function is
called. After the warning is emitted, the wrapped function is called without
emitting a warning.

If the same optional `code` is supplied in multiple calls to `util.deprecate()`,
the warning will be emitted only once for that `code`.

```js
const util = require('util');

const fn1 = util.deprecate(someFunction, someMessage, 'DEP0001');
const fn2 = util.deprecate(someOtherFunction, someOtherMessage, 'DEP0001');
fn1(); // Emits a deprecation warning with code DEP0001
fn2(); // Does not emit a deprecation warning because it has the same code
```

If either the `--no-deprecation` or `--no-warnings` command-line flags are
used, or if the `process.noDeprecation` property is set to `true`_prior_ to
the first deprecation warning, the `util.deprecate()` method does nothing.

If the `--trace-deprecation` or `--trace-warnings` command-line flags are set,
or the `process.traceDeprecation` property is set to `true`, a warning and a
stack trace are printed to `stderr` the first time the deprecated function is
called.

If the `--throw-deprecation` command-line flag is set, or the`process.throwDeprecation` property is set to `true`, then an exception will be
thrown when the deprecated function is called.

The `--throw-deprecation` command-line flag and `process.throwDeprecation`property take precedence over `--trace-deprecation` and`process.traceDeprecation`.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `Function` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `fn` | `T` | The function that is being deprecated. |
| `msg` | `string` | A warning message to display when the deprecated function is invoked. |
| `code?` | `string` | A deprecation code. See the `list of deprecated APIs` for a list of codes. |

#### Returns

`T`

The deprecated function wrapped to emit a warning.

▸ **deprecate**<`T`\>(`fn`, `msg`, `code?`): `T`

The `util.deprecate()` method wraps `fn` (which may be a function or class) in
such a way that it is marked as deprecated.

```js
const util = require('util');

exports.obsoleteFunction = util.deprecate(() => {
  // Do something here.
}, 'obsoleteFunction() is deprecated. Use newShinyFunction() instead.');
```

When called, `util.deprecate()` will return a function that will emit a`DeprecationWarning` using the `'warning'` event. The warning will
be emitted and printed to `stderr` the first time the returned function is
called. After the warning is emitted, the wrapped function is called without
emitting a warning.

If the same optional `code` is supplied in multiple calls to `util.deprecate()`,
the warning will be emitted only once for that `code`.

```js
const util = require('util');

const fn1 = util.deprecate(someFunction, someMessage, 'DEP0001');
const fn2 = util.deprecate(someOtherFunction, someOtherMessage, 'DEP0001');
fn1(); // Emits a deprecation warning with code DEP0001
fn2(); // Does not emit a deprecation warning because it has the same code
```

If either the `--no-deprecation` or `--no-warnings` command-line flags are
used, or if the `process.noDeprecation` property is set to `true`_prior_ to
the first deprecation warning, the `util.deprecate()` method does nothing.

If the `--trace-deprecation` or `--trace-warnings` command-line flags are set,
or the `process.traceDeprecation` property is set to `true`, a warning and a
stack trace are printed to `stderr` the first time the deprecated function is
called.

If the `--throw-deprecation` command-line flag is set, or the`process.throwDeprecation` property is set to `true`, then an exception will be
thrown when the deprecated function is called.

The `--throw-deprecation` command-line flag and `process.throwDeprecation`property take precedence over `--trace-deprecation` and`process.traceDeprecation`.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `Function` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `fn` | `T` | The function that is being deprecated. |
| `msg` | `string` | A warning message to display when the deprecated function is invoked. |
| `code?` | `string` | A deprecation code. See the `list of deprecated APIs` for a list of codes. |

#### Returns

`T`

The deprecated function wrapped to emit a warning.

___

### format

▸ **format**(`format?`, ...`param`): `string`

The `util.format()` method returns a formatted string using the first argument
as a `printf`\-like format string which can contain zero or more format
specifiers. Each specifier is replaced with the converted value from the
corresponding argument. Supported specifiers are:

If a specifier does not have a corresponding argument, it is not replaced:

```js
util.format('%s:%s', 'foo');
// Returns: 'foo:%s'
```

Values that are not part of the format string are formatted using`util.inspect()` if their type is not `string`.

If there are more arguments passed to the `util.format()` method than the
number of specifiers, the extra arguments are concatenated to the returned
string, separated by spaces:

```js
util.format('%s:%s', 'foo', 'bar', 'baz');
// Returns: 'foo:bar baz'
```

If the first argument does not contain a valid format specifier, `util.format()`returns a string that is the concatenation of all arguments separated by spaces:

```js
util.format(1, 2, 3);
// Returns: '1 2 3'
```

If only one argument is passed to `util.format()`, it is returned as it is
without any formatting:

```js
util.format('%% %s');
// Returns: '%% %s'
```

`util.format()` is a synchronous method that is intended as a debugging tool.
Some input values can have a significant performance overhead that can block the
event loop. Use this function with care and never in a hot code path.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `format?` | `any` | A `printf`-like format string. |
| `...param` | `any`[] | - |

#### Returns

`string`

▸ **format**(`format?`, ...`param`): `string`

The `util.format()` method returns a formatted string using the first argument
as a `printf`\-like format string which can contain zero or more format
specifiers. Each specifier is replaced with the converted value from the
corresponding argument. Supported specifiers are:

If a specifier does not have a corresponding argument, it is not replaced:

```js
util.format('%s:%s', 'foo');
// Returns: 'foo:%s'
```

Values that are not part of the format string are formatted using`util.inspect()` if their type is not `string`.

If there are more arguments passed to the `util.format()` method than the
number of specifiers, the extra arguments are concatenated to the returned
string, separated by spaces:

```js
util.format('%s:%s', 'foo', 'bar', 'baz');
// Returns: 'foo:bar baz'
```

If the first argument does not contain a valid format specifier, `util.format()`returns a string that is the concatenation of all arguments separated by spaces:

```js
util.format(1, 2, 3);
// Returns: '1 2 3'
```

If only one argument is passed to `util.format()`, it is returned as it is
without any formatting:

```js
util.format('%% %s');
// Returns: '%% %s'
```

`util.format()` is a synchronous method that is intended as a debugging tool.
Some input values can have a significant performance overhead that can block the
event loop. Use this function with care and never in a hot code path.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `format?` | `any` | A `printf`-like format string. |
| `...param` | `any`[] | - |

#### Returns

`string`

___

### inherits

▸ **inherits**(`constructor`, `superConstructor`): `void`

Usage of `util.inherits()` is discouraged. Please use the ES6 `class` and`extends` keywords to get language level inheritance support. Also note
that the two styles are [semantically incompatible](https://github.com/nodejs/node/issues/4179).

Inherit the prototype methods from one [constructor](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/constructor) into another. The
prototype of `constructor` will be set to a new object created from`superConstructor`.

This mainly adds some input validation on top of`Object.setPrototypeOf(constructor.prototype, superConstructor.prototype)`.
As an additional convenience, `superConstructor` will be accessible
through the `constructor.super_` property.

```js
const util = require('util');
const EventEmitter = require('events');

function MyStream() {
  EventEmitter.call(this);
}

util.inherits(MyStream, EventEmitter);

MyStream.prototype.write = function(data) {
  this.emit('data', data);
};

const stream = new MyStream();

console.log(stream instanceof EventEmitter); // true
console.log(MyStream.super_ === EventEmitter); // true

stream.on('data', (data) => {
  console.log(`Received data: "${data}"`);
});
stream.write('It works!'); // Received data: "It works!"
```

ES6 example using `class` and `extends`:

```js
const EventEmitter = require('events');

class MyStream extends EventEmitter {
  write(data) {
    this.emit('data', data);
  }
}

const stream = new MyStream();

stream.on('data', (data) => {
  console.log(`Received data: "${data}"`);
});
stream.write('With ES6');
```

**`Deprecated`**

Legacy: Use ES2015 class syntax and `extends` keyword instead.

#### Parameters

| Name | Type |
| :------ | :------ |
| `constructor` | `unknown` |
| `superConstructor` | `unknown` |

#### Returns

`void`

▸ **inherits**(`constructor`, `superConstructor`): `void`

Usage of `util.inherits()` is discouraged. Please use the ES6 `class` and`extends` keywords to get language level inheritance support. Also note
that the two styles are [semantically incompatible](https://github.com/nodejs/node/issues/4179).

Inherit the prototype methods from one [constructor](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/constructor) into another. The
prototype of `constructor` will be set to a new object created from`superConstructor`.

This mainly adds some input validation on top of`Object.setPrototypeOf(constructor.prototype, superConstructor.prototype)`.
As an additional convenience, `superConstructor` will be accessible
through the `constructor.super_` property.

```js
const util = require('util');
const EventEmitter = require('events');

function MyStream() {
  EventEmitter.call(this);
}

util.inherits(MyStream, EventEmitter);

MyStream.prototype.write = function(data) {
  this.emit('data', data);
};

const stream = new MyStream();

console.log(stream instanceof EventEmitter); // true
console.log(MyStream.super_ === EventEmitter); // true

stream.on('data', (data) => {
  console.log(`Received data: "${data}"`);
});
stream.write('It works!'); // Received data: "It works!"
```

ES6 example using `class` and `extends`:

```js
const EventEmitter = require('events');

class MyStream extends EventEmitter {
  write(data) {
    this.emit('data', data);
  }
}

const stream = new MyStream();

stream.on('data', (data) => {
  console.log(`Received data: "${data}"`);
});
stream.write('With ES6');
```

**`Deprecated`**

Legacy: Use ES2015 class syntax and `extends` keyword instead.

#### Parameters

| Name | Type |
| :------ | :------ |
| `constructor` | `unknown` |
| `superConstructor` | `unknown` |

#### Returns

`void`

___

### inspect

▸ **inspect**(`object`, `showHidden?`, `depth?`, `color?`): `string`

The `util.inspect()` method returns a string representation of `object` that is
intended for debugging. The output of `util.inspect` may change at any time
and should not be depended upon programmatically. Additional `options` may be
passed that alter the result.`util.inspect()` will use the constructor's name and/or `@@toStringTag` to make
an identifiable tag for an inspected value.

```js
class Foo {
  get [Symbol.toStringTag]() {
    return 'bar';
  }
}

class Bar {}

const baz = Object.create(null, { [Symbol.toStringTag]: { value: 'foo' } });

util.inspect(new Foo()); // 'Foo [bar] {}'
util.inspect(new Bar()); // 'Bar {}'
util.inspect(baz);       // '[foo] {}'
```

Circular references point to their anchor by using a reference index:

```js
const { inspect } = require('util');

const obj = {};
obj.a = [obj];
obj.b = {};
obj.b.inner = obj.b;
obj.b.obj = obj;

console.log(inspect(obj));
// <ref *1> {
//   a: [ [Circular *1] ],
//   b: <ref *2> { inner: [Circular *2], obj: [Circular *1] }
// }
```

The following example inspects all properties of the `util` object:

```js
const util = require('util');

console.log(util.inspect(util, { showHidden: true, depth: null }));
```

The following example highlights the effect of the `compact` option:

```js
const util = require('util');

const o = {
  a: [1, 2, [[
    'Lorem ipsum dolor sit amet,\nconsectetur adipiscing elit, sed do ' +
      'eiusmod \ntempor incididunt ut labore et dolore magna aliqua.',
    'test',
    'foo']], 4],
  b: new Map([['za', 1], ['zb', 'test']])
};
console.log(util.inspect(o, { compact: true, depth: 5, breakLength: 80 }));

// { a:
//   [ 1,
//     2,
//     [ [ 'Lorem ipsum dolor sit amet,\nconsectetur [...]', // A long line
//           'test',
//           'foo' ] ],
//     4 ],
//   b: Map(2) { 'za' => 1, 'zb' => 'test' } }

// Setting `compact` to false or an integer creates more reader friendly output.
console.log(util.inspect(o, { compact: false, depth: 5, breakLength: 80 }));

// {
//   a: [
//     1,
//     2,
//     [
//       [
//         'Lorem ipsum dolor sit amet,\n' +
//           'consectetur adipiscing elit, sed do eiusmod \n' +
//           'tempor incididunt ut labore et dolore magna aliqua.',
//         'test',
//         'foo'
//       ]
//     ],
//     4
//   ],
//   b: Map(2) {
//     'za' => 1,
//     'zb' => 'test'
//   }
// }

// Setting `breakLength` to e.g. 150 will print the "Lorem ipsum" text in a
// single line.
```

The `showHidden` option allows [`WeakMap`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WeakMap) and
[`WeakSet`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WeakSet) entries to be
inspected. If there are more entries than `maxArrayLength`, there is no
guarantee which entries are displayed. That means retrieving the same [`WeakSet`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WeakSet) entries twice may
result in different output. Furthermore, entries
with no remaining strong references may be garbage collected at any time.

```js
const { inspect } = require('util');

const obj = { a: 1 };
const obj2 = { b: 2 };
const weakSet = new WeakSet([obj, obj2]);

console.log(inspect(weakSet, { showHidden: true }));
// WeakSet { { a: 1 }, { b: 2 } }
```

The `sorted` option ensures that an object's property insertion order does not
impact the result of `util.inspect()`.

```js
const { inspect } = require('util');
const assert = require('assert');

const o1 = {
  b: [2, 3, 1],
  a: '`a` comes before `b`',
  c: new Set([2, 3, 1])
};
console.log(inspect(o1, { sorted: true }));
// { a: '`a` comes before `b`', b: [ 2, 3, 1 ], c: Set(3) { 1, 2, 3 } }
console.log(inspect(o1, { sorted: (a, b) => b.localeCompare(a) }));
// { c: Set(3) { 3, 2, 1 }, b: [ 2, 3, 1 ], a: '`a` comes before `b`' }

const o2 = {
  c: new Set([2, 1, 3]),
  a: '`a` comes before `b`',
  b: [2, 3, 1]
};
assert.strict.equal(
  inspect(o1, { sorted: true }),
  inspect(o2, { sorted: true })
);
```

The `numericSeparator` option adds an underscore every three digits to all
numbers.

```js
const { inspect } = require('util');

const thousand = 1_000;
const million = 1_000_000;
const bigNumber = 123_456_789n;
const bigDecimal = 1_234.123_45;

console.log(thousand, million, bigNumber, bigDecimal);
// 1_000 1_000_000 123_456_789n 1_234.123_45
```

`util.inspect()` is a synchronous method intended for debugging. Its maximum
output length is approximately 128 MB. Inputs that result in longer output will
be truncated.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `object` | `any` | Any JavaScript primitive or `Object`. |
| `showHidden?` | `boolean` | - |
| `depth?` | `number` | - |
| `color?` | `boolean` | - |

#### Returns

`string`

The representation of `object`.

▸ **inspect**(`object`, `options?`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `object` | `any` |
| `options?` | [`InspectOptions`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/util_.InspectOptions.md) |

#### Returns

`string`

▸ **inspect**(`object`, `showHidden?`, `depth?`, `color?`): `string`

The `util.inspect()` method returns a string representation of `object` that is
intended for debugging. The output of `util.inspect` may change at any time
and should not be depended upon programmatically. Additional `options` may be
passed that alter the result.`util.inspect()` will use the constructor's name and/or `@@toStringTag` to make
an identifiable tag for an inspected value.

```js
class Foo {
  get [Symbol.toStringTag]() {
    return 'bar';
  }
}

class Bar {}

const baz = Object.create(null, { [Symbol.toStringTag]: { value: 'foo' } });

util.inspect(new Foo()); // 'Foo [bar] {}'
util.inspect(new Bar()); // 'Bar {}'
util.inspect(baz);       // '[foo] {}'
```

Circular references point to their anchor by using a reference index:

```js
const { inspect } = require('util');

const obj = {};
obj.a = [obj];
obj.b = {};
obj.b.inner = obj.b;
obj.b.obj = obj;

console.log(inspect(obj));
// <ref *1> {
//   a: [ [Circular *1] ],
//   b: <ref *2> { inner: [Circular *2], obj: [Circular *1] }
// }
```

The following example inspects all properties of the `util` object:

```js
const util = require('util');

console.log(util.inspect(util, { showHidden: true, depth: null }));
```

The following example highlights the effect of the `compact` option:

```js
const util = require('util');

const o = {
  a: [1, 2, [[
    'Lorem ipsum dolor sit amet,\nconsectetur adipiscing elit, sed do ' +
      'eiusmod \ntempor incididunt ut labore et dolore magna aliqua.',
    'test',
    'foo']], 4],
  b: new Map([['za', 1], ['zb', 'test']])
};
console.log(util.inspect(o, { compact: true, depth: 5, breakLength: 80 }));

// { a:
//   [ 1,
//     2,
//     [ [ 'Lorem ipsum dolor sit amet,\nconsectetur [...]', // A long line
//           'test',
//           'foo' ] ],
//     4 ],
//   b: Map(2) { 'za' => 1, 'zb' => 'test' } }

// Setting `compact` to false or an integer creates more reader friendly output.
console.log(util.inspect(o, { compact: false, depth: 5, breakLength: 80 }));

// {
//   a: [
//     1,
//     2,
//     [
//       [
//         'Lorem ipsum dolor sit amet,\n' +
//           'consectetur adipiscing elit, sed do eiusmod \n' +
//           'tempor incididunt ut labore et dolore magna aliqua.',
//         'test',
//         'foo'
//       ]
//     ],
//     4
//   ],
//   b: Map(2) {
//     'za' => 1,
//     'zb' => 'test'
//   }
// }

// Setting `breakLength` to e.g. 150 will print the "Lorem ipsum" text in a
// single line.
```

The `showHidden` option allows [`WeakMap`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WeakMap) and
[`WeakSet`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WeakSet) entries to be
inspected. If there are more entries than `maxArrayLength`, there is no
guarantee which entries are displayed. That means retrieving the same [`WeakSet`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WeakSet) entries twice may
result in different output. Furthermore, entries
with no remaining strong references may be garbage collected at any time.

```js
const { inspect } = require('util');

const obj = { a: 1 };
const obj2 = { b: 2 };
const weakSet = new WeakSet([obj, obj2]);

console.log(inspect(weakSet, { showHidden: true }));
// WeakSet { { a: 1 }, { b: 2 } }
```

The `sorted` option ensures that an object's property insertion order does not
impact the result of `util.inspect()`.

```js
const { inspect } = require('util');
const assert = require('assert');

const o1 = {
  b: [2, 3, 1],
  a: '`a` comes before `b`',
  c: new Set([2, 3, 1])
};
console.log(inspect(o1, { sorted: true }));
// { a: '`a` comes before `b`', b: [ 2, 3, 1 ], c: Set(3) { 1, 2, 3 } }
console.log(inspect(o1, { sorted: (a, b) => b.localeCompare(a) }));
// { c: Set(3) { 3, 2, 1 }, b: [ 2, 3, 1 ], a: '`a` comes before `b`' }

const o2 = {
  c: new Set([2, 1, 3]),
  a: '`a` comes before `b`',
  b: [2, 3, 1]
};
assert.strict.equal(
  inspect(o1, { sorted: true }),
  inspect(o2, { sorted: true })
);
```

The `numericSeparator` option adds an underscore every three digits to all
numbers.

```js
const { inspect } = require('util');

const thousand = 1_000;
const million = 1_000_000;
const bigNumber = 123_456_789n;
const bigDecimal = 1_234.123_45;

console.log(thousand, million, bigNumber, bigDecimal);
// 1_000 1_000_000 123_456_789n 1_234.123_45
```

`util.inspect()` is a synchronous method intended for debugging. Its maximum
output length is approximately 128 MB. Inputs that result in longer output will
be truncated.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `object` | `any` | Any JavaScript primitive or `Object`. |
| `showHidden?` | `boolean` | - |
| `depth?` | `number` | - |
| `color?` | `boolean` | - |

#### Returns

`string`

The representation of `object`.

▸ **inspect**(`object`, `options?`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `object` | `any` |
| `options?` | [`InspectOptions`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/util_.InspectOptions.md) |

#### Returns

`string`

___

### isArray

▸ **isArray**(`object`): object is unknown[]

Alias for [`Array.isArray()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray).

Returns `true` if the given `object` is an `Array`. Otherwise, returns `false`.

```js
const util = require('util');

util.isArray([]);
// Returns: true
util.isArray(new Array());
// Returns: true
util.isArray({});
// Returns: false
```

**`Deprecated`**

Since v4.0.0 - Use `isArray` instead.

#### Parameters

| Name | Type |
| :------ | :------ |
| `object` | `unknown` |

#### Returns

object is unknown[]

▸ **isArray**(`object`): object is unknown[]

Alias for [`Array.isArray()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray).

Returns `true` if the given `object` is an `Array`. Otherwise, returns `false`.

```js
const util = require('util');

util.isArray([]);
// Returns: true
util.isArray(new Array());
// Returns: true
util.isArray({});
// Returns: false
```

**`Deprecated`**

Since v4.0.0 - Use `isArray` instead.

#### Parameters

| Name | Type |
| :------ | :------ |
| `object` | `unknown` |

#### Returns

object is unknown[]

___

### isBoolean

▸ **isBoolean**(`object`): object is boolean

Returns `true` if the given `object` is a `Boolean`. Otherwise, returns `false`.

```js
const util = require('util');

util.isBoolean(1);
// Returns: false
util.isBoolean(0);
// Returns: false
util.isBoolean(false);
// Returns: true
```

**`Deprecated`**

Since v4.0.0 - Use `typeof value === 'boolean'` instead.

#### Parameters

| Name | Type |
| :------ | :------ |
| `object` | `unknown` |

#### Returns

object is boolean

▸ **isBoolean**(`object`): object is boolean

Returns `true` if the given `object` is a `Boolean`. Otherwise, returns `false`.

```js
const util = require('util');

util.isBoolean(1);
// Returns: false
util.isBoolean(0);
// Returns: false
util.isBoolean(false);
// Returns: true
```

**`Deprecated`**

Since v4.0.0 - Use `typeof value === 'boolean'` instead.

#### Parameters

| Name | Type |
| :------ | :------ |
| `object` | `unknown` |

#### Returns

object is boolean

___

### isBuffer

▸ **isBuffer**(`object`): object is Buffer

Returns `true` if the given `object` is a `Buffer`. Otherwise, returns `false`.

```js
const util = require('util');

util.isBuffer({ length: 0 });
// Returns: false
util.isBuffer([]);
// Returns: false
util.isBuffer(Buffer.from('hello world'));
// Returns: true
```

**`Deprecated`**

Since v4.0.0 - Use `isBuffer` instead.

#### Parameters

| Name | Type |
| :------ | :------ |
| `object` | `unknown` |

#### Returns

object is Buffer

▸ **isBuffer**(`object`): object is Buffer

Returns `true` if the given `object` is a `Buffer`. Otherwise, returns `false`.

```js
const util = require('util');

util.isBuffer({ length: 0 });
// Returns: false
util.isBuffer([]);
// Returns: false
util.isBuffer(Buffer.from('hello world'));
// Returns: true
```

**`Deprecated`**

Since v4.0.0 - Use `isBuffer` instead.

#### Parameters

| Name | Type |
| :------ | :------ |
| `object` | `unknown` |

#### Returns

object is Buffer

___

### isDate

▸ **isDate**(`object`): object is Date

Returns `true` if the given `object` is a `Date`. Otherwise, returns `false`.

```js
const util = require('util');

util.isDate(new Date());
// Returns: true
util.isDate(Date());
// false (without 'new' returns a String)
util.isDate({});
// Returns: false
```

**`Deprecated`**

Since v4.0.0 - Use types.isDate instead.

#### Parameters

| Name | Type |
| :------ | :------ |
| `object` | `unknown` |

#### Returns

object is Date

▸ **isDate**(`object`): object is Date

Returns `true` if the given `object` is a `Date`. Otherwise, returns `false`.

```js
const util = require('util');

util.isDate(new Date());
// Returns: true
util.isDate(Date());
// false (without 'new' returns a String)
util.isDate({});
// Returns: false
```

**`Deprecated`**

Since v4.0.0 - Use types.isDate instead.

#### Parameters

| Name | Type |
| :------ | :------ |
| `object` | `unknown` |

#### Returns

object is Date

___

### isDeepStrictEqual

▸ **isDeepStrictEqual**(`val1`, `val2`): `boolean`

Returns `true` if there is deep strict equality between `val1` and `val2`.
Otherwise, returns `false`.

See `assert.deepStrictEqual()` for more information about deep strict
equality.

#### Parameters

| Name | Type |
| :------ | :------ |
| `val1` | `unknown` |
| `val2` | `unknown` |

#### Returns

`boolean`

▸ **isDeepStrictEqual**(`val1`, `val2`): `boolean`

Returns `true` if there is deep strict equality between `val1` and `val2`.
Otherwise, returns `false`.

See `assert.deepStrictEqual()` for more information about deep strict
equality.

#### Parameters

| Name | Type |
| :------ | :------ |
| `val1` | `unknown` |
| `val2` | `unknown` |

#### Returns

`boolean`

___

### isError

▸ **isError**(`object`): object is Error

Returns `true` if the given `object` is an `Error`. Otherwise, returns`false`.

```js
const util = require('util');

util.isError(new Error());
// Returns: true
util.isError(new TypeError());
// Returns: true
util.isError({ name: 'Error', message: 'an error occurred' });
// Returns: false
```

This method relies on `Object.prototype.toString()` behavior. It is
possible to obtain an incorrect result when the `object` argument manipulates`@@toStringTag`.

```js
const util = require('util');
const obj = { name: 'Error', message: 'an error occurred' };

util.isError(obj);
// Returns: false
obj[Symbol.toStringTag] = 'Error';
util.isError(obj);
// Returns: true
```

**`Deprecated`**

Since v4.0.0 - Use types.isNativeError instead.

#### Parameters

| Name | Type |
| :------ | :------ |
| `object` | `unknown` |

#### Returns

object is Error

▸ **isError**(`object`): object is Error

Returns `true` if the given `object` is an `Error`. Otherwise, returns`false`.

```js
const util = require('util');

util.isError(new Error());
// Returns: true
util.isError(new TypeError());
// Returns: true
util.isError({ name: 'Error', message: 'an error occurred' });
// Returns: false
```

This method relies on `Object.prototype.toString()` behavior. It is
possible to obtain an incorrect result when the `object` argument manipulates`@@toStringTag`.

```js
const util = require('util');
const obj = { name: 'Error', message: 'an error occurred' };

util.isError(obj);
// Returns: false
obj[Symbol.toStringTag] = 'Error';
util.isError(obj);
// Returns: true
```

**`Deprecated`**

Since v4.0.0 - Use types.isNativeError instead.

#### Parameters

| Name | Type |
| :------ | :------ |
| `object` | `unknown` |

#### Returns

object is Error

___

### isFunction

▸ **isFunction**(`object`): `boolean`

Returns `true` if the given `object` is a `Function`. Otherwise, returns`false`.

```js
const util = require('util');

function Foo() {}
const Bar = () => {};

util.isFunction({});
// Returns: false
util.isFunction(Foo);
// Returns: true
util.isFunction(Bar);
// Returns: true
```

**`Deprecated`**

Since v4.0.0 - Use `typeof value === 'function'` instead.

#### Parameters

| Name | Type |
| :------ | :------ |
| `object` | `unknown` |

#### Returns

`boolean`

▸ **isFunction**(`object`): `boolean`

Returns `true` if the given `object` is a `Function`. Otherwise, returns`false`.

```js
const util = require('util');

function Foo() {}
const Bar = () => {};

util.isFunction({});
// Returns: false
util.isFunction(Foo);
// Returns: true
util.isFunction(Bar);
// Returns: true
```

**`Deprecated`**

Since v4.0.0 - Use `typeof value === 'function'` instead.

#### Parameters

| Name | Type |
| :------ | :------ |
| `object` | `unknown` |

#### Returns

`boolean`

___

### isNull

▸ **isNull**(`object`): object is null

Returns `true` if the given `object` is strictly `null`. Otherwise, returns`false`.

```js
const util = require('util');

util.isNull(0);
// Returns: false
util.isNull(undefined);
// Returns: false
util.isNull(null);
// Returns: true
```

**`Deprecated`**

Since v4.0.0 - Use `value === null` instead.

#### Parameters

| Name | Type |
| :------ | :------ |
| `object` | `unknown` |

#### Returns

object is null

▸ **isNull**(`object`): object is null

Returns `true` if the given `object` is strictly `null`. Otherwise, returns`false`.

```js
const util = require('util');

util.isNull(0);
// Returns: false
util.isNull(undefined);
// Returns: false
util.isNull(null);
// Returns: true
```

**`Deprecated`**

Since v4.0.0 - Use `value === null` instead.

#### Parameters

| Name | Type |
| :------ | :------ |
| `object` | `unknown` |

#### Returns

object is null

___

### isNullOrUndefined

▸ **isNullOrUndefined**(`object`): object is null

Returns `true` if the given `object` is `null` or `undefined`. Otherwise,
returns `false`.

```js
const util = require('util');

util.isNullOrUndefined(0);
// Returns: false
util.isNullOrUndefined(undefined);
// Returns: true
util.isNullOrUndefined(null);
// Returns: true
```

**`Deprecated`**

Since v4.0.0 - Use `value === undefined || value === null` instead.

#### Parameters

| Name | Type |
| :------ | :------ |
| `object` | `unknown` |

#### Returns

object is null

▸ **isNullOrUndefined**(`object`): object is null

Returns `true` if the given `object` is `null` or `undefined`. Otherwise,
returns `false`.

```js
const util = require('util');

util.isNullOrUndefined(0);
// Returns: false
util.isNullOrUndefined(undefined);
// Returns: true
util.isNullOrUndefined(null);
// Returns: true
```

**`Deprecated`**

Since v4.0.0 - Use `value === undefined || value === null` instead.

#### Parameters

| Name | Type |
| :------ | :------ |
| `object` | `unknown` |

#### Returns

object is null

___

### isNumber

▸ **isNumber**(`object`): object is number

Returns `true` if the given `object` is a `Number`. Otherwise, returns `false`.

```js
const util = require('util');

util.isNumber(false);
// Returns: false
util.isNumber(Infinity);
// Returns: true
util.isNumber(0);
// Returns: true
util.isNumber(NaN);
// Returns: true
```

**`Deprecated`**

Since v4.0.0 - Use `typeof value === 'number'` instead.

#### Parameters

| Name | Type |
| :------ | :------ |
| `object` | `unknown` |

#### Returns

object is number

▸ **isNumber**(`object`): object is number

Returns `true` if the given `object` is a `Number`. Otherwise, returns `false`.

```js
const util = require('util');

util.isNumber(false);
// Returns: false
util.isNumber(Infinity);
// Returns: true
util.isNumber(0);
// Returns: true
util.isNumber(NaN);
// Returns: true
```

**`Deprecated`**

Since v4.0.0 - Use `typeof value === 'number'` instead.

#### Parameters

| Name | Type |
| :------ | :------ |
| `object` | `unknown` |

#### Returns

object is number

___

### isObject

▸ **isObject**(`object`): `boolean`

Returns `true` if the given `object` is strictly an `Object`**and** not a`Function` (even though functions are objects in JavaScript).
Otherwise, returns `false`.

```js
const util = require('util');

util.isObject(5);
// Returns: false
util.isObject(null);
// Returns: false
util.isObject({});
// Returns: true
util.isObject(() => {});
// Returns: false
```

**`Deprecated`**

Since v4.0.0 - Deprecated: Use `value !== null && typeof value === 'object'` instead.

#### Parameters

| Name | Type |
| :------ | :------ |
| `object` | `unknown` |

#### Returns

`boolean`

▸ **isObject**(`object`): `boolean`

Returns `true` if the given `object` is strictly an `Object`**and** not a`Function` (even though functions are objects in JavaScript).
Otherwise, returns `false`.

```js
const util = require('util');

util.isObject(5);
// Returns: false
util.isObject(null);
// Returns: false
util.isObject({});
// Returns: true
util.isObject(() => {});
// Returns: false
```

**`Deprecated`**

Since v4.0.0 - Deprecated: Use `value !== null && typeof value === 'object'` instead.

#### Parameters

| Name | Type |
| :------ | :------ |
| `object` | `unknown` |

#### Returns

`boolean`

___

### isPrimitive

▸ **isPrimitive**(`object`): `boolean`

Returns `true` if the given `object` is a primitive type. Otherwise, returns`false`.

```js
const util = require('util');

util.isPrimitive(5);
// Returns: true
util.isPrimitive('foo');
// Returns: true
util.isPrimitive(false);
// Returns: true
util.isPrimitive(null);
// Returns: true
util.isPrimitive(undefined);
// Returns: true
util.isPrimitive({});
// Returns: false
util.isPrimitive(() => {});
// Returns: false
util.isPrimitive(/^$/);
// Returns: false
util.isPrimitive(new Date());
// Returns: false
```

**`Deprecated`**

Since v4.0.0 - Use `(typeof value !== 'object' && typeof value !== 'function') || value === null` instead.

#### Parameters

| Name | Type |
| :------ | :------ |
| `object` | `unknown` |

#### Returns

`boolean`

▸ **isPrimitive**(`object`): `boolean`

Returns `true` if the given `object` is a primitive type. Otherwise, returns`false`.

```js
const util = require('util');

util.isPrimitive(5);
// Returns: true
util.isPrimitive('foo');
// Returns: true
util.isPrimitive(false);
// Returns: true
util.isPrimitive(null);
// Returns: true
util.isPrimitive(undefined);
// Returns: true
util.isPrimitive({});
// Returns: false
util.isPrimitive(() => {});
// Returns: false
util.isPrimitive(/^$/);
// Returns: false
util.isPrimitive(new Date());
// Returns: false
```

**`Deprecated`**

Since v4.0.0 - Use `(typeof value !== 'object' && typeof value !== 'function') || value === null` instead.

#### Parameters

| Name | Type |
| :------ | :------ |
| `object` | `unknown` |

#### Returns

`boolean`

___

### isRegExp

▸ **isRegExp**(`object`): object is RegExp

Returns `true` if the given `object` is a `RegExp`. Otherwise, returns `false`.

```js
const util = require('util');

util.isRegExp(/some regexp/);
// Returns: true
util.isRegExp(new RegExp('another regexp'));
// Returns: true
util.isRegExp({});
// Returns: false
```

**`Deprecated`**

Since v4.0.0 - Deprecated

#### Parameters

| Name | Type |
| :------ | :------ |
| `object` | `unknown` |

#### Returns

object is RegExp

▸ **isRegExp**(`object`): object is RegExp

Returns `true` if the given `object` is a `RegExp`. Otherwise, returns `false`.

```js
const util = require('util');

util.isRegExp(/some regexp/);
// Returns: true
util.isRegExp(new RegExp('another regexp'));
// Returns: true
util.isRegExp({});
// Returns: false
```

**`Deprecated`**

Since v4.0.0 - Deprecated

#### Parameters

| Name | Type |
| :------ | :------ |
| `object` | `unknown` |

#### Returns

object is RegExp

___

### isString

▸ **isString**(`object`): object is string

Returns `true` if the given `object` is a `string`. Otherwise, returns `false`.

```js
const util = require('util');

util.isString('');
// Returns: true
util.isString('foo');
// Returns: true
util.isString(String('foo'));
// Returns: true
util.isString(5);
// Returns: false
```

**`Deprecated`**

Since v4.0.0 - Use `typeof value === 'string'` instead.

#### Parameters

| Name | Type |
| :------ | :------ |
| `object` | `unknown` |

#### Returns

object is string

▸ **isString**(`object`): object is string

Returns `true` if the given `object` is a `string`. Otherwise, returns `false`.

```js
const util = require('util');

util.isString('');
// Returns: true
util.isString('foo');
// Returns: true
util.isString(String('foo'));
// Returns: true
util.isString(5);
// Returns: false
```

**`Deprecated`**

Since v4.0.0 - Use `typeof value === 'string'` instead.

#### Parameters

| Name | Type |
| :------ | :------ |
| `object` | `unknown` |

#### Returns

object is string

___

### isSymbol

▸ **isSymbol**(`object`): object is symbol

Returns `true` if the given `object` is a `Symbol`. Otherwise, returns `false`.

```js
const util = require('util');

util.isSymbol(5);
// Returns: false
util.isSymbol('foo');
// Returns: false
util.isSymbol(Symbol('foo'));
// Returns: true
```

**`Deprecated`**

Since v4.0.0 - Use `typeof value === 'symbol'` instead.

#### Parameters

| Name | Type |
| :------ | :------ |
| `object` | `unknown` |

#### Returns

object is symbol

▸ **isSymbol**(`object`): object is symbol

Returns `true` if the given `object` is a `Symbol`. Otherwise, returns `false`.

```js
const util = require('util');

util.isSymbol(5);
// Returns: false
util.isSymbol('foo');
// Returns: false
util.isSymbol(Symbol('foo'));
// Returns: true
```

**`Deprecated`**

Since v4.0.0 - Use `typeof value === 'symbol'` instead.

#### Parameters

| Name | Type |
| :------ | :------ |
| `object` | `unknown` |

#### Returns

object is symbol

___

### isUndefined

▸ **isUndefined**(`object`): object is undefined

Returns `true` if the given `object` is `undefined`. Otherwise, returns `false`.

```js
const util = require('util');

const foo = undefined;
util.isUndefined(5);
// Returns: false
util.isUndefined(foo);
// Returns: true
util.isUndefined(null);
// Returns: false
```

**`Deprecated`**

Since v4.0.0 - Use `value === undefined` instead.

#### Parameters

| Name | Type |
| :------ | :------ |
| `object` | `unknown` |

#### Returns

object is undefined

▸ **isUndefined**(`object`): object is undefined

Returns `true` if the given `object` is `undefined`. Otherwise, returns `false`.

```js
const util = require('util');

const foo = undefined;
util.isUndefined(5);
// Returns: false
util.isUndefined(foo);
// Returns: true
util.isUndefined(null);
// Returns: false
```

**`Deprecated`**

Since v4.0.0 - Use `value === undefined` instead.

#### Parameters

| Name | Type |
| :------ | :------ |
| `object` | `unknown` |

#### Returns

object is undefined

___

### log

▸ **log**(`string`): `void`

The `util.log()` method prints the given `string` to `stdout` with an included
timestamp.

```js
const util = require('util');

util.log('Timestamped message.');
```

**`Deprecated`**

Since v6.0.0 - Use a third party module instead.

#### Parameters

| Name | Type |
| :------ | :------ |
| `string` | `string` |

#### Returns

`void`

▸ **log**(`string`): `void`

The `util.log()` method prints the given `string` to `stdout` with an included
timestamp.

```js
const util = require('util');

util.log('Timestamped message.');
```

**`Deprecated`**

Since v6.0.0 - Use a third party module instead.

#### Parameters

| Name | Type |
| :------ | :------ |
| `string` | `string` |

#### Returns

`void`

___

### promisify

▸ **promisify**<`TCustom`\>(`fn`): `TCustom`

Takes a function following the common error-first callback style, i.e. taking
an `(err, value) => ...` callback as the last argument, and returns a version
that returns promises.

```js
const util = require('util');
const fs = require('fs');

const stat = util.promisify(fs.stat);
stat('.').then((stats) => {
  // Do something with `stats`
}).catch((error) => {
  // Handle the error.
});
```

Or, equivalently using `async function`s:

```js
const util = require('util');
const fs = require('fs');

const stat = util.promisify(fs.stat);

async function callStat() {
  const stats = await stat('.');
  console.log(`This directory is owned by ${stats.uid}`);
}
```

If there is an `original[util.promisify.custom]` property present, `promisify`will return its value, see `Custom promisified functions`.

`promisify()` assumes that `original` is a function taking a callback as its
final argument in all cases. If `original` is not a function, `promisify()`will throw an error. If `original` is a function but its last argument is not
an error-first callback, it will still be passed an error-first
callback as its last argument.

Using `promisify()` on class methods or other methods that use `this` may not
work as expected unless handled specially:

```js
const util = require('util');

class Foo {
  constructor() {
    this.a = 42;
  }

  bar(callback) {
    callback(null, this.a);
  }
}

const foo = new Foo();

const naiveBar = util.promisify(foo.bar);
// TypeError: Cannot read property 'a' of undefined
// naiveBar().then(a => console.log(a));

naiveBar.call(foo).then((a) => console.log(a)); // '42'

const bindBar = naiveBar.bind(foo);
bindBar().then((a) => console.log(a)); // '42'
```

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TCustom` | extends `Function` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fn` | [`CustomPromisify`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/util_.md#custompromisify)<`TCustom`\> |

#### Returns

`TCustom`

▸ **promisify**<`TResult`\>(`fn`): () => `Promise`<`TResult`\>

#### Type parameters

| Name |
| :------ |
| `TResult` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fn` | (`callback`: (`err`: `any`, `result`: `TResult`) => `void`) => `void` |

#### Returns

`fn`

▸ (): `Promise`<`TResult`\>

##### Returns

`Promise`<`TResult`\>

▸ **promisify**(`fn`): () => `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `fn` | (`callback`: (`err?`: `any`) => `void`) => `void` |

#### Returns

`fn`

▸ (): `Promise`<`void`\>

##### Returns

`Promise`<`void`\>

▸ **promisify**<`T1`, `TResult`\>(`fn`): (`arg1`: `T1`) => `Promise`<`TResult`\>

#### Type parameters

| Name |
| :------ |
| `T1` |
| `TResult` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fn` | (`arg1`: `T1`, `callback`: (`err`: `any`, `result`: `TResult`) => `void`) => `void` |

#### Returns

`fn`

▸ (`arg1`): `Promise`<`TResult`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `arg1` | `T1` |

##### Returns

`Promise`<`TResult`\>

▸ **promisify**<`T1`\>(`fn`): (`arg1`: `T1`) => `Promise`<`void`\>

#### Type parameters

| Name |
| :------ |
| `T1` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fn` | (`arg1`: `T1`, `callback`: (`err?`: `any`) => `void`) => `void` |

#### Returns

`fn`

▸ (`arg1`): `Promise`<`void`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `arg1` | `T1` |

##### Returns

`Promise`<`void`\>

▸ **promisify**<`T1`, `T2`, `TResult`\>(`fn`): (`arg1`: `T1`, `arg2`: `T2`) => `Promise`<`TResult`\>

#### Type parameters

| Name |
| :------ |
| `T1` |
| `T2` |
| `TResult` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fn` | (`arg1`: `T1`, `arg2`: `T2`, `callback`: (`err`: `any`, `result`: `TResult`) => `void`) => `void` |

#### Returns

`fn`

▸ (`arg1`, `arg2`): `Promise`<`TResult`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `arg1` | `T1` |
| `arg2` | `T2` |

##### Returns

`Promise`<`TResult`\>

▸ **promisify**<`T1`, `T2`\>(`fn`): (`arg1`: `T1`, `arg2`: `T2`) => `Promise`<`void`\>

#### Type parameters

| Name |
| :------ |
| `T1` |
| `T2` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fn` | (`arg1`: `T1`, `arg2`: `T2`, `callback`: (`err?`: `any`) => `void`) => `void` |

#### Returns

`fn`

▸ (`arg1`, `arg2`): `Promise`<`void`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `arg1` | `T1` |
| `arg2` | `T2` |

##### Returns

`Promise`<`void`\>

▸ **promisify**<`T1`, `T2`, `T3`, `TResult`\>(`fn`): (`arg1`: `T1`, `arg2`: `T2`, `arg3`: `T3`) => `Promise`<`TResult`\>

#### Type parameters

| Name |
| :------ |
| `T1` |
| `T2` |
| `T3` |
| `TResult` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fn` | (`arg1`: `T1`, `arg2`: `T2`, `arg3`: `T3`, `callback`: (`err`: `any`, `result`: `TResult`) => `void`) => `void` |

#### Returns

`fn`

▸ (`arg1`, `arg2`, `arg3`): `Promise`<`TResult`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `arg1` | `T1` |
| `arg2` | `T2` |
| `arg3` | `T3` |

##### Returns

`Promise`<`TResult`\>

▸ **promisify**<`T1`, `T2`, `T3`\>(`fn`): (`arg1`: `T1`, `arg2`: `T2`, `arg3`: `T3`) => `Promise`<`void`\>

#### Type parameters

| Name |
| :------ |
| `T1` |
| `T2` |
| `T3` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fn` | (`arg1`: `T1`, `arg2`: `T2`, `arg3`: `T3`, `callback`: (`err?`: `any`) => `void`) => `void` |

#### Returns

`fn`

▸ (`arg1`, `arg2`, `arg3`): `Promise`<`void`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `arg1` | `T1` |
| `arg2` | `T2` |
| `arg3` | `T3` |

##### Returns

`Promise`<`void`\>

▸ **promisify**<`T1`, `T2`, `T3`, `T4`, `TResult`\>(`fn`): (`arg1`: `T1`, `arg2`: `T2`, `arg3`: `T3`, `arg4`: `T4`) => `Promise`<`TResult`\>

#### Type parameters

| Name |
| :------ |
| `T1` |
| `T2` |
| `T3` |
| `T4` |
| `TResult` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fn` | (`arg1`: `T1`, `arg2`: `T2`, `arg3`: `T3`, `arg4`: `T4`, `callback`: (`err`: `any`, `result`: `TResult`) => `void`) => `void` |

#### Returns

`fn`

▸ (`arg1`, `arg2`, `arg3`, `arg4`): `Promise`<`TResult`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `arg1` | `T1` |
| `arg2` | `T2` |
| `arg3` | `T3` |
| `arg4` | `T4` |

##### Returns

`Promise`<`TResult`\>

▸ **promisify**<`T1`, `T2`, `T3`, `T4`\>(`fn`): (`arg1`: `T1`, `arg2`: `T2`, `arg3`: `T3`, `arg4`: `T4`) => `Promise`<`void`\>

#### Type parameters

| Name |
| :------ |
| `T1` |
| `T2` |
| `T3` |
| `T4` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fn` | (`arg1`: `T1`, `arg2`: `T2`, `arg3`: `T3`, `arg4`: `T4`, `callback`: (`err?`: `any`) => `void`) => `void` |

#### Returns

`fn`

▸ (`arg1`, `arg2`, `arg3`, `arg4`): `Promise`<`void`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `arg1` | `T1` |
| `arg2` | `T2` |
| `arg3` | `T3` |
| `arg4` | `T4` |

##### Returns

`Promise`<`void`\>

▸ **promisify**<`T1`, `T2`, `T3`, `T4`, `T5`, `TResult`\>(`fn`): (`arg1`: `T1`, `arg2`: `T2`, `arg3`: `T3`, `arg4`: `T4`, `arg5`: `T5`) => `Promise`<`TResult`\>

#### Type parameters

| Name |
| :------ |
| `T1` |
| `T2` |
| `T3` |
| `T4` |
| `T5` |
| `TResult` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fn` | (`arg1`: `T1`, `arg2`: `T2`, `arg3`: `T3`, `arg4`: `T4`, `arg5`: `T5`, `callback`: (`err`: `any`, `result`: `TResult`) => `void`) => `void` |

#### Returns

`fn`

▸ (`arg1`, `arg2`, `arg3`, `arg4`, `arg5`): `Promise`<`TResult`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `arg1` | `T1` |
| `arg2` | `T2` |
| `arg3` | `T3` |
| `arg4` | `T4` |
| `arg5` | `T5` |

##### Returns

`Promise`<`TResult`\>

▸ **promisify**<`T1`, `T2`, `T3`, `T4`, `T5`\>(`fn`): (`arg1`: `T1`, `arg2`: `T2`, `arg3`: `T3`, `arg4`: `T4`, `arg5`: `T5`) => `Promise`<`void`\>

#### Type parameters

| Name |
| :------ |
| `T1` |
| `T2` |
| `T3` |
| `T4` |
| `T5` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fn` | (`arg1`: `T1`, `arg2`: `T2`, `arg3`: `T3`, `arg4`: `T4`, `arg5`: `T5`, `callback`: (`err?`: `any`) => `void`) => `void` |

#### Returns

`fn`

▸ (`arg1`, `arg2`, `arg3`, `arg4`, `arg5`): `Promise`<`void`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `arg1` | `T1` |
| `arg2` | `T2` |
| `arg3` | `T3` |
| `arg4` | `T4` |
| `arg5` | `T5` |

##### Returns

`Promise`<`void`\>

▸ **promisify**(`fn`): `Function`

#### Parameters

| Name | Type |
| :------ | :------ |
| `fn` | `Function` |

#### Returns

`Function`

▸ **promisify**<`TCustom`\>(`fn`): `TCustom`

Takes a function following the common error-first callback style, i.e. taking
an `(err, value) => ...` callback as the last argument, and returns a version
that returns promises.

```js
const util = require('util');
const fs = require('fs');

const stat = util.promisify(fs.stat);
stat('.').then((stats) => {
  // Do something with `stats`
}).catch((error) => {
  // Handle the error.
});
```

Or, equivalently using `async function`s:

```js
const util = require('util');
const fs = require('fs');

const stat = util.promisify(fs.stat);

async function callStat() {
  const stats = await stat('.');
  console.log(`This directory is owned by ${stats.uid}`);
}
```

If there is an `original[util.promisify.custom]` property present, `promisify`will return its value, see `Custom promisified functions`.

`promisify()` assumes that `original` is a function taking a callback as its
final argument in all cases. If `original` is not a function, `promisify()`will throw an error. If `original` is a function but its last argument is not
an error-first callback, it will still be passed an error-first
callback as its last argument.

Using `promisify()` on class methods or other methods that use `this` may not
work as expected unless handled specially:

```js
const util = require('util');

class Foo {
  constructor() {
    this.a = 42;
  }

  bar(callback) {
    callback(null, this.a);
  }
}

const foo = new Foo();

const naiveBar = util.promisify(foo.bar);
// TypeError: Cannot read property 'a' of undefined
// naiveBar().then(a => console.log(a));

naiveBar.call(foo).then((a) => console.log(a)); // '42'

const bindBar = naiveBar.bind(foo);
bindBar().then((a) => console.log(a)); // '42'
```

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TCustom` | extends `Function` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fn` | [`CustomPromisify`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/util_.md#custompromisify)<`TCustom`\> |

#### Returns

`TCustom`

▸ **promisify**<`TResult`\>(`fn`): () => `Promise`<`TResult`\>

#### Type parameters

| Name |
| :------ |
| `TResult` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fn` | (`callback`: (`err`: `any`, `result`: `TResult`) => `void`) => `void` |

#### Returns

`fn`

▸ (): `Promise`<`TResult`\>

##### Returns

`Promise`<`TResult`\>

▸ **promisify**(`fn`): () => `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `fn` | (`callback`: (`err?`: `any`) => `void`) => `void` |

#### Returns

`fn`

▸ (): `Promise`<`void`\>

##### Returns

`Promise`<`void`\>

▸ **promisify**<`T1`, `TResult`\>(`fn`): (`arg1`: `T1`) => `Promise`<`TResult`\>

#### Type parameters

| Name |
| :------ |
| `T1` |
| `TResult` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fn` | (`arg1`: `T1`, `callback`: (`err`: `any`, `result`: `TResult`) => `void`) => `void` |

#### Returns

`fn`

▸ (`arg1`): `Promise`<`TResult`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `arg1` | `T1` |

##### Returns

`Promise`<`TResult`\>

▸ **promisify**<`T1`\>(`fn`): (`arg1`: `T1`) => `Promise`<`void`\>

#### Type parameters

| Name |
| :------ |
| `T1` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fn` | (`arg1`: `T1`, `callback`: (`err?`: `any`) => `void`) => `void` |

#### Returns

`fn`

▸ (`arg1`): `Promise`<`void`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `arg1` | `T1` |

##### Returns

`Promise`<`void`\>

▸ **promisify**<`T1`, `T2`, `TResult`\>(`fn`): (`arg1`: `T1`, `arg2`: `T2`) => `Promise`<`TResult`\>

#### Type parameters

| Name |
| :------ |
| `T1` |
| `T2` |
| `TResult` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fn` | (`arg1`: `T1`, `arg2`: `T2`, `callback`: (`err`: `any`, `result`: `TResult`) => `void`) => `void` |

#### Returns

`fn`

▸ (`arg1`, `arg2`): `Promise`<`TResult`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `arg1` | `T1` |
| `arg2` | `T2` |

##### Returns

`Promise`<`TResult`\>

▸ **promisify**<`T1`, `T2`\>(`fn`): (`arg1`: `T1`, `arg2`: `T2`) => `Promise`<`void`\>

#### Type parameters

| Name |
| :------ |
| `T1` |
| `T2` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fn` | (`arg1`: `T1`, `arg2`: `T2`, `callback`: (`err?`: `any`) => `void`) => `void` |

#### Returns

`fn`

▸ (`arg1`, `arg2`): `Promise`<`void`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `arg1` | `T1` |
| `arg2` | `T2` |

##### Returns

`Promise`<`void`\>

▸ **promisify**<`T1`, `T2`, `T3`, `TResult`\>(`fn`): (`arg1`: `T1`, `arg2`: `T2`, `arg3`: `T3`) => `Promise`<`TResult`\>

#### Type parameters

| Name |
| :------ |
| `T1` |
| `T2` |
| `T3` |
| `TResult` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fn` | (`arg1`: `T1`, `arg2`: `T2`, `arg3`: `T3`, `callback`: (`err`: `any`, `result`: `TResult`) => `void`) => `void` |

#### Returns

`fn`

▸ (`arg1`, `arg2`, `arg3`): `Promise`<`TResult`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `arg1` | `T1` |
| `arg2` | `T2` |
| `arg3` | `T3` |

##### Returns

`Promise`<`TResult`\>

▸ **promisify**<`T1`, `T2`, `T3`\>(`fn`): (`arg1`: `T1`, `arg2`: `T2`, `arg3`: `T3`) => `Promise`<`void`\>

#### Type parameters

| Name |
| :------ |
| `T1` |
| `T2` |
| `T3` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fn` | (`arg1`: `T1`, `arg2`: `T2`, `arg3`: `T3`, `callback`: (`err?`: `any`) => `void`) => `void` |

#### Returns

`fn`

▸ (`arg1`, `arg2`, `arg3`): `Promise`<`void`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `arg1` | `T1` |
| `arg2` | `T2` |
| `arg3` | `T3` |

##### Returns

`Promise`<`void`\>

▸ **promisify**<`T1`, `T2`, `T3`, `T4`, `TResult`\>(`fn`): (`arg1`: `T1`, `arg2`: `T2`, `arg3`: `T3`, `arg4`: `T4`) => `Promise`<`TResult`\>

#### Type parameters

| Name |
| :------ |
| `T1` |
| `T2` |
| `T3` |
| `T4` |
| `TResult` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fn` | (`arg1`: `T1`, `arg2`: `T2`, `arg3`: `T3`, `arg4`: `T4`, `callback`: (`err`: `any`, `result`: `TResult`) => `void`) => `void` |

#### Returns

`fn`

▸ (`arg1`, `arg2`, `arg3`, `arg4`): `Promise`<`TResult`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `arg1` | `T1` |
| `arg2` | `T2` |
| `arg3` | `T3` |
| `arg4` | `T4` |

##### Returns

`Promise`<`TResult`\>

▸ **promisify**<`T1`, `T2`, `T3`, `T4`\>(`fn`): (`arg1`: `T1`, `arg2`: `T2`, `arg3`: `T3`, `arg4`: `T4`) => `Promise`<`void`\>

#### Type parameters

| Name |
| :------ |
| `T1` |
| `T2` |
| `T3` |
| `T4` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fn` | (`arg1`: `T1`, `arg2`: `T2`, `arg3`: `T3`, `arg4`: `T4`, `callback`: (`err?`: `any`) => `void`) => `void` |

#### Returns

`fn`

▸ (`arg1`, `arg2`, `arg3`, `arg4`): `Promise`<`void`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `arg1` | `T1` |
| `arg2` | `T2` |
| `arg3` | `T3` |
| `arg4` | `T4` |

##### Returns

`Promise`<`void`\>

▸ **promisify**<`T1`, `T2`, `T3`, `T4`, `T5`, `TResult`\>(`fn`): (`arg1`: `T1`, `arg2`: `T2`, `arg3`: `T3`, `arg4`: `T4`, `arg5`: `T5`) => `Promise`<`TResult`\>

#### Type parameters

| Name |
| :------ |
| `T1` |
| `T2` |
| `T3` |
| `T4` |
| `T5` |
| `TResult` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fn` | (`arg1`: `T1`, `arg2`: `T2`, `arg3`: `T3`, `arg4`: `T4`, `arg5`: `T5`, `callback`: (`err`: `any`, `result`: `TResult`) => `void`) => `void` |

#### Returns

`fn`

▸ (`arg1`, `arg2`, `arg3`, `arg4`, `arg5`): `Promise`<`TResult`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `arg1` | `T1` |
| `arg2` | `T2` |
| `arg3` | `T3` |
| `arg4` | `T4` |
| `arg5` | `T5` |

##### Returns

`Promise`<`TResult`\>

▸ **promisify**<`T1`, `T2`, `T3`, `T4`, `T5`\>(`fn`): (`arg1`: `T1`, `arg2`: `T2`, `arg3`: `T3`, `arg4`: `T4`, `arg5`: `T5`) => `Promise`<`void`\>

#### Type parameters

| Name |
| :------ |
| `T1` |
| `T2` |
| `T3` |
| `T4` |
| `T5` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fn` | (`arg1`: `T1`, `arg2`: `T2`, `arg3`: `T3`, `arg4`: `T4`, `arg5`: `T5`, `callback`: (`err?`: `any`) => `void`) => `void` |

#### Returns

`fn`

▸ (`arg1`, `arg2`, `arg3`, `arg4`, `arg5`): `Promise`<`void`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `arg1` | `T1` |
| `arg2` | `T2` |
| `arg3` | `T3` |
| `arg4` | `T4` |
| `arg5` | `T5` |

##### Returns

`Promise`<`void`\>

▸ **promisify**(`fn`): `Function`

#### Parameters

| Name | Type |
| :------ | :------ |
| `fn` | `Function` |

#### Returns

`Function`
