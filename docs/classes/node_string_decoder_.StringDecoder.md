[bun-types](https://oven-sh.github.io/bun-types/README.md) / [Exports](https://oven-sh.github.io/bun-types/modules.md) / ["node:string\_decoder"](https://oven-sh.github.io/bun-types/modules/node_string_decoder_.md) / StringDecoder

# Class: StringDecoder

["node:string_decoder"](https://oven-sh.github.io/bun-types/modules/node_string_decoder_.md).StringDecoder

## Table of contents

### Constructors

- [constructor](https://oven-sh.github.io/bun-types/classes/node_string_decoder_.StringDecoder.md#constructor)

### Methods

- [end](https://oven-sh.github.io/bun-types/classes/node_string_decoder_.StringDecoder.md#end)
- [write](https://oven-sh.github.io/bun-types/classes/node_string_decoder_.StringDecoder.md#write)

## Constructors

### constructor

• **new StringDecoder**(`encoding?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `encoding?` | `BufferEncoding` |

## Methods

### end

▸ **end**(`buffer?`): `string`

Returns any remaining input stored in the internal buffer as a string. Bytes
representing incomplete UTF-8 and UTF-16 characters will be replaced with
substitution characters appropriate for the character encoding.

If the `buffer` argument is provided, one final call to `stringDecoder.write()`is performed before returning the remaining input.
After `end()` is called, the `stringDecoder` object can be reused for new input.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `buffer?` | [`Buffer`](https://oven-sh.github.io/bun-types/modules/buffer_.md#buffer) | A `Buffer`, or `TypedArray`, or `DataView` containing the bytes to decode. |

#### Returns

`string`

___

### write

▸ **write**(`buffer`): `string`

Returns a decoded string, ensuring that any incomplete multibyte characters at
the end of the `Buffer`, or `TypedArray`, or `DataView` are omitted from the
returned string and stored in an internal buffer for the next call to`stringDecoder.write()` or `stringDecoder.end()`.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `buffer` | [`Buffer`](https://oven-sh.github.io/bun-types/modules/buffer_.md#buffer) | A `Buffer`, or `TypedArray`, or `DataView` containing the bytes to decode. |

#### Returns

`string`
