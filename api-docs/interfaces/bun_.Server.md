[bun-types](https://github.com/oven-sh/bun-types/blob/master/api-docs/README.md) / [Exports](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules.md) / ["bun"](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/bun_.md) / Server

# Interface: Server

["bun"](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/bun_.md).Server

HTTP & HTTPS Server

To start the server, see [serve](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/bun_.md#serve-1)

Often, you don't need to interact with this object directly. It exists to help you with the following tasks:
- Stop the server
- How many requests are currently being handled?

For performance, Bun pre-allocates most of the data for 2048 concurrent requests.
That means starting a new server allocates about 500 KB of memory. Try to
avoid starting and stopping the server often (unless it's a new instance of bun).

Powered by a fork of [uWebSockets](https://github.com/uNetworking/uWebSockets). Thank you @alexhultman.

## Table of contents

### Properties

- [development](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/bun_.Server.md#development)
- [hostname](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/bun_.Server.md#hostname)
- [pendingRequests](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/bun_.Server.md#pendingrequests)
- [port](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/bun_.Server.md#port)

### Methods

- [stop](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/bun_.Server.md#stop)

## Properties

### development

• `Readonly` **development**: `boolean`

___

### hostname

• `Readonly` **hostname**: `string`

___

### pendingRequests

• `Readonly` **pendingRequests**: `number`

How many requests are in-flight right now?

___

### port

• `Readonly` **port**: `number`

## Methods

### stop

▸ **stop**(): `void`

Stop listening to prevent new connections from being accepted.

It does not close existing connections.

It may take a second or two to actually stop.

#### Returns

`void`

▸ **stop**(): `void`

Stop listening to prevent new connections from being accepted.

It does not close existing connections.

It may take a second or two to actually stop.

#### Returns

`void`
