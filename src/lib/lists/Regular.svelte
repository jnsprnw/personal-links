<script lang="ts">
	import type { Link } from '$types';

	const { links }: { links: Link[] } = $props();
</script>

<ul class="flex flex-col gap-y-3">
	{#each links as { label, description, url }}
		<li>
			<a
				class="border-border hover:border-blue block rounded-sm border p-3 transition-colors dark:border-gray-600 dark:hover:border-blue-300"
				href={url}
			>
				<strong class="text-blue mb-1 block text-base/none dark:text-blue-300">
					{label}
				</strong>
				<span class="block text-xs/tight text-balance text-gray-600 dark:text-gray-400">
					{description}
				</span>
				<small class="text-xs/none text-gray-400 dark:text-gray-500">
					{new URL(url).host}
				</small>
			</a>
		</li>
	{/each}
</ul>
