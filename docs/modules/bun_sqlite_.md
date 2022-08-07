[bun-types](https://github.com/oven-sh/bun-types/blob/master/api-docs/README.md) / [Exports](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules.md) / "bun:sqlite"

# Namespace: "bun:sqlite"

Fast SQLite3 driver for Bun.js

**`Since`**

v0.0.83

**`Example`**

```ts
import { Database } from 'bun:sqlite';

var db = new Database('app.db');
db.query('SELECT * FROM users WHERE name = ?').all('John');
// => [{ id: 1, name: 'John' }]
```

The following types can be used when binding parameters:

| JavaScript type | SQLite type |
| -------------- | ----------- |
| `string` | `TEXT` |
| `number` | `INTEGER` or `DECIMAL` |
| `boolean` | `INTEGER` (1 or 0) |
| `Uint8Array` | `BLOB` |
| `Buffer` | `BLOB` |
| `bigint` | `INTEGER` |
| `null` | `NULL` |

## Table of contents

### References

- [default](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/bun_sqlite_.md#default)

### Classes

- [Database](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/bun_sqlite_.Database.md)
- [Statement](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/bun_sqlite_.Statement.md)

### Type Aliases

- [SQLQueryBindings](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/bun_sqlite_.md#sqlquerybindings)

### Variables

- [constants](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/bun_sqlite_.md#constants)
- [native](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/bun_sqlite_.md#native)

## References

### default

Renames and re-exports [Database](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/bun_sqlite_.Database.md)

## Type Aliases

### SQLQueryBindings

Ƭ **SQLQueryBindings**: `string` \| `bigint` \| `TypedArray` \| `number` \| `boolean` \| ``null`` \| `Record`<`string`, `string` \| `bigint` \| `TypedArray` \| `number` \| `boolean` \| ``null``\>

## Variables

### constants

• `Const` **constants**: `Object`

Constants from `sqlite3.h`

This list isn't exhaustive, but some of the ones which are relevant

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `SQLITE_OPEN_AUTOPROXY` | `number` | **`Value`**  0x00000020 |
| `SQLITE_OPEN_CREATE` | `number` | Allow creating a new database  **`Value`**  0x00000004 |
| `SQLITE_OPEN_DELETEONCLOSE` | `number` | **`Value`**  0x00000008 |
| `SQLITE_OPEN_EXCLUSIVE` | `number` | **`Value`**  0x00000010 |
| `SQLITE_OPEN_EXRESCODE` | `number` | **`Value`**  0x02000000 |
| `SQLITE_OPEN_FULLMUTEX` | `number` | **`Value`**  0x00010000 |
| `SQLITE_OPEN_MAIN_DB` | `number` | **`Value`**  0x00000100 |
| `SQLITE_OPEN_MAIN_JOURNAL` | `number` | **`Value`**  0x00000800 |
| `SQLITE_OPEN_MEMORY` | `number` | **`Value`**  0x00000080 |
| `SQLITE_OPEN_NOFOLLOW` | `number` | **`Value`**  0x01000000 |
| `SQLITE_OPEN_NOMUTEX` | `number` | **`Value`**  0x00008000 |
| `SQLITE_OPEN_PRIVATECACHE` | `number` | **`Value`**  0x00040000 |
| `SQLITE_OPEN_READONLY` | `number` | Open the database as read-only (no write operations, no create).  **`Value`**  0x00000001 |
| `SQLITE_OPEN_READWRITE` | `number` | Open the database for reading and writing  **`Value`**  0x00000002 |
| `SQLITE_OPEN_SHAREDCACHE` | `number` | **`Value`**  0x00020000 |
| `SQLITE_OPEN_SUBJOURNAL` | `number` | **`Value`**  0x00002000 |
| `SQLITE_OPEN_SUPER_JOURNAL` | `number` | **`Value`**  0x00004000 |
| `SQLITE_OPEN_TEMP_DB` | `number` | **`Value`**  0x00000200 |
| `SQLITE_OPEN_TEMP_JOURNAL` | `number` | **`Value`**  0x00001000 |
| `SQLITE_OPEN_TRANSIENT_DB` | `number` | **`Value`**  0x00000400 |
| `SQLITE_OPEN_URI` | `number` | **`Value`**  0x00000040 |
| `SQLITE_OPEN_WAL` | `number` | **`Value`**  0x00080000 |
| `SQLITE_PREPARE_NORMALIZE` | `number` | **`Value`**  0x02 |
| `SQLITE_PREPARE_NO_VTAB` | `number` | **`Value`**  0x04 |
| `SQLITE_PREPARE_PERSISTENT` | `number` | **`Value`**  0x01 |

___

### native

• **native**: `any`

The native module implementing the sqlite3 C bindings

It is lazily-initialized, so this will return `undefined` until the first
call to new Database().

The native module makes no gurantees about ABI stability, so it is left
untyped

If you need to use it directly for some reason, please let us know because
that probably points to a deficiency in this API.
