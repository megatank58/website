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
		v-html="readme"
	></div>
</template>

<script lang="ts">
import { useRoute, useRouter } from 'vue-router';
import { defineComponent } from 'vue-demi';
import { parseMarkdown } from '~/util';

export default defineComponent({
	setup() {
		return {
			route: useRoute().fullPath,
		};
	},
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
			let path =
				useRouter().currentRoute.value.fullPath;
			path = (path.replace('/projects/', '') + '/main/README.md').replace('#' + path.split('#')[1], '');
			const text = await (await fetch('https://raw.githubusercontent.com/Megatank58/' + path)).text()
			this.readme = parseMarkdown(text);
		},
	},
});
</script>
