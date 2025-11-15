<script lang="ts">
	import Section from '$lib/components/Section.svelte';
	import Button from '$lib/components/Button.svelte';
	import AnimatedElement from '$lib/components/AnimatedElement.svelte';
	
	const features = [
		'Panel inteligente 360° completo',
		'Plan personalizado según tu objetivo',
		'Alertas proactivas de déficits y excesos',
		'Catálogo verificado + tus propios alimentos',
		'Reportes semanales y mensuales',
		'Soporte prioritario + sesiones grupales',
		'Bonos de lanzamiento incluidos'
	];
</script>

<Section>
	<AnimatedElement>
		<h2 class="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white text-center mb-4">
			Elegí cómo empezar
		</h2>
		<p class="text-lg text-gray-600 dark:text-gray-400 text-center mb-12">
			Sin cargos ocultos. Sin permanencia obligatoria.
		</p>
	</AnimatedElement>
	
	<AnimatedElement delay={200}>
		<div class="max-w-md mx-auto">
			<div class="bg-white dark:bg-gray-800 rounded-3xl border-2 border-nutri-green shadow-xl p-8">
				<div class="text-center mb-6">
					<p class="text-sm text-gray-600 dark:text-gray-400 mb-2">Plan Mensual</p>
					<div class="flex items-baseline justify-center gap-2">
						<span class="text-5xl font-bold text-slate-900 dark:text-white">USD 9,90</span>
						<span class="text-gray-600 dark:text-gray-400">/mes</span>
					</div>
					<p class="text-sm text-gray-500 dark:text-gray-400 mt-2">o ARS 9.900</p>
				</div>
				
				<ul class="space-y-3 mb-8">
					{#each features as feature}
						<li class="flex items-start gap-3">
							<svg class="w-5 h-5 text-nutri-green flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
								<path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
							</svg>
							<span class="text-gray-700 dark:text-gray-300">{feature}</span>
						</li>
					{/each}
				</ul>
				
				<Button href="https://www.nutri-track.pro/signup" class="w-full justify-center">
					Empezar mi prueba gratuita de 14 días
				</Button>
				
				<p class="text-sm text-gray-500 dark:text-gray-400 text-center mt-4">
					Sin cargos ocultos. Cancelás cuando quieras.
				</p>
			</div>
		</div>
	</AnimatedElement>
</Section>
