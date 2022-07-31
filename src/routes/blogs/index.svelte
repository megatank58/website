<script context="module" lang="ts">
	import type { Blog } from 'src/types/Blog';
	import { marked } from 'marked';
	import hljs from 'highlight.js';

	function trim(str: string, max: number) {
		return str.length > max ? `${str.slice(0, max - 3)}...` : str;
	}

	export async function load() {
		const url = `https://api.megatank58.tech/blogs`;
		const response = await fetch(url);
		const data: Blog[] = await response.json();

		marked.setOptions({
			highlight: function (code, lang) {
				const language = hljs.getLanguage(lang) ? lang : 'plaintext';
				return hljs.highlight(code, { language }).value;
			}
		});

		let blogs = [];
		for (const blog of data) {
			blogs.push({
				name: blog.name,
				header: marked(trim(blog.content ?? '', 256))
			});
		}
		blogs = blogs.reverse();

		return {
			status: response.status,
			props: {
				blogs
			}
		};
	}
</script>

<script lang="ts">
	export let blogs: Blog[];
</script>

<div class="flex items-center flex-col px-4 bg-base-200">
	{#each blogs as { name, header }}
		<div class="sm:w-3/4 m-4">
			<a href={'/blogs/' + name} class="font-sans text-base-content">
				<div class="card bg-base-300 hover:shadow-md">
					<div class="card-body">
						<div
							class="font-mono prose max-w-none prose-a:text-primary prose-a:no-underline prose-img:inline prose-img:m-1 prose-p:m-1 prose-h1:my-4 prose-h1:border-b prose-h2:my-4 prose-h2:border-b"
						>
							{@html header}
						</div>
					</div>
				</div>
			</a>
		</div>
	{/each}
</div>
