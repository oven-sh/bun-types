[bun-types](https://github.com/oven-sh/bun-types/blob/master/api-docs/README.md) / [Exports](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules.md) / FetchEvent

# Interface: FetchEvent

## Hierarchy

- [`Event`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules.md#event)

  ↳ **`FetchEvent`**

## Table of contents

### Properties

- [AT\_TARGET](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/FetchEvent.md#at_target)
- [BUBBLING\_PHASE](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/FetchEvent.md#bubbling_phase)
- [CAPTURING\_PHASE](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/FetchEvent.md#capturing_phase)
- [NONE](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/FetchEvent.md#none)
- [bubbles](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/FetchEvent.md#bubbles)
- [cancelBubble](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/FetchEvent.md#cancelbubble)
- [cancelable](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/FetchEvent.md#cancelable)
- [composed](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/FetchEvent.md#composed)
- [currentTarget](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/FetchEvent.md#currenttarget)
- [defaultPrevented](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/FetchEvent.md#defaultprevented)
- [eventPhase](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/FetchEvent.md#eventphase)
- [isTrusted](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/FetchEvent.md#istrusted)
- [request](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/FetchEvent.md#request)
- [returnValue](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/FetchEvent.md#returnvalue)
- [srcElement](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/FetchEvent.md#srcelement)
- [target](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/FetchEvent.md#target)
- [timeStamp](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/FetchEvent.md#timestamp)
- [type](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/FetchEvent.md#type)
- [url](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/FetchEvent.md#url)

### Methods

- [composedPath](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/FetchEvent.md#composedpath)
- [initEvent](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/FetchEvent.md#initevent)
- [preventDefault](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/FetchEvent.md#preventdefault)
- [respondWith](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/FetchEvent.md#respondwith)
- [stopImmediatePropagation](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/FetchEvent.md#stopimmediatepropagation)
- [stopPropagation](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/FetchEvent.md#stoppropagation)
- [waitUntil](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/FetchEvent.md#waituntil)

## Properties

### AT\_TARGET

• `Readonly` **AT\_TARGET**: `number`

#### Inherited from

Event.AT\_TARGET

___

### BUBBLING\_PHASE

• `Readonly` **BUBBLING\_PHASE**: `number`

#### Inherited from

Event.BUBBLING\_PHASE

___

### CAPTURING\_PHASE

• `Readonly` **CAPTURING\_PHASE**: `number`

#### Inherited from

Event.CAPTURING\_PHASE

___

### NONE

• `Readonly` **NONE**: `number`

#### Inherited from

Event.NONE

___

### bubbles

• `Readonly` **bubbles**: `boolean`

Returns true or false depending on how event was initialized. True
if event goes through its target's ancestors in reverse tree order,
and false otherwise.

#### Inherited from

Event.bubbles

___

### cancelBubble

• **cancelBubble**: `boolean`

#### Inherited from

Event.cancelBubble

___

### cancelable

• `Readonly` **cancelable**: `boolean`

Returns true or false depending on how event was initialized. Its
return value does not always carry meaning, but true can indicate
that part of the operation during which event was dispatched, can be
canceled by invoking the preventDefault() method.

#### Inherited from

Event.cancelable

___

### composed

• `Readonly` **composed**: `boolean`

Returns true or false depending on how event was initialized. True
if event invokes listeners past a ShadowRoot node that is the root of
its target, and false otherwise.

#### Inherited from

Event.composed

___

### currentTarget

• `Readonly` **currentTarget**: [`EventTarget`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules.md#eventtarget)

Returns the object whose event listener's callback is currently
being invoked.

#### Inherited from

Event.currentTarget

___

### defaultPrevented

• `Readonly` **defaultPrevented**: `boolean`

Returns true if preventDefault() was invoked successfully to
indicate cancelation, and false otherwise.

#### Inherited from

Event.defaultPrevented

___

### eventPhase

• `Readonly` **eventPhase**: `number`

Returns the event's phase, which is one of NONE, CAPTURING_PHASE,
AT_TARGET, and BUBBLING_PHASE.

#### Inherited from

Event.eventPhase

___

### isTrusted

• `Readonly` **isTrusted**: `boolean`

Returns true if event was dispatched by the user agent, and false
otherwise.

#### Inherited from

Event.isTrusted

___

### request

• `Readonly` **request**: `Request`

___

### returnValue

• **returnValue**: `boolean`

**`Deprecated`**

#### Inherited from

Event.returnValue

___

### srcElement

• `Readonly` **srcElement**: [`EventTarget`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules.md#eventtarget)

**`Deprecated`**

#### Inherited from

Event.srcElement

___

### target

• `Readonly` **target**: [`EventTarget`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules.md#eventtarget)

Returns the object to which event is dispatched (its target).

#### Inherited from

Event.target

___

### timeStamp

• `Readonly` **timeStamp**: `number`

Returns the event's timestamp as the number of milliseconds measured
relative to the time origin.

#### Inherited from

Event.timeStamp

___

### type

• `Readonly` **type**: `string`

Returns the type of event, e.g. "click", "hashchange", or "submit".

#### Inherited from

Event.type

___

### url

• `Readonly` **url**: `string`

## Methods

### composedPath

▸ **composedPath**(): [`EventTarget`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules.md#eventtarget)[]

Returns the invocation target objects of event's path (objects on
which listeners will be invoked), except for any nodes in shadow
trees of which the shadow root's mode is "closed" that are not
reachable from event's currentTarget.

#### Returns

[`EventTarget`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules.md#eventtarget)[]

#### Inherited from

Event.composedPath

▸ **composedPath**(): [`EventTarget`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules.md#eventtarget)[]

Returns the invocation target objects of event's path (objects on
which listeners will be invoked), except for any nodes in shadow
trees of which the shadow root's mode is "closed" that are not
reachable from event's currentTarget.

#### Returns

[`EventTarget`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules.md#eventtarget)[]

#### Inherited from

Event.composedPath

___

### initEvent

▸ **initEvent**(`type`, `bubbles?`, `cancelable?`): `void`

**`Deprecated`**

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` |
| `bubbles?` | `boolean` |
| `cancelable?` | `boolean` |

#### Returns

`void`

#### Inherited from

Event.initEvent

▸ **initEvent**(`type`, `bubbles?`, `cancelable?`): `void`

**`Deprecated`**

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` |
| `bubbles?` | `boolean` |
| `cancelable?` | `boolean` |

#### Returns

`void`

#### Inherited from

Event.initEvent

___

### preventDefault

▸ **preventDefault**(): `void`

If invoked when the cancelable attribute value is true, and while
executing a listener for the event with passive set to false, signals
to the operation that caused event to be dispatched that it needs to
be canceled.

#### Returns

`void`

#### Inherited from

Event.preventDefault

▸ **preventDefault**(): `void`

If invoked when the cancelable attribute value is true, and while
executing a listener for the event with passive set to false, signals
to the operation that caused event to be dispatched that it needs to
be canceled.

#### Returns

`void`

#### Inherited from

Event.preventDefault

___

### respondWith

▸ **respondWith**(`response`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | `Response` \| `Promise`<`Response`\> |

#### Returns

`void`

▸ **respondWith**(`response`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | `Response` \| `Promise`<`Response`\> |

#### Returns

`void`

___

### stopImmediatePropagation

▸ **stopImmediatePropagation**(): `void`

Invoking this method prevents event from reaching any registered
event listeners after the current one finishes running and, when
dispatched in a tree, also prevents event from reaching any other
objects.

#### Returns

`void`

#### Inherited from

Event.stopImmediatePropagation

▸ **stopImmediatePropagation**(): `void`

Invoking this method prevents event from reaching any registered
event listeners after the current one finishes running and, when
dispatched in a tree, also prevents event from reaching any other
objects.

#### Returns

`void`

#### Inherited from

Event.stopImmediatePropagation

___

### stopPropagation

▸ **stopPropagation**(): `void`

When dispatched in a tree, invoking this method prevents event from
reaching any objects other than the current object.

#### Returns

`void`

#### Inherited from

Event.stopPropagation

▸ **stopPropagation**(): `void`

When dispatched in a tree, invoking this method prevents event from
reaching any objects other than the current object.

#### Returns

`void`

#### Inherited from

Event.stopPropagation

___

### waitUntil

▸ **waitUntil**(`promise`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `promise` | `Promise`<`any`\> |

#### Returns

`void`

▸ **waitUntil**(`promise`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `promise` | `Promise`<`any`\> |

#### Returns

`void`
