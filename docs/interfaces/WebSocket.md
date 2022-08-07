[bun-types](https://oven-sh.github.io/bun-types/README.md) / [Exports](https://oven-sh.github.io/bun-types/modules.md) / WebSocket

# Interface: WebSocket

Provides the API for creating and managing a WebSocket connection to a server, as well as for sending and receiving data on the connection.

## Hierarchy

- [`EventTarget`](https://oven-sh.github.io/bun-types/modules.md#eventtarget)

  ↳ **`WebSocket`**

## Table of contents

### Properties

- [CLOSED](https://oven-sh.github.io/bun-types/interfaces/WebSocket.md#closed)
- [CLOSING](https://oven-sh.github.io/bun-types/interfaces/WebSocket.md#closing)
- [CONNECTING](https://oven-sh.github.io/bun-types/interfaces/WebSocket.md#connecting)
- [OPEN](https://oven-sh.github.io/bun-types/interfaces/WebSocket.md#open)
- [binaryType](https://oven-sh.github.io/bun-types/interfaces/WebSocket.md#binarytype)
- [bufferedAmount](https://oven-sh.github.io/bun-types/interfaces/WebSocket.md#bufferedamount)
- [extensions](https://oven-sh.github.io/bun-types/interfaces/WebSocket.md#extensions)
- [onclose](https://oven-sh.github.io/bun-types/interfaces/WebSocket.md#onclose)
- [onerror](https://oven-sh.github.io/bun-types/interfaces/WebSocket.md#onerror)
- [onmessage](https://oven-sh.github.io/bun-types/interfaces/WebSocket.md#onmessage)
- [onopen](https://oven-sh.github.io/bun-types/interfaces/WebSocket.md#onopen)
- [protocol](https://oven-sh.github.io/bun-types/interfaces/WebSocket.md#protocol)
- [readyState](https://oven-sh.github.io/bun-types/interfaces/WebSocket.md#readystate)
- [url](https://oven-sh.github.io/bun-types/interfaces/WebSocket.md#url)

### Methods

- [addEventListener](https://oven-sh.github.io/bun-types/interfaces/WebSocket.md#addeventlistener)
- [close](https://oven-sh.github.io/bun-types/interfaces/WebSocket.md#close)
- [dispatchEvent](https://oven-sh.github.io/bun-types/interfaces/WebSocket.md#dispatchevent)
- [removeEventListener](https://oven-sh.github.io/bun-types/interfaces/WebSocket.md#removeeventlistener)
- [send](https://oven-sh.github.io/bun-types/interfaces/WebSocket.md#send)

## Properties

### CLOSED

• `Readonly` **CLOSED**: `number`

___

### CLOSING

• `Readonly` **CLOSING**: `number`

___

### CONNECTING

• `Readonly` **CONNECTING**: `number`

___

### OPEN

• `Readonly` **OPEN**: `number`

___

### binaryType

• **binaryType**: `BinaryType`

Returns a string that indicates how binary data from the WebSocket object is exposed to scripts:

Can be set, to change how binary data is returned. The default is "blob".

___

### bufferedAmount

• `Readonly` **bufferedAmount**: `number`

Returns the number of bytes of application data (UTF-8 text and binary data) that have been queued using send() but not yet been transmitted to the network.

If the WebSocket connection is closed, this attribute's value will only increase with each call to the send() method. (The number does not reset to zero once the connection closes.)

___

### extensions

• `Readonly` **extensions**: `string`

Returns the extensions selected by the server, if any.

___

### onclose

• **onclose**: (`this`: [`WebSocket`](https://oven-sh.github.io/bun-types/modules.md#websocket), `ev`: [`CloseEvent`](https://oven-sh.github.io/bun-types/modules.md#closeevent)) => `any`

#### Type declaration

▸ (`this`, `ev`): `any`

##### Parameters

| Name | Type |
| :------ | :------ |
| `this` | [`WebSocket`](https://oven-sh.github.io/bun-types/modules.md#websocket) |
| `ev` | [`CloseEvent`](https://oven-sh.github.io/bun-types/modules.md#closeevent) |

##### Returns

`any`

___

### onerror

• **onerror**: (`this`: [`WebSocket`](https://oven-sh.github.io/bun-types/modules.md#websocket), `ev`: [`Event`](https://oven-sh.github.io/bun-types/modules.md#event)) => `any`

#### Type declaration

▸ (`this`, `ev`): `any`

##### Parameters

| Name | Type |
| :------ | :------ |
| `this` | [`WebSocket`](https://oven-sh.github.io/bun-types/modules.md#websocket) |
| `ev` | [`Event`](https://oven-sh.github.io/bun-types/modules.md#event) |

##### Returns

`any`

___

### onmessage

• **onmessage**: (`this`: [`WebSocket`](https://oven-sh.github.io/bun-types/modules.md#websocket), `ev`: [`MessageEvent`](https://oven-sh.github.io/bun-types/modules.md#messageevent)<`any`\>) => `any`

#### Type declaration

▸ (`this`, `ev`): `any`

##### Parameters

| Name | Type |
| :------ | :------ |
| `this` | [`WebSocket`](https://oven-sh.github.io/bun-types/modules.md#websocket) |
| `ev` | [`MessageEvent`](https://oven-sh.github.io/bun-types/modules.md#messageevent)<`any`\> |

##### Returns

`any`

___

### onopen

• **onopen**: (`this`: [`WebSocket`](https://oven-sh.github.io/bun-types/modules.md#websocket), `ev`: [`Event`](https://oven-sh.github.io/bun-types/modules.md#event)) => `any`

#### Type declaration

▸ (`this`, `ev`): `any`

##### Parameters

| Name | Type |
| :------ | :------ |
| `this` | [`WebSocket`](https://oven-sh.github.io/bun-types/modules.md#websocket) |
| `ev` | [`Event`](https://oven-sh.github.io/bun-types/modules.md#event) |

##### Returns

`any`

___

### protocol

• `Readonly` **protocol**: `string`

Returns the subprotocol selected by the server, if any. It can be used in conjunction with the array form of the constructor's second argument to perform subprotocol negotiation.

___

### readyState

• `Readonly` **readyState**: `number`

Returns the state of the WebSocket object's connection. It can have the values described below.

___

### url

• `Readonly` **url**: `string`

Returns the URL that was used to establish the WebSocket connection.

## Methods

### addEventListener

▸ **addEventListener**<`K`\>(`type`, `listener`, `options?`): `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends keyof [`WebSocketEventMap`](https://oven-sh.github.io/bun-types/interfaces/WebSocketEventMap.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `K` |
| `listener` | (`this`: [`WebSocket`](https://oven-sh.github.io/bun-types/modules.md#websocket), `ev`: [`WebSocketEventMap`](https://oven-sh.github.io/bun-types/interfaces/WebSocketEventMap.md)[`K`]) => `any` |
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
| `K` | extends keyof [`WebSocketEventMap`](https://oven-sh.github.io/bun-types/interfaces/WebSocketEventMap.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `K` |
| `listener` | (`this`: [`WebSocket`](https://oven-sh.github.io/bun-types/modules.md#websocket), `ev`: [`WebSocketEventMap`](https://oven-sh.github.io/bun-types/interfaces/WebSocketEventMap.md)[`K`]) => `any` |
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

### close

▸ **close**(`code?`, `reason?`): `void`

Closes the WebSocket connection, optionally using code as the the WebSocket connection close code and reason as the the WebSocket connection close reason.

#### Parameters

| Name | Type |
| :------ | :------ |
| `code?` | `number` |
| `reason?` | `string` |

#### Returns

`void`

▸ **close**(`code?`, `reason?`): `void`

Closes the WebSocket connection, optionally using code as the the WebSocket connection close code and reason as the the WebSocket connection close reason.

#### Parameters

| Name | Type |
| :------ | :------ |
| `code?` | `number` |
| `reason?` | `string` |

#### Returns

`void`

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
| `K` | extends keyof [`WebSocketEventMap`](https://oven-sh.github.io/bun-types/interfaces/WebSocketEventMap.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `K` |
| `listener` | (`this`: [`WebSocket`](https://oven-sh.github.io/bun-types/modules.md#websocket), `ev`: [`WebSocketEventMap`](https://oven-sh.github.io/bun-types/interfaces/WebSocketEventMap.md)[`K`]) => `any` |
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
| `K` | extends keyof [`WebSocketEventMap`](https://oven-sh.github.io/bun-types/interfaces/WebSocketEventMap.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `K` |
| `listener` | (`this`: [`WebSocket`](https://oven-sh.github.io/bun-types/modules.md#websocket), `ev`: [`WebSocketEventMap`](https://oven-sh.github.io/bun-types/interfaces/WebSocketEventMap.md)[`K`]) => `any` |
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

___

### send

▸ **send**(`data`): `void`

Transmits data using the WebSocket connection. data can be a string, a Blob, an ArrayBuffer, or an ArrayBufferView.

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `string` \| `Blob` \| `ArrayBufferLike` \| `ArrayBufferView` |

#### Returns

`void`

▸ **send**(`data`): `void`

Transmits data using the WebSocket connection. data can be a string, a Blob, an ArrayBuffer, or an ArrayBufferView.

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `string` \| `Blob` \| `ArrayBufferLike` \| `ArrayBufferView` |

#### Returns

`void`
