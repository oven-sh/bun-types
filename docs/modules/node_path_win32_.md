[bun-types](https://oven-sh.github.io/bun-types/README.md) / [Exports](https://oven-sh.github.io/bun-types/modules.md) / "node:path/win32"

# Namespace: "node:path/win32"

The `path` module provides utilities for working with file and directory paths.
It can be accessed using:

```js
import path  from 'path';
```

## Table of contents

### Interfaces

- [FormatInputPathObject](https://oven-sh.github.io/bun-types/interfaces/node_path_win32_.FormatInputPathObject.md)
- [ParsedPath](https://oven-sh.github.io/bun-types/interfaces/node_path_win32_.ParsedPath.md)

### Variables

- [delimiter](https://oven-sh.github.io/bun-types/modules/node_path_win32_.md#delimiter)
- [sep](https://oven-sh.github.io/bun-types/modules/node_path_win32_.md#sep)

### Functions

- [basename](https://oven-sh.github.io/bun-types/modules/node_path_win32_.md#basename)
- [dirname](https://oven-sh.github.io/bun-types/modules/node_path_win32_.md#dirname)
- [extname](https://oven-sh.github.io/bun-types/modules/node_path_win32_.md#extname)
- [format](https://oven-sh.github.io/bun-types/modules/node_path_win32_.md#format)
- [isAbsolute](https://oven-sh.github.io/bun-types/modules/node_path_win32_.md#isabsolute)
- [join](https://oven-sh.github.io/bun-types/modules/node_path_win32_.md#join)
- [normalize](https://oven-sh.github.io/bun-types/modules/node_path_win32_.md#normalize)
- [parse](https://oven-sh.github.io/bun-types/modules/node_path_win32_.md#parse)
- [relative](https://oven-sh.github.io/bun-types/modules/node_path_win32_.md#relative)
- [resolve](https://oven-sh.github.io/bun-types/modules/node_path_win32_.md#resolve)
- [toNamespacedPath](https://oven-sh.github.io/bun-types/modules/node_path_win32_.md#tonamespacedpath)

## Variables

### delimiter

• **delimiter**: `string`

The platform-specific file delimiter. ';' or ':'.

___

### sep

• **sep**: `string`

The platform-specific file separator. '\\' or '/'.

## Functions

### basename

▸ **basename**(`p`, `ext?`): `string`

Return the last portion of a path. Similar to the Unix basename command.
Often used to extract the file name from a fully qualified path.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `p` | `string` | the path to evaluate. |
| `ext?` | `string` | optionally, an extension to remove from the result. |

#### Returns

`string`

▸ **basename**(`p`, `ext?`): `string`

Return the last portion of a path. Similar to the Unix basename command.
Often used to extract the file name from a fully qualified path.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `p` | `string` | the path to evaluate. |
| `ext?` | `string` | optionally, an extension to remove from the result. |

#### Returns

`string`

___

### dirname

▸ **dirname**(`p`): `string`

Return the directory name of a path. Similar to the Unix dirname command.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `p` | `string` | the path to evaluate. |

#### Returns

`string`

▸ **dirname**(`p`): `string`

Return the directory name of a path. Similar to the Unix dirname command.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `p` | `string` | the path to evaluate. |

#### Returns

`string`

___

### extname

▸ **extname**(`p`): `string`

Return the extension of the path, from the last '.' to end of string in the last portion of the path.
If there is no '.' in the last portion of the path or the first character of it is '.', then it returns an empty string

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `p` | `string` | the path to evaluate. |

#### Returns

`string`

▸ **extname**(`p`): `string`

Return the extension of the path, from the last '.' to end of string in the last portion of the path.
If there is no '.' in the last portion of the path or the first character of it is '.', then it returns an empty string

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `p` | `string` | the path to evaluate. |

#### Returns

`string`

___

### format

▸ **format**(`pP`): `string`

Returns a path string from an object - the opposite of parse().

#### Parameters

| Name | Type |
| :------ | :------ |
| `pP` | [`FormatInputPathObject`](https://oven-sh.github.io/bun-types/interfaces/path_posix_.FormatInputPathObject.md) |

#### Returns

`string`

▸ **format**(`pP`): `string`

Returns a path string from an object - the opposite of parse().

#### Parameters

| Name | Type |
| :------ | :------ |
| `pP` | [`FormatInputPathObject`](https://oven-sh.github.io/bun-types/interfaces/path_posix_.FormatInputPathObject.md) |

#### Returns

`string`

___

### isAbsolute

▸ **isAbsolute**(`p`): `boolean`

Determines whether {path} is an absolute path. An absolute path will always resolve to the same location, regardless of the working directory.

#### Parameters

| Name | Type |
| :------ | :------ |
| `p` | `string` |

#### Returns

`boolean`

▸ **isAbsolute**(`p`): `boolean`

Determines whether {path} is an absolute path. An absolute path will always resolve to the same location, regardless of the working directory.

#### Parameters

| Name | Type |
| :------ | :------ |
| `p` | `string` |

#### Returns

`boolean`

___

### join

▸ **join**(...`paths`): `string`

Join all arguments together and normalize the resulting path.
Arguments must be strings. In v0.8, non-string arguments were silently ignored. In v0.10 and up, an exception is thrown.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...paths` | `string`[] | paths to join. |

#### Returns

`string`

▸ **join**(...`paths`): `string`

Join all arguments together and normalize the resulting path.
Arguments must be strings. In v0.8, non-string arguments were silently ignored. In v0.10 and up, an exception is thrown.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...paths` | `string`[] | paths to join. |

#### Returns

`string`

___

### normalize

▸ **normalize**(`p`): `string`

Normalize a string path, reducing '..' and '.' parts.
When multiple slashes are found, they're replaced by a single one; when the path contains a trailing slash, it is preserved. On Windows backslashes are used.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `p` | `string` | string path to normalize. |

#### Returns

`string`

▸ **normalize**(`p`): `string`

Normalize a string path, reducing '..' and '.' parts.
When multiple slashes are found, they're replaced by a single one; when the path contains a trailing slash, it is preserved. On Windows backslashes are used.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `p` | `string` | string path to normalize. |

#### Returns

`string`

___

### parse

▸ **parse**(`p`): [`ParsedPath`](https://oven-sh.github.io/bun-types/interfaces/path_posix_.ParsedPath.md)

Returns an object from a path string - the opposite of format().

#### Parameters

| Name | Type |
| :------ | :------ |
| `p` | `string` |

#### Returns

[`ParsedPath`](https://oven-sh.github.io/bun-types/interfaces/path_posix_.ParsedPath.md)

▸ **parse**(`p`): [`ParsedPath`](https://oven-sh.github.io/bun-types/interfaces/path_posix_.ParsedPath.md)

Returns an object from a path string - the opposite of format().

#### Parameters

| Name | Type |
| :------ | :------ |
| `p` | `string` |

#### Returns

[`ParsedPath`](https://oven-sh.github.io/bun-types/interfaces/path_posix_.ParsedPath.md)

___

### relative

▸ **relative**(`from`, `to`): `string`

Solve the relative path from {from} to {to}.
At times we have two absolute paths, and we need to derive the relative path from one to the other. This is actually the reverse transform of path.resolve.

#### Parameters

| Name | Type |
| :------ | :------ |
| `from` | `string` |
| `to` | `string` |

#### Returns

`string`

▸ **relative**(`from`, `to`): `string`

Solve the relative path from {from} to {to}.
At times we have two absolute paths, and we need to derive the relative path from one to the other. This is actually the reverse transform of path.resolve.

#### Parameters

| Name | Type |
| :------ | :------ |
| `from` | `string` |
| `to` | `string` |

#### Returns

`string`

___

### resolve

▸ **resolve**(...`pathSegments`): `string`

The right-most parameter is considered {to}.  Other parameters are considered an array of {from}.

Starting from leftmost {from} parameter, resolves {to} to an absolute path.

If {to} isn't already absolute, {from} arguments are prepended in right to left order,
until an absolute path is found. If after using all {from} paths still no absolute path is found,
the current working directory is used as well. The resulting path is normalized,
and trailing slashes are removed unless the path gets resolved to the root directory.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...pathSegments` | `string`[] | string paths to join.  Non-string arguments are ignored. |

#### Returns

`string`

▸ **resolve**(...`pathSegments`): `string`

The right-most parameter is considered {to}.  Other parameters are considered an array of {from}.

Starting from leftmost {from} parameter, resolves {to} to an absolute path.

If {to} isn't already absolute, {from} arguments are prepended in right to left order,
until an absolute path is found. If after using all {from} paths still no absolute path is found,
the current working directory is used as well. The resulting path is normalized,
and trailing slashes are removed unless the path gets resolved to the root directory.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...pathSegments` | `string`[] | string paths to join.  Non-string arguments are ignored. |

#### Returns

`string`

___

### toNamespacedPath

▸ **toNamespacedPath**(`path`): `string`

On Windows systems only, returns an equivalent namespace-prefixed path for the given path.
If path is not a string, path will be returned without modifications.
This method is meaningful only on Windows system.
On POSIX systems, the method is non-operational and always returns path without modifications.

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `string` |

#### Returns

`string`

▸ **toNamespacedPath**(`path`): `string`

On Windows systems only, returns an equivalent namespace-prefixed path for the given path.
If path is not a string, path will be returned without modifications.
This method is meaningful only on Windows system.
On POSIX systems, the method is non-operational and always returns path without modifications.

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `string` |

#### Returns

`string`
