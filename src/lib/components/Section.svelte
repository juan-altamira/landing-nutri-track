<script lang="ts">
	interface Props {
		id?: string;
		class?: string;
		bg?: 'white' | 'gray' | 'green' | 'green-dark';
		children: any;
	}
	
	let { id, class: className = '', bg = 'white', children }: Props = $props();
	
	const bgClasses = {
		white: 'bg-white dark:bg-gray-900',
		gray: 'bg-gray-50 dark:bg-gray-800',
		green: 'bg-nutri-green-light dark:bg-gray-800',
		'green-dark': 'bg-nutri-green-dark text-white'
	};
</script>

<section {id} class="py-16 md:py-20 {bgClasses[bg]} {className}">
	<div class="max-w-content mx-auto px-6 md:px-8">
		{@render children()}
	</div>
</section>
