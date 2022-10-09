<script lang="ts">
	import { DurationFormatter } from '@sapphire/time-utilities';
	import type { Project } from 'src/types/Project';
	import { browser } from '$app/env';

	if (browser) {
		const observer = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					entry.target.classList.add('show');
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
</script>

<div
	class="hero min-h-screen transition-opacity duration-1000 ease-out opacity-60 hover:opacity-100"
>
	<div class="hero-content flex-col lg:flex-row">
		<img src="/logo.png" class="float-left pb-2" alt="Avatar of megatank58" />
		<div>
			<h1 class="text-5xl font-bold">Hi there!</h1>
			<p class="py-6">
				I'm Tanmay, a programmer from India, spending most of time working on random projects and
				playing games. I've been programming for a few years attaining some knowledge and experience
				along with many searches. Scroll below to see my projects
			</p>
		</div>
	</div>
</div>
<div class="divider">
	<div class="animate-bounce p-2 w-10 h-10">
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
<div class="sm:hidden">
	<div class="flex items-center flex-col px-4">
		<div class="font-bold text-2xl">My Projects</div>
		{#await projects}
			<div class="sm:w-1/2 w-full m-4">
				<div class="card bg-base-300 hover:shadow-md motion-safe:animate-pulse space-x-4">
					<div class="card bg-base-300 hover:shadow-md">
						<div class="card-body">
							<h2 class="card-title">
								<span class="font-extralight"
									>megatank58/<span class="font-bold">loading</span></span
								>
								{#if Math.random() > 0.5}
									<div class="tooltip" data-tip="Forked project">
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
									</div>
								{/if}
							</h2>
							<p>Fetching repositories...</p>
							<div>
								<div class="card-actions justify-end pt-1">
									<div class="badge badge-success rounded mr-auto">few seconds ago</div>
								</div>
								<div class="card-actions">
									<div class="badge badge-error rounded mt-1">Text</div>
									<div class="badge badge-info rounded ml-auto mt-1">MIT</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
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
										<div class="tooltip" data-tip="Forked project">
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
										</div>
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
												{project.license?.name
													? project.license?.name.substring(0, 25)
													: 'MIT License'}
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
</div>
<div class="hidden sm:block">
	<div class="grid place-items-center">
		<div class="font-bold text-2xl">My Projects</div>
	</div>

	{#await projects}
		<div class="grid place-items-center">
			<div class="font-bold text-xl">Loading...</div>
		</div>
	{:then projects}
		<div class="grid grid-cols-3 px-4">
			{#each projects.splice(0, 9) as project}
				<div class="m-4 hide">
					<a href={'/projects/' + project.name}>
						<div class="card bg-base-300 hover:shadow-md">
							<div class="card-body">
								<h2 class="card-title">
									<span class="font-extralight"
										>{project.owner.login}/<span class="font-bold">{project.name}</span></span
									>
									{#if project.fork}
										<div class="tooltip" data-tip="Forked project">
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
										</div>
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
												{project.license?.name
													? project.license?.name.substring(0, 25)
													: 'MIT License'}
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
	{/await}
</div>
<footer class="footer items-center p-4 bg-base-300 mt-2">
	<div class="items-center grid-flow-col">
		<svg
			width="36"
			height="36"
			viewBox="0 0 24 24"
			xmlns="http://www.w3.org/2000/svg"
			fill-rule="evenodd"
			clip-rule="evenodd"
			class="fill-current"
			><path
				d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z"
			/></svg
		>
		<p>Copyright © 2022 - All right reserved</p>
	</div>
	<div class="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
		<a href="https://twitter.com/megatank58"
			><svg
				xmlns="http://www.w3.org/2000/svg"
				width="24"
				height="24"
				viewBox="0 0 24 24"
				class="fill-current"
				><path
					d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"
				/></svg
			>
		</a>
		<a href="https://github.com/megatank58"
			><svg width="24" height="24" viewBox="0 0 24 24"
				><path
					fill="currentColor"
					d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33c.85 0 1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2Z"
				/></svg
			></a
		>
	</div>
</footer>

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
