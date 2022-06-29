<template>
	<div class="flex items-center flex-col px-4 bg-base-200">
		<div v-for="(project, index) in projects" :key="project.name + index" class="sm:w-1/2 w-full m-4">
			<a href="/projects/ + project.name">
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
								<div class="badge badge-primary rounded mr-auto">
									Updated
									{{ duration.format(Date.now() - new Date(project.updated_at).getTime(), 1) }} ago
								</div>
								<div class="badge badge-warning rounded">{{ project.stargazers_count }} Stars</div>
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
			</a>
		</div>
	</div>
</template>

<script setup>
import { DurationFormatter } from '@sapphire/time-utilities';
import { useFetch } from '~/util';

let projects = [];

const duration = new DurationFormatter();
const data = await useFetch({ route: '/projects' });

projects = data
	.sort((x, y) => {
		return (Date.now() - new Date(x.updated_at).getTime()) - (Date.now() - new Date(y.updated_at).getTime());
	})
	.filter((project) => {
		return project.description && project.full_name.toLowerCase() !== 'megatank58/megatank58';
	});
</script>
