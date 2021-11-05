<template>
	<div class="flex items-stretch flex-col m-auto">
		<div
			class="
				dark:bg-dark-secondary
				py-2.5
				pb-2.5
				pr-4
				pl-4
				mt-3.5
				border-b border-solid border-gray-400
				dark:border-dark-primary
				hover:shadow-md
				rounded-lg
			"
			v-for="(blog, index) in blogs"
			:key="blog + '_' + index"
		>
			<router-link :to="/blogs/ + blog" class="font-bold font-sans dark:text-white">
				<h2 class="text-base">
					<span class="mr-2">
						{{ blog }}
					</span>
				</h2>
			</router-link>
		</div>
	</div>
</template>

<script lang="ts">
import { Blog } from '~/types/Blog';
const blogs: string[] = [];
export default {
	data() {
		return {
			blogs,
		};
	},
	methods: {
		getBlogs(): void {
			fetch('https://api.github.com/repos/megatank58/website/git/trees/main?recursive=1')
				.then((res) => res.json())
				.then((json: Blog) => {
					const blogs = json.tree.filter(
						(blog) => blog.path.startsWith('blogs') && blog.path !== 'blogs',
					);
					for (const blog of blogs) {
						//@ts-ignore
						this.blogs.push(blog.path.split('/')[1]);
					}
				});
		},
	},
	created(): void {
		//@ts-ignore
		this.getBlogs();
	},
};
</script>
