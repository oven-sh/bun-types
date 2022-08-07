[bun-types](https://oven-sh.github.io/bun-types/README.md) / [Exports](https://oven-sh.github.io/bun-types/modules.md) / ["fs"](https://oven-sh.github.io/bun-types/modules/fs_.md) / constants

# Namespace: constants

["fs"](https://oven-sh.github.io/bun-types/modules/fs_.md).constants

## Table of contents

### Variables

- [COPYFILE\_EXCL](https://oven-sh.github.io/bun-types/modules/fs_.constants.md#copyfile_excl)
- [COPYFILE\_FICLONE](https://oven-sh.github.io/bun-types/modules/fs_.constants.md#copyfile_ficlone)
- [COPYFILE\_FICLONE\_FORCE](https://oven-sh.github.io/bun-types/modules/fs_.constants.md#copyfile_ficlone_force)
- [F\_OK](https://oven-sh.github.io/bun-types/modules/fs_.constants.md#f_ok)
- [O\_APPEND](https://oven-sh.github.io/bun-types/modules/fs_.constants.md#o_append)
- [O\_CREAT](https://oven-sh.github.io/bun-types/modules/fs_.constants.md#o_creat)
- [O\_DIRECT](https://oven-sh.github.io/bun-types/modules/fs_.constants.md#o_direct)
- [O\_DIRECTORY](https://oven-sh.github.io/bun-types/modules/fs_.constants.md#o_directory)
- [O\_DSYNC](https://oven-sh.github.io/bun-types/modules/fs_.constants.md#o_dsync)
- [O\_EXCL](https://oven-sh.github.io/bun-types/modules/fs_.constants.md#o_excl)
- [O\_NOATIME](https://oven-sh.github.io/bun-types/modules/fs_.constants.md#o_noatime)
- [O\_NOCTTY](https://oven-sh.github.io/bun-types/modules/fs_.constants.md#o_noctty)
- [O\_NOFOLLOW](https://oven-sh.github.io/bun-types/modules/fs_.constants.md#o_nofollow)
- [O\_NONBLOCK](https://oven-sh.github.io/bun-types/modules/fs_.constants.md#o_nonblock)
- [O\_RDONLY](https://oven-sh.github.io/bun-types/modules/fs_.constants.md#o_rdonly)
- [O\_RDWR](https://oven-sh.github.io/bun-types/modules/fs_.constants.md#o_rdwr)
- [O\_SYMLINK](https://oven-sh.github.io/bun-types/modules/fs_.constants.md#o_symlink)
- [O\_SYNC](https://oven-sh.github.io/bun-types/modules/fs_.constants.md#o_sync)
- [O\_TRUNC](https://oven-sh.github.io/bun-types/modules/fs_.constants.md#o_trunc)
- [O\_WRONLY](https://oven-sh.github.io/bun-types/modules/fs_.constants.md#o_wronly)
- [R\_OK](https://oven-sh.github.io/bun-types/modules/fs_.constants.md#r_ok)
- [S\_IFBLK](https://oven-sh.github.io/bun-types/modules/fs_.constants.md#s_ifblk)
- [S\_IFCHR](https://oven-sh.github.io/bun-types/modules/fs_.constants.md#s_ifchr)
- [S\_IFDIR](https://oven-sh.github.io/bun-types/modules/fs_.constants.md#s_ifdir)
- [S\_IFIFO](https://oven-sh.github.io/bun-types/modules/fs_.constants.md#s_ififo)
- [S\_IFLNK](https://oven-sh.github.io/bun-types/modules/fs_.constants.md#s_iflnk)
- [S\_IFMT](https://oven-sh.github.io/bun-types/modules/fs_.constants.md#s_ifmt)
- [S\_IFREG](https://oven-sh.github.io/bun-types/modules/fs_.constants.md#s_ifreg)
- [S\_IFSOCK](https://oven-sh.github.io/bun-types/modules/fs_.constants.md#s_ifsock)
- [S\_IRGRP](https://oven-sh.github.io/bun-types/modules/fs_.constants.md#s_irgrp)
- [S\_IROTH](https://oven-sh.github.io/bun-types/modules/fs_.constants.md#s_iroth)
- [S\_IRUSR](https://oven-sh.github.io/bun-types/modules/fs_.constants.md#s_irusr)
- [S\_IRWXG](https://oven-sh.github.io/bun-types/modules/fs_.constants.md#s_irwxg)
- [S\_IRWXO](https://oven-sh.github.io/bun-types/modules/fs_.constants.md#s_irwxo)
- [S\_IRWXU](https://oven-sh.github.io/bun-types/modules/fs_.constants.md#s_irwxu)
- [S\_IWGRP](https://oven-sh.github.io/bun-types/modules/fs_.constants.md#s_iwgrp)
- [S\_IWOTH](https://oven-sh.github.io/bun-types/modules/fs_.constants.md#s_iwoth)
- [S\_IWUSR](https://oven-sh.github.io/bun-types/modules/fs_.constants.md#s_iwusr)
- [S\_IXGRP](https://oven-sh.github.io/bun-types/modules/fs_.constants.md#s_ixgrp)
- [S\_IXOTH](https://oven-sh.github.io/bun-types/modules/fs_.constants.md#s_ixoth)
- [S\_IXUSR](https://oven-sh.github.io/bun-types/modules/fs_.constants.md#s_ixusr)
- [UV\_FS\_O\_FILEMAP](https://oven-sh.github.io/bun-types/modules/fs_.constants.md#uv_fs_o_filemap)
- [W\_OK](https://oven-sh.github.io/bun-types/modules/fs_.constants.md#w_ok)
- [X\_OK](https://oven-sh.github.io/bun-types/modules/fs_.constants.md#x_ok)

## Variables

### COPYFILE\_EXCL

• **COPYFILE\_EXCL**: `number`

Constant for fs.copyFile. Flag indicating the destination file should not be overwritten if it already exists.

___

### COPYFILE\_FICLONE

• **COPYFILE\_FICLONE**: `number`

Constant for fs.copyFile. copy operation will attempt to create a copy-on-write reflink.
If the underlying platform does not support copy-on-write, then a fallback copy mechanism is used.

___

### COPYFILE\_FICLONE\_FORCE

• **COPYFILE\_FICLONE\_FORCE**: `number`

Constant for fs.copyFile. Copy operation will attempt to create a copy-on-write reflink.
If the underlying platform does not support copy-on-write, then the operation will fail with an error.

___

### F\_OK

• **F\_OK**: `number`

Constant for fs.access(). File is visible to the calling process.

___

### O\_APPEND

• **O\_APPEND**: `number`

Constant for fs.open(). Flag indicating that data will be appended to the end of the file.

___

### O\_CREAT

• **O\_CREAT**: `number`

Constant for fs.open(). Flag indicating to create the file if it does not already exist.

___

### O\_DIRECT

• **O\_DIRECT**: `number`

Constant for fs.open(). When set, an attempt will be made to minimize caching effects of file I/O.

___

### O\_DIRECTORY

• **O\_DIRECTORY**: `number`

Constant for fs.open(). Flag indicating that the open should fail if the path is not a directory.

___

### O\_DSYNC

• **O\_DSYNC**: `number`

Constant for fs.open(). Flag indicating that the file is opened for synchronous I/O with write operations waiting for data integrity.

___

### O\_EXCL

• **O\_EXCL**: `number`

Constant for fs.open(). Flag indicating that opening a file should fail if the O_CREAT flag is set and the file already exists.

___

### O\_NOATIME

• **O\_NOATIME**: `number`

constant for fs.open().
Flag indicating reading accesses to the file system will no longer result in
an update to the atime information associated with the file.
This flag is available on Linux operating systems only.

___

### O\_NOCTTY

• **O\_NOCTTY**: `number`

Constant for fs.open(). Flag indicating that if path identifies a terminal device,
opening the path shall not cause that terminal to become the controlling terminal for the process
(if the process does not already have one).

___

### O\_NOFOLLOW

• **O\_NOFOLLOW**: `number`

Constant for fs.open(). Flag indicating that the open should fail if the path is a symbolic link.

___

### O\_NONBLOCK

• **O\_NONBLOCK**: `number`

Constant for fs.open(). Flag indicating to open the file in nonblocking mode when possible.

___

### O\_RDONLY

• **O\_RDONLY**: `number`

Constant for fs.open(). Flag indicating to open a file for read-only access.

___

### O\_RDWR

• **O\_RDWR**: `number`

Constant for fs.open(). Flag indicating to open a file for read-write access.

___

### O\_SYMLINK

• **O\_SYMLINK**: `number`

Constant for fs.open(). Flag indicating to open the symbolic link itself rather than the resource it is pointing to.

___

### O\_SYNC

• **O\_SYNC**: `number`

Constant for fs.open(). Flag indicating that the file is opened for synchronous I/O.

___

### O\_TRUNC

• **O\_TRUNC**: `number`

Constant for fs.open(). Flag indicating that if the file exists and is a regular file, and the file is opened successfully for write access, its length shall be truncated to zero.

___

### O\_WRONLY

• **O\_WRONLY**: `number`

Constant for fs.open(). Flag indicating to open a file for write-only access.

___

### R\_OK

• **R\_OK**: `number`

Constant for fs.access(). File can be read by the calling process.

___

### S\_IFBLK

• **S\_IFBLK**: `number`

Constant for fs.Stats mode property for determining a file's type. File type constant for a block-oriented device file.

___

### S\_IFCHR

• **S\_IFCHR**: `number`

Constant for fs.Stats mode property for determining a file's type. File type constant for a character-oriented device file.

___

### S\_IFDIR

• **S\_IFDIR**: `number`

Constant for fs.Stats mode property for determining a file's type. File type constant for a directory.

___

### S\_IFIFO

• **S\_IFIFO**: `number`

Constant for fs.Stats mode property for determining a file's type. File type constant for a FIFO/pipe.

___

### S\_IFLNK

• **S\_IFLNK**: `number`

Constant for fs.Stats mode property for determining a file's type. File type constant for a symbolic link.

___

### S\_IFMT

• **S\_IFMT**: `number`

Constant for fs.Stats mode property for determining a file's type. Bit mask used to extract the file type code.

___

### S\_IFREG

• **S\_IFREG**: `number`

Constant for fs.Stats mode property for determining a file's type. File type constant for a regular file.

___

### S\_IFSOCK

• **S\_IFSOCK**: `number`

Constant for fs.Stats mode property for determining a file's type. File type constant for a socket.

___

### S\_IRGRP

• **S\_IRGRP**: `number`

Constant for fs.Stats mode property for determining access permissions for a file. File mode indicating readable by group.

___

### S\_IROTH

• **S\_IROTH**: `number`

Constant for fs.Stats mode property for determining access permissions for a file. File mode indicating readable by others.

___

### S\_IRUSR

• **S\_IRUSR**: `number`

Constant for fs.Stats mode property for determining access permissions for a file. File mode indicating readable by owner.

___

### S\_IRWXG

• **S\_IRWXG**: `number`

Constant for fs.Stats mode property for determining access permissions for a file. File mode indicating readable, writable and executable by group.

___

### S\_IRWXO

• **S\_IRWXO**: `number`

Constant for fs.Stats mode property for determining access permissions for a file. File mode indicating readable, writable and executable by others.

___

### S\_IRWXU

• **S\_IRWXU**: `number`

Constant for fs.Stats mode property for determining access permissions for a file. File mode indicating readable, writable and executable by owner.

___

### S\_IWGRP

• **S\_IWGRP**: `number`

Constant for fs.Stats mode property for determining access permissions for a file. File mode indicating writable by group.

___

### S\_IWOTH

• **S\_IWOTH**: `number`

Constant for fs.Stats mode property for determining access permissions for a file. File mode indicating writable by others.

___

### S\_IWUSR

• **S\_IWUSR**: `number`

Constant for fs.Stats mode property for determining access permissions for a file. File mode indicating writable by owner.

___

### S\_IXGRP

• **S\_IXGRP**: `number`

Constant for fs.Stats mode property for determining access permissions for a file. File mode indicating executable by group.

___

### S\_IXOTH

• **S\_IXOTH**: `number`

Constant for fs.Stats mode property for determining access permissions for a file. File mode indicating executable by others.

___

### S\_IXUSR

• **S\_IXUSR**: `number`

Constant for fs.Stats mode property for determining access permissions for a file. File mode indicating executable by owner.

___

### UV\_FS\_O\_FILEMAP

• **UV\_FS\_O\_FILEMAP**: `number`

When set, a memory file mapping is used to access the file. This flag
is available on Windows operating systems only. On other operating systems,
this flag is ignored.

___

### W\_OK

• **W\_OK**: `number`

Constant for fs.access(). File can be written by the calling process.

___

### X\_OK

• **X\_OK**: `number`

Constant for fs.access(). File can be executed by the calling process.
