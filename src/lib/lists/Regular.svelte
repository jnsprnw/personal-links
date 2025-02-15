<script lang="ts">
	import type { Link } from '$types';

	const { links }: { links: Link[] } = $props();
</script>

<ul class="flex flex-col gap-y-3">
	{#each links as { label, url }}
		<li>
			<a
				class="border-border hover:border-blue block rounded-sm border p-3 transition-colors dark:border-gray-600 dark:hover:border-blue-300"
				href={url}
			>
				<strong class="text-blue block text-base/none dark:text-blue-300">
					{label}
				</strong>
				<small class="text-mute text-xs/none dark:text-gray-400">
					{new URL(url).host}
				</small>
			</a>
		</li>
	{/each}
</ul>
