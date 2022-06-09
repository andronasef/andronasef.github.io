import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';
import { mdsvex } from 'mdsvex';
import mdsvexConfig from './mdsvex.config.js';
import Icons from 'unplugin-icons/vite';



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
			plugins: [
				Icons({
					compiler: 'svelte'
				})
			],
		},

	}
};

export default config;
