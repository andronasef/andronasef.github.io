import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';
import { mdsvex } from 'mdsvex';
import mdsvexConfig from './mdsvex.config.js';
import Icons from 'unplugin-icons/vite';
// import AutoImport from 'unplugin-auto-import/vite'
// import IconsResolver from 'unplugin-icons/resolver'


/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', ...mdsvexConfig.extensions],
	preprocess: [
		mdsvex(mdsvexConfig),
		preprocess({
			postcss: true
		})
	],

	kit: {
		prerender: { default: true, entries: ['*', '/api/projects-ar.json', '/api/projects-en.json'], },
		adapter: adapter(),
		vite: {

			server: {
				fs: {
					// Allow serving files from one level up to the project root
					allow: ['../locales']
				}
			},

			plugins: [
				// AutoImport({
				// 	// targets to transform
				// 	include: [
				// 		/\.[tj]sx?$/,
				// 		/\.svelte$/, /\.svelte\?svelte/,
				// 		/\.md$/, // .md
				// 	],

				// 	// global imports to register
				// 	imports: [
				// 		// presets
				// 		'svelte',
				// 	],

				// 	// eslintrc: {
				// 	// 	enabled: true,
				// 	// 	filepath: '.eslintrc-auto-import.json',
				// 	// 	globalsPropValue: true
				// 	// },

				// 	resolvers: [IconsResolver({
				// 		extension: "svelte"
				// 	})
				// 	],

				// 	dts: './src/auto-imports.d.ts',
				// }),

				Icons({
					compiler: 'svelte'
				})
			],
		},

	}
};

export default config;
