[bun-types](https://github.com/oven-sh/bun-types/blob/master/api-docs/README.md) / [Exports](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules.md) / ["bun"](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/bun_.md) / TranspilerOptions

# Interface: TranspilerOptions

["bun"](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/bun_.md).TranspilerOptions

## Table of contents

### Properties

- [allowBunRuntime](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/bun_.TranspilerOptions.md#allowbunruntime)
- [autoImportJSX](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/bun_.TranspilerOptions.md#autoimportjsx)
- [define](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/bun_.TranspilerOptions.md#define)
- [exports](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/bun_.TranspilerOptions.md#exports)
- [jsxOptimizationInline](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/bun_.TranspilerOptions.md#jsxoptimizationinline)
- [loader](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/bun_.TranspilerOptions.md#loader)
- [macros](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/bun_.TranspilerOptions.md#macros)
- [platform](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/bun_.TranspilerOptions.md#platform)
- [treeShaking](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/bun_.TranspilerOptions.md#treeshaking)
- [trimUnusedImports](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/bun_.TranspilerOptions.md#trimunusedimports)
- [tsconfig](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/bun_.TranspilerOptions.md#tsconfig)

## Properties

### allowBunRuntime

• `Optional` **allowBunRuntime**: `boolean`

___

### autoImportJSX

• `Optional` **autoImportJSX**: `boolean`

___

### define

• `Optional` **define**: `Record`<`string`, `string`\>

Replace key with value. Value must be a JSON string.

**`Example`**

```
 { "process.env.NODE_ENV": "\"production\"" }
```

___

### exports

• `Optional` **exports**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `eliminate?` | `string`[] |
| `replace?` | `Record`<`string`, `string`\> |

___

### jsxOptimizationInline

• `Optional` **jsxOptimizationInline**: `boolean`

___

### loader

• `Optional` **loader**: [`JavaScriptLoader`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/bun_.md#javascriptloader)

What is the default loader used for this transpiler?

___

### macros

• `Optional` **macros**: [`MacroMap`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/bun_.md#macromap)

Replace an import statement with a macro.

   This will remove the import statement from the final output
   and replace any function calls or template strings with the result returned by the macro

**`Example`**

```json
   {
       "react-relay": {
           "graphql": "bun-macro-relay"
       }
   }
   ```

   Code that calls `graphql` will be replaced with the result of the macro.

   ```js
   import {graphql} from "react-relay";

   // Input:
   const query = graphql`
       query {
           ... on User {
               id
           }
       }
   }`;
   ```

   Will be replaced with:

   ```js
   import UserQuery from "./UserQuery.graphql";
   const query = UserQuery;
   ```

___

### platform

• `Optional` **platform**: [`Platform`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/bun_.md#platform)

**`Example`**

```ts
"browser"
```

___

### treeShaking

• `Optional` **treeShaking**: `boolean`

___

### trimUnusedImports

• `Optional` **trimUnusedImports**: `boolean`

___

### tsconfig

• `Optional` **tsconfig**: `string`

TSConfig.json file as stringified JSON or an object
 Use this to set a custom JSX factory, fragment, or import source
 For example, if you want to use Preact instead of React. Or if you want to use Emotion.
