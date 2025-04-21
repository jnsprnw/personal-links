<script lang="ts">
	import Header from '$lib/ui/Header.svelte';
	import Social from '$lib/lists/Social.svelte';
	import Regular from '$lib/lists/Regular.svelte';
	import Section from '$lib/ui/Section.svelte';
	import type { Link } from '$types';

	type Props = {
		links: {
			updated: Date;
			links_grouped: {
				social: Link[];
				regular: Link[];
			};
		};
	};

	const { data }: { data: Props } = $props();

	const links_social = $derived(data.links.links_grouped.social);
	const links_regular = $derived(data.links.links_grouped.regular);
</script>

<svelte:head>
	{#each links_social as { url }}
		<link rel="me" href={url} />
	{/each}
</svelte:head>

<main class="flex w-full max-w-96 flex-col gap-y-8 p-2 text-black dark:text-gray-100">
	<Header date={data.links.updated} />

	<Section title="Links" links={links_regular}>
		{#snippet list(links: Link[])}
			<Regular {links} />
		{/snippet}
	</Section>

	<Section title="Profiles" links={links_social}>
		{#snippet list(links: Link[])}
			<Social {links} />
		{/snippet}
	</Section>
</main>
