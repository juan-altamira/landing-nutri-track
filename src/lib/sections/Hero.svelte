<script lang="ts">
	import Button from '$lib/components/Button.svelte';
	import AnimatedElement from '$lib/components/AnimatedElement.svelte';
</script>

<section class="bg-gray-50 dark:bg-gray-900 py-20 md:py-24 transition-colors duration-300">
	<div class="max-w-content mx-auto px-6 md:px-8">
		<div class="grid md:grid-cols-2 gap-12 items-center">
			<!-- Columna izquierda - Texto -->
			<div class="space-y-6">
				<AnimatedElement>
					<p class="text-xs uppercase tracking-wide text-nutri-green font-semibold">
						PLATAFORMA NUTRICIONAL INTELIGENTE
					</p>
				</AnimatedElement>
				
				<AnimatedElement delay={100}>
					<h1 class="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white leading-tight">
						Nutri-Track
					</h1>
					<p class="text-2xl md:text-3xl text-slate-700 dark:text-gray-300 mt-2">
						La primera plataforma que convierte tu alimentación en resultados medibles.
					</p>
				</AnimatedElement>
				
				<AnimatedElement delay={200}>
					<p class="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
						Pasás de "creo que como bien" a "sé exactamente qué ajustar" para tener más energía, rendir mejor y ver cambios reales en menos de 30 días.
					</p>
				</AnimatedElement>
				
				<AnimatedElement delay={300}>
					<ul class="space-y-3">
						<li class="flex items-start gap-3">
							<svg class="w-6 h-6 text-nutri-green flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
								<path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
							</svg>
							<span class="text-gray-700 dark:text-gray-300">Seguimiento ultra detallado de cada nutriente</span>
						</li>
						<li class="flex items-start gap-3">
							<svg class="w-6 h-6 text-nutri-green flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
								<path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
							</svg>
							<span class="text-gray-700 dark:text-gray-300">Cambios visibles en menos de 30 días</span>
						</li>
						<li class="flex items-start gap-3">
							<svg class="w-6 h-6 text-nutri-green flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
								<path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
							</svg>
							<span class="text-gray-700 dark:text-gray-300">Claridad total sobre qué comer cada día</span>
						</li>
					</ul>
				</AnimatedElement>
				
				<AnimatedElement delay={400}>
					<div class="pt-4">
						<Button href="https://www.nutri-track.pro">
							Empezar mi prueba gratuita de 14 días
						</Button>
						<p class="text-sm text-gray-500 dark:text-gray-400 mt-3">Cancelás cuando quieras. Sin compromiso.</p>
					</div>
				</AnimatedElement>
			</div>
			
			<!-- Columna derecha - Visual -->
			<AnimatedElement delay={300} class="relative">
				<div class="bg-white dark:bg-gray-800 rounded-3xl shadow-xl border border-gray-200 dark:border-gray-700 p-8 relative">
					<!-- Badge flotante -->
					<div class="absolute -top-4 -right-4 bg-nutri-green text-white px-4 py-2 rounded-xl shadow-lg text-sm font-semibold">
						4.700+ usuarios activos
					</div>
					
					<!-- Mockup Dashboard -->
					<div class="space-y-4">
						<div class="flex items-center justify-between">
							<div>
								<p class="text-xs text-gray-500 uppercase tracking-wide">Panel de hoy</p>
								<p class="text-2xl font-bold text-slate-900 dark:text-white">Nutri-Track</p>
							</div>
							<div class="w-12 h-12 bg-nutri-green-light rounded-full flex items-center justify-center">
								<svg class="w-6 h-6 text-nutri-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
								</svg>
							</div>
						</div>
						
						<div class="grid grid-cols-2 gap-3">
							<div class="bg-gray-50 rounded-xl p-4">
								<p class="text-xs text-gray-500">Proteínas</p>
								<p class="text-xl font-bold text-nutri-green">125g</p>
								<div class="w-full bg-gray-200 rounded-full h-2 mt-2">
									<div class="bg-nutri-green h-2 rounded-full" style="width: 83%"></div>
								</div>
							</div>
							<div class="bg-gray-50 rounded-xl p-4">
								<p class="text-xs text-gray-500">Calorías</p>
								<p class="text-xl font-bold text-nutri-green">1,840</p>
								<div class="w-full bg-gray-200 rounded-full h-2 mt-2">
									<div class="bg-nutri-green h-2 rounded-full" style="width: 92%"></div>
								</div>
							</div>
						</div>
						
						<div class="bg-nutri-green-light rounded-xl p-4">
							<div class="flex items-center gap-2">
								<svg class="w-5 h-5 text-nutri-green" fill="currentColor" viewBox="0 0 20 20">
									<path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"/>
								</svg>
								<p class="text-sm text-gray-700 font-medium">Vas muy bien con tus objetivos</p>
							</div>
						</div>
					</div>
				</div>
			</AnimatedElement>
		</div>
	</div>
</section>
