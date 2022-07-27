/// <reference path="../index.d.ts" />
import pkg from '../dist/package.json';

pkg.name = `@oven-sh/${pkg.name}`;
await Bun.write('./package.json', JSON.stringify(pkg));