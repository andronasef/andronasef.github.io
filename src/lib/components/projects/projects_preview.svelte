<script lang="ts">
	import Project from '$lib/components/projects/project.svelte';
	import { onMount } from 'svelte';
	import { _, locale } from 'svelte-i18n';

	let projects: any;
	export let slice = -1;
	onMount(async () => {
		projects = await (
			await fetch(`/api/projects-${localStorage.getItem('lang') || $locale}.json`)
		).json();
	});
</script>

{#if projects}
	<!-- promise was fulfilled -->
	<section class="flex flex-col items-center" id="projects">
		<div class="font-bold mb-2 text-3xl">{$_('projects.title')}</div>
		<div class="font-semibold text-small mb-7 opacity-90 text-center">
			{$_('projects.subtitle')}
		</div>
		<div class="mb-10 grid gap-7 grid-cols-1 lg:grid-cols-2">
			{#each projects as project, index}
				{#if slice == -1 || index <= slice}
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
				{/if}
			{/each}
		</div>

		<a href={`/projects${slice != -1 ? '' : '/all'}`}>
			<button
				class="flex btn btn-primary hover:(bg-primary-focus) border-0 justify-center items-center"
			>
				{slice != -1 ? $_('projects.morebtn') : $_('pages.projects.allmyprojects.title')}
			</button>
		</a>
	</section>
{/if}
