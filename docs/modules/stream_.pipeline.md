[bun-types](https://github.com/oven-sh/bun-types/blob/master/api-docs/README.md) / [Exports](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules.md) / ["stream"](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/stream_.md) / pipeline

# Namespace: pipeline

["stream"](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/stream_.md).pipeline

## Table of contents

### Functions

- [\_\_promisify\_\_](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/stream_.pipeline.md#__promisify__)

## Functions

### \_\_promisify\_\_

▸ **__promisify__**<`A`, `B`\>(`source`, `destination`, `options?`): [`PipelinePromise`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/stream_.md#pipelinepromise)<`B`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | extends [`PipelineSource`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/stream_.md#pipelinesource)<`any`\> |
| `B` | extends [`WritableStream`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules.md#writablestream)<`any`\> \| [`PipelineDestinationIterableFunction`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/stream_.md#pipelinedestinationiterablefunction)<`any`\> \| [`PipelineDestinationPromiseFunction`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/stream_.md#pipelinedestinationpromisefunction)<`any`, `any`\> \| [`WritableStream`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules.md#writablestream)<`any`\> \| [`PipelineDestinationIterableFunction`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/stream_.md#pipelinedestinationiterablefunction)<`unknown`\> \| [`PipelineDestinationPromiseFunction`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/stream_.md#pipelinedestinationpromisefunction)<`unknown`, `any`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | `A` |
| `destination` | `B` |
| `options?` | [`PipelineOptions`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/stream_.PipelineOptions.md) |

#### Returns

[`PipelinePromise`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/stream_.md#pipelinepromise)<`B`\>

▸ **__promisify__**<`A`, `T1`, `B`\>(`source`, `transform1`, `destination`, `options?`): [`PipelinePromise`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/stream_.md#pipelinepromise)<`B`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | extends [`PipelineSource`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/stream_.md#pipelinesource)<`any`\> |
| `T1` | extends [`PipelineTransform`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/stream_.md#pipelinetransform)<`A`, `any`\> |
| `B` | extends [`WritableStream`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules.md#writablestream)<`any`\> \| [`PipelineDestinationIterableFunction`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/stream_.md#pipelinedestinationiterablefunction)<`any`\> \| [`PipelineDestinationPromiseFunction`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/stream_.md#pipelinedestinationpromisefunction)<`any`, `any`\> \| [`WritableStream`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules.md#writablestream)<`any`\> \| [`PipelineDestinationIterableFunction`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/stream_.md#pipelinedestinationiterablefunction)<`unknown`\> \| [`PipelineDestinationPromiseFunction`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/stream_.md#pipelinedestinationpromisefunction)<`unknown`, `any`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | `A` |
| `transform1` | `T1` |
| `destination` | `B` |
| `options?` | [`PipelineOptions`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/stream_.PipelineOptions.md) |

#### Returns

[`PipelinePromise`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/stream_.md#pipelinepromise)<`B`\>

▸ **__promisify__**<`A`, `T1`, `T2`, `B`\>(`source`, `transform1`, `transform2`, `destination`, `options?`): [`PipelinePromise`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/stream_.md#pipelinepromise)<`B`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | extends [`PipelineSource`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/stream_.md#pipelinesource)<`any`\> |
| `T1` | extends [`PipelineTransform`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/stream_.md#pipelinetransform)<`A`, `any`\> |
| `T2` | extends [`PipelineTransform`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/stream_.md#pipelinetransform)<`T1`, `any`\> |
| `B` | extends [`WritableStream`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules.md#writablestream)<`any`\> \| [`PipelineDestinationIterableFunction`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/stream_.md#pipelinedestinationiterablefunction)<`any`\> \| [`PipelineDestinationPromiseFunction`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/stream_.md#pipelinedestinationpromisefunction)<`any`, `any`\> \| [`WritableStream`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules.md#writablestream)<`any`\> \| [`PipelineDestinationIterableFunction`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/stream_.md#pipelinedestinationiterablefunction)<`unknown`\> \| [`PipelineDestinationPromiseFunction`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/stream_.md#pipelinedestinationpromisefunction)<`unknown`, `any`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | `A` |
| `transform1` | `T1` |
| `transform2` | `T2` |
| `destination` | `B` |
| `options?` | [`PipelineOptions`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/stream_.PipelineOptions.md) |

#### Returns

[`PipelinePromise`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/stream_.md#pipelinepromise)<`B`\>

▸ **__promisify__**<`A`, `T1`, `T2`, `T3`, `B`\>(`source`, `transform1`, `transform2`, `transform3`, `destination`, `options?`): [`PipelinePromise`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/stream_.md#pipelinepromise)<`B`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | extends [`PipelineSource`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/stream_.md#pipelinesource)<`any`\> |
| `T1` | extends [`PipelineTransform`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/stream_.md#pipelinetransform)<`A`, `any`\> |
| `T2` | extends [`PipelineTransform`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/stream_.md#pipelinetransform)<`T1`, `any`\> |
| `T3` | extends [`PipelineTransform`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/stream_.md#pipelinetransform)<`T2`, `any`\> |
| `B` | extends [`WritableStream`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules.md#writablestream)<`any`\> \| [`PipelineDestinationIterableFunction`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/stream_.md#pipelinedestinationiterablefunction)<`any`\> \| [`PipelineDestinationPromiseFunction`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/stream_.md#pipelinedestinationpromisefunction)<`any`, `any`\> \| [`WritableStream`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules.md#writablestream)<`any`\> \| [`PipelineDestinationIterableFunction`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/stream_.md#pipelinedestinationiterablefunction)<`unknown`\> \| [`PipelineDestinationPromiseFunction`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/stream_.md#pipelinedestinationpromisefunction)<`unknown`, `any`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | `A` |
| `transform1` | `T1` |
| `transform2` | `T2` |
| `transform3` | `T3` |
| `destination` | `B` |
| `options?` | [`PipelineOptions`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/stream_.PipelineOptions.md) |

#### Returns

[`PipelinePromise`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/stream_.md#pipelinepromise)<`B`\>

▸ **__promisify__**<`A`, `T1`, `T2`, `T3`, `T4`, `B`\>(`source`, `transform1`, `transform2`, `transform3`, `transform4`, `destination`, `options?`): [`PipelinePromise`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/stream_.md#pipelinepromise)<`B`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | extends [`PipelineSource`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/stream_.md#pipelinesource)<`any`\> |
| `T1` | extends [`PipelineTransform`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/stream_.md#pipelinetransform)<`A`, `any`\> |
| `T2` | extends [`PipelineTransform`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/stream_.md#pipelinetransform)<`T1`, `any`\> |
| `T3` | extends [`PipelineTransform`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/stream_.md#pipelinetransform)<`T2`, `any`\> |
| `T4` | extends [`PipelineTransform`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/stream_.md#pipelinetransform)<`T3`, `any`\> |
| `B` | extends [`WritableStream`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules.md#writablestream)<`any`\> \| [`PipelineDestinationIterableFunction`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/stream_.md#pipelinedestinationiterablefunction)<`any`\> \| [`PipelineDestinationPromiseFunction`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/stream_.md#pipelinedestinationpromisefunction)<`any`, `any`\> \| [`WritableStream`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules.md#writablestream)<`any`\> \| [`PipelineDestinationIterableFunction`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/stream_.md#pipelinedestinationiterablefunction)<`unknown`\> \| [`PipelineDestinationPromiseFunction`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/stream_.md#pipelinedestinationpromisefunction)<`unknown`, `any`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | `A` |
| `transform1` | `T1` |
| `transform2` | `T2` |
| `transform3` | `T3` |
| `transform4` | `T4` |
| `destination` | `B` |
| `options?` | [`PipelineOptions`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/stream_.PipelineOptions.md) |

#### Returns

[`PipelinePromise`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/stream_.md#pipelinepromise)<`B`\>

▸ **__promisify__**(`streams`, `options?`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `streams` | readonly ([`ReadableStream`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules.md#readablestream)<`any`\> \| [`WritableStream`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules.md#writablestream)<`any`\> \| [`ReadWriteStream`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/ReadWriteStream.md))[] |
| `options?` | [`PipelineOptions`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/stream_.PipelineOptions.md) |

#### Returns

`Promise`<`void`\>

▸ **__promisify__**(`stream1`, `stream2`, ...`streams`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `stream1` | [`ReadableStream`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules.md#readablestream)<`any`\> |
| `stream2` | [`WritableStream`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules.md#writablestream)<`any`\> \| [`ReadWriteStream`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/ReadWriteStream.md) |
| `...streams` | ([`WritableStream`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules.md#writablestream)<`any`\> \| [`ReadWriteStream`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/ReadWriteStream.md) \| [`PipelineOptions`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/stream_.PipelineOptions.md))[] |

#### Returns

`Promise`<`void`\>
