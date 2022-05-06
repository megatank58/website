export const API_URL = 'https://bd.megatank58.me';

export async function useFetch<T>(route: string, string?: boolean): Promise<T> {
	const data = await fetch(API_URL + route);
	return string ? ((await data.text()) as unknown as T) : ((await data.json()) as T);
}
