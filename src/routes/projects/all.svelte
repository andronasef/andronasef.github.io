<script>
	// @ts-ignore
	import AllProjects from '$lib/allprojects.md';
	import Cta from '$lib/components/home/cta.svelte';
	import { _ } from 'svelte-i18n';
	import { MetaTags } from 'svelte-meta-tags';
</script>

<MetaTags
	title={$_('pages.projects.allmyprojects.title')}
	openGraph={{
		title: $_('pages.projects.allmyprojects.title'),
		site_name: $_('pages.homepage.title'),
		description: $_('pages.projects.allmyprojects.description'),
		type: 'website'
	}}
/>

<h1 class="lg:text-3xl text-2xl font-bold mb-3">{$_('pages.projects.allmyprojects.title')}</h1>
<AllProjects />
<div class="mt-10">
	<Cta />
</div>
