import { defineConfig } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'

import { resolve } from 'node:path'

import * as packageJson from './package.json'
// https://vitejs.dev/config/
export default defineConfig(() => ({
  plugins: [tsconfigPaths()],
  build: {
    lib: {
      entry: resolve('src', 'components/index.ts'),
      name: 'MSWebComponentsLibrary',
      formats: ['es', 'umd'],
      fileName: (format) => `ms-ui-web-components-library.${format}.js`,
    },
    rollupOptions: {
      external: [...Object.keys(packageJson.peerDependencies), new RegExp(/\b\w*template\w*\b/gi)],
    },
  },
}))
