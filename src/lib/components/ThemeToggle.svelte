<script lang="ts">
	import { onMount } from 'svelte';
	
	let isDark = $state(false);
	
	onMount(() => {
		// Initialize from localStorage or system preference
		const saved = localStorage.getItem('theme');
		if (saved === 'dark') {
			isDark = true;
			document.documentElement.classList.add('dark');
		} else if (saved === 'light') {
			isDark = false;
			document.documentElement.classList.remove('dark');
		} else {
			// No saved preference, check system
			isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
			if (isDark) {
				document.documentElement.classList.add('dark');
			}
		}
	});
	
	function toggleTheme() {
		isDark = !isDark;
		
		if (isDark) {
			document.documentElement.classList.add('dark');
			localStorage.setItem('theme', 'dark');
		} else {
			document.documentElement.classList.remove('dark');
			localStorage.setItem('theme', 'light');
		}
	}
</script>

<button
	onclick={toggleTheme}
	class="fixed top-6 right-6 z-50 p-3 rounded-full bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 shadow-lg hover:scale-110 transition-all duration-300"
	aria-label="Toggle dark mode"
	type="button"
>
	{#if isDark}
		<!-- Sun icon -->
		<svg class="w-6 h-6 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
			<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"/>
		</svg>
	{:else}
		<!-- Moon icon -->
		<svg class="w-6 h-6 text-slate-700 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
			<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"/>
		</svg>
	{/if}
</button>
