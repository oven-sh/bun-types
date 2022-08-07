[bun-types](https://oven-sh.github.io/bun-types/README.md) / [Exports](https://oven-sh.github.io/bun-types/modules.md) / "node:fs/promises"

# Namespace: "node:fs/promises"

## Table of contents

### Interfaces

- [FileReadOptions](https://oven-sh.github.io/bun-types/interfaces/node_fs_promises_.FileReadOptions.md)
- [FileReadResult](https://oven-sh.github.io/bun-types/interfaces/node_fs_promises_.FileReadResult.md)
- [FlagAndOpenMode](https://oven-sh.github.io/bun-types/interfaces/node_fs_promises_.FlagAndOpenMode.md)

### Functions

- [access](https://oven-sh.github.io/bun-types/modules/node_fs_promises_.md#access)
- [appendFile](https://oven-sh.github.io/bun-types/modules/node_fs_promises_.md#appendfile)
- [chmod](https://oven-sh.github.io/bun-types/modules/node_fs_promises_.md#chmod)
- [chown](https://oven-sh.github.io/bun-types/modules/node_fs_promises_.md#chown)
- [copyFile](https://oven-sh.github.io/bun-types/modules/node_fs_promises_.md#copyfile)
- [lchmod](https://oven-sh.github.io/bun-types/modules/node_fs_promises_.md#lchmod)
- [lchown](https://oven-sh.github.io/bun-types/modules/node_fs_promises_.md#lchown)
- [link](https://oven-sh.github.io/bun-types/modules/node_fs_promises_.md#link)
- [lstat](https://oven-sh.github.io/bun-types/modules/node_fs_promises_.md#lstat)
- [lutimes](https://oven-sh.github.io/bun-types/modules/node_fs_promises_.md#lutimes)
- [mkdir](https://oven-sh.github.io/bun-types/modules/node_fs_promises_.md#mkdir)
- [mkdtemp](https://oven-sh.github.io/bun-types/modules/node_fs_promises_.md#mkdtemp)
- [open](https://oven-sh.github.io/bun-types/modules/node_fs_promises_.md#open)
- [readFile](https://oven-sh.github.io/bun-types/modules/node_fs_promises_.md#readfile)
- [readdir](https://oven-sh.github.io/bun-types/modules/node_fs_promises_.md#readdir)
- [readlink](https://oven-sh.github.io/bun-types/modules/node_fs_promises_.md#readlink)
- [realpath](https://oven-sh.github.io/bun-types/modules/node_fs_promises_.md#realpath)
- [rename](https://oven-sh.github.io/bun-types/modules/node_fs_promises_.md#rename)
- [stat](https://oven-sh.github.io/bun-types/modules/node_fs_promises_.md#stat)
- [symlink](https://oven-sh.github.io/bun-types/modules/node_fs_promises_.md#symlink)
- [truncate](https://oven-sh.github.io/bun-types/modules/node_fs_promises_.md#truncate)
- [unlink](https://oven-sh.github.io/bun-types/modules/node_fs_promises_.md#unlink)
- [utimes](https://oven-sh.github.io/bun-types/modules/node_fs_promises_.md#utimes)
- [writeFile](https://oven-sh.github.io/bun-types/modules/node_fs_promises_.md#writefile)

## Functions

### access

▸ **access**(`path`, `mode?`): `Promise`<`void`\>

Tests a user"s permissions for the file or directory specified by `path`.
The `mode` argument is an optional integer that specifies the accessibility
checks to be performed. `mode` should be either the value `fs.constants.F_OK`or a mask consisting of the bitwise OR of any of `fs.constants.R_OK`,`fs.constants.W_OK`, and `fs.constants.X_OK`
(e.g.`fs.constants.W_OK | fs.constants.R_OK`). Check `File access constants` for
possible values of `mode`.

If the accessibility check is successful, the promise is resolved with no
value. If any of the accessibility checks fail, the promise is rejected
with an [Error](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error) object. The following example checks if the file`/etc/passwd` can be read and
written by the current process.

```js
import { access } from "fs/promises";
import { constants } from "fs";

try {
  await access("/etc/passwd", constants.R_OK | constants.W_OK);
  console.log("can access");
} catch {
  console.error("cannot access");
}
```

Using `fsPromises.access()` to check for the accessibility of a file before
calling `fsPromises.open()` is not recommended. Doing so introduces a race
condition, since other processes may change the file"s state between the two
calls. Instead, user code should open/read/write the file directly and handle
the error raised if the file is not accessible.

**`Since`**

v0.0.67

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `PathLike` |
| `mode?` | `number` |

#### Returns

`Promise`<`void`\>

Fulfills with `undefined` upon success.

▸ **access**(`path`, `mode?`): `Promise`<`void`\>

Tests a user"s permissions for the file or directory specified by `path`.
The `mode` argument is an optional integer that specifies the accessibility
checks to be performed. `mode` should be either the value `fs.constants.F_OK`or a mask consisting of the bitwise OR of any of `fs.constants.R_OK`,`fs.constants.W_OK`, and `fs.constants.X_OK`
(e.g.`fs.constants.W_OK | fs.constants.R_OK`). Check `File access constants` for
possible values of `mode`.

If the accessibility check is successful, the promise is resolved with no
value. If any of the accessibility checks fail, the promise is rejected
with an [Error](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error) object. The following example checks if the file`/etc/passwd` can be read and
written by the current process.

```js
import { access } from "fs/promises";
import { constants } from "fs";

try {
  await access("/etc/passwd", constants.R_OK | constants.W_OK);
  console.log("can access");
} catch {
  console.error("cannot access");
}
```

Using `fsPromises.access()` to check for the accessibility of a file before
calling `fsPromises.open()` is not recommended. Doing so introduces a race
condition, since other processes may change the file"s state between the two
calls. Instead, user code should open/read/write the file directly and handle
the error raised if the file is not accessible.

**`Since`**

v0.0.67

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `PathLike` |
| `mode?` | `number` |

#### Returns

`Promise`<`void`\>

Fulfills with `undefined` upon success.

___

### appendFile

▸ **appendFile**(`path`, `data`, `options?`): `Promise`<`void`\>

Asynchronously append data to a file, creating the file if it does not yet
exist. `data` can be a string or a `Buffer`.

If `options` is a string, then it specifies the `encoding`.

The `mode` option only affects the newly created file. See `fs.open()` for more details.

The `path` may be specified as a `FileHandle` that has been opened
for appending (using `fsPromises.open()`).

**`Since`**

v0.0.67

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `path` | `PathOrFileDescriptor` | filename or {FileHandle} |
| `data` | `string` \| `Uint8Array` | - |
| `options?` | [`WriteFileOptions`](https://oven-sh.github.io/bun-types/modules/fs_.md#writefileoptions) | - |

#### Returns

`Promise`<`void`\>

Fulfills with `undefined` upon success.

▸ **appendFile**(`path`, `data`, `options?`): `Promise`<`void`\>

Asynchronously append data to a file, creating the file if it does not yet
exist. `data` can be a string or a `Buffer`.

If `options` is a string, then it specifies the `encoding`.

The `mode` option only affects the newly created file. See `fs.open()` for more details.

The `path` may be specified as a `FileHandle` that has been opened
for appending (using `fsPromises.open()`).

**`Since`**

v0.0.67

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `path` | `PathOrFileDescriptor` | filename or {FileHandle} |
| `data` | `string` \| `Uint8Array` | - |
| `options?` | [`WriteFileOptions`](https://oven-sh.github.io/bun-types/modules/fs_.md#writefileoptions) | - |

#### Returns

`Promise`<`void`\>

Fulfills with `undefined` upon success.

___

### chmod

▸ **chmod**(`path`, `mode`): `Promise`<`void`\>

Changes the permissions of a file.

**`Since`**

v0.0.67

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `PathLike` |
| `mode` | [`Mode`](https://oven-sh.github.io/bun-types/modules/fs_.md#mode) |

#### Returns

`Promise`<`void`\>

Fulfills with `undefined` upon success.

▸ **chmod**(`path`, `mode`): `Promise`<`void`\>

Changes the permissions of a file.

**`Since`**

v0.0.67

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `PathLike` |
| `mode` | [`Mode`](https://oven-sh.github.io/bun-types/modules/fs_.md#mode) |

#### Returns

`Promise`<`void`\>

Fulfills with `undefined` upon success.

___

### chown

▸ **chown**(`path`, `uid`, `gid`): `Promise`<`void`\>

Changes the ownership of a file.

**`Since`**

v0.0.67

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `PathLike` |
| `uid` | `number` |
| `gid` | `number` |

#### Returns

`Promise`<`void`\>

Fulfills with `undefined` upon success.

▸ **chown**(`path`, `uid`, `gid`): `Promise`<`void`\>

Changes the ownership of a file.

**`Since`**

v0.0.67

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `PathLike` |
| `uid` | `number` |
| `gid` | `number` |

#### Returns

`Promise`<`void`\>

Fulfills with `undefined` upon success.

___

### copyFile

▸ **copyFile**(`src`, `dest`, `mode?`): `Promise`<`void`\>

Asynchronously copies `src` to `dest`. By default, `dest` is overwritten if it
already exists.

No guarantees are made about the atomicity of the copy operation. If an
error occurs after the destination file has been opened for writing, an attempt
will be made to remove the destination.

```js
import { constants } from "fs";
import { copyFile } from "fs/promises";

try {
  await copyFile("source.txt", "destination.txt");
  console.log("source.txt was copied to destination.txt");
} catch {
  console.log("The file could not be copied");
}

// By using COPYFILE_EXCL, the operation will fail if destination.txt exists.
try {
  await copyFile("source.txt", "destination.txt", constants.COPYFILE_EXCL);
  console.log("source.txt was copied to destination.txt");
} catch {
  console.log("The file could not be copied");
}
```

**`Since`**

v0.0.67

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `src` | `PathLike` | source filename to copy |
| `dest` | `PathLike` | destination filename of the copy operation |
| `mode?` | `number` | Optional modifiers that specify the behavior of the copy operation. It is possible to create a mask consisting of the bitwise OR of two or more values (e.g. `fs.constants.COPYFILE_EXCL \| fs.constants.COPYFILE_FICLONE`) |

#### Returns

`Promise`<`void`\>

Fulfills with `undefined` upon success.

▸ **copyFile**(`src`, `dest`, `mode?`): `Promise`<`void`\>

Asynchronously copies `src` to `dest`. By default, `dest` is overwritten if it
already exists.

No guarantees are made about the atomicity of the copy operation. If an
error occurs after the destination file has been opened for writing, an attempt
will be made to remove the destination.

```js
import { constants } from "fs";
import { copyFile } from "fs/promises";

try {
  await copyFile("source.txt", "destination.txt");
  console.log("source.txt was copied to destination.txt");
} catch {
  console.log("The file could not be copied");
}

// By using COPYFILE_EXCL, the operation will fail if destination.txt exists.
try {
  await copyFile("source.txt", "destination.txt", constants.COPYFILE_EXCL);
  console.log("source.txt was copied to destination.txt");
} catch {
  console.log("The file could not be copied");
}
```

**`Since`**

v0.0.67

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `src` | `PathLike` | source filename to copy |
| `dest` | `PathLike` | destination filename of the copy operation |
| `mode?` | `number` | Optional modifiers that specify the behavior of the copy operation. It is possible to create a mask consisting of the bitwise OR of two or more values (e.g. `fs.constants.COPYFILE_EXCL \| fs.constants.COPYFILE_FICLONE`) |

#### Returns

`Promise`<`void`\>

Fulfills with `undefined` upon success.

___

### lchmod

▸ **lchmod**(`path`, `mode`): `Promise`<`void`\>

Changes the permissions on a symbolic link.

This method is only implemented on macOS.

**`Deprecated`**

Since v0.4.7

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `PathLike` |
| `mode` | [`Mode`](https://oven-sh.github.io/bun-types/modules/fs_.md#mode) |

#### Returns

`Promise`<`void`\>

Fulfills with `undefined` upon success.

▸ **lchmod**(`path`, `mode`): `Promise`<`void`\>

Changes the permissions on a symbolic link.

This method is only implemented on macOS.

**`Deprecated`**

Since v0.4.7

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `PathLike` |
| `mode` | [`Mode`](https://oven-sh.github.io/bun-types/modules/fs_.md#mode) |

#### Returns

`Promise`<`void`\>

Fulfills with `undefined` upon success.

___

### lchown

▸ **lchown**(`path`, `uid`, `gid`): `Promise`<`void`\>

Changes the ownership on a symbolic link.

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `PathLike` |
| `uid` | `number` |
| `gid` | `number` |

#### Returns

`Promise`<`void`\>

Fulfills with `undefined` upon success.

▸ **lchown**(`path`, `uid`, `gid`): `Promise`<`void`\>

Changes the ownership on a symbolic link.

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `PathLike` |
| `uid` | `number` |
| `gid` | `number` |

#### Returns

`Promise`<`void`\>

Fulfills with `undefined` upon success.

___

### link

▸ **link**(`existingPath`, `newPath`): `Promise`<`void`\>

Creates a new link from the `existingPath` to the `newPath`. See the POSIX [`link(2)`](http://man7.org/linux/man-pages/man2/link.2.html) documentation for more detail.

**`Since`**

v0.0.67

#### Parameters

| Name | Type |
| :------ | :------ |
| `existingPath` | `PathLike` |
| `newPath` | `PathLike` |

#### Returns

`Promise`<`void`\>

Fulfills with `undefined` upon success.

▸ **link**(`existingPath`, `newPath`): `Promise`<`void`\>

Creates a new link from the `existingPath` to the `newPath`. See the POSIX [`link(2)`](http://man7.org/linux/man-pages/man2/link.2.html) documentation for more detail.

**`Since`**

v0.0.67

#### Parameters

| Name | Type |
| :------ | :------ |
| `existingPath` | `PathLike` |
| `newPath` | `PathLike` |

#### Returns

`Promise`<`void`\>

Fulfills with `undefined` upon success.

___

### lstat

▸ **lstat**(`path`, `options?`): `Promise`<[`Stats`](https://oven-sh.github.io/bun-types/classes/fs_.Stats.md)\>

Equivalent to `fsPromises.stat()` unless `path` refers to a symbolic link,
in which case the link itself is stat-ed, not the file that it refers to.
Refer to the POSIX [`lstat(2)`](http://man7.org/linux/man-pages/man2/lstat.2.html) document for more detail.

**`Since`**

v0.0.67

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `PathLike` |
| `options?` | [`StatOptions`](https://oven-sh.github.io/bun-types/interfaces/fs_.StatOptions.md) & { `bigint?`: ``false``  } |

#### Returns

`Promise`<[`Stats`](https://oven-sh.github.io/bun-types/classes/fs_.Stats.md)\>

Fulfills with the {fs.Stats} object for the given symbolic link `path`.

▸ **lstat**(`path`, `options`): `Promise`<[`BigIntStats`](https://oven-sh.github.io/bun-types/interfaces/fs_.BigIntStats.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `PathLike` |
| `options` | [`StatOptions`](https://oven-sh.github.io/bun-types/interfaces/fs_.StatOptions.md) & { `bigint`: ``true``  } |

#### Returns

`Promise`<[`BigIntStats`](https://oven-sh.github.io/bun-types/interfaces/fs_.BigIntStats.md)\>

▸ **lstat**(`path`, `options?`): `Promise`<[`Stats`](https://oven-sh.github.io/bun-types/classes/fs_.Stats.md) \| [`BigIntStats`](https://oven-sh.github.io/bun-types/interfaces/fs_.BigIntStats.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `PathLike` |
| `options?` | [`StatOptions`](https://oven-sh.github.io/bun-types/interfaces/fs_.StatOptions.md) |

#### Returns

`Promise`<[`Stats`](https://oven-sh.github.io/bun-types/classes/fs_.Stats.md) \| [`BigIntStats`](https://oven-sh.github.io/bun-types/interfaces/fs_.BigIntStats.md)\>

▸ **lstat**(`path`, `options?`): `Promise`<[`Stats`](https://oven-sh.github.io/bun-types/classes/fs_.Stats.md)\>

Equivalent to `fsPromises.stat()` unless `path` refers to a symbolic link,
in which case the link itself is stat-ed, not the file that it refers to.
Refer to the POSIX [`lstat(2)`](http://man7.org/linux/man-pages/man2/lstat.2.html) document for more detail.

**`Since`**

v0.0.67

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `PathLike` |
| `options?` | [`StatOptions`](https://oven-sh.github.io/bun-types/interfaces/fs_.StatOptions.md) & { `bigint?`: ``false``  } |

#### Returns

`Promise`<[`Stats`](https://oven-sh.github.io/bun-types/classes/fs_.Stats.md)\>

Fulfills with the {fs.Stats} object for the given symbolic link `path`.

▸ **lstat**(`path`, `options`): `Promise`<[`BigIntStats`](https://oven-sh.github.io/bun-types/interfaces/fs_.BigIntStats.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `PathLike` |
| `options` | [`StatOptions`](https://oven-sh.github.io/bun-types/interfaces/fs_.StatOptions.md) & { `bigint`: ``true``  } |

#### Returns

`Promise`<[`BigIntStats`](https://oven-sh.github.io/bun-types/interfaces/fs_.BigIntStats.md)\>

▸ **lstat**(`path`, `options?`): `Promise`<[`Stats`](https://oven-sh.github.io/bun-types/classes/fs_.Stats.md) \| [`BigIntStats`](https://oven-sh.github.io/bun-types/interfaces/fs_.BigIntStats.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `PathLike` |
| `options?` | [`StatOptions`](https://oven-sh.github.io/bun-types/interfaces/fs_.StatOptions.md) |

#### Returns

`Promise`<[`Stats`](https://oven-sh.github.io/bun-types/classes/fs_.Stats.md) \| [`BigIntStats`](https://oven-sh.github.io/bun-types/interfaces/fs_.BigIntStats.md)\>

___

### lutimes

▸ **lutimes**(`path`, `atime`, `mtime`): `Promise`<`void`\>

Changes the access and modification times of a file in the same way as `fsPromises.utimes()`, with the difference that if the path refers to a
symbolic link, then the link is not dereferenced: instead, the timestamps of
the symbolic link itself are changed.

**`Since`**

v0.0.67

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `PathLike` |
| `atime` | `TimeLike` |
| `mtime` | `TimeLike` |

#### Returns

`Promise`<`void`\>

Fulfills with `undefined` upon success.

▸ **lutimes**(`path`, `atime`, `mtime`): `Promise`<`void`\>

Changes the access and modification times of a file in the same way as `fsPromises.utimes()`, with the difference that if the path refers to a
symbolic link, then the link is not dereferenced: instead, the timestamps of
the symbolic link itself are changed.

**`Since`**

v0.0.67

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `PathLike` |
| `atime` | `TimeLike` |
| `mtime` | `TimeLike` |

#### Returns

`Promise`<`void`\>

Fulfills with `undefined` upon success.

___

### mkdir

▸ **mkdir**(`path`, `options`): `Promise`<`string` \| `undefined`\>

Asynchronously creates a directory.

The optional `options` argument can be an integer specifying `mode` (permission
and sticky bits), or an object with a `mode` property and a `recursive`property indicating whether parent directories should be created. Calling`fsPromises.mkdir()` when `path` is a directory
that exists results in a
rejection only when `recursive` is false.

**`Since`**

v0.0.67

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `PathLike` |
| `options` | [`MakeDirectoryOptions`](https://oven-sh.github.io/bun-types/interfaces/fs_.MakeDirectoryOptions.md) & { `recursive`: ``true``  } |

#### Returns

`Promise`<`string` \| `undefined`\>

Upon success, fulfills with `undefined` if `recursive` is `false`, or the first directory path created if `recursive` is `true`.

▸ **mkdir**(`path`, `options?`): `Promise`<`void`\>

Asynchronous mkdir(2) - create a directory.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `path` | `PathLike` | A path to a file. If a URL is provided, it must use the `file:` protocol. |
| `options?` | [`Mode`](https://oven-sh.github.io/bun-types/modules/fs_.md#mode) \| [`MakeDirectoryOptions`](https://oven-sh.github.io/bun-types/interfaces/fs_.MakeDirectoryOptions.md) & { `recursive?`: ``false``  } | Either the file mode, or an object optionally specifying the file mode and whether parent folders should be created. If a string is passed, it is parsed as an octal integer. If not specified, defaults to `0o777`. |

#### Returns

`Promise`<`void`\>

▸ **mkdir**(`path`, `options?`): `Promise`<`string` \| `undefined`\>

Asynchronous mkdir(2) - create a directory.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `path` | `PathLike` | A path to a file. If a URL is provided, it must use the `file:` protocol. |
| `options?` | [`Mode`](https://oven-sh.github.io/bun-types/modules/fs_.md#mode) \| [`MakeDirectoryOptions`](https://oven-sh.github.io/bun-types/interfaces/fs_.MakeDirectoryOptions.md) | Either the file mode, or an object optionally specifying the file mode and whether parent folders should be created. If a string is passed, it is parsed as an octal integer. If not specified, defaults to `0o777`. |

#### Returns

`Promise`<`string` \| `undefined`\>

▸ **mkdir**(`path`, `options`): `Promise`<`string` \| `undefined`\>

Asynchronously creates a directory.

The optional `options` argument can be an integer specifying `mode` (permission
and sticky bits), or an object with a `mode` property and a `recursive`property indicating whether parent directories should be created. Calling`fsPromises.mkdir()` when `path` is a directory
that exists results in a
rejection only when `recursive` is false.

**`Since`**

v0.0.67

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `PathLike` |
| `options` | [`MakeDirectoryOptions`](https://oven-sh.github.io/bun-types/interfaces/fs_.MakeDirectoryOptions.md) & { `recursive`: ``true``  } |

#### Returns

`Promise`<`string` \| `undefined`\>

Upon success, fulfills with `undefined` if `recursive` is `false`, or the first directory path created if `recursive` is `true`.

▸ **mkdir**(`path`, `options?`): `Promise`<`void`\>

Asynchronous mkdir(2) - create a directory.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `path` | `PathLike` | A path to a file. If a URL is provided, it must use the `file:` protocol. |
| `options?` | [`Mode`](https://oven-sh.github.io/bun-types/modules/fs_.md#mode) \| [`MakeDirectoryOptions`](https://oven-sh.github.io/bun-types/interfaces/fs_.MakeDirectoryOptions.md) & { `recursive?`: ``false``  } | Either the file mode, or an object optionally specifying the file mode and whether parent folders should be created. If a string is passed, it is parsed as an octal integer. If not specified, defaults to `0o777`. |

#### Returns

`Promise`<`void`\>

▸ **mkdir**(`path`, `options?`): `Promise`<`string` \| `undefined`\>

Asynchronous mkdir(2) - create a directory.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `path` | `PathLike` | A path to a file. If a URL is provided, it must use the `file:` protocol. |
| `options?` | [`Mode`](https://oven-sh.github.io/bun-types/modules/fs_.md#mode) \| [`MakeDirectoryOptions`](https://oven-sh.github.io/bun-types/interfaces/fs_.MakeDirectoryOptions.md) | Either the file mode, or an object optionally specifying the file mode and whether parent folders should be created. If a string is passed, it is parsed as an octal integer. If not specified, defaults to `0o777`. |

#### Returns

`Promise`<`string` \| `undefined`\>

___

### mkdtemp

▸ **mkdtemp**(`prefix`, `options?`): `Promise`<`string`\>

Creates a unique temporary directory. A unique directory name is generated by
appending six random characters to the end of the provided `prefix`. Due to
platform inconsistencies, avoid trailing `X` characters in `prefix`. Some
platforms, notably the BSDs, can return more than six random characters, and
replace trailing `X` characters in `prefix` with random characters.

The optional `options` argument can be a string specifying an encoding, or an
object with an `encoding` property specifying the character encoding to use.

```js
import { mkdtemp } from "fs/promises";

try {
  await mkdtemp(path.join(os.tmpdir(), "foo-"));
} catch (err) {
  console.error(err);
}
```

The `fsPromises.mkdtemp()` method will append the six randomly selected
characters directly to the `prefix` string. For instance, given a directory`/tmp`, if the intention is to create a temporary directory _within_`/tmp`, the`prefix` must end with a trailing
platform-specific path separator
(`require("path").sep`).

**`Since`**

v0.0.67

#### Parameters

| Name | Type |
| :------ | :------ |
| `prefix` | `string` |
| `options?` | [`EncodingOption`](https://oven-sh.github.io/bun-types/modules/fs_.md#encodingoption) |

#### Returns

`Promise`<`string`\>

Fulfills with a string containing the filesystem path of the newly created temporary directory.

▸ **mkdtemp**(`prefix`, `options`): `Promise`<[`Buffer`](https://oven-sh.github.io/bun-types/modules/buffer_.md#buffer)\>

Asynchronously creates a unique temporary directory.
Generates six random characters to be appended behind a required `prefix` to create a unique temporary directory.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `prefix` | `string` | - |
| `options` | [`BufferEncodingOption`](https://oven-sh.github.io/bun-types/interfaces/BufferEncodingOption.md) | The encoding (or an object specifying the encoding), used as the encoding of the result. If not provided, `"utf8"` is used. |

#### Returns

`Promise`<[`Buffer`](https://oven-sh.github.io/bun-types/modules/buffer_.md#buffer)\>

▸ **mkdtemp**(`prefix`, `options?`): `Promise`<`string` \| [`Buffer`](https://oven-sh.github.io/bun-types/modules/buffer_.md#buffer)\>

Asynchronously creates a unique temporary directory.
Generates six random characters to be appended behind a required `prefix` to create a unique temporary directory.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `prefix` | `string` | - |
| `options?` | [`EncodingOption`](https://oven-sh.github.io/bun-types/modules/fs_.md#encodingoption) | The encoding (or an object specifying the encoding), used as the encoding of the result. If not provided, `"utf8"` is used. |

#### Returns

`Promise`<`string` \| [`Buffer`](https://oven-sh.github.io/bun-types/modules/buffer_.md#buffer)\>

▸ **mkdtemp**(`prefix`, `options?`): `Promise`<`string`\>

Creates a unique temporary directory. A unique directory name is generated by
appending six random characters to the end of the provided `prefix`. Due to
platform inconsistencies, avoid trailing `X` characters in `prefix`. Some
platforms, notably the BSDs, can return more than six random characters, and
replace trailing `X` characters in `prefix` with random characters.

The optional `options` argument can be a string specifying an encoding, or an
object with an `encoding` property specifying the character encoding to use.

```js
import { mkdtemp } from "fs/promises";

try {
  await mkdtemp(path.join(os.tmpdir(), "foo-"));
} catch (err) {
  console.error(err);
}
```

The `fsPromises.mkdtemp()` method will append the six randomly selected
characters directly to the `prefix` string. For instance, given a directory`/tmp`, if the intention is to create a temporary directory _within_`/tmp`, the`prefix` must end with a trailing
platform-specific path separator
(`require("path").sep`).

**`Since`**

v0.0.67

#### Parameters

| Name | Type |
| :------ | :------ |
| `prefix` | `string` |
| `options?` | [`EncodingOption`](https://oven-sh.github.io/bun-types/modules/fs_.md#encodingoption) |

#### Returns

`Promise`<`string`\>

Fulfills with a string containing the filesystem path of the newly created temporary directory.

▸ **mkdtemp**(`prefix`, `options`): `Promise`<[`Buffer`](https://oven-sh.github.io/bun-types/modules/buffer_.md#buffer)\>

Asynchronously creates a unique temporary directory.
Generates six random characters to be appended behind a required `prefix` to create a unique temporary directory.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `prefix` | `string` | - |
| `options` | [`BufferEncodingOption`](https://oven-sh.github.io/bun-types/interfaces/BufferEncodingOption.md) | The encoding (or an object specifying the encoding), used as the encoding of the result. If not provided, `"utf8"` is used. |

#### Returns

`Promise`<[`Buffer`](https://oven-sh.github.io/bun-types/modules/buffer_.md#buffer)\>

▸ **mkdtemp**(`prefix`, `options?`): `Promise`<`string` \| [`Buffer`](https://oven-sh.github.io/bun-types/modules/buffer_.md#buffer)\>

Asynchronously creates a unique temporary directory.
Generates six random characters to be appended behind a required `prefix` to create a unique temporary directory.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `prefix` | `string` | - |
| `options?` | [`EncodingOption`](https://oven-sh.github.io/bun-types/modules/fs_.md#encodingoption) | The encoding (or an object specifying the encoding), used as the encoding of the result. If not provided, `"utf8"` is used. |

#### Returns

`Promise`<`string` \| [`Buffer`](https://oven-sh.github.io/bun-types/modules/buffer_.md#buffer)\>

___

### open

▸ **open**(`path`, `flags?`, `mode?`): `Promise`<`number`\>

Opens a `FileHandle`.

Refer to the POSIX [`open(2)`](http://man7.org/linux/man-pages/man2/open.2.html) documentation for more detail.

Some characters (`< > : " / \ | ? *`) are reserved under Windows as documented
by [Naming Files, Paths, and Namespaces](https://docs.microsoft.com/en-us/windows/desktop/FileIO/naming-a-file). Under NTFS, if the filename contains
a colon, Node.js will open a file system stream, as described by [this MSDN page](https://docs.microsoft.com/en-us/windows/desktop/FileIO/using-streams).

**`Since`**

v0.0.67

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `path` | `PathLike` | - |
| `flags?` | [`OpenMode`](https://oven-sh.github.io/bun-types/modules/fs_.md#openmode) | See `support of file system `flags``. |
| `mode?` | [`Mode`](https://oven-sh.github.io/bun-types/modules/fs_.md#mode) | Sets the file mode (permission and sticky bits) if the file is created. |

#### Returns

`Promise`<`number`\>

Fulfills with a {FileHandle} object.

▸ **open**(`path`, `flags?`, `mode?`): `Promise`<`number`\>

Opens a `FileHandle`.

Refer to the POSIX [`open(2)`](http://man7.org/linux/man-pages/man2/open.2.html) documentation for more detail.

Some characters (`< > : " / \ | ? *`) are reserved under Windows as documented
by [Naming Files, Paths, and Namespaces](https://docs.microsoft.com/en-us/windows/desktop/FileIO/naming-a-file). Under NTFS, if the filename contains
a colon, Node.js will open a file system stream, as described by [this MSDN page](https://docs.microsoft.com/en-us/windows/desktop/FileIO/using-streams).

**`Since`**

v0.0.67

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `path` | `PathLike` | - |
| `flags?` | [`OpenMode`](https://oven-sh.github.io/bun-types/modules/fs_.md#openmode) | See `support of file system `flags``. |
| `mode?` | [`Mode`](https://oven-sh.github.io/bun-types/modules/fs_.md#mode) | Sets the file mode (permission and sticky bits) if the file is created. |

#### Returns

`Promise`<`number`\>

Fulfills with a {FileHandle} object.

___

### readFile

▸ **readFile**(`path`, `options?`): `Promise`<[`Buffer`](https://oven-sh.github.io/bun-types/modules/buffer_.md#buffer)\>

Asynchronously reads the entire contents of a file.

If no encoding is specified (using `options.encoding`), the data is returned
as a `Buffer` object. Otherwise, the data will be a string.

If `options` is a string, then it specifies the encoding.

When the `path` is a directory, the behavior of `fsPromises.readFile()` is
platform-specific. On macOS, Linux, and Windows, the promise will be rejected
with an error. On FreeBSD, a representation of the directory"s contents will be
returned.

It is possible to abort an ongoing `readFile` using an `AbortSignal`. If a
request is aborted the promise returned is rejected with an `AbortError`:

```js
import { readFile } from "fs/promises";

try {
  const controller = new AbortController();
  const { signal } = controller;
  const promise = readFile(fileName, { signal });

  // Abort the request before the promise settles.
  controller.abort();

  await promise;
} catch (err) {
  // When a request is aborted - err is an AbortError
  console.error(err);
}
```

Aborting an ongoing request does not abort individual operating
system requests but rather the internal buffering `fs.readFile` performs.

Any specified `FileHandle` has to support reading.

**`Since`**

v0.0.67

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `path` | `PathOrFileDescriptor` | filename or `FileHandle` |
| `options?` | { `encoding?`: ``null`` ; `flag?`: `string`  } & [`Abortable`](https://oven-sh.github.io/bun-types/interfaces/fs_.Abortable.md) | - |

#### Returns

`Promise`<[`Buffer`](https://oven-sh.github.io/bun-types/modules/buffer_.md#buffer)\>

Fulfills with the contents of the file.

▸ **readFile**(`path`, `options`): `Promise`<`string`\>

Asynchronously reads the entire contents of a file.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `path` | `PathOrFileDescriptor` | A path to a file. If a URL is provided, it must use the `file:` protocol. If a `FileHandle` is provided, the underlying file will _not_ be closed automatically. |
| `options` | `BufferEncoding` \| { `encoding`: `BufferEncoding` ; `flag?`: [`OpenMode`](https://oven-sh.github.io/bun-types/modules/fs_.md#openmode)  } & [`Abortable`](https://oven-sh.github.io/bun-types/interfaces/fs_.Abortable.md) | An object that may contain an optional flag. If a flag is not provided, it defaults to `"r"`. |

#### Returns

`Promise`<`string`\>

▸ **readFile**(`path`, `options?`): `Promise`<`string` \| [`Buffer`](https://oven-sh.github.io/bun-types/modules/buffer_.md#buffer)\>

Asynchronously reads the entire contents of a file.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `path` | `PathOrFileDescriptor` | A path to a file. If a URL is provided, it must use the `file:` protocol. If a `FileHandle` is provided, the underlying file will _not_ be closed automatically. |
| `options?` | `BufferEncoding` \| [`ObjectEncodingOptions`](https://oven-sh.github.io/bun-types/interfaces/fs_.ObjectEncodingOptions.md) & [`Abortable`](https://oven-sh.github.io/bun-types/interfaces/fs_.Abortable.md) & { `flag?`: [`OpenMode`](https://oven-sh.github.io/bun-types/modules/fs_.md#openmode)  } | An object that may contain an optional flag. If a flag is not provided, it defaults to `"r"`. |

#### Returns

`Promise`<`string` \| [`Buffer`](https://oven-sh.github.io/bun-types/modules/buffer_.md#buffer)\>

▸ **readFile**(`path`, `options?`): `Promise`<[`Buffer`](https://oven-sh.github.io/bun-types/modules/buffer_.md#buffer)\>

Asynchronously reads the entire contents of a file.

If no encoding is specified (using `options.encoding`), the data is returned
as a `Buffer` object. Otherwise, the data will be a string.

If `options` is a string, then it specifies the encoding.

When the `path` is a directory, the behavior of `fsPromises.readFile()` is
platform-specific. On macOS, Linux, and Windows, the promise will be rejected
with an error. On FreeBSD, a representation of the directory"s contents will be
returned.

It is possible to abort an ongoing `readFile` using an `AbortSignal`. If a
request is aborted the promise returned is rejected with an `AbortError`:

```js
import { readFile } from "fs/promises";

try {
  const controller = new AbortController();
  const { signal } = controller;
  const promise = readFile(fileName, { signal });

  // Abort the request before the promise settles.
  controller.abort();

  await promise;
} catch (err) {
  // When a request is aborted - err is an AbortError
  console.error(err);
}
```

Aborting an ongoing request does not abort individual operating
system requests but rather the internal buffering `fs.readFile` performs.

Any specified `FileHandle` has to support reading.

**`Since`**

v0.0.67

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `path` | `PathOrFileDescriptor` | filename or `FileHandle` |
| `options?` | { `encoding?`: ``null`` ; `flag?`: `string`  } & [`Abortable`](https://oven-sh.github.io/bun-types/interfaces/fs_.Abortable.md) | - |

#### Returns

`Promise`<[`Buffer`](https://oven-sh.github.io/bun-types/modules/buffer_.md#buffer)\>

Fulfills with the contents of the file.

▸ **readFile**(`path`, `options`): `Promise`<`string`\>

Asynchronously reads the entire contents of a file.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `path` | `PathOrFileDescriptor` | A path to a file. If a URL is provided, it must use the `file:` protocol. If a `FileHandle` is provided, the underlying file will _not_ be closed automatically. |
| `options` | `BufferEncoding` \| { `encoding`: `BufferEncoding` ; `flag?`: [`OpenMode`](https://oven-sh.github.io/bun-types/modules/fs_.md#openmode)  } & [`Abortable`](https://oven-sh.github.io/bun-types/interfaces/fs_.Abortable.md) | An object that may contain an optional flag. If a flag is not provided, it defaults to `"r"`. |

#### Returns

`Promise`<`string`\>

▸ **readFile**(`path`, `options?`): `Promise`<`string` \| [`Buffer`](https://oven-sh.github.io/bun-types/modules/buffer_.md#buffer)\>

Asynchronously reads the entire contents of a file.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `path` | `PathOrFileDescriptor` | A path to a file. If a URL is provided, it must use the `file:` protocol. If a `FileHandle` is provided, the underlying file will _not_ be closed automatically. |
| `options?` | `BufferEncoding` \| [`ObjectEncodingOptions`](https://oven-sh.github.io/bun-types/interfaces/fs_.ObjectEncodingOptions.md) & [`Abortable`](https://oven-sh.github.io/bun-types/interfaces/fs_.Abortable.md) & { `flag?`: [`OpenMode`](https://oven-sh.github.io/bun-types/modules/fs_.md#openmode)  } | An object that may contain an optional flag. If a flag is not provided, it defaults to `"r"`. |

#### Returns

`Promise`<`string` \| [`Buffer`](https://oven-sh.github.io/bun-types/modules/buffer_.md#buffer)\>

___

### readdir

▸ **readdir**(`path`, `options?`): `Promise`<`string`[]\>

Reads the contents of a directory.

The optional `options` argument can be a string specifying an encoding, or an
object with an `encoding` property specifying the character encoding to use for
the filenames. If the `encoding` is set to `"buffer"`, the filenames returned
will be passed as `Buffer` objects.

If `options.withFileTypes` is set to `true`, the resolved array will contain `fs.Dirent` objects.

```js
import { readdir } from "fs/promises";

try {
  const files = await readdir(path);
  for (const file of files)
    console.log(file);
} catch (err) {
  console.error(err);
}
```

**`Since`**

v0.0.67

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `PathLike` |
| `options?` | `BufferEncoding` \| [`ObjectEncodingOptions`](https://oven-sh.github.io/bun-types/interfaces/fs_.ObjectEncodingOptions.md) & { `withFileTypes?`: ``false``  } |

#### Returns

`Promise`<`string`[]\>

Fulfills with an array of the names of the files in the directory excluding `"."` and `".."`.

▸ **readdir**(`path`, `options`): `Promise`<[`Buffer`](https://oven-sh.github.io/bun-types/modules/buffer_.md#buffer)[]\>

Asynchronous readdir(3) - read a directory.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `path` | `PathLike` | A path to a file. If a URL is provided, it must use the `file:` protocol. |
| `options` | ``"buffer"`` \| { `encoding`: ``"buffer"`` ; `withFileTypes?`: ``false``  } | The encoding (or an object specifying the encoding), used as the encoding of the result. If not provided, `"utf8"` is used. |

#### Returns

`Promise`<[`Buffer`](https://oven-sh.github.io/bun-types/modules/buffer_.md#buffer)[]\>

▸ **readdir**(`path`, `options?`): `Promise`<`string`[] \| [`Buffer`](https://oven-sh.github.io/bun-types/modules/buffer_.md#buffer)[]\>

Asynchronous readdir(3) - read a directory.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `path` | `PathLike` | A path to a file. If a URL is provided, it must use the `file:` protocol. |
| `options?` | `BufferEncoding` \| [`ObjectEncodingOptions`](https://oven-sh.github.io/bun-types/interfaces/fs_.ObjectEncodingOptions.md) & { `withFileTypes?`: ``false``  } | The encoding (or an object specifying the encoding), used as the encoding of the result. If not provided, `"utf8"` is used. |

#### Returns

`Promise`<`string`[] \| [`Buffer`](https://oven-sh.github.io/bun-types/modules/buffer_.md#buffer)[]\>

▸ **readdir**(`path`, `options`): `Promise`<[`Dirent`](https://oven-sh.github.io/bun-types/classes/fs_.Dirent.md)[]\>

Asynchronous readdir(3) - read a directory.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `path` | `PathLike` | A path to a file. If a URL is provided, it must use the `file:` protocol. |
| `options` | [`ObjectEncodingOptions`](https://oven-sh.github.io/bun-types/interfaces/fs_.ObjectEncodingOptions.md) & { `withFileTypes`: ``true``  } | If called with `withFileTypes: true` the result data will be an array of Dirent. |

#### Returns

`Promise`<[`Dirent`](https://oven-sh.github.io/bun-types/classes/fs_.Dirent.md)[]\>

▸ **readdir**(`path`, `options?`): `Promise`<`string`[]\>

Reads the contents of a directory.

The optional `options` argument can be a string specifying an encoding, or an
object with an `encoding` property specifying the character encoding to use for
the filenames. If the `encoding` is set to `"buffer"`, the filenames returned
will be passed as `Buffer` objects.

If `options.withFileTypes` is set to `true`, the resolved array will contain `fs.Dirent` objects.

```js
import { readdir } from "fs/promises";

try {
  const files = await readdir(path);
  for (const file of files)
    console.log(file);
} catch (err) {
  console.error(err);
}
```

**`Since`**

v0.0.67

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `PathLike` |
| `options?` | `BufferEncoding` \| [`ObjectEncodingOptions`](https://oven-sh.github.io/bun-types/interfaces/fs_.ObjectEncodingOptions.md) & { `withFileTypes?`: ``false``  } |

#### Returns

`Promise`<`string`[]\>

Fulfills with an array of the names of the files in the directory excluding `"."` and `".."`.

▸ **readdir**(`path`, `options`): `Promise`<[`Buffer`](https://oven-sh.github.io/bun-types/modules/buffer_.md#buffer)[]\>

Asynchronous readdir(3) - read a directory.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `path` | `PathLike` | A path to a file. If a URL is provided, it must use the `file:` protocol. |
| `options` | ``"buffer"`` \| { `encoding`: ``"buffer"`` ; `withFileTypes?`: ``false``  } | The encoding (or an object specifying the encoding), used as the encoding of the result. If not provided, `"utf8"` is used. |

#### Returns

`Promise`<[`Buffer`](https://oven-sh.github.io/bun-types/modules/buffer_.md#buffer)[]\>

▸ **readdir**(`path`, `options?`): `Promise`<`string`[] \| [`Buffer`](https://oven-sh.github.io/bun-types/modules/buffer_.md#buffer)[]\>

Asynchronous readdir(3) - read a directory.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `path` | `PathLike` | A path to a file. If a URL is provided, it must use the `file:` protocol. |
| `options?` | `BufferEncoding` \| [`ObjectEncodingOptions`](https://oven-sh.github.io/bun-types/interfaces/fs_.ObjectEncodingOptions.md) & { `withFileTypes?`: ``false``  } | The encoding (or an object specifying the encoding), used as the encoding of the result. If not provided, `"utf8"` is used. |

#### Returns

`Promise`<`string`[] \| [`Buffer`](https://oven-sh.github.io/bun-types/modules/buffer_.md#buffer)[]\>

▸ **readdir**(`path`, `options`): `Promise`<[`Dirent`](https://oven-sh.github.io/bun-types/classes/fs_.Dirent.md)[]\>

Asynchronous readdir(3) - read a directory.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `path` | `PathLike` | A path to a file. If a URL is provided, it must use the `file:` protocol. |
| `options` | [`ObjectEncodingOptions`](https://oven-sh.github.io/bun-types/interfaces/fs_.ObjectEncodingOptions.md) & { `withFileTypes`: ``true``  } | If called with `withFileTypes: true` the result data will be an array of Dirent. |

#### Returns

`Promise`<[`Dirent`](https://oven-sh.github.io/bun-types/classes/fs_.Dirent.md)[]\>

___

### readlink

▸ **readlink**(`path`, `options?`): `Promise`<`string`\>

Reads the contents of the symbolic link referred to by `path`. See the POSIX [`readlink(2)`](http://man7.org/linux/man-pages/man2/readlink.2.html) documentation for more detail. The promise is
resolved with the`linkString` upon success.

The optional `options` argument can be a string specifying an encoding, or an
object with an `encoding` property specifying the character encoding to use for
the link path returned. If the `encoding` is set to `"buffer"`, the link path
returned will be passed as a `Buffer` object.

**`Since`**

v0.0.67

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `PathLike` |
| `options?` | ``"buffer"`` \| ``"utf8"`` \| ``"utf-8"`` \| ``"ascii"`` \| ``"utf16le"`` \| ``"ucs2"`` \| ``"ucs-2"`` \| ``"latin1"`` \| ``"binary"`` \| ``"hex"`` \| [`ObjectEncodingOptions`](https://oven-sh.github.io/bun-types/interfaces/fs_.ObjectEncodingOptions.md) |

#### Returns

`Promise`<`string`\>

Fulfills with the `linkString` upon success.

▸ **readlink**(`path`, `options`): `Promise`<[`Buffer`](https://oven-sh.github.io/bun-types/modules/buffer_.md#buffer)\>

Asynchronous readlink(2) - read value of a symbolic link.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `path` | `PathLike` | A path to a file. If a URL is provided, it must use the `file:` protocol. |
| `options` | [`BufferEncodingOption`](https://oven-sh.github.io/bun-types/interfaces/BufferEncodingOption.md) | The encoding (or an object specifying the encoding), used as the encoding of the result. If not provided, `"utf8"` is used. |

#### Returns

`Promise`<[`Buffer`](https://oven-sh.github.io/bun-types/modules/buffer_.md#buffer)\>

▸ **readlink**(`path`, `options?`): `Promise`<`string` \| [`Buffer`](https://oven-sh.github.io/bun-types/modules/buffer_.md#buffer)\>

Asynchronous readlink(2) - read value of a symbolic link.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `path` | `PathLike` | A path to a file. If a URL is provided, it must use the `file:` protocol. |
| `options?` | `string` \| [`ObjectEncodingOptions`](https://oven-sh.github.io/bun-types/interfaces/fs_.ObjectEncodingOptions.md) | The encoding (or an object specifying the encoding), used as the encoding of the result. If not provided, `"utf8"` is used. |

#### Returns

`Promise`<`string` \| [`Buffer`](https://oven-sh.github.io/bun-types/modules/buffer_.md#buffer)\>

▸ **readlink**(`path`, `options?`): `Promise`<`string`\>

Reads the contents of the symbolic link referred to by `path`. See the POSIX [`readlink(2)`](http://man7.org/linux/man-pages/man2/readlink.2.html) documentation for more detail. The promise is
resolved with the`linkString` upon success.

The optional `options` argument can be a string specifying an encoding, or an
object with an `encoding` property specifying the character encoding to use for
the link path returned. If the `encoding` is set to `"buffer"`, the link path
returned will be passed as a `Buffer` object.

**`Since`**

v0.0.67

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `PathLike` |
| `options?` | ``"buffer"`` \| ``"utf8"`` \| ``"utf-8"`` \| ``"ascii"`` \| ``"utf16le"`` \| ``"ucs2"`` \| ``"ucs-2"`` \| ``"latin1"`` \| ``"binary"`` \| ``"hex"`` \| [`ObjectEncodingOptions`](https://oven-sh.github.io/bun-types/interfaces/fs_.ObjectEncodingOptions.md) |

#### Returns

`Promise`<`string`\>

Fulfills with the `linkString` upon success.

▸ **readlink**(`path`, `options`): `Promise`<[`Buffer`](https://oven-sh.github.io/bun-types/modules/buffer_.md#buffer)\>

Asynchronous readlink(2) - read value of a symbolic link.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `path` | `PathLike` | A path to a file. If a URL is provided, it must use the `file:` protocol. |
| `options` | [`BufferEncodingOption`](https://oven-sh.github.io/bun-types/interfaces/BufferEncodingOption.md) | The encoding (or an object specifying the encoding), used as the encoding of the result. If not provided, `"utf8"` is used. |

#### Returns

`Promise`<[`Buffer`](https://oven-sh.github.io/bun-types/modules/buffer_.md#buffer)\>

▸ **readlink**(`path`, `options?`): `Promise`<`string` \| [`Buffer`](https://oven-sh.github.io/bun-types/modules/buffer_.md#buffer)\>

Asynchronous readlink(2) - read value of a symbolic link.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `path` | `PathLike` | A path to a file. If a URL is provided, it must use the `file:` protocol. |
| `options?` | `string` \| [`ObjectEncodingOptions`](https://oven-sh.github.io/bun-types/interfaces/fs_.ObjectEncodingOptions.md) | The encoding (or an object specifying the encoding), used as the encoding of the result. If not provided, `"utf8"` is used. |

#### Returns

`Promise`<`string` \| [`Buffer`](https://oven-sh.github.io/bun-types/modules/buffer_.md#buffer)\>

___

### realpath

▸ **realpath**(`path`, `options?`): `Promise`<`string`\>

Determines the actual location of `path` using the same semantics as the`fs.realpath.native()` function.

Only paths that can be converted to UTF8 strings are supported.

The optional `options` argument can be a string specifying an encoding, or an
object with an `encoding` property specifying the character encoding to use for
the path. If the `encoding` is set to `"buffer"`, the path returned will be
passed as a `Buffer` object.

On Linux, when Node.js is linked against musl libc, the procfs file system must
be mounted on `/proc` in order for this function to work. Glibc does not have
this restriction.

**`Since`**

v0.0.67

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `PathLike` |
| `options?` | [`EncodingOption`](https://oven-sh.github.io/bun-types/modules/fs_.md#encodingoption) |

#### Returns

`Promise`<`string`\>

Fulfills with the resolved path upon success.

▸ **realpath**(`path`, `options`): `Promise`<[`Buffer`](https://oven-sh.github.io/bun-types/modules/buffer_.md#buffer)\>

Asynchronous realpath(3) - return the canonicalized absolute pathname.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `path` | `PathLike` | A path to a file. If a URL is provided, it must use the `file:` protocol. |
| `options` | [`BufferEncodingOption`](https://oven-sh.github.io/bun-types/interfaces/BufferEncodingOption.md) | The encoding (or an object specifying the encoding), used as the encoding of the result. If not provided, `"utf8"` is used. |

#### Returns

`Promise`<[`Buffer`](https://oven-sh.github.io/bun-types/modules/buffer_.md#buffer)\>

▸ **realpath**(`path`, `options?`): `Promise`<`string` \| [`Buffer`](https://oven-sh.github.io/bun-types/modules/buffer_.md#buffer)\>

Asynchronous realpath(3) - return the canonicalized absolute pathname.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `path` | `PathLike` | A path to a file. If a URL is provided, it must use the `file:` protocol. |
| `options?` | [`EncodingOption`](https://oven-sh.github.io/bun-types/modules/fs_.md#encodingoption) | The encoding (or an object specifying the encoding), used as the encoding of the result. If not provided, `"utf8"` is used. |

#### Returns

`Promise`<`string` \| [`Buffer`](https://oven-sh.github.io/bun-types/modules/buffer_.md#buffer)\>

▸ **realpath**(`path`, `options?`): `Promise`<`string`\>

Determines the actual location of `path` using the same semantics as the`fs.realpath.native()` function.

Only paths that can be converted to UTF8 strings are supported.

The optional `options` argument can be a string specifying an encoding, or an
object with an `encoding` property specifying the character encoding to use for
the path. If the `encoding` is set to `"buffer"`, the path returned will be
passed as a `Buffer` object.

On Linux, when Node.js is linked against musl libc, the procfs file system must
be mounted on `/proc` in order for this function to work. Glibc does not have
this restriction.

**`Since`**

v0.0.67

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `PathLike` |
| `options?` | [`EncodingOption`](https://oven-sh.github.io/bun-types/modules/fs_.md#encodingoption) |

#### Returns

`Promise`<`string`\>

Fulfills with the resolved path upon success.

▸ **realpath**(`path`, `options`): `Promise`<[`Buffer`](https://oven-sh.github.io/bun-types/modules/buffer_.md#buffer)\>

Asynchronous realpath(3) - return the canonicalized absolute pathname.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `path` | `PathLike` | A path to a file. If a URL is provided, it must use the `file:` protocol. |
| `options` | [`BufferEncodingOption`](https://oven-sh.github.io/bun-types/interfaces/BufferEncodingOption.md) | The encoding (or an object specifying the encoding), used as the encoding of the result. If not provided, `"utf8"` is used. |

#### Returns

`Promise`<[`Buffer`](https://oven-sh.github.io/bun-types/modules/buffer_.md#buffer)\>

▸ **realpath**(`path`, `options?`): `Promise`<`string` \| [`Buffer`](https://oven-sh.github.io/bun-types/modules/buffer_.md#buffer)\>

Asynchronous realpath(3) - return the canonicalized absolute pathname.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `path` | `PathLike` | A path to a file. If a URL is provided, it must use the `file:` protocol. |
| `options?` | [`EncodingOption`](https://oven-sh.github.io/bun-types/modules/fs_.md#encodingoption) | The encoding (or an object specifying the encoding), used as the encoding of the result. If not provided, `"utf8"` is used. |

#### Returns

`Promise`<`string` \| [`Buffer`](https://oven-sh.github.io/bun-types/modules/buffer_.md#buffer)\>

___

### rename

▸ **rename**(`oldPath`, `newPath`): `Promise`<`void`\>

Renames `oldPath` to `newPath`.

**`Since`**

v0.0.67

#### Parameters

| Name | Type |
| :------ | :------ |
| `oldPath` | `PathLike` |
| `newPath` | `PathLike` |

#### Returns

`Promise`<`void`\>

Fulfills with `undefined` upon success.

▸ **rename**(`oldPath`, `newPath`): `Promise`<`void`\>

Renames `oldPath` to `newPath`.

**`Since`**

v0.0.67

#### Parameters

| Name | Type |
| :------ | :------ |
| `oldPath` | `PathLike` |
| `newPath` | `PathLike` |

#### Returns

`Promise`<`void`\>

Fulfills with `undefined` upon success.

___

### stat

▸ **stat**(`path`, `options?`): `Promise`<[`Stats`](https://oven-sh.github.io/bun-types/classes/fs_.Stats.md)\>

**`Since`**

v0.0.67

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `PathLike` |
| `options?` | [`StatOptions`](https://oven-sh.github.io/bun-types/interfaces/fs_.StatOptions.md) & { `bigint?`: ``false``  } |

#### Returns

`Promise`<[`Stats`](https://oven-sh.github.io/bun-types/classes/fs_.Stats.md)\>

Fulfills with the {fs.Stats} object for the given `path`.

▸ **stat**(`path`, `options`): `Promise`<[`BigIntStats`](https://oven-sh.github.io/bun-types/interfaces/fs_.BigIntStats.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `PathLike` |
| `options` | [`StatOptions`](https://oven-sh.github.io/bun-types/interfaces/fs_.StatOptions.md) & { `bigint`: ``true``  } |

#### Returns

`Promise`<[`BigIntStats`](https://oven-sh.github.io/bun-types/interfaces/fs_.BigIntStats.md)\>

▸ **stat**(`path`, `options?`): `Promise`<[`Stats`](https://oven-sh.github.io/bun-types/classes/fs_.Stats.md) \| [`BigIntStats`](https://oven-sh.github.io/bun-types/interfaces/fs_.BigIntStats.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `PathLike` |
| `options?` | [`StatOptions`](https://oven-sh.github.io/bun-types/interfaces/fs_.StatOptions.md) |

#### Returns

`Promise`<[`Stats`](https://oven-sh.github.io/bun-types/classes/fs_.Stats.md) \| [`BigIntStats`](https://oven-sh.github.io/bun-types/interfaces/fs_.BigIntStats.md)\>

▸ **stat**(`path`, `options?`): `Promise`<[`Stats`](https://oven-sh.github.io/bun-types/classes/fs_.Stats.md)\>

**`Since`**

v0.0.67

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `PathLike` |
| `options?` | [`StatOptions`](https://oven-sh.github.io/bun-types/interfaces/fs_.StatOptions.md) & { `bigint?`: ``false``  } |

#### Returns

`Promise`<[`Stats`](https://oven-sh.github.io/bun-types/classes/fs_.Stats.md)\>

Fulfills with the {fs.Stats} object for the given `path`.

▸ **stat**(`path`, `options`): `Promise`<[`BigIntStats`](https://oven-sh.github.io/bun-types/interfaces/fs_.BigIntStats.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `PathLike` |
| `options` | [`StatOptions`](https://oven-sh.github.io/bun-types/interfaces/fs_.StatOptions.md) & { `bigint`: ``true``  } |

#### Returns

`Promise`<[`BigIntStats`](https://oven-sh.github.io/bun-types/interfaces/fs_.BigIntStats.md)\>

▸ **stat**(`path`, `options?`): `Promise`<[`Stats`](https://oven-sh.github.io/bun-types/classes/fs_.Stats.md) \| [`BigIntStats`](https://oven-sh.github.io/bun-types/interfaces/fs_.BigIntStats.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `PathLike` |
| `options?` | [`StatOptions`](https://oven-sh.github.io/bun-types/interfaces/fs_.StatOptions.md) |

#### Returns

`Promise`<[`Stats`](https://oven-sh.github.io/bun-types/classes/fs_.Stats.md) \| [`BigIntStats`](https://oven-sh.github.io/bun-types/interfaces/fs_.BigIntStats.md)\>

___

### symlink

▸ **symlink**(`target`, `path`, `type?`): `Promise`<`void`\>

Creates a symbolic link.

The `type` argument is only used on Windows platforms and can be one of `"dir"`,`"file"`, or `"junction"`. Windows junction points require the destination path
to be absolute. When using `"junction"`, the `target` argument will
automatically be normalized to absolute path.

**`Since`**

v0.0.67

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `PathLike` |
| `path` | `PathLike` |
| `type?` | [`SimlinkType`](https://oven-sh.github.io/bun-types/modules/fs_.md#simlinktype) |

#### Returns

`Promise`<`void`\>

Fulfills with `undefined` upon success.

▸ **symlink**(`target`, `path`, `type?`): `Promise`<`void`\>

Creates a symbolic link.

The `type` argument is only used on Windows platforms and can be one of `"dir"`,`"file"`, or `"junction"`. Windows junction points require the destination path
to be absolute. When using `"junction"`, the `target` argument will
automatically be normalized to absolute path.

**`Since`**

v0.0.67

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `PathLike` |
| `path` | `PathLike` |
| `type?` | [`SimlinkType`](https://oven-sh.github.io/bun-types/modules/fs_.md#simlinktype) |

#### Returns

`Promise`<`void`\>

Fulfills with `undefined` upon success.

___

### truncate

▸ **truncate**(`path`, `len?`): `Promise`<`void`\>

Truncates (shortens or extends the length) of the content at `path` to `len`bytes.

**`Since`**

v0.0.67

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `PathLike` |
| `len?` | `number` |

#### Returns

`Promise`<`void`\>

Fulfills with `undefined` upon success.

▸ **truncate**(`path`, `len?`): `Promise`<`void`\>

Truncates (shortens or extends the length) of the content at `path` to `len`bytes.

**`Since`**

v0.0.67

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `PathLike` |
| `len?` | `number` |

#### Returns

`Promise`<`void`\>

Fulfills with `undefined` upon success.

___

### unlink

▸ **unlink**(`path`): `Promise`<`void`\>

If `path` refers to a symbolic link, then the link is removed without affecting
the file or directory to which that link refers. If the `path` refers to a file
path that is not a symbolic link, the file is deleted. See the POSIX [`unlink(2)`](http://man7.org/linux/man-pages/man2/unlink.2.html) documentation for more detail.

**`Since`**

v0.0.67

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `PathLike` |

#### Returns

`Promise`<`void`\>

Fulfills with `undefined` upon success.

▸ **unlink**(`path`): `Promise`<`void`\>

If `path` refers to a symbolic link, then the link is removed without affecting
the file or directory to which that link refers. If the `path` refers to a file
path that is not a symbolic link, the file is deleted. See the POSIX [`unlink(2)`](http://man7.org/linux/man-pages/man2/unlink.2.html) documentation for more detail.

**`Since`**

v0.0.67

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `PathLike` |

#### Returns

`Promise`<`void`\>

Fulfills with `undefined` upon success.

___

### utimes

▸ **utimes**(`path`, `atime`, `mtime`): `Promise`<`void`\>

Change the file system timestamps of the object referenced by `path`.

The `atime` and `mtime` arguments follow these rules:

* Values can be either numbers representing Unix epoch time, `Date`s, or a
numeric string like `"123456789.0"`.
* If the value can not be converted to a number, or is `NaN`, `Infinity` or`-Infinity`, an `Error` will be thrown.

**`Since`**

v0.0.67

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `PathLike` |
| `atime` | `TimeLike` |
| `mtime` | `TimeLike` |

#### Returns

`Promise`<`void`\>

Fulfills with `undefined` upon success.

▸ **utimes**(`path`, `atime`, `mtime`): `Promise`<`void`\>

Change the file system timestamps of the object referenced by `path`.

The `atime` and `mtime` arguments follow these rules:

* Values can be either numbers representing Unix epoch time, `Date`s, or a
numeric string like `"123456789.0"`.
* If the value can not be converted to a number, or is `NaN`, `Infinity` or`-Infinity`, an `Error` will be thrown.

**`Since`**

v0.0.67

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `PathLike` |
| `atime` | `TimeLike` |
| `mtime` | `TimeLike` |

#### Returns

`Promise`<`void`\>

Fulfills with `undefined` upon success.

___

### writeFile

▸ **writeFile**(`file`, `data`, `options?`): `Promise`<`void`\>

Asynchronously writes data to a file, replacing the file if it already exists.`data` can be a string, a buffer, an
[AsyncIterable](https://tc39.github.io/ecma262/#sec-asynciterable-interface) or
[Iterable](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols#The_iterable_protocol) object.

The `encoding` option is ignored if `data` is a buffer.

If `options` is a string, then it specifies the encoding.

The `mode` option only affects the newly created file. See `fs.open()` for more details.

Any specified `FileHandle` has to support writing.

It is unsafe to use `fsPromises.writeFile()` multiple times on the same file
without waiting for the promise to be settled.

Similarly to `fsPromises.readFile` \- `fsPromises.writeFile` is a convenience
method that performs multiple `write` calls internally to write the buffer
passed to it. For performance sensitive code consider using `fs.createWriteStream()` or `filehandle.createWriteStream()`.

It is possible to use an `AbortSignal` to cancel an `fsPromises.writeFile()`.
Cancelation is "best effort", and some amount of data is likely still
to be written.

```js
import { writeFile } from "fs/promises";
import { Buffer } from "buffer";

try {
  const controller = new AbortController();
  const { signal } = controller;
  const data = new Uint8Array(Buffer.from("Hello Node.js"));
  const promise = writeFile("message.txt", data, { signal });

  // Abort the request before the promise settles.
  controller.abort();

  await promise;
} catch (err) {
  // When a request is aborted - err is an AbortError
  console.error(err);
}
```

Aborting an ongoing request does not abort individual operating
system requests but rather the internal buffering `fs.writeFile` performs.

**`Since`**

v0.0.67

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `file` | `PathOrFileDescriptor` | filename or `FileHandle` |
| `data` | `string` \| `ArrayBufferLike` \| `ArrayBufferView` | - |
| `options?` | [`WriteFileOptions`](https://oven-sh.github.io/bun-types/modules/fs_.md#writefileoptions) | - |

#### Returns

`Promise`<`void`\>

Fulfills with `undefined` upon success.

▸ **writeFile**(`file`, `data`, `options?`): `Promise`<`void`\>

Asynchronously writes data to a file, replacing the file if it already exists.`data` can be a string, a buffer, an
[AsyncIterable](https://tc39.github.io/ecma262/#sec-asynciterable-interface) or
[Iterable](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols#The_iterable_protocol) object.

The `encoding` option is ignored if `data` is a buffer.

If `options` is a string, then it specifies the encoding.

The `mode` option only affects the newly created file. See `fs.open()` for more details.

Any specified `FileHandle` has to support writing.

It is unsafe to use `fsPromises.writeFile()` multiple times on the same file
without waiting for the promise to be settled.

Similarly to `fsPromises.readFile` \- `fsPromises.writeFile` is a convenience
method that performs multiple `write` calls internally to write the buffer
passed to it. For performance sensitive code consider using `fs.createWriteStream()` or `filehandle.createWriteStream()`.

It is possible to use an `AbortSignal` to cancel an `fsPromises.writeFile()`.
Cancelation is "best effort", and some amount of data is likely still
to be written.

```js
import { writeFile } from "fs/promises";
import { Buffer } from "buffer";

try {
  const controller = new AbortController();
  const { signal } = controller;
  const data = new Uint8Array(Buffer.from("Hello Node.js"));
  const promise = writeFile("message.txt", data, { signal });

  // Abort the request before the promise settles.
  controller.abort();

  await promise;
} catch (err) {
  // When a request is aborted - err is an AbortError
  console.error(err);
}
```

Aborting an ongoing request does not abort individual operating
system requests but rather the internal buffering `fs.writeFile` performs.

**`Since`**

v0.0.67

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `file` | `PathOrFileDescriptor` | filename or `FileHandle` |
| `data` | `string` \| `ArrayBufferLike` \| `ArrayBufferView` | - |
| `options?` | [`WriteFileOptions`](https://oven-sh.github.io/bun-types/modules/fs_.md#writefileoptions) | - |

#### Returns

`Promise`<`void`\>

Fulfills with `undefined` upon success.
