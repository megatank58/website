<script context="module" lang="ts">
	import type { Blog } from 'src/types/Blog';
	import { marked } from 'marked';
	import hljs from 'highlight.js';

	function trim(str: string, max: number) {
		return str.length > max ? `${str.slice(0, max - 3)}...` : str;
	}

	export async function load({ fetch }: { fetch(url: string): any }) {
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
	import { goto } from '$app/navigation';
	import { createEventDispatcher } from 'svelte';
	import Typeahead from 'svelte-typeahead';

	const dispatch = createEventDispatcher();

	export let blogs: Blog[];

	let searchIndex: string[] = [];
	blogs.forEach((blog) => {
		searchIndex.push(blog.name);
	});

	let seachboxEl: HTMLLabelElement;
	function handleKeydown(e: KeyboardEvent) {
		if ((e.keyCode === 75 && e.metaKey) || (e.keyCode === 75 && e.ctrlKey)) {
			e.preventDefault();
			if (!seachboxEl) return;
			(seachboxEl.querySelector('input[type=search]') as HTMLTextAreaElement).focus();
			dispatch('focus');
		}
	}

	function onSelect({ detail }: { detail: { originalIndex: number } }) {
		goto('/blogs/' + searchIndex[detail.originalIndex]);
		dispatch('search', detail);
	}
</script>

<svelte:window on:keydown={handleKeydown} />

<div class="flex items-center flex-col px-4 bg-base-200">
	<!-- svelte-ignore a11y-label-has-associated-control -->
	<label
		class={`relative mx-3 sm:w-3/4 w-full border-2 border-base-300 rounded`}
		bind:this={seachboxEl}
	>
		<Typeahead
			placeholder="Search…"
			limit={8}
			data={searchIndex}
			extract={(item) => item}
			label="Search"
			inputAfterSelect="clear"
			on:select={onSelect}
			let:result
		>
			<div class="py-1 text-sm">
				{searchIndex[result.index]}
			</div>
		</Typeahead>
		<div class={`pointer-events-none absolute right-8 top-2 gap-1 opacity-50`}>
			<kbd class="kbd kbd-sm">CTRL</kbd>
			<kbd class="kbd kbd-sm">K</kbd>
		</div>
	</label>
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

<style global>
	.searchbox [data-svelte-typeahead] {
		width: 100%;
		max-width: 100%;
	}
	[data-svelte-search] label {
		display: none;
	}
	[data-svelte-search] input::placeholder {
		color: inherit;
	}
	[data-svelte-search] input {
		outline-color: hsla(var(--bc) / 0.1);
		background-color: hsl(var(--b2));
		color: hsla(var(--bc));
		border: none;
		padding-left: 2em;
	}
	[data-svelte-typeahead] .svelte-typeahead-list {
		transform: translateY(0.5em);
		background: hsl(var(--b1));
		border-radius: var(--rounded-btn);
		overflow: hidden;
	}
	[data-svelte-typeahead] .svelte-typeahead-list .selected,
	[data-svelte-typeahead] .svelte-typeahead-list .selected:hover {
		background: hsl(var(--n));
		color: hsl(var(--nc));
	}
	[data-svelte-typeahead] .svelte-typeahead-list li {
		background: hsl(var(--b2));
		color: hsl(var(--bc));
	}
	[data-svelte-typeahead] .svelte-typeahead-list li:not(:last-of-type) {
		border-bottom-color: hsla(var(--bc) / 0.1);
	}
</style>
