<script lang="ts">
	import { MetaTags } from 'svelte-meta-tags';
	import { _ } from 'svelte-i18n';
	import ProjectsPreview from '$lib/components/projects/projects_preview.svelte';
	import { locale } from 'svelte-i18n';
	import { onMount } from 'svelte';
	import R from '$lib/consts';
</script>

<MetaTags
	title={$_('pages.projects.title')}
	description={$_('pages.projects.dis')}
	openGraph={{
		title: $_('pages.projects.title'),
		description: $_('pages.projects.title'),
		site_name: $_('pages.homepage.title'),
		type: 'website',
		images: [{ url: R.Img.websitecover }]
	}}
/>

<ProjectsPreview />
