[bun-types](https://oven-sh.github.io/bun-types/README.md) / [Exports](https://oven-sh.github.io/bun-types/modules.md) / AbortSignal

# Interface: AbortSignal

A signal object that allows you to communicate with a DOM request (such as a Fetch) and abort it if required via an AbortController object.

## Hierarchy

- [`EventTarget`](https://oven-sh.github.io/bun-types/modules.md#eventtarget)

  ↳ **`AbortSignal`**

## Table of contents

### Properties

- [aborted](https://oven-sh.github.io/bun-types/interfaces/AbortSignal.md#aborted)
- [onabort](https://oven-sh.github.io/bun-types/interfaces/AbortSignal.md#onabort)

### Methods

- [addEventListener](https://oven-sh.github.io/bun-types/interfaces/AbortSignal.md#addeventlistener)
- [dispatchEvent](https://oven-sh.github.io/bun-types/interfaces/AbortSignal.md#dispatchevent)
- [removeEventListener](https://oven-sh.github.io/bun-types/interfaces/AbortSignal.md#removeeventlistener)

## Properties

### aborted

• `Readonly` **aborted**: `boolean`

Returns true if this AbortSignal's AbortController has signaled to abort, and false otherwise.

___

### onabort

• **onabort**: (`this`: [`AbortSignal`](https://oven-sh.github.io/bun-types/modules.md#abortsignal), `ev`: [`Event`](https://oven-sh.github.io/bun-types/modules.md#event)) => `any`

#### Type declaration

▸ (`this`, `ev`): `any`

##### Parameters

| Name | Type |
| :------ | :------ |
| `this` | [`AbortSignal`](https://oven-sh.github.io/bun-types/modules.md#abortsignal) |
| `ev` | [`Event`](https://oven-sh.github.io/bun-types/modules.md#event) |

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
| `listener` | (`this`: [`AbortSignal`](https://oven-sh.github.io/bun-types/modules.md#abortsignal), `ev`: [`AbortSignalEventMap`](https://oven-sh.github.io/bun-types/interfaces/AbortSignalEventMap.md)[`K`]) => `any` |
| `options?` | `boolean` \| [`AddEventListenerOptions`](https://oven-sh.github.io/bun-types/interfaces/AddEventListenerOptions.md) |

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
| `options?` | `boolean` \| [`AddEventListenerOptions`](https://oven-sh.github.io/bun-types/interfaces/AddEventListenerOptions.md) |

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
| `listener` | (`this`: [`AbortSignal`](https://oven-sh.github.io/bun-types/modules.md#abortsignal), `ev`: [`AbortSignalEventMap`](https://oven-sh.github.io/bun-types/interfaces/AbortSignalEventMap.md)[`K`]) => `any` |
| `options?` | `boolean` \| [`AddEventListenerOptions`](https://oven-sh.github.io/bun-types/interfaces/AddEventListenerOptions.md) |

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
| `options?` | `boolean` \| [`AddEventListenerOptions`](https://oven-sh.github.io/bun-types/interfaces/AddEventListenerOptions.md) |

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
| `event` | [`Event`](https://oven-sh.github.io/bun-types/modules.md#event) |

#### Returns

`boolean`

#### Inherited from

EventTarget.dispatchEvent

▸ **dispatchEvent**(`event`): `boolean`

Dispatches a synthetic event event to target and returns true if either event's cancelable attribute value is false or its preventDefault() method was not invoked, and false otherwise.

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | [`Event`](https://oven-sh.github.io/bun-types/modules.md#event) |

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
| `listener` | (`this`: [`AbortSignal`](https://oven-sh.github.io/bun-types/modules.md#abortsignal), `ev`: [`AbortSignalEventMap`](https://oven-sh.github.io/bun-types/interfaces/AbortSignalEventMap.md)[`K`]) => `any` |
| `options?` | `boolean` \| [`EventListenerOptions`](https://oven-sh.github.io/bun-types/interfaces/EventListenerOptions.md) |

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
| `options?` | `boolean` \| [`EventListenerOptions`](https://oven-sh.github.io/bun-types/interfaces/EventListenerOptions.md) |

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
| `listener` | (`this`: [`AbortSignal`](https://oven-sh.github.io/bun-types/modules.md#abortsignal), `ev`: [`AbortSignalEventMap`](https://oven-sh.github.io/bun-types/interfaces/AbortSignalEventMap.md)[`K`]) => `any` |
| `options?` | `boolean` \| [`EventListenerOptions`](https://oven-sh.github.io/bun-types/interfaces/EventListenerOptions.md) |

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
| `options?` | `boolean` \| [`EventListenerOptions`](https://oven-sh.github.io/bun-types/interfaces/EventListenerOptions.md) |

#### Returns

`void`

#### Inherited from

EventTarget.removeEventListener
