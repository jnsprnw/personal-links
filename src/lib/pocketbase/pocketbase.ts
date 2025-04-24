import PocketBase from 'pocketbase';
import type { LinksRecord, TypedPocketBase } from './types';

const url = Bun.env.POCKETBASE_URL;
if (!url) {
	throw new Error('POCKETBASE_URL not set');
}

const client = new PocketBase(url) as TypedPocketBase;
client.autoCancellation(false);

async function getCollection(collection: string) {
	return await client.collection(collection).getFullList({
		sort: 'order',
		filter: 'is_public = true'
	});
}

function getLastUpdated(collection: LinksRecord[]): Date {
	return new Date(
		Math.max(...collection.map(({ updated }) => new Date(updated || new Date()).getTime()))
	);
}

export async function getLinks() {
	const links = await getCollection('links');
	const updated = getLastUpdated(links);
	const links_grouped = Object.groupBy(links, ({ section }) => section);
	return { links_grouped, updated };
}
