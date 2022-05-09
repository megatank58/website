export const API_URL = 'https://bd.megatank58.me';

export async function useFetch<T>(route: string, stringOrBody?: boolean | object): Promise<T> {
	const data = await fetch(API_URL + route, {
		body: typeof stringOrBody === 'object' ? JSON.stringify(stringOrBody) : null,
		method: typeof stringOrBody === 'object' ? "POST" : "GET"
	});
	return stringOrBody ? ((await data.text()) as unknown as T) : ((await data.json()) as T);
}
