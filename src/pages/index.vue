<template>
	<div
		class="
			font-sans
			dark:text-white dark:bg-dark-secondary
			pb-2.5
			pr-4
			pl-4
			mt-3.5
			border-b border-solid border-gray-400
			dark:border-dark-primary
			hover:shadow-md
			rounded-lg
			overflow-auto
		"
	>
		<div>
			<img src="/src/assets/logo.png" class="float-left pb-2" />
			<p class="font-bold text-xl text-center pt-40 mt-0">
				Hello there! I am Megatank58 <span class="font-normal m-0">JS/TS developer from India, working on random projects, playing games or <span class="italic">maybe</span> writing notes</span>
			</p>
		</div>
	</div>
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
	>
		<router-link to="/projects">
			<a>
				<h2 class="text-xl font-bold font-sans mb-2 dark:text-white">My Projects →</h2>
				<p class="dark:text-white">
					Projects on which im currently working on and contributing with GitHub...
				</p>
			</a>
		</router-link>
	</div>
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
	>
		<router-link to="/skills">
			<a>
				<h2 class="text-xl font-bold font-sans mb-2 dark:text-white">My Skills →</h2>
				<p class="dark:text-white">
					The languages that I am currently learning and using in everyday projects...
				</p>
			</a>
		</router-link>
	</div>
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
	>
		<router-link to="/about">
			<a>
				<h2 class="text-xl font-bold font-sans mb-2 dark:text-white">About me →</h2>
				<p class="dark:text-white">Learn more about me and ways to contact me for queries...</p>
			</a>
		</router-link>
	</div>
</template>
