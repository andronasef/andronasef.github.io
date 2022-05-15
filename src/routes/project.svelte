<script context="module" lang="ts">
	//@ts-ignore
	export const load = async ({ fetch }) => {
		let projectform = await (await fetch(`/api/project-form.json`)).json();
		let fields = projectform.fields.filter((field: any) => field.type != undefined);

		return {
			props: {
				fields: fields
			}
		};
	};
</script>

<script lang="ts">
	import { locale, _ } from 'svelte-i18n';
	import { slide } from 'svelte/transition';
	import { MetaTags } from 'svelte-meta-tags';

	export let fields: any;
	let completed = false;
	const googleFormSubmit =
		'https://docs.google.com/forms/d/e/1FAIpQLSfTjsGv0JQASPvAoVfWmoyYZRTGSqA43NpD8xZI_DIgZYlwog/formResponse';
</script>

<MetaTags
	title={$_('pages.hiring.title')}
	description={$_('pages.hiring.dis')}
	openGraph={{
		title: $_('pages.hiring.title'),
		site_name: $_('pages.hiring.title'),
		description: $_('pages.hiring.title')
	}}
/>

<h1 class="text-3xl font-bold mb-5">{$_('pages.hiring.formtitle')}</h1>
<div>
	{#if fields}
		{#if !completed}
			<form
				on:submit={() => (completed = !completed)}
				action={googleFormSubmit}
				method="post"
				target="form"
				transition:slide
				class="lg:grid lg:grid-cols-2  lg:gap-4 "
			>
				<iframe class="visibility: hidden" title="form" name="form" frameborder="0" />

				{#each fields as filed, index}
					<div class="!form-control {index == 4 ? 'col-span-2' : ''}">
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
								required
							/>
						{:else}
							<textarea class="textarea textarea-bordered" rows="4" name={'entry.' + filed.id} />
						{/if}
					</div>
				{/each}
				<div class="flex justify-center col-span-2">
					<button class="btn btn-primary hover:bg-primary-focus text-white mt-5 w-32" type="submit"
						>{$_('pages.hiring.orderbtn')}</button
					>
				</div>
			</form>
		{:else}
			if
			<div class="text-xl font-bold ">{$_('pages.hiring.success')}</div>
		{/if}
	{/if}
</div>
