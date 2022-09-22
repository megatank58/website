<script context="module" lang="ts">
	import { marked } from 'marked';
	import hljs from 'highlight.js';

	export async function load({ params }: { params: { project: string } }) {
		const url = `https://raw.githubusercontent.com/Megatank58/${params.project}/main/README.md`;
		const response = await fetch(url);

		marked.setOptions({
			highlight(code, lang) {
				const language = hljs.getLanguage(lang) ? lang : 'plaintext';
				return hljs.highlight(code, { language }).value;
			}
		});

		marked.use({
			renderer: {
				heading(text, level) {
					const escapedText = text.toLowerCase().replace(/[^\w]+/g, '-');

					return `
            <h${level}>
            	${text}
			<a name="${escapedText}" class="anchor" href="#${escapedText}">
                <span class="header-link opacity-0 hover:opacity-100">#</span>
            </a>
            </h${level}>`;
				}
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
	class="font-mono 
	prose max-w-none 
	m-4 p-2 sm:m-16 
	sm:p-4 rounded-lg 
	shadow-lg border-t-2 border-l-4 
	border-neutral-focus prose-pre:p-3 
	prose-pre:rounded prose-pre:overflow-x-auto 
	prose-a:text-success prose-a:no-underline 
	prose-img:inline prose-img:m-1 prose-p:m-1 
	prose-h1:my-4 prose-h2:my-4"
>
	{@html readme}
</div>
