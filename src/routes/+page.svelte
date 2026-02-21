<script>
	let options = {
		timeZone: 'Asia/Kolkata',
		hour: 'numeric',
		minute: 'numeric',
		second: 'numeric'
	};
	let formatter = new Intl.DateTimeFormat([], options);

	let time = $state(formatter.format(new Date()));

	let isNight = $derived(!(time.split(' ')[1] == 'pm' && time.split(':')[0] > 6));

	setInterval(() => {
		time = formatter.format(new Date());
	}, 1000);
</script>

<div class="hero bg-base-300 min-h-screen">
	<div class="hero-content text-left">
		<div class="max-w-md">
			<h1 class="my-3 text-5xl font-bold">
				Megatank58
				<p class="text-sm font-light underline">he/him</p>
			</h1>
			<p class="my-1 pt-2">
				Student and programmer, creating programming languages like
				<span class="tooltip" data-tip="mathematical expression evaluator">
					<span class="underline"
						><a href="https://github.com/calcagebra/calcagebra">calcagebra</a></span
					>
				</span>
				using Rust.
			</p>
			<div class="flex flex-row pt-2">
				<a href="https://github.com/megatank58" aria-label="github link"
					><svg
						xmlns="http://www.w3.org/2000/svg"
						class="bg-base-200 btn hover:btn-neutral h-10 w-16 rounded-full"
						viewBox="0 0 24 24"
						><g
							fill="none"
							stroke="currentColor"
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							><path
								stroke-dasharray="32"
								stroke-dashoffset="32"
								d="M12 4c1.67 0 2.61 0.4 3 0.5c0.53 -0.43 1.94 -1.5 3.5 -1.5c0.34 1 0.29 2.22 0 3c0.75 1 1 2 1 3.5c0 2.19 -0.48 3.58 -1.5 4.5c-1.02 0.92 -2.11 1.37 -3.5 1.5c0.65 0.54 0.5 1.87 0.5 2.5c0 0.73 0 3 0 3M12 4c-1.67 0 -2.61 0.4 -3 0.5c-0.53 -0.43 -1.94 -1.5 -3.5 -1.5c-0.34 1 -0.29 2.22 0 3c-0.75 1 -1 2 -1 3.5c0 2.19 0.48 3.58 1.5 4.5c1.02 0.92 2.11 1.37 3.5 1.5c-0.65 0.54 -0.5 1.87 -0.5 2.5c0 0.73 0 3 0 3"
								><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.7s" values="32;0"
								></animate></path
							><path
								stroke-dasharray="10"
								stroke-dashoffset="10"
								d="M9 19c-1.41 0 -2.84 -0.56 -3.69 -1.19c-0.84 -0.63 -1.09 -1.66 -2.31 -2.31"
								><animate
									fill="freeze"
									attributeName="stroke-dashoffset"
									begin="0.8s"
									dur="0.2s"
									values="10;0"
								></animate></path
							></g
						></svg
					></a
				>
				<div class="px-2">
					<span
						class="bg-base-200 btn hover:btn-neutral tooltip tooltip-top rounded-full"
						data-tip="IST"
					>
						{#if isNight}
							<svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-9" viewBox="0 0 24 24">
								<path
									fill="currentColor"
									d="M11.5 3.885V1.5h1v2.385zm0 18.615v-2.384h1V22.5zm8.616-10v-1H22.5v1zM1.5 12.5v-1h2.385v1zm16.816-6.108l-.708-.708l1.442-1.453l.72.719zM4.95 19.77l-.72-.719l1.454-1.442l.708.707zm14.1 0l-1.442-1.453l.707-.708l1.454 1.442zM5.685 6.392L4.23 4.95l.719-.72l1.442 1.454zM12.005 17q-2.082 0-3.544-1.457T7 12.005T8.457 8.46T11.995 7t3.544 1.457T17 11.995t-1.457 3.544T12.005 17M12 16q1.675 0 2.838-1.162T16 12t-1.162-2.838T12 8T9.162 9.163T8 12t1.163 2.838T12 16m0-4"
								/>
							</svg>
						{:else}
							<svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-10" viewBox="0 0 24 24">
								<path
									fill="currentColor"
									d="M12.1 22q-2.1 0-3.937-.8t-3.2-2.162t-2.163-3.2T2 11.9q0-3.65 2.325-6.437T10.25 2q-.45 2.475.275 4.838t2.5 4.137t4.138 2.5T22 13.75q-.65 3.6-3.45 5.925T12.1 22m0-2q2.2 0 4.075-1.1t2.95-3.025q-2.15-.2-4.075-1.088t-3.45-2.412t-2.425-3.45T8.1 4.85Q6.175 5.925 5.088 7.813T4 11.9q0 3.375 2.363 5.738T12.1 20m-.5-7.625"
								/>
							</svg>
						{/if}{time}</span
					>
				</div>
			</div>
		</div>
	</div>
</div>
