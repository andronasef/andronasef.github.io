<script lang="ts">
	import GithubIcon from '~icons/mdi/github';
	import TwitterIcon from '~icons/mdi/twitter';
	import LinkedinIcon from '~icons/mdi/linkedin';
	import MailIcon from '~icons/mdi/email';
	import WhatAppIcon from '~icons/akar-icons/whatsapp-fill';

	const sociaLinks = {
		twitter: {
			icon: TwitterIcon,
			url: 'https://twitter.com/andronasef'
		},
		linkedin: {
			icon: LinkedinIcon,
			url: 'https://www.linkedin.com/in/andronasef/'
		},
		whatsapp: {
			icon: WhatAppIcon,
			url: 'https://wa.me/201285956355'
		},
		github: {
			icon: GithubIcon,
			url: 'https://github.com/andronasef/'
		},
		mail: {
			icon: MailIcon,
			url: 'mailto:andronasef@yahoo.com'
		}
	};

	export let floating = true;
	const floatingcss = 'fixed ltr:left-7 rtl:right-7 flex-col space-y-3 bottom-0 lg:flex';
	const unfloatingcss = '!flex !justify-center !items-center w-full';
</script>

<div class={'justify-center items-center hidden ' + (floating ? floatingcss : unfloatingcss)}>
	{#each Object.values(sociaLinks) as slink}
		<a class="iconbtn" target="_blank" href={slink.url}>
			<svelte:component this={slink.icon} />
		</a>
	{/each}

	<div class={'h-32 flex-grow border-white  border-l-2 ' + (floating ? 'flex' : 'hidden')} />
</div>
