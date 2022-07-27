[bun-types](https://github.com/oven-sh/bun-types/blob/master/api-docs/README.md) / [Exports](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules.md) / ["node:crypto"](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/node_crypto_.md) / CheckPrimeOptions

# Interface: CheckPrimeOptions

["node:crypto"](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/node_crypto_.md).CheckPrimeOptions

## Table of contents

### Properties

- [checks](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/node_crypto_.CheckPrimeOptions.md#checks)

## Properties

### checks

• `Optional` **checks**: `number`

The number of Miller-Rabin probabilistic primality iterations to perform.
When the value is 0 (zero), a number of checks is used that yields a false positive rate of at most 2-64 for random input.
Care must be used when selecting a number of checks.
Refer to the OpenSSL documentation for the BN_is_prime_ex function nchecks options for more details.

**`Default`**

0
