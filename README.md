### 🚧 Moved to [`packages/bun-types`](https://github.com/oven-sh/bun/tree/main/packages/bun-types) 🚧

---

These are the type definitions for Bun's JavaScript runtime APIs.

# Installation

Install the `bun-types` npm package:

```bash
# yarn/npm/pnpm work too, "bun-types" is an ordinary npm package
bun add bun-types
```

# Usage

Add this to your `tsconfig.json` or `jsconfig.json`:

```jsonc
{
  "compilerOptions": {
    "lib": ["ESNext"],
    "module": "esnext",
    "target": "esnext",
    // "bun-types" is the important part
    "types": ["bun-types"]
  }
}
```

# Contributing

`bun-types` is generated via [./bundle.ts](./scripts/bundle.ts).

## Adding a new file

1. Add it to [./index.d.ts](./index.d.ts)

## How to generate types.d.ts

[`./bundle.ts`](./bundle.ts) merges the types in this folder into a single file.

To run it:

```bash
bun generate:package
```

# Generated docs

**[📚 See here for docs](https://oven-sh.github.io/bun-types/)**
