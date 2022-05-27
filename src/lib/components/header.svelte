<script>
	import WorksIcon from '~icons/ph/bag-simple-fill';
	import ContactIcon from '~icons/mdi/email-edit';
	import EnIcon from '~icons/twemoji/flag-for-flag-egypt';
	import ArIcon from '~icons/twemoji/flag-for-flag-united-kingdom';
	import Links from '$lib/consts';
	import { _, locale } from 'svelte-i18n';

	let menuLinks = [
		{
			title: 'homepage.menu.homepage',
			url: '/'
		},
		{
			title: 'homepage.menu.projects',
			url: '/' + 'projects'
		},
		{
			title: 'homepage.menu.contact',
			url: Links.contact
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
		if (h.includes('/ar/' || h.includes('/en/'))) {
			if (h.includes('/en/')) {
				window.location.href = h.replaceAll('/en/', '/ar/');
			} else if (h.includes('/ar/')) {
				window.location.href = h.replaceAll('/ar/', '/en/');
			}
		} else {
			location.reload();
		}
	}
</script>

<nav class="navbar shadow-lg bg-neutral text-neutral-content rounded-box m-5">
	<div class="flex-1 px-2 mx-2 flex">
		<a class="" href={menuLinks[0].url}>
			<span class="text-lg font-bold whitespace-nowrap"> {$_('homepage.menu.myname')} </span>
		</a>
	</div>

	<!-- Mobile Menu -->
	<div class="flex-none flex lg:hidden">
		<a href={menuLinks[1].url}>
			<button class="iconbtn">
				<WorksIcon />
			</button>
		</a>
		<a target="" href={Links.contact}>
			<button class="iconbtn">
				<ContactIcon />
			</button>
		</a>
	</div>

	<!-- Desktop Menu -->
	<div class="flex-none px-2 mx-2 hidden lg:flex">
		<div class="items-stretch">
			{#each Object.values(menuLinks) as item}
				<a href={item.url} class="btn btn-ghost btn-sm rounded-btn font-medium">
					{$_(item.title)}
				</a>
			{/each}
		</div>
	</div>
	<!-- Language Changer -->
	<button class="rtl:lg:-mr-4 ltr:lg:-ml-4 iconbtn" on:click={toggleLang}>
		<ArIcon class="ltr:hidden" />
		<EnIcon class="rtl:hidden" />
	</button>
</nav>
