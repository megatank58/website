<template>
	<div class="navbar mb-2 shadow-xl text-base-content">
		<div class="px-2 mx-2 navbar-start">
			<router-link class="text-lg font-bold text-primary" to="/">Home</router-link>
		</div>
		<div class="hidden navbar-end lg:flex">
			<div class="flex items-stretch">
				<a href="https://git.io/megatank58" class="btn btn-ghost btn-sm rounded-btn normal-case">
					GitHub
				</a>
				<a
					class="btn btn-ghost btn-sm rounded-btn normal-case"
					href="https://twitter.com/Megatank58"
				>
					Twitter
				</a>
			</div>
			<div class="dropdown dropdown-end" title="Theme">
				<div tabindex="0" class="m-1 normal-case btn-ghost btn">
					<span class="hidden md:inline">Theme</span>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="inline-block w-4 h-4 ml-1 fill-current"
						viewBox="0 0 1792 1792"
					>
						<path
							d="M1395 736q0 13-10 23l-466 466q-10 10-23 10t-23-10l-466-466q-10-10-10-23t10-23l50-50q10-10 23-10t23 10l393 393 393-393q10-10 23-10t23 10l50 50q10 10 10 23z"
						/>
					</svg>
				</div>
				<div
					class="
						mt-16
						overflow-y-auto
						shadow-2xl
						top-px
						dropdown-content
						w-52
						rounded-b-box
						bg-base-200
						text-base-content
					"
				>
					<ul class="p-4 menu compact">
						<li v-for="(theme, index) in themes" :key="theme.name + index">
							<a tabindex="0" :data-set-theme="theme.id" data-act-class="active">{{
								theme.name
							}}</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
		<div class="lg:hidden navbar-end">
			<div class="dropdown dropdown-end">
				<label tabindex="0" class="m-1 btn"
					><svg
						xmlns="http://www.w3.org/2000/svg"
						xmlns:xlink="http://www.w3.org/1999/xlink"
						aria-hidden="true"
						role="img"
						class="iconify iconify--ci"
						width="32"
						height="32"
						preserveAspectRatio="xMidYMid meet"
						viewBox="0 0 24 24"
					>
						<path
							fill="currentColor"
							d="M21 18H3v-2h18v2Zm0-5H3v-2h18v2Zm0-5H3V6h18v2Z"
						></path></svg
				></label>
				<ul tabindex="0" class="p-2 shadow menu dropdown-content bg-base-100 rounded-box">
					<li>
						<a
							href="https://git.io/megatank58"
							class="btn btn-ghost btn-sm rounded-btn normal-case"
						>
							GitHub
						</a>
					</li>
					<li>
						<a
							class="btn btn-ghost btn-sm rounded-btn normal-case"
							href="https://twitter.com/Megatank58"
						>
							Twitter
						</a>
					</li>
					<li>
						<label class="swap">
							<input type="checkbox" />
							<a
								class="swap-on btn btn-ghost btn-sm rounded-btn normal-case"
								data-set-theme="light"
								data-act-class="active"
								>🌞</a
							>
							<a
								class="swap-off btn btn-ghost btn-sm rounded-btn normal-case"
								data-set-theme="forest"
								data-act-class="active"
								>🌙</a
							>
						</label>
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/runtime-core';
import { themeChange } from 'theme-change';
import { Ref, ref } from 'vue';
export default defineComponent({
	name: 'Navbar',
	setup() {
		const Visible: Ref<boolean> = ref<boolean>(false);
		const Toggle = () => {
			Visible.value = !Visible.value;
		};
		window.addEventListener('resize', () => {
			if (window.innerWidth > 768) {
				Visible.value = false;
			}
		});
		return {
			Visible: Visible,
			Toggle: Toggle,
		};
	},
	data() {
		return {
			scrolled: false,
			themes: [
				{ id: 'light', name: 'Light' },
				{ id: 'forest', name: 'Dark' },
			],
		};
	},
	mounted() {
		themeChange(false);
		window.document.onscroll = () => {
			let navBar = document.getElementById('nav');
			if (navBar && window.scrollY > navBar.offsetTop) {
				this.scrolled = true;
			} else {
				this.scrolled = false;
			}
		};
	},
	methods: {
		toggleNavClass() {
			if (this.scrolled == false) {
				return false;
			} else {
				return true;
			}
		},
	},
});
</script>
