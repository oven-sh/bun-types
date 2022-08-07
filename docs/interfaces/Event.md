[bun-types](https://oven-sh.github.io/bun-types/README.md) / [Exports](https://oven-sh.github.io/bun-types/modules.md) / Event

# Interface: Event

An event which takes place in the DOM.

## Table of contents

### Properties

- [AT\_TARGET](https://oven-sh.github.io/bun-types/interfaces/Event.md#at_target)
- [BUBBLING\_PHASE](https://oven-sh.github.io/bun-types/interfaces/Event.md#bubbling_phase)
- [CAPTURING\_PHASE](https://oven-sh.github.io/bun-types/interfaces/Event.md#capturing_phase)
- [NONE](https://oven-sh.github.io/bun-types/interfaces/Event.md#none)
- [bubbles](https://oven-sh.github.io/bun-types/interfaces/Event.md#bubbles)
- [cancelBubble](https://oven-sh.github.io/bun-types/interfaces/Event.md#cancelbubble)
- [cancelable](https://oven-sh.github.io/bun-types/interfaces/Event.md#cancelable)
- [composed](https://oven-sh.github.io/bun-types/interfaces/Event.md#composed)
- [currentTarget](https://oven-sh.github.io/bun-types/interfaces/Event.md#currenttarget)
- [defaultPrevented](https://oven-sh.github.io/bun-types/interfaces/Event.md#defaultprevented)
- [eventPhase](https://oven-sh.github.io/bun-types/interfaces/Event.md#eventphase)
- [isTrusted](https://oven-sh.github.io/bun-types/interfaces/Event.md#istrusted)
- [returnValue](https://oven-sh.github.io/bun-types/interfaces/Event.md#returnvalue)
- [srcElement](https://oven-sh.github.io/bun-types/interfaces/Event.md#srcelement)
- [target](https://oven-sh.github.io/bun-types/interfaces/Event.md#target)
- [timeStamp](https://oven-sh.github.io/bun-types/interfaces/Event.md#timestamp)
- [type](https://oven-sh.github.io/bun-types/interfaces/Event.md#type)

### Methods

- [composedPath](https://oven-sh.github.io/bun-types/interfaces/Event.md#composedpath)
- [initEvent](https://oven-sh.github.io/bun-types/interfaces/Event.md#initevent)
- [preventDefault](https://oven-sh.github.io/bun-types/interfaces/Event.md#preventdefault)
- [stopImmediatePropagation](https://oven-sh.github.io/bun-types/interfaces/Event.md#stopimmediatepropagation)
- [stopPropagation](https://oven-sh.github.io/bun-types/interfaces/Event.md#stoppropagation)

## Properties

### AT\_TARGET

• `Readonly` **AT\_TARGET**: `number`

___

### BUBBLING\_PHASE

• `Readonly` **BUBBLING\_PHASE**: `number`

___

### CAPTURING\_PHASE

• `Readonly` **CAPTURING\_PHASE**: `number`

___

### NONE

• `Readonly` **NONE**: `number`

___

### bubbles

• `Readonly` **bubbles**: `boolean`

Returns true or false depending on how event was initialized. True
if event goes through its target's ancestors in reverse tree order,
and false otherwise.

___

### cancelBubble

• **cancelBubble**: `boolean`

___

### cancelable

• `Readonly` **cancelable**: `boolean`

Returns true or false depending on how event was initialized. Its
return value does not always carry meaning, but true can indicate
that part of the operation during which event was dispatched, can be
canceled by invoking the preventDefault() method.

___

### composed

• `Readonly` **composed**: `boolean`

Returns true or false depending on how event was initialized. True
if event invokes listeners past a ShadowRoot node that is the root of
its target, and false otherwise.

___

### currentTarget

• `Readonly` **currentTarget**: [`EventTarget`](https://oven-sh.github.io/bun-types/modules.md#eventtarget)

Returns the object whose event listener's callback is currently
being invoked.

___

### defaultPrevented

• `Readonly` **defaultPrevented**: `boolean`

Returns true if preventDefault() was invoked successfully to
indicate cancelation, and false otherwise.

___

### eventPhase

• `Readonly` **eventPhase**: `number`

Returns the event's phase, which is one of NONE, CAPTURING_PHASE,
AT_TARGET, and BUBBLING_PHASE.

___

### isTrusted

• `Readonly` **isTrusted**: `boolean`

Returns true if event was dispatched by the user agent, and false
otherwise.

___

### returnValue

• **returnValue**: `boolean`

**`Deprecated`**

___

### srcElement

• `Readonly` **srcElement**: [`EventTarget`](https://oven-sh.github.io/bun-types/modules.md#eventtarget)

**`Deprecated`**

___

### target

• `Readonly` **target**: [`EventTarget`](https://oven-sh.github.io/bun-types/modules.md#eventtarget)

Returns the object to which event is dispatched (its target).

___

### timeStamp

• `Readonly` **timeStamp**: `number`

Returns the event's timestamp as the number of milliseconds measured
relative to the time origin.

___

### type

• `Readonly` **type**: `string`

Returns the type of event, e.g. "click", "hashchange", or "submit".

## Methods

### composedPath

▸ **composedPath**(): [`EventTarget`](https://oven-sh.github.io/bun-types/modules.md#eventtarget)[]

Returns the invocation target objects of event's path (objects on
which listeners will be invoked), except for any nodes in shadow
trees of which the shadow root's mode is "closed" that are not
reachable from event's currentTarget.

#### Returns

[`EventTarget`](https://oven-sh.github.io/bun-types/modules.md#eventtarget)[]

▸ **composedPath**(): [`EventTarget`](https://oven-sh.github.io/bun-types/modules.md#eventtarget)[]

Returns the invocation target objects of event's path (objects on
which listeners will be invoked), except for any nodes in shadow
trees of which the shadow root's mode is "closed" that are not
reachable from event's currentTarget.

#### Returns

[`EventTarget`](https://oven-sh.github.io/bun-types/modules.md#eventtarget)[]

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

___

### preventDefault

▸ **preventDefault**(): `void`

If invoked when the cancelable attribute value is true, and while
executing a listener for the event with passive set to false, signals
to the operation that caused event to be dispatched that it needs to
be canceled.

#### Returns

`void`

▸ **preventDefault**(): `void`

If invoked when the cancelable attribute value is true, and while
executing a listener for the event with passive set to false, signals
to the operation that caused event to be dispatched that it needs to
be canceled.

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

▸ **stopImmediatePropagation**(): `void`

Invoking this method prevents event from reaching any registered
event listeners after the current one finishes running and, when
dispatched in a tree, also prevents event from reaching any other
objects.

#### Returns

`void`

___

### stopPropagation

▸ **stopPropagation**(): `void`

When dispatched in a tree, invoking this method prevents event from
reaching any objects other than the current object.

#### Returns

`void`

▸ **stopPropagation**(): `void`

When dispatched in a tree, invoking this method prevents event from
reaching any objects other than the current object.

#### Returns

`void`
