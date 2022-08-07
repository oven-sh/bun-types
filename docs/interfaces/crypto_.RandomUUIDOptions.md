[bun-types](https://github.com/oven-sh/bun-types/blob/master/api-docs/README.md) / [Exports](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules.md) / ["crypto"](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/crypto_.md) / RandomUUIDOptions

# Interface: RandomUUIDOptions

["crypto"](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/crypto_.md).RandomUUIDOptions

## Table of contents

### Properties

- [disableEntropyCache](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.RandomUUIDOptions.md#disableentropycache)

## Properties

### disableEntropyCache

• `Optional` **disableEntropyCache**: `boolean`

By default, to improve performance,
Node.js will pre-emptively generate and persistently cache enough
random data to generate up to 128 random UUIDs. To generate a UUID
without using the cache, set `disableEntropyCache` to `true`.

**`Default`**

`false`
