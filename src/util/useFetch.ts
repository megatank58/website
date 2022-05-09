export const API_URL = 'https://8080-megatank58-backend-m4fq7uyr2kr.ws-us44.gitpod.io';

export async function useFetch<T>(route: string, stringOrBody?: boolean | object): Promise<T> {
	const data = await fetch(API_URL + route, {
		body: typeof stringOrBody === 'object' ? JSON.stringify(stringOrBody) : null,
		method: typeof stringOrBody === 'object' ? "POST" : "GET"
	});
	return stringOrBody ? ((await data.text()) as unknown as T) : ((await data.json()) as T);
}
