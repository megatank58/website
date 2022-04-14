<template>
	<div class="flex items-center flex-col px-4">
		<div v-for="(project, index) in projects" :key="project.name + '_' + index" class="w-3/4 m-4">
			<router-link :to="/projects/ + project.name">
				<div class="card bg-base-200 shadow- hover:shadow-md">
					<div class="card-body">
						<h2 class="card-title">
							{{ project.name }}
							<div v-if="project.fork" class="badge badge-primary">FORK</div>
						</h2>
						<p>{{ project.description }}</p>
						<div class="card-actions justify-end">
							<div class="badge badge-outline">{{ project.stargazers_count }} Stars</div>
							<div class="badge badge-outline">{{ project.watchers_count }} Watchers</div>
							<div class="badge badge-outline">
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
			</router-link>
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
