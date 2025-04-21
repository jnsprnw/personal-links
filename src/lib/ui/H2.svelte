<script lang="ts">
	import { kebabCase } from 'lodash-es';

	const { str }: { str: string } = $props();
</script>

<h2 class="text-mute text-xs dark:text-gray-300" id={kebabCase(str)}>{str}</h2>
