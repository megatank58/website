<script context="module" lang="ts">
	export async function load({ fetch }: { fetch(url: string): any }) {
		const url = `https://api.github.com/users/megatank58/repos`;
		const response = await fetch(url);
		const json = await response.json();
		const data: Project[] = (json.message ? [] : json)
			.sort((x: Project, y: Project) => {
				return (
					Date.now() -
					new Date(x.updated_at).getTime() -
					(Date.now() - new Date(y.updated_at).getTime())
				);
			})
			.filter((project: Project) => {
				return project.description && project.full_name.toLowerCase() !== 'megatank58/megatank58';
			});

		return {
			status: response.status,
			props: {
				projects: data
			}
		};
	}
</script>

<script lang="ts">
	import { goto } from '$app/navigation';

	import { DurationFormatter } from '@sapphire/time-utilities';
	import type { Project } from 'src/types/Project';
	import { createEventDispatcher } from 'svelte';
	import Typeahead from 'svelte-typeahead';

	const dispatch = createEventDispatcher();

	export let projects: Project[];

	let searchIndex: string[] = [];
	projects.forEach((project) => {
		searchIndex.push(project.name);
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
		goto('/projects/' + searchIndex[detail.originalIndex]);
		dispatch('search', detail);
	}

	const duration = new DurationFormatter();
</script>

<svelte:window on:keydown={handleKeydown} />

<div class="flex items-center flex-col px-4 bg-base-200">
	<!-- svelte-ignore a11y-label-has-associated-control -->
	<label
		class={`relative mx-3 sm:w-1/2 w-full border-2 border-base-300 rounded`}
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
	{#each projects as { name, description, owner: { login }, updated_at, language, fork, license }}
		<div class="sm:w-1/2 w-full m-4">
			<a href={'/projects/' + name}>
				<div class="card bg-base-300 hover:shadow-md">
					<div class="card-body">
						<h2 class="card-title">
							<span class="font-extralight">{login}/<span class="font-bold">{name}</span></span>
							{#if fork}
								<svg
									xmlns="http://www.w3.org/2000/svg"
									xmlns:xlink="http://www.w3.org/1999/xlink"
									width="1em"
									height="1em"
									viewBox="0 0 512 512"
									><path
										fill="currentColor"
										d="M124 166.291v179.418a76 76 0 1 0 32 0V282h152a80.091 80.091 0 0 0 80-80v-36.689a75.983 75.983 0 1 0-32 1.733V202a48.055 48.055 0 0 1-48 48H156v-83.709a76 76 0 1 0-32 0ZM324 92a44 44 0 1 1 44 44a44.049 44.049 0 0 1-44-44ZM184 420a44 44 0 1 1-44-44a44.049 44.049 0 0 1 44 44ZM140 48a44 44 0 1 1-44 44a44.049 44.049 0 0 1 44-44Z"
									/></svg
								>
							{/if}
						</h2>
						<p>{description}</p>
						<div>
							<div class="card-actions justify-end pt-1">
								<div class="badge badge-success rounded mr-auto">
									Updated
									{duration.format(Date.now() - new Date(updated_at).getTime(), 1)} ago
								</div>
							</div>
							<div class="card-actions">
								<div class="badge badge-error rounded mt-1">
									{language ?? 'Markdown'}
								</div>
								{#if license}
								<div class="badge badge-info rounded ml-auto mt-1">
									{license?.name ?? 'MIT License'}
								</div>
								{/if}
							</div>
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
