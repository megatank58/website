<script lang="ts">
import { defineComponent } from 'vue';
import { parseMarkdown } from '../util';

export default defineComponent({
	data() {
		return {
			content: '',
		};
	},
	async created() {
		await this.parseContent();
	},
	methods: {
		async parseContent() {
			this.content = parseMarkdown(
				`Hey there! I am **megatank58** JS/TS developer from India, 
				working on random projects, playing games or *perhaps* writing notes, 
				After programming for two years I have got a lot of experience ~~and stackoverflow searches~~. 
				At the moment I'm learning frontend, this website being a portfolio of it. I hope you enjoy!`
			);
		},
	},
});
</script>

<template>
	<div
		class="
			font-sans
			dark:text-white dark:bg-dark-secondary
			pb-2.5
			pr-4
			pl-4
			mt-3.5
			border-b border-solid border-gray-400
			dark:border-dark-primary
			hover:shadow-md
			rounded-lg
			overflow-auto
		"
	>
		<div>
			<img src="/src/assets/logo.png" class="float-left pb-2" />
			<div class="text-center pt-40 mt-0">
				<div class="text-xl" v-html="content"></div>
			</div>
		</div>
	</div>
	<div
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
		<router-link to="/projects">
			<a>
				<h2 class="text-xl font-bold font-sans mb-2 dark:text-white">My Projects →</h2>
				<p class="dark:text-white">
					Projects on which im currently working on and contributing with GitHub...
				</p>
			</a>
		</router-link>
	</div>
	<div
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
		<router-link to="/blogs">
			<a>
				<h2 class="text-xl font-bold font-sans mb-2 dark:text-white">My Blogs →</h2>
				<p class="dark:text-white">I write blogs every week! Check them out here</p>
			</a>
		</router-link>
	</div>
	<div
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
		<router-link to="/about">
			<a>
				<h2 class="text-xl font-bold font-sans mb-2 dark:text-white">About me →</h2>
				<p class="dark:text-white">Learn more about me and ways to contact me for queries...</p>
			</a>
		</router-link>
	</div>
</template>
