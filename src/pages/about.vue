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
				<div v-html="profile"></div>
			</div>
		</article>
	</div>
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
				await fetch(
					'https://raw.githubusercontent.com/megatank58/megatank58/main/README.md',
				)
			).text();
			this.profile = parseMarkdown(text);
		},
	},
});
</script>
