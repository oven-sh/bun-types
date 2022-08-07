[bun-types](https://oven-sh.github.io/bun-types/README.md) / [Exports](https://oven-sh.github.io/bun-types/modules.md) / ["os"](https://oven-sh.github.io/bun-types/modules/os_.md) / [constants](https://oven-sh.github.io/bun-types/modules/os_.constants.md) / errno

# Namespace: errno

["os"](https://oven-sh.github.io/bun-types/modules/os_.md).[constants](https://oven-sh.github.io/bun-types/modules/os_.constants.md).errno

## Table of contents

### Variables

- [E2BIG](https://oven-sh.github.io/bun-types/modules/os_.constants.errno.md#e2big)
- [EACCES](https://oven-sh.github.io/bun-types/modules/os_.constants.errno.md#eacces)
- [EADDRINUSE](https://oven-sh.github.io/bun-types/modules/os_.constants.errno.md#eaddrinuse)
- [EADDRNOTAVAIL](https://oven-sh.github.io/bun-types/modules/os_.constants.errno.md#eaddrnotavail)
- [EAFNOSUPPORT](https://oven-sh.github.io/bun-types/modules/os_.constants.errno.md#eafnosupport)
- [EAGAIN](https://oven-sh.github.io/bun-types/modules/os_.constants.errno.md#eagain)
- [EALREADY](https://oven-sh.github.io/bun-types/modules/os_.constants.errno.md#ealready)
- [EBADF](https://oven-sh.github.io/bun-types/modules/os_.constants.errno.md#ebadf)
- [EBADMSG](https://oven-sh.github.io/bun-types/modules/os_.constants.errno.md#ebadmsg)
- [EBUSY](https://oven-sh.github.io/bun-types/modules/os_.constants.errno.md#ebusy)
- [ECANCELED](https://oven-sh.github.io/bun-types/modules/os_.constants.errno.md#ecanceled)
- [ECHILD](https://oven-sh.github.io/bun-types/modules/os_.constants.errno.md#echild)
- [ECONNABORTED](https://oven-sh.github.io/bun-types/modules/os_.constants.errno.md#econnaborted)
- [ECONNREFUSED](https://oven-sh.github.io/bun-types/modules/os_.constants.errno.md#econnrefused)
- [ECONNRESET](https://oven-sh.github.io/bun-types/modules/os_.constants.errno.md#econnreset)
- [EDEADLK](https://oven-sh.github.io/bun-types/modules/os_.constants.errno.md#edeadlk)
- [EDESTADDRREQ](https://oven-sh.github.io/bun-types/modules/os_.constants.errno.md#edestaddrreq)
- [EDOM](https://oven-sh.github.io/bun-types/modules/os_.constants.errno.md#edom)
- [EDQUOT](https://oven-sh.github.io/bun-types/modules/os_.constants.errno.md#edquot)
- [EEXIST](https://oven-sh.github.io/bun-types/modules/os_.constants.errno.md#eexist)
- [EFAULT](https://oven-sh.github.io/bun-types/modules/os_.constants.errno.md#efault)
- [EFBIG](https://oven-sh.github.io/bun-types/modules/os_.constants.errno.md#efbig)
- [EHOSTUNREACH](https://oven-sh.github.io/bun-types/modules/os_.constants.errno.md#ehostunreach)
- [EIDRM](https://oven-sh.github.io/bun-types/modules/os_.constants.errno.md#eidrm)
- [EILSEQ](https://oven-sh.github.io/bun-types/modules/os_.constants.errno.md#eilseq)
- [EINPROGRESS](https://oven-sh.github.io/bun-types/modules/os_.constants.errno.md#einprogress)
- [EINTR](https://oven-sh.github.io/bun-types/modules/os_.constants.errno.md#eintr)
- [EINVAL](https://oven-sh.github.io/bun-types/modules/os_.constants.errno.md#einval)
- [EIO](https://oven-sh.github.io/bun-types/modules/os_.constants.errno.md#eio)
- [EISCONN](https://oven-sh.github.io/bun-types/modules/os_.constants.errno.md#eisconn)
- [EISDIR](https://oven-sh.github.io/bun-types/modules/os_.constants.errno.md#eisdir)
- [ELOOP](https://oven-sh.github.io/bun-types/modules/os_.constants.errno.md#eloop)
- [EMFILE](https://oven-sh.github.io/bun-types/modules/os_.constants.errno.md#emfile)
- [EMLINK](https://oven-sh.github.io/bun-types/modules/os_.constants.errno.md#emlink)
- [EMSGSIZE](https://oven-sh.github.io/bun-types/modules/os_.constants.errno.md#emsgsize)
- [EMULTIHOP](https://oven-sh.github.io/bun-types/modules/os_.constants.errno.md#emultihop)
- [ENAMETOOLONG](https://oven-sh.github.io/bun-types/modules/os_.constants.errno.md#enametoolong)
- [ENETDOWN](https://oven-sh.github.io/bun-types/modules/os_.constants.errno.md#enetdown)
- [ENETRESET](https://oven-sh.github.io/bun-types/modules/os_.constants.errno.md#enetreset)
- [ENETUNREACH](https://oven-sh.github.io/bun-types/modules/os_.constants.errno.md#enetunreach)
- [ENFILE](https://oven-sh.github.io/bun-types/modules/os_.constants.errno.md#enfile)
- [ENOBUFS](https://oven-sh.github.io/bun-types/modules/os_.constants.errno.md#enobufs)
- [ENODATA](https://oven-sh.github.io/bun-types/modules/os_.constants.errno.md#enodata)
- [ENODEV](https://oven-sh.github.io/bun-types/modules/os_.constants.errno.md#enodev)
- [ENOENT](https://oven-sh.github.io/bun-types/modules/os_.constants.errno.md#enoent)
- [ENOEXEC](https://oven-sh.github.io/bun-types/modules/os_.constants.errno.md#enoexec)
- [ENOLCK](https://oven-sh.github.io/bun-types/modules/os_.constants.errno.md#enolck)
- [ENOLINK](https://oven-sh.github.io/bun-types/modules/os_.constants.errno.md#enolink)
- [ENOMEM](https://oven-sh.github.io/bun-types/modules/os_.constants.errno.md#enomem)
- [ENOMSG](https://oven-sh.github.io/bun-types/modules/os_.constants.errno.md#enomsg)
- [ENOPROTOOPT](https://oven-sh.github.io/bun-types/modules/os_.constants.errno.md#enoprotoopt)
- [ENOSPC](https://oven-sh.github.io/bun-types/modules/os_.constants.errno.md#enospc)
- [ENOSR](https://oven-sh.github.io/bun-types/modules/os_.constants.errno.md#enosr)
- [ENOSTR](https://oven-sh.github.io/bun-types/modules/os_.constants.errno.md#enostr)
- [ENOSYS](https://oven-sh.github.io/bun-types/modules/os_.constants.errno.md#enosys)
- [ENOTCONN](https://oven-sh.github.io/bun-types/modules/os_.constants.errno.md#enotconn)
- [ENOTDIR](https://oven-sh.github.io/bun-types/modules/os_.constants.errno.md#enotdir)
- [ENOTEMPTY](https://oven-sh.github.io/bun-types/modules/os_.constants.errno.md#enotempty)
- [ENOTSOCK](https://oven-sh.github.io/bun-types/modules/os_.constants.errno.md#enotsock)
- [ENOTSUP](https://oven-sh.github.io/bun-types/modules/os_.constants.errno.md#enotsup)
- [ENOTTY](https://oven-sh.github.io/bun-types/modules/os_.constants.errno.md#enotty)
- [ENXIO](https://oven-sh.github.io/bun-types/modules/os_.constants.errno.md#enxio)
- [EOPNOTSUPP](https://oven-sh.github.io/bun-types/modules/os_.constants.errno.md#eopnotsupp)
- [EOVERFLOW](https://oven-sh.github.io/bun-types/modules/os_.constants.errno.md#eoverflow)
- [EPERM](https://oven-sh.github.io/bun-types/modules/os_.constants.errno.md#eperm)
- [EPIPE](https://oven-sh.github.io/bun-types/modules/os_.constants.errno.md#epipe)
- [EPROTO](https://oven-sh.github.io/bun-types/modules/os_.constants.errno.md#eproto)
- [EPROTONOSUPPORT](https://oven-sh.github.io/bun-types/modules/os_.constants.errno.md#eprotonosupport)
- [EPROTOTYPE](https://oven-sh.github.io/bun-types/modules/os_.constants.errno.md#eprototype)
- [ERANGE](https://oven-sh.github.io/bun-types/modules/os_.constants.errno.md#erange)
- [EROFS](https://oven-sh.github.io/bun-types/modules/os_.constants.errno.md#erofs)
- [ESPIPE](https://oven-sh.github.io/bun-types/modules/os_.constants.errno.md#espipe)
- [ESRCH](https://oven-sh.github.io/bun-types/modules/os_.constants.errno.md#esrch)
- [ESTALE](https://oven-sh.github.io/bun-types/modules/os_.constants.errno.md#estale)
- [ETIME](https://oven-sh.github.io/bun-types/modules/os_.constants.errno.md#etime)
- [ETIMEDOUT](https://oven-sh.github.io/bun-types/modules/os_.constants.errno.md#etimedout)
- [ETXTBSY](https://oven-sh.github.io/bun-types/modules/os_.constants.errno.md#etxtbsy)
- [EWOULDBLOCK](https://oven-sh.github.io/bun-types/modules/os_.constants.errno.md#ewouldblock)
- [EXDEV](https://oven-sh.github.io/bun-types/modules/os_.constants.errno.md#exdev)
- [WSAEACCES](https://oven-sh.github.io/bun-types/modules/os_.constants.errno.md#wsaeacces)
- [WSAEADDRINUSE](https://oven-sh.github.io/bun-types/modules/os_.constants.errno.md#wsaeaddrinuse)
- [WSAEADDRNOTAVAIL](https://oven-sh.github.io/bun-types/modules/os_.constants.errno.md#wsaeaddrnotavail)
- [WSAEAFNOSUPPORT](https://oven-sh.github.io/bun-types/modules/os_.constants.errno.md#wsaeafnosupport)
- [WSAEALREADY](https://oven-sh.github.io/bun-types/modules/os_.constants.errno.md#wsaealready)
- [WSAEBADF](https://oven-sh.github.io/bun-types/modules/os_.constants.errno.md#wsaebadf)
- [WSAECANCELLED](https://oven-sh.github.io/bun-types/modules/os_.constants.errno.md#wsaecancelled)
- [WSAECONNABORTED](https://oven-sh.github.io/bun-types/modules/os_.constants.errno.md#wsaeconnaborted)
- [WSAECONNREFUSED](https://oven-sh.github.io/bun-types/modules/os_.constants.errno.md#wsaeconnrefused)
- [WSAECONNRESET](https://oven-sh.github.io/bun-types/modules/os_.constants.errno.md#wsaeconnreset)
- [WSAEDESTADDRREQ](https://oven-sh.github.io/bun-types/modules/os_.constants.errno.md#wsaedestaddrreq)
- [WSAEDISCON](https://oven-sh.github.io/bun-types/modules/os_.constants.errno.md#wsaediscon)
- [WSAEDQUOT](https://oven-sh.github.io/bun-types/modules/os_.constants.errno.md#wsaedquot)
- [WSAEFAULT](https://oven-sh.github.io/bun-types/modules/os_.constants.errno.md#wsaefault)
- [WSAEHOSTDOWN](https://oven-sh.github.io/bun-types/modules/os_.constants.errno.md#wsaehostdown)
- [WSAEHOSTUNREACH](https://oven-sh.github.io/bun-types/modules/os_.constants.errno.md#wsaehostunreach)
- [WSAEINPROGRESS](https://oven-sh.github.io/bun-types/modules/os_.constants.errno.md#wsaeinprogress)
- [WSAEINTR](https://oven-sh.github.io/bun-types/modules/os_.constants.errno.md#wsaeintr)
- [WSAEINVAL](https://oven-sh.github.io/bun-types/modules/os_.constants.errno.md#wsaeinval)
- [WSAEINVALIDPROCTABLE](https://oven-sh.github.io/bun-types/modules/os_.constants.errno.md#wsaeinvalidproctable)
- [WSAEINVALIDPROVIDER](https://oven-sh.github.io/bun-types/modules/os_.constants.errno.md#wsaeinvalidprovider)
- [WSAEISCONN](https://oven-sh.github.io/bun-types/modules/os_.constants.errno.md#wsaeisconn)
- [WSAELOOP](https://oven-sh.github.io/bun-types/modules/os_.constants.errno.md#wsaeloop)
- [WSAEMFILE](https://oven-sh.github.io/bun-types/modules/os_.constants.errno.md#wsaemfile)
- [WSAEMSGSIZE](https://oven-sh.github.io/bun-types/modules/os_.constants.errno.md#wsaemsgsize)
- [WSAENAMETOOLONG](https://oven-sh.github.io/bun-types/modules/os_.constants.errno.md#wsaenametoolong)
- [WSAENETDOWN](https://oven-sh.github.io/bun-types/modules/os_.constants.errno.md#wsaenetdown)
- [WSAENETRESET](https://oven-sh.github.io/bun-types/modules/os_.constants.errno.md#wsaenetreset)
- [WSAENETUNREACH](https://oven-sh.github.io/bun-types/modules/os_.constants.errno.md#wsaenetunreach)
- [WSAENOBUFS](https://oven-sh.github.io/bun-types/modules/os_.constants.errno.md#wsaenobufs)
- [WSAENOMORE](https://oven-sh.github.io/bun-types/modules/os_.constants.errno.md#wsaenomore)
- [WSAENOPROTOOPT](https://oven-sh.github.io/bun-types/modules/os_.constants.errno.md#wsaenoprotoopt)
- [WSAENOTCONN](https://oven-sh.github.io/bun-types/modules/os_.constants.errno.md#wsaenotconn)
- [WSAENOTEMPTY](https://oven-sh.github.io/bun-types/modules/os_.constants.errno.md#wsaenotempty)
- [WSAENOTSOCK](https://oven-sh.github.io/bun-types/modules/os_.constants.errno.md#wsaenotsock)
- [WSAEOPNOTSUPP](https://oven-sh.github.io/bun-types/modules/os_.constants.errno.md#wsaeopnotsupp)
- [WSAEPFNOSUPPORT](https://oven-sh.github.io/bun-types/modules/os_.constants.errno.md#wsaepfnosupport)
- [WSAEPROCLIM](https://oven-sh.github.io/bun-types/modules/os_.constants.errno.md#wsaeproclim)
- [WSAEPROTONOSUPPORT](https://oven-sh.github.io/bun-types/modules/os_.constants.errno.md#wsaeprotonosupport)
- [WSAEPROTOTYPE](https://oven-sh.github.io/bun-types/modules/os_.constants.errno.md#wsaeprototype)
- [WSAEPROVIDERFAILEDINIT](https://oven-sh.github.io/bun-types/modules/os_.constants.errno.md#wsaeproviderfailedinit)
- [WSAEREFUSED](https://oven-sh.github.io/bun-types/modules/os_.constants.errno.md#wsaerefused)
- [WSAEREMOTE](https://oven-sh.github.io/bun-types/modules/os_.constants.errno.md#wsaeremote)
- [WSAESHUTDOWN](https://oven-sh.github.io/bun-types/modules/os_.constants.errno.md#wsaeshutdown)
- [WSAESOCKTNOSUPPORT](https://oven-sh.github.io/bun-types/modules/os_.constants.errno.md#wsaesocktnosupport)
- [WSAESTALE](https://oven-sh.github.io/bun-types/modules/os_.constants.errno.md#wsaestale)
- [WSAETIMEDOUT](https://oven-sh.github.io/bun-types/modules/os_.constants.errno.md#wsaetimedout)
- [WSAETOOMANYREFS](https://oven-sh.github.io/bun-types/modules/os_.constants.errno.md#wsaetoomanyrefs)
- [WSAEUSERS](https://oven-sh.github.io/bun-types/modules/os_.constants.errno.md#wsaeusers)
- [WSAEWOULDBLOCK](https://oven-sh.github.io/bun-types/modules/os_.constants.errno.md#wsaewouldblock)
- [WSANOTINITIALISED](https://oven-sh.github.io/bun-types/modules/os_.constants.errno.md#wsanotinitialised)
- [WSASERVICE\_NOT\_FOUND](https://oven-sh.github.io/bun-types/modules/os_.constants.errno.md#wsaservice_not_found)
- [WSASYSCALLFAILURE](https://oven-sh.github.io/bun-types/modules/os_.constants.errno.md#wsasyscallfailure)
- [WSASYSNOTREADY](https://oven-sh.github.io/bun-types/modules/os_.constants.errno.md#wsasysnotready)
- [WSATYPE\_NOT\_FOUND](https://oven-sh.github.io/bun-types/modules/os_.constants.errno.md#wsatype_not_found)
- [WSAVERNOTSUPPORTED](https://oven-sh.github.io/bun-types/modules/os_.constants.errno.md#wsavernotsupported)
- [WSA\_E\_CANCELLED](https://oven-sh.github.io/bun-types/modules/os_.constants.errno.md#wsa_e_cancelled)
- [WSA\_E\_NO\_MORE](https://oven-sh.github.io/bun-types/modules/os_.constants.errno.md#wsa_e_no_more)

## Variables

### E2BIG

• `Const` **E2BIG**: `number`

___

### EACCES

• `Const` **EACCES**: `number`

___

### EADDRINUSE

• `Const` **EADDRINUSE**: `number`

___

### EADDRNOTAVAIL

• `Const` **EADDRNOTAVAIL**: `number`

___

### EAFNOSUPPORT

• `Const` **EAFNOSUPPORT**: `number`

___

### EAGAIN

• `Const` **EAGAIN**: `number`

___

### EALREADY

• `Const` **EALREADY**: `number`

___

### EBADF

• `Const` **EBADF**: `number`

___

### EBADMSG

• `Const` **EBADMSG**: `number`

___

### EBUSY

• `Const` **EBUSY**: `number`

___

### ECANCELED

• `Const` **ECANCELED**: `number`

___

### ECHILD

• `Const` **ECHILD**: `number`

___

### ECONNABORTED

• `Const` **ECONNABORTED**: `number`

___

### ECONNREFUSED

• `Const` **ECONNREFUSED**: `number`

___

### ECONNRESET

• `Const` **ECONNRESET**: `number`

___

### EDEADLK

• `Const` **EDEADLK**: `number`

___

### EDESTADDRREQ

• `Const` **EDESTADDRREQ**: `number`

___

### EDOM

• `Const` **EDOM**: `number`

___

### EDQUOT

• `Const` **EDQUOT**: `number`

___

### EEXIST

• `Const` **EEXIST**: `number`

___

### EFAULT

• `Const` **EFAULT**: `number`

___

### EFBIG

• `Const` **EFBIG**: `number`

___

### EHOSTUNREACH

• `Const` **EHOSTUNREACH**: `number`

___

### EIDRM

• `Const` **EIDRM**: `number`

___

### EILSEQ

• `Const` **EILSEQ**: `number`

___

### EINPROGRESS

• `Const` **EINPROGRESS**: `number`

___

### EINTR

• `Const` **EINTR**: `number`

___

### EINVAL

• `Const` **EINVAL**: `number`

___

### EIO

• `Const` **EIO**: `number`

___

### EISCONN

• `Const` **EISCONN**: `number`

___

### EISDIR

• `Const` **EISDIR**: `number`

___

### ELOOP

• `Const` **ELOOP**: `number`

___

### EMFILE

• `Const` **EMFILE**: `number`

___

### EMLINK

• `Const` **EMLINK**: `number`

___

### EMSGSIZE

• `Const` **EMSGSIZE**: `number`

___

### EMULTIHOP

• `Const` **EMULTIHOP**: `number`

___

### ENAMETOOLONG

• `Const` **ENAMETOOLONG**: `number`

___

### ENETDOWN

• `Const` **ENETDOWN**: `number`

___

### ENETRESET

• `Const` **ENETRESET**: `number`

___

### ENETUNREACH

• `Const` **ENETUNREACH**: `number`

___

### ENFILE

• `Const` **ENFILE**: `number`

___

### ENOBUFS

• `Const` **ENOBUFS**: `number`

___

### ENODATA

• `Const` **ENODATA**: `number`

___

### ENODEV

• `Const` **ENODEV**: `number`

___

### ENOENT

• `Const` **ENOENT**: `number`

___

### ENOEXEC

• `Const` **ENOEXEC**: `number`

___

### ENOLCK

• `Const` **ENOLCK**: `number`

___

### ENOLINK

• `Const` **ENOLINK**: `number`

___

### ENOMEM

• `Const` **ENOMEM**: `number`

___

### ENOMSG

• `Const` **ENOMSG**: `number`

___

### ENOPROTOOPT

• `Const` **ENOPROTOOPT**: `number`

___

### ENOSPC

• `Const` **ENOSPC**: `number`

___

### ENOSR

• `Const` **ENOSR**: `number`

___

### ENOSTR

• `Const` **ENOSTR**: `number`

___

### ENOSYS

• `Const` **ENOSYS**: `number`

___

### ENOTCONN

• `Const` **ENOTCONN**: `number`

___

### ENOTDIR

• `Const` **ENOTDIR**: `number`

___

### ENOTEMPTY

• `Const` **ENOTEMPTY**: `number`

___

### ENOTSOCK

• `Const` **ENOTSOCK**: `number`

___

### ENOTSUP

• `Const` **ENOTSUP**: `number`

___

### ENOTTY

• `Const` **ENOTTY**: `number`

___

### ENXIO

• `Const` **ENXIO**: `number`

___

### EOPNOTSUPP

• `Const` **EOPNOTSUPP**: `number`

___

### EOVERFLOW

• `Const` **EOVERFLOW**: `number`

___

### EPERM

• `Const` **EPERM**: `number`

___

### EPIPE

• `Const` **EPIPE**: `number`

___

### EPROTO

• `Const` **EPROTO**: `number`

___

### EPROTONOSUPPORT

• `Const` **EPROTONOSUPPORT**: `number`

___

### EPROTOTYPE

• `Const` **EPROTOTYPE**: `number`

___

### ERANGE

• `Const` **ERANGE**: `number`

___

### EROFS

• `Const` **EROFS**: `number`

___

### ESPIPE

• `Const` **ESPIPE**: `number`

___

### ESRCH

• `Const` **ESRCH**: `number`

___

### ESTALE

• `Const` **ESTALE**: `number`

___

### ETIME

• `Const` **ETIME**: `number`

___

### ETIMEDOUT

• `Const` **ETIMEDOUT**: `number`

___

### ETXTBSY

• `Const` **ETXTBSY**: `number`

___

### EWOULDBLOCK

• `Const` **EWOULDBLOCK**: `number`

___

### EXDEV

• `Const` **EXDEV**: `number`

___

### WSAEACCES

• `Const` **WSAEACCES**: `number`

___

### WSAEADDRINUSE

• `Const` **WSAEADDRINUSE**: `number`

___

### WSAEADDRNOTAVAIL

• `Const` **WSAEADDRNOTAVAIL**: `number`

___

### WSAEAFNOSUPPORT

• `Const` **WSAEAFNOSUPPORT**: `number`

___

### WSAEALREADY

• `Const` **WSAEALREADY**: `number`

___

### WSAEBADF

• `Const` **WSAEBADF**: `number`

___

### WSAECANCELLED

• `Const` **WSAECANCELLED**: `number`

___

### WSAECONNABORTED

• `Const` **WSAECONNABORTED**: `number`

___

### WSAECONNREFUSED

• `Const` **WSAECONNREFUSED**: `number`

___

### WSAECONNRESET

• `Const` **WSAECONNRESET**: `number`

___

### WSAEDESTADDRREQ

• `Const` **WSAEDESTADDRREQ**: `number`

___

### WSAEDISCON

• `Const` **WSAEDISCON**: `number`

___

### WSAEDQUOT

• `Const` **WSAEDQUOT**: `number`

___

### WSAEFAULT

• `Const` **WSAEFAULT**: `number`

___

### WSAEHOSTDOWN

• `Const` **WSAEHOSTDOWN**: `number`

___

### WSAEHOSTUNREACH

• `Const` **WSAEHOSTUNREACH**: `number`

___

### WSAEINPROGRESS

• `Const` **WSAEINPROGRESS**: `number`

___

### WSAEINTR

• `Const` **WSAEINTR**: `number`

___

### WSAEINVAL

• `Const` **WSAEINVAL**: `number`

___

### WSAEINVALIDPROCTABLE

• `Const` **WSAEINVALIDPROCTABLE**: `number`

___

### WSAEINVALIDPROVIDER

• `Const` **WSAEINVALIDPROVIDER**: `number`

___

### WSAEISCONN

• `Const` **WSAEISCONN**: `number`

___

### WSAELOOP

• `Const` **WSAELOOP**: `number`

___

### WSAEMFILE

• `Const` **WSAEMFILE**: `number`

___

### WSAEMSGSIZE

• `Const` **WSAEMSGSIZE**: `number`

___

### WSAENAMETOOLONG

• `Const` **WSAENAMETOOLONG**: `number`

___

### WSAENETDOWN

• `Const` **WSAENETDOWN**: `number`

___

### WSAENETRESET

• `Const` **WSAENETRESET**: `number`

___

### WSAENETUNREACH

• `Const` **WSAENETUNREACH**: `number`

___

### WSAENOBUFS

• `Const` **WSAENOBUFS**: `number`

___

### WSAENOMORE

• `Const` **WSAENOMORE**: `number`

___

### WSAENOPROTOOPT

• `Const` **WSAENOPROTOOPT**: `number`

___

### WSAENOTCONN

• `Const` **WSAENOTCONN**: `number`

___

### WSAENOTEMPTY

• `Const` **WSAENOTEMPTY**: `number`

___

### WSAENOTSOCK

• `Const` **WSAENOTSOCK**: `number`

___

### WSAEOPNOTSUPP

• `Const` **WSAEOPNOTSUPP**: `number`

___

### WSAEPFNOSUPPORT

• `Const` **WSAEPFNOSUPPORT**: `number`

___

### WSAEPROCLIM

• `Const` **WSAEPROCLIM**: `number`

___

### WSAEPROTONOSUPPORT

• `Const` **WSAEPROTONOSUPPORT**: `number`

___

### WSAEPROTOTYPE

• `Const` **WSAEPROTOTYPE**: `number`

___

### WSAEPROVIDERFAILEDINIT

• `Const` **WSAEPROVIDERFAILEDINIT**: `number`

___

### WSAEREFUSED

• `Const` **WSAEREFUSED**: `number`

___

### WSAEREMOTE

• `Const` **WSAEREMOTE**: `number`

___

### WSAESHUTDOWN

• `Const` **WSAESHUTDOWN**: `number`

___

### WSAESOCKTNOSUPPORT

• `Const` **WSAESOCKTNOSUPPORT**: `number`

___

### WSAESTALE

• `Const` **WSAESTALE**: `number`

___

### WSAETIMEDOUT

• `Const` **WSAETIMEDOUT**: `number`

___

### WSAETOOMANYREFS

• `Const` **WSAETOOMANYREFS**: `number`

___

### WSAEUSERS

• `Const` **WSAEUSERS**: `number`

___

### WSAEWOULDBLOCK

• `Const` **WSAEWOULDBLOCK**: `number`

___

### WSANOTINITIALISED

• `Const` **WSANOTINITIALISED**: `number`

___

### WSASERVICE\_NOT\_FOUND

• `Const` **WSASERVICE\_NOT\_FOUND**: `number`

___

### WSASYSCALLFAILURE

• `Const` **WSASYSCALLFAILURE**: `number`

___

### WSASYSNOTREADY

• `Const` **WSASYSNOTREADY**: `number`

___

### WSATYPE\_NOT\_FOUND

• `Const` **WSATYPE\_NOT\_FOUND**: `number`

___

### WSAVERNOTSUPPORTED

• `Const` **WSAVERNOTSUPPORTED**: `number`

___

### WSA\_E\_CANCELLED

• `Const` **WSA\_E\_CANCELLED**: `number`

___

### WSA\_E\_NO\_MORE

• `Const` **WSA\_E\_NO\_MORE**: `number`
