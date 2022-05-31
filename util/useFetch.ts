const API_URL = 'https://bd.megatank58.me'

export interface FetchOptions {
	route: string;
	getString?: boolean;
	body?: Record<string, string>;
	token?: string;
}

export async function useFetch<T>(options: FetchOptions): Promise<T> {
	const data = await fetch(API_URL + options.route, {
		body: JSON.stringify(options.body) ?? null,
		method: options.body ? 'POST' : 'GET',
		headers: {
			Authorization: options.token,
			"Content-Type": "application/json"
		},
	});
	return options.getString ? ((await data.text()) as unknown as T) : ((await data.json()) as T);
}

export function getToken(): string {
	return process.client ? localStorage.getItem('token') : ''
}

export function setToken(token: string) {
	process.client ? localStorage.setItem('token', token) : ''
}