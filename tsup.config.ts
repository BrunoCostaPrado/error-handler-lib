import { defineConfig } from "tsup"

export default defineConfig({
  entry: ["./src/index.ts"],
  splitting: true,
  sourcemap: false,
  clean: true,
  minify: false,
  dts: false,
  target: "esnext",
  outDir: "build",
  format: "esm",
  tsconfig: "tsconfig.json",
})
