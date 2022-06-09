<script lang="ts">
	import WorksIcon from '~icons/ph/bag-simple-fill';
	import ContactIcon from '~icons/mdi/email-edit';
	import EnIcon from '~icons/twemoji/flag-for-flag-egypt';
	import ArIcon from '~icons/twemoji/flag-for-flag-united-kingdom';
	import R from '$lib/consts';
	import { _, locale } from 'svelte-i18n';
	import { onMount } from 'svelte';

	export let slug: string;

	let menuLinks = [
		{
			title: 'homepage.menu.homepage',
			url: '/'
		},
		{
			title: 'homepage.menu.projects',
			url: '/projects',
			icon: WorksIcon
		},
		{
			title: 'homepage.menu.contact',
			url: R.Links.contact,
			icon: ContactIcon
		}
	];

	function toggleLang() {
		if ($locale === 'en') {
			localStorage.setItem('lang', 'ar');
		} else {
			localStorage.setItem('lang', 'en');
		}

		// reload to translate and exception for project (lang in url)
		let h = window.location.href;
		if (h.includes('/en/')) {
			window.location.href = h.replaceAll('/en/', '/ar/');
		} else if (h.includes('/ar/')) {
			window.location.href = h.replaceAll('/ar/', '/en/');
		} else {
			location.reload();
		}
	}
</script>

<nav class="navbar shadow-lg bg-neutral text-neutral-content rounded-box m-5">
	<div class="flex-1 px-2 mx-2 flex">
		<a class="" href={menuLinks[0].url}>
			<span class="text-lg font-bold hidden lg:flex"> {$_('homepage.menu.myname')} </span>
			<img src="/logo.svg" class="h-12 text-lg font-bold lg:hidden" alt="logo" />
		</a>
	</div>

	<div class="flex-none flex lg:px-2 lg:mx-2">
		<div class="flex items-center lg:items-stretch gap-2 rtl:ml-2 ltr:mr-2">
			{#each Object.values(menuLinks) as item}
				<!-- Desktop Item  -->
				<a
					href={item.url}
					class="{slug == item.url
						? 'btn-active'
						: ''} hidden lg:inline-flex btn btn-ghost btn-sm rounded-btn font-medium"
				>
					<span class="hidden lg:block">{$_(item.title)}</span>
				</a>
				<!-- Mobile Item  -->
				{#if item.url != '/'}
					<a class="flex lg:hidden" href={item.url}>
						<button class=" {slug == item.url ? 'btn-active' : ''} iconbtn">
							<svelte:component this={item.icon} />
						</button>
					</a>
				{/if}
			{/each}
		</div>
		<!-- Language Changer -->
		<button class="iconbtn" on:click={toggleLang}>
			<ArIcon class="ltr:hidden" />
			<EnIcon class="rtl:hidden" />
		</button>
	</div>
</nav>
