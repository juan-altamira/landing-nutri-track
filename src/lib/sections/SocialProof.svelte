<script lang="ts">
	import AnimatedElement from '$lib/components/AnimatedElement.svelte';
</script>

<section class="bg-white dark:bg-gray-900 py-8 md:py-12 border-y border-gray-200 dark:border-gray-700 transition-colors duration-300">
	<div class="max-w-content mx-auto px-6 md:px-8">
		<AnimatedElement>
			<p class="text-center text-sm md:text-base text-gray-600 dark:text-gray-400 mb-6">
				Más de <span class="font-semibold text-gray-900 dark:text-white">4.700 personas</span> y <span class="font-semibold text-gray-900 dark:text-white">18 equipos profesionales</span> ya usan Nutri-Track
			</p>
			
			<div class="flex flex-wrap justify-center items-center gap-8 md:gap-12">
				{#each ['Team Endurance', 'Clínica Vital', 'Entrená Mejor', 'Sport Wellness', 'FitLife'] as brand}
					<div class="text-gray-600 dark:text-gray-400 font-semibold text-sm md:text-base">
						{brand}
					</div>
				{/each}
			</div>
		</AnimatedElement>
	</div>
</section>
