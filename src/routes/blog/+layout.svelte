<script>
	let { children } = $props();
</script>

<div class="drawer drawer-open">
	<input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
	<div class="drawer-content bg-base-300 border-base-100 border-2">
		<div class="prose text-base-content min-h-screen max-w-full">
			<div class="mx-2 min-h-screen rounded-2xl p-4">
				{@render children()}
			</div>
		</div>
	</div>
	<div class="drawer-side">
		<label for="my-drawer-2" aria-label="close sidebar" class="drawer-overlay"></label>
		<ul class="bg-base-200 list border-base-100 min-h-full border-2 border-r-0">
			<li class="list-row hover:bg-base-300 m-1">
				<a href="/blog/calcagebra">
					<div class="list-col-grow">
						<div class="font-lg flex font-bold">
							What is calcagebra
							<div class="ml-auto text-xs opacity-40">[13th July 2025]</div>
						</div>
						<div class="text-xs font-semibold italic opacity-60">
							mathematical expression evaluator
						</div>
					</div>
				</a>
			</li>
			<li class="list-row hover:bg-base-300 m-1">
				<a href="/blog/calcagebra">
					<div class="list-col-grow">
						<div class="font-lg flex font-bold">
							Fundamental issue with calcagebra
							<div class="ml-auto text-xs opacity-40">[13th July 2025]</div>
						</div>
						<div class="text-xs font-semibold italic opacity-60">
							need of massive rewrite
						</div>
					</div>
				</a>
			</li>
		</ul>
	</div>
</div>
