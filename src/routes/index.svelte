<script lang="ts">
	import CTA from '$lib/components/home/cta.svelte';
	import Hero from '$lib/components/home/hero.svelte';
	import Skills from '$lib/components/home/skills.svelte';
	import { MetaTags } from 'svelte-meta-tags';
	import { locale, _ } from 'svelte-i18n';
	import ProjectsPreview from '$lib/components/projects/projects_preview.svelte';
	import More from '$lib/components/home/more.svelte';
	import R from '$lib/consts';
</script>

<MetaTags
	title={$_('pages.homepage.title')}
	description={$_('pages.homepage.dis')}
	openGraph={{
		title: $_('pages.homepage.title'),
		site_name: $_('pages.homepage.title'),
		description: $_('pages.homepage.title'),
		type: 'website',
		images: [{ url: R.Img.websitecover }]
	}}
/>

<div class="space-y-20">
	<!-- {$locale} -->
	<Hero />
	<Skills />
	<ProjectsPreview slice={4} />
	<!-- Testimonials -->
	<More />
	<CTA />
</div>
