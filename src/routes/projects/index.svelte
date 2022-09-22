<script lang="ts">
	import { DurationFormatter } from '@sapphire/time-utilities';
	import type { Project } from 'src/types/Project';

	const url = `https://api.github.com/users/megatank58/repos`;
	const projects: Promise<Project[]> = fetch(url).then((res) =>
		res.json().then((json) =>
			(json.message ? [] : json)
				.sort((x: Project, y: Project) => {
					return (
						Date.now() -
						new Date(x.updated_at).getTime() -
						(Date.now() - new Date(y.updated_at).getTime())
					);
				})
				.filter((project: Project) => {
					return project.description && project.full_name.toLowerCase() !== 'megatank58/megatank58';
				})
		)
	);

	const duration = new DurationFormatter();
	const samples = new Array(5);
</script>

<div class="flex items-center flex-col px-4 bg-base-200">
	{#await projects}
		{#each samples as _sample}
			<div class="sm:w-1/2 w-full m-4">
				<div class="card bg-base-300 hover:shadow-md animate-pulse space-x-4">
					<div class="card bg-base-300 hover:shadow-md">
						<div class="card-body">
							<h2 class="card-title">
								<span class="font-extralight"
									>megatank58/<span class="font-bold">loading</span></span
								>
								{#if Math.random() > 5}
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
							<p>Fetching repository information...</p>
							<div>
								<div class="card-actions justify-end pt-1">
									<div class="badge badge-success rounded mr-auto">
										...
									</div>
								</div>
								<div class="card-actions">
									<div class="badge badge-error rounded mt-1">...</div>
									<div class="badge badge-info rounded ml-auto mt-1">...</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		{/each}
	{:then projects}
		{#each projects as project}
			<div class="sm:w-1/2 w-full m-4">
				<a href={'/projects/' + project.name}>
					<div class="card bg-base-300 hover:shadow-md">
						<div class="card-body">
							<h2 class="card-title">
								<span class="font-extralight"
									>{project.owner.login}/<span class="font-bold">{project.name}</span></span
								>
								{#if project.fork}
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
							<p>{project.description}</p>
							<div>
								<div class="card-actions justify-end pt-1">
									<div class="badge badge-success rounded mr-auto">
										Updated
										{duration.format(Date.now() - new Date(project.updated_at).getTime(), 1)} ago
									</div>
								</div>
								<div class="card-actions">
									<div class="badge badge-error rounded mt-1">
										{project.language ?? 'Markdown'}
									</div>
									{#if project.license}
										<div class="badge badge-info rounded ml-auto mt-1">
											{project.license?.name ?? 'MIT License'}
										</div>
									{/if}
								</div>
							</div>
						</div>
					</div>
				</a>
			</div>
		{/each}
	{/await}
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
