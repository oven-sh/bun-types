[bun-types](https://oven-sh.github.io/bun-types/README.md) / [Exports](https://oven-sh.github.io/bun-types/modules.md) / ["node:crypto"](https://oven-sh.github.io/bun-types/modules/node_crypto_.md) / SecureHeapUsage

# Interface: SecureHeapUsage

["node:crypto"](https://oven-sh.github.io/bun-types/modules/node_crypto_.md).SecureHeapUsage

## Table of contents

### Properties

- [min](https://oven-sh.github.io/bun-types/interfaces/node_crypto_.SecureHeapUsage.md#min)
- [total](https://oven-sh.github.io/bun-types/interfaces/node_crypto_.SecureHeapUsage.md#total)
- [used](https://oven-sh.github.io/bun-types/interfaces/node_crypto_.SecureHeapUsage.md#used)
- [utilization](https://oven-sh.github.io/bun-types/interfaces/node_crypto_.SecureHeapUsage.md#utilization)

## Properties

### min

• **min**: `number`

The minimum allocation from the secure heap as specified using the `--secure-heap-min` command-line flag.

___

### total

• **total**: `number`

The total allocated secure heap size as specified using the `--secure-heap=n` command-line flag.

___

### used

• **used**: `number`

The total number of bytes currently allocated from the secure heap.

___

### utilization

• **utilization**: `number`

The calculated ratio of `used` to `total` allocated bytes.
