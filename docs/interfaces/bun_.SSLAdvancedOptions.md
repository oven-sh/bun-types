[bun-types](https://oven-sh.github.io/bun-types/README.md) / [Exports](https://oven-sh.github.io/bun-types/modules.md) / ["bun"](https://oven-sh.github.io/bun-types/modules/bun_.md) / SSLAdvancedOptions

# Interface: SSLAdvancedOptions

["bun"](https://oven-sh.github.io/bun-types/modules/bun_.md).SSLAdvancedOptions

## Table of contents

### Properties

- [caFile](https://oven-sh.github.io/bun-types/interfaces/bun_.SSLAdvancedOptions.md#cafile)
- [dhParamsFile](https://oven-sh.github.io/bun-types/interfaces/bun_.SSLAdvancedOptions.md#dhparamsfile)
- [lowMemoryMode](https://oven-sh.github.io/bun-types/interfaces/bun_.SSLAdvancedOptions.md#lowmemorymode)
- [passphrase](https://oven-sh.github.io/bun-types/interfaces/bun_.SSLAdvancedOptions.md#passphrase)

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
