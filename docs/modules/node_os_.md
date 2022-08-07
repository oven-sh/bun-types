[bun-types](https://oven-sh.github.io/bun-types/README.md) / [Exports](https://oven-sh.github.io/bun-types/modules.md) / "node:os"

# Namespace: "node:os"

## Table of contents

### Namespaces

- [constants](https://oven-sh.github.io/bun-types/modules/node_os_.constants.md)

### Interfaces

- [CpuInfo](https://oven-sh.github.io/bun-types/interfaces/node_os_.CpuInfo.md)
- [NetworkInterfaceBase](https://oven-sh.github.io/bun-types/interfaces/node_os_.NetworkInterfaceBase.md)
- [NetworkInterfaceInfoIPv4](https://oven-sh.github.io/bun-types/interfaces/node_os_.NetworkInterfaceInfoIPv4.md)
- [NetworkInterfaceInfoIPv6](https://oven-sh.github.io/bun-types/interfaces/node_os_.NetworkInterfaceInfoIPv6.md)
- [UserInfo](https://oven-sh.github.io/bun-types/interfaces/node_os_.UserInfo.md)

### Type Aliases

- [NetworkInterfaceInfo](https://oven-sh.github.io/bun-types/modules/node_os_.md#networkinterfaceinfo)
- [SignalConstants](https://oven-sh.github.io/bun-types/modules/node_os_.md#signalconstants)

### Variables

- [EOL](https://oven-sh.github.io/bun-types/modules/node_os_.md#eol)
- [devNull](https://oven-sh.github.io/bun-types/modules/node_os_.md#devnull)

### Functions

- [arch](https://oven-sh.github.io/bun-types/modules/node_os_.md#arch)
- [cpus](https://oven-sh.github.io/bun-types/modules/node_os_.md#cpus)
- [endianness](https://oven-sh.github.io/bun-types/modules/node_os_.md#endianness)
- [freemem](https://oven-sh.github.io/bun-types/modules/node_os_.md#freemem)
- [getPriority](https://oven-sh.github.io/bun-types/modules/node_os_.md#getpriority)
- [homedir](https://oven-sh.github.io/bun-types/modules/node_os_.md#homedir)
- [hostname](https://oven-sh.github.io/bun-types/modules/node_os_.md#hostname)
- [loadavg](https://oven-sh.github.io/bun-types/modules/node_os_.md#loadavg)
- [networkInterfaces](https://oven-sh.github.io/bun-types/modules/node_os_.md#networkinterfaces)
- [platform](https://oven-sh.github.io/bun-types/modules/node_os_.md#platform)
- [release](https://oven-sh.github.io/bun-types/modules/node_os_.md#release)
- [setPriority](https://oven-sh.github.io/bun-types/modules/node_os_.md#setpriority)
- [tmpdir](https://oven-sh.github.io/bun-types/modules/node_os_.md#tmpdir)
- [totalmem](https://oven-sh.github.io/bun-types/modules/node_os_.md#totalmem)
- [type](https://oven-sh.github.io/bun-types/modules/node_os_.md#type)
- [uptime](https://oven-sh.github.io/bun-types/modules/node_os_.md#uptime)
- [userInfo](https://oven-sh.github.io/bun-types/modules/node_os_.md#userinfo)
- [version](https://oven-sh.github.io/bun-types/modules/node_os_.md#version)

## Type Aliases

### NetworkInterfaceInfo

Ƭ **NetworkInterfaceInfo**: [`NetworkInterfaceInfoIPv4`](https://oven-sh.github.io/bun-types/interfaces/os_.NetworkInterfaceInfoIPv4.md) \| [`NetworkInterfaceInfoIPv6`](https://oven-sh.github.io/bun-types/interfaces/os_.NetworkInterfaceInfoIPv6.md)

___

### SignalConstants

Ƭ **SignalConstants**: { [key in Signals]: number }

## Variables

### EOL

• `Const` **EOL**: `string`

___

### devNull

• `Const` **devNull**: `string`

## Functions

### arch

▸ **arch**(): `string`

Returns the operating system CPU architecture for which the Node.js binary was
compiled. Possible values are `'arm'`, `'arm64'`, `'ia32'`, `'mips'`,`'mipsel'`, `'ppc'`, `'ppc64'`, `'s390'`, `'s390x'`, and `'x64'`.

The return value is equivalent to `process.arch`.

#### Returns

`string`

▸ **arch**(): `string`

Returns the operating system CPU architecture for which the Node.js binary was
compiled. Possible values are `'arm'`, `'arm64'`, `'ia32'`, `'mips'`,`'mipsel'`, `'ppc'`, `'ppc64'`, `'s390'`, `'s390x'`, and `'x64'`.

The return value is equivalent to `process.arch`.

#### Returns

`string`

___

### cpus

▸ **cpus**(): [`CpuInfo`](https://oven-sh.github.io/bun-types/interfaces/os_.CpuInfo.md)[]

Returns an array of objects containing information about each logical CPU core.

The properties included on each object include:

```js
[
  {
    model: 'Intel(R) Core(TM) i7 CPU         860  @ 2.80GHz',
    speed: 2926,
    times: {
      user: 252020,
      nice: 0,
      sys: 30340,
      idle: 1070356870,
      irq: 0
    }
  },
  {
    model: 'Intel(R) Core(TM) i7 CPU         860  @ 2.80GHz',
    speed: 2926,
    times: {
      user: 306960,
      nice: 0,
      sys: 26980,
      idle: 1071569080,
      irq: 0
    }
  },
  {
    model: 'Intel(R) Core(TM) i7 CPU         860  @ 2.80GHz',
    speed: 2926,
    times: {
      user: 248450,
      nice: 0,
      sys: 21750,
      idle: 1070919370,
      irq: 0
    }
  },
  {
    model: 'Intel(R) Core(TM) i7 CPU         860  @ 2.80GHz',
    speed: 2926,
    times: {
      user: 256880,
      nice: 0,
      sys: 19430,
      idle: 1070905480,
      irq: 20
    }
  },
]
```

`nice` values are POSIX-only. On Windows, the `nice` values of all processors
are always 0.

#### Returns

[`CpuInfo`](https://oven-sh.github.io/bun-types/interfaces/os_.CpuInfo.md)[]

▸ **cpus**(): [`CpuInfo`](https://oven-sh.github.io/bun-types/interfaces/os_.CpuInfo.md)[]

Returns an array of objects containing information about each logical CPU core.

The properties included on each object include:

```js
[
  {
    model: 'Intel(R) Core(TM) i7 CPU         860  @ 2.80GHz',
    speed: 2926,
    times: {
      user: 252020,
      nice: 0,
      sys: 30340,
      idle: 1070356870,
      irq: 0
    }
  },
  {
    model: 'Intel(R) Core(TM) i7 CPU         860  @ 2.80GHz',
    speed: 2926,
    times: {
      user: 306960,
      nice: 0,
      sys: 26980,
      idle: 1071569080,
      irq: 0
    }
  },
  {
    model: 'Intel(R) Core(TM) i7 CPU         860  @ 2.80GHz',
    speed: 2926,
    times: {
      user: 248450,
      nice: 0,
      sys: 21750,
      idle: 1070919370,
      irq: 0
    }
  },
  {
    model: 'Intel(R) Core(TM) i7 CPU         860  @ 2.80GHz',
    speed: 2926,
    times: {
      user: 256880,
      nice: 0,
      sys: 19430,
      idle: 1070905480,
      irq: 20
    }
  },
]
```

`nice` values are POSIX-only. On Windows, the `nice` values of all processors
are always 0.

#### Returns

[`CpuInfo`](https://oven-sh.github.io/bun-types/interfaces/os_.CpuInfo.md)[]

___

### endianness

▸ **endianness**(): ``"BE"`` \| ``"LE"``

Returns a string identifying the endianness of the CPU for which the Node.js
binary was compiled.

Possible values are `'BE'` for big endian and `'LE'` for little endian.

#### Returns

``"BE"`` \| ``"LE"``

▸ **endianness**(): ``"BE"`` \| ``"LE"``

Returns a string identifying the endianness of the CPU for which the Node.js
binary was compiled.

Possible values are `'BE'` for big endian and `'LE'` for little endian.

#### Returns

``"BE"`` \| ``"LE"``

___

### freemem

▸ **freemem**(): `number`

Returns the amount of free system memory in bytes as an integer.

#### Returns

`number`

▸ **freemem**(): `number`

Returns the amount of free system memory in bytes as an integer.

#### Returns

`number`

___

### getPriority

▸ **getPriority**(`pid?`): `number`

Returns the scheduling priority for the process specified by `pid`. If `pid` is
not provided or is `0`, the priority of the current process is returned.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `pid?` | `number` | The process ID to retrieve scheduling priority for. |

#### Returns

`number`

▸ **getPriority**(`pid?`): `number`

Returns the scheduling priority for the process specified by `pid`. If `pid` is
not provided or is `0`, the priority of the current process is returned.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `pid?` | `number` | The process ID to retrieve scheduling priority for. |

#### Returns

`number`

___

### homedir

▸ **homedir**(): `string`

Returns the string path of the current user's home directory.

On POSIX, it uses the `$HOME` environment variable if defined. Otherwise it
uses the [effective UID](https://en.wikipedia.org/wiki/User_identifier#Effective_user_ID) to look up the user's home directory.

On Windows, it uses the `USERPROFILE` environment variable if defined.
Otherwise it uses the path to the profile directory of the current user.

#### Returns

`string`

▸ **homedir**(): `string`

Returns the string path of the current user's home directory.

On POSIX, it uses the `$HOME` environment variable if defined. Otherwise it
uses the [effective UID](https://en.wikipedia.org/wiki/User_identifier#Effective_user_ID) to look up the user's home directory.

On Windows, it uses the `USERPROFILE` environment variable if defined.
Otherwise it uses the path to the profile directory of the current user.

#### Returns

`string`

___

### hostname

▸ **hostname**(): `string`

Returns the host name of the operating system as a string.

#### Returns

`string`

▸ **hostname**(): `string`

Returns the host name of the operating system as a string.

#### Returns

`string`

___

### loadavg

▸ **loadavg**(): `number`[]

Returns an array containing the 1, 5, and 15 minute load averages.

The load average is a measure of system activity calculated by the operating
system and expressed as a fractional number.

The load average is a Unix-specific concept. On Windows, the return value is
always `[0, 0, 0]`.

#### Returns

`number`[]

▸ **loadavg**(): `number`[]

Returns an array containing the 1, 5, and 15 minute load averages.

The load average is a measure of system activity calculated by the operating
system and expressed as a fractional number.

The load average is a Unix-specific concept. On Windows, the return value is
always `[0, 0, 0]`.

#### Returns

`number`[]

___

### networkInterfaces

▸ **networkInterfaces**(): [`Dict`](https://oven-sh.github.io/bun-types/interfaces/Dict.md)<[`NetworkInterfaceInfo`](https://oven-sh.github.io/bun-types/modules/os_.md#networkinterfaceinfo)[]\>

Returns an object containing network interfaces that have been assigned a
network address.

Each key on the returned object identifies a network interface. The associated
value is an array of objects that each describe an assigned network address.

The properties available on the assigned network address object include:

```js
{
  lo: [
    {
      address: '127.0.0.1',
      netmask: '255.0.0.0',
      family: 'IPv4',
      mac: '00:00:00:00:00:00',
      internal: true,
      cidr: '127.0.0.1/8'
    },
    {
      address: '::1',
      netmask: 'ffff:ffff:ffff:ffff:ffff:ffff:ffff:ffff',
      family: 'IPv6',
      mac: '00:00:00:00:00:00',
      scopeid: 0,
      internal: true,
      cidr: '::1/128'
    }
  ],
  eth0: [
    {
      address: '192.168.1.108',
      netmask: '255.255.255.0',
      family: 'IPv4',
      mac: '01:02:03:0a:0b:0c',
      internal: false,
      cidr: '192.168.1.108/24'
    },
    {
      address: 'fe80::a00:27ff:fe4e:66a1',
      netmask: 'ffff:ffff:ffff:ffff::',
      family: 'IPv6',
      mac: '01:02:03:0a:0b:0c',
      scopeid: 1,
      internal: false,
      cidr: 'fe80::a00:27ff:fe4e:66a1/64'
    }
  ]
}
```

#### Returns

[`Dict`](https://oven-sh.github.io/bun-types/interfaces/Dict.md)<[`NetworkInterfaceInfo`](https://oven-sh.github.io/bun-types/modules/os_.md#networkinterfaceinfo)[]\>

▸ **networkInterfaces**(): [`Dict`](https://oven-sh.github.io/bun-types/interfaces/Dict.md)<[`NetworkInterfaceInfo`](https://oven-sh.github.io/bun-types/modules/os_.md#networkinterfaceinfo)[]\>

Returns an object containing network interfaces that have been assigned a
network address.

Each key on the returned object identifies a network interface. The associated
value is an array of objects that each describe an assigned network address.

The properties available on the assigned network address object include:

```js
{
  lo: [
    {
      address: '127.0.0.1',
      netmask: '255.0.0.0',
      family: 'IPv4',
      mac: '00:00:00:00:00:00',
      internal: true,
      cidr: '127.0.0.1/8'
    },
    {
      address: '::1',
      netmask: 'ffff:ffff:ffff:ffff:ffff:ffff:ffff:ffff',
      family: 'IPv6',
      mac: '00:00:00:00:00:00',
      scopeid: 0,
      internal: true,
      cidr: '::1/128'
    }
  ],
  eth0: [
    {
      address: '192.168.1.108',
      netmask: '255.255.255.0',
      family: 'IPv4',
      mac: '01:02:03:0a:0b:0c',
      internal: false,
      cidr: '192.168.1.108/24'
    },
    {
      address: 'fe80::a00:27ff:fe4e:66a1',
      netmask: 'ffff:ffff:ffff:ffff::',
      family: 'IPv6',
      mac: '01:02:03:0a:0b:0c',
      scopeid: 1,
      internal: false,
      cidr: 'fe80::a00:27ff:fe4e:66a1/64'
    }
  ]
}
```

#### Returns

[`Dict`](https://oven-sh.github.io/bun-types/interfaces/Dict.md)<[`NetworkInterfaceInfo`](https://oven-sh.github.io/bun-types/modules/os_.md#networkinterfaceinfo)[]\>

___

### platform

▸ **platform**(): `Platform`

Returns a string identifying the operating system platform for which
the Node.js binary was compiled. The value is set at compile time.
Possible values are `'aix'`, `'darwin'`, `'freebsd'`,`'linux'`,`'openbsd'`, `'sunos'`, and `'win32'`.

The return value is equivalent to `process.platform`.

#### Returns

`Platform`

▸ **platform**(): `Platform`

Returns a string identifying the operating system platform for which
the Node.js binary was compiled. The value is set at compile time.
Possible values are `'aix'`, `'darwin'`, `'freebsd'`,`'linux'`,`'openbsd'`, `'sunos'`, and `'win32'`.

The return value is equivalent to `process.platform`.

#### Returns

`Platform`

___

### release

▸ **release**(): `string`

Returns the operating system as a string.

On POSIX systems, the operating system release is determined by calling [`uname(3)`](https://linux.die.net/man/3/uname). On Windows, `GetVersionExW()` is used. See
[https://en.wikipedia.org/wiki/Uname#Examples](https://en.wikipedia.org/wiki/Uname#Examples) for more information.

#### Returns

`string`

▸ **release**(): `string`

Returns the operating system as a string.

On POSIX systems, the operating system release is determined by calling [`uname(3)`](https://linux.die.net/man/3/uname). On Windows, `GetVersionExW()` is used. See
[https://en.wikipedia.org/wiki/Uname#Examples](https://en.wikipedia.org/wiki/Uname#Examples) for more information.

#### Returns

`string`

___

### setPriority

▸ **setPriority**(`priority`): `void`

Attempts to set the scheduling priority for the process specified by `pid`. If`pid` is not provided or is `0`, the process ID of the current process is used.

The `priority` input must be an integer between `-20` (high priority) and `19`(low priority). Due to differences between Unix priority levels and Windows
priority classes, `priority` is mapped to one of six priority constants in`os.constants.priority`. When retrieving a process priority level, this range
mapping may cause the return value to be slightly different on Windows. To avoid
confusion, set `priority` to one of the priority constants.

On Windows, setting priority to `PRIORITY_HIGHEST` requires elevated user
privileges. Otherwise the set priority will be silently reduced to`PRIORITY_HIGH`.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `priority` | `number` | The scheduling priority to assign to the process. |

#### Returns

`void`

▸ **setPriority**(`pid`, `priority`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `pid` | `number` |
| `priority` | `number` |

#### Returns

`void`

▸ **setPriority**(`priority`): `void`

Attempts to set the scheduling priority for the process specified by `pid`. If`pid` is not provided or is `0`, the process ID of the current process is used.

The `priority` input must be an integer between `-20` (high priority) and `19`(low priority). Due to differences between Unix priority levels and Windows
priority classes, `priority` is mapped to one of six priority constants in`os.constants.priority`. When retrieving a process priority level, this range
mapping may cause the return value to be slightly different on Windows. To avoid
confusion, set `priority` to one of the priority constants.

On Windows, setting priority to `PRIORITY_HIGHEST` requires elevated user
privileges. Otherwise the set priority will be silently reduced to`PRIORITY_HIGH`.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `priority` | `number` | The scheduling priority to assign to the process. |

#### Returns

`void`

▸ **setPriority**(`pid`, `priority`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `pid` | `number` |
| `priority` | `number` |

#### Returns

`void`

___

### tmpdir

▸ **tmpdir**(): `string`

Returns the operating system's default directory for temporary files as a
string.

#### Returns

`string`

▸ **tmpdir**(): `string`

Returns the operating system's default directory for temporary files as a
string.

#### Returns

`string`

___

### totalmem

▸ **totalmem**(): `number`

Returns the total amount of system memory in bytes as an integer.

#### Returns

`number`

▸ **totalmem**(): `number`

Returns the total amount of system memory in bytes as an integer.

#### Returns

`number`

___

### type

▸ **type**(): `string`

Returns the operating system name as returned by [`uname(3)`](https://linux.die.net/man/3/uname). For example, it
returns `'Linux'` on Linux, `'Darwin'` on macOS, and `'Windows_NT'` on Windows.

See [https://en.wikipedia.org/wiki/Uname#Examples](https://en.wikipedia.org/wiki/Uname#Examples) for additional information
about the output of running [`uname(3)`](https://linux.die.net/man/3/uname) on various operating systems.

#### Returns

`string`

▸ **type**(): `string`

Returns the operating system name as returned by [`uname(3)`](https://linux.die.net/man/3/uname). For example, it
returns `'Linux'` on Linux, `'Darwin'` on macOS, and `'Windows_NT'` on Windows.

See [https://en.wikipedia.org/wiki/Uname#Examples](https://en.wikipedia.org/wiki/Uname#Examples) for additional information
about the output of running [`uname(3)`](https://linux.die.net/man/3/uname) on various operating systems.

#### Returns

`string`

___

### uptime

▸ **uptime**(): `number`

Returns the system uptime in number of seconds.

#### Returns

`number`

▸ **uptime**(): `number`

Returns the system uptime in number of seconds.

#### Returns

`number`

___

### userInfo

▸ **userInfo**(`options`): [`UserInfo`](https://oven-sh.github.io/bun-types/interfaces/os_.UserInfo.md)<[`Buffer`](https://oven-sh.github.io/bun-types/modules/buffer_.md#buffer)\>

Returns information about the currently effective user. On POSIX platforms,
this is typically a subset of the password file. The returned object includes
the `username`, `uid`, `gid`, `shell`, and `homedir`. On Windows, the `uid` and`gid` fields are `-1`, and `shell` is `null`.

The value of `homedir` returned by `os.userInfo()` is provided by the operating
system. This differs from the result of `os.homedir()`, which queries
environment variables for the home directory before falling back to the
operating system response.

Throws a `SystemError` if a user has no `username` or `homedir`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Object` |
| `options.encoding` | ``"buffer"`` |

#### Returns

[`UserInfo`](https://oven-sh.github.io/bun-types/interfaces/os_.UserInfo.md)<[`Buffer`](https://oven-sh.github.io/bun-types/modules/buffer_.md#buffer)\>

▸ **userInfo**(`options?`): [`UserInfo`](https://oven-sh.github.io/bun-types/interfaces/os_.UserInfo.md)<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Object` |
| `options.encoding` | `BufferEncoding` |

#### Returns

[`UserInfo`](https://oven-sh.github.io/bun-types/interfaces/os_.UserInfo.md)<`string`\>

▸ **userInfo**(`options`): [`UserInfo`](https://oven-sh.github.io/bun-types/interfaces/os_.UserInfo.md)<[`Buffer`](https://oven-sh.github.io/bun-types/modules/buffer_.md#buffer)\>

Returns information about the currently effective user. On POSIX platforms,
this is typically a subset of the password file. The returned object includes
the `username`, `uid`, `gid`, `shell`, and `homedir`. On Windows, the `uid` and`gid` fields are `-1`, and `shell` is `null`.

The value of `homedir` returned by `os.userInfo()` is provided by the operating
system. This differs from the result of `os.homedir()`, which queries
environment variables for the home directory before falling back to the
operating system response.

Throws a `SystemError` if a user has no `username` or `homedir`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Object` |
| `options.encoding` | ``"buffer"`` |

#### Returns

[`UserInfo`](https://oven-sh.github.io/bun-types/interfaces/os_.UserInfo.md)<[`Buffer`](https://oven-sh.github.io/bun-types/modules/buffer_.md#buffer)\>

▸ **userInfo**(`options?`): [`UserInfo`](https://oven-sh.github.io/bun-types/interfaces/os_.UserInfo.md)<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Object` |
| `options.encoding` | `BufferEncoding` |

#### Returns

[`UserInfo`](https://oven-sh.github.io/bun-types/interfaces/os_.UserInfo.md)<`string`\>

___

### version

▸ **version**(): `string`

Returns a string identifying the kernel version.

On POSIX systems, the operating system release is determined by calling [`uname(3)`](https://linux.die.net/man/3/uname). On Windows, `RtlGetVersion()` is used, and if it is not
available, `GetVersionExW()` will be used. See [https://en.wikipedia.org/wiki/Uname#Examples](https://en.wikipedia.org/wiki/Uname#Examples) for more information.

#### Returns

`string`

▸ **version**(): `string`

Returns a string identifying the kernel version.

On POSIX systems, the operating system release is determined by calling [`uname(3)`](https://linux.die.net/man/3/uname). On Windows, `RtlGetVersion()` is used, and if it is not
available, `GetVersionExW()` will be used. See [https://en.wikipedia.org/wiki/Uname#Examples](https://en.wikipedia.org/wiki/Uname#Examples) for more information.

#### Returns

`string`
