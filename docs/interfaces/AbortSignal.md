[bun-types](https://github.com/oven-sh/bun-types/blob/master/api-docs/README.md) / [Exports](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules.md) / AbortSignal

# Interface: AbortSignal

A signal object that allows you to communicate with a DOM request (such as a Fetch) and abort it if required via an AbortController object.

## Hierarchy

- [`EventTarget`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules.md#eventtarget)

  ↳ **`AbortSignal`**

## Table of contents

### Properties

- [aborted](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/AbortSignal.md#aborted)
- [onabort](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/AbortSignal.md#onabort)

### Methods

- [addEventListener](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/AbortSignal.md#addeventlistener)
- [dispatchEvent](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/AbortSignal.md#dispatchevent)
- [removeEventListener](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/AbortSignal.md#removeeventlistener)

## Properties

### aborted

• `Readonly` **aborted**: `boolean`

Returns true if this AbortSignal's AbortController has signaled to abort, and false otherwise.

___

### onabort

• **onabort**: (`this`: [`AbortSignal`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules.md#abortsignal), `ev`: [`Event`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules.md#event)) => `any`

#### Type declaration

▸ (`this`, `ev`): `any`

##### Parameters

| Name | Type |
| :------ | :------ |
| `this` | [`AbortSignal`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules.md#abortsignal) |
| `ev` | [`Event`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules.md#event) |

##### Returns

`any`

## Methods

### addEventListener

▸ **addEventListener**<`K`\>(`type`, `listener`, `options?`): `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends ``"abort"`` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `K` |
| `listener` | (`this`: [`AbortSignal`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules.md#abortsignal), `ev`: [`AbortSignalEventMap`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/AbortSignalEventMap.md)[`K`]) => `any` |
| `options?` | `boolean` \| [`AddEventListenerOptions`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/AddEventListenerOptions.md) |

#### Returns

`void`

#### Inherited from

EventTarget.addEventListener

▸ **addEventListener**(`type`, `listener`, `options?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` |
| `listener` | `EventListenerOrEventListenerObject` |
| `options?` | `boolean` \| [`AddEventListenerOptions`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/AddEventListenerOptions.md) |

#### Returns

`void`

#### Inherited from

EventTarget.addEventListener

▸ **addEventListener**<`K`\>(`type`, `listener`, `options?`): `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends ``"abort"`` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `K` |
| `listener` | (`this`: [`AbortSignal`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules.md#abortsignal), `ev`: [`AbortSignalEventMap`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/AbortSignalEventMap.md)[`K`]) => `any` |
| `options?` | `boolean` \| [`AddEventListenerOptions`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/AddEventListenerOptions.md) |

#### Returns

`void`

#### Inherited from

EventTarget.addEventListener

▸ **addEventListener**(`type`, `listener`, `options?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` |
| `listener` | `EventListenerOrEventListenerObject` |
| `options?` | `boolean` \| [`AddEventListenerOptions`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/AddEventListenerOptions.md) |

#### Returns

`void`

#### Inherited from

EventTarget.addEventListener

___

### dispatchEvent

▸ **dispatchEvent**(`event`): `boolean`

Dispatches a synthetic event event to target and returns true if either event's cancelable attribute value is false or its preventDefault() method was not invoked, and false otherwise.

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | [`Event`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules.md#event) |

#### Returns

`boolean`

#### Inherited from

EventTarget.dispatchEvent

▸ **dispatchEvent**(`event`): `boolean`

Dispatches a synthetic event event to target and returns true if either event's cancelable attribute value is false or its preventDefault() method was not invoked, and false otherwise.

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | [`Event`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules.md#event) |

#### Returns

`boolean`

#### Inherited from

EventTarget.dispatchEvent

___

### removeEventListener

▸ **removeEventListener**<`K`\>(`type`, `listener`, `options?`): `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends ``"abort"`` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `K` |
| `listener` | (`this`: [`AbortSignal`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules.md#abortsignal), `ev`: [`AbortSignalEventMap`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/AbortSignalEventMap.md)[`K`]) => `any` |
| `options?` | `boolean` \| [`EventListenerOptions`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/EventListenerOptions.md) |

#### Returns

`void`

#### Inherited from

EventTarget.removeEventListener

▸ **removeEventListener**(`type`, `listener`, `options?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` |
| `listener` | `EventListenerOrEventListenerObject` |
| `options?` | `boolean` \| [`EventListenerOptions`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/EventListenerOptions.md) |

#### Returns

`void`

#### Inherited from

EventTarget.removeEventListener

▸ **removeEventListener**<`K`\>(`type`, `listener`, `options?`): `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends ``"abort"`` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `K` |
| `listener` | (`this`: [`AbortSignal`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules.md#abortsignal), `ev`: [`AbortSignalEventMap`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/AbortSignalEventMap.md)[`K`]) => `any` |
| `options?` | `boolean` \| [`EventListenerOptions`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/EventListenerOptions.md) |

#### Returns

`void`

#### Inherited from

EventTarget.removeEventListener

▸ **removeEventListener**(`type`, `listener`, `options?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` |
| `listener` | `EventListenerOrEventListenerObject` |
| `options?` | `boolean` \| [`EventListenerOptions`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/EventListenerOptions.md) |

#### Returns

`void`

#### Inherited from

EventTarget.removeEventListener
