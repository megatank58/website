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
			<router-link :to="/blogs/ + blog.name" class="font-bold font-sans dark:text-white">
				<h2 class="text-base">
					<span class="mr-2">
						{{ blog.displayName }}
					</span>
					<p class="font-sans dark:text-white">
						Created at
						{{
							new Date(blog.createdAt).getDate() +
							'/' +
							(new Date(blog.createdAt).getMonth() + 1) +
							'/' +
							new Date(blog.createdAt).getFullYear()
						}}
					</p>
				</h2>
			</router-link>
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { Blog } from '~/types/Blog';

export default defineComponent({
	data() {
		return {
			blogs: new Array<{ name: string; createdAt: string }>(),
		};
	},
	async created() {
		await this.getBlogs();
	},
	methods: {
		async getBlogs() {
			const json: Blog = await (
				await fetch('https://api.github.com/repos/megatank58/website/git/trees/main?recursive=1')
			).json();
			const blogs = json.tree.filter(
				(blog) => blog.path.startsWith('blogs') && blog.path !== 'blogs',
			);
			const _blogs = new Array<{ name: string; displayName: string; createdAt: string }>();
			for (const blog of blogs) {
				_blogs.push({
					name: blog.path.split('/')[1].replace('.md', ''),
					displayName: blog.path.split('/')[1].replace('.md', '').replaceAll('-', ' '),
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
