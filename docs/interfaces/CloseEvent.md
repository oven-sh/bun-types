[bun-types](https://oven-sh.github.io/bun-types/README.md) / [Exports](https://oven-sh.github.io/bun-types/modules.md) / CloseEvent

# Interface: CloseEvent

A CloseEvent is sent to clients using WebSockets when the connection is closed. This is delivered to the listener indicated by the WebSocket object's onclose attribute.

## Hierarchy

- [`Event`](https://oven-sh.github.io/bun-types/modules.md#event)

  ↳ **`CloseEvent`**

## Table of contents

### Properties

- [AT\_TARGET](https://oven-sh.github.io/bun-types/interfaces/CloseEvent.md#at_target)
- [BUBBLING\_PHASE](https://oven-sh.github.io/bun-types/interfaces/CloseEvent.md#bubbling_phase)
- [CAPTURING\_PHASE](https://oven-sh.github.io/bun-types/interfaces/CloseEvent.md#capturing_phase)
- [NONE](https://oven-sh.github.io/bun-types/interfaces/CloseEvent.md#none)
- [bubbles](https://oven-sh.github.io/bun-types/interfaces/CloseEvent.md#bubbles)
- [cancelBubble](https://oven-sh.github.io/bun-types/interfaces/CloseEvent.md#cancelbubble)
- [cancelable](https://oven-sh.github.io/bun-types/interfaces/CloseEvent.md#cancelable)
- [code](https://oven-sh.github.io/bun-types/interfaces/CloseEvent.md#code)
- [composed](https://oven-sh.github.io/bun-types/interfaces/CloseEvent.md#composed)
- [currentTarget](https://oven-sh.github.io/bun-types/interfaces/CloseEvent.md#currenttarget)
- [defaultPrevented](https://oven-sh.github.io/bun-types/interfaces/CloseEvent.md#defaultprevented)
- [eventPhase](https://oven-sh.github.io/bun-types/interfaces/CloseEvent.md#eventphase)
- [isTrusted](https://oven-sh.github.io/bun-types/interfaces/CloseEvent.md#istrusted)
- [reason](https://oven-sh.github.io/bun-types/interfaces/CloseEvent.md#reason)
- [returnValue](https://oven-sh.github.io/bun-types/interfaces/CloseEvent.md#returnvalue)
- [srcElement](https://oven-sh.github.io/bun-types/interfaces/CloseEvent.md#srcelement)
- [target](https://oven-sh.github.io/bun-types/interfaces/CloseEvent.md#target)
- [timeStamp](https://oven-sh.github.io/bun-types/interfaces/CloseEvent.md#timestamp)
- [type](https://oven-sh.github.io/bun-types/interfaces/CloseEvent.md#type)
- [wasClean](https://oven-sh.github.io/bun-types/interfaces/CloseEvent.md#wasclean)

### Methods

- [composedPath](https://oven-sh.github.io/bun-types/interfaces/CloseEvent.md#composedpath)
- [initEvent](https://oven-sh.github.io/bun-types/interfaces/CloseEvent.md#initevent)
- [preventDefault](https://oven-sh.github.io/bun-types/interfaces/CloseEvent.md#preventdefault)
- [stopImmediatePropagation](https://oven-sh.github.io/bun-types/interfaces/CloseEvent.md#stopimmediatepropagation)
- [stopPropagation](https://oven-sh.github.io/bun-types/interfaces/CloseEvent.md#stoppropagation)

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

### code

• `Readonly` **code**: `number`

Returns the WebSocket connection close code provided by the server.

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

• `Readonly` **currentTarget**: [`EventTarget`](https://oven-sh.github.io/bun-types/modules.md#eventtarget)

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

### reason

• `Readonly` **reason**: `string`

Returns the WebSocket connection close reason provided by the server.

___

### returnValue

• **returnValue**: `boolean`

**`Deprecated`**

#### Inherited from

Event.returnValue

___

### srcElement

• `Readonly` **srcElement**: [`EventTarget`](https://oven-sh.github.io/bun-types/modules.md#eventtarget)

**`Deprecated`**

#### Inherited from

Event.srcElement

___

### target

• `Readonly` **target**: [`EventTarget`](https://oven-sh.github.io/bun-types/modules.md#eventtarget)

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

### wasClean

• `Readonly` **wasClean**: `boolean`

Returns true if the connection closed cleanly; false otherwise.

## Methods

### composedPath

▸ **composedPath**(): [`EventTarget`](https://oven-sh.github.io/bun-types/modules.md#eventtarget)[]

Returns the invocation target objects of event's path (objects on
which listeners will be invoked), except for any nodes in shadow
trees of which the shadow root's mode is "closed" that are not
reachable from event's currentTarget.

#### Returns

[`EventTarget`](https://oven-sh.github.io/bun-types/modules.md#eventtarget)[]

#### Inherited from

Event.composedPath

▸ **composedPath**(): [`EventTarget`](https://oven-sh.github.io/bun-types/modules.md#eventtarget)[]

Returns the invocation target objects of event's path (objects on
which listeners will be invoked), except for any nodes in shadow
trees of which the shadow root's mode is "closed" that are not
reachable from event's currentTarget.

#### Returns

[`EventTarget`](https://oven-sh.github.io/bun-types/modules.md#eventtarget)[]

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
