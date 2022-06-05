<script>
	import Cta from '$lib/components/home/cta.svelte';
	import R from '$lib/consts';
	import { _ } from 'svelte-i18n';
	import { MetaTags } from 'svelte-meta-tags';

	export let title = '',
		img = '',
		description = '';
</script>

<MetaTags
	title={title + ' | من مشاريعي'}
	openGraph={{
		title: title + ' | من مشاريعي',
		site_name: $_('pages.homepage.title'),
		description: description,
		type: 'website',
		images: [{ url: img }]
	}}
/>

<div class="space-y-5 lg:max-w-[75%] mb-7 text-lg" id="project">
	<h1 class="lg:text-3xl text-2xl font-bold ">{title}</h1>
	<img
		class="lg:w-[80%] rounded-lg "
		src={img.includes('/') ? img : '/img/projects/' + img}
		alt={title}
	/>
	<slot />
</div>
<div class="mt-16">
	<Cta />
</div>
