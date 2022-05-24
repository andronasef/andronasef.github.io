<script>
	import WordpressIcon from '~icons/mdi/wordpress';
	import FlutterIcon from '~icons/ri/flutter-fill';
	import FigmaIcon from '~icons/ph/figma-logo';
	import WebIcon from '~icons/mdi/web';
	import { _ } from 'svelte-i18n';

	const skills = {
		wordpress: WordpressIcon,
		web: WebIcon,
		flutter: FlutterIcon,
		figma: FigmaIcon
	};
</script>

<section class="flex flex-col items-center">
	<div class="font-bold mb-5 text-3xl">{$_('homepage.skills.title')}</div>
	<div class="w-full grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
		{#each Object.entries(skills) as [title, icon]}
			<div class="container">
				<svelte:component this={icon} class="mb-3 text-4xl" />
				<h2 class="font-bold text-xl">{$_(`homepage.skills.${title}`)}</h2>
				<p>{$_(`homepage.skills.${title}Dis`)}</p>
			</div>
		{/each}
	</div>
</section>

<style>
	.container {
		@apply bg-neutral rounded-xl flex flex-col space-y-5 text-center py-10 px-5 col-span-1 justify-center items-center;
	}
</style>
