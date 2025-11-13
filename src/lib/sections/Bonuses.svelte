<script lang="ts">
	import Section from '$lib/components/Section.svelte';
	import Card from '$lib/components/Card.svelte';
	import AnimatedElement from '$lib/components/AnimatedElement.svelte';
	
	const bonuses = [
		{
			emoji: '📘',
			title: 'Guía "Nutrición sin excusas"',
			description: '7 estrategias prácticas para ser constante aunque tu agenda esté llena.'
		},
		{
			emoji: '🥗',
			title: 'Recetario "Alta energía"',
			description: '30 recetas balanceadas pensadas para rendimiento, saciedad y sabor.'
		},
		{
			emoji: '🎥',
			title: 'Taller "Cómo planificar tu semana ideal"',
			description: 'Paso a paso para que organices tu alimentación sin vivir contando gramos.'
		}
	];
</script>

<Section bg="green">
	<AnimatedElement>
		<h2 class="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white text-center mb-4">
			Bonos de lanzamiento
		</h2>
		<p class="text-lg text-gray-700 dark:text-gray-300 text-center mb-12">
			Al activar Nutri-Track, desbloqueás además:
		</p>
	</AnimatedElement>
	
	<div class="grid md:grid-cols-3 gap-6">
		{#each bonuses as bonus, i}
			<AnimatedElement delay={i * 100}>
				<Card class="text-center h-full">
					<div class="text-5xl mb-4">{bonus.emoji}</div>
					<h3 class="text-lg font-bold text-slate-900 dark:text-white mb-2">
						{bonus.title}
					</h3>
					<p class="text-gray-600 dark:text-gray-400">
						{bonus.description}
					</p>
				</Card>
			</AnimatedElement>
		{/each}
	</div>
</Section>
