import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path, { resolve } from 'path';
import dts from 'vite-plugin-dts';
import tailwindcss from 'tailwindcss';

// https://vitejs.dev/config/
export default defineConfig({
	build: {
		lib: {
			entry: path.resolve(__dirname, 'index.ts'),
			name: 'react-nested-dropdown',
			fileName: (format) => `index.${format}.js`,
		},
		rollupOptions: {
			external: ['react', 'react-dom', 'tailwindcss'],
			output: {
				globals: {
					react: 'React',
					'react-dom': 'reactDOM',
				},
			},
		},
		sourcemap: true,
		emptyOutDir: true,
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
