import { defineConfig } from "tsup"

export default defineConfig({
  entry: ["./index.ts"],
  splitting: true,
  sourcemap: false,
  clean: true,
  minify: true,
  dts: true,
  target: "esnext",
  outDir: "build",
  format: "esm",
})
