import { dev } from '$app/environment';
import { getLinks } from '$lib/pocketbase/pocketbase';

export async function load() {
	const links = await getLinks();
	return { links };
}

export const csr = dev;
export const prerender = true;
