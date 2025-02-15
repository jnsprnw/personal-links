<script lang="ts">
	const { date }: { date: Date } = $props();

	const format = new Intl.DateTimeFormat('en-GB').format;
</script>

{#if date}
	<span class="text-mute mt-4 text-xs dark:text-gray-400">
		Last updated: <time datetime={date.toISOString()}>{format(date)}</time>
	</span>
{/if}
