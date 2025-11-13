<script lang="ts">
	interface Props {
		href?: string;
		variant?: 'primary' | 'secondary' | 'white';
		size?: 'sm' | 'md' | 'lg';
		class?: string;
		children: any;
	}
	
	let { href, variant = 'primary', size = 'lg', class: className = '', children }: Props = $props();
	
	const baseClasses = 'inline-flex items-center justify-center font-bold rounded-2xl transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-nutri-green/50 shadow-lg';
	
	const variantClasses = {
		primary: 'bg-nutri-green text-white hover:bg-green-600 hover:scale-105 hover:shadow-2xl',
		secondary: 'bg-white dark:bg-gray-800 text-nutri-green border-2 border-nutri-green hover:bg-nutri-green-light dark:hover:bg-gray-700 hover:scale-105',
		white: 'bg-white text-nutri-green hover:bg-gray-50 hover:scale-105 hover:shadow-2xl'
	};
	
	const sizeClasses = {
		sm: 'px-5 py-3 text-base',
		md: 'px-8 py-4 text-lg',
		lg: 'px-10 py-5 text-xl'
	};
	
	const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;
</script>

{#if href}
	<a {href} class={classes}>
		{@render children()}
	</a>
{:else}
	<button class={classes}>
		{@render children()}
	</button>
{/if}
