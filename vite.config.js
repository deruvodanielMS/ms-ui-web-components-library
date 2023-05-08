import { resolve } from 'node:path'
import { defineConfig } from 'vite'
import * as packageJson from './package.json'
// https://vitejs.dev/config/
export default defineConfig(() => ({
  build: {
    lib: {
      entry: resolve('src', 'components/index.ts'),
      name: 'MSWebComponentsLibrary',
      formats: ['es', 'umd'],
      fileName: (format) => `ms-ui-web-components-library.${format}.js`,
    },
    rollupOptions: {
      external: [...Object.keys(packageJson.peerDependencies)],
    },
  },
}))
