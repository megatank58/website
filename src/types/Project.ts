export interface Project {
	name: string;
	owner: {
		login: string;
	};
	license: {
		name: string;
	}
	full_name: string;
	description: string;
	language: string;
	created_at: number;
	updated_at: number;
	stargazers_count: number;
	watchers_count: number;
	size: number;
	fork: boolean;
}
