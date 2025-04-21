<script lang="ts">
	import type { Link } from '$types';

	const { links }: { links: Link[] } = $props();
</script>

<ul class="mt-2 flex flex-wrap gap-x-2 gap-y-4">
	{#each links as { label, url }}
		<li>
			<a
				class="bg-border text-mute hover:bg-blue rounded-md px-3 py-2 text-sm hover:text-white dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-blue-600 dark:hover:text-white"
				href={url}
			>
				{label}
			</a>
		</li>
	{/each}
</ul>
