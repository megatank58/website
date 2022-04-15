import { marked } from 'marked';
import hljs from 'highlight.js';

export function parseMarkdown(text: string) {
	marked.setOptions({
		highlight: function (code, lang) {
			const language = hljs.getLanguage(lang) ? lang : 'plaintext';
			return hljs.highlight(code, { language }).value;
		},
	});

	return marked(text);
}