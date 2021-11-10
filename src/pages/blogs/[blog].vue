<template>
	<div class="flex items-stretch flex-col m-auto">
		<article
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
			<div class="font-sans dark:text-white p-px">
				<div v-html="blog"></div>
			</div>
		</article>
	</div>
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
			blog: '',
		};
	},
	async created() {
		await this.getBlog();
	},
	methods: {
		async getBlog() {
			let path = useRouter().currentRoute.value.fullPath.replace('blogs/', '');
			path = path.replace('blogs/', '').replace('#' + path.split('#')[1], '');
			const text = await (
				await fetch(
					'https://raw.githubusercontent.com/Megatank58/website/main/blogs/' + path + '.md',
				)
			).text();
			this.blog = parseMarkdown(text);
		},
	},
});
</script>
