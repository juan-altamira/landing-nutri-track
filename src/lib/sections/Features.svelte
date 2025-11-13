<script lang="ts">
	import Section from '$lib/components/Section.svelte';
	import Card from '$lib/components/Card.svelte';
	import AnimatedElement from '$lib/components/AnimatedElement.svelte';
	
	const features = [
		{
			icon: `<svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/></svg>`,
			title: 'Panel inteligente 360°',
			description: 'Una vista instantánea de tu nutrición completa:',
			items: [
				'Proteínas, carbohidratos, grasas y calorías',
				'Vitaminas, minerales y micronutrientes clave',
				'Progreso diario frente a tus objetivos'
			],
			footer: 'Todo en un panel visual, entendible sin ser nutricionista.'
		},
		{
			icon: `<svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"/></svg>`,
			title: 'Plan personalizado según tu objetivo',
			description: 'Elegís tu meta y tus restricciones:',
			items: [
				'Ganar masa muscular',
				'Definir y reducir grasa corporal',
				'Mejorar salud metabólica',
				'Sostener buenos hábitos a largo plazo'
			],
			footer: 'Nutri-Track ajusta objetivos, alertas y sugerencias a tu realidad (vegano, keto, sin gluten, etc.).'
		},
		{
			icon: `<svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"/></svg>`,
			title: 'Alertas proactivas',
			description: 'Nutri-Track te avisa cuando detecta:',
			items: [
				'Déficits recurrentes de vitaminas o minerales',
				'Excesos constantes de azúcares o grasas',
				'Patrones que afectan tu rendimiento o descanso'
			],
			footer: 'No esperás a sentirte mal: corregís antes.'
		},
		{
			icon: `<svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/></svg>`,
			title: 'Catálogo verificado',
			description: 'Más de 5.000 alimentos y recetas:',
			items: [
				'Productos regionales y comidas reales',
				'Podés crear tus propias preparaciones',
				'Reutilizás sin perder precisión'
			],
			footer: 'Registrar tus comidas deja de ser un castigo y se vuelve una herramienta.'
		},
		{
			icon: `<svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg>`,
			title: 'Reportes semanales y mensuales',
			description: 'Todas las semanas y todos los meses, Nutri-Track te muestra:',
			items: [
				'Qué lograste',
				'Qué nutrición te está faltando',
				'Qué hábitos conviene reforzar o ajustar'
			],
			footer: 'Con lenguaje simple y gráficos claros para decidir sin adivinar.'
		},
		{
			icon: `<svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"/></svg>`,
			title: 'Soporte humano',
			description: 'Nunca estás solo:',
			items: [
				'Chat prioritario para resolver dudas',
				'Sesiones grupales mensuales con especialistas',
				'Ajustes personalizados de tu estrategia'
			],
			footer: 'Tecnología + acompañamiento, no un sistema frío.'
		}
	];
</script>

<Section>
	<AnimatedElement>
		<h2 class="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white text-center mb-4">
			Lo que recibís al usar Nutri-Track
		</h2>
		<p class="text-lg text-gray-600 dark:text-gray-400 text-center mb-12 max-w-2xl mx-auto">
			Cada funcionalidad está diseñada para que pases de la incertidumbre a la claridad total
		</p>
	</AnimatedElement>
	
	<div class="grid md:grid-cols-2 gap-6">
		{#each features as feature, i}
			<AnimatedElement delay={i * 50}>
				<Card hover={true} class="h-full">
					<div class="text-nutri-green mb-4">
						{@html feature.icon}
					</div>
					
					<h3 class="text-xl font-bold text-slate-900 dark:text-white mb-3">
						{feature.title}
					</h3>
					
					<p class="text-gray-700 dark:text-gray-300 mb-3">
						{feature.description}
					</p>
					
					<ul class="space-y-2 mb-4">
						{#each feature.items as item}
							<li class="flex items-start gap-2 text-gray-600 dark:text-gray-400 text-sm">
								<svg class="w-5 h-5 text-nutri-green flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
									<path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
								</svg>
								{item}
							</li>
						{/each}
					</ul>
					
					<p class="text-sm text-gray-500 dark:text-gray-400 italic border-t border-gray-100 dark:border-gray-700 pt-3">
						{feature.footer}
					</p>
				</Card>
			</AnimatedElement>
		{/each}
	</div>
</Section>
