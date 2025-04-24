<script lang="ts">
	import H2 from '$lib/ui/H2.svelte';
	import type { Link } from '$types';
	import type { Snippet } from 'svelte';

	const { links, list, title }: { links: Link[]; list: Snippet<[Link[]]>; title: string } =
		$props();
</script>

<section>
	<H2 str={title} />
	{#if links && Array.isArray(links) && links.length}
		{@render list(links)}
	{:else}
		<span class="text-sm">No links found.</span>
	{/if}
</section>
