<script lang="ts">
	import Updated from '$lib/ui/Updated.svelte';
	const { date }: { date: Date } = $props();
</script>

<header class="flex flex-col text-center">
	<h1 class="text-mute decoration-marker text-xl font-bold underline dark:text-gray-100">
		Jonas Parnow
	</h1>
	<span class="text-mute dark:text-gray-300"> Designer for Information and Data </span>
	<Updated {date} />
</header>
