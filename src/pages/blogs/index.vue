<template>
	<div class="flex items-stretch flex-col m-auto px-4">
		<div
			v-for="(blog, index) in blogs"
			:key="blog + '_' + index"
			class="
				prose
				prose-pre:text-neutral-content prose-pre:p-3 prose-pre:rounded prose-pre:overflow-x-auto
				max-w-none
				prose-a:text-primary prose-a:no-underline
				prose-img:inline prose-img:m-1
				prose-p:m-1
				prose-h1:border-border prose-h1:border-b prose-h1:mt-1 prose-h1:text-bold
				prose-h2:border-b
				prose-h2:mt-1
				prose-h2:text-bold
				prose-h2:border-solid
				prose-h2:border-border
				flex
				items-stretch
				flex-col
				m-auto
				py-2.5
				px-4
				mt-3.5
				shadow-lg
				hover:shadow-xl
				rounded-lg
				w-full
			"
		>
			<router-link :to="/blogs/ + blog.name" class="font-sans text-base-content">
				<div class="mr-2" v-html="blog.content"></div>
				<p class="font-sans text-base-content">
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
					content: parseMarkdown(
						trim(
							await (
								await fetch(
									'https://raw.githubusercontent.com/Megatank58/website/main/blogs/' +
										blog.path.split('/')[1],
								)
							).text(),
							128,
						),
					),
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
