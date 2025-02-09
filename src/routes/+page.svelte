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

<main class="flex w-full max-w-72 flex-col gap-y-5">
	<header class="flex flex-col text-center">
		<h1 class="text-xl font-bold">Jonas Parnow</h1>
		<span>Designer for Information and Data</span>
		<span class="mt-4 text-xs text-gray-500">Last updated: <time>{updated}</time></span>
	</header>
	<section>
		<h2 class="text-xs">Links</h2>

		<ul class="flex flex-col gap-y-3">
			{#each data.links.links_grouped.regular as { label, url }}
				<li>
					<a class="block rounded-sm border border-gray-400 p-3" href={url}>
						<strong class="block text-base/none">{label}</strong>
						<small class="text-xs/none text-gray-500">{new URL(url).host}</small>
					</a>
				</li>
			{/each}
		</ul>
	</section>
	<section>
		<h2 class="text-xs">Profiles</h2>
		<ul class="flex gap-x-2 gap-y-3">
			{#each data.links.links_grouped.social as { label, url }}
				<li><a class="" href={url}>{label}</a></li>
			{/each}
		</ul>
	</section>
</main>
