<script>
	import Carrer from '~icons/ic/baseline-work';
	import Achievements from '~icons/healthicons/award-trophy';
	import { _ } from 'svelte-i18n';
	import R from '$lib/consts';
</script>

<section class="flex flex-col items-center">
	<div class="font-bold mb-5 text-3xl">{$_('homepage.more.title')}</div>
	<div class="w-full grid gap-10 grid-cols-1 md:grid-cols-2 ">
		<div class="container">
			<Carrer class="mb-2 text-6xl" />
			<h2 class="font-bold text-2xl">{$_('homepage.more.carrer')}</h2>
			<p>{$_('homepage.more.carrerdis')}</p>
			<a href={R.Links.carrerHistory} target="_blank">
				<button class="btn btn-outline border-2">{$_('homepage.more.morebtn')}</button>
			</a>
		</div>
		<div class="container">
			<Achievements class="mb-2 text-6xl" />
			<h2 class="font-bold text-2xl">{$_('homepage.more.achievements')}</h2>
			<p>
				{$_('homepage.more.achievementsdis')}
			</p>
			<a href={R.Links.achievements} target="_blank">
				<button class="btn btn-outline border-2">{$_('homepage.more.morebtn')}</button>
			</a>
		</div>
	</div>
</section>

<style>
	.container {
		@apply bg-neutral rounded-xl flex flex-col space-y-5 text-center py-10 px-5 col-span-1 justify-center items-center md:py-20;
	}
</style>
