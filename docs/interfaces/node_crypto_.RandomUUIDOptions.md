[bun-types](https://oven-sh.github.io/bun-types/README.md) / [Exports](https://oven-sh.github.io/bun-types/modules.md) / ["node:crypto"](https://oven-sh.github.io/bun-types/modules/node_crypto_.md) / RandomUUIDOptions

# Interface: RandomUUIDOptions

["node:crypto"](https://oven-sh.github.io/bun-types/modules/node_crypto_.md).RandomUUIDOptions

## Table of contents

### Properties

- [disableEntropyCache](https://oven-sh.github.io/bun-types/interfaces/node_crypto_.RandomUUIDOptions.md#disableentropycache)

## Properties

### disableEntropyCache

• `Optional` **disableEntropyCache**: `boolean`

By default, to improve performance,
Node.js will pre-emptively generate and persistently cache enough
random data to generate up to 128 random UUIDs. To generate a UUID
without using the cache, set `disableEntropyCache` to `true`.

**`Default`**

`false`
