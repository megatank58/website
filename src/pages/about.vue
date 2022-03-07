<template>
	<div
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
		"
		v-html="profile"
	></div>
</template>

<script lang="ts">
import { defineComponent } from 'vue-demi';
import { parseMarkdown } from '~/util';

export default defineComponent({
	data() {
		return {
			profile: '',
		};
	},
	async created() {
		await this.getProfile();
	},
	methods: {
		async getProfile() {
			const text = await (
				await fetch('https://raw.githubusercontent.com/megatank58/megatank58/main/README.md')
			).text();
			this.profile = parseMarkdown(text);
		},
	},
});
</script>
