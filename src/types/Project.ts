export interface Project {
	name: string;
	owner: {
		login: string;
	};
	full_name: string;
	description: string;
	created_at: number;
	stargazers_count: number;
	watchers_count: number;
	fork: boolean;
}
