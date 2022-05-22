<script>
	import Wordpress from '~icons/mdi/wordpress';
	import Flutter from '~icons/ri/flutter-fill';
	import Figma from '~icons/ph/figma-logo';
	import Web from '~icons/mdi/web';
	import { _ } from 'svelte-i18n';
</script>

<section class="flex flex-col items-center">
	<div class="font-bold mb-5 text-3xl">{$_('homepage.skills.title')}</div>
	<div class="w-full grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
		<div class="container">
			<Wordpress class="mb-2 text-4xl" />
			<h2 class="font-bold text-xl">WordPress</h2>
			<p>{$_('homepage.skills.wordpress')}</p>
		</div>
		<div class="container">
			<Flutter class="mb-2 text-4xl" />
			<h2 class="font-bold text-xl">Flutter</h2>
			<p>
				{$_('homepage.skills.flutter')}
			</p>
		</div>
		<div class="container">
			<Figma class="mb-2 text-4xl" />
			<h2 class="font-bold text-xl">Figma</h2>
			<p>
				{$_('homepage.skills.figma')}
			</p>
		</div>
		<div class="container">
			<Web class="mb-2 text-4xl" />
			<h2 class="font-bold text-xl">Web</h2>
			<p>
				{$_('homepage.skills.web')}
			</p>
		</div>
	</div>
</section>

<style>
	.container {
		@apply bg-neutral rounded-xl flex flex-col space-y-5 text-center py-10 px-5 col-span-1 justify-center items-center;
	}
</style>
