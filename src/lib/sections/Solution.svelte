<script lang="ts">
	import Section from '$lib/components/Section.svelte';
	import AnimatedElement from '$lib/components/AnimatedElement.svelte';
</script>

<Section>
	<div class="grid md:grid-cols-2 gap-12 items-start">
		<AnimatedElement>
			<h2 class="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6">
				Nutri-Track es tu asistente nutricional inteligente
			</h2>
			
			<div class="space-y-4 text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
				<p>
					<span class="font-semibold text-slate-900 dark:text-white">No es una app más de calorías:</span> Nutri-Track registra, analiza y optimiza cada alimento que consumís, desde los macronutrientes hasta los micronutrientes más específicos.
				</p>
				
				<p>
					Te muestra qué estás haciendo bien, qué te falta y qué te está frenando.
				</p>
				
				<ul class="space-y-3 mt-6">
					<li class="flex items-start gap-3">
						<svg class="w-6 h-6 text-nutri-green flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
							<path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
						</svg>
						<span>Te muestra qué estás haciendo bien</span>
					</li>
					<li class="flex items-start gap-3">
						<svg class="w-6 h-6 text-nutri-green flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
							<path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
						</svg>
						<span>Te marca qué nutrientes te faltan o te sobran</span>
					</li>
					<li class="flex items-start gap-3">
						<svg class="w-6 h-6 text-nutri-green flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
							<path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
						</svg>
						<span>Traduce los datos en acciones simples para hoy, mañana y la semana</span>
					</li>
				</ul>
			</div>
		</AnimatedElement>
		
		<div class="flex justify-center items-start">
			<AnimatedElement delay={200}>
				<div class="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-lg p-8 w-full max-w-md">
					<div class="space-y-6">
					<div class="flex items-center gap-4">
						<div class="w-12 h-12 bg-nutri-green-light rounded-full flex items-center justify-center flex-shrink-0">
							<span class="text-nutri-green font-bold">1</span>
						</div>
						<div>
							<p class="font-semibold text-slate-900 dark:text-white">Registrás lo que comés</p>
							<p class="text-sm text-gray-600 dark:text-gray-400">En segundos, sin complicaciones</p>
						</div>
					</div>
					
					<div class="flex items-center justify-center">
						<svg class="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"/>
						</svg>
					</div>
					
					<div class="flex items-center gap-4">
						<div class="w-12 h-12 bg-nutri-green-light rounded-full flex items-center justify-center flex-shrink-0">
							<span class="text-nutri-green font-bold">2</span>
						</div>
						<div>
							<p class="font-semibold text-slate-900 dark:text-white">Nutri-Track analiza</p>
							<p class="text-sm text-gray-600 dark:text-gray-400">Macros, micros y patrones</p>
						</div>
					</div>
					
					<div class="flex items-center justify-center">
						<svg class="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"/>
						</svg>
					</div>
					
					<div class="flex items-center gap-4">
						<div class="w-12 h-12 bg-nutri-green rounded-full flex items-center justify-center flex-shrink-0">
							<span class="text-white font-bold">3</span>
						</div>
						<div>
							<p class="font-semibold text-slate-900 dark:text-white">Vos decidís qué ajustar</p>
							<p class="text-sm text-gray-600 dark:text-gray-400">Con claridad y datos reales</p>
						</div>
					</div>
				</div>
			</div>
			</AnimatedElement>
		</div>
	</div>
</Section>
