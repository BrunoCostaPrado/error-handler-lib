import { deleteAsync } from "del"

const dir = ["./build"]

const delDir = await deleteAsync(dir)

console.log("Deleted directories:\n", dir.join("\n"))

await Bun.build({
  entrypoints: ["./src/index.ts"],
  outdir: "./build",
  target: "browser",
  format: "esm",
  splitting: true,
  sourcemap: "external",
  minify: true,
  external: ["zod"],
  packages: "external",
})
