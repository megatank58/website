export interface Blogs {
	tree: {
		path: string;
	}[];
}

export interface Blog {
	display_name: string;
    content: string;
	created_at: string;
}
