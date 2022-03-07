<template>
	<div class="px-4">
		<div class="font-sans pb-2.5 pr-4 pl-4 mt-3.5 shadow-lg rounded-lg overflow-auto">
			<div>
				<img src="/src/assets/logo.png" class="float-left pb-2" />
				<div class="text-center pt-40 mt-0">
					<div class="text-xl">
						Hey there! I am megatank58 a programmer based in India, spending most of time working on
						random projects and playing games. I have been programming for quite some time now and
						have attained quite an extensive amount of knowledge and experience along with
						stackoverflow searches. At the moment I'm learning low level languages such as Rust.
					</div>
				</div>
			</div>
		</div>
		<div class="py-2.5 px-4 mt-3.5 shadow-lg hover:shadow-xl rounded-lg">
			<router-link to="/projects">
				<a>
					<h2 class="py-2 text-xl font-bold font-sans mb-2 text-primary">My Projects →</h2>
					<p class="py-2 text-base-content">
						Projects on which im currently working on and contributing with GitHub...
					</p>
				</a>
			</router-link>
		</div>
		<div class="py-2.5 px-4 mt-3.5 shadow-lg hover:shadow-xl rounded-lg">
			<router-link to="/blogs">
				<a>
					<h2 class="py-2 text-xl font-bold font-sans mb-2 text-primary">My Blogs →</h2>
					<p class="py-2 text-base-content">I write blogs every week! Check them out here</p>
				</a>
			</router-link>
		</div>
		<div class="py-2.5 px-4 mt-3.5 shadow-lg hover:shadow-xl rounded-lg">
			<router-link to="/about">
				<a>
					<h2 class="py-2 text-xl font-bold font-sans mb-2 text-primary">About me →</h2>
					<p class="py-2 text-base-content">
						Learn more about me and ways to contact me for queries...
					</p>
				</a>
			</router-link>
		</div>
	</div>
</template>
