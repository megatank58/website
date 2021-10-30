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
			"
			v-for="(project, index) in projects"
			:key="project.name + '_' + index"
		>
			<router-link :to="/projects/ + project.name" class="font-bold font-sans dark:text-white">
				<h2>{{ project.full_name }}</h2>
			</router-link>
			<p class="font-sans dark:text-white">{{ project.description }}</p>
			<p class="font-sans dark:text-white"></p>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			projects: [],
		};
	},
	methods: {
		getProjects() {
			fetch('https://api.github.com/users/megatank58/repos')
				.then((res) => res.json())
				.then((json) => (this.projects = json));
		},
	},
	created() {
		this.getProjects();
        console.log(this.projects);
	},
};
</script>
