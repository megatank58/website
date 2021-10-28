<template>
	<footer class="text-gray-800 dark:text-white dark:bg-dark-secondary">
		<div class="max-w-3xl mx-auto text-center px-16 pt-10 pb-4 text-gray-200">
			<strong
				><router-link to="/" class="text-gray-800 dark:text-white dark:hover:bg-gray-800 ml-0.5 p-2"
					>Home</router-link
				></strong
			>
			<p class="mb-4 text-gray-800 dark:text-white dark:hover:bg-gray-800 ml-0.5 p-2">
				You have reached the end!
			</p>
			<p
				class="
					text-xs
					break-words-legacy
					text-gray-800
					dark:text-white dark:hover:bg-gray-800
					ml-0.5
					p-2
				"
			>
				commit: {{ gitCommit }}<br />
				built at: {{ builtAt }}
			</p>
		</div>
	</footer>
</template>

<script setup lang="ts">
import { ref } from 'vue';

declare const GIT_COMMIT_HASH: string;
declare const BUILT_AT: string;

const gitCommit = ref(GIT_COMMIT_HASH);
const builtAt = ref(new Date(BUILT_AT).toUTCString());
</script>
