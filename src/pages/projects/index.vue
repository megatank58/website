<template>
	<div class="flex items-stretch flex-col m-auto">
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
			v-for="(project, index) in projects"
			:key="project.name + '_' + index"
		>
			<router-link :to="/projects/ + project.name" class="font-bold font-sans dark:text-white">
				<h2 class="text-base">
					<span class="mr-2">
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
					></span>
				</h2>
			</router-link>
			<p class="font-sans dark:text-white">{{ project.description }}</p>
			<p class="font-sans dark:text-white"></p>
		</div>
	</div>
</template>

<script lang="ts">
import { Project } from '~/types/Project';
const projects: Project[] = [];
export default {
	data() {
		return {
			projects,
		};
	},
	methods: {
		getProjects(): void {
			fetch('https://api.github.com/users/megatank58/repos')
				.then((res) => res.json())
				.then((json: Project[]) => {
					const sorted = json.sort((x, y) => {
						return Number(x.fork) - Number(y.fork);
					});
					const filtered = sorted.filter((project) => {
						return project.description && project.full_name !== 'Megatank58/Megatank58';
					});
					//@ts-ignore
					this.projects = filtered;
				});
		},
	},
	created(): void {
		//@ts-ignore
		this.getProjects();
	},
};
</script>
