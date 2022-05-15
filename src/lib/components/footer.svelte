<script>
	import SocialLinks from './social_links.svelte';
</script>

<footer
	class="lg:hidden  p-4 footer bg-neutral text-neutral-content gap-5 justify-center items-center w-full"
>
	<SocialLinks floating={false} />
	<div class="w-full">
		<p class="text-center w-full">
			{'© ' + new Date().getFullYear() + ' Andrew Nasef'}
		</p>
	</div>
</footer>
