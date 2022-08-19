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
	import { browser } from '$app/env';
	import { goto } from '$app/navigation';

	browser && !localStorage.getItem('token') ? goto('/dash/login') : '';

	async function deleteBlog(name: string) {
		fetch(`https://api.megatank58.tech/blogs/delete/${name}`, {
			headers: {
				Authorization: localStorage.getItem('token')!,
				'Content-Type': 'application/json'
			}
		});
		document.getElementById(name)?.parentNode?.removeChild(document.getElementById(name)!);
	}
	export let blogs: Blog[];
</script>

<div class="flex items-center flex-col px-4 bg-base-200">
	<div class="alert shadow-lg w-3/4">
		<div>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				class="stroke-info flex-shrink-0 w-6 h-6"
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
				/>
			</svg>
			<div>
				<h3 class="font-bold">Create a new blog</h3>
				<div class="text-xs">Have any new ideas?</div>
			</div>
		</div>
		<div class="flex-none">
			<a href="/dash/create" class="btn btn-primary btn-sm">Create</a>
		</div>
	</div>
	<div class="flex items-center flex-col px-4 bg-base-200">
		{#each blogs as { name, header }}
			<div class="sm:w-3/4 m-4">
				<a href={'/blogs/' + name} class="font-sans text-base-content">
					<div class="card bg-base-300 hover:shadow-md">
						<div class="card-body">
							<h2 class="card-title">
								{name}
								<button
									class="ml-auto badge badge-error rounded"
									on:click={() => {
										deleteBlog(name);
									}}
								>
									X
								</button>
								<a href={'/dash/edit/' + name} class="badge badge-info rounded"> EDIT </a>
							</h2>
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
</div>
