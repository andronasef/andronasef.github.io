<script lang="ts">
	import SocialLinks from '$lib/components/social_links.svelte';
	import ArrowOutwardIcon from '~icons/ic/round-arrow-outward';
	import { MetaTags } from 'svelte-meta-tags';

	import { _ } from 'svelte-i18n';
	import R, { siteurl } from '$lib/consts';

	const cards = {
		portfolio: siteurl,
		upwork: R.Links.upwork,
		fiverr: R.Links.fiverr,
		mostaql: R.Links.mostaql,
		khamsat: R.Links.khamsat
	};
</script>

<MetaTags
	title={$_('pages.contact.title')}
	description={$_('pages.contact.dis')}
	openGraph={{
		title: $_('pages.contact.title'),
		site_name: $_('pages.homepage.title'),
		description: $_('pages.contact.title'),
		type: 'website',
		images: [{ url: R.Img.websitecover }]
	}}
/>

<div class="flex flex-col items-center gap-3">
	<div
		class="aspect-square w-40 h-40 border-4 mb-5 border-white relative overflow-hidden rounded-full"
	>
		<img class=" rounded-full mt-3" src="/img/me-min.webp" alt="me" />
	</div>

	<h2 class="font-bold text-3xl">{$_('homepage.menu.myname')}</h2>
	<p class="font-semibold text-base -mt-1">{$_('homepage.hero.job')}</p>
	<SocialLinks floating={false} />
</div>

<div class=" flex flex-col justify-center ">
	<p class="text-2xl text-center mt-12 mb-5 font-bold">
		{$_('pages.contact.hireme')}
	</p>
	<div class="grid justify-center gap-5">
		{#each Object.entries(cards) as [title, url]}
			<div class="group card lg:card-side bg-base-200 shadow-xl lg:max-w-4xl transition ">
				<img src={`/img/contact/${title}.webp`} class="lg:w-2/5 lg:object-cover" alt={title} />
				<div class="card-body lg:flex lg:flex-row lg:items-center">
					<div>
						<h2 class="card-title text-3xl lg:text-4xl">
							{$_(`pages.contact.hirecards.${title}.title`)}
						</h2>
						<p>{$_(`pages.contact.hirecards.${title}.text`)}</p>
					</div>
					<div class="card-actions flex-grow lg:justify-end ">
						<a
							href={url}
							target="_blank"
							class="w-full lg:w-auto lg:hover:scale-110 transition lg:active:scale-90"
						>
							<button class="btn btn-primary btn-block lg:hidden"> {$_('common.learnmore')}</button>
							<ArrowOutwardIcon class="hidden lg:block text-4xl mb-6 hover:rotate-45 transition" />
						</a>
					</div>
				</div>
			</div>
		{/each}
	</div>
</div>
