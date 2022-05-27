<script context="module" lang="ts">
	import { locale, waitLocale } from 'svelte-i18n';
	export async function preload() {
		return waitLocale();
	}
	//@ts-ignore
	export const load = async ({ url }) => {
		return {
			props: {
				refresh: url.pathname
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

	initTrans();

	onMount(() => {
		$locale = localStorage.getItem('lang') || 'ar';
		setTimeout(() => {
			show = true;
		}, 250);
	});
	let show: boolean = false;
	export let refresh: String;
	const pageTransitionDuration = 300;
</script>

{#if show}
	<!-- content here -->

	<div dir={$locale == 'en' ? 'ltr' : 'rtl'}>
		<Header slug={refresh} />
		<main class="flex-grow flex flex-col justify-start items-center">
			{#if refresh != '/contact'}
				<SocialLinks floating={true} />
			{/if}

			{#key refresh}
				<div
					class="w-4/5 py-10 lg:py-16"
					in:fly={{ y: 10, duration: pageTransitionDuration, delay: pageTransitionDuration }}
					out:fly={{ y: -10, duration: pageTransitionDuration }}
				>
					<slot />
				</div>
			{/key}
		</main>
		<Footer />
	</div>
{/if}
