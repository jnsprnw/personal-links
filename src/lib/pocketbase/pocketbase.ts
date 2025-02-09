import PocketBase from 'pocketbase';
// import { TypedPocketBase } from '../src/types/pocketbase-types';

const url = Bun.env.POCKETBASE_URL;
if (!url) {
	throw new Error('POCKETBASE_URL not set');
}

const client = new PocketBase(url); // as TypedPocketBase;
client.autoCancellation(false);

async function getCollection(collection: string) {
	return await client.collection(collection).getFullList({
		sort: '-created'
	});
}

function getLastUpdated(collection) {
	return Math.max(...collection.map(({ updated }) => new Date(updated)));
}

export async function getLinks() {
	const links = await getCollection('links');
	const updated = getLastUpdated(links);
	const links_ordered = links.sort((a, b) => a.order - b.order);
	const links_grouped = Object.groupBy(links_ordered, ({ section }) => section);
	return { links_grouped, updated };
}
