<template>
	<div class="flex items-stretch flex-col m-auto">
		<article
			class="
				dark:bg-dark-secondary
				py-2.5
				pb-2.5
				pr-4
				pl-4
				mt-3.5
				border-b border-solid border-gray-400
				dark:border-dark-primary
				hover:shadow-md
				rounded-lg
			"
		>
			<div class="font-sans dark:text-white p-px">
				<div v-html="readme"></div>
			</div>
		</article>
	</div>
</template>

<script lang="ts">
import { useRoute, useRouter } from 'vue-router';
import hljs from 'highlight.js/lib/common';
import marked from 'marked';
import { Project } from '~/types/Project';

marked.setOptions({
	renderer: new marked.Renderer(),
	highlight: function (code, lang) {
		const language = hljs.getLanguage(lang) ? lang : 'plaintext';
		return hljs.highlight(code, { language }).value;
	},
});

export default {
	setup() {
		return {
			route: useRoute().fullPath,
		};
	},
	data() {
		return {
			project: {} as Project,
			readme: '',
		};
	},
	methods: {
		getProject(): void {
			fetch(
				'https://api.github.com/repos/Megatank58/' +
					useRouter().currentRoute.value.fullPath.replace('/projects/', ''),
			)
				.then((res) => res.json())
				.then((json: Project) => {
					//@ts-ignore
					this.project = json;
				});
		},
		getReadme() {
			fetch(
				'https://raw.githubusercontent.com/Megatank58/' +
					useRouter().currentRoute.value.fullPath.replace('/projects/', '') +
					'/main/README.md',
			)
				.then((res) => res.text())
				.then((text) => {
					//@ts-ignore
					this.readme = marked(text);
				});
		},
	},
	created(): void {
		// @ts-ignore
		this.getProject();
		// @ts-ignore
		this.getReadme();
	},
};
</script>

<style>

article a {
	color: #35acf1;
}

article h2 {
	font-weight: bold;
	font-family: system-ui;
	margin-top: 0.125rem;
	border-bottom: 1px solid #383838;
}

pre {
	background-color: #f7f7f7;
	border-radius: 4px;
	padding: 10px;
}

.dark pre {
	background-color: #192c4e;
}

.hljs {
	display: block;
	overflow-x: auto;
	padding: 0.5em;
	border-radius: 4px;
	color: #b9bbbe;
	text-size-adjust: none;
}

.hljs-comment,
.hljs-quote {
	/* Because Discords accessibility team can't do contrasts */
	/* color: #4f545c; */
	color: hsl(217, 8%, 55%);
}

.hljs-addition,
.hljs-keyword,
.hljs-selector-tag {
	color: #859900;
}

.hljs-doctag,
.hljs-literal,
.hljs-meta .hljs-meta-string,
.hljs-number,
.hljs-regexp,
.hljs-string {
	color: #2aa198;
}

.hljs-name,
.hljs-section,
.hljs-selector-class,
.hljs-selector-id,
.hljs-title {
	color: #268bd2;
}

.hljs-attr,
.hljs-attribute,
.hljs-class .hljs-title,
.hljs-template-variable,
.hljs-type,
.hljs-variable {
	color: #b58900;
}

.hljs-bullet,
.hljs-link,
.hljs-meta,
.hljs-meta .hljs-keyword,
.hljs-selector-attr,
.hljs-selector-pseudo,
.hljs-subst,
.hljs-symbol {
	color: #cb4b16;
}

.hljs-built_in,
.hljs-deletion {
	color: #dc322f;
}

.hljs-formula {
	background: #073642;
}

.hljs-emphasis {
	font-style: italic;
}

.hljs-strong {
	font-weight: 700;
}
</style>
