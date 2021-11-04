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
					{{ project.full_name
					}}<svg v-if="project.fork"
						xmlns="http://www.w3.org/2000/svg"
						xmlns:xlink="http://www.w3.org/1999/xlink"
						aria-hidden="true"
						role="img"
						class="iconify iconify--fa"
						width="21.34"
						height="32"
						preserveAspectRatio="xMidYMid meet"
						viewBox="0 0 1024 1536"
					>
						<path
							d="M288 1344q0-40-28-68t-68-28t-68 28t-28 68t28 68t68 28t68-28t28-68zm0-1152q0-40-28-68t-68-28t-68 28t-28 68t28 68t68 28t68-28t28-68zm640 128q0-40-28-68t-68-28t-68 28t-28 68t28 68t68 28t68-28t28-68zm96 0q0 52-26 96.5T928 486q-2 287-226 414q-67 38-203 81q-128 40-169.5 71T288 1152v26q44 25 70 69.5t26 96.5q0 80-56 136t-136 56t-136-56t-56-136q0-52 26-96.5t70-69.5V358q-44-25-70-69.5T0 192q0-80 56-136T192 0t136 56t56 136q0 52-26 96.5T288 358v497q54-26 154-57q55-17 87.5-29.5t70.5-31t59-39.5t40.5-51t28-69.5T736 486q-44-25-70-69.5T640 320q0-80 56-136t136-56t136 56t56 136z"
							fill="currentColor"
						></path>
					</svg>
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
					//@ts-ignore
					this.projects = json;
				});
		},
	},
	created(): void {
		//@ts-ignore
		this.getProjects();
	},
};
</script>
