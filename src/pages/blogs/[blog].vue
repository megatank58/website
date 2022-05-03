<template>
	<div
		class="
			prose
			max-w-none
			m-16
			p-4
			rounded-lg
			shadow-lg
			border-t-2 border-l-4 border-neutral-focus
			prose-pre:p-3 prose-pre:rounded prose-pre:overflow-x-auto
			prose-a:text-primary prose-a:no-underline
			prose-img:inline prose-img:m-1 prose-p:m-1 prose-h1:my-4 prose-h2:my-4
		"
		v-html="blog"
	></div>
</template>

<script lang="ts">
import { defineComponent } from 'vue-demi';
import { Blog } from '~/types/Blog';

declare const BLOGS: Blog[];

export default defineComponent({
	data() {
		return {
			blog: '',
		};
	},
	async created() {
		await this.getBlog();
	},
	methods: {
		async getBlog() {
			const name = (this.$route.params.blog as string).replaceAll('-', ' ').toLowerCase();
			this.blog = BLOGS.find((blog) => blog.name.toLowerCase() === name)?.content ?? '';
		},
	},
});
</script>
