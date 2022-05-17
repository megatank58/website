<template>
	<div class="grid grid-cols-1 mt-4 px-4">
		<h1 class="font-bold text-2xl mx-auto">Create a new blog</h1>
		<input
			id="name"
			type="text"
			placeholder="Enter blog name"
			class="input input-ghost input-bordered w-full max-w-xs mt-2"
		/>
		<label for="name"></label>
		<textarea
			id="content"
			class="textarea textarea-ghost textarea-bordered h-auto mt-2"
			placeholder="Enter blog content"
			rows="15"
		></textarea>
		<a class="btn btn-ghost ml-auto mt-2" href="#modal" @click="renderBlog()">Upload</a>
		<div id="modal" class="modal">
			<div class="modal-box">
				<h3 class="font-bold text-lg">Are you sure you want to upload this blog?</h3>
				<div
					class="
						prose
						max-w-none
						mt-2
						p-4
						rounded-lg
						shadow-lg
						border-t-2 border-l-4 border-neutral-focus
						prose-pre:p-3 prose-pre:rounded prose-pre:overflow-x-auto
						prose-a:text-primary prose-a:no-underline
						prose-img:inline prose-img:m-1
						prose-p:m-1
						prose-h1:my-2
						prose-h2:my-2
					"
					v-html="renderData"
				></div>
				<div class="modal-action">
					<a href="#" class="btn btn-success" @click="postBlog()">Confirm</a>
					<a href="#" class="btn btn-error">Cancel</a>
				</div>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import { useFetch } from '~/util';
import { defineComponent } from 'vue';
import { parseMarkdown } from '~/util';
import { useRouter } from 'vue-router';

export default defineComponent({
	data() {
		return {
			renderData: '',
			async postBlog() {
				await useFetch({
					route: `/blogs/create/${(document.getElementById('name') as HTMLInputElement)?.value}`,
					body: { content: (document.getElementById('content') as HTMLInputElement).value },
				});
				useRouter().push('/dash/view');
			},
			async renderBlog() {
				this.renderData = parseMarkdown(
					(document.getElementById('content') as HTMLInputElement).value,
				);
			},
		};
	},
});
</script>
