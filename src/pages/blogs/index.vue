<template>
	<div class="flex items-center flex-col px-4 bg-base-200">
		<div v-for="(blog, index) in blogs" :key="blog + '_' + index" class="w-3/4 m-4">
			<div class="card bg-base-300 hover:shadow-md">
				<div class="card-body">
					<h2 class="card-title">
						{{ blog.display_name }}
					</h2>

					<div
						class="
							prose
							prose-pre:text-neutral-content
							prose-pre:p-3
							prose-pre:rounded
							prose-pre:overflow-x-auto
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
						"
						v-html="blog.content"
					></div>
					<div class="card-actions justify-end">
						<div class="badge badge-outline">
							{{
								new Date(blog.created_at).getDate() +
								'/' +
								(new Date(blog.created_at).getMonth() + 1) +
								'/' +
								new Date(blog.created_at).getFullYear()
							}}
						</div>
					</div>
				</div>
			</div>
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
				const display_name = blog.path.split('/')[1].replace('.md', '').replaceAll('-', ' ');
				_blogs.push({
					display_name,
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
					created_at: (
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
