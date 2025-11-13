<script lang="ts">
	interface Props {
		class?: string;
		hover?: boolean;
		children: any;
	}
	
	let { class: className = '', hover = false, children }: Props = $props();
	
	const hoverClass = hover ? 'hover:-translate-y-1 hover:shadow-md hover:border-green-100 transition-all duration-300' : '';
</script>

<div class="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-sm p-6 {hoverClass} {className}">
	{@render children()}
</div>
