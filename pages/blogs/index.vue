<template>
	<div class="flex items-center flex-col px-4 bg-base-200">
		<div v-for="(blog, index) in blogs" :key="blog + index" class="sm:w-3/4 m-4">
			<router-link :to="/blogs/ + blog.name" class="font-sans text-base-content">
				<div class="card bg-base-300 hover:shadow-md">
					<div class="card-body">
						<div
							class="font-mono prose max-w-none prose-a:text-primary prose-a:no-underline prose-img:inline prose-img:m-1 prose-p:m-1 prose-h1:my-4 prose-h1:border-b prose-h2:my-4 prose-h2:border-b"
							v-html="blog.header"
						></div>
					</div>
				</div>
			</router-link>
		</div>
	</div>
</template>

<script setup>
import { parseMarkdown, trim, useFetch } from '~/util';

const data = await useFetch({ route: '/blogs' });
let blogs = [];
for (const blog of data) {
	blogs.push({
		name: blog.name,
		header: parseMarkdown(trim(blog.content ?? '', 256)),
	});
}
blogs = blogs.reverse();
</script>
