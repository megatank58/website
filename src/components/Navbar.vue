<script setup lang="ts">
import { useDark, useToggle } from '@vueuse/core';

const isDarkMode = useDark({
	storageKey: 'theme',
});

const toggleDarkMode = useToggle(isDarkMode);
</script>

<template>
	<div
		class="
			font-bold font-sans
			text-gray-800
			dark:text-white dark:bg-dark-secondary
			flex
			items-center
			p-1
			-m-0
			mr-auto
			border-b border-gray-400
		"
		id="navbar"
	>
		<router-link
			class="
				font-bold font-sans
				rounded-md
				text-gray-800
				dark:text-white
				hover:bg-gray-300
				dark:hover:bg-gray-800
				ml-0.5
				p-2
				hover:text-blue-400
			"
			to="/"
			>Home</router-link
		>
		<a
			class="
				font-bold font-sans
				rounded-md
				text-gray-800
				dark:text-white
				hover:bg-gray-300
				dark:hover:bg-gray-800
				ml-0.5
				p-2
				hover:text-blue-400
			"
			href="https://github.com/Megatank58"
			>GitHub</a
		>
		<a
			class="
				font-bold font-sans
				rounded-md
				text-gray-800
				dark:text-white
				hover:bg-gray-300
				dark:hover:bg-gray-800
				ml-0.5
				p-2
				hover:text-blue-400
			"
			href="https://twitter.com/Megatank58"
			>Twitter</a
		>
		<div class="relative h-16 flex md:max-w-md md:w-full lg:max-w-lg">
			<div class="relative z-10 flex items-center md:hidden">
				<button
					class="
						md:block
						rounded-md
						p-2
						inline-flex
						items-center
						justify-center
						hover:bg-gray-300
						dark:hover:bg-gray-800
						focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white focus:text-gray-800
					"
					:aria-label="`Switch to ${isDarkMode ? 'light theme' : 'dark theme'}`"
					@click="toggleDarkMode()"
				>
					<heroicons-outline-sun
						v-if="!isDarkMode"
						class="fill-current text-gray-800 dark:text-white hover:text-blue-400 h-6 w-6"
						aria-hidden="true"
					/>
					<heroicons-outline-moon
						v-else
						class="fill-current text-gray-800 dark:text-white hover:text-blue-400 h-6 w-6"
						aria-hidden="true"
					/>
				</button>
			</div>
		</div>
		<div class="relative z-0 flex-1 px-2 flex lg:gap-2 items-center justify-center md:justify-end">
			<button
				class="
					hidden
					md:block
					rounded-md
					p-2
					hover:bg-gray-300
					dark:hover:bg-gray-800
					focus:outline-none focus:ring-1 focus:ring-inset focus:ring-white
				"
				:aria-label="`Switch to ${isDarkMode ? 'light theme' : 'dark theme'}`"
				@click="toggleDarkMode()"
			>
				<heroicons-outline-sun
					v-if="!isDarkMode"
					class="fill-current text-gray-800 dark:text-white hover:text-blue-400 h-6 w-6"
					aria-hidden="true"
				/>
				<heroicons-outline-moon
					v-else
					class="fill-current text-gray-800 dark:text-white hover:text-blue-400 h-6 w-6"
					aria-hidden="true"
				/>
			</button>
		</div>
	</div>
</template>
