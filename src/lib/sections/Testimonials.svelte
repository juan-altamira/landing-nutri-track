<script lang="ts">
	import Section from '$lib/components/Section.svelte';
	import Card from '$lib/components/Card.svelte';
	import AnimatedElement from '$lib/components/AnimatedElement.svelte';
	
	const testimonials = [
		{
			quote: 'Nutri-Track me demostró que las vitaminas importan tanto como los macros. En 2 meses levanté mis defensas y volví a entrenar sin problemas.',
			author: 'Belén R.',
			role: 'Crossfitter'
		},
		{
			quote: 'Mi consulta dejó de ser solo terapia: ahora puedo seguir el progreso de mis pacientes en tiempo real y ajustar con datos, no con intuición.',
			author: 'Dr. Agustín P.',
			role: 'Médico nutrólogo'
		}
	];
	
	const stats = [
		{ number: '73%', text: 'reporta más energía sostenida en los primeros 21 días' },
		{ number: '61%', text: 'reduce antojos nocturnos en el primer mes' },
		{ number: '88%', text: 'mantiene el seguimiento activo después de 90 días' }
	];
</script>

<Section bg="gray">
	<AnimatedElement>
		<h2 class="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white text-center mb-12">
			Lo que dicen quienes ya usan Nutri-Track
		</h2>
	</AnimatedElement>
	
	<div class="grid md:grid-cols-2 gap-6 mb-12">
		{#each testimonials as testimonial, i}
			<AnimatedElement delay={i * 100}>
				<Card hover={true} class="h-full">
					<div class="flex mb-3">
						{#each [1,2,3,4,5] as star}
							<svg class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
								<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
							</svg>
						{/each}
					</div>
					
					<p class="text-gray-700 dark:text-gray-300 mb-4 italic">
						"{testimonial.quote}"
					</p>
					
					<div class="border-t border-gray-200 dark:border-gray-700 pt-4">
						<p class="font-semibold text-slate-900 dark:text-white">{testimonial.author}</p>
						<p class="text-sm text-gray-600 dark:text-gray-400">{testimonial.role}</p>
					</div>
				</Card>
			</AnimatedElement>
		{/each}
	</div>
	
	<AnimatedElement delay={200}>
		<h3 class="text-2xl font-bold text-slate-900 dark:text-white text-center mb-8">
			Resultados medidos dentro de la plataforma
		</h3>
	</AnimatedElement>
	
	<div class="grid md:grid-cols-3 gap-6">
		{#each stats as stat, i}
			<AnimatedElement delay={300 + (i * 100)}>
				<Card class="text-center">
					<p class="text-4xl md:text-5xl font-bold text-nutri-green mb-2">
						{stat.number}
					</p>
					<p class="text-gray-700 dark:text-gray-300">
						{stat.text}
					</p>
				</Card>
			</AnimatedElement>
		{/each}
	</div>
</Section>
