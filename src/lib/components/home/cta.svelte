<script lang="ts">
	import RocketIcon from '~icons/ion/rocket-sharp';
	import { _, locale } from 'svelte-i18n';
</script>

<div class="grid col-span-1 items-center">
	<div class="font-bold mb-5 text-3xl text-center">{$_('cta.head')}</div>

	<div
		class="
    bg-neutral 
    min-h-36 
    rounded-xl 
    flex 
    flex-col
    space-y-5
    lg:p-10 lg:space-y-0 lg:flex-row
    justify-around 
    items-center
    py-10
    px-5
    overflow-hidden
    "
	>
		<RocketIcon
			class="absolute lg:left-[20%] opacity-10 lg:opacity-15 text-[10rem] lg:text-[6.25rem] z-0 overflow-hidden"
		/>
		<p class="text-3xl font-bold z-10">{$_('cta.title')}</p>
		<p class="lg:w-1/3 w-4/5 ltr:lg:text-left' rtl:lg:text-right text-center z-10">
			{$_('cta.dis')}
		</p>
		<a href="/project" class="z-10"><button class="btn btn-outline">{$_('cta.btn')}</button></a>
	</div>
</div>
