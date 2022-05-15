<script>
	import GithubIcon from '~icons/mdi/github';
	import TwitterIcon from '~icons/mdi/twitter';
	import LinkedinIcon from '~icons/mdi/linkedin';
	import MailIcon from '~icons/mdi/email';
	import WhatApp from '~icons/akar-icons/whatsapp-fill';

	export let floating = true;
	const floatingcss = 'fixed ltr:left-7 rtl:right-7 flex-col space-y-3 bottom-0 lg:flex';
	const unfloatingcss = '!flex !justify-center !items-center w-full';
</script>

<div class={'justify-center items-center hidden ' + (floating ? floatingcss : unfloatingcss)}>
	<a class="iconbtn" href="https://twitter.com/andronasef">
		<TwitterIcon />
	</a>
	<a class="iconbtn" href="https://www.linkedin.com/in/andronasef/">
		<LinkedinIcon />
	</a>
	<a class="iconbtn" href="https://github.com/andronasef/">
		<GithubIcon />
	</a>
	<a class="iconbtn" href="https://wa.me/201285956355">
		<WhatApp />
	</a>
	<a class="iconbtn" href="mailto:andronasef@yahoo.com">
		<MailIcon />
	</a>
	<!-- <div class="vl" /> -->

	<div class={'h-32 flex-grow border-white  border-l-2 ' + (floating ? 'flex' : 'hidden')} />
</div>
