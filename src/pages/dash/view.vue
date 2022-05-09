<template>
    <div class="flex items-center flex-col px-4 bg-base-200">
        <div v-for="(blog, index) in blogs" :key="blog + '_' + index" class="w-3/4 m-4">
            <router-link
                :to="'/dash/edit/' + blog.name"
                class="font-sans text-base-content"
            >
                <div class="card bg-base-300" :id="blog.name">
                    <div class="card-body">
                        <h2 class="card-title">
                            {{ blog.name }}
                            <button
                                v-on:click="deleteBlog(blog.name)"
                                class="ml-auto badge badge-error rounded"
                            >X</button>
                        </h2>

                        <div
                            class="prose prose-pre:text-neutral-content prose-pre:p-3 prose-pre:rounded prose-pre:overflow-x-auto max-w-none prose-a:text-primary prose-a:no-underline prose-img:inline prose-img:m-1 prose-p:m-1 prose-h1:border-border prose-h1:border-b prose-h1:mt-1 prose-h1:text-bold prose-h2:border-b prose-h2:mt-1 prose-h2:text-bold prose-h2:border-solid prose-h2:border-border"
                            v-html="blog.header"
                        ></div>
                    </div>
                </div>
            </router-link>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { Blog } from '~/types/Blog';
import { parseMarkdown, trim, useFetch } from '~/util';

export default defineComponent({
    data() {
        return {
            blogs: new Array<Blog>(),
            async deleteBlog(name: string) {
                useFetch(`/blogs/${name}/delete`, true)
                document.getElementById(name)?.parentNode?.removeChild(document.getElementById(name)!)
            }
        };
    },
    async created() {
        await this.getBlogs();
    },
    methods: {
        async getBlogs() {
            const data = await useFetch<Blog[]>('/blogs');
            const blogs = new Array<Blog>();
            for (const blog of data) {
                blogs.push({
                    name: blog.name,
                    header: parseMarkdown(trim(blog.content ?? '', 256)),
                });
            }
            this.blogs = blogs.reverse();
        },
    },
});
</script>
