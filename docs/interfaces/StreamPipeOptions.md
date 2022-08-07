[bun-types](https://oven-sh.github.io/bun-types/README.md) / [Exports](https://oven-sh.github.io/bun-types/modules.md) / StreamPipeOptions

# Interface: StreamPipeOptions

## Table of contents

### Properties

- [preventAbort](https://oven-sh.github.io/bun-types/interfaces/StreamPipeOptions.md#preventabort)
- [preventCancel](https://oven-sh.github.io/bun-types/interfaces/StreamPipeOptions.md#preventcancel)
- [preventClose](https://oven-sh.github.io/bun-types/interfaces/StreamPipeOptions.md#preventclose)
- [signal](https://oven-sh.github.io/bun-types/interfaces/StreamPipeOptions.md#signal)

## Properties

### preventAbort

• `Optional` **preventAbort**: `boolean`

___

### preventCancel

• `Optional` **preventCancel**: `boolean`

___

### preventClose

• `Optional` **preventClose**: `boolean`

Pipes this readable stream to a given writable stream destination. The way in which the piping process behaves under various error conditions can be customized with a number of passed options. It returns a promise that fulfills when the piping process completes successfully, or rejects if any errors were encountered.

Piping a stream will lock it for the duration of the pipe, preventing any other consumer from acquiring a reader.

Errors and closures of the source and destination streams propagate as follows:

An error in this source readable stream will abort destination, unless preventAbort is truthy. The returned promise will be rejected with the source's error, or with any error that occurs during aborting the destination.

An error in destination will cancel this source readable stream, unless preventCancel is truthy. The returned promise will be rejected with the destination's error, or with any error that occurs during canceling the source.

When this source readable stream closes, destination will be closed, unless preventClose is truthy. The returned promise will be fulfilled once this process completes, unless an error is encountered while closing the destination, in which case it will be rejected with that error.

If destination starts out closed or closing, this source readable stream will be canceled, unless preventCancel is true. The returned promise will be rejected with an error indicating piping to a closed stream failed, or with any error that occurs during canceling the source.

The signal option can be set to an AbortSignal to allow aborting an ongoing pipe operation via the corresponding AbortController. In this case, this source readable stream will be canceled, and destination aborted, unless the respective options preventCancel or preventAbort are set.

___

### signal

• `Optional` **signal**: [`AbortSignal`](https://oven-sh.github.io/bun-types/modules.md#abortsignal)
