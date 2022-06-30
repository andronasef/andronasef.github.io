<script context="module" lang="ts">
	import { locale, waitLocale } from 'svelte-i18n';
	export async function preload() {
		return waitLocale();
	}
	//@ts-ignore
	export const load = async ({ url }) => {
		return {
			props: {
				slug: url.pathname
			}
		};
	};
</script>

<script lang="ts">
	import { initTrans } from '../lib/i18n';

	import '../app.css';
	import Header from '$lib/components/header.svelte';
	import Footer from '$lib/components/footer.svelte';
	import SocialLinks from '$lib/components/social_links.svelte';
	import { fly } from 'svelte/transition';
	import { onMount } from 'svelte';
	import { getLocaleFromNavigator } from 'svelte-i18n';
	initTrans();

	onMount(() => {
		console.log(getLocaleFromNavigator());

		$locale = localStorage.getItem('lang') || getLocaleFromNavigator()!.split('-')[0];
		setTimeout(() => {
			show = true;
		}, 250);
	});
	let show: boolean = false;
	export let slug: string;
	const pageTransitionDuration = 250;
</script>

{#if show}
	<div dir={$locale == 'en' ? 'ltr' : 'rtl'}>
		<Header {slug} />
		<main class="flex-grow flex flex-col justify-start items-center">
			{#if slug != '/contact'}
				<SocialLinks floating={true} />
			{/if}

			{#key slug}
				<div
					class="w-4/5 my-10 lg:my-16"
					in:fly={{ y: 10, duration: pageTransitionDuration, delay: pageTransitionDuration + 50 }}
					out:fly={{ y: -10, duration: pageTransitionDuration }}
				>
					<slot />
				</div>
			{/key}
		</main>
		<Footer />
	</div>
{/if}
