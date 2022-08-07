[bun-types](https://oven-sh.github.io/bun-types/README.md) / [Exports](https://oven-sh.github.io/bun-types/modules.md) / ["bun"](https://oven-sh.github.io/bun-types/modules/bun_.md) / Transpiler

# Class: Transpiler

["bun"](https://oven-sh.github.io/bun-types/modules/bun_.md).Transpiler

Quickly transpile TypeScript, JSX, or JS to modern JavaScript.

**`Example`**

```js
const transpiler = new Bun.Transpiler();
transpiler.transformSync(`
  const App = () => <div>Hello World</div>;
export default App;
`);
// This outputs:
const output = `
const App = () => jsx("div", {
  children: "Hello World"
}, undefined, false, undefined, this);
export default App;
`
```

## Table of contents

### Constructors

- [constructor](https://oven-sh.github.io/bun-types/classes/bun_.Transpiler.md#constructor)

### Methods

- [scan](https://oven-sh.github.io/bun-types/classes/bun_.Transpiler.md#scan)
- [scanImports](https://oven-sh.github.io/bun-types/classes/bun_.Transpiler.md#scanimports)
- [transform](https://oven-sh.github.io/bun-types/classes/bun_.Transpiler.md#transform)
- [transformSync](https://oven-sh.github.io/bun-types/classes/bun_.Transpiler.md#transformsync)

## Constructors

### constructor

• **new Transpiler**(`options`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`TranspilerOptions`](https://oven-sh.github.io/bun-types/interfaces/bun_.TranspilerOptions.md) |

## Methods

### scan

▸ **scan**(`code`): `Object`

Get a list of import paths and paths from a TypeScript, JSX, TSX, or JavaScript file.

**`Example`**

```js
const {imports, exports} = transpiler.scan(`
import {foo} from "baz";
const hello = "hi!";
`);

console.log(imports); // ["baz"]
console.log(exports); // ["hello"]
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `code` | `StringOrBuffer` | The code to scan |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `exports` | `string`[] |
| `imports` | [`Import`](https://oven-sh.github.io/bun-types/interfaces/bun_.Import.md)[] |

___

### scanImports

▸ **scanImports**(`code`): [`Import`](https://oven-sh.github.io/bun-types/interfaces/bun_.Import.md)[]

Get a list of import paths from a TypeScript, JSX, TSX, or JavaScript file.

**`Example`**

```js
const imports = transpiler.scanImports(`
import {foo} from "baz";
import type {FooType} from "bar";
import type {DogeType} from "wolf";
`);

console.log(imports); // ["baz"]
```
This is a fast path which performs less work than `scan`.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `code` | `StringOrBuffer` | The code to scan |

#### Returns

[`Import`](https://oven-sh.github.io/bun-types/interfaces/bun_.Import.md)[]

___

### transform

▸ **transform**(`code`, `loader?`): `Promise`<`string`\>

Transpile code from TypeScript or JSX into valid JavaScript.
This function does not resolve imports.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `code` | `StringOrBuffer` | The code to transpile |
| `loader?` | [`JavaScriptLoader`](https://oven-sh.github.io/bun-types/modules/bun_.md#javascriptloader) | - |

#### Returns

`Promise`<`string`\>

___

### transformSync

▸ **transformSync**(`code`, `loader`, `ctx`): `string`

Transpile code from TypeScript or JSX into valid JavaScript.
This function does not resolve imports.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `code` | `StringOrBuffer` | The code to transpile |
| `loader` | [`JavaScriptLoader`](https://oven-sh.github.io/bun-types/modules/bun_.md#javascriptloader) | - |
| `ctx` | `object` | - |

#### Returns

`string`

▸ **transformSync**(`code`, `ctx`): `string`

Transpile code from TypeScript or JSX into valid JavaScript.
This function does not resolve imports.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `code` | `StringOrBuffer` | The code to transpile |
| `ctx` | `object` | An object to pass to macros |

#### Returns

`string`

▸ **transformSync**(`code`, `loader`): `string`

Transpile code from TypeScript or JSX into valid JavaScript.
This function does not resolve imports.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `code` | `StringOrBuffer` | The code to transpile |
| `loader` | [`JavaScriptLoader`](https://oven-sh.github.io/bun-types/modules/bun_.md#javascriptloader) | - |

#### Returns

`string`
