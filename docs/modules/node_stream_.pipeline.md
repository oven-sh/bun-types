[bun-types](https://oven-sh.github.io/bun-types/README.md) / [Exports](https://oven-sh.github.io/bun-types/modules.md) / ["node:stream"](https://oven-sh.github.io/bun-types/modules/node_stream_.md) / pipeline

# Namespace: pipeline

["node:stream"](https://oven-sh.github.io/bun-types/modules/node_stream_.md).pipeline

## Table of contents

### Functions

- [\_\_promisify\_\_](https://oven-sh.github.io/bun-types/modules/node_stream_.pipeline.md#__promisify__)

## Functions

### \_\_promisify\_\_

▸ **__promisify__**<`A`, `B`\>(`source`, `destination`, `options?`): [`PipelinePromise`](https://oven-sh.github.io/bun-types/modules/stream_.md#pipelinepromise)<`B`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | extends [`PipelineSource`](https://oven-sh.github.io/bun-types/modules/stream_.md#pipelinesource)<`any`\> |
| `B` | extends [`WritableStream`](https://oven-sh.github.io/bun-types/modules.md#writablestream)<`any`\> \| [`PipelineDestinationIterableFunction`](https://oven-sh.github.io/bun-types/modules/stream_.md#pipelinedestinationiterablefunction)<`any`\> \| [`PipelineDestinationPromiseFunction`](https://oven-sh.github.io/bun-types/modules/stream_.md#pipelinedestinationpromisefunction)<`any`, `any`\> \| [`WritableStream`](https://oven-sh.github.io/bun-types/modules.md#writablestream)<`any`\> \| [`PipelineDestinationIterableFunction`](https://oven-sh.github.io/bun-types/modules/stream_.md#pipelinedestinationiterablefunction)<`unknown`\> \| [`PipelineDestinationPromiseFunction`](https://oven-sh.github.io/bun-types/modules/stream_.md#pipelinedestinationpromisefunction)<`unknown`, `any`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | `A` |
| `destination` | `B` |
| `options?` | [`PipelineOptions`](https://oven-sh.github.io/bun-types/interfaces/stream_.PipelineOptions.md) |

#### Returns

[`PipelinePromise`](https://oven-sh.github.io/bun-types/modules/stream_.md#pipelinepromise)<`B`\>

▸ **__promisify__**<`A`, `T1`, `B`\>(`source`, `transform1`, `destination`, `options?`): [`PipelinePromise`](https://oven-sh.github.io/bun-types/modules/stream_.md#pipelinepromise)<`B`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | extends [`PipelineSource`](https://oven-sh.github.io/bun-types/modules/stream_.md#pipelinesource)<`any`\> |
| `T1` | extends [`PipelineTransform`](https://oven-sh.github.io/bun-types/modules/stream_.md#pipelinetransform)<`A`, `any`\> |
| `B` | extends [`WritableStream`](https://oven-sh.github.io/bun-types/modules.md#writablestream)<`any`\> \| [`PipelineDestinationIterableFunction`](https://oven-sh.github.io/bun-types/modules/stream_.md#pipelinedestinationiterablefunction)<`any`\> \| [`PipelineDestinationPromiseFunction`](https://oven-sh.github.io/bun-types/modules/stream_.md#pipelinedestinationpromisefunction)<`any`, `any`\> \| [`WritableStream`](https://oven-sh.github.io/bun-types/modules.md#writablestream)<`any`\> \| [`PipelineDestinationIterableFunction`](https://oven-sh.github.io/bun-types/modules/stream_.md#pipelinedestinationiterablefunction)<`unknown`\> \| [`PipelineDestinationPromiseFunction`](https://oven-sh.github.io/bun-types/modules/stream_.md#pipelinedestinationpromisefunction)<`unknown`, `any`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | `A` |
| `transform1` | `T1` |
| `destination` | `B` |
| `options?` | [`PipelineOptions`](https://oven-sh.github.io/bun-types/interfaces/stream_.PipelineOptions.md) |

#### Returns

[`PipelinePromise`](https://oven-sh.github.io/bun-types/modules/stream_.md#pipelinepromise)<`B`\>

▸ **__promisify__**<`A`, `T1`, `T2`, `B`\>(`source`, `transform1`, `transform2`, `destination`, `options?`): [`PipelinePromise`](https://oven-sh.github.io/bun-types/modules/stream_.md#pipelinepromise)<`B`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | extends [`PipelineSource`](https://oven-sh.github.io/bun-types/modules/stream_.md#pipelinesource)<`any`\> |
| `T1` | extends [`PipelineTransform`](https://oven-sh.github.io/bun-types/modules/stream_.md#pipelinetransform)<`A`, `any`\> |
| `T2` | extends [`PipelineTransform`](https://oven-sh.github.io/bun-types/modules/stream_.md#pipelinetransform)<`T1`, `any`\> |
| `B` | extends [`WritableStream`](https://oven-sh.github.io/bun-types/modules.md#writablestream)<`any`\> \| [`PipelineDestinationIterableFunction`](https://oven-sh.github.io/bun-types/modules/stream_.md#pipelinedestinationiterablefunction)<`any`\> \| [`PipelineDestinationPromiseFunction`](https://oven-sh.github.io/bun-types/modules/stream_.md#pipelinedestinationpromisefunction)<`any`, `any`\> \| [`WritableStream`](https://oven-sh.github.io/bun-types/modules.md#writablestream)<`any`\> \| [`PipelineDestinationIterableFunction`](https://oven-sh.github.io/bun-types/modules/stream_.md#pipelinedestinationiterablefunction)<`unknown`\> \| [`PipelineDestinationPromiseFunction`](https://oven-sh.github.io/bun-types/modules/stream_.md#pipelinedestinationpromisefunction)<`unknown`, `any`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | `A` |
| `transform1` | `T1` |
| `transform2` | `T2` |
| `destination` | `B` |
| `options?` | [`PipelineOptions`](https://oven-sh.github.io/bun-types/interfaces/stream_.PipelineOptions.md) |

#### Returns

[`PipelinePromise`](https://oven-sh.github.io/bun-types/modules/stream_.md#pipelinepromise)<`B`\>

▸ **__promisify__**<`A`, `T1`, `T2`, `T3`, `B`\>(`source`, `transform1`, `transform2`, `transform3`, `destination`, `options?`): [`PipelinePromise`](https://oven-sh.github.io/bun-types/modules/stream_.md#pipelinepromise)<`B`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | extends [`PipelineSource`](https://oven-sh.github.io/bun-types/modules/stream_.md#pipelinesource)<`any`\> |
| `T1` | extends [`PipelineTransform`](https://oven-sh.github.io/bun-types/modules/stream_.md#pipelinetransform)<`A`, `any`\> |
| `T2` | extends [`PipelineTransform`](https://oven-sh.github.io/bun-types/modules/stream_.md#pipelinetransform)<`T1`, `any`\> |
| `T3` | extends [`PipelineTransform`](https://oven-sh.github.io/bun-types/modules/stream_.md#pipelinetransform)<`T2`, `any`\> |
| `B` | extends [`WritableStream`](https://oven-sh.github.io/bun-types/modules.md#writablestream)<`any`\> \| [`PipelineDestinationIterableFunction`](https://oven-sh.github.io/bun-types/modules/stream_.md#pipelinedestinationiterablefunction)<`any`\> \| [`PipelineDestinationPromiseFunction`](https://oven-sh.github.io/bun-types/modules/stream_.md#pipelinedestinationpromisefunction)<`any`, `any`\> \| [`WritableStream`](https://oven-sh.github.io/bun-types/modules.md#writablestream)<`any`\> \| [`PipelineDestinationIterableFunction`](https://oven-sh.github.io/bun-types/modules/stream_.md#pipelinedestinationiterablefunction)<`unknown`\> \| [`PipelineDestinationPromiseFunction`](https://oven-sh.github.io/bun-types/modules/stream_.md#pipelinedestinationpromisefunction)<`unknown`, `any`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | `A` |
| `transform1` | `T1` |
| `transform2` | `T2` |
| `transform3` | `T3` |
| `destination` | `B` |
| `options?` | [`PipelineOptions`](https://oven-sh.github.io/bun-types/interfaces/stream_.PipelineOptions.md) |

#### Returns

[`PipelinePromise`](https://oven-sh.github.io/bun-types/modules/stream_.md#pipelinepromise)<`B`\>

▸ **__promisify__**<`A`, `T1`, `T2`, `T3`, `T4`, `B`\>(`source`, `transform1`, `transform2`, `transform3`, `transform4`, `destination`, `options?`): [`PipelinePromise`](https://oven-sh.github.io/bun-types/modules/stream_.md#pipelinepromise)<`B`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | extends [`PipelineSource`](https://oven-sh.github.io/bun-types/modules/stream_.md#pipelinesource)<`any`\> |
| `T1` | extends [`PipelineTransform`](https://oven-sh.github.io/bun-types/modules/stream_.md#pipelinetransform)<`A`, `any`\> |
| `T2` | extends [`PipelineTransform`](https://oven-sh.github.io/bun-types/modules/stream_.md#pipelinetransform)<`T1`, `any`\> |
| `T3` | extends [`PipelineTransform`](https://oven-sh.github.io/bun-types/modules/stream_.md#pipelinetransform)<`T2`, `any`\> |
| `T4` | extends [`PipelineTransform`](https://oven-sh.github.io/bun-types/modules/stream_.md#pipelinetransform)<`T3`, `any`\> |
| `B` | extends [`WritableStream`](https://oven-sh.github.io/bun-types/modules.md#writablestream)<`any`\> \| [`PipelineDestinationIterableFunction`](https://oven-sh.github.io/bun-types/modules/stream_.md#pipelinedestinationiterablefunction)<`any`\> \| [`PipelineDestinationPromiseFunction`](https://oven-sh.github.io/bun-types/modules/stream_.md#pipelinedestinationpromisefunction)<`any`, `any`\> \| [`WritableStream`](https://oven-sh.github.io/bun-types/modules.md#writablestream)<`any`\> \| [`PipelineDestinationIterableFunction`](https://oven-sh.github.io/bun-types/modules/stream_.md#pipelinedestinationiterablefunction)<`unknown`\> \| [`PipelineDestinationPromiseFunction`](https://oven-sh.github.io/bun-types/modules/stream_.md#pipelinedestinationpromisefunction)<`unknown`, `any`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | `A` |
| `transform1` | `T1` |
| `transform2` | `T2` |
| `transform3` | `T3` |
| `transform4` | `T4` |
| `destination` | `B` |
| `options?` | [`PipelineOptions`](https://oven-sh.github.io/bun-types/interfaces/stream_.PipelineOptions.md) |

#### Returns

[`PipelinePromise`](https://oven-sh.github.io/bun-types/modules/stream_.md#pipelinepromise)<`B`\>

▸ **__promisify__**(`streams`, `options?`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `streams` | readonly ([`ReadableStream`](https://oven-sh.github.io/bun-types/modules.md#readablestream)<`any`\> \| [`WritableStream`](https://oven-sh.github.io/bun-types/modules.md#writablestream)<`any`\> \| [`ReadWriteStream`](https://oven-sh.github.io/bun-types/interfaces/ReadWriteStream.md))[] |
| `options?` | [`PipelineOptions`](https://oven-sh.github.io/bun-types/interfaces/stream_.PipelineOptions.md) |

#### Returns

`Promise`<`void`\>

▸ **__promisify__**(`stream1`, `stream2`, ...`streams`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `stream1` | [`ReadableStream`](https://oven-sh.github.io/bun-types/modules.md#readablestream)<`any`\> |
| `stream2` | [`WritableStream`](https://oven-sh.github.io/bun-types/modules.md#writablestream)<`any`\> \| [`ReadWriteStream`](https://oven-sh.github.io/bun-types/interfaces/ReadWriteStream.md) |
| `...streams` | ([`WritableStream`](https://oven-sh.github.io/bun-types/modules.md#writablestream)<`any`\> \| [`ReadWriteStream`](https://oven-sh.github.io/bun-types/interfaces/ReadWriteStream.md) \| [`PipelineOptions`](https://oven-sh.github.io/bun-types/interfaces/stream_.PipelineOptions.md))[] |

#### Returns

`Promise`<`void`\>
