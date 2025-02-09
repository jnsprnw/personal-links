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

<main class="flex w-full max-w-96 flex-col gap-y-8 p-2">
	<header class="flex flex-col text-center">
		<h1 class="text-mute decoration-marker text-xl font-bold underline">Jonas Parnow</h1>
		<span class="text-mute">Designer for Information and Data</span>
		<span class="text-mute mt-4 text-xs">Last updated: <time>{updated}</time></span>
	</header>
	<section>
		<h2 class="text-mute mb-1 text-xs">Links</h2>

		<ul class="flex flex-col gap-y-3">
			{#each data.links.links_grouped.regular as { label, url }}
				<li>
					<a
						class="border-border hover:border-blue block rounded-sm border p-3 transition-colors"
						href={url}
					>
						<strong class="text-blue block text-base/none">{label}</strong>
						<small class="text-mute text-xs/none">{new URL(url).host}</small>
					</a>
				</li>
			{/each}
		</ul>
	</section>
	<section>
		<h2 class="text-mute text-xs">Profiles</h2>
		<ul class="mt-2 flex flex-wrap gap-x-2 gap-y-4">
			{#each data.links.links_grouped.social as { label, url }}
				<li>
					<a
						class="bg-border text-mute hover:bg-blue rounded-md px-3 py-2 text-sm hover:text-white"
						href={url}>{label}</a
					>
				</li>
			{/each}
		</ul>
	</section>
</main>
