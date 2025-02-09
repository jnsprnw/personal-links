import { getLinks } from '$lib/pocketbase/pocketbase';

export async function load() {
	const links = await getLinks();
	return { links };
}
