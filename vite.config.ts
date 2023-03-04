import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'
// @ts-ignore: json resolve is enabled in ts config!
import * as packageJson from './package.json'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src')
    }
  },
  build: {
    lib: {
      entry: resolve(__dirname, 'src', 'index.ts'),
      formats: ['es', 'cjs'],
      name: 'react-nested-dropdown',
      fileName: (ext) => `index.${ext}.js`,
    },
    rollupOptions: {
      external: [...Object.keys(packageJson.peerDependencies)]
    },
    target: 'esnext',
    sourcemap: true
  }
})
