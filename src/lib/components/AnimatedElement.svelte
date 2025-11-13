<script lang="ts">
	import { onMount } from 'svelte';
	
	interface Props {
		delay?: number;
		class?: string;
		children: any;
	}
	
	let { delay = 0, class: className = '', children }: Props = $props();
	
	let element: HTMLDivElement;
	let isVisible = $state(false);
	
	onMount(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						setTimeout(() => {
							isVisible = true;
						}, delay);
						observer.unobserve(entry.target);
					}
				});
			},
			{ threshold: 0.1 }
		);
		
		observer.observe(element);
		
		return () => observer.disconnect();
	});
</script>

<div
	bind:this={element}
	class="transition-all duration-700 {isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'} {className}"
>
	{@render children()}
</div>
