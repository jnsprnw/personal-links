/**
* This file was @generated using pocketbase-typegen
*/

import type PocketBase from 'pocketbase'
import type { RecordService } from 'pocketbase'

export enum Collections {
	Authorigins = "_authOrigins",
	Externalauths = "_externalAuths",
	Mfas = "_mfas",
	Otps = "_otps",
	Superusers = "_superusers",
	Aliases = "aliases",
	Links = "links",
	Music = "music",
	Notes = "notes",
	ProjectClients = "project_clients",
	ProjectTopics = "project_topics",
	Projects = "projects",
	Users = "users",
}

// Alias types for improved usability
export type IsoDateString = string
export type RecordIdString = string
export type HTMLString = string

// System fields
export type BaseSystemFields<T = never> = {
	id: RecordIdString
	collectionId: string
	collectionName: Collections
	expand?: T
}

export type AuthSystemFields<T = never> = {
	email: string
	emailVisibility: boolean
	username: string
	verified: boolean
} & BaseSystemFields<T>

// Record types for each collection

export type AuthoriginsRecord = {
	collectionRef: string
	created?: IsoDateString
	fingerprint: string
	id: string
	recordRef: string
	updated?: IsoDateString
}

export type ExternalauthsRecord = {
	collectionRef: string
	created?: IsoDateString
	id: string
	provider: string
	providerId: string
	recordRef: string
	updated?: IsoDateString
}

export type MfasRecord = {
	collectionRef: string
	created?: IsoDateString
	id: string
	method: string
	recordRef: string
	updated?: IsoDateString
}

export type OtpsRecord = {
	collectionRef: string
	created?: IsoDateString
	id: string
	password: string
	recordRef: string
	sentTo?: string
	updated?: IsoDateString
}

export type SuperusersRecord = {
	created?: IsoDateString
	email: string
	emailVisibility?: boolean
	id: string
	password: string
	tokenKey: string
	updated?: IsoDateString
	verified?: boolean
}

export type AliasesRecord = {
	created?: IsoDateString
	id: string
	slug?: string
	updated?: IsoDateString
}

export enum LinksSectionOptions {
	"regular" = "regular",
	"social" = "social",
}
export type LinksRecord = {
	created?: IsoDateString
	id: string
	is_public?: boolean
	label?: string
	order?: number
	section?: LinksSectionOptions
	updated?: IsoDateString
	url?: string
}

export enum MusicCategoryOptions {
	"Sets" = "Sets",
}
export type MusicRecord = {
	category?: MusicCategoryOptions
	created?: IsoDateString
	id: string
	label?: string
	updated?: IsoDateString
	url?: string
}

export type NotesRecord = {
	aliases?: RecordIdString[]
	created?: IsoDateString
	external_url?: string
	id: string
	introduction?: string
	slug?: string
	title?: string
	updated?: IsoDateString
}

export type ProjectClientsRecord = {
	created?: IsoDateString
	id: string
	label?: string
	slug?: string
	updated?: IsoDateString
}

export type ProjectTopicsRecord = {
	created?: IsoDateString
	id: string
	label?: string
	slug?: string
	updated?: IsoDateString
}

export type ProjectsRecord = {
	aliases?: RecordIdString[]
	clients?: RecordIdString[]
	contribution?: HTMLString
	created?: IsoDateString
	end?: IsoDateString
	headline?: string
	id: string
	introduction?: string
	isFeatured?: boolean
	isPublic?: boolean
	slug?: string
	start?: IsoDateString
	title?: string
	topics?: RecordIdString[]
	updated?: IsoDateString
	url?: string
}

export type UsersRecord = {
	avatar?: string
	created?: IsoDateString
	email: string
	emailVisibility?: boolean
	id: string
	name?: string
	password: string
	tokenKey: string
	updated?: IsoDateString
	verified?: boolean
}

// Response types include system fields and match responses from the PocketBase API
export type AuthoriginsResponse<Texpand = unknown> = Required<AuthoriginsRecord> & BaseSystemFields<Texpand>
export type ExternalauthsResponse<Texpand = unknown> = Required<ExternalauthsRecord> & BaseSystemFields<Texpand>
export type MfasResponse<Texpand = unknown> = Required<MfasRecord> & BaseSystemFields<Texpand>
export type OtpsResponse<Texpand = unknown> = Required<OtpsRecord> & BaseSystemFields<Texpand>
export type SuperusersResponse<Texpand = unknown> = Required<SuperusersRecord> & AuthSystemFields<Texpand>
export type AliasesResponse<Texpand = unknown> = Required<AliasesRecord> & BaseSystemFields<Texpand>
export type LinksResponse<Texpand = unknown> = Required<LinksRecord> & BaseSystemFields<Texpand>
export type MusicResponse<Texpand = unknown> = Required<MusicRecord> & BaseSystemFields<Texpand>
export type NotesResponse<Texpand = unknown> = Required<NotesRecord> & BaseSystemFields<Texpand>
export type ProjectClientsResponse<Texpand = unknown> = Required<ProjectClientsRecord> & BaseSystemFields<Texpand>
export type ProjectTopicsResponse<Texpand = unknown> = Required<ProjectTopicsRecord> & BaseSystemFields<Texpand>
export type ProjectsResponse<Texpand = unknown> = Required<ProjectsRecord> & BaseSystemFields<Texpand>
export type UsersResponse<Texpand = unknown> = Required<UsersRecord> & AuthSystemFields<Texpand>

// Types containing all Records and Responses, useful for creating typing helper functions

export type CollectionRecords = {
	_authOrigins: AuthoriginsRecord
	_externalAuths: ExternalauthsRecord
	_mfas: MfasRecord
	_otps: OtpsRecord
	_superusers: SuperusersRecord
	aliases: AliasesRecord
	links: LinksRecord
	music: MusicRecord
	notes: NotesRecord
	project_clients: ProjectClientsRecord
	project_topics: ProjectTopicsRecord
	projects: ProjectsRecord
	users: UsersRecord
}

export type CollectionResponses = {
	_authOrigins: AuthoriginsResponse
	_externalAuths: ExternalauthsResponse
	_mfas: MfasResponse
	_otps: OtpsResponse
	_superusers: SuperusersResponse
	aliases: AliasesResponse
	links: LinksResponse
	music: MusicResponse
	notes: NotesResponse
	project_clients: ProjectClientsResponse
	project_topics: ProjectTopicsResponse
	projects: ProjectsResponse
	users: UsersResponse
}

// Type for usage with type asserted PocketBase instance
// https://github.com/pocketbase/js-sdk#specify-typescript-definitions

export type TypedPocketBase = PocketBase & {
	collection(idOrName: '_authOrigins'): RecordService<AuthoriginsResponse>
	collection(idOrName: '_externalAuths'): RecordService<ExternalauthsResponse>
	collection(idOrName: '_mfas'): RecordService<MfasResponse>
	collection(idOrName: '_otps'): RecordService<OtpsResponse>
	collection(idOrName: '_superusers'): RecordService<SuperusersResponse>
	collection(idOrName: 'aliases'): RecordService<AliasesResponse>
	collection(idOrName: 'links'): RecordService<LinksResponse>
	collection(idOrName: 'music'): RecordService<MusicResponse>
	collection(idOrName: 'notes'): RecordService<NotesResponse>
	collection(idOrName: 'project_clients'): RecordService<ProjectClientsResponse>
	collection(idOrName: 'project_topics'): RecordService<ProjectTopicsResponse>
	collection(idOrName: 'projects'): RecordService<ProjectsResponse>
	collection(idOrName: 'users'): RecordService<UsersResponse>
}
