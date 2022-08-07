[bun-types](https://oven-sh.github.io/bun-types/README.md) / [Exports](https://oven-sh.github.io/bun-types/modules.md) / ["bun:sqlite"](https://oven-sh.github.io/bun-types/modules/bun_sqlite_.md) / Database

# Class: Database

["bun:sqlite"](https://oven-sh.github.io/bun-types/modules/bun_sqlite_.md).Database

## Table of contents

### Constructors

- [constructor](https://oven-sh.github.io/bun-types/classes/bun_sqlite_.Database.md#constructor)

### Properties

- [filename](https://oven-sh.github.io/bun-types/classes/bun_sqlite_.Database.md#filename)
- [handle](https://oven-sh.github.io/bun-types/classes/bun_sqlite_.Database.md#handle)

### Accessors

- [inTransaction](https://oven-sh.github.io/bun-types/classes/bun_sqlite_.Database.md#intransaction)

### Methods

- [close](https://oven-sh.github.io/bun-types/classes/bun_sqlite_.Database.md#close)
- [exec](https://oven-sh.github.io/bun-types/classes/bun_sqlite_.Database.md#exec)
- [loadExtension](https://oven-sh.github.io/bun-types/classes/bun_sqlite_.Database.md#loadextension)
- [prepare](https://oven-sh.github.io/bun-types/classes/bun_sqlite_.Database.md#prepare)
- [query](https://oven-sh.github.io/bun-types/classes/bun_sqlite_.Database.md#query)
- [run](https://oven-sh.github.io/bun-types/classes/bun_sqlite_.Database.md#run)
- [transaction](https://oven-sh.github.io/bun-types/classes/bun_sqlite_.Database.md#transaction)
- [open](https://oven-sh.github.io/bun-types/classes/bun_sqlite_.Database.md#open)
- [setCustomSQLite](https://oven-sh.github.io/bun-types/classes/bun_sqlite_.Database.md#setcustomsqlite)

## Constructors

### constructor

• **new Database**(`filename?`, `options?`)

Open or create a SQLite3 database

**`Example`**

```ts
const db = new Database("mydb.sqlite");
db.run("CREATE TABLE foo (bar TEXT)");
db.run("INSERT INTO foo VALUES (?)", "baz");
console.log(db.query("SELECT * FROM foo").all());
```

**`Example`**

Open an in-memory database

```ts
const db = new Database(":memory:");
db.run("CREATE TABLE foo (bar TEXT)");
db.run("INSERT INTO foo VALUES (?)", "hiiiiii");
console.log(db.query("SELECT * FROM foo").all());
```

**`Example`**

Open read-only

```ts
const db = new Database("mydb.sqlite", {readonly: true});
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `filename?` | `string` | The filename of the database to open. Pass an empty string (`""`) or `":memory:"` or undefined for an in-memory database. |
| `options?` | `number` \| { `create?`: `boolean` ; `readonly?`: `boolean` ; `readwrite?`: `boolean`  } | defaults to `{readwrite: true, create: true}`. If a number, then it's treated as `SQLITE_OPEN_*` constant flags. |

## Properties

### filename

• `Readonly` **filename**: `string`

The filename passed when `new Database()` was called

**`Example`**

```ts
const db = new Database("mydb.sqlite");
console.log(db.filename);
// => "mydb.sqlite"
```

___

### handle

• `Readonly` **handle**: `number`

The underlying `sqlite3` database handle

In native code, this is not a file descriptor, but an index into an array of database handles

## Accessors

### inTransaction

• `get` **inTransaction**(): `boolean`

Is the database in a transaction?

**`Example`**

```ts
db.run("CREATE TABLE foo (bar TEXT)");
db.run("INSERT INTO foo VALUES (?)", "baz");
db.run("BEGIN");
db.run("INSERT INTO foo VALUES (?)", "qux");
console.log(db.inTransaction());
```

#### Returns

`boolean`

`true` if the database is in a transaction, `false` otherwise

## Methods

### close

▸ **close**(): `void`

Close the database connection.

It is safe to call this method multiple times. If the database is already
closed, this is a no-op. Running queries after the database has been
closed will throw an error.

**`Example`**

```ts
db.close();
```
This is called automatically when the database instance is garbage collected.

Internally, this calls `sqlite3_close_v2`.

#### Returns

`void`

___

### exec

▸ **exec**<`ParamsType`\>(`sqlQuery`, ...`bindings`): `void`

This is an alias of Database.prototype.run

#### Type parameters

| Name | Type |
| :------ | :------ |
| `ParamsType` | [`SQLQueryBindings`](https://oven-sh.github.io/bun-types/modules/bun_sqlite_.md#sqlquerybindings) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `sqlQuery` | `string` |
| `...bindings` | `ParamsType`[] |

#### Returns

`void`

___

### loadExtension

▸ **loadExtension**(`extension`, `entryPoint?`): `void`

Load a SQLite3 extension

macOS requires a custom SQLite3 library to be linked because the Apple build of SQLite for macOS disables loading extensions. See [setCustomSQLite](https://oven-sh.github.io/bun-types/classes/bun_sqlite_.Database.md#setcustomsqlite)

Bun chooses the Apple build of SQLite on macOS because it brings a ~50% performance improvement.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `extension` | `string` | name/path of the extension to load |
| `entryPoint?` | `string` | optional entry point of the extension |

#### Returns

`void`

___

### prepare

▸ **prepare**<`ParamsType`, `ReturnType`\>(`sql`, ...`params`): [`Statement`](https://oven-sh.github.io/bun-types/classes/bun_sqlite_.Statement.md)<`ParamsType`, `ReturnType`\>

Compile a SQL query and return a [Statement](https://oven-sh.github.io/bun-types/classes/bun_sqlite_.Statement.md) object.

This does not cache the compiled query and does not execute the query.

**`Example`**

```ts
// compile the query
const stmt = db.query("SELECT * FROM foo WHERE bar = ?");
// run the query
stmt.all("baz");
```

#### Type parameters

| Name | Type |
| :------ | :------ |
| `ParamsType` | [`SQLQueryBindings`](https://oven-sh.github.io/bun-types/modules/bun_sqlite_.md#sqlquerybindings) |
| `ReturnType` | `any` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `sql` | `string` | The SQL query to compile |
| `...params` | `ParamsType`[] | Optional bindings for the query |

#### Returns

[`Statement`](https://oven-sh.github.io/bun-types/classes/bun_sqlite_.Statement.md)<`ParamsType`, `ReturnType`\>

`Statment` instance

Under the hood, this calls `sqlite3_prepare_v3`.

___

### query

▸ **query**<`ParamsType`, `ReturnType`\>(`sqlQuery`): [`Statement`](https://oven-sh.github.io/bun-types/classes/bun_sqlite_.Statement.md)<`ParamsType`, `ReturnType`\>

Compile a SQL query and return a [Statement](https://oven-sh.github.io/bun-types/classes/bun_sqlite_.Statement.md) object. This is the
same as [prepare](https://oven-sh.github.io/bun-types/classes/bun_sqlite_.Database.md#prepare) except that it caches the compiled query.

This **does not execute** the query, but instead prepares it for later
execution and caches the compiled query if possible.

**`Example`**

```ts
// compile the query
const stmt = db.query("SELECT * FROM foo WHERE bar = ?");
// run the query
stmt.all("baz");

// run the query again
stmt.all();
```

#### Type parameters

| Name | Type |
| :------ | :------ |
| `ParamsType` | [`SQLQueryBindings`](https://oven-sh.github.io/bun-types/modules/bun_sqlite_.md#sqlquerybindings) |
| `ReturnType` | `any` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `sqlQuery` | `string` |

#### Returns

[`Statement`](https://oven-sh.github.io/bun-types/classes/bun_sqlite_.Statement.md)<`ParamsType`, `ReturnType`\>

`Statment` instance

Under the hood, this calls `sqlite3_prepare_v3`.

___

### run

▸ **run**<`ParamsType`\>(`sqlQuery`, ...`bindings`): `void`

Execute a SQL query **without returning any results**.

This does not cache the query, so if you want to run a query multiple times, you should use [prepare](https://oven-sh.github.io/bun-types/classes/bun_sqlite_.Database.md#prepare) instead.

**`Example`**

```ts
db.run("CREATE TABLE foo (bar TEXT)");
db.run("INSERT INTO foo VALUES (?)", "baz");
```

Useful for queries like:
- `CREATE TABLE`
- `INSERT INTO`
- `UPDATE`
- `DELETE FROM`
- `DROP TABLE`
- `PRAGMA`
- `ATTACH DATABASE`
- `DETACH DATABASE`
- `REINDEX`
- `VACUUM`
- `EXPLAIN ANALYZE`
- `CREATE INDEX`
- `CREATE TRIGGER`
- `CREATE VIEW`
- `CREATE VIRTUAL TABLE`
- `CREATE TEMPORARY TABLE`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `ParamsType` | [`SQLQueryBindings`](https://oven-sh.github.io/bun-types/modules/bun_sqlite_.md#sqlquerybindings) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `sqlQuery` | `string` | - |
| `...bindings` | `ParamsType`[] | Optional bindings for the query |

#### Returns

`void`

`Database` instance

Under the hood, this calls `sqlite3_prepare_v3` followed by `sqlite3_step` and `sqlite3_finalize`.

 * The following types can be used when binding parameters:

| JavaScript type | SQLite type |
| -------------- | ----------- |
| `string` | `TEXT` |
| `number` | `INTEGER` or `DECIMAL` |
| `boolean` | `INTEGER` (1 or 0) |
| `Uint8Array` | `BLOB` |
| `Buffer` | `BLOB` |
| `bigint` | `INTEGER` |
| `null` | `NULL` |

___

### transaction

▸ **transaction**(`insideTransaction`): `CallableFunction` & { `deferred`: (...`args`: `any`) => `void` ; `exclusive`: (...`args`: `any`) => `void` ; `immediate`: (...`args`: `any`) => `void`  }

Creates a function that always runs inside a transaction. When the
function is invoked, it will begin a new transaction. When the function
returns, the transaction will be committed. If an exception is thrown,
the transaction will be rolled back (and the exception will propagate as
usual).

**`Example`**

```ts
// setup
import { Database } from "bun:sqlite";
const db = Database.open(":memory:");
db.exec(
  "CREATE TABLE cats (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT UNIQUE, age INTEGER)"
);

const insert = db.prepare("INSERT INTO cats (name, age) VALUES ($name, $age)");
const insertMany = db.transaction((cats) => {
  for (const cat of cats) insert.run(cat);
});

insertMany([
  { $name: "Joey", $age: 2 },
  { $name: "Sally", $age: 4 },
  { $name: "Junior", $age: 1 },
]);
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `insideTransaction` | (...`args`: `any`) => `void` | The callback which runs inside a transaction |

#### Returns

`CallableFunction` & { `deferred`: (...`args`: `any`) => `void` ; `exclusive`: (...`args`: `any`) => `void` ; `immediate`: (...`args`: `any`) => `void`  }

___

### open

▸ `Static` **open**(`filename`, `options?`): [`Database`](https://oven-sh.github.io/bun-types/classes/bun_sqlite_.Database.md)

This is an alias of `new Database()`

See [Database](https://oven-sh.github.io/bun-types/classes/bun_sqlite_.Database.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `filename` | `string` |
| `options?` | `number` \| { `create?`: `boolean` ; `readonly?`: `boolean` ; `readwrite?`: `boolean`  } |

#### Returns

[`Database`](https://oven-sh.github.io/bun-types/classes/bun_sqlite_.Database.md)

___

### setCustomSQLite

▸ `Static` **setCustomSQLite**(`path`): `boolean`

Change the dynamic library path to SQLite

**`Note`**

macOS-only

This only works before SQLite is loaded, so
that's before you call `new Database()`.

It can only be run once because this will load
the SQLite library into the process.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `path` | `string` | The path to the SQLite library |

#### Returns

`boolean`
