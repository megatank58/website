<template>
	<div class="flex items-center flex-col px-4 bg-base-200">
		<div v-for="(project, index) in projects" :key="project.name + index" class="sm:w-1/2 m-4">
			<NuxtLink :to="/projects/ + project.name">
				<div class="card bg-base-300 hover:shadow-md">
					<div class="card-body">
						<h2 class="card-title">
							<span class="font-extralight"
								>{{ project.owner.login }}/<span class="font-bold">{{ project.name }}</span></span
							>
							<div v-if="project.fork" class="badge badge-primary">FORK</div>
						</h2>
						<p>{{ project.description }}</p>
						<div>
							<div class="card-actions justify-end pt-1">
								<div class="badge badge-secondary rounded mr-auto">
									Updated
									{{ (new DurationFormatter()).format(Date.now() - new Date(project.updated_at).getTime(), 1) }} ago
								</div>
								<div class="badge badge-info rounded">{{ project.stargazers_count }} Stars</div>
								<div class="badge badge-info rounded">{{ project.watchers_count }} Watchers</div>
							</div>
							<div class="card-actions">
								<div v-if="project.language" class="badge badge-error rounded mt-1">
									{{ project.language }}
								</div>
								<div v-if="project.license" class="badge badge-success rounded ml-auto mt-1">
									{{ project.license.name }}
								</div>
							</div>
						</div>
					</div>
				</div>
			</NuxtLink>
		</div>
	</div>
</template>

<script setup>
import { DurationFormatter } from '@sapphire/time-utilities';
import { useFetch } from '~/util';

let projects = [];

const data = await useFetch({ route: '/projects' });

projects = data
	.sort((x, y) => {
		return Number(x.fork) - Number(y.fork);
	})
	.filter((project) => {
		return project.description && project.full_name.toLowerCase() !== 'megatank58/megatank58';
	});
</script>
