<template>
	<div class="flex items-center flex-col px-4 bg-base-200">
		<div class="alert shadow-lg w-3/4">
			<div>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					class="stroke-info flex-shrink-0 w-6 h-6"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
					></path>
				</svg>
				<div>
					<h3 class="font-bold">Create a new blog</h3>
					<div class="text-xs">Have any new ideas?</div>
				</div>
			</div>
			<div class="flex-none">
				<router-link to="/dash/create" class="btn btn-primary btn-sm">Create</router-link>
			</div>
		</div>
		<div v-for="(blog, index) in blogs" :key="blog + '_' + index" class="w-3/4 m-4">
			<div :id="blog.name" class="card bg-base-300">
				<div class="card-body">
					<h2 class="card-title">
						{{ blog.name }}
						<button class="ml-auto badge badge-error rounded" @click="deleteBlog(blog.name)">
							X
						</button>
						<router-link :to="'/dash/edit/' + blog.name" class="badge badge-info rounded">
							EDIT
						</router-link>
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
						v-html="blog.header"
					></div>
				</div>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { Blog } from '~/types/Blog';
import { parseMarkdown, trim, useFetch } from '~/util';

export default defineComponent({
	data() {
		return {
			blogs: new Array<Blog>(),
			async deleteBlog(name: string) {
				useFetch({ route: `/blogs/delete/${name}`, getString: true });
				// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
				document.getElementById(name)?.parentNode?.removeChild(document.getElementById(name)!);
			},
		};
	},
	async created() {
		await this.getBlogs();
	},
	methods: {
		async getBlogs() {
			const data = await useFetch<Blog[]>({ route: '/blogs' });
			const blogs = new Array<Blog>();
			for (const blog of data) {
				blogs.push({
					name: blog.name,
					header: parseMarkdown(trim(blog.content ?? '', 256)),
				});
			}
			this.blogs = blogs.reverse();
		},
	},
});
</script>
