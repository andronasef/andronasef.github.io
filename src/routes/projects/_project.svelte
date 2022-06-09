<script>
	import Cta from '$lib/components/home/cta.svelte';
	import { _ } from 'svelte-i18n';
	import { MetaTags } from 'svelte-meta-tags';

	export let title = '',
		img = '',
		description = '',
		link = '',
		linktext = '';
</script>

<MetaTags
	{title}
	openGraph={{
		title: title,
		site_name: $_('pages.homepage.title'),
		description: description,
		type: 'website',
		images: [{ url: img }]
	}}
/>

<div class="space-y-5 lg:max-w-[75%] mb-7 text-lg" id="project">
	<h1 class="lg:text-3xl text-2xl font-bold ">{title}</h1>
	{#if img}
		<img
			class="lg:w-[80%] rounded-lg "
			src={img.includes('/') ? img : '/img/projects/' + img}
			alt={title}
		/>
	{/if}
	<slot />
	{#if link}
		<br />
		<a href={link}><button class="btn btn-primary">{linktext}</button> </a>
	{/if}
</div>
<div class="mt-14">
	<Cta />
</div>
