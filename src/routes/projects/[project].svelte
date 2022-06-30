<script context="module" lang="ts">
	import { marked } from 'marked';
	import hljs from 'highlight.js';

	export async function load({ params }: { params: { project: string } }) {
		const url = `https://bd.megatank58.me/projects/${params.project}`;
		const response = await fetch(url);

		marked.setOptions({
			highlight: function (code, lang) {
				const language = hljs.getLanguage(lang) ? lang : 'plaintext';
				return hljs.highlight(code, { language }).value;
			}
		});

		return {
			status: response.status,
			props: {
				readme: marked(await response.text())
			}
		};
	}
</script>

<script lang="ts">
	export let readme: string;
</script>

<div
	class="font-mono prose max-w-none m-4 p-2 sm:m-16 sm:p-4 rounded-lg shadow-lg border-t-2 border-l-4 border-neutral-focus prose-pre:p-3 prose-pre:rounded prose-pre:overflow-x-auto prose-a:text-primary prose-a:no-underline prose-img:inline prose-img:m-1 prose-p:m-1 prose-h1:my-4 prose-h1:border-b prose-h2:my-4 prose-h2:border-b"
>
	{@html readme}
</div>
