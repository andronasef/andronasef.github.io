<script>
	import Links from '$lib/consts';
	import { _ } from 'svelte-i18n';
</script>

<section>
	<div
		class="text-center ltr:lg:text-left rtl:lg:text-right lg:mt-0 lg:flex-row-reverse flex-col flex justify-between items-center mb-10 space-y-5"
	>
		<img src="/img/hero.svg" alt="me" class="lg:max-w-sm w-[75%] rtl:lg:-scale-x-100" />
		<div class="space-y-4 flex-grow">
			<p class="text-2xl opacity-95">{$_('common.homepage.hero.hi')}</p>
			<h2 class=" text-3xl font-bold">{$_('common.homepage.hero.job')}</h2>
			<p class="lg:w-2/3 ">
				{$_('common.homepage.hero.mission')}
			</p>
			<div
				class="justify-items-stretch space-y-2 flex flex-col lg:space-x-2 lg:space-y-0 lg:flex-row lg:justify-start"
			>
				<a href={Links.contact}
					><button class="btn btn-outline btn-wide md:btn-block"
						>{$_('common.homepage.hero.contactme')}</button
					></a
				>
				<a href={Links.resume}
					><button class="btn  btn-primary btn-wide md:btn-block rtl:mr-2"
						>{$_('common.homepage.hero.downloadcv')}</button
					></a
				>
			</div>
		</div>
	</div>

	<div
		class=" p-10 w-full rounded-xl text-lg lg:text-xl relative flex justify-center items-center bg-neutral text-center"
	>
		{$_('common.homepage.hero.dis')}
	</div>
</section>
