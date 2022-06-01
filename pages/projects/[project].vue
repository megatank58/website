<template>
	<div
		class="font-mono prose max-w-none m-4 p-2 sm:m-16 sm:p-4 rounded-lg shadow-lg border-t-2 border-l-4 border-neutral-focus prose-pre:p-3 prose-pre:rounded prose-pre:overflow-x-auto prose-a:text-primary prose-a:no-underline prose-img:inline prose-img:m-1 prose-p:m-1 prose-h1:my-4 prose-h1:border-b prose-h2:my-4 prose-h2:border-b"
		v-html="readme"
	></div>
</template>

<script setup>
import { parseMarkdown, useFetch } from '~/util';

const text = await useFetch({
	route: '/projects/' + useRoute().params.project,
	getString: true,
});

const readme = parseMarkdown(text);
</script>
