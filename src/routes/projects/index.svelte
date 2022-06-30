<script context="module" lang="ts">
	export async function load() {
		const url = `https://bd.megatank58.me/projects`;
		const response = await fetch(url);
		const data: Project[] = (await response.json())
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
	import { DurationFormatter } from '@sapphire/time-utilities';
	import type { Project } from 'src/types/Project';

	const duration = new DurationFormatter();
	export let projects: Project[];
</script>

<div class="flex items-center flex-col px-4 bg-base-200">
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
								<div v-if="project.license" class="badge badge-info rounded ml-auto mt-1">
									{license?.name ?? 'MIT License'}
								</div>
							</div>
						</div>
					</div>
				</div>
			</a>
		</div>
	{/each}
</div>
