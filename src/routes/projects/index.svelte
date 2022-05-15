<script lang="ts">
	import { MetaTags } from 'svelte-meta-tags';
	import { _ } from 'svelte-i18n';
	import ProjectsPreview from '$lib/components/projects/projects_preview.svelte';
	import { locale } from 'svelte-i18n';
	import { onMount } from 'svelte';

	onMount(async () => {
		projects = await (await fetch(`/api/projects-${localStorage.getItem('lang')}.json`)).json();
		console.log(projects);
	});

	let projects: any;
</script>

<MetaTags title={$_('pages.projects.title')} description={$_('pages.projects.dis')} />

{#await projects then projects}
	<!-- {projects} -->
	<!-- promise was fulfilled -->
	{#if projects}
		<ProjectsPreview {projects} />
	{/if}
{/await}
