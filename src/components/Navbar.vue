<script setup lang="ts">
import { isDarkMode, toggleDarkMode } from '~/util/DarkMode';
import { ref } from 'vue';

const isOpen = ref(false);
</script>

<template>
	<nav
		class="
			hidden
			font-bold font-sans
			text-gray-800
			dark:text-white dark:bg-dark-secondary
			md:flex md:py-2
			items-center
			p-1
			-m-0
			mr-auto
			border-b border-gray-400
			dark:border-dark-primary
			mt-3
			rounded-md
		"
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
			"
			href="https://github.com/Megatank58"
			>GitHub</a
		><heroicons-outline-external-link class="h-5 w-5" />
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
			"
			href="https://twitter.com/Megatank58"
			>Twitter</a
		><heroicons-outline-external-link class="h-5 w-5" />
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
					class="fill-current text-gray-800 dark:text-white h-6 w-6"
					aria-hidden="true"
				/>
				<heroicons-outline-moon
					v-else
					class="fill-current text-gray-800 dark:text-white h-6 w-6"
					aria-hidden="true"
				/>
			</button>
		</div>
	</nav>

	<div
		class="
			md:hidden
			relative
			h-16
			flex
			md:max-w-md md:w-full
			lg:max-w-lg
			font-bold font-sans
			text-gray-800
			dark:text-white dark:bg-dark-secondary
			p-1
			-m-0
			ml-auto
			border-b border-gray-400
			dark:border-dark-primary
			mt-3
			rounded-md
		"
	>
		<div class="relative z-10 flex items-center md:hidden">
			<button
				class="
					rounded-md
					inline-flex
					items-center
					justify-center
					focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white
					p-1
				"
				:aria-label="`Switch to ${isDarkMode ? 'light theme' : 'dark theme'}`"
				@click="toggleDarkMode()"
			>
				<heroicons-outline-sun
					v-if="!isDarkMode"
					class="fill-current text-gray-800 dark:text-white h-6 w-6"
					aria-hidden="true"
				/>
				<heroicons-outline-moon
					v-else
					class="fill-current text-gray-800 dark:text-white h-6 w-6"
					aria-hidden="true"
				/>
			</button>
		</div>
		<div class="relative z-10 flex items-center md:hidden ml-auto">
			<button
				type="button"
				class="
					rounded-md
					p-2
					inline-flex
					items-center
					justify-center
					text-gray-200
					hover:bg-discord-blurple-630 hover:text-white
					focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white
				"
				aria-controls="mobile-menu"
				:aria-expanded="isOpen"
				@click="isOpen = !isOpen"
			>
				<span class="sr-only">Open menu</span>
				<heroicons-outline-menu :class="{ hidden: isOpen, block: !isOpen }" aria-hidden="true" />
				<heroicons-outline-x :class="{ block: isOpen, hidden: !isOpen }" aria-hidden="true" />
			</button>
		</div>
	</div>
	<transition
		name="transition"
		enter-active-class="transition transform-gpu duration-300 ease-out"
		enter-from-class="translate-x-12 opacity-0"
		enter-to-class="translate-x-0 opacity-100"
	>
		<nav v-if="isOpen" id="mobile-menu" class="md:hidden" aria-label="Global navigation">
			<div class="pt-2 pb-3 px-2 space-y-1 font-bold font-sans
			text-gray-800
			dark:text-white dark:bg-dark-secondary
			p-1
			-m-0
			ml-auto
			border-b border-gray-400
			dark:border-dark-primary
			mt-3
			rounded-md">
				<router-link
					to="/"
					class="
						font-bold font-sans
						rounded-md
						text-gray-800
						dark:text-white
						hover:bg-gray-300
						dark:hover:bg-dark-primary
						py-2
						px-3
						block
					"
					@click="isOpen = !isOpen"
					>Home</router-link
				>
				<a
					class="
						font-bold font-sans
						rounded-md
						text-gray-800
						dark:text-white
						hover:bg-gray-300
						dark:hover:bg-dark-primary
						py-2
						px-3
						block
					"
					href="https://github.com/Megatank58"
					><span class="mr-2">GitHub</span><heroicons-outline-external-link class="h-5 w-5 inline-block" /></a
				>

				<a
					class="
						font-bold font-sans
						rounded-md
						text-gray-800
						dark:text-white
						hover:bg-gray-300
						dark:hover:bg-dark-primary
						py-2
						px-3
						block
					"
					href="https://twitter.com/Megatank58"
					><span class="mr-2">Twitter</span><heroicons-outline-external-link class="h-5 w-5 inline-block" /></a
				>
			</div>
		</nav>
	</transition>
</template>
