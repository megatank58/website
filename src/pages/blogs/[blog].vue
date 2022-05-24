<template>
	<div
		class="
			font-mono
			prose
			max-w-none
			m-16
			p-4
			rounded-lg
			shadow-lg
			border-t-2 border-l-4 border-neutral-focus
			prose-pre:p-3 prose-pre:rounded prose-pre:overflow-x-auto
			prose-a:text-primary prose-a:no-underline
			prose-img:inline prose-img:m-1
			prose-p:m-1
			prose-h1:my-4
			prose-h1:border-b
			prose-h2:my-4
			prose-h2:border-b
		"
		v-html="blog"
	></div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { Blog } from '~/types/Blog';
import { parseMarkdown, useFetch } from '~/util';

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
			const data = await useFetch<Blog>({ route: '/blogs/' + this.$route.params.blog });
			this.blog = parseMarkdown(data.content ?? '');
		},
	},
});
</script>
