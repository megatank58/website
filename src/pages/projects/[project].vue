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
		v-html="readme"
	></div>
</template>

<script lang="ts">
import { defineComponent } from 'vue-demi';
import { parseMarkdown } from '~/util';

export default defineComponent({
	data() {
		return {
			readme: '',
		};
	},
	async created() {
		await this.getReadme();
	},
	methods: {
		async getReadme() {
			const text = await (
				await fetch('https://raw.githubusercontent.com/Megatank58/' + this.$route.params.project as string + '/main/README.md')
			).text();
			this.readme = parseMarkdown(text);
		},
	},
});
</script>
