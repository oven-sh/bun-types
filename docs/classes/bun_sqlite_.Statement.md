[bun-types](https://oven-sh.github.io/bun-types/README.md) / [Exports](https://oven-sh.github.io/bun-types/modules.md) / ["bun:sqlite"](https://oven-sh.github.io/bun-types/modules/bun_sqlite_.md) / Statement

# Class: Statement<ParamsType, ReturnType\>

["bun:sqlite"](https://oven-sh.github.io/bun-types/modules/bun_sqlite_.md).Statement

A prepared statement.

This is returned by [prepare](https://oven-sh.github.io/bun-types/classes/bun_sqlite_.Database.md#prepare) and [query](https://oven-sh.github.io/bun-types/classes/bun_sqlite_.Database.md#query).

**`Example`**

```ts
const stmt = db.prepare("SELECT * FROM foo WHERE bar = ?");
stmt.all("baz");
// => [{bar: "baz"}]
```

**`Example`**

```ts
const stmt = db.prepare("SELECT * FROM foo WHERE bar = ?");
stmt.get("baz");
// => {bar: "baz"}
```

**`Example`**

```ts
const stmt = db.prepare("SELECT * FROM foo WHERE bar = ?");
stmt.run("baz");
// => undefined
```

## Type parameters

| Name | Type |
| :------ | :------ |
| `ParamsType` | [`SQLQueryBindings`](https://oven-sh.github.io/bun-types/modules/bun_sqlite_.md#sqlquerybindings) |
| `ReturnType` | `any` |

## Table of contents

### Constructors

- [constructor](https://oven-sh.github.io/bun-types/classes/bun_sqlite_.Statement.md#constructor)

### Properties

- [columnNames](https://oven-sh.github.io/bun-types/classes/bun_sqlite_.Statement.md#columnnames)
- [native](https://oven-sh.github.io/bun-types/classes/bun_sqlite_.Statement.md#native)
- [paramsCount](https://oven-sh.github.io/bun-types/classes/bun_sqlite_.Statement.md#paramscount)

### Methods

- [all](https://oven-sh.github.io/bun-types/classes/bun_sqlite_.Statement.md#all)
- [finalize](https://oven-sh.github.io/bun-types/classes/bun_sqlite_.Statement.md#finalize)
- [get](https://oven-sh.github.io/bun-types/classes/bun_sqlite_.Statement.md#get)
- [run](https://oven-sh.github.io/bun-types/classes/bun_sqlite_.Statement.md#run)
- [toString](https://oven-sh.github.io/bun-types/classes/bun_sqlite_.Statement.md#tostring)
- [values](https://oven-sh.github.io/bun-types/classes/bun_sqlite_.Statement.md#values)

## Constructors

### constructor

• **new Statement**<`ParamsType`, `ReturnType`\>(`nativeHandle`)

Creates a new prepared statement from native code.

This is used internally by the [Database](https://oven-sh.github.io/bun-types/classes/bun_sqlite_.Database.md) class. Probably you don't need to call this yourself.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `ParamsType` | [`SQLQueryBindings`](https://oven-sh.github.io/bun-types/modules/bun_sqlite_.md#sqlquerybindings) |
| `ReturnType` | `any` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `nativeHandle` | `any` |

## Properties

### columnNames

• `Readonly` **columnNames**: `string`[]

The names of the columns returned by the prepared statement.

**`Example`**

```ts
const stmt = db.prepare("SELECT bar FROM foo WHERE bar = ?");

console.log(stmt.columnNames);
// => ["bar"]
```

___

### native

• `Readonly` **native**: `any`

Native object representing the underlying `sqlite3_stmt`

This is left untyped because the ABI of the native bindings may change at any time.

___

### paramsCount

• `Readonly` **paramsCount**: `number`

The number of parameters expected in the prepared statement.

**`Example`**

```ts
const stmt = db.prepare("SELECT * FROM foo WHERE bar = ?");
console.log(stmt.paramsCount);
// => 1
```

**`Example`**

```ts
const stmt = db.prepare("SELECT * FROM foo WHERE bar = ? AND baz = ?");
console.log(stmt.paramsCount);
// => 2
```

## Methods

### all

▸ **all**(...`params`): `ReturnType`[]

Execute the prepared statement and return all results as objects.

**`Example`**

```ts
const stmt = db.prepare("SELECT * FROM foo WHERE bar = ?");

stmt.all("baz");
// => [{bar: "baz"}]

stmt.all();
// => [{bar: "baz"}]

stmt.all("foo");
// => [{bar: "foo"}]
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...params` | `ParamsType`[] | optional values to bind to the statement. If omitted, the statement is run with the last bound values or no parameters if there are none. |

#### Returns

`ReturnType`[]

___

### finalize

▸ **finalize**(): `void`

Finalize the prepared statement, freeing the resources used by the
statement and preventing it from being executed again.

This is called automatically when the prepared statement is garbage collected.

It is safe to call this multiple times. Calling this on a finalized
statement has no effect.

Internally, this calls `sqlite3_finalize`.

#### Returns

`void`

___

### get

▸ **get**(...`params`): `ReturnType`

Execute the prepared statement and return **the first** result.

If no result is returned, this returns `null`.

**`Example`**

```ts
const stmt = db.prepare("SELECT * FROM foo WHERE bar = ?");

stmt.all("baz");
// => [{bar: "baz"}]

stmt.all();
// => [{bar: "baz"}]

stmt.all("foo");
// => [{bar: "foo"}]
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

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...params` | `ParamsType`[] | optional values to bind to the statement. If omitted, the statement is run with the last bound values or no parameters if there are none. |

#### Returns

`ReturnType`

___

### run

▸ **run**(...`params`): `void`

Execute the prepared statement. This returns `undefined`.

**`Example`**

```ts
const stmt = db.prepare("UPDATE foo SET bar = ?");
stmt.run("baz");
// => undefined

stmt.run();
// => undefined

stmt.run("foo");
// => undefined
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

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...params` | `ParamsType`[] | optional values to bind to the statement. If omitted, the statement is run with the last bound values or no parameters if there are none. |

#### Returns

`void`

___

### toString

▸ **toString**(): `string`

Return the expanded SQL string for the prepared statement.

Internally, this calls `sqlite3_expanded_sql()` on the underlying `sqlite3_stmt`.

**`Example`**

```ts
const stmt = db.prepare("SELECT * FROM foo WHERE bar = ?", "baz");
console.log(stmt.toString());
// => "SELECT * FROM foo WHERE bar = 'baz'"
console.log(stmt);
// => "SELECT * FROM foo WHERE bar = 'baz'"
```

#### Returns

`string`

___

### values

▸ **values**(...`params`): (`string` \| `number` \| `bigint` \| `boolean` \| `Uint8Array`)[][]

Execute the prepared statement and return the results as an array of arrays.

This is a little faster than [all](https://oven-sh.github.io/bun-types/classes/bun_sqlite_.Statement.md#all).

**`Example`**

```ts
const stmt = db.prepare("SELECT * FROM foo WHERE bar = ?");

stmt.values("baz");
// => [['baz']]

stmt.values();
// => [['baz']]

stmt.values("foo");
// => [['foo']]
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

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...params` | `ParamsType`[] | optional values to bind to the statement. If omitted, the statement is run with the last bound values or no parameters if there are none. |

#### Returns

(`string` \| `number` \| `bigint` \| `boolean` \| `Uint8Array`)[][]
