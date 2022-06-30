<script lang="ts">
	import { browser } from '$app/env';
	import { goto } from '$app/navigation';

	if (browser) {
		fetch(
			`https://bd.megatank58.me/auth/${new URLSearchParams(window.location.search).get('code')}`
		).then((token) =>
			token.text().then((text) => {
				localStorage.setItem('token', new URLSearchParams(text).get('access_token') ?? '');
				goto('/dash');
			})
		);
	}
</script>

<template>
	<div class="hero min-h-screen bg-base-200">
		<div class="hero-content text-center">
			<div class="max-w-md">
				<h1 class="text-4xl font-bold">Logged in successfully!</h1>
				<a href="/dash" class="btn btn-primary my-2">Dashboard</a>
			</div>
		</div>
	</div>
</template>
