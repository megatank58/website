<template>
    <div class="hero min-h-screen bg-base-200">
        <div class="hero-content text-center">
            <div class="max-w-md">
                <h1 class="text-4xl font-bold">Logged in successfully!</h1>
                <a
                    href="/dash"
                    class="btn btn-primary my-2"
                >Dashboard</a>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { useRouter } from "vue-router";
import { useFetch } from "~/util";

const token = await useFetch<string>({ route: `/auth/${useRouter().currentRoute.value.query.code}`, getString: true });

localStorage.setItem('token',  new URLSearchParams(token).get('access_token') ?? '');
</script>