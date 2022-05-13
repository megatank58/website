const API_URL = 'https://8080-megatank58-website-eucv5xdt8m8.ws-us44.gitpod.io'

export interface FetchOptions {
	route: string;
	getString?: boolean;
	body?: Record<string, string>;
}

export async function useFetch<T>(options: FetchOptions): Promise<T> {
	const data = await fetch(API_URL + options.route, {
		body: JSON.stringify(options.body) ?? null,
		method: options.body ? 'POST' : 'GET',
		headers: {
			Authorization: `${localStorage.getItem('token')}`,
			"Content-Type": "application/json"
		},
	});
	return options.getString ? ((await data.text()) as unknown as T) : ((await data.json()) as T);
}
