<script lang="ts">
	import { DurationFormatter } from '@sapphire/time-utilities';
	import type { Project } from 'src/types/Project';
	import { browser } from '$app/env';

	if (browser) {
		const observer = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
			if (entry.isIntersecting) {
				entry.target.classList.add('show')
			}
			});
		});

		let elements = document.querySelectorAll('.hide');
		const interval = setInterval(() => {
			elements = document.querySelectorAll('.hide');
			if (elements.length > 0) {
				elements.forEach((element) => observer.observe(element));
				clearInterval(interval);
			}
		}, 500);
	}

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
	const samples = new Array(3);
</script>

<div class="hero min-h-screen">
	<div class="hero-content flex-col lg:flex-row">
		<img src="/logo.png" class="float-left pb-2" alt="Avatar of megatank58" />
		<div>
			<h1 class="text-5xl font-bold">Hi there!</h1>
			<p class="py-6">
				I'm Tanmay, a programmer from India, spending most of time working on random projects and
				playing games. I've been programming for a few years attaining some knowledge and experience
				along with many searches. In the present I'm learning about logic gates and low level
				languages.
			</p>
		</div>
	</div>
</div>
<div class="divider">
	<div
		class="animate-bounce p-2 w-10 h-10"
	>
		<svg
			class="w-6 h-6"
			fill="none"
			stroke-linecap="round"
			stroke-linejoin="round"
			stroke-width="2"
			viewBox="0 0 24 24"
			stroke="currentColor"
			style="--darkreader-inline-stroke: currentColor;"
			data-darkreader-inline-stroke=""
		>
			<path d="M19 14l-7 7m0 0l-7-7m7 7V3" />
		</svg>
	</div>
</div>
<div class="flex items-center flex-col px-4">
	<div class="font-bold text-2xl">My Projects</div>
	{#await projects}
		{#each samples as _sample}
			<div class="sm:w-1/2 w-full m-4 hide">
				<div class="card bg-base-300 hover:shadow-md motion-safe:animate-pulse space-x-4">
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
									<div class="badge badge-success rounded mr-auto">...</div>
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
			<div class="sm:w-1/2 w-full m-4 hide">
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
	.hide {
		opacity: 0;
		filter: blur(5px);
		transform: translateX(-100%);
		transition: all 0.75s;
	}
	.show {
		opacity: 1;
		filter: blur(0);
		transform: translateX(0);
	}

	.hide:nth-child(1) {
		transition-delay: 200ms;
	}

	.hide:nth-child(2) {
		transition-delay: 400ms;
	}

	.hide:nth-child(3) {
		transition-delay: 600ms;
	}

	@media (prefers-reduced-motion) {
		.hide {
			transition: none;
		}
	}
</style>
