<script lang="ts">
	import Project from '$lib/components/projects/project.svelte';
	import { _, locale } from 'svelte-i18n';
	export let projects: any;

	export let slice = Object.keys(projects).length;
	const slicedprojects = Object.entries(projects)
		.slice(0, slice)
		.map(([key, value]) => ({
			// @ts-ignore
			...value
		}));
</script>

<section class="flex flex-col items-center" id="projects">
	<div class="font-bold mb-2 text-3xl">{$_('projects.title')}</div>
	<div class="font-semibold text-small mb-7 opacity-90 text-center">
		{$_('projects.subtitle')}
	</div>
	<div class="mb-10 grid gap-7 grid-cols-1 lg:grid-cols-2">
		{#each slicedprojects as project}
			<div class="col-span-1">
				<Project
					title={project.meta.title}
					description={project.meta.description}
					image={project.meta.img.includes('/')
						? project.meta.img
						: '/img/projects/' + project.meta.img}
					url={project.path}
				/>
			</div>
		{/each}
	</div>

	{#if slice != Object.keys(projects).length}
		<a href="/projects">
			<button
				class="flex btn btn-primary hover:(bg-primary-focus) border-0 justify-center items-center"
			>
				{$_('projects.morebtn')}
			</button>
		</a>
	{/if}
</section>
