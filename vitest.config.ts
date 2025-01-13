import { defineConfig } from "vitest/config"

export default defineConfig({
  test: {
    name: "catch-error-lib",
    root: "./test",
    environment: "node",
    minWorkers: 3,
    maxWorkers: 3,
    maxConcurrency: 3,
  },
})
