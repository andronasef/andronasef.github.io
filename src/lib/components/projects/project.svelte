<script>
	import { locale, _ } from 'svelte-i18n';

	export let title = '';
	export let url = '';
	export let image = '';
	export let description = '';
</script>

<a href={url}>
	<div
		class="card shadow-xl text-center image-full hover:scale-95 active:scale-90 transform transition"
	>
		<figure>
			<img class="aspect-video" src={image} alt={title} />
		</figure>
		<div class="card-body flex items-center justify-center">
			<h2 class="card-title">{title}</h2>
			<p>
				{description}
			</p>
			<div class="card-actions">
				<button class="btn btn-outline border-2">{$_('common.project.learnmore')}</button>
			</div>
		</div>
	</div>
</a>
