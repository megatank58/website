import hljs from 'highlight.js/lib/common';
import marked from 'marked';

const renderer = {
	heading(text: string, level: number) {
		const escapedText = text.toLowerCase().replace(/[^\w]+/g, '-');
		return `
				<h${level} id=${escapedText} tabindex="-1">
				  ${text}
				  <a name="${escapedText}" class="anchor" href="#${escapedText}">
					<span class="header-link">#</span>
				  </a>
				</h${level}>`;
	},
};

marked.setOptions({
	highlight: function (code, lang) {
		const language = hljs.getLanguage(lang) ? lang : 'plaintext';
		return hljs.highlight(code, { language }).value;
	},
});

marked.use({ renderer });

export function parseMarkdown(text: string) {
	return marked(text);
}
