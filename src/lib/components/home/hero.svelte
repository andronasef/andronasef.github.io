<script>
	import R from '$lib/consts';
	import { _ } from 'svelte-i18n';
</script>

<section>
	<div
		class="text-center ltr:lg:text-left rtl:lg:text-right lg:mt-0 lg:flex-row-reverse flex-col flex justify-between items-center mb-10 space-y-5"
	>
		<img src="/img/hero.svg" alt="me" class="lg:max-w-sm w-[75%] rtl:lg:-scale-x-100" />
		<div class="space-y-4 flex-grow">
			<p class="text-2xl opacity-95">{$_('homepage.hero.hi')}</p>
			<h2 class=" text-3xl font-bold">{$_('homepage.hero.job')}</h2>
			<p class="lg:w-2/3 ">
				{$_('homepage.hero.mission')}
			</p>
			<div class="flex flex-col lg:flex-row gap-3 justify-items-stretch lg:justify-start">
				<a href={R.Links.resume}
					><button class="btn btn-primary btn-wide md:btn-block"
						>{$_('homepage.hero.downloadcv')}</button
					></a
				>
				<a href={R.Links.contact}
					><button class="btn btn-outline btn-wide md:btn-block"
						>{$_('homepage.hero.contactme')}</button
					></a
				>
			</div>
		</div>
	</div>

	<div
		class=" p-10 w-full rounded-xl text-lg lg:text-xl relative flex justify-center items-center bg-neutral text-center"
	>
		{$_('homepage.hero.dis')}
	</div>
</section>
