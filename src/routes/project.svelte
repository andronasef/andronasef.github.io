<script lang="ts">
	import { locale, _ } from 'svelte-i18n';
	import { slide } from 'svelte/transition';
	import { MetaTags } from 'svelte-meta-tags';
	import R from '$lib/consts';
	import projectform from '../lib/form/project-form.json';

	let fields = projectform.fields.filter((field: any) => field.type != undefined);

	// export let fields: any;
	let completed = false;
	const googleFormSubmit =
		'https://docs.google.com/forms/d/e/1FAIpQLSfTjsGv0JQASPvAoVfWmoyYZRTGSqA43NpD8xZI_DIgZYlwog/formResponse';
</script>

<MetaTags
	title={$_('pages.hiring.title')}
	description={$_('pages.hiring.dis')}
	openGraph={{
		title: $_('pages.hiring.title'),
		site_name: $_('pages.homepage.title'),
		description: $_('pages.hiring.title'),
		type: 'website',
		images: [{ url: R.Img.websitecover }]
	}}
/>

<div class="h-screen">
	{#if !completed}
		<form
			on:submit={() => (completed = !completed)}
			action={googleFormSubmit}
			method="post"
			target="form"
			transition:slide
			id="work-form"
			class="max-w-xl m-auto"
		>
			<h1 class="text-3xl font-bold mb-5">{$_('pages.hiring.formtitle')}</h1>
			<iframe class="visibility: hidden" title="form" name="form" frameborder="0" />

			{#each fields as filed, index}
				<div class="!form-control">
					<!-- svelte-ignore a11y-label-has-associated-control -->
					<label class="!label">
						<span class="!label-text text-lg"
							>{$locale == 'en' ? filed.label : filed.description}</span
						>
					</label>
					{#if index != 4}
						<input
							class="!input !input-bordered "
							type="text"
							name={'entry.' + filed.id}
							id={filed.label}
							required
						/>
					{:else}
						<textarea
							class="textarea textarea-bordered"
							id={filed.label}
							rows="4"
							name={'entry.' + filed.id}
						/>
					{/if}
				</div>
			{/each}
			<div class="flex col-span-2">
				<button
					class="btn btn-primary btn-block lg:btn-wide hover:bg-primary-focus text-white mt-5 "
					type="submit">{$_('pages.hiring.orderbtn')}</button
				>
			</div>
		</form>
	{:else}
		<div class="text-xl font-bold ">{$_('pages.hiring.success')}</div>
	{/if}
</div>
