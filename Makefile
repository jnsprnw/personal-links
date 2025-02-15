dev:
	bun --bun run dev

types:
	bunx pocketbase-typegen --env --out src/lib/pocketbase/types.ts
