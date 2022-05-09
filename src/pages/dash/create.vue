<template>
    <div class="grid grid-cols-1 mt-4 px-4">
        <h1 class="font-bold text-2xl mx-auto">Write a new blog</h1>
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
        <a class="btn btn-success ml-auto mt-2" href="#modal" @click="postBlog()">Upload</a>
        <div id="modal" class="modal">
            <div class="modal-box">
                <h3 class="font-bold text-lg">Blog uploaded successfully!</h3>
                <p class="py-4">Continue writing more blogs...</p>
                <div class="modal-action">
                    <a href="#" class="btn">Cool!</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { useFetch } from "~/util";
import { defineComponent } from 'vue';

export default defineComponent({
    data() {
        return {
            async postBlog() {
                console.log(await useFetch(`/blogs/${(document.getElementById("name") as HTMLInputElement)?.value}/create`, { content: (document.getElementById("content") as HTMLInputElement).value }));
            }
        }
    }
})
</script>
