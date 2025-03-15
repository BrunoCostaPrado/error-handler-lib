await Bun.build({
  entrypoints: ["./src/index.ts"],
  splitting: true,
  minify: true,
  target: "node",
  outdir: "./build",
  format: "esm",
  packages: "external",
})
