export interface Blogs {
	tree: {
		path: string;
	}[];
}

export interface Blog {
	name: string;
	displayName: string;
    content: string;
	createdAt: string;
}
