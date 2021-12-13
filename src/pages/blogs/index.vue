<template>
	<div class="flex items-stretch flex-col m-auto">
		<div
			v-for="(blog, index) in blogs"
			:key="blog + '_' + index"
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
		>
			<router-link :to="/blogs/ + blog.name" class="font-sans dark:text-white">
				<div v-html="blog.content" class="mr-2">
				</div>
				<p class="font-sans dark:text-white">
					{{
						new Date(blog.createdAt).getDate() +
						'/' +
						(new Date(blog.createdAt).getMonth() + 1) +
						'/' +
						new Date(blog.createdAt).getFullYear()
					}}
				</p>
			</router-link>
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { parseMarkdown, trim } from '../../util';
import { Blog, Blogs } from '~/types/Blog';

export default defineComponent({
	data() {
		return {
			blogs: new Array<Blog>(),
		};
	},
	async created() {
		await this.getBlogs();
	},
	methods: {
		async getBlogs() {
			const json: Blogs = await (
				await fetch('https://api.github.com/repos/megatank58/website/git/trees/main?recursive=1')
			).json();
			const blogs = json.tree.filter(
				(blog) => blog.path.startsWith('blogs') && blog.path !== 'blogs',
			);
			const _blogs = new Array<Blog>();
			for (const blog of blogs) {
				_blogs.push({
					name: blog.path.split('/')[1].replace('.md', ''),
					displayName: blog.path.split('/')[1].replace('.md', '').replaceAll('-', ' '),
					content: parseMarkdown(trim(
						await (
							await fetch(
								'https://raw.githubusercontent.com/Megatank58/website/main/blogs/' + blog.path.split('/')[1],
							)
						).text(),
						172,
					)),
					createdAt: (
						await (
							await fetch(
								'https://api.github.com/repos/megatank58/website/commits?path=blogs%2F' +
									blog.path.split('/')[1] +
									'&page=1&per_page=1',
							)
						).json()
					)[0].commit.committer.date,
				});
			}
			this.blogs = _blogs.reverse();
		},
	},
});
</script>
