import { expectType } from "tsd";
import Bun from ".";

// Testing ../bun.d.ts

// FileBlob
expectType<ReadableStream<Uint8Array>>(Bun.file("index.test-d.ts").stream());
expectType<Promise<ArrayBuffer>>(Bun.file("index.test-d.ts").arrayBuffer());
expectType<Promise<any>>(Bun.file("index.test-d.ts").json());
expectType<Promise<string>>(Bun.file("index.test-d.ts").text());

expectType<number>(Bun.file("index.test-d.ts").size);
expectType<string>(Bun.file("index.test-d.ts").type);

// Hash
expectType<string>(new Bun.MD4().update("test").digest("hex"));
expectType<string>(new Bun.MD5().update("test").digest("hex"));
expectType<string>(new Bun.SHA1().update("test").digest("hex"));
expectType<string>(new Bun.SHA224().update("test").digest("hex"));
expectType<string>(new Bun.SHA256().update("test").digest("hex"));
expectType<string>(new Bun.SHA384().update("test").digest("hex"));
expectType<string>(new Bun.SHA512().update("test").digest("hex"));
expectType<string>(new Bun.SHA512_256().update("test").digest("hex"));

// Other
expectType<Promise<number>>(Bun.write("test.json", "lol"));
expectType<URL>(Bun.pathToFileURL("/foo/bar.txt"));
expectType<string>(Bun.fileURLToPath(new URL("file:///foo/bar.txt")));