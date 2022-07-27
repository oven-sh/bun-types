import { readdir } from "node:fs/promises";
import { join } from "node:path";

export const getDotTsFiles = async(prefix = '') => {
    return (await readdir(join(import.meta.dir, '..', '..'))).filter(file => file.endsWith('.d.ts')).map(f => f = prefix + f);
};