import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path, { resolve } from 'path';
import dts from 'vite-plugin-dts';
import tailwindcss from 'tailwindcss';
// @ts-ignore: json loading is enabled by ts config
import * as packageJson from './package.json'

export default defineConfig({
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
	},
	css: {
		postcss: {
			plugins: [tailwindcss],
		},
	},
	plugins: [react(), dts()],
	resolve: {
		alias: {
			'@': resolve(__dirname, 'src'),
		},
	},
});
