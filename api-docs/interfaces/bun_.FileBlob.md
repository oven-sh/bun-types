[bun-types](https://github.com/oven-sh/bun-types/blob/master/api-docs/README.md) / [Exports](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules.md) / ["bun"](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/bun_.md) / FileBlob

# Interface: FileBlob

["bun"](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/bun_.md).FileBlob

[`Blob`](https://developer.mozilla.org/en-US/docs/Web/API/Blob) powered by the fastest system calls available for operating on files.

This Blob is lazy. That means it won't do any work until you read from it.

- `size` will not be valid until the contents of the file are read at least once.
- `type` is auto-set based on the file extension when possible

**`Example`**

```js
const file = Bun.file("./hello.json");
console.log(file.type); // "application/json"
console.log(await file.text()); // '{"hello":"world"}'
```

**`Example`**

```js
await Bun.write(
  Bun.file("./hello.txt"),
  "Hello, world!"
);
```

## Hierarchy

- `Blob`

  ↳ **`FileBlob`**

## Table of contents

### Properties

- [size](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/bun_.FileBlob.md#size)
- [type](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/bun_.FileBlob.md#type)

### Methods

- [arrayBuffer](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/bun_.FileBlob.md#arraybuffer)
- [json](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/bun_.FileBlob.md#json)
- [slice](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/bun_.FileBlob.md#slice)
- [stream](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/bun_.FileBlob.md#stream)
- [text](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/bun_.FileBlob.md#text)

## Properties

### size

• **size**: `number`

#### Inherited from

Blob.size

___

### type

• **type**: `string`

#### Inherited from

Blob.type

## Methods

### arrayBuffer

▸ **arrayBuffer**(): `Promise`<`ArrayBuffer`\>

Read the data from the blob as an ArrayBuffer.

This copies the data into a new ArrayBuffer.

#### Returns

`Promise`<`ArrayBuffer`\>

#### Inherited from

Blob.arrayBuffer

▸ **arrayBuffer**(): `Promise`<`ArrayBuffer`\>

Read the [`Blob`](https://developer.mozilla.org/en-US/docs/Web/API/Blob) as an ArrayBuffer object

**`Link`**

https://developer.mozilla.org/en-US/docs/Web/API/Blob/arrayBuffer

#### Returns

`Promise`<`ArrayBuffer`\>

#### Inherited from

Blob.arrayBuffer

___

### json

▸ **json**<`TJSONReturnType`\>(): `Promise`<`TJSONReturnType`\>

Read the data from the blob as a JSON object.

This first decodes the data from UTF-8, then parses it as JSON.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TJSONReturnType` | `unknown` |

#### Returns

`Promise`<`TJSONReturnType`\>

#### Inherited from

Blob.json

▸ **json**(): `Promise`<`any`\>

Read the contents of the [`Blob`](https://developer.mozilla.org/en-US/docs/Web/API/Blob) as a JSON object

**`Warn`**

in browsers, this function is only available for `Response` and `Request`

#### Returns

`Promise`<`any`\>

#### Inherited from

Blob.json

___

### slice

▸ **slice**(`begin?`, `end?`): [`FileBlob`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/bun_.FileBlob.md)

Offset any operation on the file starting at `begin` and ending at `end`. `end` is relative to 0

Similar to [`TypedArray.subarray`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/subarray). Does not copy the file, open the file, or modify the file.

If `begin` > 0, Bun.write() will be slower on macOS

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `begin?` | `number` | start offset in bytes |
| `end?` | `number` | absolute offset in bytes (relative to 0) |

#### Returns

[`FileBlob`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/bun_.FileBlob.md)

#### Inherited from

Blob.slice

▸ **slice**(`begin?`, `end?`): [`FileBlob`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/bun_.FileBlob.md)

Offset any operation on the file starting at `begin` and ending at `end`. `end` is relative to 0

Similar to [`TypedArray.subarray`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/subarray). Does not copy the file, open the file, or modify the file.

If `begin` > 0, Bun.write() will be slower on macOS

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `begin?` | `number` | start offset in bytes |
| `end?` | `number` | absolute offset in bytes (relative to 0) |

#### Returns

[`FileBlob`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/bun_.FileBlob.md)

#### Inherited from

Blob.slice

___

### stream

▸ **stream**(): [`ReadableStream`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules.md#readablestream)<`Uint8Array`\>

Read the data from the blob as a ReadableStream.

#### Returns

[`ReadableStream`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules.md#readablestream)<`Uint8Array`\>

#### Inherited from

Blob.stream

___

### text

▸ **text**(): `Promise`<`string`\>

Read the data from the blob as a string. It will be decoded from UTF-8.

#### Returns

`Promise`<`string`\>

#### Inherited from

Blob.text

▸ **text**(): `Promise`<`string`\>

Read the [`Blob`](https://developer.mozilla.org/en-US/docs/Web/API/Blob) as a UTF-8 string

**`Link`**

https://developer.mozilla.org/en-US/docs/Web/API/Blob/text

#### Returns

`Promise`<`string`\>

#### Inherited from

Blob.text
