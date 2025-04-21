<script lang="ts">
	import '../app.css';
	const { children } = $props();

	const SITE_TITLE = 'Jonas Parnow: Links';
	const SITE_URL = 'https://links.jonasparnow.com';
	const SITE_DESCRIPTION = 'Links to my projects, profiles, and more.';
</script>

<svelte:head>
	<title>{SITE_TITLE}</title>
	<meta name="description" content={SITE_DESCRIPTION} />

	<meta name="robots" content="index, follow, noimageindex" />

	<meta property="og:url" content={SITE_URL} />
	<meta property="og:type" content="website" />
	<meta property="og:title" content={SITE_TITLE} />
	<meta property="og:description" content={SITE_DESCRIPTION} />
	<meta property="og:site_name" content={SITE_TITLE} />
	<meta property="og:locale" content="en_GB" />
	<meta property="article:author" content="Jonas Parnow" />
	<meta property="og:updated_time" content={new Date().toISOString()} />

	<meta itemprop="name" content={SITE_TITLE} />
	<meta itemprop="description" content={SITE_DESCRIPTION} />

	<link rel="canonical" href={SITE_URL} />

	<meta name="theme-color" content="#ffffff" media="(prefers-color-scheme: light)" />
	<meta name="theme-color" content="#101828" media="(prefers-color-scheme: dark)" />
</svelte:head>

<div class="flex h-screen w-screen items-center justify-center bg-white dark:bg-gray-900">
	{@render children()}
</div>
