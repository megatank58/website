<script context="module" lang="ts">
	export async function load({ params }: { params: { blog: string } }) {
		const url = `https://api.megatank58.tech/blogs/${params.blog}`;
		const response = await fetch(url);

		return {
			status: response.status,
			props: {
				data: await response.json()
			}
		};
	}
</script>

<script lang="ts">
	import { marked } from 'marked';
	import hljs from 'highlight.js';
	import { goto } from '$app/navigation';
	import { browser } from '$app/env';

	export let data: {
		name: string;
		content: string;
	};

	if (browser && <HTMLInputElement>document.getElementById('content')) {
		(<HTMLInputElement>document.getElementById('content')).value = data.content;
	}

	marked.setOptions({
		highlight: function (code, lang) {
			const language = hljs.getLanguage(lang) ? lang : 'plaintext';
			return hljs.highlight(code, { language }).value;
		}
	});

	let text = '';
	async function postBlog() {
		fetch(`https://api.megatank58.tech/blogs/set/${data.name}`, {
			body: JSON.stringify({
				content: (<HTMLInputElement>document.getElementById('content')).value
			}),
			headers: {
				Authorization: localStorage.getItem('token')!,
				'Content-Type': 'application/json'
			}
		});
		goto('/dash');
	}
	function renderBlog() {
		text = marked((<HTMLInputElement>document.getElementById('content')).value);
	}
</script>

<div class="grid grid-cols-1 mt-4 px-4">
	<h1 class="font-bold text-2xl mx-auto">{data.name}</h1>
	<textarea
		id="content"
		class="textarea textarea-ghost textarea-bordered h-auto mt-2"
		placeholder="Enter blog content"
		rows="16"
	/>
	<a class="btn btn-info ml-auto mt-2" href="#modal" on:click={() => renderBlog()}>Upload</a>

	<div id="modal" class="modal max-w-none">
		<div class="modal-box">
			<h3 class="font-bold text-lg">Are you sure you want to upload this blog?</h3>
			<div
				class="font-mono prose max-w-none rounded-lg shadow-lg border-t-2 border-l-4 border-neutral-focus prose-pre:p-3 prose-pre:rounded prose-pre:overflow-x-auto prose-a:text-primary prose-a:no-underline prose-img:inline prose-img:m-1 prose-p:m-1 prose-h1:my-4 prose-h1:border-b prose-h2:my-4 prose-h2:border-b"
			>
				{@html text}
			</div>
			<div class="modal-action">
				<!-- svelte-ignore a11y-invalid-attribute -->
				<a href="#" class="btn btn-success" on:click={() => postBlog()}>Confirm</a>
				<!-- svelte-ignore a11y-invalid-attribute -->
				<a href="#" class="btn btn-error">Cancel</a>
			</div>
		</div>
	</div>
</div>
