<script lang="ts">
	type Props = {
		links: {
			title: string;
			url: string;
		}[];
	};

	const { data }: { data: Props } = $props();
	const updated = $derived(new Intl.DateTimeFormat('en-GB').format(data.links.updated));
</script>

<svelte:head>
	{#each data.links.links_grouped.social as { url }}
		<link rel="me" href={url} />
	{/each}
</svelte:head>

<main class="flex w-full max-w-96 flex-col gap-y-8 p-2 text-black dark:text-gray-100">
	<header class="flex flex-col text-center">
		<h1 class="text-mute decoration-marker text-xl font-bold underline dark:text-gray-100">
			Jonas Parnow
		</h1>
		<span class="text-mute dark:text-gray-300"> Designer for Information and Data </span>
		<span class="text-mute mt-4 text-xs dark:text-gray-400">
			Last updated: <time>{updated}</time>
		</span>
	</header>

	<section>
		<h2 class="text-mute mb-1 text-xs dark:text-gray-300">Links</h2>
		<ul class="flex flex-col gap-y-3">
			{#each data.links.links_grouped.regular as { label, url }}
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
	</section>
	<section>
		<h2 class="text-mute text-xs dark:text-gray-300">Profiles</h2>
		<ul class="mt-2 flex flex-wrap gap-x-2 gap-y-4">
			{#each data.links.links_grouped.social as { label, url }}
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
	</section>
</main>
