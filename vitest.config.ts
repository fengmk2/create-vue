import { defineConfig } from '@voidzero-dev/vite-plus'

export default defineConfig({
  test: {
    include: ['__test__/**.spec.ts'],
  },
})
