<script lang="ts">
	import { marked } from 'marked';
	import hljs from 'highlight.js';
	import { goto } from '$app/navigation';

	marked.setOptions({
		highlight: function (code, lang) {
			const language = hljs.getLanguage(lang) ? lang : 'plaintext';
			return hljs.highlight(code, { language }).value;
		}
	});

	let text = '';

	async function postBlog() {
		await fetch(
			`https://api.megatank58.tech/blogs/create/${
				(<HTMLInputElement>document.getElementById('name')).value
			}`,
			{
				body: JSON.stringify({
					content: (<HTMLInputElement>document.getElementById('name')).value
				}),
				headers: {
					Authorization: localStorage.getItem('token')!,
					'Content-Type': 'application/json'
				}
			}
		);
		goto('/dash');
	}

	function renderBlog() {
		text = marked((<HTMLInputElement>document.getElementById('content')).value);
	}
</script>

<div class="grid grid-cols-1 mt-4 px-4">
	<input
		id="name"
		type="text"
		placeholder="Enter blog name"
		class="input input-info input-bordered w-full max-w-xs mt-2"
	/>
	<label for="name" />
	<textarea
		id="content"
		class="textarea textarea-info textarea-bordered h-auto mt-2"
		placeholder="Enter blog content"
		rows="15"
	/>
	<a
		href="#modal"
		class="btn btn-success ml-auto mt-2"
		on:click={() => {
			renderBlog;
		}}
	>
		Upload
	</a>
	<div id="modal" class="modal">
		<div class="modal-box">
			<h3 class="font-bold text-lg">Are you sure you want to upload this blog?</h3>
			<div
				class="font-mono prose max-w-none m-4 p-2 sm:m-16 sm:p-4 rounded-lg shadow-lg border-t-2 border-l-4 border-neutral-focus prose-pre:p-3 prose-pre:rounded prose-pre:overflow-x-auto prose-a:text-primary prose-a:no-underline prose-img:inline prose-img:m-1 prose-p:m-1 prose-h1:my-4 prose-h1:border-b prose-h2:my-4 prose-h2:border-b"
			>
				{@html text}
			</div>
			<div class="modal-action">
				<a
					href="/dash"
					class="btn btn-success"
					on:click={() => {
						postBlog;
					}}>Confirm</a
				>
				<a href="#write" class="btn btn-error">Cancel</a>
			</div>
		</div>
	</div>
</div>
