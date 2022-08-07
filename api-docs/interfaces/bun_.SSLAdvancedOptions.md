[bun-types](https://github.com/oven-sh/bun-types/blob/master/api-docs/README.md) / [Exports](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules.md) / ["bun"](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/bun_.md) / SSLAdvancedOptions

# Interface: SSLAdvancedOptions

["bun"](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/bun_.md).SSLAdvancedOptions

## Table of contents

### Properties

- [caFile](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/bun_.SSLAdvancedOptions.md#cafile)
- [dhParamsFile](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/bun_.SSLAdvancedOptions.md#dhparamsfile)
- [lowMemoryMode](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/bun_.SSLAdvancedOptions.md#lowmemorymode)
- [passphrase](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/bun_.SSLAdvancedOptions.md#passphrase)

## Properties

### caFile

• `Optional` **caFile**: `string`

___

### dhParamsFile

• `Optional` **dhParamsFile**: `string`

___

### lowMemoryMode

• `Optional` **lowMemoryMode**: `boolean`

This sets `OPENSSL_RELEASE_BUFFERS` to 1.
It reduces overall performance but saves some memory.

**`Default`**

false

___

### passphrase

• `Optional` **passphrase**: `string`
