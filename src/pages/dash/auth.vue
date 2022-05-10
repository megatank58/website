<template>
    <h1 class="text-5xl font-bold text-center mt-20">Loading...</h1>
</template>

<script lang="ts" setup>
import { useRouter } from "vue-router";
import { useFetch } from "~/util";

const token = await useFetch<string>({ route: `/auth/code=${useRouter().currentRoute.value.query.code}`, getString: true });

localStorage.setItem('token',  new URLSearchParams(token).get('access_token') ?? '');
</script>