<template>
	<div class="flex items-stretch flex-col m-auto px-4">
		<div
			v-for="(project, index) in projects"
			:key="project.name + '_' + index"
			class="py-2.5 mt-3.5 shadow-lg hover:shadow-xl rounded-lg"
		>
			<router-link :to="/projects/ + project.name" class="font-bold font-sans text-base-content">
				<h2 class="py-2 text-xl font-bold font-sans mb-2">
					{{ project.full_name }}
					<svg
						v-if="project.fork"
						xmlns="http://www.w3.org/2000/svg"
						xmlns:xlink="http://www.w3.org/1999/xlink"
						aria-hidden="true"
						role="img"
						class="iconify iconify--fe"
						width="20"
						height="24"
						preserveAspectRatio="xMidYMid meet"
						viewBox="0 0 24 24"
					>
						<path
							d="M9 7.83V12h3a3 3 0 0 0 3-3V7.83a3.001 3.001 0 1 1 2 0V9a5 5 0 0 1-5 5H9v2.17a3.001 3.001 0 1 1-2 0V7.83a3.001 3.001 0 1 1 2 0zM8 20a1 1 0 1 0 0-2a1 1 0 0 0 0 2zm8-14a1 1 0 1 0 0-2a1 1 0 0 0 0 2zM8 6a1 1 0 1 0 0-2a1 1 0 0 0 0 2z"
							fill="currentColor"
							fill-rule="evenodd"
						></path></svg
				></h2>
			</router-link>
			<div class="font-sans text-base-content">
				<div class="float-left py-2">{{ project.description }}</div>
				<div class="float-right py-2">
					{{
						new Date(project.created_at).getDate() +
						'/' +
						(new Date(project.created_at).getMonth() + 1) +
						'/' +
						new Date(project.created_at).getFullYear()
					}}
				</div>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue-demi';
import { Project } from '~/types/Project';

export default defineComponent({
	data() {
		return {
			projects: new Array<Project>(),
		};
	},
	async created() {
		await this.getProjects();
	},
	methods: {
		async getProjects() {
			const json: Project[] = await (
				await fetch('https://api.github.com/users/megatank58/repos')
			).json();

			const sorted = json.sort((x, y) => {
				return Number(x.fork) - Number(y.fork);
			});
			const filtered = sorted.filter((project) => {
				return project.description && project.full_name.toLowerCase() !== 'megatank58/megatank58';
			});
			this.projects = filtered;
		},
	},
});
</script>
